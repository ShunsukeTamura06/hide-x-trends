# Hide X Trends

A Chrome extension that hides trends and recommended users on X (formerly Twitter) for a cleaner browsing experience.

## Features

- 🚫 Hides trending topics sidebar
- 👤 Hides "Who to follow" recommendations
- 🌍 Multi-language support (Japanese, English, Chinese, Korean, Spanish, French, Arabic)
- ⚡ Automatic detection and hiding using MutationObserver
- 🎯 Works on all X.com pages

## Installation

### From Chrome Web Store
*Coming soon*

### Manual Installation (Developer Mode)

1. Download or clone this repository
2. Convert the SVG icon to PNG files (see below)
3. Open Chrome and go to `chrome://extensions/`
4. Enable "Developer mode" in the top right corner
5. Click "Load unpacked" and select the extension folder
6. The extension will be installed and active immediately

## Icon Setup

The extension includes an `icon.svg` file. For Chrome extension compatibility, you need to convert it to PNG files:

**Required PNG files:**
- `icon16.png` (16x16px)
- `icon32.png` (32x32px) 
- `icon48.png` (48x48px)
- `icon128.png` (128x128px)

**To convert SVG to PNG:**
1. Use online tools like [SVG to PNG Converter](https://svgtopng.com/)
2. Or use command line tools like ImageMagick:
   ```bash
   convert icon.svg -resize 16x16 icon16.png
   convert icon.svg -resize 32x32 icon32.png
   convert icon.svg -resize 48x48 icon48.png
   convert icon.svg -resize 128x128 icon128.png
   ```

## How it Works

The extension uses content scripts to:
- Target elements with specific `aria-label` attributes in multiple languages
- Hide trending topics sections (`div[aria-label]`)
- Hide user recommendation sections (`aside[aria-label]`)
- Monitor page changes with MutationObserver for dynamic content

## Supported Languages

The extension automatically detects and works with X in these languages:
- 🇯🇵 Japanese
- 🇺🇸 English
- 🇨🇳 Chinese (Simplified & Traditional)
- 🇰🇷 Korean
- 🇪🇸 Spanish
- 🇫🇷 French
- 🇸🇦 Arabic

## Files

- `manifest.json` - Extension configuration
- `content.js` - Main script that hides unwanted elements
- `icon.svg` - Source icon file (vector format)
- `icon16.png`, `icon32.png`, `icon48.png`, `icon128.png` - Extension icons (required)
- `README.md` - This documentation

## Privacy

This extension:
- ✅ Only runs on X.com pages
- ✅ Does not collect any user data
- ✅ Does not send any information to external servers
- ✅ Only modifies page display locally

## Contributing

Feel free to submit issues or pull requests to improve this extension.

## License

MIT License - Feel free to use and modify as needed.

---

*This extension is not affiliated with X Corp. or Twitter, Inc.*