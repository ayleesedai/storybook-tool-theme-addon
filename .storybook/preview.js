import React from "react";
import { addDecorator } from "@storybook/react";
import ThemeDecorator from "../src/theme-addon/themeDecoratori";

addDecorator(storyFn => <ThemeDecorator storyFn={storyFn} />);
