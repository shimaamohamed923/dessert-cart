import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductsEffects from "./productEffects";

// Initial State
const initialState = {
  productsList: [],
  cartList: [],
  isOpen: false,
  isLoading: false,
  error: null,
};
export const getProductsList = createAsyncThunk("products/getProductsList", () => {
  return ProductsEffects.getProductsList();
});

// Create Slice
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId } = action.payload;

      const cartItem = state.cartList.find((item) => item.productId === productId);

      if (!cartItem) {
        state.cartList.push({
          productId,
          quantity: 1,
        });
      }
    },
    increaseQuantity(state, action) {
      const { productId } = action.payload;

      const product = state.cartList.find((p) => p.productId === productId);
      product.quantity += 1;
    },
    decreaseQuantity(state, action) {
      const { productId } = action.payload;

      const cartItem = state.cartList.find((item) => item.productId === productId);

      if (cartItem.quantity > 1) {
        cartItem.quantity -= 1;
      } else {
        state.cartList = state.cartList.filter((item) => item.productId !== productId);
      }
    },
    removeItem(state, action) {
      const { productId } = action.payload;

      const product = state.cartList.find((p) => p.productId === productId);
      product.quantity = 0;
      state.cartList = state.cartList.filter((item) => item.productId !== productId);
    },
    clearCart(state) {
      state.cartList = [];
    },
    openModal(state) {
      state.isOpen = true;
    },
    closeModal(state) {
      state.isOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductsList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProductsList.fulfilled, (state, action) => {
      state.productsList = action.payload;
      console.log(action.payload + "kklklk");
      state.isLoading = false;
    });

    builder.addCase(getProductsList.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

// Export
export const { addToCart, increaseQuantity, decreaseQuantity, removeItem, openModal, closeModal, clearCart } =
  productsSlice.actions; // al createslice by3ml create action l kol reducer automatic
export default productsSlice.reducer; // kol slice byrg3 reducer function to update state
