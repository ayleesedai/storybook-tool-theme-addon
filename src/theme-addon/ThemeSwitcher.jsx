import React, { useCallback, useEffect } from "react";
import { useAddonState } from "@storybook/api";
import addons from "@storybook/addons";

const THEME_SWITCH_MAP = {
    light: "dark",
    dark: "light"
};
const THEME_OFFSET = {
    light: 0,
    dark: 50
};

const ADDON_ID = "ADOON_UNIFORM_THEME";
const ADDON_EVENT_NAME = "ADOON_UNIFORM_EVENT_NAME";

const ThemeSwitcher = () => {
    const [theme, setTheme] = useAddonState(ADDON_ID, "light");
    const switchTheme = useCallback(() => setTheme(THEME_SWITCH_MAP[theme]), [
        theme,
        setTheme
    ]);
    useEffect(() => {
        const channel = addons.getChannel();
        channel.emit(ADDON_EVENT_NAME, theme);
    }, [theme]);
    // const theme = "la merda";
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
