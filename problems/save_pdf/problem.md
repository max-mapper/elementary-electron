# Save PDF

Let's make it so when you hit the `P` key it will save a PDF of your annotations.

Require a couple extra modules in your `index.js`:

```
var remote = require('electron').remote
var fs = require('fs')
```

Then define a function that will save the current window to a PDF.

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

And finally set up an event listener that will call your `save()` function when you press `P`.

```
window.addEventListener('keydown', function (e) {
  if (e.keyCode == 80) save()
})
```

Now if you run your app and hit `P` it should save `annotation.pdf` into your project folder.

When you think you are done with this challenge, run `elementary-electron verify`
