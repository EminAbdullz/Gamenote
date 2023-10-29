import { TypeChildren } from "@/shared/types/children";
import { TypeClassname } from "@/shared/types/className";

export interface TypeCustomLink extends TypeChildren, TypeClassname {
	href?: string;
}
