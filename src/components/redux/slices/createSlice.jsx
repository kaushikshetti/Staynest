import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    }
  }
})

// Sidebar Slice for managing `isOpen`
const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    isOpen: false
  },
  reducers: {
    toggleSidebar: state => {
      state.isOpen = !state.isOpen;
    },
    closeSidebar: state => {
      state.isOpen = false;
    },
    openSidebar: state => {
      state.isOpen = true;
    }
  }
});



export const { incremented, decremented } = counterSlice.actions
export const { toggleSidebar, closeSidebar, openSidebar } = sidebarSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
  sidebar: sidebarSlice.reducer
})

export default store;
// Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()))

// Still pass action objects to `dispatch`, but they're created for us
// store.dispatch(incremented())
// // {value: 1}
// store.dispatch(incremented())
// // {value: 2}
// store.dispatch(decremented())
// {value: 1