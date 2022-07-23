import { createSlice } from "@reduxjs/toolkit"

const INIT_STATE = {
    carts: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: INIT_STATE,
    reducers: {
        add: (state = INIT_STATE, action) => {
            const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);

            if (itemIndex >= 0) {
                state.carts[itemIndex].qnty += 1
            } else {
                const temp = { ...action.payload, qnty: 1 }
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }

        },
        rmv: (state, action) => {
            const data = state.carts.filter((el) => el.id !== action.payload)
            return {
                ...state,
                carts: data
            }
        }
    }
})

export const { add, rmv } = cartSlice.actions

export default cartSlice.reducer