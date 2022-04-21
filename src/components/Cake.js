import React from "react";
import { connect } from "react-redux";
import { addCake, removeCake } from "../redux/actions/cakeActions";

const Cake = (props) => {
  return (
    <>
      <p>Cake: {props.cake}</p>
      <button onClick={props.addCake}>Add Cake</button>
      <button onClick={props.removeCake}>Remove Cake</button>
    </>
  );
};

const mapStateToProps = (state) => ({
  cake: state.cake.cake
});
const mapDispatchToProps = (dispatch) => ({
  addCake: () => dispatch(addCake()),
  removeCake: () => dispatch(removeCake())
});
export default connect(mapStateToProps, mapDispatchToProps)(Cake);
