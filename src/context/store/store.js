import { createStore } from "redux";
import hotelreducer from "../reducer/reducer";

const store = createStore(hotelreducer);

export default store;
