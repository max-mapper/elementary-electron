# Cat Picture

Now that we have a working skeleton structure we can add our first feature: render a cat picture.

We could write the code to do this ourselves, but (like many other common programming tasks) somebody else has already written code to do this for us. Node.js provides a way for authors to package up chunks of pre-written code for easy re-use, and also provides a program called `npm` to produce, download, and install such packages (which Node refers to as "modules"). If you're familiar with R, `npm` is very similar to the `install.packages()` command.

So, back to our task: add a glorious cat picture to our app. To do this we can use a module from npmjs.org called `cat-picture`. It does one thing: adds a cat picture to a web page.

We will use the `npm` command line tool to download and install the `cat-picture` module. Before we can work with modules, though, we need to give Node a little bit more information about what we are doing with our app. The best way to do this is actually to _create our own_ module!

To do this, all we need to do is create a file called `package.json` that will contain certain information about our module, notably including a list of what other modules we depend on. `npm` can do this for us!

Run the command `npm init` It will ask you some questions to fill out; if you're not sure about the answer, you can just hit "enter" to accept its default.

When the command is complete, you should see a new file in your directory called `package.json`. Check it out! You can open `package.json` in your text editor. 

Now, run the following command: `npm install cat-picture --save`

This will download the `cat-picture` module into a folder called `node_modules` and will also add cat-picture to your `package.json`. If you open `package.json` in your editor again, you should see a mention of the `cat-picture` module.

Now that we have installed the module, we can use it in our application. Add this to your `index.html` file, inside the `<body>` section but _after_ the `<h1>` section:
  
```
<script type="text/javascript" src="index.js"></script>
```

Then, use your text editor to create a new file in your directory called `index.js` with this line of code in it:

```
require('cat-picture')
```

Now when you run your app with `electron app.js` you should see a cat!

When you think you are done with this challenge, run `elementary-electron verify`
