#!/bin/bash

# check_env.sh - Verify prerequisites for Supabase-NextJS deployment

echo "🔍 Checking environment prerequisites..."

# 1. Check for Next.js project
if [ ! -f "package.json" ]; then
  echo "❌ Error: No package.json found. Are you in a Next.js project directory?"
  exit 1
fi

# 2. Check for environment variables
if [ ! -f ".env.local" ]; then
  echo "⚠️ Warning: .env.local not found. You will need to provide Supabase credentials later."
else
  if ! grep -q "NEXT_PUBLIC_SUPABASE_URL" .env.local; then
    echo "❌ Error: NEXT_PUBLIC_SUPABASE_URL missing in .env.local"
    exit 1
  fi
  if ! grep -q "NEXT_PUBLIC_SUPABASE_ANON_KEY" .env.local; then
    echo "❌ Error: NEXT_PUBLIC_SUPABASE_ANON_KEY missing in .env.local"
    exit 1
  fi
  echo "✅ Environment variables found."
fi

# 3. Check for Vercel CLI
if ! command -v vercel &> /dev/null; then
  echo "⚠️ Warning: Vercel CLI not found. It will be installed automatically if needed."
else
  echo "✅ Vercel CLI version: $(vercel --version)"
fi

# 4. Check for Git
if ! command -v git &> /dev/null; then
  echo "❌ Error: Git is not installed."
  exit 1
fi
if [ ! -d ".git" ]; then
  echo "⚠️ Warning: Git repository not initialized."
else
  echo "✅ Git repository detected."
fi

echo "🚀 All systems ready for deployment setup!"
exit 0
