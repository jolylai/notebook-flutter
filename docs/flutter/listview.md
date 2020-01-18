# 列表

```dart
ListView({
  ...
  //可滚动widget公共参数
  Axis scrollDirection = Axis.vertical,
  bool reverse = false,
  ScrollController controller,
  bool primary,
  ScrollPhysics physics,
  EdgeInsetsGeometry padding,

  //ListView各个构造函数的共同参数
  double itemExtent,
  bool shrinkWrap = false,
  bool addAutomaticKeepAlives = true,
  bool addRepaintBoundaries = true,
  double cacheExtent,

  //子widget列表
  List<Widget> children = const <Widget>[],
})
```

- `itemExtent`：该参数如果不为 null，则会强制 children 的“长度”为 itemExtent 的值；这里的“长度”是指滚动方向上子组件的长度，也就是说如果滚动方向是垂直方向，则 itemExtent 代表子组件的高度；如果滚动方向为水平方向，则 itemExtent 就代表子组件的宽度。在 ListView 中，指定 itemExtent 比让子组件自己决定自身长度会更高效，这是因为指定 itemExtent 后，滚动系统可以提前知道列表的长度，而无需每次构建子组件时都去再计算一下，尤其是在滚动位置频繁变化时（滚动系统需要频繁去计算列表高度）。
- `shrinkWrap`：该属性表示是否根据子组件的总长度来设置 ListView 的长度，默认值为 false 。默认情况下，ListView 的会在滚动方向尽可能多的占用空间。当 ListView 在一个无边界(滚动方向上)的容器中时，shrinkWrap 必须为 true。
- `addAutomaticKeepAlives`：该属性表示是否将列表项（子组件）包裹在 AutomaticKeepAlive 组件中；典型地，在一个懒加载列表中，如果将列表项包裹在 AutomaticKeepAlive 中，在该列表项滑出视口时它也不会被 GC（垃圾回收），它会使用 KeepAliveNotification 来保存其状态。如果列表项自己维护其 KeepAlive 状态，那么此参数必须置为 false。
- `addRepaintBoundaries`：该属性表示是否将列表项（子组件）包裹在 RepaintBoundary 组件中。当可滚动组件滚动时，将列表项包裹在 RepaintBoundary 中可以避免列表项重绘，但是当列表项重绘的开销非常小（如一个颜色块，或者一个较短的文本）时，不添加 RepaintBoundary 反而会更高效。和 addAutomaticKeepAlive 一样，如果列表项自己维护其 KeepAlive 状态，那么此参数必须置为 false。

## ListView

```dart
ListView(
  children: <Widget>[],
),
```

## ListView.builder

`ListView.builder` 适合列表项比较多（或者无限）的情况，因为**只有当子组件真正显示的时候才会被创建**，也就说通过该构造函数创建的 ListView 是支持基于 Sliver 的**懒加载模型**的。

```dart
ListView.builder(
  itemExtent: 60,
  itemCount: 6,
  itemBuilder: (context, index) {
    return Text('$index');
  },
);
```

ListView.builder 必须实现下面的两参数

- `itemBuilder`：它是列表项的构建器，类型为 IndexedWidgetBuilder，返回值为一个 widget。当列表滚动到具体的 index 位置时，会调用该构建器构建列表项。
- `itemCount`：列表项的数量，如果为 null，则为无限列表。

## ListView.separated

`ListView.separated`可以在生成的列表项之间添加一个分割组件，它比 ListView.builder 多了一个 separatorBuilder 参数，该参数是一个分割组件生成器。

```dart
ListView.separated(
  //分割器构造器
  separatorBuilder: (BuildContext context, int index) {
    return Divider(color: Colors.blue);
  },
  itemCount: 6,
  itemBuilder: (context, index) {
    return Text('$index');
  },
)
```
