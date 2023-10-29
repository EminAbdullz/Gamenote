import { TypeChildren } from "@/shared/types/children";
import { TypeClassname } from "@/shared/types/className";

export interface INavigationLink extends TypeChildren, TypeClassname {
	href?: string;
}
