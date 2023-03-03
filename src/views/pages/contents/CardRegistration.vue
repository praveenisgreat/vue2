<template>
    <b-row>
      <b-col cols="10">
        <collapse-types />
      </b-col>
      <b-col cols="2">
        <collapse-types />
      </b-col>
    </b-row>
  </template>
  
  <script>
  import { BRow, BCol } from 'bootstrap-vue'
  import CollapseTypes from '@/views/collapse/CollapseTypes.vue'
  
  export default {
    components: {
      BRow,
      BCol,
      CollapseTypes,
    },
  }
  </script>
  