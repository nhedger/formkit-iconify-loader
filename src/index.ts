import type { FormKitIconLoader } from "@formkit/themes";
import type { IconifyJSON } from "@iconify/types";
import { getIconData, iconToSVG, iconToHTML, replaceIDs } from "@iconify/utils";

export const createIconifyLoader = (icons: IconifyJSON): FormKitIconLoader => {
	return async (name: string) => {
		// Retrieve the data for the icon
		const iconData = getIconData(icons, name);

		// If the icon doesn't exist, return undefined
		if (!iconData) {
			return undefined;
		}

		// Render the icon to SVG
		const renderData = iconToSVG(iconData);

		// Return the SVG element
		return iconToHTML(replaceIDs(renderData.body), renderData.attributes);
	};
};
