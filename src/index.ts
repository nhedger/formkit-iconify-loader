import type { FormKitIconLoader } from "@formkit/themes";
import type { IconifyJSON } from "@iconify/types";
import { getIconData, iconToSVG, iconToHTML, replaceIDs } from "@iconify/utils";

export const createIconifyLoader = (
	icons: IconifyJSON,
	...moreIcons: IconifyJSON[]
): FormKitIconLoader => {
	return async (name: string) => {
		const allIcons = [icons, ...moreIcons];
		let setName: string | undefined = undefined;
		let iconName: string | undefined = undefined;

		// If the name of the icon include a colon, we split it into the set
		// name and the icon name.
		if (name.includes(":")) {
			[setName, iconName] = name.split(":");
		} else {
			iconName = name;
		}

		// Try to find the set to which the icons belongs using the set name.
		let set: IconifyJSON | undefined;
		if (setName && iconName) {
			set = allIcons.find((iconSet) => iconSet.prefix === setName);
		}

		// Retrieve the data for the icon from the set.
		// Fallback to the first set if no set was found previously.
		const iconData = getIconData(set || allIcons[0], iconName);

		// At this point, if no icon data was found, we return undefined
		// and no icon will be rendered.
		if (!iconData) {
			return undefined;
		}

		// Render the icon to SVG
		const renderData = iconToSVG(iconData);

		// Return the SVG element
		return iconToHTML(replaceIDs(renderData.body), renderData.attributes);
	};
};
