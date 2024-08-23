<template>
  <view v-show="isActive">
    <slot></slot>
  </view>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      required: true
    },
    current: {
      type: Number,
      default: 0
    }
  },
  computed: {
    isActive() {
      return this.index === this.current;
    }
  }
}
</script>