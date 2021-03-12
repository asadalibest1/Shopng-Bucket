import { bindActionCreators, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import data from "../json/data.json";

export const fetchRandomNumber: any = createAsyncThunk(
  'numbers/fetchRandomNumber',
  async (data, thunkAPI) => {
    const response = await fetch('/api/randomnumber');
    return await response.json();
  }
);

export const counterSlice = createSlice({

  name: 'counter',

  initialState: {
    data,
    carts: [],
    alertCart: []
  },

  reducers: {

    addCarts: (state: any, actions: any) => {

      state.carts = [...state.carts, { ...actions.payload, qty: 1 }];
    },

    addAlertCart: (state: any, actions: any) => {
      state.alertCart = [...state.alertCart, actions.payload];
    },

    setAlertEmpty: (state: any) => {
      state.alertCart = [];
    },

    addQty: (state: any, actions: any) => {
      state.carts.map((item: any) => {
        if (item.id === actions.payload.id) {
          item.qty += 1
        }
      })
      // console.log("carts :",state.cart)
    },

    deleteCart: (state: any, actions: any) => {

      state.carts = state.carts.filter((item: any) => item.id != actions.payload)

      // state.data.forEach((item: any) => {
      //   if (item.label === actions.payload.label) {
      //     const index = item.links.findIndex((link: any) => link.id === actions.payload.id);
      //     if (index > -1) {
      //       item.links.splice(index,1);
      //     }
      //   }
      // });
    },
    dislike: (state: any, actions: any) => {

      state.data.map((items: any) => {
        items.links.map((item: any) => {
          if (item.id === actions.payload) {
            item.dislikes = 1;
          }
        })
      })
    },
    addlike: (state: any, actions: any) => {
      state.data.map((items: any) => {
        items.links.map((item: any) => {
          if (item.id === actions.payload) {
            item.likes = ++item.likes;
          }
        })
      })
    },

  }
});

export const { addCarts, addAlertCart, setAlertEmpty, addQty, dislike, addlike, deleteCart } = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// export const incrementAsync = (amount: number) => (dispatch: any) => {
//   // console.log("amount", dispatch)
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

type State = {
  counter: {
    data: typeof data
  }
}

export const selectData = (state: State) => state.counter.data;
export const selectCarts = (state: any) => state.counter.carts;
export const selectAlertCart = (state: any) => state.counter.alertCart;

export default counterSlice.reducer;