import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
    product: {},
    products: []
};

export const fetchProducts = createAsyncThunk("products/fetchProducts", async() => {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    return products;
});

export const fetchProduct = createAsyncThunk("product/fetchProduct", async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await response.json();
    return product
})
export const {reducer, actions} = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload
        })
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.product = action.payload
        })
    }

})