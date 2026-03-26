#!/bin/bash
# Run this script from the folder containing storybook.html
# It will open the storybook in your browser automatically

PORT=3000
DIR="$(dirname "$0")"

echo ""
echo "  ██╗   ██╗██╗ ██████╗ ███╗   ██╗███████╗██╗     ██╗     ██╗"
echo "  ██║   ██║██║██╔════╝ ████╗  ██║██╔════╝██║     ██║     ██║"
echo "  ██║   ██║██║██║  ███╗██╔██╗ ██║█████╗  ██║     ██║     ██║"
echo "  ╚██╗ ██╔╝██║██║   ██║██║╚██╗██║██╔══╝  ██║     ██║     ██║"
echo "   ╚████╔╝ ██║╚██████╔╝██║ ╚████║███████╗███████╗███████╗██║"
echo ""
echo "  Vignelli System — UI Kit Storybook"
echo "  ──────────────────────────────────"
echo "  → http://localhost:$PORT/storybook.html"
echo ""

# Open browser automatically
sleep 1
if command -v open &>/dev/null; then
  open "http://localhost:$PORT/storybook.html"        # macOS
elif command -v xdg-open &>/dev/null; then
  xdg-open "http://localhost:$PORT/storybook.html"    # Linux
fi

# Serve
cd "$DIR" && python3 -m http.server $PORT
