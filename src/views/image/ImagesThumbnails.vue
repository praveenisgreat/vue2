<template>
  <b-card-code title="Image thumbnails">
    <b-card-text>
      <span>You can use prop </span>
      <code>thumbnail</code>
      <span>to give an image a rounded light border appearance.</span>
    </b-card-text>
    <div>
      <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          fade
          indicators
          class="p-1 bg-light"
          img-width="100px"
          img-height="80px"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
          >
          <!-- Text slides with image -->
          <b-carousel-slide
            caption="First slide"
            text="Nulla vitae elit libero, a pharetra augue mollis interdum."
            img-src="https://picsum.photos/1024/480/?image=52"
          ></b-carousel-slide>

          <!-- Slides with custom text -->
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
            <h1>Hello world!</h1>
          </b-carousel-slide>

          <!-- Slides with image only -->
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

          <!-- Slides with img slot -->
          <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
          <b-carousel-slide>
            <template #img>
              <img
                class="d-block img-fluid w-100"
                width="100"
                height="80"
                src="https://picsum.photos/1024/480/?image=55"
                alt="image slot"
              >
            </template>
          </b-carousel-slide>

          
      </b-carousel>
      <p class="mt-4">
          Slide #: {{ slide }}<br>
          Sliding: {{ sliding }}
      </p>
    </div>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BImg, BContainer, BRow, BCol, BCardText, BCarousel, BCarouselSlide
} from 'bootstrap-vue'

export default {
  components: {
    BCardCode,
    BImg,
    BContainer,
    BCardText,
    BRow,
    BCol,
    BCarousel,
    BCarouselSlide,
  },
  data() {
      return {
        slide: 0,
        sliding: null
      }
    },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>

<style>
    .carousel-item img {
        height:200vh!important ;
        width: 1000vh!important;
    }
</style>
