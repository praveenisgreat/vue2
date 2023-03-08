<template>
  <b-card-code title="Add customer details">
    <b-card-text class="mb-0" />

    <!-- types -->
    <!-- :onlyOneActive="true" -->
    <app-collapse
      id="addCustCollapse"
      accordion
      :type="collapseType"
      :aria-expanded="true"
    >

      <app-collapse-item
        title="Personal"
        @load="updateVisible(!visible)"
      >
        <CustomerBasic />
      </app-collapse-item>

      <app-collapse-item
        title="Address"
      >
        <Address />
      </app-collapse-item>

      <app-collapse-item
        title="Occupation"
      >
        <Occupation />
      </app-collapse-item>

      <app-collapse-item
        title="Cards"
      >
        <CardSlider />
      </app-collapse-item>

      <app-collapse-item
        title="Declaration"
      >
        Cheesecake cotton candy bonbon muffin cupcake tiramisu croissant. Tootsie roll sweet candy bear claw chupa chups lollipop toffee. Macaroon donut liquorice powder candy carrot cake macaroon fruitcake. Cookie toffee lollipop cotton candy ice cream dragée soufflé. Cake tiramisu lollipop wafer pie soufflé dessert tart. Biscuit ice cream pie apple pie topping oat cake dessert. Soufflé icing caramels. Chocolate cake icing ice cream macaroon pie cheesecake liquorice apple pie.
      </app-collapse-item>
    </app-collapse>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BCardText } from 'bootstrap-vue'

import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'
import CustomerBasic from '../customer/CustomerBasic.vue'
import Address from '../customer/Address.vue'
import Occupation from '../customer/Occupation.vue'
import CardSlider from '../extensions/swiper/SwiperResponsive.vue'

export default {
  components: {
    BCardCode,
    BCardText,
    AppCollapse,
    AppCollapseItem,
    CustomerBasic,
    Address,
    Occupation,
    CardSlider,
  },
  data() {
    return {
      collapseType: 'margin',
    }
  },
}
</script>
