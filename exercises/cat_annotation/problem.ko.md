# 고양이 사진과 다각형

새로운 기능을 추가해 볼까요? 이미지 위에 다각형 영역을 그려 봅시다.

이 기능은 어떤 물체에 표시할 때나, 지도 위에 일정 지역을 나타낼 때 유용합니다.

`index.html` 파일의 `<body>` 부분에 다음 코드 한 줄을 넣어 보세요. 이곳은 사진이 위치할 빈 `div` 요소입니다. **조심하세요.** 이 코드는 `<script>` 태그보다 **이전에** 위치해야 합니다. 왜냐하면 `div` 요소가 생성된 뒤에 `<script>`내의 코드가 실행되기 위해서입니다.

```
<div id='visualization'></div>
```

다음은 `index.js`를 수정해 볼까요? 맨 처음 줄에 고양이 사진을 require를 이용해서 변수에 저장해 봅시다.

```
var picture = require('cat-picture')
```

실제 필요한 것은 고양이 사진 데이터이므로, 변수에 저장한 뒤에 페이지에 표시된 사진을 지워주세요.

```
var src = picture.src
picture.remove()
```

이제 다각형을 그려주는 모듈을 설치해 봅시다. `npm install lightning-image-poly --save`를 입력해 주세요.

`package.json`에 새로운 줄이 추가된 것을 확인해 보세요.

다음 코드를 추가해서 설치한 모듈을 사용해봅시다.

```
var image = require('lightning-image-poly')
```

이제 이 모듈로 이미지를 저장한 변수를 사용해서, 이미지를 그려봅시다.

```
var viz = new image('#visualization', null, [src], {hullAlgorithm: 'convex'})
```

`electron app.js`를 실행하면 고양이가 보일 거예요. 그리고 이제 마우스로 다각형을 그릴 수 있습니다!

위의 과정을 전부 완료했다면, `elementary-electron verify`를 실행해주세요.
