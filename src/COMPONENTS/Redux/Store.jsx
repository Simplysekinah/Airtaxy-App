import { configureStore } from "@reduxjs/toolkit";
import airway from './Slice'
import book from './BookedSlice'
import Check from "./FlightBookSlice";

export default  configureStore({
    reducer:{
      airway,
      book,
      Check
    }
})