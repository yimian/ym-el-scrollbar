# ym-el-scrollbar

> 二次封装 element-ui的el-scrollbar ，让它在移动端表现更好

## 优点

优化了如下体验：

- [x] 滚动条在 pc 端：鼠标 hover 上去的时候显示，移开时消失

- [x] 滚动条在 mobile 端：滑动时候显示，过一会儿消失(需要先传入 isMobile 属性来判断移动端)

## 安装

```bash
npm i ym-el-scrollbar -S
```

## 用法

首先项目需要使用 element-ui ，并且确保导入了 scrollbar :

```js
import Vue from 'vue';
import { Scrollbar } from 'element-ui';

Vue.use(Scrollbar);
```

然后引入 ym-el-scrollbar ,请确保 Vue.use(YmElScrollbar) 放在 Vue.use(Scrollbar) 之后。

```js
import YmElScrollbar from 'ym-el-scrollbar';

Vue.use(YmElScrollbar);
```

最后在项目中这么用(包住要滚动的内容即可)：

```
<!-- 传入 isMobile 属性判断移动端 -->
<ym-el-scrollbar :isMobile="isMobile">
  ···
</ym-el-scrollbar>
```

## 说明

1. 支持el-scrollbar原本的绑定属性(参考[el-scrollbar 源码](https://github.com/ElemeFE/element/tree/dev/packages/scrollbar)和[el-scrollbar segmentfault](https://segmentfault.com/a/1190000015068613))。
2. 支持: isMobile(是否移动端)和isHorizontal(是否水平滑动)
3. 本插件默认竖向滑动。
