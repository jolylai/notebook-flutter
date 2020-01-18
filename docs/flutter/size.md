# 尺寸

定义一个只有红色背景的盒子

```dart
Widget redBox=DecoratedBox(
  decoration: BoxDecoration(color: Colors.red),
);
```

## SizeBox

源码

```dart
class SizedBox extends SingleChildRenderObjectWidget {
  // 创建固定大小的约束Box
  const SizedBox({ Key key, this.width, this.height, Widget child })
    : super(key: key, child: child);

  // 创建父类允许最大尺寸的约束Box
  const SizedBox.expand({ Key key, Widget child })
    : width = double.infinity,
      height = double.infinity,
      super(key: key, child: child);

  // 创建父类允许最小尺寸的约束Box
  const SizedBox.shrink({ Key key, Widget child })
    : width = 0.0,
      height = 0.0,
      super(key: key, child: child);

  // 创建指定大小的约束Box
  SizedBox.fromSize({ Key key, Widget child, Size size })
    : width = size?.width,
      height = size?.height,
      super(key: key, child: child);
}
```

创建指定大小的约束 Box

```dart
SizedBox(
  width: 80,
  height: 80,
  child: redBox,
)

SizedBox.fromSize(
  size: Size(80, 80),
  child: redBox,
)
```

创建父类允许最大尺寸的约束 Box

```dart
SizedBox.expand(
  child: redBox,
)
SizedBox(
  width: double.infinity,
  height: double.infinity,
  child: redBox,
)
```

创建父类允许最小尺寸的约束 Box

```dart
SizedBox.shrink(
  child: redBox,
)
SizedBox(
  width: 0,
  height: 0,
  child: redBox,
)
```

## ConstrainedBox

ConstrainedBox 用于对子组件添加额外的约束。也就指定子组件的最大最小宽高

```dart
ConstrainedBox(
  constraints: BoxConstraints(minWidth: 80, minHeight: 80),
  child: redBox,
)
```

**BoxConstraints**

```dart
class ConstrainedBox extends SingleChildRenderObjectWidget {
  ConstrainedBox({
    Key key,
    @required this.constraints,
    Widget child,
  })
}

class BoxConstraints extends Constraints {
  // 用指定的约束大小创建框架大小
  const BoxConstraints({
    this.minWidth = 0.0,
    this.maxWidth = double.infinity,
    this.minHeight = 0.0,
    this.maxHeight = double.infinity,
  });

  // 仅用指定大小创建框架大小
  BoxConstraints.tight(Size size)
    : minWidth = size.width,
      maxWidth = size.width,
      minHeight = size.height,
      maxHeight = size.height;

  // 用指定的约束大小创建框架大小
  const BoxConstraints.tightFor({
    double width,
    double height,
  })

  // 创建需要给定宽度或高度的框约束，除非它们是无限的
  const BoxConstraints.tightForFinite({
    double width = double.infinity,
    double height = double.infinity,
  })

  // 创建禁止大小大于给定大小的框约束
  BoxConstraints.loose(Size size)
    : minWidth = 0.0,
      maxWidth = size.width,
      minHeight = 0.0,
      maxHeight = size.height;

  // 创建扩展为填充另一个框约束的框约束
  const BoxConstraints.expand({
    double width,
    double height,
  })
}
```

```dart
BoxConstraints.tight(Size(80, 60))

// 等价于
BoxConstraints(
  minWidth: 80,
  maxWidth: 80,
  minHeight: 60,
  maxHeight: 60,
)
```

## 多重限制

```dart
ConstrainedBox(
    constraints: BoxConstraints(minWidth: 90.0, minHeight: 20.0),
    child: ConstrainedBox(
      constraints: BoxConstraints(minWidth: 60.0, minHeight: 60.0),
      child: redBox,
    )
)
```

多重限制时，对于 minWidth 和 minHeight 来说，是取父子中相应数值较大的。实际上，只有这样才能保证父限制与子限制不冲突。

## UnconstrainedBox

UnconstrainedBox 不会对子组件产生任何限制，它允许其子组件按照其本身大小绘制。一般情况下，我们会很少直接使用此组件，但在"去除"多重限制的时候也许会有帮助

```dart
ConstrainedBox(
    constraints: BoxConstraints(minWidth: 60.0, minHeight: 100.0),  //父
    child: UnconstrainedBox( //“去除”父级限制
      child: ConstrainedBox(
        constraints: BoxConstraints(minWidth: 90.0, minHeight: 20.0),//子
        child: redBox,
      ),
    )
)
```
