<template>
  <el-scrollbar
    :class="{ isMobile, 'is-horizontal': isHorizontal }"
    v-bind="$attrs"
    v-on="$listeners"
    ref="scrollbar"
  >
    <slot />
  </el-scrollbar>
</template>
<script>
export default {
  name: 'YmElScrollbar',
  props: {
    isMobile: {
      type: Boolean,
      default: false,
    },
    isHorizontal: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isScrolling: false,
      scrollTimeout: null,
      scrollbarSelector: `.el-scrollbar__bar.is-${this.isHorizontal ? 'horizontal' : 'vertical'}`,
    };
  },
  mounted() {
    if (this.isMobile) {
      // 这里第三个参数要设置为true，否则无效
      this.$refs.scrollbar.$el.addEventListener('scroll', this.scrollHandler, true);
    }
  },
  beforeDestroy() {
    if (this.isMobile) {
      this.$refs.scrollbar.$el.removeEventListener('scroll', this.scrollHandler);
    }
  },
  methods: {
    scrollHandler() {
      this.showScrollBar();
      this.hideScrollBarLatter();
    },
    showScrollBar() {
      if (!this.isScrolling) {
        const scrollbar = document.querySelector(this.scrollbarSelector);

        this.isScrolling = true;
        scrollbar.classList.remove('hide');
        scrollbar.classList.add('show');
      }
    },
    hideScrollBarLatter() {
      if (this.scrollTimeout) {
        clearTimeout(this.scrollTimeout);
        this.setScrollTimeout();
      } else {
        this.setScrollTimeout();
      }
    },
    setScrollTimeout() {
      this.scrollTimeout = setTimeout(() => {
        const scrollbar = document.querySelector(this.scrollbarSelector);

        scrollbar.classList.remove('show');
        scrollbar.classList.add('hide');
        this.isScrolling = false;
      }, 1000);
    },
  },
};
</script>
<style>
.el-scrollbar {
  height: 100%;
}

.el-scrollbar.is-horizontal {
  width: 100%;
  height: auto;
}

.el-scrollbar__wrap {
  overflow-x: hidden;
}

.el-scrollbar.is-horizontal .el-scrollbar__wrap {
  overflow-x: scroll;
  overflow-y: hidden;
}

.el-scrollbar__thumb {
  background-color: #aaa;
}
.el-scrollbar:hover .el-scrollbar__bar {
  opacity: .6;
  /* transition: opacity 340ms ease-out; */
}
.el-scrollbar__bar.show {
  opacity: .6!important;
  /* transition: opacity 340ms ease-out; */
}
.el-scrollbar__bar.hide {
  opacity: 0!important;
}
</style>
