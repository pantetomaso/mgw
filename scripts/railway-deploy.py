#!/usr/bin/env python3
"""Railway GraphQL API helper for the Marseille Good Waves project.

Reads RAILWAY_TOKEN (a Railway account token) and RAILWAY_PROJECT_ID from .env
and talks to the Railway public GraphQL API.

Endpoint: https://backboard.railway.com/graphql/v2
Auth:     Authorization: Bearer <RAILWAY_TOKEN>

Usage:
    python3 scripts/railway-deploy.py        # print account + project status

To actually ship code, use ./scripts/deploy.sh (wraps the Railway CLI `up`).
"""

import json
import os
import sys
import urllib.error
import urllib.request

API_URL = "https://backboard.railway.com/graphql/v2"


def load_env(path=".env"):
    env = {}
    if os.path.exists(path):
        with open(path) as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    key, value = line.split("=", 1)
                    env[key.strip()] = value.strip()
    return env


def gql(token, query, variables=None):
    payload = {"query": query}
    if variables:
        payload["variables"] = variables
    req = urllib.request.Request(
        API_URL,
        data=json.dumps(payload).encode("utf-8"),
        headers={
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json",
            # Railway's API sits behind Cloudflare, which blocks the default
            # "Python-urllib" User-Agent (HTTP 403, error 1010). Send a normal one.
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
            "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
    )
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            return json.loads(resp.read().decode("utf-8"))
    except urllib.error.HTTPError as exc:
        return {"errors": [{"message": f"HTTP {exc.code}: {exc.read().decode('utf-8')[:300]}"}]}
    except Exception as exc:  # noqa: BLE001
        return {"errors": [{"message": f"{type(exc).__name__}: {exc}"}]}


ME_QUERY = "query { me { id email name } }"

PROJECT_QUERY = """
query ($id: String!) {
  project(id: $id) {
    id
    name
    environments { edges { node { id name } } }
    services {
      edges {
        node {
          id
          name
          deployments(first: 1) {
            edges { node { id status staticUrl createdAt } }
          }
        }
      }
    }
  }
}
"""


def main():
    env = {**load_env(), **os.environ}
    token = env.get("RAILWAY_TOKEN")
    project_id = env.get("RAILWAY_PROJECT_ID")

    if not token or not project_id:
        print("❌ Missing RAILWAY_TOKEN or RAILWAY_PROJECT_ID — set them in .env")
        sys.exit(1)

    print(f"📡 {API_URL}")

    me = gql(token, ME_QUERY)
    if "errors" in me:
        print("❌ Auth failed:", me["errors"][0]["message"])
        sys.exit(1)
    print(f"✅ Authenticated as {me['data']['me']['email']}")

    result = gql(token, PROJECT_QUERY, {"id": project_id})
    if "errors" in result:
        print("❌ Project query failed:", result["errors"][0]["message"])
        sys.exit(1)

    project = result["data"]["project"]
    print(f"\n📦 Project: {project['name']}  ({project['id']})")

    envs = [e["node"]["name"] for e in project["environments"]["edges"]]
    print("   Environments:", ", ".join(envs) or "none")

    print("   Services:")
    for edge in project["services"]["edges"]:
        svc = edge["node"]
        deploys = svc["deployments"]["edges"]
        if deploys:
            d = deploys[0]["node"]
            url = d.get("staticUrl") or "—"
            print(f"     • {svc['name']}: {d['status']}  {url}")
        else:
            print(f"     • {svc['name']}: no deployments yet")

    print("\nDeploy the current working tree with:  ./scripts/deploy.sh")


if __name__ == "__main__":
    main()
