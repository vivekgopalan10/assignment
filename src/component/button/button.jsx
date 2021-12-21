import React from "react";
import './button.css';

const Button = ({onClick , btnTxt ,style}) => <button className="btn-style" style={{...style}} onClick={()=>onClick()}>{btnTxt}</button>

export default Button;