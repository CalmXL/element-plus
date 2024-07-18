<template>
  <i class="z-icon" :style="style">
    <slot></slot>
  </i>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { iconProps } from './icon';

  defineOptions({
    name: 'zIcon',
    inheritAttrs: false
  })

  const props = defineProps(iconProps);

  const style = computed(() => {
    const { size, color } = props;

    if (!size && !color) return {}

    return {
      fontSize: size + 'px',
      color
    }
  })

</script>

<style lang="scss">
</style>