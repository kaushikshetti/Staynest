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
