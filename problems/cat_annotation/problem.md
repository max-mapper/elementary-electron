# Cat Annotation

Now we're going to add the ability to draw on the image.

You might not ever need to draw on a cat. But you might want an app to label objects in an image, define a geographic area on a map, or annotate scientific image data.

Create a file called `index.html` in this directory that looks like this. This time we're adding a `div` element that will contain our visualization.

```
<!DOCTYPE html>
<html>
<head>
</head>
<body>
  <div id='visualization'></div>
</body>
<script src="index.js"></script>
</html>
```

Create a file called `app.js`, also similar to last time, but we'll adjust the window size.

```
var electron = require('electron')

electron.app.on('ready', function () {
  var mainWindow = new electron.BrowserWindow({width: 600, height: 800})
  mainWindow.loadURL('file://' + __dirname + '/index.html')
})
```

Now create a file called `index.js`. The first line should require our cat picture. This time, we just need the source data for the image. So we'll assign the created element to a variable, get its source data, then remove it.

```
var picture = require('cat-picture')
var src = picture.src
picture.remove()
```

Now render the image data using a visualization module designed for drawing polygons over an image.

```
var image = require('lightning-image-poly')
var viz = new image('#visualization', null, [src], {hullAlgorithm: 'convex'})
```

If you run `electron app.js` you should see a cat, and be able to draw polygons on it wih the mouse.

When you think you are done with this challenge, run `elementary-electron verify`