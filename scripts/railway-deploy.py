#!/usr/bin/env python3
"""
Railway Deployment Configuration Script
Configures MGW application on Railway.app
"""

import json
import urllib.request
import urllib.error
import sys
import os
from datetime import datetime

class RailwayDeployer:
    def __init__(self, token, project_id):
        self.token = token
        self.project_id = project_id
        self.api_url = "https://api.railway.app/graphql"
        self.headers = {
            'Authorization': f'Bearer {self.token}',
            'Content-Type': 'application/json'
        }
    
    def query(self, query_str, variables=None):
        """Execute a GraphQL query"""
        payload = {
            "query": query_str
        }
        if variables:
            payload["variables"] = variables
        
        try:
            req = urllib.request.Request(
                self.api_url,
                data=json.dumps(payload).encode('utf-8'),
                headers=self.headers
            )
            
            with urllib.request.urlopen(req, timeout=10) as response:
                return json.loads(response.read().decode('utf-8'))
        except urllib.error.HTTPError as e:
            error_body = e.read().decode('utf-8')
            return {
                'error': f'HTTP {e.code}',
                'details': error_body[:200],
                'status': e.code
            }
        except Exception as e:
            return {
                'error': str(type(e).__name__),
                'details': str(e)[:200]
            }
    
    def get_project(self):
        """Get project details"""
        query = f'''
        query {{
          project(id: "{self.project_id}") {{
            id
            name
            services {{
              edges {{
                node {{
                  id
                  name
                  status
                }}
              }}
            }}
          }}
        }}
        '''
        return self.query(query)
    
    def get_deployments(self):
        """Get recent deployments"""
        query = f'''
        query {{
          deployments(first: 5, input: {{projectId: "{self.project_id}"}}) {{
            edges {{
              node {{
                id
                status
                createdAt
                service {{
                  name
                }}
              }}
            }}
          }}
        }}
        '''
        return self.query(query)
    
    def create_service(self, name, source="github"):
        """Create a new service"""
        query = f'''
        mutation {{
          serviceCreate(input: {{
            projectId: "{self.project_id}"
            name: "{name}"
            source: {{"provider": "{source}"}}
          }}) {{
            service {{
              id
              name
            }}
          }}
        }}
        '''
        return self.query(query)

def main():
    print("🚀 Railway Deployment Configuration")
    print("=" * 50)
    print()
    
    # Load environment
    env_file = '.env'
    if not os.path.exists(env_file):
        print("❌ .env file not found")
        sys.exit(1)
    
    tokens = {}
    with open(env_file, 'r') as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith('#'):
                key, value = line.split('=', 1)
                tokens[key] = value
    
    if 'RAILWAY_TOKEN' not in tokens or 'RAILWAY_PROJECT_ID' not in tokens:
        print("❌ Missing RAILWAY_TOKEN or RAILWAY_PROJECT_ID in .env")
        sys.exit(1)
    
    project_id = tokens['RAILWAY_PROJECT_ID']
    token = tokens['RAILWAY_TOKEN']
    
    print(f"Token: {token[:20]}...")
    print(f"Project ID: {project_id}")
    print()
    
    # Initialize deployer
    deployer = RailwayDeployer(token, project_id)
    
    # Test connection
    print("📡 Testing API connection...")
    result = deployer.get_project()
    
    if 'error' in result:
        print(f"❌ API Error: {result['error']}")
        if result['status'] == 404:
            print("   → Endpoint not found or token invalid")
        print(f"   Details: {result.get('details', 'N/A')}")
        print()
        print("⚠️  API connection failed. Manual setup required:")
        print("   1. Go to https://railway.app/dashboard")
        print("   2. Create/select project")
        print("   3. Connect GitHub repo: pantetomaso/mgw")
        print("   4. Add environment variables")
        print("   5. Deploy")
        return
    
    # Project found
    if 'data' in result and result['data'].get('project'):
        project = result['data']['project']
        print(f"✅ Project: {project.get('name', 'N/A')}")
        print(f"   ID: {project.get('id')}")
        
        services = project.get('services', {}).get('edges', [])
        if services:
            print(f"   Services: {len(services)}")
            for svc in services:
                node = svc.get('node', {})
                print(f"      - {node.get('name')} ({node.get('status', 'unknown')})")
        else:
            print("   Services: None (not yet configured)")
        
        print()
        print("✅ API Connection Successful!")
        print()
        print("📋 Next Steps:")
        print("   1. Connect GitHub repo in Railway UI")
        print("   2. Set environment variables:")
        print("      - NODE_ENV=production")
        print("      - Other env vars from .env")
        print("   3. Click DEPLOY")
        print()
        print("Repository: https://github.com/pantetomaso/mgw")
        print("Documentation: See DEPLOYMENT_INSTRUCTIONS.md")
    else:
        print("❌ Unexpected API response")
        print(json.dumps(result, indent=2)[:500])

if __name__ == '__main__':
    main()
