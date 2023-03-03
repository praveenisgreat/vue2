<template>
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
            <b-list-group-item  class="d-flex">
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
      class="swiper-responsive-breakpoints"
      :options="swiperOptions"
      :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
    >
      <swiper-slide
        v-for="(data,index) in swiperData"
        :key="index"
        href=""
      >
        <b-img
          :src="data.img"
          fluid
          v-b-modal.modal-1
        />    
      </swiper-slide>
      <!-- Add Arrows -->
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

    <template #code>
      {{ codeResponsive }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { BImg, BModal, BButton, VBModal, BAlert, BCardText, BListGroup, BListGroupItem } from 'bootstrap-vue'
import 'swiper/css/swiper.css'
import { codeResponsive } from './code'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    Swiper,
    SwiperSlide,
    BCardCode,
    BImg,
    BModal,
    BButton,
    VBModal,
    BAlert,
    BCardText,
    BListGroup,
    BListGroupItem
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
  data() {
    return {
      codeResponsive,

      /* eslint-disable global-require */
      swiperData: [
        { img: require('@/assets/images/cards/KRISFLYER-UOB-CREDIT-CARD.jpeg') },
        { img: require('@/assets/images/cards/UOB-PROFESSIONALS-PLATINUM-CARD.jpeg') },
        { img: require('@/assets/images/cards/UOB-PRVI-MILES-CARD.jpeg') },
        { img: require('@/assets/images/cards/UOB-LADY-DEBIT-CARD.jpeg') },
        { img: require('@/assets/images/cards/METRO-UOB-CARD.jpeg') },
        { img: require('@/assets/images/cards/KRISFLYER-UOB-CREDIT-CARD.jpeg') },
        { img: require('@/assets/images/cards/UOB-PROFESSIONALS-PLATINUM-CARD.jpeg') },
        { img: require('@/assets/images/cards/UOB-PRVI-MILES-CARD.jpeg') },
        { img: require('@/assets/images/cards/UOB-LADY-DEBIT-CARD.jpeg') },
        { img: require('@/assets/images/cards/METRO-UOB-CARD.jpeg') },
      ],
      /* eslint-disable global-require */

      swiperOptions: {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 50,
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
}
</script>
