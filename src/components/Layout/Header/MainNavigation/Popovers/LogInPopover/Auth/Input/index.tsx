import React from "react";

import { StyledTextField } from "./styles";
import { TypeTextField } from "./types";

const Input: React.FC<TypeTextField> = ({
	label,
	value,
	type,
	onChange,
	InputProps,
}) => {
	return (
		<StyledTextField
			autoComplete="off"
			label={label}
			value={value}
			type={type}
			onChange={onChange}
			InputProps={InputProps}
		/>
	);
};

export default Input;
