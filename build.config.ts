import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
	entries: ["src/index"],
	declaration: true,
	clean: true,
	rollup: {
		emitCJS: true,
	},
	alias: {
		"@/": "src/",
	},
	externals: ["@iconify/types", "@iconify/utils", "@formkit/themes"],
});
