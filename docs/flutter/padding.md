# 填充

## Padding

Padding 可以给其子节点添加填充（留白），和边距效果类似。

```dart
Padding({
  ...
  EdgeInsetsGeometry padding,
  Widget child,
})
```

EdgeInsetsGeometry 是一个抽象类，开发中，我们一般都使用 EdgeInsets 类，它是 EdgeInsetsGeometry 的一个子类，定义了一些设置填充的便捷方法。

## EdgeInsets

分别指定四个方向的填充。

> EdgeInsets.fromLTRB(double left, double top, double right, double bottom)

```dart
 Container(
  padding: EdgeInsets.fromLTRB(8, 8, 8, 8),
  child: Text('Padding'),
  decoration: BoxDecoration(color: Colors.lightBlue),
)
```

可以设置具体某个方向的填充(可以同时指定多个方向)。

> EdgeInsets.only({left, top, right ,bottom })

```dart
 Container(
  padding: EdgeInsets.only(left: 8),
  child: Text('Padding'),
  decoration: BoxDecoration(color: Colors.lightBlue),
)
```

所有方向均使用相同数值的填充。

> EdgeInsets.all(double value)

```dart
 Container(
  padding: EdgeInsets.all(8),
  child: Text('Padding'),
  decoration: BoxDecoration(color: Colors.lightBlue),
)
```

用于设置对称方向的填充，vertical 指 top 和 bottom，horizontal 指 left 和 right。

> EdgeInsets.symmetric({ vertical, horizontal })

```dart
 Container(
  padding: EdgeInsets.symmetric(vertical: 8, horizontal: 16),
  child: Text('Padding'),
  decoration: BoxDecoration(color: Colors.lightBlue),
)
```
