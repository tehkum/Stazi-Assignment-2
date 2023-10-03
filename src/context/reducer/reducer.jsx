import { Data } from "../../data";

const initial = {
  data: Data,
  module: 6,
  city: "London",
};

export default function hotelreducer(state = initial, action) {
  switch (action.type) {
    case "SHOW_MORE":
      return {
        ...state,
        module: +state.module + 3,
      };

    case "RESET_MODULE":
      return {
        ...state,
        module: 6,
      };

    case "CITY_FILTER":
      return {
        ...state,
        city: action.payload,
      };

    default:
      return state;
  }
}
