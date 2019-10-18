# ハローワールド

シンプルな electron のアプリケーションを作ってみましょう。

最初に、空のフォルダを作り、下記の手順を作ったフォルダの中で実施していきましょう。

テキストエディタ（TextEdit, Notepadなど）を使って、以下の内容の `index.html` をフォルダの中に作成してください：

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

次に、以下の内容の `app.js`というファイルを（同じフォルダ内に）作成します：

```
var electron = require('electron')

electron.app.on('ready', function () {
  var mainWindow = new electron.BrowserWindow({width: 600, height: 800})
  mainWindow.loadURL('file://' + __dirname + '/index.html')
})
```

最後に、ターミナルで `electron app.js` を実行してください。Hello World が表示されたアプリケーションが開いているはずです。

この課題が完了したら　`elementary-electron verify` を実行してください。
