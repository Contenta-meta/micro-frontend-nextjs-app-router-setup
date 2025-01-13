"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Footer: () => Footer,
  Header: () => Header,
  cn: () => cn
});
module.exports = __toCommonJS(index_exports);

// src/components/Header/index.tsx
var import_react = __toESM(require("react"));
var import_link = __toESM(require("next/link"));

// src/utils/cn.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/Header/index.tsx
function Header(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ import_react.default.createElement(
    "header",
    __spreadValues({
      className: cn(
        "bg-gray-800 text-white p-4 shadow-md",
        className
      )
    }, props),
    /* @__PURE__ */ import_react.default.createElement("div", { className: "container mx-auto flex items-center justify-between" }, /* @__PURE__ */ import_react.default.createElement("h1", { className: "text-2xl font-bold" }, "Guesty"), /* @__PURE__ */ import_react.default.createElement("nav", { className: "space-x-4" }, /* @__PURE__ */ import_react.default.createElement(import_link.default, { href: "/", className: "hover:text-gray-300" }, "Home"), /* @__PURE__ */ import_react.default.createElement(import_link.default, { href: "/about", className: "hover:text-gray-300" }, "About")))
  );
}

// src/components/Footer/index.tsx
var import_react2 = __toESM(require("react"));
function Footer(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ import_react2.default.createElement(
    "footer",
    __spreadValues({
      className: cn(
        "bg-gray-800 text-white p-4 mt-auto shadow-md",
        className
      )
    }, props),
    /* @__PURE__ */ import_react2.default.createElement("div", { className: "container mx-auto text-center" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8" }, /* @__PURE__ */ import_react2.default.createElement("div", null, /* @__PURE__ */ import_react2.default.createElement("h3", { className: "font-semibold mb-2" }, "Company"), /* @__PURE__ */ import_react2.default.createElement("ul", { className: "space-y-1" }, /* @__PURE__ */ import_react2.default.createElement("li", null, /* @__PURE__ */ import_react2.default.createElement("a", { href: "/about", className: "hover:text-gray-300" }, "About Us")), /* @__PURE__ */ import_react2.default.createElement("li", null, /* @__PURE__ */ import_react2.default.createElement("a", { href: "#", className: "hover:text-gray-300" }, "Careers")), /* @__PURE__ */ import_react2.default.createElement("li", null, /* @__PURE__ */ import_react2.default.createElement("a", { href: "#", className: "hover:text-gray-300" }, "Contact")))), /* @__PURE__ */ import_react2.default.createElement("div", null, /* @__PURE__ */ import_react2.default.createElement("h3", { className: "font-semibold mb-2" }, "Resources"), /* @__PURE__ */ import_react2.default.createElement("ul", { className: "space-y-1" }, /* @__PURE__ */ import_react2.default.createElement("li", null, /* @__PURE__ */ import_react2.default.createElement("a", { href: "#", className: "hover:text-gray-300" }, "Documentation")), /* @__PURE__ */ import_react2.default.createElement("li", null, /* @__PURE__ */ import_react2.default.createElement("a", { href: "#", className: "hover:text-gray-300" }, "Blog")), /* @__PURE__ */ import_react2.default.createElement("li", null, /* @__PURE__ */ import_react2.default.createElement("a", { href: "#", className: "hover:text-gray-300" }, "Support")))), /* @__PURE__ */ import_react2.default.createElement("div", null, /* @__PURE__ */ import_react2.default.createElement("h3", { className: "font-semibold mb-2" }, "Legal"), /* @__PURE__ */ import_react2.default.createElement("ul", { className: "space-y-1" }, /* @__PURE__ */ import_react2.default.createElement("li", null, /* @__PURE__ */ import_react2.default.createElement("a", { href: "#", className: "hover:text-gray-300" }, "Privacy Policy")), /* @__PURE__ */ import_react2.default.createElement("li", null, /* @__PURE__ */ import_react2.default.createElement("a", { href: "#", className: "hover:text-gray-300" }, "Terms of Service")), /* @__PURE__ */ import_react2.default.createElement("li", null, /* @__PURE__ */ import_react2.default.createElement("a", { href: "#", className: "hover:text-gray-300" }, "Cookie Policy"))))), /* @__PURE__ */ import_react2.default.createElement("div", { className: "mt-8 pt-4 border-t border-gray-700" }, /* @__PURE__ */ import_react2.default.createElement("p", null, "\xA9 ", (/* @__PURE__ */ new Date()).getFullYear(), " Guesty. All rights reserved.")))
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Footer,
  Header,
  cn
});
//# sourceMappingURL=index.js.map