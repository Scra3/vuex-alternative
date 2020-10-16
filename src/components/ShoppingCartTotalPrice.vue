<template>
  <section class="total">
    <h2>
      Total:
      <span class="total--price">{{ totalPrice }}</span>
    </h2>
    <v-btn color="success">
      Place order
      <v-icon right>
        mdi-credit-card-outline
      </v-icon>
    </v-btn>
  </section>
</template>

<script>
export default {
  name: "ShoppingCartTotalPrice",
  props: {
    totalPrice: {
      type: Number,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.total {
  text-align: right;
  align-self: flex-end;

  &--price:before {
    content: "$";
  }
}
</style>
