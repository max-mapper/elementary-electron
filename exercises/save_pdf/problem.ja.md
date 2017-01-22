# Save PDF

最後に、`P` キーを押したら描画したポリゴンを PDF に保存する機能を追加しましょう。

いくつかのモジュールを `index.js` 内で読み込みます:

```
var remote = require('electron').remote
var fs = require('fs')
```

次に、現在のページを保存する function を作ります。

```
function save () {
  remote.getCurrentWindow().webContents.printToPDF({
    portrait: true
  }, function (err, data) {
    fs.writeFile('annotation.pdf', data, function (err) {
      if (err) alert('error generating pdf! ' + err.message)
      else alert('pdf saved!')
    })
  })  
}
```

最後に、`P` キーが押された際に `save()` が実行されるイベントリスナーを準備します。

```
window.addEventListener('keydown', function (e) {
  if (e.keyCode == 80) save()
})
```

これで、`P` キーが押されたら `annotation.pdf` として現在のフォルダに保存されるようになりました。アプリを実行してみましょう。

この課題が完了したら　`elementary-electron verify` を実行してください。
