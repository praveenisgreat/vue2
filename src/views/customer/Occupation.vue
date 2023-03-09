<template>
  <b-card-code>
    <b-form @submit.prevent>
      <b-row>
        <b-col md="6">
          <b-form-group
            label="Employer name"
            label-for="mc-occupation-emp-name"
          >
            <b-form-input
              id="mc-occupation-emp-name"
              placeholder="Employer name"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <b-form-group
            label="Occupation"
            label-for="mc-occupation-position"
          >
            <b-form-input
              id="mc-occupation-position"
              placeholder="Occupation"
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label="Designation"
            label-for="mc-occupation-designation"
          >
            <b-form-input
              id="mc-occupation-designation"
              placeholder="Designation"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <h5>Active Income details</h5>
      <b-row>
        <b-col md="6">
          <b-form-group
            label="Montly"
            label-for="mc-occupation-monthly-income"
          >
            <b-form-input
              id="mc-occupation-monthly-income"
              placeholder="Fixed monthly income"
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label="Variable"
            label-for="mc-occupation-variable"
          >
            <b-form-input
              id="mc-occupation-variable"
              placeholder="variable pay per month"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <div>
        <AddIncomeDetails />
      </div>
      <b-row>
        <b-col md="6">
          <b-form-group
            label="Overall annual income"
            label-for="mc-occupation-annual"
          >
            <b-form-input
              id="mc-occupation-annual"
              placeholder="Auto generate"
              disabled
            />
          </b-form-group>
        </b-col>
      </b-row>
    </b-form>
    <template #code>
      {{ codeMultipleColumn }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BRow, BCol, BFormGroup, BFormInput, BForm,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { codeMultipleColumn } from './code'

import AddIncomeDetails from './components/AdditionalIncome.vue'

export default {
  components: {
    BCardCode,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BForm,
    AddIncomeDetails,
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
