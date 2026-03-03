#!/bin/bash
# One-time setup: installs all dependencies for local development
export PATH="/opt/homebrew/opt/ruby/bin:/opt/homebrew/bin:$PATH"

echo "→ Installing Node packages (Bookshop)..."
npm install

echo "→ Installing Ruby gems (Jekyll)..."
cd site
bundle config set --local path 'vendor/bundle'
bundle config set --local jobs 4
bundle install
cd ..

echo ""
echo "✓ Done. Run ./preview.sh to start the local server."
