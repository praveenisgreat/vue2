<template>
  <b-row>
    <b-col cols="12">
      <collapse-types />
    </b-col>
    
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import CollapseTypes from './collapse/CollapseTypes.vue'

export default {
  components: {
    BRow,
    BCol,
    CollapseTypes,
  },
}
</script>
