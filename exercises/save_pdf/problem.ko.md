# PDF 저장

`P` 키를 누르면 이제까지 그린 다각형을 PDF로 저장하는 기능을 만들어 봅시다.

`index.js`에서 모듈 몇 개를 읽어 들이세요.

```
var remote = require('electron').remote
var fs = require('fs')
```

그리고 현재 창을 PDF로 저장하는 함수를 만드세요.

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

마지막으로 `P`를 누르면 방금 만든 `save()` 함수가 실행되도록, 이벤트 리스너에 등록하세요.

```
window.addEventListener('keydown', function (e) {
  if (e.keyCode == 80) save()
})
```

이제 앱을 실행해서 `P` 키를 누르면 현재 폴더에 `annotation.pdf`가 저장될 것입니다.


위의 과정을 완료하셨다면 `elementary-electron verify`를 실행해주세요.