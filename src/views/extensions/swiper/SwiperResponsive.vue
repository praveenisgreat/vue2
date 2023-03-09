<template slot="swiperSlot">
  <b-card-code>
    <div class="demo-inline-spacing">
      <!-- basic modal -->
      <b-modal
        id="modal-1"
        title="Card details"
        centered
        ok-only
        ok-title="Accept"
      >
        <b-card-text>
          <b-list-group>
            <b-list-group-item class="d-flex">
              <span class="mr-1">
                <feather-icon
                  icon="CheckIcon"
                  size="16"
                />
              </span>
              <span>
                Up to 5.4 KrisFlyer miles per S$1 spend. No minimum income required
              </span>
            </b-list-group-item>
            <b-list-group-item class="d-flex">
              <span class="mr-1">
                <feather-icon
                  icon="CheckIcon"
                  size="16"
                />
              </span>
              <span>
                Exclusive benefits from Scoot and Tigerair
              </span>
            </b-list-group-item>
            <b-list-group-item class="d-flex">
              <span class="mr-1">
                <feather-icon
                  icon="CheckIcon"
                  size="16"
                />
              </span>
              <span>
                Convenience of payment with just a tap for bus/train rides and via Google Pay or ApplePay™
              </span>
            </b-list-group-item>
          </b-list-group>
        </b-card-text>
      </b-modal>
    </div>
    <swiper
      width="auto"
      class="swiper-responsive-breakpoints"
      :options="swiperOptions"
      :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
    >

      <swiper-slide
        v-for="(data,index) in swiperData"
        :key="index"
        href=""
      >
        <!-- For Selected -->
        <b-form-group
          v-slot="{ ariaDescribedby }"
          class="mr-0 mt-50"
          name="is-rtl"
          switch
          inline
        >
          <b-form-checkbox-group
            id="checkbox-group-2"
            v-model="selected"
            :aria-describedby="ariaDescribedby"
            name="flavour-2"
            class="d-flex flex-wrap justify-content-center"
          >
            <b-form-checkbox :value="data.name" />
          </b-form-checkbox-group>
        </b-form-group>
        <!-- End of Selected -->

        <b-img
          ref="imgRef"
          v-b-modal.modal-1
          :opacity="0.35"
          :src="data.img"
          fluid
        />
      <!-- Add Arrows -->
      </swiper-slide>
      <div
        slot="button-next"
        class="swiper-button-next"
      />
      <div
        slot="button-prev"
        class="swiper-button-prev"
      />
      <div
        slot="pagination"
        class="swiper-pagination"
      />
    </swiper>
    <b-card-text class="mt-1 mb-0">
      Selected: <strong>{{ selected }}</strong>
    </b-card-text>
    <template #code>
      {{ codeResponsive }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import {
  BImg, BModal, BButton, VBModal, BAlert, BCardText, BListGroup, BListGroupItem,
  BFormCheckbox, BFormCheckboxGroup, BFormGroup, VBHover,
} from 'bootstrap-vue'
import 'swiper/css/swiper.css'
import Ripple from 'vue-ripple-directive'
import { codeResponsive } from './code'

export default {
  components: {
    BFormCheckbox,
    BFormCheckboxGroup,
    BFormGroup,
    BCardCode,
    BImg,
    BModal,
    BCardText,
    BListGroup,
    BListGroupItem,
    VBHover,
  },
  directives: {
    'b-modal': VBModal,
    'b-hover': VBHover,
    Ripple,
  },
  data() {
    return {
      codeResponsive,
      slider: null,
      isHovered: false,
      opacity: '0.35',
      /* eslint-disable global-require */
      swiperData: [
        { img: require('@/assets/images/cards/KRISFLYER-UOB-CREDIT-CARD.jpeg'), name: 'KRISFLYER' },
        { img: require('@/assets/images/cards/UOB-PROFESSIONALS-PLATINUM-CARD.jpeg'), name: 'PROFESSIONALS' },
        { img: require('@/assets/images/cards/UOB-LADY-DEBIT-CARD.jpeg'), name: 'LADY' },
        { img: require('@/assets/images/cards/METRO-UOB-CARD.jpeg'), name: 'METRO' },
        { img: require('@/assets/images/cards/KRISFLYER-UOB-CREDIT-CARD.jpeg'), name: 'KRISFLYER2' },
        { img: require('@/assets/images/cards/UOB-PROFESSIONALS-PLATINUM-CARD.jpeg'), name: 'PROFESSIONALS2' },
        { img: require('@/assets/images/cards/UOB-LADY-DEBIT-CARD.jpeg'), name: 'LADY2' },
        { img: require('@/assets/images/cards/METRO-UOB-CARD.jpeg'), name: 'METRO2' },
      ],
      selected: [], // Must be an array reference! For card selection
      /* eslint-disable global-require */

      swiperOptions: {
        loop: false,
        slidesPerView: 4,
        spaceBetween: 10,
        freeMode: true,
        observer: true,
        observeParents: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
    }
  },
  methods: {
    imgHandler(isHovered) {
      if (isHovered) {
        this.$refs.imgRef.opacity = 0.75
      } else {
        this.$refs.imgRef.opacity = 0.00
      }
    },
  },
}
</script>
