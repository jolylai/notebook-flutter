# 图片组件

## 加载图片

- `Image.asset` 加载资源图片
- `Image.file` 加载本地图片文件
- `Image.network` 加载网络图片
- `Image.memory` 加载 Uint8List 资源图片

```dart
new ListView(
  children: <Widget>[
    // 资源图片
    new Image.asset('imgs/logo.jpeg'),
    //网络图片
    new Image.network(
      'https://flutter.io/images/homepage/header-illustration.png'
    ),
    // 本地文件图片
    new Image.file(new File("/Users/gs/Downloads/1.jpeg")),
    // Uint8List图片
    new Image.memory(bytes),
    //使用ImageProvider加载图片
    new Image(
      image: new NetworkImage(
        "https://flutter.io/images/homepage/screenshot-2.png"
      ),
    )
  ],
)
```

## 图片展示形式

1、Fill the target box by distorting the source's aspect ratio.（通过缩放图片的比率充满目标容器）

```dart {3}
Image.network(
  'https://flutter.io/images/homepage/header-illustration.png',
  fit: BoxFit.fill
)
```

![](https://flutter.github.io/assets-for-api-docs/assets/painting/box_fit_fill.png)

2、As large as possible while still containing the source entirely within the
target box.

```dart {3}
Image.network(
  'https://flutter.io/images/homepage/header-illustration.png',
  fit: BoxFit.contain
)
```

![](https://flutter.github.io/assets-for-api-docs/assets/painting/box_fit_contain.png)

3、As small as possible while still covering the entire target box.

```dart {3}
Image.network(
  'https://flutter.io/images/homepage/header-illustration.png',
  fit: BoxFit.cover
)
```

![](https://flutter.github.io/assets-for-api-docs/assets/painting/box_fit_cover.png)

4、Make sure the full width of the source is shown, regardless of
whether this means the source overflows the target box vertically.

```dart {3}
Image.network(
  'https://flutter.io/images/homepage/header-illustration.png',
  fit: BoxFit.fitWidth
)
```

![](https://flutter.github.io/assets-for-api-docs/assets/painting/box_fit_fitWidth.png)

5、Make sure the full height of the source is shown, regardless of
whether this means the source overflows the target box horizontally.

```dart {3}
Image.network(
  'https://flutter.io/images/homepage/header-illustration.png',
  fit: BoxFit.fitHeight
)
```

![](https://flutter.github.io/assets-for-api-docs/assets/painting/box_fit_fitHeight.png)

6、Align the source within the target box (by default, centering) and discard
any portions of the source that lie outside the box.

The source image is not resized.

```dart {3}
Image.network(
  'https://flutter.io/images/homepage/header-illustration.png',
  fit: BoxFit.none
)
```

![](https://flutter.github.io/assets-for-api-docs/assets/painting/box_fit_none.png)

7、Align the source within the target box (by default, centering) and, if
necessary, scale the source down to ensure that the source fits within the
box.

This is the same as `contain` if that would shrink the image, otherwise it
is the same as `none`.

```dart {3}
Image.network(
  'https://flutter.io/images/homepage/header-illustration.png',
  fit: BoxFit.scaleDown
)
```

![](https://flutter.github.io/assets-for-api-docs/assets/painting/box_fit_scaleDown.png)

## 颜色混合模式

![](https://cy-picgo.oss-cn-hangzhou.aliyuncs.com/flutter-colorBlendMode.png)

```dart {14,15}
Center(
  child: Row(
    mainAxisAlignment: MainAxisAlignment.spaceAround,
    children: <Widget>[
      Image.network(
        'https://cy-picgo.oss-cn-hangzhou.aliyuncs.com/wallhaven-6k7jxw.jpg',
        fit: BoxFit.cover,
        width: 120,
      ),
      Image.network(
        'https://cy-picgo.oss-cn-hangzhou.aliyuncs.com/wallhaven-6k7jxw.jpg',
        fit: BoxFit.cover,
        width: 120,
        color: Colors.blueGrey,
        colorBlendMode: BlendMode.colorDodge
      ),
    ],
  ),
)
```

## 头像

```dart
Container(
  height: 64,
  width: 64,
  decoration: BoxDecoration(
    // borderRadius: BorderRadius.all(Radius.circular(100)),
    borderRadius: BorderRadius.circular(100),
    image: DecorationImage(
      fit: BoxFit.cover,
      image: NetworkImage(
          'https://cy-picgo.oss-cn-hangzhou.aliyuncs.com/wallhaven-6k7jxw.jpg'
      )
    )
  )
)
```

```dart
Container(
  width: 64,
  height: 64,
  child: ClipOval(
    child: Image.network(
      'https://cy-picgo.oss-cn-hangzhou.aliyuncs.com/wallhaven-6k7jxw.jpg',
      fit: BoxFit.cover,
    ),
  ),
)
```
