# 装饰容器

DecoratedBox 可以在其子组件绘制前(或后)绘制一些装饰（Decoration）

```dart
const DecoratedBox({
  Decoration decoration,
  DecorationPosition position = DecorationPosition.background,
  Widget child
})
```

## position

position 决定在哪里绘制 Decoration，它接收 DecorationPosition 的枚举类型，该枚举类有两个值：

```dart
enum DecorationPosition {
  /// Paint the box decoration behind the children.
  //在子组件之后绘制，即背景装饰。
  background,

  /// Paint the box decoration in front of the children.
  // 在子组件之上绘制，即前景。
  foreground,
}
```

## decoration

看下都能装饰什么

```dart
BoxDecoration({
  Color color, //颜色
  DecorationImage image,//图片
  BoxBorder border, //边框
  BorderRadiusGeometry borderRadius, //圆角
  List<BoxShadow> boxShadow, //阴影,可以指定多个
  Gradient gradient, //渐变
  BlendMode backgroundBlendMode, //背景混合模式
  BoxShape shape = BoxShape.rectangle, //形状
})
```

## 装饰按钮

```dart
class Btn extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return DecoratedBox(
      decoration: BoxDecoration(
          gradient: LinearGradient(
            colors: [Colors.red, Colors.orange[700]],
          ),
          borderRadius: BorderRadius.circular(8),
          boxShadow: [
            BoxShadow(
              color: Colors.black54,
              offset: Offset(2, 2),
              blurRadius: 4,
            )
          ]),
      child: Padding(
        padding: EdgeInsets.symmetric(vertical: 16, horizontal: 80),
        child: Text('login'),
      ),
    );
  }
}
```
