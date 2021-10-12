"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mundo = exports.Despedida = exports.Bienvenida = void 0;
const react_1 = __importDefault(require("react"));
const src_1 = require("../src");
exports.default = {
    title: 'Saludos/Hello',
    component: src_1.Hello,
    argTypes: {
        color: { control: 'color' },
    },
};
const Template = (args) => react_1.default.createElement(src_1.Hello, Object.assign({}, args));
exports.Bienvenida = Template.bind({});
exports.Bienvenida.args = {
    saludo: 'Hola bienvenid@!',
};
exports.Despedida = Template.bind({});
exports.Despedida.args = {
    saludo: 'Adios, fue un gusto.',
};
exports.Mundo = Template.bind({});
exports.Mundo.args = { saludo: undefined };
