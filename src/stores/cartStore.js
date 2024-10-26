import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  
  const cart = ref(JSON.parse(localStorage.getItem("cart")) ?? []);
  const quantityOfProducts = computed(() => cart.value.reduce((quantity, product) => product.cantidad + quantity, 0))
  const subtotal = computed(() => cart.value.reduce((amount, product) => product.cantidad * product.producto_precio + amount, 0))

  function addProduct(productToAdd) {
    const indexProductInCart = cart.value.findIndex(
      (product) => productToAdd.id == product.id
    );
    if (indexProductInCart != -1) {
      cart.value[indexProductInCart].cantidad++;
    } else {
      cart.value.push({ ...productToAdd, cantidad: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart.value));
  }

  function substractProduct(productToSubstract) {
    const indexProductInCart = cart.value.findIndex(
      (product) => productToSubstract.id == product.id
    );
    if (indexProductInCart != -1) {
      cart.value[indexProductInCart].cantidad--;
    }
    localStorage.setItem("cart", JSON.stringify(cart.value));
  }

  function deleteProduct(productToDelete) {
    cart.value = cart.value.filter(product => product.id != productToDelete.id)
    
    localStorage.setItem("cart", JSON.stringify(cart.value));
  }

  return {
    cart,
    quantityOfProducts,
    subtotal,
    addProduct,
    substractProduct,
    deleteProduct
  };
});
