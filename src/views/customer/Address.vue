<template>
    <b-card-code>
      <b-form ref="form"
              :style="{height: trHeight}"
              class="repeater-form"
              @submit.prevent="repeateAgain"
              >
        <div v-for="(item, index) in items"
              :id="item.id"
              :key="item.id"
              ref="row">
        <b-row>
          <b-col md="12">
            <span class="mb-3">Address Type</span>
            <b-form-group>
              <b-form-radio-group
                id="radio-group-2"
                v-model="item.addressType"
                name="radio-sub-component"
                class="demo-inline-spacing"
                ref="radio"
              >
                <b-form-radio value="home">
                  Home
                </b-form-radio>
                <b-form-radio value="office">
                  Office
                </b-form-radio>
              </b-form-radio-group>
            </b-form-group>
          </b-col>
        </b-row><br>
        <b-row>
          <b-col md="4">
            <b-form-group
              label="Pincode"
              label-for="mc-address-pin"
            >
              <b-form-input
                id="mc-address-pin"
                placeholder="Pincode"
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="4">
            <b-form-group
              label="Country"
              label-for="mc-address-country"
            >
              <b-form-input
                id="mc-address-country"
                placeholder="Country"
              />
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group
              label="State"
              label-for="mc-address-state"
            >
              <b-form-input
                id="mc-address-state"
                placeholder="state"
              />
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group
              label="City"
              label-for="mc-address-city"
            >
              <b-form-input
                id="mc-address-city"
                placeholder="City"
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="4">
            <b-form-group
              label="Address line #1"
              label-for="mc-address-line1"
            >
              <b-form-input
                id="mc-address-lin1"
                placeholder="Address line #1"
              />
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group
              label="Address line #2"
              label-for="mc-address-line2"
            >
              <b-form-input
                id="mc-address-line2"
                placeholder="Address line #2"
              />
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group
              label="Address line #3"
              label-for="mc-address-line3"
            >
              <b-form-input
                id="mc-address-line3"
                placeholder="Address line #3"
              />
            </b-form-group>
          </b-col>
        </b-row>
        </div>
      </b-form>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
        @click="repeateAgain"
      >
        <feather-icon
          icon="PlusIcon"
          class="mr-25"
        />
        <span>Add New</span>
      </b-button>
      <template #code>
        {{ codeBasic }}
      </template>
  </b-card-code>
  </template>
  
  <script>
  import BCardCode from '@core/components/b-card-code'
  import {
    BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton, BFormRadioGroup, BFormRadio
  } from 'bootstrap-vue'
  import { heightTransition } from '@core/mixins/ui/transition'
  import Ripple from 'vue-ripple-directive'
  import { codeBasic } from '@/views/forms/form-repeater/code'
 
  export default {
    components: {
      BCardCode,
      BRow,
      BCol,
      BFormGroup,
      BFormInput,
      BFormCheckbox,
      BForm,
      BButton,
      BFormRadioGroup,
      BFormRadio
    },
    directives: {
      Ripple,
    },
    mixins: [heightTransition],
    data: () => ({
      items: [{
        id: 1,
        addressType: 'home',
        selected: 'male',
        selected1: 'designer',
        prevHeight: 0,
      }],
      nextTodoId: 2,
      codeBasic,
    }),
    mounted() {
    this.initTrHeight()
    },
    created() {
      window.addEventListener('resize', this.initTrHeight)
    },
    destroyed() {
      window.removeEventListener('resize', this.initTrHeight)
    },
    methods: {
      repeateAgain() {
        this.items.push({
          id: this.nextTodoId += this.nextTodoId,
        })

        this.$nextTick(() => {
          this.trAddHeight(this.$refs.row[0].offsetHeight)
        })
      },
      removeItem(index) {
        this.items.splice(index, 1)
        this.trTrimHeight(this.$refs.row[0].offsetHeight)
      },
      initTrHeight() {
        this.trSetHeight(null)
        this.$nextTick(() => {
          this.trSetHeight(this.$refs.form.scrollHeight)
        })
      },
    },
  }
  </script>

<style lang="scss" scoped>
.repeater-form {
  overflow: hidden;
  transition: .35s height;
}
</style>
  