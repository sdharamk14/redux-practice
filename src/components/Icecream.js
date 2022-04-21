import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as icecreamActions from "../redux/actions/icecreamActions";
const Icecream = (props) => {
  return (
    <>
      <p>Cake: {props.icecream}</p>
      <button onClick={props.addIcecream}>Add Icecream</button>
      <button onClick={props.removeIcecream}>Remove Icecream</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    icecream: state.icecream.icecream
  };
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(icecreamActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Icecream);
