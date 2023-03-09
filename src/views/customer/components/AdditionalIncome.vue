<template>
  <b-card-code>
    <div
      ref="form"
      :style="{height: trHeight}"
      class="repeater-form"
    >
      <!-- Row Loop -->
      <b-row
        v-for="(item, index) in items"
        :id="item.id"
        :key="item.id"
        ref="row"
      >

        <!-- Item Name -->
        <b-col md="2">
          <b-form-group
            label="Income type"
            label-for="item-type"
          >
            <v-select
              v-model="item.itemTitle"
              :options="itemsOptions"
              label="itemTitle"
              :clearable="false"
              class="mb-2 item-selector-title"
              placeholder="Select Item"
            />
          </b-form-group>
        </b-col>

        <!-- Monthly -->
        <b-col md="2">
          <b-form-group
            label="Montly"
            label-for="monthly"
          >
            <b-form-input
              id="monthly"
              type="number"
              placeholder="1000"
            />
          </b-form-group>
        </b-col>

        <!-- Annual -->
        <b-col md="2">
          <b-form-group
            label="Annual"
            label-for="annual"
          >
            <b-form-input
              id="annual"
              type="number"
              placeholder="12000"
            />
          </b-form-group>
        </b-col>

        <!-- Upload doc -->
        <b-col md="4">
          <b-form-group
            label="Upload"
            label-for="upload"
          >
            <b-form-file
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
              multiple
            />
          </b-form-group>
        </b-col>

        <!-- Remove Button -->
        <b-col
          lg="2"
          md="2"
        >
          <b-button
            v-ripple.400="'rgba(234, 84, 85, 0.15)'"
            variant="flat-danger"
            class="mt-0 mt-md-2"
            @click="removeItem(index)"
          >
            <feather-icon
              icon="XIcon"
              class="mr-25"
            />
          </b-button>
        </b-col>
        <b-col cols="12">
          <hr>
        </b-col>
      </b-row>
    </div>
    <div>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        size="sm"
        variant="primary"
        @click="repeateAgain"
      >
        <feather-icon
          icon="PlusIcon"
          class="mr-25"
        />
        <span>Additional income</span>
      </b-button>
    </div>
    <template #code>
      {{ codeBasic }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BForm, BFormGroup, BFormInput, BRow, BCol, BButton, BFormFile,
} from 'bootstrap-vue'
import { heightTransition } from '@core/mixins/ui/transition'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import { codeBasic } from './code'

export default {
  components: {
    BCardCode,
    BForm,
    BRow,
    BCol,
    BButton,
    BFormGroup,
    BFormInput,
    BFormFile,
    vSelect,
  },
  directives: {
    Ripple,
  },
  mixins: [heightTransition],
  data() {
    return {
      items: [{
        overflow: 'hidden',
        id: 1,
        prevHeight: 0,
        description: '',
      }],
      nextTodoId: 2,
      codeBasic,
    }
  },
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
      this.$refs.form.overflow = visible
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
  setup() {
    const itemsOptions = [
      {
        itemTitle: 'Passive income',
        description: 'Designed UI kit & app pages.',
      },
      {
        itemTitle: 'Portfolio income',
        description: 'Customization & Bug Fixes.',
      },
    ]

    return {
      itemsOptions,
    }
  },
}
</script>

<style lang="scss" scoped>
.repeater-form {
  overflow: hidden;
  transition: .35s height;
}
</style>
