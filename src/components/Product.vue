<template>
  <v-card elevation="2" class="product">
    <h2>{{ product.name }}</h2>
    <div class="product--content">
      <img
        class="product--content--picture"
        :src="product.picture"
        :alt="product.name"
      />
      <span class="product--content--description">
        {{ product.description }}
      </span>
      <span class="product--content--price">{{ product.price }}</span>
      <v-btn color="primary" @click="add(product)">
        Add
        <v-icon right>
          mdi-plus
        </v-icon>
      </v-btn>
    </div>
  </v-card>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Product",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapMutations({
      add: "shoppingCart/add"
    })
  }
};
</script>

<style scoped lang="scss">
.product {
  display: flex;
  margin-bottom: 2em;
  padding: 1em;
  flex-direction: column;

  &--content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &--picture {
      width: 10em;
    }

    &--description {
      width: 30em;
      text-align: justify;
    }

    &--price:before {
      content: "$";
    }
  }
}
</style>
