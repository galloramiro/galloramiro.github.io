# Talks

This directory contains all my technical presentations. Each talk is built using reveal.js and can be viewed online.

## Available Talks

### 1. Best Practices for Planning Features (For Devs & Tech Leads)
- **File**: `how_do_i_plan_a_feature/presentation.md`
- **Live**: https://galloramiro.github.io/talks/how_do_i_plan_a_feature/export/index.html
- **Video**: https://youtu.be/T9VZNfmLeyU

### 2. Fight Against the Rabbit Hole
- **File**: `fight_against_the_rabbit_hole/presentation.md`
- **Live**: https://galloramiro.github.io/talks/fight_against_the_rabbit_hole/export/index.html

### 3. Client Pattern
- **File**: `client_pattern/presentation.md`
- **Live**: https://galloramiro.github.io/talks/client_pattern/export/index.html

### 4. Service Pattern - A Good Place to Put Business Logic
- **File**: `servce_pattern/presentation.md`
- **Live**: https://galloramiro.github.io/talks/servce_pattern/export/index.html

### 5. ArmoniBot - Building Something for Myself, But in a Sustainable Way
- **File**: `armoni_bot/presentation.md`
- **Live**: https://galloramiro.github.io/talks/armoni_bot/export/index.html

## Building Presentations

To build all presentations from markdown to HTML:

```bash
./build-talks.sh
```

This will:
1. Install reveal-md if not already installed
2. Build all presentations from their markdown files
3. Export static HTML files to each talk's `export/` directory
4. Include images from each talk's `img/` directory

## Adding New Talks

1. Create a new directory: `talks/your-talk-name/`
2. Add your presentation: `talks/your-talk-name/presentation.md`
3. Add images: `talks/your-talk-name/img/`
4. Run the build script to generate the HTML
5. Update `src/config.json` to include your new talk

## Structure

```
talks/
├── build-talks.sh          # Build script
├── README.md              # This file
├── talk-name/
│   ├── presentation.md    # Markdown source
│   ├── img/              # Images for the talk
│   └── export/           # Generated HTML files
│       ├── index.html
│       └── libs/
```
