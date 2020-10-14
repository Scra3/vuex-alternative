<template>
  <v-alert v-show="isAlertVisible" dense text type="success" class="alert">
    <span>
      <strong>{{ product.name }}</strong>
      is added in you shopping cart.
    </span>
  </v-alert>
</template>
<script>
export default {
  name: "Alert",
  data() {
    return {
      isAlertVisible: true
    };
  },
  props: {
    product: { type: Object, required: true }
  },
  created() {
    setTimeout(() => (this.isAlertVisible = false), 1500);
  }
};
</script>
