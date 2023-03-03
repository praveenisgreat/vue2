<template>
  <b-card-code>
      <b-row>
        <b-col md="4">
          <b-form-group
            label="Identification#"
            label-for="mc-id"
          >
            <b-form-input
              id="mc-id"
              placeholder="Id number/Passport"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4">
          <b-form-group
            label="Salutation"
            label-for="mc-salutation"
          >
            <b-form-input
              id="mc-salutation"
              placeholder="Mr/Mrs/MS/Miss"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4">
          <b-form-group
            label="First Name"
            label-for="mc-first-name"
          >
            <b-form-input
              id="mc-first-name"
              placeholder="First Name"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="Middle name"
            label-for="mc-middle-name"
          >
            <b-form-input
              id="mc-middle-name"
              placeholder="Middle name"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label="Last Name"
            label-for="mc-last-name"
          >
            <b-form-input
              id="mc-last-name"
              placeholder="Last Name"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4">
          <b-form-group
            label="CIF#"
            label-for="mc-cif"
          >
            <b-form-input
              id="mc-cif"
              placeholder="Auto generate"
              disabled
            />
          </b-form-group>
        </b-col>
      </b-row>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeMultipleColumn } from './code'

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
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      codeMultipleColumn,
    }
  },
}
</script>
