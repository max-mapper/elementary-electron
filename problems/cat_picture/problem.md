# Cat Picture

Now that we have a working skeleton structure we can add our first feature: render a cat picture.

To do this we can use a module from npmjs.org called `cat-picture`. It does one thing: adds a cat picture to a web page

To get the cat picture we can use the `npm` command line tool.

First we need to initialize a `package.json` file in the current directory as a place to store what modules you use.

Run `npm init` to create a package.json, it will ask you some questions to fill out.

When that is complete, you should see a new file called `package.json`. Check it out!

Now run `npm install cat-picture --save`.

This will download the cat-picture module into a folder called `node_modules` and add cat-picture to your `package.json`.

Now we can load the cat-picture module in our application. Add this to your `index.html` inside your `<body>` section:
  
```
<script type="text/javascript" src="index.js"></script>
```

Then create a new file called `index.js` with this line of code in it:

```
require('cat-picture')
```

Now when you run your app with `electron app.js` you should see a cat!

When you think you are done with this challenge, run `elementary-electron verify`
