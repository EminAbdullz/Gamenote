import {
	FilledInputProps,
	InputProps,
	OutlinedInputProps,
} from "@mui/material";

export type TypeTextField = {
	label: React.ReactNode;
	value: string;
	type: string;

	onChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;

	InputProps:
		| Partial<FilledInputProps>
		| Partial<OutlinedInputProps>
		| Partial<InputProps>
		| undefined;
};
