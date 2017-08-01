# 헬로 월드

간단한 electron 앱을 만들어 봅시다.

먼저, 새로운 폴더를 만들고 그 폴더에서 앞으로의 작업을 진행해 주세요.

텍스트 에디터(TextEdit, Notepad 등)를 사용해서 방금 만든 폴더에 `index.html`을 만들고, 다음 내용을 작성하세요.


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

같은 폴더에 `app.js`라는 파일을 만들고 다음 내용을 작성하세요.

```
var electron = require('electron')

electron.app.on('ready', function () {
  var mainWindow = new electron.BrowserWindow({width: 600, height: 800})
  mainWindow.loadURL('file://' + __dirname + '/index.html')
})
```

마지막으로, `electron app.js`를 터미널에서 실행하세요. Hello World가 출력되는 앱이 보이실 겁니다.

위의 과정을 완료하셨다면 `elementary-electron verify`를 실행해주세요.
