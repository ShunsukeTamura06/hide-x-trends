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
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension folder
5. The extension will be installed and active immediately

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