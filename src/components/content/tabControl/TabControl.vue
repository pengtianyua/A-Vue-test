<template>
<div class='tab_control'>
  <div v-for="(item, index) in title" :key="index" class="tab_control_item" :class="{ active: currentIndex === index }" @click="itemClick(index)">
    <span>{{ item }}</span>
  </div>
</div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    title: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style lang="less" scoped>
.tab_control {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  z-index: 999;

  .tab_control_item {
    flex: 1;

    span {
      padding: 5px;
    }
  }

  .active {
    color: var(--color-high-text);

    span {
      border-bottom: 3px solid var(--color-tint);
    }
  }
}
</style>
