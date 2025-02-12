import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ url }) => {
	return { pathname: url.pathname };
};
