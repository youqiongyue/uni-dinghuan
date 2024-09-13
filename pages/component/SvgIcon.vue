<template>
  <view class="svg-icon" :style="svgStyle" v-html="svgContent"></view>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    src: {
      type: String,
      required: true
    },
    width: {
      type: String,
      default: '100%' // 默认宽度
    },
    height: {
      type: String,
      default: '100%' // 默认高度
    },
    color: {
      type: String,
      default: '' // 默认颜色
    }
  },
  data() {
    return {
      svgContent: ''
    };
  },
  computed: {
    svgStyle() {
      return {
        width: this.width,
        height: this.height,
        fill: this.color // 设置填充颜色
      };
    }
  },
  mounted() {
    this.loadSvg();
  },
  methods: {
    loadSvg() {
      uni.request({
        url: this.src,
        method: 'GET',
        responseType: 'text',
        success: (res) => {
          this.svgContent = res.data;
          this.applyColor(); // 应用颜色
        },
        fail: (err) => {
          console.error('Failed to load SVG:', err);
        }
      });
    },
    applyColor() {
      // 如果 SVG 中没有 fill 属性，则添加 fill 属性
      if (this.color && this.svgContent) {
        this.svgContent = this.svgContent.replace(/fill="[^"]*"/g, `fill="${this.color}"`);
        this.svgContent = this.svgContent.replace(/fill:\s*[^;]*/g, `fill: ${this.color}`);
      }
    }
  }
};
</script>

<style scoped>
.svg-icon {
  display: inline-block; /* 使 SVG 组件为行内块元素 */
}
</style>