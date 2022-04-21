import { ADD_ICECREAM, DEC_ICECREAM } from "../reducers/IcecreamReducer";

export const addIcecream = () => ({
  type: ADD_ICECREAM
});

export const removeIcecream = () => ({
  type: DEC_ICECREAM
});
