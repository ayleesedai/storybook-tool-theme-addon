import React, { useEffect, useCallback, useState } from "react";
import addons from "@storybook/addons";

const ADDON_EVENT_NAME = "ADOON_UNIFORM_EVENT_NAME";

const COLORS = {
    light: "yellow",
    dark: "black"
};

const ThemeDecorator = ({ storyFn }) => {
    const [theme, setTheme] = useState("light");
    const channel = addons.getChannel();

    useEffect(() => {
        channel.on(ADDON_EVENT_NAME, setTheme);

        return () => channel.off(ADDON_EVENT_NAME, setTheme);
    }, [channel]);

    return (
        <div style={{ border: `4px solid ${COLORS[theme]}` }}>{storyFn()}</div>
    );
};

export default ThemeDecorator;
