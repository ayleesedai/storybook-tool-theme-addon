module.exports = {
    stories: ["../src/**/*.stories.js"],
    addons: [
        "@storybook/preset-create-react-app",
        "@storybook/addon-actions",
        "@storybook/addon-links",
        "./src/theme-addon/register.js"
    ]
};
