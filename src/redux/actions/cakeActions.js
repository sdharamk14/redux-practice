import { ADD_CAKE, DEC_CAKE } from "../reducers/CakeReducer";
export const addCake = () => ({
  type: ADD_CAKE
});

export const removeCake = () => ({
  type: DEC_CAKE
});
