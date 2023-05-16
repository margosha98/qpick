import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      img: './assets/headPh.jpg',
      title: 'Apple BYZ S852I',
      price: 2927,
      rate: 4.7,
      category: 'headphones',
      heart: false,
    },
    {
      img: './assets/headPh2.jpg',
      title: 'Apple EarPods ',
      price: 2927,
      rate: 4.7,
      category: 'headphones',
      heart: false,
    },
    {
      img: './assets/wireless.jpg',
      title: 'Apple OK S852I',
      price: 3000,
      rate: 3,
      category: 'wireless',
      heart: false,
    },
    {
      img: '../assets/headPh3.jpg',
      title: 'Apple BY S852I',
      price: 3000,
      rate: 3,
      category: 'headphones',
      heart: false,
    },
    {
      img: './assets/wireless2.jpg',
      title: 'Apple P S852I',
      price: 3500,
      rate: 3,
      category: 'wireless',
      heart: false,
    },
  ],
  cartItems: [],
  heartItems: [],
  totalPrice: 0,
  totalCount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      let isFinded = state.cartItems.find((el) => el.title === action.payload.title);
      isFinded
        ? (isFinded.count += 1)
        : state.cartItems.push({ ...action.payload, count: 1, heart: false });

      state.totalPrice = state.cartItems.reduce((acc, cur) => acc + cur.price * cur.count, 0);
      state.totalCount = state.cartItems.reduce((acc, cur) => acc + cur.count, 0);
    },
    incrementItem: (state, action) => {
      let item = state.cartItems.find((el) => action.payload === el.title);
      item.count += 1;
      state.totalPrice = state.cartItems.reduce((acc, cur) => acc + cur.price * cur.count, 0);
      state.totalCount = state.cartItems.reduce((acc, cur) => acc + cur.count, 0);
    },
    decrementItem: (state, action) => {
      let item = state.cartItems.find((el) => action.payload === el.title);
      item.count -= 1;
      if (item.count === 0) {
        state.cartItems = state.cartItems.filter((el) => el.title !== action.payload);
      }
      state.totalPrice = state.cartItems.reduce((acc, cur) => acc + cur.price * cur.count, 0);
      state.totalCount = state.cartItems.reduce((acc, cur) => acc + cur.count, 0);
    },
    deleteItem: (state, action) => {
      state.cartItems = state.cartItems.filter((el) => el.title !== action.payload);
      state.totalCount = state.cartItems.reduce((acc, cur) => acc + cur.count, 0);
      state.totalPrice = state.cartItems.reduce((acc, cur) => acc + cur.price * cur.count, 0);
    },
    addAllItemsToCart: () => {},
    toogleHeart: (state, action) => {
      state.items.find((el) => el.title === action.payload.title).heart = !action.payload.heart;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, incrementItem, decrementItem, deleteItem, toogleHeart, addAllItemsToCart } =
  cartSlice.actions;

export default cartSlice.reducer;
