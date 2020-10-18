<template>
  <v-card elevation="2" class="product">
    <img class="product--picture" :src="product.picture" />
    <h3>{{ product.name }}</h3>
    <span class="product--description">{{ product.description }}</span>
    <span class="product--price">{{ product.price }}</span>
    <v-btn color="primary" @click="add()">
      Add
      <v-icon right>
        mdi-plus
      </v-icon>
    </v-btn>
  </v-card>
</template>

<script>
export default {
  name: "Product",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    add() {
      this.$shoppingCart.add(this.product);
    }
  }
};
</script>

<style scoped lang="scss">
.product {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2em;
  padding: 1em;
  align-items: center;

  &--picture {
    width: 10em;
  }

  &--description {
    width: 30%;
    text-align: justify;
  }

  &--price:before {
    content: "$";
  }
}
</style>
