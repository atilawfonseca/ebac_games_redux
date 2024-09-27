import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reduces/carrinho'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
