<template>
  <layout-full>
    <router-view />
    <!-- Using `customizer` slot to render customizer -->
    <app-customizer v-if="showCustomizer" slot="customizer" />
  </layout-full>
</template>

<script>
import LayoutFull from '@core/layouts/layout-full/LayoutFull.vue'
import AppCustomizer from '@core/layouts/components/app-customizer/AppCustomizer.vue'
import { $themeConfig } from '@themeConfig'

export default {
  components: {
    LayoutFull,
    AppCustomizer,
  },
  data() {
    return {
      showCustomizer: $themeConfig.layout.customizer,
    }
  },
}
</script>
