# nodegui-starter

This is a fork of [nodegui-starter](https://github.com/nodegui/nodegui-starter) to build with webpack in a suspicious way.

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/RYOSKATE/nodegui-starter
# Go into the repository
cd nodegui-starter
# Install dependencies
npm install
# Run the app
npm start
```


## To Package
```bash
# Built the app
npm run build
```

Get the latest [Qode](https://github.com/nodegui/qode/releases) binaries for your environment.

### Packaging steps for Windows
1. Download and unzip the latest Qode for windows (`win32-x64.zip`) 
1. Copy the built file (`dist/index.js`) into `win32-x64/`
1. Create `exec.bat`
1. Remove unnecessary `.dll` files from `win32-x64/`
1. Complete!

```cmd
# exec.bat
qode ./index.js
```

e.g. Example of a minimal package
```
win32-x64/
├index.js (Step 2)
├exec.bat (Step 3)
├qode.exe
├Qt5Core.dll
├Qt5Gui.dll
├Qt5Widgets.dll
└platforms/
	└qwindows.dll
```

If you don't like creating `exec.bat`, directly drag and drop `index.js` into `qode.exe`.

## Resources for Learning NodeGUI

- [nodegui.github.io/nodegui](https://nodegui.github.io/nodegui) - all of NodeGui and React Desktop's documentation

## License

MIT
