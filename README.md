# ym-el-scrollbar

> 二次封装 element-ui的el-scrollbar ，让它在移动端表现更好

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

最后在项目中这么用：

```
  <ym-el-scrollbar
    :isMobile="isMobile"
    :isHorizontal="true"
  >
    ···
  </ym-el-scrollbar>
```

## 说明

1. 支持el-scrollbar原本的绑定属性。
2. 另外还支持: isMobile(是否移动端)和isHorizontal(是否水平滑动)
3. 本插件默认竖向滑动。
