import {configureStore} from '@reduxjs/toolkit'
import UserReducer from './slicer'

export const store = configureStore({
    reducer:UserReducer
})

export default store