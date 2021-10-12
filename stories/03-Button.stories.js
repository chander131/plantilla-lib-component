"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Small = exports.Large = exports.Secondary = exports.Primary = void 0;
const react_1 = __importDefault(require("react"));
const src_1 = require("../src");
exports.default = {
    title: 'Components/Button',
    component: src_1.Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
const Template = (args) => react_1.default.createElement(src_1.Button, Object.assign({}, args));
exports.Primary = Template.bind({});
exports.Primary.args = {
    primary: true,
    label: 'Button',
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    label: 'Button',
};
exports.Large = Template.bind({});
exports.Large.args = {
    size: 'large',
    label: 'Button',
};
exports.Small = Template.bind({});
exports.Small.args = {
    size: 'small',
    label: 'Button',
};
