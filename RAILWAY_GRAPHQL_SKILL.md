# Railway GraphQL API Deployment Skill

## Overview
Deploy applications to Railway using the GraphQL API instead of the CLI. This approach is useful for CI/CD pipelines and programmatic deployments.

## Configuration
Required environment variables in `.env`:
- `RAILWAY_TOKEN`: Personal API token from Railway dashboard
- `RAILWAY_PROJECT_ID`: Project ID from Railway project settings

## GraphQL API Endpoints

### Get Project Details
Query project information, services, and environment variables:
```graphql
query {
  project(id: "PROJECT_ID") {
    id
    name
    services {
      edges {
        node {
          id
          name
          deployments {
            edges {
              node {
                id
                status
                createdAt
              }
            }
          }
        }
      }
    }
  }
}
```

### Create a Service
Create a new service in your project:
```graphql
mutation {
  serviceCreate(input: {
    projectId: "PROJECT_ID"
    name: "service-name"
  }) {
    service {
      id
      name
    }
  }
}
```

### Get Deployment Status
Monitor active deployments:
```graphql
query {
  deployments(first: 10, input: {projectId: "PROJECT_ID"}) {
    edges {
      node {
        id
        status
        service {
          name
        }
        createdAt
      }
    }
  }
}
```

### Update Service Environment Variables
Set environment variables for deployment:
```graphql
mutation {
  variableCreate(input: {
    projectId: "PROJECT_ID"
    environmentId: "ENVIRONMENT_ID"
    name: "VARIABLE_NAME"
    value: "value"
  }) {
    variable {
      id
      name
    }
  }
}
```

## API Request Format
All requests use HTTP POST to `https://api.railway.app/graphql` with headers:
```
Authorization: Bearer YOUR_RAILWAY_TOKEN
Content-Type: application/json
```

## Python Helper Function
```python
import json
import urllib.request

def railway_graphql(query, token, variables=None):
    """Execute a GraphQL query against Railway API"""
    payload = {"query": query}
    if variables:
        payload["variables"] = variables
    
    req = urllib.request.Request(
        'https://api.railway.app/graphql',
        data=json.dumps(payload).encode('utf-8'),
        headers={
            'Authorization': f'Bearer {token}',
            'Content-Type': 'application/json'
        }
    )
    
    with urllib.request.urlopen(req) as response:
        return json.loads(response.read().decode('utf-8'))
```

## Bash Helper Function
```bash
railway_graphql_query() {
    local query="$1"
    local token="$2"
    
    curl -s -X POST https://api.railway.app/graphql \
        -H "Authorization: Bearer $token" \
        -H "Content-Type: application/json" \
        -d "$(printf '%s' "{\"query\":$(printf %s "$query" | python3 -c 'import json, sys; print(json.dumps(sys.stdin.read()))}')})"
}
```

## Common Workflow

### 1. Authenticate
```bash
RAILWAY_TOKEN=$(grep '^RAILWAY_TOKEN=' .env | cut -d= -f2-)
PROJECT_ID=$(grep '^RAILWAY_PROJECT_ID=' .env | cut -d= -f2-)
```

### 2. Check Project Status
Use the `railway_graphql_query` to fetch current deployments

### 3. Deploy via GitHub Integration
Connect your GitHub repo to Railway for automatic deployments on push, or use this API to trigger deployments programmatically.

### 4. Monitor Deployment
Poll the deployments query to check status.

## Deployment Script Location
See `scripts/railway-deploy.sh` for a complete working example.

## References
- [Railway GraphQL API Docs](https://docs.railway.app/reference)
- [Railway API Explorer](https://api.railway.app/)
