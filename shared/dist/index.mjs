var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
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

// src/components/Header/index.tsx
import React from "react";
import Link from "next/link";

// src/utils/cn.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/Header/index.tsx
function Header(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React.createElement(
    "header",
    __spreadValues({
      className: cn(
        "bg-gray-800 text-white p-4 shadow-md",
        className
      )
    }, props),
    /* @__PURE__ */ React.createElement("div", { className: "container mx-auto flex items-center justify-between" }, /* @__PURE__ */ React.createElement("h1", { className: "text-2xl font-bold" }, "Guesty"), /* @__PURE__ */ React.createElement("nav", { className: "space-x-4" }, /* @__PURE__ */ React.createElement(Link, { href: "/", className: "hover:text-gray-300" }, "Home"), /* @__PURE__ */ React.createElement(Link, { href: "/about", className: "hover:text-gray-300" }, "About")))
  );
}

// src/components/Footer/index.tsx
import React2 from "react";
function Footer(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React2.createElement(
    "footer",
    __spreadValues({
      className: cn(
        "bg-gray-800 text-white p-4 mt-auto shadow-md",
        className
      )
    }, props),
    /* @__PURE__ */ React2.createElement("div", { className: "container mx-auto text-center" }, /* @__PURE__ */ React2.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8" }, /* @__PURE__ */ React2.createElement("div", null, /* @__PURE__ */ React2.createElement("h3", { className: "font-semibold mb-2" }, "Company"), /* @__PURE__ */ React2.createElement("ul", { className: "space-y-1" }, /* @__PURE__ */ React2.createElement("li", null, /* @__PURE__ */ React2.createElement("a", { href: "/about", className: "hover:text-gray-300" }, "About Us")), /* @__PURE__ */ React2.createElement("li", null, /* @__PURE__ */ React2.createElement("a", { href: "#", className: "hover:text-gray-300" }, "Careers")), /* @__PURE__ */ React2.createElement("li", null, /* @__PURE__ */ React2.createElement("a", { href: "#", className: "hover:text-gray-300" }, "Contact")))), /* @__PURE__ */ React2.createElement("div", null, /* @__PURE__ */ React2.createElement("h3", { className: "font-semibold mb-2" }, "Resources"), /* @__PURE__ */ React2.createElement("ul", { className: "space-y-1" }, /* @__PURE__ */ React2.createElement("li", null, /* @__PURE__ */ React2.createElement("a", { href: "#", className: "hover:text-gray-300" }, "Documentation")), /* @__PURE__ */ React2.createElement("li", null, /* @__PURE__ */ React2.createElement("a", { href: "#", className: "hover:text-gray-300" }, "Blog")), /* @__PURE__ */ React2.createElement("li", null, /* @__PURE__ */ React2.createElement("a", { href: "#", className: "hover:text-gray-300" }, "Support")))), /* @__PURE__ */ React2.createElement("div", null, /* @__PURE__ */ React2.createElement("h3", { className: "font-semibold mb-2" }, "Legal"), /* @__PURE__ */ React2.createElement("ul", { className: "space-y-1" }, /* @__PURE__ */ React2.createElement("li", null, /* @__PURE__ */ React2.createElement("a", { href: "#", className: "hover:text-gray-300" }, "Privacy Policy")), /* @__PURE__ */ React2.createElement("li", null, /* @__PURE__ */ React2.createElement("a", { href: "#", className: "hover:text-gray-300" }, "Terms of Service")), /* @__PURE__ */ React2.createElement("li", null, /* @__PURE__ */ React2.createElement("a", { href: "#", className: "hover:text-gray-300" }, "Cookie Policy"))))), /* @__PURE__ */ React2.createElement("div", { className: "mt-8 pt-4 border-t border-gray-700" }, /* @__PURE__ */ React2.createElement("p", null, "\xA9 ", (/* @__PURE__ */ new Date()).getFullYear(), " Guesty. All rights reserved.")))
  );
}
export {
  Footer,
  Header,
  cn
};
//# sourceMappingURL=index.mjs.map