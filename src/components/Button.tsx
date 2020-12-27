import React from "react";
import classNames from "classnames";

interface IButtonProps {
   children: React.ReactNode
   className: string
   outline: boolean
}

const Button: React.FC<IButtonProps> = ({ children, className, outline }) => {
	return (
		<button className={classNames("button", className, { "button--outline": outline })}>
			{children}
		</button>
	);
};
export default Button;
