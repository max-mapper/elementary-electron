# Cat Annotation

ここでは、さらに新しい機能を追加します！これから追加する新しい機能、それは「ポリゴンで指定した領域を描画する」です。

この機能は、地図で指定した範囲を描画したり、ラベリングをするのに役に立ちます。

下記の一行を `index.html` の `<body>` の中に追加してください。このタグは、ビジュアライゼーションを行うための空の `div` です。**気をつけてほしいのが、** このタグは、`<script>` タグより **前** に設置してください。そうすることで、`index.js` を `div` が認識されたあとに実行することができるようになります。

```
<div id='visualization'></div>
```

次に、`index.js` を編集します。最初の一行は、require した `cat-picture` を変数にします。

```
var picture = require('cat-picture')
```

いま実際に欲しいのは画像のデータです。変数に保存したら、ページから画像を削除しましょう。

```
var src = picture.src
picture.remove()
```

次に、ポリゴンを描画するためのモジュールをインストールしましょう。次のコマンドを実行してください: `npm install lightning-image-poly --save`

これで `package.json` に新しい行が追加されているはずです。確認してみてください！

次の行を追加して、いまインストールしたモジュールを使いましょう:

```
var image = require('lightning-image-poly')
```

完了したら、先ほど変数に保存した画像を `image` 変数を使い描画してみましょう。

```
var viz = new image('#visualization', null, [src], {hullAlgorithm: 'convex'})
```

これで、`electron app.js` を実行してアプリを開くと、猫の写真が表示されるだけでなく、マウスでポリゴンを描けるようになります。

この課題が完了したら　`elementary-electron verify` を実行してください。
