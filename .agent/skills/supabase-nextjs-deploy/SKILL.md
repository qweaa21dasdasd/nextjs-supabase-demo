---
name: supabase-nextjs-deploy
description: Automates the setup and deployment of a Next.js project with Supabase integration to Vercel.
---

# Supabase-NextJS Deployment Skill

This skill automates the integration of Supabase into a Next.js project and its deployment to Vercel.

## Prerequisites

- A Next.js project (App Router preferred).
- Supabase Project URL and Anon Key.
- A GitHub repository (optional but recommended).
- Vercel account.

## Usage

### 1. Verification
Run the check script to ensure the environment is ready:
```bash
bash .agent/skills/supabase-nextjs-deploy/scripts/check_env.sh
```

### 2. Integration
Implement the Supabase client utilities:
- **Client**: `src/utils/supabase/client.ts`
- **Server**: `src/utils/supabase/server.ts`
- **Middleware/Proxy**: `src/proxy.ts` (Next.js 16 handles this via `proxy.ts`, earlier versions use `middleware.ts`).

### 3. Deployment
Execute the deployment steps:
- Add remote and push to GitHub.
- Use Vercel CLI to link the project and add environment variables.
- Deploy to production.

## Troubleshooting

- **Proxy Error**: If using Next.js 16, ensure the file is named `proxy.ts` and exports a default function named `proxy`.
- **Vercel CLI Login**: If not logged in, run `vercel login`.
- **RLS**: Ensure Supabase RLS policies allow the necessary operations or are disabled for testing.
