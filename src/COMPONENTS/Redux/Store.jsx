import { configureStore } from "@reduxjs/toolkit";
import airway from './Slice'

export default  configureStore({
    reducer:{
      airway
    }
})