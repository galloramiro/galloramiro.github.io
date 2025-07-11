#!/bin/bash

# Test script to verify the build process
echo "Testing build process..."

# Simulate the build steps that happen in GitHub Actions
echo "1. Building the project..."
if command -v npm &> /dev/null; then
    npm run build
else
    echo "   npm not available, skipping build step"
    mkdir -p dist
fi

echo "2. Copying talks to dist..."
cp -r talks dist/

echo "3. Verifying structure..."
echo "   Checking if talks folder exists in dist:"
ls -la dist/

echo "   Checking if talk exports exist:"
find dist/talks -name "index.html" -type f

echo "✅ Build test completed!"
echo ""
echo "Your talks should be available at:"
echo "   https://galloramiro.github.io/talks/armoni_bot/export/index.html"
echo "   https://galloramiro.github.io/talks/client_pattern/export/index.html"
echo "   https://galloramiro.github.io/talks/fight_against_the_rabbit_hole/export/index.html"
echo "   https://galloramiro.github.io/talks/how_do_i_plan_a_feature/export/index.html"
echo "   https://galloramiro.github.io/talks/servce_pattern/export/index.html"
