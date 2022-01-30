import React from "react";
import "../App.css";

const Menu = ({ setLineColor, setLineWidth,
setBushCount }) => {
return (
	<div className="Menu">
	<label>Cor</label>
	<input
		type="color"
		onChange={(e) => {
		setLineColor(e.target.value);
		}}
	/>
	<label>Tamanho</label>
	<input
		type="range"
		min="3"
		max="20"
		onChange={(e) => {
		setLineWidth(e.target.value);
		}}
	/>
	<label>Quantidade</label>
	<input
		type="range"
		min="1"
		max="100"
		onChange={(e) => {
        setBushCount(e.target.value / 100);
		}}
	/>
	</div>
);
};

export default Menu;
