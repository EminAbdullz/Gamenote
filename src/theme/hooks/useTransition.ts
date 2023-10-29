import { useTheme } from "@mui/material";

const useTransition = (): string => {
	const transtionDuration = useTheme()?.transitions?.duration?.short;
	const transitionEasing = useTheme()?.transitions?.easing?.easeInOut;

	return `${transtionDuration}${transitionEasing}`;
};

export default useTransition;
