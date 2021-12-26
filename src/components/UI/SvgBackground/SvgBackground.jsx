import React from "react";
import css from "./SvgBackground.module.css";

export default function SvgBackground({ color = "#DB2379" }) {
	return (
		<svg
			key={Math.random()}
			className={css.svgBackground}
			width="132"
			height="50"
			viewBox="0 0 132 50"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M14.7486 35.5818C10.324 40.8943 6.63687 45.4478 0 44.6889V50H132V0.670465C131.508 0.164516 129.64 -0.543812 126.101 0.670465C121.676 2.18831 112.089 16.6079 103.24 21.1614C94.3911 25.7149 84.8045 15.0893 75.9553 14.3304C67.1061 13.5714 63.419 27.991 55.3073 29.5088C47.1955 31.0267 41.2961 26.4747 33.1844 24.9569C25.0726 23.439 19.1732 30.2694 14.7486 35.5818Z"
				fill="url(#paint_linear)"
			/>
			<path
				d="M12 38.6522C12.7346 39.4454 14.9383 40.2386 17.8765 37.0658C21.5494 33.0997 23.7531 23.5811 32.5679 21.9946C41.3827 20.4082 43.5864 29.1336 54.6049 31.5133C65.6235 33.8929 69.2963 31.5139 75.1728 27.5478C81.0494 23.5817 87.6605 8.51062 97.9444 8.51062C108.228 8.51062 111.901 11.6835 119.247 19.6157C125.123 25.9614 129.531 27.5478 131 27.5478"
				stroke="#894BA9"
				strokeWidth="0.5"
			/>
			<defs>
				<linearGradient
					id="paint_linear"
					x1="106.19"
					y1="3.03569"
					x2="104.628"
					y2="52.3629"
					gradientUnits="userSpaceOnUse">
					<stop stopColor={color} />
					<stop offset={1} stopColor={color} stopOpacity="0" />
				</linearGradient>
			</defs>
		</svg>
	);
}
