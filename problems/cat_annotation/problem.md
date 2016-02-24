# Cat Annotation

Now we're going to add the ability to draw on the image.

You might not ever need to draw on a cat, but you might want to label an object for machine learning, define a geographic area on a map, or annotate scientific image data.

Create a file called `index.html` in this directory with the following contents:

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

Adding to the previous example, we create a `div` element that will store our visualization.

Create a file called `app.js`. This one will also be ike the earlier examples, but we'll adjust the window size this time.

```
var electron = require('electron')

electron.app.on('ready', function () {
  var mainWindow = new electron.BrowserWindow({width: 600, height: 800})
  mainWindow.loadURL('file://' + __dirname + '/index.html')
})
```

Now create a file called `index.js`. The first line should require our cat picture, which adds an image to the DOM. This time, we just need the source data for the image, so we'll assign the created element to a variable, get its source data, then remove it.

```
var picture = require('cat-picture')
var src = picture.src
picture.remove()
```

Now render the image data using a visualization module designed for free drawing polygons over an image.

```
var image = require('lightning-image-poly')
var viz = new image('#visualization', null, [src], {hullAlgorithm: 'convex'})
```

When you think you are done with this challenge, run `elementary-electron verify`