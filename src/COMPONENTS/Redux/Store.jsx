import { configureStore } from "@reduxjs/toolkit";
import airway from './Slice'
import book from './BookedSlice'

export default  configureStore({
    reducer:{
      airway,
      book
    }
})