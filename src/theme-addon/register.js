import * as React from "react";
import addons, { types } from "@storybook/addons";
import ThemeSwitcher from "./ThemeSwitcher";
import { ADDON_ID } from "./themeDecoratorConstants";

addons.register(ADDON_ID, () => {
    addons.add(ADDON_ID, {
        title: "Uniform theme",
        type: types.TOOL,
        match: ({ viewMode }) => viewMode === "story",
        render: () => <ThemeSwitcher />
    });
});
