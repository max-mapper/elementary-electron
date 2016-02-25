# Hello World

Let's set up a simple electron application.

First, create a new empty folder and do the rest of these steps inside that new folder.

Using a text editor (such as TextEdit, Notepad, etc.), create a file called `index.html` in the folder you just created with the following contents:

```
<!DOCTYPE html>
<html>
<head>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>
```

Then create a file (in the same folder) called `app.js` with the following contents:

```
var electron = require('electron')

electron.app.on('ready', function () {
  var mainWindow = new electron.BrowserWindow({width: 600, height: 800})
  mainWindow.loadURL('file://' + __dirname + '/index.html')
})
```

Finally, run `electron app.js` in your terminal. You should see an application open that displays Hello World!

When you think you are done with this challenge, run `elementary-electron verify`
