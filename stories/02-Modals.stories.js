"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalContent = void 0;
const react_1 = __importDefault(require("react"));
const src_1 = require("../src");
exports.default = {
    title: 'Components/Modal',
    component: src_1.Modal,
    argTypes: {
        backgroundColorHF: { control: 'color' },
    },
};
const Template = (args) => react_1.default.createElement(src_1.Modal, Object.assign({}, args));
const Hijo = () => (react_1.default.createElement("div", null,
    react_1.default.createElement("p", null, "Parrafo para el cuerpo del modal"),
    react_1.default.createElement("span", null, ':)')));
const Footer = () => (react_1.default.createElement("div", null,
    react_1.default.createElement("span", null, new Date().getFullYear())));
exports.ModalContent = Template.bind({});
exports.ModalContent.args = {
    isOpen: false,
    children: react_1.default.createElement(Hijo, null),
    footer: true,
    contentFooter: react_1.default.createElement(Footer, null),
};
