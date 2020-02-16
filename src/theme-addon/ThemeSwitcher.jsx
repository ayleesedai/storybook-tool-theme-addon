import React, { useCallback } from "react";
import { useAddonState, useChannel } from "@storybook/api";
import { STORY_CHANGED } from "@storybook/core-events";
import { ADDON_ID, ADDON_EVENT_NAME } from "./themeDecoratorConstants";

const THEME_SWITCH_MAP = {
    light: "dark",
    dark: "light"
};
const THEME_OFFSET = {
    light: 0,
    dark: 50
};

const ThemeSwitcher = () => {
    const [theme, setTheme] = useAddonState(ADDON_ID, "light");
    const emit = useChannel({
        [STORY_CHANGED]: () => emit(ADDON_EVENT_NAME, theme)
    });
    const switchTheme = useCallback(() => {
        const newTheme = THEME_SWITCH_MAP[theme];
        setTheme(newTheme);
        emit(ADDON_EVENT_NAME, newTheme);
    }, [setTheme]);
    return (
        <div
            style={{
                display: "flex",
                padding: "3px 0",
                cursor: "pointer",
                alignSelf: "center",
                userSelect: "none",
                position: "relative",
                border: "1px solid rgba(100,100,255,0.2)"
            }}
            onClick={switchTheme}
        >
            <span style={{ width: "50px", textAlign: "center" }}>light</span>
            <span style={{ width: "50px", textAlign: "center" }}>dark</span>
            <div
                style={{
                    position: "absolute",
                    opacity: 0.5,
                    left: THEME_OFFSET[theme],
                    width: "50px",
                    top: 0,
                    bottom: 0,
                    backgroundColor: "rgba(100,100,255,0.2)",
                    transition: "left 300ms"
                }}
            />
        </div>
    );
};

export default ThemeSwitcher;
