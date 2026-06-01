#!/bin/bash
# Railway GraphQL API deployment script

set -e

RAILWAY_TOKEN="${1:-}"
RAILWAY_PROJECT_ID="${2:-}"
GITHUB_REPO="${3:-pantetomaso/mgw}"

if [ -z "$RAILWAY_TOKEN" ] || [ -z "$RAILWAY_PROJECT_ID" ]; then
  echo "Usage: $0 <RAILWAY_TOKEN> <PROJECT_ID> [GITHUB_REPO]"
  exit 1
fi

echo "Deploying to Railway using GraphQL API..."
echo "Project ID: $RAILWAY_PROJECT_ID"
echo "Repo: $GITHUB_REPO"

# Query project details using Python to handle JSON properly
echo "Fetching project details..."
PROJECT_RESPONSE=$(python3 - <<'PYTHON'
import json
import urllib.request
import os

token = os.environ.get('RAILWAY_TOKEN')
project_id = os.environ.get('RAILWAY_PROJECT_ID')

query = {
    "query": """
    query {
      project(id: "%s") {
        id
        name
        services {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    }
    """ % project_id
}

req = urllib.request.Request(
    'https://api.railway.app/graphql',
    data=json.dumps(query).encode('utf-8'),
    headers={
        'Authorization': f'Bearer {token}',
        'Content-Type': 'application/json'
    }
)

try:
    with urllib.request.urlopen(req) as response:
        data = response.read().decode('utf-8')
        print(data)
except Exception as e:
    print(json.dumps({"error": str(e)}))
PYTHON
)

echo "Project Response:"
echo "$PROJECT_RESPONSE" | python3 -m json.tool 2>/dev/null || echo "$PROJECT_RESPONSE"

# Extract service ID if it exists
SERVICE_ID=$(echo "$PROJECT_RESPONSE" | python3 -c "
import json,sys
try:
  data = json.load(sys.stdin)
  services = data.get('data', {}).get('project', {}).get('services', {}).get('edges', [])
  if services:
    print(services[0]['node']['id'])
except:
  pass
" 2>/dev/null)

if [ -z "$SERVICE_ID" ]; then
  echo "Creating new service..."
  
  SERVICE_RESPONSE=$(python3 - <<'PYTHON'
import json
import urllib.request
import os

token = os.environ.get('RAILWAY_TOKEN')
project_id = os.environ.get('RAILWAY_PROJECT_ID')

mutation = {
    "query": """
    mutation {
      serviceCreate(input: {
        projectId: "%s"
        name: "mgw"
      }) {
        service {
          id
          name
        }
      }
    }
    """ % project_id
}

req = urllib.request.Request(
    'https://api.railway.app/graphql',
    data=json.dumps(mutation).encode('utf-8'),
    headers={
        'Authorization': f'Bearer {token}',
        'Content-Type': 'application/json'
    }
)

try:
    with urllib.request.urlopen(req) as response:
        data = response.read().decode('utf-8')
        print(data)
except Exception as e:
    print(json.dumps({"error": str(e)}))
PYTHON
)
  
  SERVICE_ID=$(echo "$SERVICE_RESPONSE" | python3 -c "
import json,sys
try:
  data = json.load(sys.stdin)
  print(data.get('data', {}).get('serviceCreate', {}).get('service', {}).get('id', ''))
except:
  pass
" 2>/dev/null)
  
  echo "Created service: $SERVICE_ID"
fi

echo "✅ Railway deployment setup complete!"
echo "Service ID: $SERVICE_ID"
echo "Project ID: $RAILWAY_PROJECT_ID"
echo ""
echo "Next steps:"
echo "1. Connect your GitHub repository to Railway"
echo "2. Enable automatic deployments on push"
echo "3. Monitor deployments at: https://railway.app/project/$RAILWAY_PROJECT_ID"
