#!/bin/bash

# Build script for reveal.js presentations
# This script helps build all presentations from markdown to HTML

echo "Building talks presentations..."

# Check if reveal-md is installed
if ! command -v reveal-md &> /dev/null; then
    echo "reveal-md is not installed. Installing..."
    npm install -g reveal-md
fi

# Directory containing the talks
TALKS_DIR="talks"

# Find all presentation.md files and build them
for talk_dir in "$TALKS_DIR"/*; do
    if [ -d "$talk_dir" ]; then
        talk_name=$(basename "$talk_dir")
        presentation_file="$talk_dir/presentation.md"
        
        if [ -f "$presentation_file" ]; then
            echo "Building $talk_name..."
            
            # Create export directory if it doesn't exist
            mkdir -p "$talk_dir/export"
            
            # Build the presentation
            reveal-md "$presentation_file" --static "$talk_dir/export" --static-dirs="$talk_dir/img"
            
            echo "✓ Built $talk_name"
        fi
    fi
done

echo "All presentations built successfully!"
echo "You can find the exported HTML files in each talk's export/ directory"
