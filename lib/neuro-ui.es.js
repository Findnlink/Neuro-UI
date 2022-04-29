var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
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
import * as React$1 from "react";
import React__default, { createContext, useContext, useLayoutEffect, useEffect, useState, useRef, useCallback as useCallback$1, useMemo as useMemo$1, forwardRef, createElement, cloneElement, Children, isValidElement, useReducer, useDebugValue } from "react";
const fontS$j = "_fontS_2x9f7_1";
const fontM$j = "_fontM_2x9f7_6";
const fontL$j = "_fontL_2x9f7_11";
const fontXL$j = "_fontXL_2x9f7_16";
const weightLight$j = "_weightLight_2x9f7_21";
const weightNormal$j = "_weightNormal_2x9f7_26";
const weightBold$j = "_weightBold_2x9f7_31";
const disabled$j = "_disabled_2x9f7_36";
const error$j = "_error_2x9f7_45";
const errorMessage$j = "_errorMessage_2x9f7_49";
const pointer$j = "_pointer_2x9f7_54";
const loading$j = "_loading_2x9f7_58";
const loadingAnimationOpacity$j = "_loadingAnimationOpacity_2x9f7_1";
const loadingAnimation$j = "_loadingAnimation_2x9f7_1";
const margin0$j = "_margin0_2x9f7_94";
const marginS$j = "_marginS_2x9f7_98";
const marginM$j = "_marginM_2x9f7_102";
const marginL$j = "_marginL_2x9f7_106";
const marginXL$j = "_marginXL_2x9f7_110";
const marginTop0$j = "_marginTop0_2x9f7_114";
const marginTopS$j = "_marginTopS_2x9f7_118";
const marginTopM$j = "_marginTopM_2x9f7_122";
const marginTopL$j = "_marginTopL_2x9f7_126";
const marginTopXL$j = "_marginTopXL_2x9f7_130";
const marginRight0$j = "_marginRight0_2x9f7_134";
const marginRightS$j = "_marginRightS_2x9f7_138";
const marginRightM$j = "_marginRightM_2x9f7_142";
const marginRightL$j = "_marginRightL_2x9f7_146";
const marginRightXL$j = "_marginRightXL_2x9f7_150";
const marginBottom0$j = "_marginBottom0_2x9f7_154";
const marginBottomS$j = "_marginBottomS_2x9f7_158";
const marginBottomM$j = "_marginBottomM_2x9f7_162";
const marginBottomL$j = "_marginBottomL_2x9f7_166";
const marginBottomXL$j = "_marginBottomXL_2x9f7_170";
const marginLeft0$j = "_marginLeft0_2x9f7_174";
const marginLeftS$j = "_marginLeftS_2x9f7_178";
const marginLeftM$j = "_marginLeftM_2x9f7_182";
const marginLeftL$j = "_marginLeftL_2x9f7_186";
const marginLeftXL$j = "_marginLeftXL_2x9f7_190";
const padding0$j = "_padding0_2x9f7_194";
const paddingS$j = "_paddingS_2x9f7_198";
const paddingM$j = "_paddingM_2x9f7_202";
const paddingL$j = "_paddingL_2x9f7_206";
const paddingXL$j = "_paddingXL_2x9f7_210";
const paddingTop0$j = "_paddingTop0_2x9f7_214";
const paddingTopS$j = "_paddingTopS_2x9f7_218";
const paddingTopM$j = "_paddingTopM_2x9f7_222";
const paddingTopL$j = "_paddingTopL_2x9f7_226";
const paddingTopXL$j = "_paddingTopXL_2x9f7_230";
const paddingRight0$j = "_paddingRight0_2x9f7_234";
const paddingRightS$j = "_paddingRightS_2x9f7_238";
const paddingRightM$j = "_paddingRightM_2x9f7_242";
const paddingRightL$j = "_paddingRightL_2x9f7_246";
const paddingRightXL$j = "_paddingRightXL_2x9f7_250";
const paddingBottom0$j = "_paddingBottom0_2x9f7_254";
const paddingBottomS$j = "_paddingBottomS_2x9f7_258";
const paddingBottomM$j = "_paddingBottomM_2x9f7_262";
const paddingBottomL$j = "_paddingBottomL_2x9f7_266";
const paddingBottomXL$j = "_paddingBottomXL_2x9f7_270";
const paddingLeft0$j = "_paddingLeft0_2x9f7_274";
const paddingLeftS$j = "_paddingLeftS_2x9f7_278";
const paddingLeftM$j = "_paddingLeftM_2x9f7_282";
const paddingLeftL$j = "_paddingLeftL_2x9f7_286";
const paddingLeftXL$j = "_paddingLeftXL_2x9f7_290";
const button = "_button_2x9f7_310";
const primary = "_primary_2x9f7_332";
var scss$p = {
  fontS: fontS$j,
  fontM: fontM$j,
  fontL: fontL$j,
  fontXL: fontXL$j,
  weightLight: weightLight$j,
  weightNormal: weightNormal$j,
  weightBold: weightBold$j,
  disabled: disabled$j,
  error: error$j,
  errorMessage: errorMessage$j,
  pointer: pointer$j,
  loading: loading$j,
  loadingAnimationOpacity: loadingAnimationOpacity$j,
  loadingAnimation: loadingAnimation$j,
  margin0: margin0$j,
  marginS: marginS$j,
  marginM: marginM$j,
  marginL: marginL$j,
  marginXL: marginXL$j,
  marginTop0: marginTop0$j,
  marginTopS: marginTopS$j,
  marginTopM: marginTopM$j,
  marginTopL: marginTopL$j,
  marginTopXL: marginTopXL$j,
  marginRight0: marginRight0$j,
  marginRightS: marginRightS$j,
  marginRightM: marginRightM$j,
  marginRightL: marginRightL$j,
  marginRightXL: marginRightXL$j,
  marginBottom0: marginBottom0$j,
  marginBottomS: marginBottomS$j,
  marginBottomM: marginBottomM$j,
  marginBottomL: marginBottomL$j,
  marginBottomXL: marginBottomXL$j,
  marginLeft0: marginLeft0$j,
  marginLeftS: marginLeftS$j,
  marginLeftM: marginLeftM$j,
  marginLeftL: marginLeftL$j,
  marginLeftXL: marginLeftXL$j,
  padding0: padding0$j,
  paddingS: paddingS$j,
  paddingM: paddingM$j,
  paddingL: paddingL$j,
  paddingXL: paddingXL$j,
  paddingTop0: paddingTop0$j,
  paddingTopS: paddingTopS$j,
  paddingTopM: paddingTopM$j,
  paddingTopL: paddingTopL$j,
  paddingTopXL: paddingTopXL$j,
  paddingRight0: paddingRight0$j,
  paddingRightS: paddingRightS$j,
  paddingRightM: paddingRightM$j,
  paddingRightL: paddingRightL$j,
  paddingRightXL: paddingRightXL$j,
  paddingBottom0: paddingBottom0$j,
  paddingBottomS: paddingBottomS$j,
  paddingBottomM: paddingBottomM$j,
  paddingBottomL: paddingBottomL$j,
  paddingBottomXL: paddingBottomXL$j,
  paddingLeft0: paddingLeft0$j,
  paddingLeftS: paddingLeftS$j,
  paddingLeftM: paddingLeftM$j,
  paddingLeftL: paddingLeftL$j,
  paddingLeftXL: paddingLeftXL$j,
  "backgroundColor--primary": "_backgroundColor--primary_2x9f7_294",
  "backgroundColor--text100": "_backgroundColor--text100_2x9f7_298",
  "color--primary": "_color--primary_2x9f7_302",
  "color--text100": "_color--text100_2x9f7_306",
  button,
  primary
};
const _getClassNames = ({
  parent,
  scss: scss2,
  _class,
  primary: primary2,
  disabled: disabled2,
  loading: loading2,
  error: error2,
  pointer: pointer2,
  scale: scale2,
  weight,
  margin,
  padding,
  color: color2,
  backgroundColor
}) => {
  let _className = [parent];
  if (_class)
    _className.push(_class);
  if (primary2)
    _className.push(scss2.primary);
  if (disabled2)
    _className.push(scss2.disabled);
  if (loading2)
    _className.push(scss2.loading);
  if (error2)
    _className.push(scss2.error);
  if (pointer2)
    _className.push(scss2.pointer);
  if (color2)
    _className.push(scss2["color" + color2]);
  if (backgroundColor)
    _className.push(scss2["backgroundColor" + backgroundColor]);
  switch (scale2) {
    case "s":
      _className.push(scss2.fontS);
      break;
    case "m":
      _className.push(scss2.fontM);
      break;
    case "l":
      _className.push(scss2.fontL);
      break;
    case "xl":
      _className.push(scss2.fontXL);
      break;
  }
  switch (weight) {
    case "light":
      _className.push(scss2.weightLight);
      break;
    case "normal":
      _className.push(scss2.weightNormal);
      break;
    case "bold":
      _className.push(scss2.weightBold);
      break;
  }
  if (margin) {
    const marginArr = margin.split(" ");
    if (marginArr.length === 1) {
      switch (margin) {
        case "0":
          _className.push(scss2.margin0);
          break;
        case "s":
          _className.push(scss2.marginS);
          break;
        case "m":
          _className.push(scss2.marginM);
          break;
        case "l":
          _className.push(scss2.marginL);
          break;
        case "xl":
          _className.push(scss2.marginXL);
          break;
      }
    } else if (marginArr.length === 2) {
      switch (marginArr[0]) {
        case "0":
          _className.push(scss2.marginTop0);
          _className.push(scss2.marginBottom0);
          break;
        case "s":
          _className.push(scss2.marginTopS);
          _className.push(scss2.marginBottomS);
          break;
        case "m":
          _className.push(scss2.marginTopM);
          _className.push(scss2.marginBottomM);
          break;
        case "l":
          _className.push(scss2.marginTopL);
          _className.push(scss2.marginBottomL);
          break;
        case "xl":
          _className.push(scss2.marginTopXL);
          _className.push(scss2.marginBottomXL);
          break;
      }
      switch (marginArr[1]) {
        case "0":
          _className.push(scss2.marginLeft0);
          _className.push(scss2.marginRight0);
          break;
        case "s":
          _className.push(scss2.marginLeftS);
          _className.push(scss2.marginRightS);
          break;
        case "m":
          _className.push(scss2.marginLeftM);
          _className.push(scss2.marginRightM);
          break;
        case "l":
          _className.push(scss2.marginLeftL);
          _className.push(scss2.marginRightL);
          break;
        case "xl":
          _className.push(scss2.marginLeftXL);
          _className.push(scss2.marginRightXL);
          break;
      }
    } else if (marginArr.length === 4) {
      switch (marginArr[0]) {
        case "0":
          _className.push(scss2.marginTop0);
          break;
        case "s":
          _className.push(scss2.marginTopS);
          break;
        case "m":
          _className.push(scss2.marginTopM);
          break;
        case "l":
          _className.push(scss2.marginTopL);
          break;
        case "xl":
          _className.push(scss2.marginTopXL);
          break;
      }
      switch (marginArr[1]) {
        case "0":
          _className.push(scss2.marginRight0);
          break;
        case "s":
          _className.push(scss2.marginRightS);
          break;
        case "m":
          _className.push(scss2.marginRightM);
          break;
        case "l":
          _className.push(scss2.margingRightL);
          break;
        case "xl":
          _className.push(scss2.marginRightXL);
          break;
      }
      switch (marginArr[2]) {
        case "0":
          _className.push(scss2.marginBottom0);
          break;
        case "s":
          _className.push(scss2.marginBottomS);
          break;
        case "m":
          _className.push(scss2.marginBottomM);
          break;
        case "l":
          _className.push(scss2.marginBottomL);
          break;
        case "xl":
          _className.push(scss2.marginBottomXL);
          break;
      }
      switch (marginArr[3]) {
        case "0":
          _className.push(scss2.marginLeft0);
          break;
        case "s":
          _className.push(scss2.marginLeftS);
          break;
        case "m":
          _className.push(scss2.marginLeftM);
          break;
        case "l":
          _className.push(scss2.marginLeftL);
          break;
        case "xl":
          _className.push(scss2.marginLeftXL);
          break;
      }
    }
  }
  if (padding) {
    const paddingArr = padding.split(" ");
    if (paddingArr.length === 1) {
      switch (padding) {
        case "0":
          _className.push(scss2.padding0);
          break;
        case "s":
          _className.push(scss2.paddingS);
          break;
        case "m":
          _className.push(scss2.paddingM);
          break;
        case "l":
          _className.push(scss2.paddingL);
          break;
        case "xl":
          _className.push(scss2.paddingXL);
          break;
      }
    } else if (paddingArr.length === 2) {
      switch (paddingArr[0]) {
        case "0":
          _className.push(scss2.paddingTop0);
          _className.push(scss2.paddingBottom0);
          break;
        case "s":
          _className.push(scss2.paddingTopS);
          _className.push(scss2.paddingBottomS);
          break;
        case "m":
          _className.push(scss2.paddingTopM);
          _className.push(scss2.paddingBottomM);
          break;
        case "l":
          _className.push(scss2.paddingTopL);
          _className.push(scss2.paddingBottomL);
          break;
        case "xl":
          _className.push(scss2.paddingTopXL);
          _className.push(scss2.paddingBottomXL);
          break;
      }
      switch (paddingArr[1]) {
        case "0":
          _className.push(scss2.paddingLeft0);
          _className.push(scss2.paddingRight0);
          break;
        case "s":
          _className.push(scss2.paddingLeftS);
          _className.push(scss2.paddingRightS);
          break;
        case "m":
          _className.push(scss2.paddingLeftM);
          _className.push(scss2.paddingRightM);
          break;
        case "l":
          _className.push(scss2.paddingLeftL);
          _className.push(scss2.paddingRightL);
          break;
        case "xl":
          _className.push(scss2.paddingLeftXL);
          _className.push(scss2.paddingRightXL);
          break;
      }
    } else if (paddingArr.length === 4) {
      switch (paddingArr[0]) {
        case "0":
          _className.push(scss2.paddingTop0);
          break;
        case "s":
          _className.push(scss2.paddingTopS);
          break;
        case "m":
          _className.push(scss2.paddingTopM);
          break;
        case "l":
          _className.push(scss2.paddingTopL);
          break;
        case "xl":
          _className.push(scss2.paddingTopXL);
          break;
      }
      switch (paddingArr[1]) {
        case "0":
          _className.push(scss2.paddingRight0);
          break;
        case "s":
          _className.push(scss2.paddingRightS);
          break;
        case "m":
          _className.push(scss2.paddingRightM);
          break;
        case "l":
          _className.push(scss2.paddingRightL);
          break;
        case "xl":
          _className.push(scss2.paddingRightXL);
          break;
      }
      switch (paddingArr[2]) {
        case "0":
          _className.push(scss2.paddingBottom0);
          break;
        case "s":
          _className.push(scss2.paddingBottomS);
          break;
        case "m":
          _className.push(scss2.paddingBottomM);
          break;
        case "l":
          _className.push(scss2.paddingBottomL);
          break;
        case "xl":
          _className.push(scss2.paddingBottomXL);
          break;
      }
      switch (paddingArr[3]) {
        case "0":
          _className.push(scss2.paddingLeft0);
          break;
        case "s":
          _className.push(scss2.paddingLeftS);
          break;
        case "m":
          _className.push(scss2.paddingLeftM);
          break;
        case "l":
          _className.push(scss2.paddingLeftL);
          break;
        case "xl":
          _className.push(scss2.paddingLeftXL);
          break;
      }
    }
  }
  return _className;
};
const Button = (_a) => {
  var _b = _a, {
    children,
    href,
    onClick,
    disabled: disabled2,
    loading: loading2,
    htmlProps
  } = _b, props2 = __objRest(_b, [
    "children",
    "href",
    "onClick",
    "disabled",
    "loading",
    "htmlProps"
  ]);
  const getClassNames = () => {
    let className = _getClassNames(__spreadValues({
      parent: scss$p.button,
      scss: scss$p,
      disabled: disabled2,
      loading: loading2
    }, props2));
    return className.join(" ");
  };
  return /* @__PURE__ */ React__default.createElement("button", __spreadValues({
    "data-testid": "button",
    onClick: (e2) => {
      if (disabled2 || loading2)
        return;
      if (onClick)
        onClick(e2);
      if (href)
        window.open(href, "_blank");
    },
    className: getClassNames()
  }, htmlProps), children);
};
const fontS$i = "_fontS_1itq9_1";
const fontM$i = "_fontM_1itq9_6";
const fontL$i = "_fontL_1itq9_11";
const fontXL$i = "_fontXL_1itq9_16";
const weightLight$i = "_weightLight_1itq9_21";
const weightNormal$i = "_weightNormal_1itq9_26";
const weightBold$i = "_weightBold_1itq9_31";
const disabled$i = "_disabled_1itq9_36";
const error$i = "_error_1itq9_45";
const errorMessage$i = "_errorMessage_1itq9_49";
const pointer$i = "_pointer_1itq9_54";
const loading$i = "_loading_1itq9_58";
const loadingAnimationOpacity$i = "_loadingAnimationOpacity_1itq9_1";
const loadingAnimation$i = "_loadingAnimation_1itq9_1";
const margin0$i = "_margin0_1itq9_94";
const marginS$i = "_marginS_1itq9_98";
const marginM$i = "_marginM_1itq9_102";
const marginL$i = "_marginL_1itq9_106";
const marginXL$i = "_marginXL_1itq9_110";
const marginTop0$i = "_marginTop0_1itq9_114";
const marginTopS$i = "_marginTopS_1itq9_118";
const marginTopM$i = "_marginTopM_1itq9_122";
const marginTopL$i = "_marginTopL_1itq9_126";
const marginTopXL$i = "_marginTopXL_1itq9_130";
const marginRight0$i = "_marginRight0_1itq9_134";
const marginRightS$i = "_marginRightS_1itq9_138";
const marginRightM$i = "_marginRightM_1itq9_142";
const marginRightL$i = "_marginRightL_1itq9_146";
const marginRightXL$i = "_marginRightXL_1itq9_150";
const marginBottom0$i = "_marginBottom0_1itq9_154";
const marginBottomS$i = "_marginBottomS_1itq9_158";
const marginBottomM$i = "_marginBottomM_1itq9_162";
const marginBottomL$i = "_marginBottomL_1itq9_166";
const marginBottomXL$i = "_marginBottomXL_1itq9_170";
const marginLeft0$i = "_marginLeft0_1itq9_174";
const marginLeftS$i = "_marginLeftS_1itq9_178";
const marginLeftM$i = "_marginLeftM_1itq9_182";
const marginLeftL$i = "_marginLeftL_1itq9_186";
const marginLeftXL$i = "_marginLeftXL_1itq9_190";
const padding0$i = "_padding0_1itq9_194";
const paddingS$i = "_paddingS_1itq9_198";
const paddingM$i = "_paddingM_1itq9_202";
const paddingL$i = "_paddingL_1itq9_206";
const paddingXL$i = "_paddingXL_1itq9_210";
const paddingTop0$i = "_paddingTop0_1itq9_214";
const paddingTopS$i = "_paddingTopS_1itq9_218";
const paddingTopM$i = "_paddingTopM_1itq9_222";
const paddingTopL$i = "_paddingTopL_1itq9_226";
const paddingTopXL$i = "_paddingTopXL_1itq9_230";
const paddingRight0$i = "_paddingRight0_1itq9_234";
const paddingRightS$i = "_paddingRightS_1itq9_238";
const paddingRightM$i = "_paddingRightM_1itq9_242";
const paddingRightL$i = "_paddingRightL_1itq9_246";
const paddingRightXL$i = "_paddingRightXL_1itq9_250";
const paddingBottom0$i = "_paddingBottom0_1itq9_254";
const paddingBottomS$i = "_paddingBottomS_1itq9_258";
const paddingBottomM$i = "_paddingBottomM_1itq9_262";
const paddingBottomL$i = "_paddingBottomL_1itq9_266";
const paddingBottomXL$i = "_paddingBottomXL_1itq9_270";
const paddingLeft0$i = "_paddingLeft0_1itq9_274";
const paddingLeftS$i = "_paddingLeftS_1itq9_278";
const paddingLeftM$i = "_paddingLeftM_1itq9_282";
const paddingLeftL$i = "_paddingLeftL_1itq9_286";
const paddingLeftXL$i = "_paddingLeftXL_1itq9_290";
const buttonGroup = "_buttonGroup_1itq9_310";
var scss$o = {
  fontS: fontS$i,
  fontM: fontM$i,
  fontL: fontL$i,
  fontXL: fontXL$i,
  weightLight: weightLight$i,
  weightNormal: weightNormal$i,
  weightBold: weightBold$i,
  disabled: disabled$i,
  error: error$i,
  errorMessage: errorMessage$i,
  pointer: pointer$i,
  loading: loading$i,
  loadingAnimationOpacity: loadingAnimationOpacity$i,
  loadingAnimation: loadingAnimation$i,
  margin0: margin0$i,
  marginS: marginS$i,
  marginM: marginM$i,
  marginL: marginL$i,
  marginXL: marginXL$i,
  marginTop0: marginTop0$i,
  marginTopS: marginTopS$i,
  marginTopM: marginTopM$i,
  marginTopL: marginTopL$i,
  marginTopXL: marginTopXL$i,
  marginRight0: marginRight0$i,
  marginRightS: marginRightS$i,
  marginRightM: marginRightM$i,
  marginRightL: marginRightL$i,
  marginRightXL: marginRightXL$i,
  marginBottom0: marginBottom0$i,
  marginBottomS: marginBottomS$i,
  marginBottomM: marginBottomM$i,
  marginBottomL: marginBottomL$i,
  marginBottomXL: marginBottomXL$i,
  marginLeft0: marginLeft0$i,
  marginLeftS: marginLeftS$i,
  marginLeftM: marginLeftM$i,
  marginLeftL: marginLeftL$i,
  marginLeftXL: marginLeftXL$i,
  padding0: padding0$i,
  paddingS: paddingS$i,
  paddingM: paddingM$i,
  paddingL: paddingL$i,
  paddingXL: paddingXL$i,
  paddingTop0: paddingTop0$i,
  paddingTopS: paddingTopS$i,
  paddingTopM: paddingTopM$i,
  paddingTopL: paddingTopL$i,
  paddingTopXL: paddingTopXL$i,
  paddingRight0: paddingRight0$i,
  paddingRightS: paddingRightS$i,
  paddingRightM: paddingRightM$i,
  paddingRightL: paddingRightL$i,
  paddingRightXL: paddingRightXL$i,
  paddingBottom0: paddingBottom0$i,
  paddingBottomS: paddingBottomS$i,
  paddingBottomM: paddingBottomM$i,
  paddingBottomL: paddingBottomL$i,
  paddingBottomXL: paddingBottomXL$i,
  paddingLeft0: paddingLeft0$i,
  paddingLeftS: paddingLeftS$i,
  paddingLeftM: paddingLeftM$i,
  paddingLeftL: paddingLeftL$i,
  paddingLeftXL: paddingLeftXL$i,
  "backgroundColor--primary": "_backgroundColor--primary_1itq9_294",
  "backgroundColor--text100": "_backgroundColor--text100_1itq9_298",
  "color--primary": "_color--primary_1itq9_302",
  "color--text100": "_color--text100_1itq9_306",
  buttonGroup
};
const ButtonGroup = (_c) => {
  var _d = _c, { selected: selected2, setSelected, buttons } = _d, props2 = __objRest(_d, ["selected", "setSelected", "buttons"]);
  const getClassNames = () => {
    let className = _getClassNames(__spreadValues({
      parent: scss$o.buttonGroup,
      scss: scss$o
    }, props2));
    return className.join(" ");
  };
  return /* @__PURE__ */ React__default.createElement("div", {
    className: getClassNames()
  }, buttons.map((button2, index) => typeof button2 === "string" ? /* @__PURE__ */ React__default.createElement(Button, {
    margin: "s",
    htmlProps: { key: index },
    onClick: () => setSelected(button2),
    primary: button2 === selected2,
    disabled: props2.disabled,
    key: index
  }, button2) : /* @__PURE__ */ React__default.createElement(Button, __spreadValues({
    margin: "s",
    htmlProps: { key: index },
    scale: props2.scale,
    onClick: () => setSelected(button2.children),
    primary: selected2 === button2.children,
    key: index
  }, button2), button2.children)));
};
const fontS$h = "_fontS_18wk5_1";
const fontM$h = "_fontM_18wk5_6";
const fontL$h = "_fontL_18wk5_11";
const fontXL$h = "_fontXL_18wk5_16";
const weightLight$h = "_weightLight_18wk5_21";
const weightNormal$h = "_weightNormal_18wk5_26";
const weightBold$h = "_weightBold_18wk5_31";
const disabled$h = "_disabled_18wk5_36";
const error$h = "_error_18wk5_45";
const errorMessage$h = "_errorMessage_18wk5_49";
const pointer$h = "_pointer_18wk5_54";
const loading$h = "_loading_18wk5_58";
const loadingAnimationOpacity$h = "_loadingAnimationOpacity_18wk5_1";
const loadingAnimation$h = "_loadingAnimation_18wk5_1";
const margin0$h = "_margin0_18wk5_94";
const marginS$h = "_marginS_18wk5_98";
const marginM$h = "_marginM_18wk5_102";
const marginL$h = "_marginL_18wk5_106";
const marginXL$h = "_marginXL_18wk5_110";
const marginTop0$h = "_marginTop0_18wk5_114";
const marginTopS$h = "_marginTopS_18wk5_118";
const marginTopM$h = "_marginTopM_18wk5_122";
const marginTopL$h = "_marginTopL_18wk5_126";
const marginTopXL$h = "_marginTopXL_18wk5_130";
const marginRight0$h = "_marginRight0_18wk5_134";
const marginRightS$h = "_marginRightS_18wk5_138";
const marginRightM$h = "_marginRightM_18wk5_142";
const marginRightL$h = "_marginRightL_18wk5_146";
const marginRightXL$h = "_marginRightXL_18wk5_150";
const marginBottom0$h = "_marginBottom0_18wk5_154";
const marginBottomS$h = "_marginBottomS_18wk5_158";
const marginBottomM$h = "_marginBottomM_18wk5_162";
const marginBottomL$h = "_marginBottomL_18wk5_166";
const marginBottomXL$h = "_marginBottomXL_18wk5_170";
const marginLeft0$h = "_marginLeft0_18wk5_174";
const marginLeftS$h = "_marginLeftS_18wk5_178";
const marginLeftM$h = "_marginLeftM_18wk5_182";
const marginLeftL$h = "_marginLeftL_18wk5_186";
const marginLeftXL$h = "_marginLeftXL_18wk5_190";
const padding0$h = "_padding0_18wk5_194";
const paddingS$h = "_paddingS_18wk5_198";
const paddingM$h = "_paddingM_18wk5_202";
const paddingL$h = "_paddingL_18wk5_206";
const paddingXL$h = "_paddingXL_18wk5_210";
const paddingTop0$h = "_paddingTop0_18wk5_214";
const paddingTopS$h = "_paddingTopS_18wk5_218";
const paddingTopM$h = "_paddingTopM_18wk5_222";
const paddingTopL$h = "_paddingTopL_18wk5_226";
const paddingTopXL$h = "_paddingTopXL_18wk5_230";
const paddingRight0$h = "_paddingRight0_18wk5_234";
const paddingRightS$h = "_paddingRightS_18wk5_238";
const paddingRightM$h = "_paddingRightM_18wk5_242";
const paddingRightL$h = "_paddingRightL_18wk5_246";
const paddingRightXL$h = "_paddingRightXL_18wk5_250";
const paddingBottom0$h = "_paddingBottom0_18wk5_254";
const paddingBottomS$h = "_paddingBottomS_18wk5_258";
const paddingBottomM$h = "_paddingBottomM_18wk5_262";
const paddingBottomL$h = "_paddingBottomL_18wk5_266";
const paddingBottomXL$h = "_paddingBottomXL_18wk5_270";
const paddingLeft0$h = "_paddingLeft0_18wk5_274";
const paddingLeftS$h = "_paddingLeftS_18wk5_278";
const paddingLeftM$h = "_paddingLeftM_18wk5_282";
const paddingLeftL$h = "_paddingLeftL_18wk5_286";
const paddingLeftXL$h = "_paddingLeftXL_18wk5_290";
const card = "_card_18wk5_310";
const header$2 = "_header_18wk5_321";
const content$1 = "_content_18wk5_325";
var scss$n = {
  fontS: fontS$h,
  fontM: fontM$h,
  fontL: fontL$h,
  fontXL: fontXL$h,
  weightLight: weightLight$h,
  weightNormal: weightNormal$h,
  weightBold: weightBold$h,
  disabled: disabled$h,
  error: error$h,
  errorMessage: errorMessage$h,
  pointer: pointer$h,
  loading: loading$h,
  loadingAnimationOpacity: loadingAnimationOpacity$h,
  loadingAnimation: loadingAnimation$h,
  margin0: margin0$h,
  marginS: marginS$h,
  marginM: marginM$h,
  marginL: marginL$h,
  marginXL: marginXL$h,
  marginTop0: marginTop0$h,
  marginTopS: marginTopS$h,
  marginTopM: marginTopM$h,
  marginTopL: marginTopL$h,
  marginTopXL: marginTopXL$h,
  marginRight0: marginRight0$h,
  marginRightS: marginRightS$h,
  marginRightM: marginRightM$h,
  marginRightL: marginRightL$h,
  marginRightXL: marginRightXL$h,
  marginBottom0: marginBottom0$h,
  marginBottomS: marginBottomS$h,
  marginBottomM: marginBottomM$h,
  marginBottomL: marginBottomL$h,
  marginBottomXL: marginBottomXL$h,
  marginLeft0: marginLeft0$h,
  marginLeftS: marginLeftS$h,
  marginLeftM: marginLeftM$h,
  marginLeftL: marginLeftL$h,
  marginLeftXL: marginLeftXL$h,
  padding0: padding0$h,
  paddingS: paddingS$h,
  paddingM: paddingM$h,
  paddingL: paddingL$h,
  paddingXL: paddingXL$h,
  paddingTop0: paddingTop0$h,
  paddingTopS: paddingTopS$h,
  paddingTopM: paddingTopM$h,
  paddingTopL: paddingTopL$h,
  paddingTopXL: paddingTopXL$h,
  paddingRight0: paddingRight0$h,
  paddingRightS: paddingRightS$h,
  paddingRightM: paddingRightM$h,
  paddingRightL: paddingRightL$h,
  paddingRightXL: paddingRightXL$h,
  paddingBottom0: paddingBottom0$h,
  paddingBottomS: paddingBottomS$h,
  paddingBottomM: paddingBottomM$h,
  paddingBottomL: paddingBottomL$h,
  paddingBottomXL: paddingBottomXL$h,
  paddingLeft0: paddingLeft0$h,
  paddingLeftS: paddingLeftS$h,
  paddingLeftM: paddingLeftM$h,
  paddingLeftL: paddingLeftL$h,
  paddingLeftXL: paddingLeftXL$h,
  "backgroundColor--primary": "_backgroundColor--primary_18wk5_294",
  "backgroundColor--text100": "_backgroundColor--text100_18wk5_298",
  "color--primary": "_color--primary_18wk5_302",
  "color--text100": "_color--text100_18wk5_306",
  card,
  header: header$2,
  content: content$1
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var extendStatics = function(d2, b2) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
    d3.__proto__ = b3;
  } || function(d3, b3) {
    for (var p2 in b3)
      if (Object.prototype.hasOwnProperty.call(b3, p2))
        d3[p2] = b3[p2];
  };
  return extendStatics(d2, b2);
};
function __extends$1(d2, b2) {
  if (typeof b2 !== "function" && b2 !== null)
    throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
  extendStatics(d2, b2);
  function __() {
    this.constructor = d2;
  }
  d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
}
var __assign$1 = function() {
  __assign$1 = Object.assign || function __assign2(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p2 in s)
        if (Object.prototype.hasOwnProperty.call(s, p2))
          t2[p2] = s[p2];
    }
    return t2;
  };
  return __assign$1.apply(this, arguments);
};
function __rest$1(s, e2) {
  var t2 = {};
  for (var p2 in s)
    if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0)
      t2[p2] = s[p2];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
        t2[p2[i]] = s[p2[i]];
    }
  return t2;
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m2 = s && o[s], i = 0;
  if (m2)
    return m2.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n2) {
  var m2 = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m2)
    return o;
  var i = m2.call(o), r2, ar = [], e2;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i.next()).done)
      ar.push(r2.value);
  } catch (error2) {
    e2 = { error: error2 };
  } finally {
    try {
      if (r2 && !r2.done && (m2 = i["return"]))
        m2.call(i);
    } finally {
      if (e2)
        throw e2.error;
    }
  }
  return ar;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l2 = from.length, ar; i < l2; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}
var createDefinition = function(propNames) {
  return {
    isEnabled: function(props2) {
      return propNames.some(function(name) {
        return !!props2[name];
      });
    }
  };
};
var featureDefinitions = {
  measureLayout: createDefinition(["layout", "layoutId", "drag"]),
  animation: createDefinition([
    "animate",
    "exit",
    "variants",
    "whileHover",
    "whileTap",
    "whileFocus",
    "whileDrag",
    "whileInView"
  ]),
  exit: createDefinition(["exit"]),
  drag: createDefinition(["drag", "dragControls"]),
  focus: createDefinition(["whileFocus"]),
  hover: createDefinition(["whileHover", "onHoverStart", "onHoverEnd"]),
  tap: createDefinition(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
  pan: createDefinition([
    "onPan",
    "onPanStart",
    "onPanSessionStart",
    "onPanEnd"
  ]),
  inView: createDefinition([
    "whileInView",
    "onViewportEnter",
    "onViewportLeave"
  ])
};
function loadFeatures(features) {
  for (var key in features) {
    if (features[key] === null)
      continue;
    if (key === "projectionNodeConstructor") {
      featureDefinitions.projectionNodeConstructor = features[key];
    } else {
      featureDefinitions[key].Component = features[key];
    }
  }
}
var warning = function() {
};
var invariant$3 = function() {
};
var LazyContext = createContext({ strict: false });
var featureNames = Object.keys(featureDefinitions);
var numFeatures = featureNames.length;
function useFeatures(props2, visualElement2, preloadedFeatures) {
  var features = [];
  useContext(LazyContext);
  if (!visualElement2)
    return null;
  for (var i = 0; i < numFeatures; i++) {
    var name_1 = featureNames[i];
    var _a = featureDefinitions[name_1], isEnabled = _a.isEnabled, Component = _a.Component;
    if (isEnabled(props2) && Component) {
      features.push(React$1.createElement(Component, __assign$1({ key: name_1 }, props2, { visualElement: visualElement2 })));
    }
  }
  return features;
}
var MotionConfigContext = createContext({
  transformPagePoint: function(p2) {
    return p2;
  },
  isStatic: false,
  reducedMotion: "never"
});
var MotionContext = createContext({});
function useVisualElementContext() {
  return useContext(MotionContext).visualElement;
}
var PresenceContext = createContext(null);
var isBrowser = typeof window !== "undefined";
var useIsomorphicLayoutEffect$3 = isBrowser ? useLayoutEffect : useEffect;
var prefersReducedMotion = { current: null };
var hasDetected = false;
function initPrefersReducedMotion() {
  hasDetected = true;
  if (typeof window === "undefined")
    return;
  if (window.matchMedia) {
    var motionMediaQuery_1 = window.matchMedia("(prefers-reduced-motion)");
    var setReducedMotionPreferences = function() {
      return prefersReducedMotion.current = motionMediaQuery_1.matches;
    };
    motionMediaQuery_1.addListener(setReducedMotionPreferences);
    setReducedMotionPreferences();
  } else {
    prefersReducedMotion.current = false;
  }
}
function useReducedMotion() {
  !hasDetected && initPrefersReducedMotion();
  var _a = __read(useState(prefersReducedMotion.current), 1), shouldReduceMotion = _a[0];
  return shouldReduceMotion;
}
function useReducedMotionConfig() {
  var reducedMotionPreference = useReducedMotion();
  var reducedMotion = useContext(MotionConfigContext).reducedMotion;
  if (reducedMotion === "never") {
    return false;
  } else if (reducedMotion === "always") {
    return true;
  } else {
    return reducedMotionPreference;
  }
}
function useVisualElement(Component, visualState, props2, createVisualElement) {
  var lazyContext = useContext(LazyContext);
  var parent = useVisualElementContext();
  var presenceContext = useContext(PresenceContext);
  var shouldReduceMotion = useReducedMotionConfig();
  var visualElementRef = useRef(void 0);
  if (!createVisualElement)
    createVisualElement = lazyContext.renderer;
  if (!visualElementRef.current && createVisualElement) {
    visualElementRef.current = createVisualElement(Component, {
      visualState,
      parent,
      props: props2,
      presenceId: presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.id,
      blockInitialAnimation: (presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.initial) === false,
      shouldReduceMotion
    });
  }
  var visualElement2 = visualElementRef.current;
  useIsomorphicLayoutEffect$3(function() {
    visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.syncRender();
  });
  useEffect(function() {
    var _a;
    (_a = visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.animationState) === null || _a === void 0 ? void 0 : _a.animateChanges();
  });
  useIsomorphicLayoutEffect$3(function() {
    return function() {
      return visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.notifyUnmount();
    };
  }, []);
  return visualElement2;
}
function isRefObject(ref) {
  return typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
}
function useMotionRef(visualState, visualElement2, externalRef) {
  return useCallback$1(function(instance) {
    var _a;
    instance && ((_a = visualState.mount) === null || _a === void 0 ? void 0 : _a.call(visualState, instance));
    if (visualElement2) {
      instance ? visualElement2.mount(instance) : visualElement2.unmount();
    }
    if (externalRef) {
      if (typeof externalRef === "function") {
        externalRef(instance);
      } else if (isRefObject(externalRef)) {
        externalRef.current = instance;
      }
    }
  }, [visualElement2]);
}
function isVariantLabels(v2) {
  return Array.isArray(v2);
}
function isVariantLabel(v2) {
  return typeof v2 === "string" || isVariantLabels(v2);
}
function getCurrent(visualElement2) {
  var current = {};
  visualElement2.forEachValue(function(value, key) {
    return current[key] = value.get();
  });
  return current;
}
function getVelocity$1(visualElement2) {
  var velocity = {};
  visualElement2.forEachValue(function(value, key) {
    return velocity[key] = value.getVelocity();
  });
  return velocity;
}
function resolveVariantFromProps(props2, definition, custom, currentValues, currentVelocity) {
  var _a;
  if (currentValues === void 0) {
    currentValues = {};
  }
  if (currentVelocity === void 0) {
    currentVelocity = {};
  }
  if (typeof definition === "function") {
    definition = definition(custom !== null && custom !== void 0 ? custom : props2.custom, currentValues, currentVelocity);
  }
  if (typeof definition === "string") {
    definition = (_a = props2.variants) === null || _a === void 0 ? void 0 : _a[definition];
  }
  if (typeof definition === "function") {
    definition = definition(custom !== null && custom !== void 0 ? custom : props2.custom, currentValues, currentVelocity);
  }
  return definition;
}
function resolveVariant(visualElement2, definition, custom) {
  var props2 = visualElement2.getProps();
  return resolveVariantFromProps(props2, definition, custom !== null && custom !== void 0 ? custom : props2.custom, getCurrent(visualElement2), getVelocity$1(visualElement2));
}
function checkIfControllingVariants(props2) {
  var _a;
  return typeof ((_a = props2.animate) === null || _a === void 0 ? void 0 : _a.start) === "function" || isVariantLabel(props2.initial) || isVariantLabel(props2.animate) || isVariantLabel(props2.whileHover) || isVariantLabel(props2.whileDrag) || isVariantLabel(props2.whileTap) || isVariantLabel(props2.whileFocus) || isVariantLabel(props2.exit);
}
function checkIfVariantNode(props2) {
  return Boolean(checkIfControllingVariants(props2) || props2.variants);
}
function getCurrentTreeVariants(props2, context) {
  if (checkIfControllingVariants(props2)) {
    var initial = props2.initial, animate2 = props2.animate;
    return {
      initial: initial === false || isVariantLabel(initial) ? initial : void 0,
      animate: isVariantLabel(animate2) ? animate2 : void 0
    };
  }
  return props2.inherit !== false ? context : {};
}
function useCreateMotionContext(props2) {
  var _a = getCurrentTreeVariants(props2, useContext(MotionContext)), initial = _a.initial, animate2 = _a.animate;
  return useMemo$1(function() {
    return { initial, animate: animate2 };
  }, [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate2)]);
}
function variantLabelsAsDependency(prop) {
  return Array.isArray(prop) ? prop.join(" ") : prop;
}
function useConstant(init) {
  var ref = useRef(null);
  if (ref.current === null) {
    ref.current = init();
  }
  return ref.current;
}
const defaultTimestep = 1 / 60 * 1e3;
const getCurrentTime = typeof performance !== "undefined" ? () => performance.now() : () => Date.now();
const onNextFrame = typeof window !== "undefined" ? (callback) => window.requestAnimationFrame(callback) : (callback) => setTimeout(() => callback(getCurrentTime()), defaultTimestep);
function createRenderStep(runNextFrame2) {
  let toRun = [];
  let toRunNextFrame = [];
  let numToRun = 0;
  let isProcessing2 = false;
  let flushNextFrame = false;
  const toKeepAlive = /* @__PURE__ */ new WeakSet();
  const step = {
    schedule: (callback, keepAlive = false, immediate2 = false) => {
      const addToCurrentFrame = immediate2 && isProcessing2;
      const buffer = addToCurrentFrame ? toRun : toRunNextFrame;
      if (keepAlive)
        toKeepAlive.add(callback);
      if (buffer.indexOf(callback) === -1) {
        buffer.push(callback);
        if (addToCurrentFrame && isProcessing2)
          numToRun = toRun.length;
      }
      return callback;
    },
    cancel: (callback) => {
      const index = toRunNextFrame.indexOf(callback);
      if (index !== -1)
        toRunNextFrame.splice(index, 1);
      toKeepAlive.delete(callback);
    },
    process: (frameData) => {
      if (isProcessing2) {
        flushNextFrame = true;
        return;
      }
      isProcessing2 = true;
      [toRun, toRunNextFrame] = [toRunNextFrame, toRun];
      toRunNextFrame.length = 0;
      numToRun = toRun.length;
      if (numToRun) {
        for (let i = 0; i < numToRun; i++) {
          const callback = toRun[i];
          callback(frameData);
          if (toKeepAlive.has(callback)) {
            step.schedule(callback);
            runNextFrame2();
          }
        }
      }
      isProcessing2 = false;
      if (flushNextFrame) {
        flushNextFrame = false;
        step.process(frameData);
      }
    }
  };
  return step;
}
const maxElapsed = 40;
let useDefaultElapsed = true;
let runNextFrame = false;
let isProcessing = false;
const frame = {
  delta: 0,
  timestamp: 0
};
const stepsOrder = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
];
const steps = stepsOrder.reduce((acc, key) => {
  acc[key] = createRenderStep(() => runNextFrame = true);
  return acc;
}, {});
const sync = stepsOrder.reduce((acc, key) => {
  const step = steps[key];
  acc[key] = (process, keepAlive = false, immediate2 = false) => {
    if (!runNextFrame)
      startLoop();
    return step.schedule(process, keepAlive, immediate2);
  };
  return acc;
}, {});
const cancelSync = stepsOrder.reduce((acc, key) => {
  acc[key] = steps[key].cancel;
  return acc;
}, {});
const flushSync = stepsOrder.reduce((acc, key) => {
  acc[key] = () => steps[key].process(frame);
  return acc;
}, {});
const processStep = (stepId) => steps[stepId].process(frame);
const processFrame = (timestamp) => {
  runNextFrame = false;
  frame.delta = useDefaultElapsed ? defaultTimestep : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
  frame.timestamp = timestamp;
  isProcessing = true;
  stepsOrder.forEach(processStep);
  isProcessing = false;
  if (runNextFrame) {
    useDefaultElapsed = false;
    onNextFrame(processFrame);
  }
};
const startLoop = () => {
  runNextFrame = true;
  useDefaultElapsed = true;
  if (!isProcessing)
    onNextFrame(processFrame);
};
const getFrameData = () => frame;
const clamp$1 = (min, max, v2) => Math.min(Math.max(v2, min), max);
const safeMin = 1e-3;
const minDuration = 0.01;
const maxDuration = 10;
const minDamping = 0.05;
const maxDamping = 1;
function findSpring({ duration = 800, bounce = 0.25, velocity = 0, mass = 1 }) {
  let envelope;
  let derivative;
  warning(duration <= maxDuration * 1e3);
  let dampingRatio = 1 - bounce;
  dampingRatio = clamp$1(minDamping, maxDamping, dampingRatio);
  duration = clamp$1(minDuration, maxDuration, duration / 1e3);
  if (dampingRatio < 1) {
    envelope = (undampedFreq2) => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const a2 = exponentialDecay - velocity;
      const b2 = calcAngularFreq(undampedFreq2, dampingRatio);
      const c2 = Math.exp(-delta);
      return safeMin - a2 / b2 * c2;
    };
    derivative = (undampedFreq2) => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const d2 = delta * velocity + velocity;
      const e2 = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq2, 2) * duration;
      const f2 = Math.exp(-delta);
      const g2 = calcAngularFreq(Math.pow(undampedFreq2, 2), dampingRatio);
      const factor = -envelope(undampedFreq2) + safeMin > 0 ? -1 : 1;
      return factor * ((d2 - e2) * f2) / g2;
    };
  } else {
    envelope = (undampedFreq2) => {
      const a2 = Math.exp(-undampedFreq2 * duration);
      const b2 = (undampedFreq2 - velocity) * duration + 1;
      return -safeMin + a2 * b2;
    };
    derivative = (undampedFreq2) => {
      const a2 = Math.exp(-undampedFreq2 * duration);
      const b2 = (velocity - undampedFreq2) * (duration * duration);
      return a2 * b2;
    };
  }
  const initialGuess = 5 / duration;
  const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
  duration = duration * 1e3;
  if (isNaN(undampedFreq)) {
    return {
      stiffness: 100,
      damping: 10,
      duration
    };
  } else {
    const stiffness = Math.pow(undampedFreq, 2) * mass;
    return {
      stiffness,
      damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
      duration
    };
  }
}
const rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
  let result = initialGuess;
  for (let i = 1; i < rootIterations; i++) {
    result = result - envelope(result) / derivative(result);
  }
  return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
  return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}
const durationKeys = ["duration", "bounce"];
const physicsKeys = ["stiffness", "damping", "mass"];
function isSpringType(options, keys) {
  return keys.some((key) => options[key] !== void 0);
}
function getSpringOptions(options) {
  let springOptions = Object.assign({ velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: false }, options);
  if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
    const derived = findSpring(options);
    springOptions = Object.assign(Object.assign(Object.assign({}, springOptions), derived), { velocity: 0, mass: 1 });
    springOptions.isResolvedFromDuration = true;
  }
  return springOptions;
}
function spring$2(_a) {
  var { from = 0, to = 1, restSpeed = 2, restDelta } = _a, options = __rest$1(_a, ["from", "to", "restSpeed", "restDelta"]);
  const state = { done: false, value: from };
  let { stiffness, damping, mass, velocity, duration, isResolvedFromDuration } = getSpringOptions(options);
  let resolveSpring = zero;
  let resolveVelocity = zero;
  function createSpring() {
    const initialVelocity = velocity ? -(velocity / 1e3) : 0;
    const initialDelta = to - from;
    const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
    const undampedAngularFreq = Math.sqrt(stiffness / mass) / 1e3;
    if (restDelta === void 0) {
      restDelta = Math.min(Math.abs(to - from) / 100, 0.4);
    }
    if (dampingRatio < 1) {
      const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
      resolveSpring = (t2) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t2);
        return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t2) + initialDelta * Math.cos(angularFreq * t2));
      };
      resolveVelocity = (t2) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t2);
        return dampingRatio * undampedAngularFreq * envelope * (Math.sin(angularFreq * t2) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq + initialDelta * Math.cos(angularFreq * t2)) - envelope * (Math.cos(angularFreq * t2) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) - angularFreq * initialDelta * Math.sin(angularFreq * t2));
      };
    } else if (dampingRatio === 1) {
      resolveSpring = (t2) => to - Math.exp(-undampedAngularFreq * t2) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t2);
    } else {
      const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
      resolveSpring = (t2) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t2);
        const freqForT = Math.min(dampedAngularFreq * t2, 300);
        return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
      };
    }
  }
  createSpring();
  return {
    next: (t2) => {
      const current = resolveSpring(t2);
      if (!isResolvedFromDuration) {
        const currentVelocity = resolveVelocity(t2) * 1e3;
        const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
        const isBelowDisplacementThreshold = Math.abs(to - current) <= restDelta;
        state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
      } else {
        state.done = t2 >= duration;
      }
      state.value = state.done ? to : current;
      return state;
    },
    flipTarget: () => {
      velocity = -velocity;
      [from, to] = [to, from];
      createSpring();
    }
  };
}
spring$2.needsInterpolation = (a2, b2) => typeof a2 === "string" || typeof b2 === "string";
const zero = (_t) => 0;
const progress = (from, to, value) => {
  const toFromDifference = to - from;
  return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};
const mix = (from, to, progress2) => -progress2 * from + progress2 * to + from;
const clamp = (min, max) => (v2) => Math.max(Math.min(v2, max), min);
const sanitize = (v2) => v2 % 1 ? Number(v2.toFixed(5)) : v2;
const floatRegex = /(-)?([\d]*\.?[\d])+/g;
const colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi;
const singleColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
function isString(v2) {
  return typeof v2 === "string";
}
const number = {
  test: (v2) => typeof v2 === "number",
  parse: parseFloat,
  transform: (v2) => v2
};
const alpha = Object.assign(Object.assign({}, number), { transform: clamp(0, 1) });
const scale = Object.assign(Object.assign({}, number), { default: 1 });
const createUnitType = (unit) => ({
  test: (v2) => isString(v2) && v2.endsWith(unit) && v2.split(" ").length === 1,
  parse: parseFloat,
  transform: (v2) => `${v2}${unit}`
});
const degrees = createUnitType("deg");
const percent = createUnitType("%");
const px = createUnitType("px");
const vh$1 = createUnitType("vh");
const vw = createUnitType("vw");
const progressPercentage = Object.assign(Object.assign({}, percent), { parse: (v2) => percent.parse(v2) / 100, transform: (v2) => percent.transform(v2 * 100) });
const isColorString = (type, testProp) => (v2) => {
  return Boolean(isString(v2) && singleColorRegex.test(v2) && v2.startsWith(type) || testProp && Object.prototype.hasOwnProperty.call(v2, testProp));
};
const splitColor = (aName, bName, cName) => (v2) => {
  if (!isString(v2))
    return v2;
  const [a2, b2, c2, alpha2] = v2.match(floatRegex);
  return {
    [aName]: parseFloat(a2),
    [bName]: parseFloat(b2),
    [cName]: parseFloat(c2),
    alpha: alpha2 !== void 0 ? parseFloat(alpha2) : 1
  };
};
const hsla = {
  test: isColorString("hsl", "hue"),
  parse: splitColor("hue", "saturation", "lightness"),
  transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
    return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
  }
};
const clampRgbUnit = clamp(0, 255);
const rgbUnit = Object.assign(Object.assign({}, number), { transform: (v2) => Math.round(clampRgbUnit(v2)) });
const rgba = {
  test: isColorString("rgb", "red"),
  parse: splitColor("red", "green", "blue"),
  transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
};
function parseHex(v2) {
  let r2 = "";
  let g2 = "";
  let b2 = "";
  let a2 = "";
  if (v2.length > 5) {
    r2 = v2.substr(1, 2);
    g2 = v2.substr(3, 2);
    b2 = v2.substr(5, 2);
    a2 = v2.substr(7, 2);
  } else {
    r2 = v2.substr(1, 1);
    g2 = v2.substr(2, 1);
    b2 = v2.substr(3, 1);
    a2 = v2.substr(4, 1);
    r2 += r2;
    g2 += g2;
    b2 += b2;
    a2 += a2;
  }
  return {
    red: parseInt(r2, 16),
    green: parseInt(g2, 16),
    blue: parseInt(b2, 16),
    alpha: a2 ? parseInt(a2, 16) / 255 : 1
  };
}
const hex = {
  test: isColorString("#"),
  parse: parseHex,
  transform: rgba.transform
};
const color = {
  test: (v2) => rgba.test(v2) || hex.test(v2) || hsla.test(v2),
  parse: (v2) => {
    if (rgba.test(v2)) {
      return rgba.parse(v2);
    } else if (hsla.test(v2)) {
      return hsla.parse(v2);
    } else {
      return hex.parse(v2);
    }
  },
  transform: (v2) => {
    return isString(v2) ? v2 : v2.hasOwnProperty("red") ? rgba.transform(v2) : hsla.transform(v2);
  }
};
const colorToken = "${c}";
const numberToken = "${n}";
function test(v2) {
  var _a, _b, _c, _d;
  return isNaN(v2) && isString(v2) && ((_b = (_a = v2.match(floatRegex)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) + ((_d = (_c = v2.match(colorRegex)) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0) > 0;
}
function analyse$1(v2) {
  if (typeof v2 === "number")
    v2 = `${v2}`;
  const values2 = [];
  let numColors = 0;
  const colors = v2.match(colorRegex);
  if (colors) {
    numColors = colors.length;
    v2 = v2.replace(colorRegex, colorToken);
    values2.push(...colors.map(color.parse));
  }
  const numbers = v2.match(floatRegex);
  if (numbers) {
    v2 = v2.replace(floatRegex, numberToken);
    values2.push(...numbers.map(number.parse));
  }
  return { values: values2, numColors, tokenised: v2 };
}
function parse$1(v2) {
  return analyse$1(v2).values;
}
function createTransformer(v2) {
  const { values: values2, numColors, tokenised } = analyse$1(v2);
  const numValues = values2.length;
  return (v3) => {
    let output = tokenised;
    for (let i = 0; i < numValues; i++) {
      output = output.replace(i < numColors ? colorToken : numberToken, i < numColors ? color.transform(v3[i]) : sanitize(v3[i]));
    }
    return output;
  };
}
const convertNumbersToZero = (v2) => typeof v2 === "number" ? 0 : v2;
function getAnimatableNone$1(v2) {
  const parsed = parse$1(v2);
  const transformer = createTransformer(v2);
  return transformer(parsed.map(convertNumbersToZero));
}
const complex = { test, parse: parse$1, createTransformer, getAnimatableNone: getAnimatableNone$1 };
const maxDefaults = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function applyDefaultFilter(v2) {
  let [name, value] = v2.slice(0, -1).split("(");
  if (name === "drop-shadow")
    return v2;
  const [number2] = value.match(floatRegex) || [];
  if (!number2)
    return v2;
  const unit = value.replace(number2, "");
  let defaultValue = maxDefaults.has(name) ? 1 : 0;
  if (number2 !== value)
    defaultValue *= 100;
  return name + "(" + defaultValue + unit + ")";
}
const functionRegex = /([a-z-]*)\(.*?\)/g;
const filter = Object.assign(Object.assign({}, complex), { getAnimatableNone: (v2) => {
  const functions = v2.match(functionRegex);
  return functions ? functions.map(applyDefaultFilter).join(" ") : v2;
} });
function hueToRgb(p2, q2, t2) {
  if (t2 < 0)
    t2 += 1;
  if (t2 > 1)
    t2 -= 1;
  if (t2 < 1 / 6)
    return p2 + (q2 - p2) * 6 * t2;
  if (t2 < 1 / 2)
    return q2;
  if (t2 < 2 / 3)
    return p2 + (q2 - p2) * (2 / 3 - t2) * 6;
  return p2;
}
function hslaToRgba({ hue, saturation, lightness, alpha: alpha2 }) {
  hue /= 360;
  saturation /= 100;
  lightness /= 100;
  let red = 0;
  let green = 0;
  let blue = 0;
  if (!saturation) {
    red = green = blue = lightness;
  } else {
    const q2 = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
    const p2 = 2 * lightness - q2;
    red = hueToRgb(p2, q2, hue + 1 / 3);
    green = hueToRgb(p2, q2, hue);
    blue = hueToRgb(p2, q2, hue - 1 / 3);
  }
  return {
    red: Math.round(red * 255),
    green: Math.round(green * 255),
    blue: Math.round(blue * 255),
    alpha: alpha2
  };
}
const mixLinearColor = (from, to, v2) => {
  const fromExpo = from * from;
  const toExpo = to * to;
  return Math.sqrt(Math.max(0, v2 * (toExpo - fromExpo) + fromExpo));
};
const colorTypes = [hex, rgba, hsla];
const getColorType = (v2) => colorTypes.find((type) => type.test(v2));
const mixColor = (from, to) => {
  let fromColorType = getColorType(from);
  let toColorType = getColorType(to);
  let fromColor = fromColorType.parse(from);
  let toColor = toColorType.parse(to);
  if (fromColorType === hsla) {
    fromColor = hslaToRgba(fromColor);
    fromColorType = rgba;
  }
  if (toColorType === hsla) {
    toColor = hslaToRgba(toColor);
    toColorType = rgba;
  }
  const blended = Object.assign({}, fromColor);
  return (v2) => {
    for (const key in blended) {
      if (key !== "alpha") {
        blended[key] = mixLinearColor(fromColor[key], toColor[key], v2);
      }
    }
    blended.alpha = mix(fromColor.alpha, toColor.alpha, v2);
    return fromColorType.transform(blended);
  };
};
const isNum = (v2) => typeof v2 === "number";
const combineFunctions = (a2, b2) => (v2) => b2(a2(v2));
const pipe = (...transformers) => transformers.reduce(combineFunctions);
function getMixer(origin2, target) {
  if (isNum(origin2)) {
    return (v2) => mix(origin2, target, v2);
  } else if (color.test(origin2)) {
    return mixColor(origin2, target);
  } else {
    return mixComplex(origin2, target);
  }
}
const mixArray = (from, to) => {
  const output = [...from];
  const numValues = output.length;
  const blendValue = from.map((fromThis, i) => getMixer(fromThis, to[i]));
  return (v2) => {
    for (let i = 0; i < numValues; i++) {
      output[i] = blendValue[i](v2);
    }
    return output;
  };
};
const mixObject = (origin2, target) => {
  const output = Object.assign(Object.assign({}, origin2), target);
  const blendValue = {};
  for (const key in output) {
    if (origin2[key] !== void 0 && target[key] !== void 0) {
      blendValue[key] = getMixer(origin2[key], target[key]);
    }
  }
  return (v2) => {
    for (const key in blendValue) {
      output[key] = blendValue[key](v2);
    }
    return output;
  };
};
function analyse(value) {
  const parsed = complex.parse(value);
  const numValues = parsed.length;
  let numNumbers = 0;
  let numRGB = 0;
  let numHSL = 0;
  for (let i = 0; i < numValues; i++) {
    if (numNumbers || typeof parsed[i] === "number") {
      numNumbers++;
    } else {
      if (parsed[i].hue !== void 0) {
        numHSL++;
      } else {
        numRGB++;
      }
    }
  }
  return { parsed, numNumbers, numRGB, numHSL };
}
const mixComplex = (origin2, target) => {
  const template = complex.createTransformer(target);
  const originStats = analyse(origin2);
  const targetStats = analyse(target);
  const canInterpolate = originStats.numHSL === targetStats.numHSL && originStats.numRGB === targetStats.numRGB && originStats.numNumbers >= targetStats.numNumbers;
  if (canInterpolate) {
    return pipe(mixArray(originStats.parsed, targetStats.parsed), template);
  } else {
    return (p2) => `${p2 > 0 ? target : origin2}`;
  }
};
const mixNumber = (from, to) => (p2) => mix(from, to, p2);
function detectMixerFactory(v2) {
  if (typeof v2 === "number") {
    return mixNumber;
  } else if (typeof v2 === "string") {
    if (color.test(v2)) {
      return mixColor;
    } else {
      return mixComplex;
    }
  } else if (Array.isArray(v2)) {
    return mixArray;
  } else if (typeof v2 === "object") {
    return mixObject;
  }
}
function createMixers(output, ease2, customMixer) {
  const mixers = [];
  const mixerFactory = customMixer || detectMixerFactory(output[0]);
  const numMixers = output.length - 1;
  for (let i = 0; i < numMixers; i++) {
    let mixer = mixerFactory(output[i], output[i + 1]);
    if (ease2) {
      const easingFunction = Array.isArray(ease2) ? ease2[i] : ease2;
      mixer = pipe(easingFunction, mixer);
    }
    mixers.push(mixer);
  }
  return mixers;
}
function fastInterpolate([from, to], [mixer]) {
  return (v2) => mixer(progress(from, to, v2));
}
function slowInterpolate(input2, mixers) {
  const inputLength = input2.length;
  const lastInputIndex = inputLength - 1;
  return (v2) => {
    let mixerIndex = 0;
    let foundMixerIndex = false;
    if (v2 <= input2[0]) {
      foundMixerIndex = true;
    } else if (v2 >= input2[lastInputIndex]) {
      mixerIndex = lastInputIndex - 1;
      foundMixerIndex = true;
    }
    if (!foundMixerIndex) {
      let i = 1;
      for (; i < inputLength; i++) {
        if (input2[i] > v2 || i === lastInputIndex) {
          break;
        }
      }
      mixerIndex = i - 1;
    }
    const progressInRange = progress(input2[mixerIndex], input2[mixerIndex + 1], v2);
    return mixers[mixerIndex](progressInRange);
  };
}
function interpolate(input2, output, { clamp: isClamp = true, ease: ease2, mixer } = {}) {
  const inputLength = input2.length;
  invariant$3(inputLength === output.length);
  invariant$3(!ease2 || !Array.isArray(ease2) || ease2.length === inputLength - 1);
  if (input2[0] > input2[inputLength - 1]) {
    input2 = [].concat(input2);
    output = [].concat(output);
    input2.reverse();
    output.reverse();
  }
  const mixers = createMixers(output, ease2, mixer);
  const interpolator = inputLength === 2 ? fastInterpolate(input2, mixers) : slowInterpolate(input2, mixers);
  return isClamp ? (v2) => interpolator(clamp$1(input2[0], input2[inputLength - 1], v2)) : interpolator;
}
const reverseEasing = (easing) => (p2) => 1 - easing(1 - p2);
const mirrorEasing = (easing) => (p2) => p2 <= 0.5 ? easing(2 * p2) / 2 : (2 - easing(2 * (1 - p2))) / 2;
const createExpoIn = (power) => (p2) => Math.pow(p2, power);
const createBackIn = (power) => (p2) => p2 * p2 * ((power + 1) * p2 - power);
const createAnticipate = (power) => {
  const backEasing = createBackIn(power);
  return (p2) => (p2 *= 2) < 1 ? 0.5 * backEasing(p2) : 0.5 * (2 - Math.pow(2, -10 * (p2 - 1)));
};
const DEFAULT_OVERSHOOT_STRENGTH = 1.525;
const BOUNCE_FIRST_THRESHOLD = 4 / 11;
const BOUNCE_SECOND_THRESHOLD = 8 / 11;
const BOUNCE_THIRD_THRESHOLD = 9 / 10;
const linear = (p2) => p2;
const easeIn = createExpoIn(2);
const easeOut = reverseEasing(easeIn);
const easeInOut = mirrorEasing(easeIn);
const circIn = (p2) => 1 - Math.sin(Math.acos(p2));
const circOut = reverseEasing(circIn);
const circInOut = mirrorEasing(circOut);
const backIn = createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
const backOut = reverseEasing(backIn);
const backInOut = mirrorEasing(backIn);
const anticipate = createAnticipate(DEFAULT_OVERSHOOT_STRENGTH);
const ca$1 = 4356 / 361;
const cb$1 = 35442 / 1805;
const cc$1 = 16061 / 1805;
const bounceOut = (p2) => {
  if (p2 === 1 || p2 === 0)
    return p2;
  const p22 = p2 * p2;
  return p2 < BOUNCE_FIRST_THRESHOLD ? 7.5625 * p22 : p2 < BOUNCE_SECOND_THRESHOLD ? 9.075 * p22 - 9.9 * p2 + 3.4 : p2 < BOUNCE_THIRD_THRESHOLD ? ca$1 * p22 - cb$1 * p2 + cc$1 : 10.8 * p2 * p2 - 20.52 * p2 + 10.72;
};
const bounceIn = reverseEasing(bounceOut);
const bounceInOut = (p2) => p2 < 0.5 ? 0.5 * (1 - bounceOut(1 - p2 * 2)) : 0.5 * bounceOut(p2 * 2 - 1) + 0.5;
function defaultEasing(values2, easing) {
  return values2.map(() => easing || easeInOut).splice(0, values2.length - 1);
}
function defaultOffset(values2) {
  const numValues = values2.length;
  return values2.map((_value, i) => i !== 0 ? i / (numValues - 1) : 0);
}
function convertOffsetToTimes(offset3, duration) {
  return offset3.map((o) => o * duration);
}
function keyframes$1({ from = 0, to = 1, ease: ease2, offset: offset3, duration = 300 }) {
  const state = { done: false, value: from };
  const values2 = Array.isArray(to) ? to : [from, to];
  const times = convertOffsetToTimes(offset3 && offset3.length === values2.length ? offset3 : defaultOffset(values2), duration);
  function createInterpolator() {
    return interpolate(times, values2, {
      ease: Array.isArray(ease2) ? ease2 : defaultEasing(values2, ease2)
    });
  }
  let interpolator = createInterpolator();
  return {
    next: (t2) => {
      state.value = interpolator(t2);
      state.done = t2 >= duration;
      return state;
    },
    flipTarget: () => {
      values2.reverse();
      interpolator = createInterpolator();
    }
  };
}
function decay({ velocity = 0, from = 0, power = 0.8, timeConstant = 350, restDelta = 0.5, modifyTarget }) {
  const state = { done: false, value: from };
  let amplitude = power * velocity;
  const ideal = from + amplitude;
  const target = modifyTarget === void 0 ? ideal : modifyTarget(ideal);
  if (target !== ideal)
    amplitude = target - from;
  return {
    next: (t2) => {
      const delta = -amplitude * Math.exp(-t2 / timeConstant);
      state.done = !(delta > restDelta || delta < -restDelta);
      state.value = state.done ? target : target + delta;
      return state;
    },
    flipTarget: () => {
    }
  };
}
const types = { keyframes: keyframes$1, spring: spring$2, decay };
function detectAnimationFromOptions(config2) {
  if (Array.isArray(config2.to)) {
    return keyframes$1;
  } else if (types[config2.type]) {
    return types[config2.type];
  }
  const keys = new Set(Object.keys(config2));
  if (keys.has("ease") || keys.has("duration") && !keys.has("dampingRatio")) {
    return keyframes$1;
  } else if (keys.has("dampingRatio") || keys.has("stiffness") || keys.has("mass") || keys.has("damping") || keys.has("restSpeed") || keys.has("restDelta")) {
    return spring$2;
  }
  return keyframes$1;
}
function loopElapsed(elapsed, duration, delay = 0) {
  return elapsed - duration - delay;
}
function reverseElapsed(elapsed, duration, delay = 0, isForwardPlayback = true) {
  return isForwardPlayback ? loopElapsed(duration + -elapsed, duration, delay) : duration - (elapsed - duration) + delay;
}
function hasRepeatDelayElapsed(elapsed, duration, delay, isForwardPlayback) {
  return isForwardPlayback ? elapsed >= duration + delay : elapsed <= -delay;
}
const framesync = (update2) => {
  const passTimestamp = ({ delta }) => update2(delta);
  return {
    start: () => sync.update(passTimestamp, true),
    stop: () => cancelSync.update(passTimestamp)
  };
};
function animate$1(_a) {
  var _b, _c;
  var { from, autoplay = true, driver = framesync, elapsed = 0, repeat: repeatMax = 0, repeatType = "loop", repeatDelay = 0, onPlay, onStop, onComplete, onRepeat, onUpdate } = _a, options = __rest$1(_a, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
  let { to } = options;
  let driverControls;
  let repeatCount = 0;
  let computedDuration = options.duration;
  let latest;
  let isComplete = false;
  let isForwardPlayback = true;
  let interpolateFromNumber;
  const animator = detectAnimationFromOptions(options);
  if ((_c = (_b = animator).needsInterpolation) === null || _c === void 0 ? void 0 : _c.call(_b, from, to)) {
    interpolateFromNumber = interpolate([0, 100], [from, to], {
      clamp: false
    });
    from = 0;
    to = 100;
  }
  const animation2 = animator(Object.assign(Object.assign({}, options), { from, to }));
  function repeat() {
    repeatCount++;
    if (repeatType === "reverse") {
      isForwardPlayback = repeatCount % 2 === 0;
      elapsed = reverseElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback);
    } else {
      elapsed = loopElapsed(elapsed, computedDuration, repeatDelay);
      if (repeatType === "mirror")
        animation2.flipTarget();
    }
    isComplete = false;
    onRepeat && onRepeat();
  }
  function complete() {
    driverControls.stop();
    onComplete && onComplete();
  }
  function update2(delta) {
    if (!isForwardPlayback)
      delta = -delta;
    elapsed += delta;
    if (!isComplete) {
      const state = animation2.next(Math.max(0, elapsed));
      latest = state.value;
      if (interpolateFromNumber)
        latest = interpolateFromNumber(latest);
      isComplete = isForwardPlayback ? state.done : elapsed <= 0;
    }
    onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(latest);
    if (isComplete) {
      if (repeatCount === 0)
        computedDuration !== null && computedDuration !== void 0 ? computedDuration : computedDuration = elapsed;
      if (repeatCount < repeatMax) {
        hasRepeatDelayElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback) && repeat();
      } else {
        complete();
      }
    }
  }
  function play() {
    onPlay === null || onPlay === void 0 ? void 0 : onPlay();
    driverControls = driver(update2);
    driverControls.start();
  }
  autoplay && play();
  return {
    stop: () => {
      onStop === null || onStop === void 0 ? void 0 : onStop();
      driverControls.stop();
    }
  };
}
function velocityPerSecond(velocity, frameDuration) {
  return frameDuration ? velocity * (1e3 / frameDuration) : 0;
}
function inertia({ from = 0, velocity = 0, min, max, power = 0.8, timeConstant = 750, bounceStiffness = 500, bounceDamping = 10, restDelta = 1, modifyTarget, driver, onUpdate, onComplete, onStop }) {
  let currentAnimation;
  function isOutOfBounds(v2) {
    return min !== void 0 && v2 < min || max !== void 0 && v2 > max;
  }
  function boundaryNearest(v2) {
    if (min === void 0)
      return max;
    if (max === void 0)
      return min;
    return Math.abs(min - v2) < Math.abs(max - v2) ? min : max;
  }
  function startAnimation2(options) {
    currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop();
    currentAnimation = animate$1(Object.assign(Object.assign({}, options), {
      driver,
      onUpdate: (v2) => {
        var _a;
        onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(v2);
        (_a = options.onUpdate) === null || _a === void 0 ? void 0 : _a.call(options, v2);
      },
      onComplete,
      onStop
    }));
  }
  function startSpring(options) {
    startAnimation2(Object.assign({ type: "spring", stiffness: bounceStiffness, damping: bounceDamping, restDelta }, options));
  }
  if (isOutOfBounds(from)) {
    startSpring({ from, velocity, to: boundaryNearest(from) });
  } else {
    let target = power * velocity + from;
    if (typeof modifyTarget !== "undefined")
      target = modifyTarget(target);
    const boundary = boundaryNearest(target);
    const heading = boundary === min ? -1 : 1;
    let prev;
    let current;
    const checkBoundary = (v2) => {
      prev = current;
      current = v2;
      velocity = velocityPerSecond(v2 - prev, getFrameData().delta);
      if (heading === 1 && v2 > boundary || heading === -1 && v2 < boundary) {
        startSpring({ from: v2, to: boundary, velocity });
      }
    };
    startAnimation2({
      type: "decay",
      from,
      velocity,
      timeConstant,
      power,
      restDelta,
      modifyTarget,
      onUpdate: isOutOfBounds(target) ? checkBoundary : void 0
    });
  }
  return {
    stop: () => currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop()
  };
}
const isPoint = (point) => point.hasOwnProperty("x") && point.hasOwnProperty("y");
const isPoint3D = (point) => isPoint(point) && point.hasOwnProperty("z");
const distance1D = (a2, b2) => Math.abs(a2 - b2);
function distance$1(a2, b2) {
  if (isNum(a2) && isNum(b2)) {
    return distance1D(a2, b2);
  } else if (isPoint(a2) && isPoint(b2)) {
    const xDelta = distance1D(a2.x, b2.x);
    const yDelta = distance1D(a2.y, b2.y);
    const zDelta = isPoint3D(a2) && isPoint3D(b2) ? distance1D(a2.z, b2.z) : 0;
    return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
  }
}
const a = (a1, a2) => 1 - 3 * a2 + 3 * a1;
const b$2 = (a1, a2) => 3 * a2 - 6 * a1;
const c$2 = (a1) => 3 * a1;
const calcBezier = (t2, a1, a2) => ((a(a1, a2) * t2 + b$2(a1, a2)) * t2 + c$2(a1)) * t2;
const getSlope = (t2, a1, a2) => 3 * a(a1, a2) * t2 * t2 + 2 * b$2(a1, a2) * t2 + c$2(a1);
const subdivisionPrecision = 1e-7;
const subdivisionMaxIterations = 10;
function binarySubdivide(aX, aA, aB, mX1, mX2) {
  let currentX;
  let currentT;
  let i = 0;
  do {
    currentT = aA + (aB - aA) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
  return currentT;
}
const newtonIterations = 8;
const newtonMinSlope = 1e-3;
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
  for (let i = 0; i < newtonIterations; ++i) {
    const currentSlope = getSlope(aGuessT, mX1, mX2);
    if (currentSlope === 0) {
      return aGuessT;
    }
    const currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }
  return aGuessT;
}
const kSplineTableSize = 11;
const kSampleStepSize = 1 / (kSplineTableSize - 1);
function cubicBezier(mX1, mY1, mX2, mY2) {
  if (mX1 === mY1 && mX2 === mY2)
    return linear;
  const sampleValues = new Float32Array(kSplineTableSize);
  for (let i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }
  function getTForX(aX) {
    let intervalStart = 0;
    let currentSample = 1;
    const lastSample = kSplineTableSize - 1;
    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;
    const dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    const guessForT = intervalStart + dist * kSampleStepSize;
    const initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= newtonMinSlope) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }
  return (t2) => t2 === 0 || t2 === 1 ? t2 : calcBezier(getTForX(t2), mY1, mY2);
}
function addUniqueItem(arr, item2) {
  arr.indexOf(item2) === -1 && arr.push(item2);
}
function removeItem(arr, item2) {
  var index = arr.indexOf(item2);
  index > -1 && arr.splice(index, 1);
}
var SubscriptionManager = function() {
  function SubscriptionManager2() {
    this.subscriptions = [];
  }
  SubscriptionManager2.prototype.add = function(handler) {
    var _this = this;
    addUniqueItem(this.subscriptions, handler);
    return function() {
      return removeItem(_this.subscriptions, handler);
    };
  };
  SubscriptionManager2.prototype.notify = function(a2, b2, c2) {
    var numSubscriptions = this.subscriptions.length;
    if (!numSubscriptions)
      return;
    if (numSubscriptions === 1) {
      this.subscriptions[0](a2, b2, c2);
    } else {
      for (var i = 0; i < numSubscriptions; i++) {
        var handler = this.subscriptions[i];
        handler && handler(a2, b2, c2);
      }
    }
  };
  SubscriptionManager2.prototype.getSize = function() {
    return this.subscriptions.length;
  };
  SubscriptionManager2.prototype.clear = function() {
    this.subscriptions.length = 0;
  };
  return SubscriptionManager2;
}();
var isFloat = function(value) {
  return !isNaN(parseFloat(value));
};
var MotionValue = function() {
  function MotionValue2(init) {
    var _this = this;
    this.timeDelta = 0;
    this.lastUpdated = 0;
    this.updateSubscribers = new SubscriptionManager();
    this.velocityUpdateSubscribers = new SubscriptionManager();
    this.renderSubscribers = new SubscriptionManager();
    this.canTrackVelocity = false;
    this.updateAndNotify = function(v2, render) {
      if (render === void 0) {
        render = true;
      }
      _this.prev = _this.current;
      _this.current = v2;
      var _a = getFrameData(), delta = _a.delta, timestamp = _a.timestamp;
      if (_this.lastUpdated !== timestamp) {
        _this.timeDelta = delta;
        _this.lastUpdated = timestamp;
        sync.postRender(_this.scheduleVelocityCheck);
      }
      if (_this.prev !== _this.current) {
        _this.updateSubscribers.notify(_this.current);
      }
      if (_this.velocityUpdateSubscribers.getSize()) {
        _this.velocityUpdateSubscribers.notify(_this.getVelocity());
      }
      if (render) {
        _this.renderSubscribers.notify(_this.current);
      }
    };
    this.scheduleVelocityCheck = function() {
      return sync.postRender(_this.velocityCheck);
    };
    this.velocityCheck = function(_a) {
      var timestamp = _a.timestamp;
      if (timestamp !== _this.lastUpdated) {
        _this.prev = _this.current;
        _this.velocityUpdateSubscribers.notify(_this.getVelocity());
      }
    };
    this.hasAnimated = false;
    this.prev = this.current = init;
    this.canTrackVelocity = isFloat(this.current);
  }
  MotionValue2.prototype.onChange = function(subscription) {
    return this.updateSubscribers.add(subscription);
  };
  MotionValue2.prototype.clearListeners = function() {
    this.updateSubscribers.clear();
  };
  MotionValue2.prototype.onRenderRequest = function(subscription) {
    subscription(this.get());
    return this.renderSubscribers.add(subscription);
  };
  MotionValue2.prototype.attach = function(passiveEffect) {
    this.passiveEffect = passiveEffect;
  };
  MotionValue2.prototype.set = function(v2, render) {
    if (render === void 0) {
      render = true;
    }
    if (!render || !this.passiveEffect) {
      this.updateAndNotify(v2, render);
    } else {
      this.passiveEffect(v2, this.updateAndNotify);
    }
  };
  MotionValue2.prototype.get = function() {
    return this.current;
  };
  MotionValue2.prototype.getPrevious = function() {
    return this.prev;
  };
  MotionValue2.prototype.getVelocity = function() {
    return this.canTrackVelocity ? velocityPerSecond(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0;
  };
  MotionValue2.prototype.start = function(animation2) {
    var _this = this;
    this.stop();
    return new Promise(function(resolve) {
      _this.hasAnimated = true;
      _this.stopAnimation = animation2(resolve);
    }).then(function() {
      return _this.clearAnimation();
    });
  };
  MotionValue2.prototype.stop = function() {
    if (this.stopAnimation)
      this.stopAnimation();
    this.clearAnimation();
  };
  MotionValue2.prototype.isAnimating = function() {
    return !!this.stopAnimation;
  };
  MotionValue2.prototype.clearAnimation = function() {
    this.stopAnimation = null;
  };
  MotionValue2.prototype.destroy = function() {
    this.updateSubscribers.clear();
    this.renderSubscribers.clear();
    this.stop();
  };
  return MotionValue2;
}();
function motionValue(init) {
  return new MotionValue(init);
}
var isMotionValue = function(value) {
  return Boolean(value !== null && typeof value === "object" && value.getVelocity);
};
var secondsToMilliseconds = function(seconds) {
  return seconds * 1e3;
};
var easingLookup = {
  linear,
  easeIn,
  easeInOut,
  easeOut,
  circIn,
  circInOut,
  circOut,
  backIn,
  backInOut,
  backOut,
  anticipate,
  bounceIn,
  bounceInOut,
  bounceOut
};
var easingDefinitionToFunction = function(definition) {
  if (Array.isArray(definition)) {
    invariant$3(definition.length === 4);
    var _a = __read(definition, 4), x1 = _a[0], y1 = _a[1], x2 = _a[2], y2 = _a[3];
    return cubicBezier(x1, y1, x2, y2);
  } else if (typeof definition === "string") {
    return easingLookup[definition];
  }
  return definition;
};
var isEasingArray = function(ease2) {
  return Array.isArray(ease2) && typeof ease2[0] !== "number";
};
var isAnimatable = function(key, value) {
  if (key === "zIndex")
    return false;
  if (typeof value === "number" || Array.isArray(value))
    return true;
  if (typeof value === "string" && complex.test(value) && !value.startsWith("url(")) {
    return true;
  }
  return false;
};
var isKeyframesTarget = function(v2) {
  return Array.isArray(v2);
};
var underDampedSpring = function() {
  return {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  };
};
var criticallyDampedSpring = function(to) {
  return {
    type: "spring",
    stiffness: 550,
    damping: to === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  };
};
var linearTween = function() {
  return {
    type: "keyframes",
    ease: "linear",
    duration: 0.3
  };
};
var keyframes = function(values2) {
  return {
    type: "keyframes",
    duration: 0.8,
    values: values2
  };
};
var defaultTransitions = {
  x: underDampedSpring,
  y: underDampedSpring,
  z: underDampedSpring,
  rotate: underDampedSpring,
  rotateX: underDampedSpring,
  rotateY: underDampedSpring,
  rotateZ: underDampedSpring,
  scaleX: criticallyDampedSpring,
  scaleY: criticallyDampedSpring,
  scale: criticallyDampedSpring,
  opacity: linearTween,
  backgroundColor: linearTween,
  color: linearTween,
  default: criticallyDampedSpring
};
var getDefaultTransition = function(valueKey, to) {
  var transitionFactory;
  if (isKeyframesTarget(to)) {
    transitionFactory = keyframes;
  } else {
    transitionFactory = defaultTransitions[valueKey] || defaultTransitions.default;
  }
  return __assign$1({ to }, transitionFactory(to));
};
var int = __assign$1(__assign$1({}, number), { transform: Math.round });
var numberValueTypes = {
  borderWidth: px,
  borderTopWidth: px,
  borderRightWidth: px,
  borderBottomWidth: px,
  borderLeftWidth: px,
  borderRadius: px,
  radius: px,
  borderTopLeftRadius: px,
  borderTopRightRadius: px,
  borderBottomRightRadius: px,
  borderBottomLeftRadius: px,
  width: px,
  maxWidth: px,
  height: px,
  maxHeight: px,
  size: px,
  top: px,
  right: px,
  bottom: px,
  left: px,
  padding: px,
  paddingTop: px,
  paddingRight: px,
  paddingBottom: px,
  paddingLeft: px,
  margin: px,
  marginTop: px,
  marginRight: px,
  marginBottom: px,
  marginLeft: px,
  rotate: degrees,
  rotateX: degrees,
  rotateY: degrees,
  rotateZ: degrees,
  scale,
  scaleX: scale,
  scaleY: scale,
  scaleZ: scale,
  skew: degrees,
  skewX: degrees,
  skewY: degrees,
  distance: px,
  translateX: px,
  translateY: px,
  translateZ: px,
  x: px,
  y: px,
  z: px,
  perspective: px,
  transformPerspective: px,
  opacity: alpha,
  originX: progressPercentage,
  originY: progressPercentage,
  originZ: px,
  zIndex: int,
  fillOpacity: alpha,
  strokeOpacity: alpha,
  numOctaves: int
};
var defaultValueTypes = __assign$1(__assign$1({}, numberValueTypes), {
  color,
  backgroundColor: color,
  outlineColor: color,
  fill: color,
  stroke: color,
  borderColor: color,
  borderTopColor: color,
  borderRightColor: color,
  borderBottomColor: color,
  borderLeftColor: color,
  filter,
  WebkitFilter: filter
});
var getDefaultValueType = function(key) {
  return defaultValueTypes[key];
};
function getAnimatableNone(key, value) {
  var _a;
  var defaultValueType = getDefaultValueType(key);
  if (defaultValueType !== filter)
    defaultValueType = complex;
  return (_a = defaultValueType.getAnimatableNone) === null || _a === void 0 ? void 0 : _a.call(defaultValueType, value);
}
var instantAnimationState = {
  current: false
};
var isCustomValue = function(v2) {
  return Boolean(v2 && typeof v2 === "object" && v2.mix && v2.toValue);
};
var resolveFinalValueInKeyframes = function(v2) {
  return isKeyframesTarget(v2) ? v2[v2.length - 1] || 0 : v2;
};
function isTransitionDefined(_a) {
  _a.when;
  _a.delay;
  _a.delayChildren;
  _a.staggerChildren;
  _a.staggerDirection;
  _a.repeat;
  _a.repeatType;
  _a.repeatDelay;
  _a.from;
  var transition = __rest$1(_a, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
  return !!Object.keys(transition).length;
}
function convertTransitionToAnimationOptions(_a) {
  var ease2 = _a.ease, times = _a.times, yoyo = _a.yoyo, flip = _a.flip, loop = _a.loop, transition = __rest$1(_a, ["ease", "times", "yoyo", "flip", "loop"]);
  var options = __assign$1({}, transition);
  if (times)
    options["offset"] = times;
  if (transition.duration)
    options["duration"] = secondsToMilliseconds(transition.duration);
  if (transition.repeatDelay)
    options.repeatDelay = secondsToMilliseconds(transition.repeatDelay);
  if (ease2) {
    options["ease"] = isEasingArray(ease2) ? ease2.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease2);
  }
  if (transition.type === "tween")
    options.type = "keyframes";
  if (yoyo || loop || flip) {
    if (yoyo) {
      options.repeatType = "reverse";
    } else if (loop) {
      options.repeatType = "loop";
    } else if (flip) {
      options.repeatType = "mirror";
    }
    options.repeat = loop || yoyo || flip || transition.repeat;
  }
  if (transition.type !== "spring")
    options.type = "keyframes";
  return options;
}
function getDelayFromTransition(transition, key) {
  var _a, _b;
  var valueTransition = getValueTransition(transition, key) || {};
  return (_b = (_a = valueTransition.delay) !== null && _a !== void 0 ? _a : transition.delay) !== null && _b !== void 0 ? _b : 0;
}
function hydrateKeyframes(options) {
  if (Array.isArray(options.to) && options.to[0] === null) {
    options.to = __spreadArray([], __read(options.to), false);
    options.to[0] = options.from;
  }
  return options;
}
function getPopmotionAnimationOptions(transition, options, key) {
  var _a;
  if (Array.isArray(options.to)) {
    (_a = transition.duration) !== null && _a !== void 0 ? _a : transition.duration = 0.8;
  }
  hydrateKeyframes(options);
  if (!isTransitionDefined(transition)) {
    transition = __assign$1(__assign$1({}, transition), getDefaultTransition(key, options.to));
  }
  return __assign$1(__assign$1({}, options), convertTransitionToAnimationOptions(transition));
}
function getAnimation(key, value, target, transition, onComplete) {
  var _a;
  var valueTransition = getValueTransition(transition, key);
  var origin2 = (_a = valueTransition.from) !== null && _a !== void 0 ? _a : value.get();
  var isTargetAnimatable = isAnimatable(key, target);
  if (origin2 === "none" && isTargetAnimatable && typeof target === "string") {
    origin2 = getAnimatableNone(key, target);
  } else if (isZero(origin2) && typeof target === "string") {
    origin2 = getZeroUnit(target);
  } else if (!Array.isArray(target) && isZero(target) && typeof origin2 === "string") {
    target = getZeroUnit(origin2);
  }
  var isOriginAnimatable = isAnimatable(key, origin2);
  function start() {
    var options = {
      from: origin2,
      to: target,
      velocity: value.getVelocity(),
      onComplete,
      onUpdate: function(v2) {
        return value.set(v2);
      }
    };
    return valueTransition.type === "inertia" || valueTransition.type === "decay" ? inertia(__assign$1(__assign$1({}, options), valueTransition)) : animate$1(__assign$1(__assign$1({}, getPopmotionAnimationOptions(valueTransition, options, key)), { onUpdate: function(v2) {
      var _a2;
      options.onUpdate(v2);
      (_a2 = valueTransition.onUpdate) === null || _a2 === void 0 ? void 0 : _a2.call(valueTransition, v2);
    }, onComplete: function() {
      var _a2;
      options.onComplete();
      (_a2 = valueTransition.onComplete) === null || _a2 === void 0 ? void 0 : _a2.call(valueTransition);
    } }));
  }
  function set() {
    var _a2, _b;
    var finalTarget = resolveFinalValueInKeyframes(target);
    value.set(finalTarget);
    onComplete();
    (_a2 = valueTransition === null || valueTransition === void 0 ? void 0 : valueTransition.onUpdate) === null || _a2 === void 0 ? void 0 : _a2.call(valueTransition, finalTarget);
    (_b = valueTransition === null || valueTransition === void 0 ? void 0 : valueTransition.onComplete) === null || _b === void 0 ? void 0 : _b.call(valueTransition);
    return { stop: function() {
    } };
  }
  return !isOriginAnimatable || !isTargetAnimatable || valueTransition.type === false ? set : start;
}
function isZero(value) {
  return value === 0 || typeof value === "string" && parseFloat(value) === 0 && value.indexOf(" ") === -1;
}
function getZeroUnit(potentialUnitType) {
  return typeof potentialUnitType === "number" ? 0 : getAnimatableNone("", potentialUnitType);
}
function getValueTransition(transition, key) {
  return transition[key] || transition["default"] || transition;
}
function startAnimation(key, value, target, transition) {
  if (transition === void 0) {
    transition = {};
  }
  if (instantAnimationState.current) {
    transition = { type: false };
  }
  return value.start(function(onComplete) {
    var delayTimer;
    var controls;
    var animation2 = getAnimation(key, value, target, transition, onComplete);
    var delay = getDelayFromTransition(transition, key);
    var start = function() {
      return controls = animation2();
    };
    if (delay) {
      delayTimer = window.setTimeout(start, secondsToMilliseconds(delay));
    } else {
      start();
    }
    return function() {
      clearTimeout(delayTimer);
      controls === null || controls === void 0 ? void 0 : controls.stop();
    };
  });
}
function animate(from, to, transition) {
  if (transition === void 0) {
    transition = {};
  }
  var value = isMotionValue(from) ? from : motionValue(from);
  startAnimation("", value, to, transition);
  return {
    stop: function() {
      return value.stop();
    },
    isAnimating: function() {
      return value.isAnimating();
    }
  };
}
var borders = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
var numBorders = borders.length;
var asNumber = function(value) {
  return typeof value === "string" ? parseFloat(value) : value;
};
var isPx = function(value) {
  return typeof value === "number" || px.test(value);
};
function mixValues(target, follow, lead, progress2, shouldCrossfadeOpacity, isOnlyMember) {
  var _a, _b, _c, _d;
  if (shouldCrossfadeOpacity) {
    target.opacity = mix(0, (_a = lead.opacity) !== null && _a !== void 0 ? _a : 1, easeCrossfadeIn(progress2));
    target.opacityExit = mix((_b = follow.opacity) !== null && _b !== void 0 ? _b : 1, 0, easeCrossfadeOut(progress2));
  } else if (isOnlyMember) {
    target.opacity = mix((_c = follow.opacity) !== null && _c !== void 0 ? _c : 1, (_d = lead.opacity) !== null && _d !== void 0 ? _d : 1, progress2);
  }
  for (var i = 0; i < numBorders; i++) {
    var borderLabel = "border".concat(borders[i], "Radius");
    var followRadius = getRadius(follow, borderLabel);
    var leadRadius = getRadius(lead, borderLabel);
    if (followRadius === void 0 && leadRadius === void 0)
      continue;
    followRadius || (followRadius = 0);
    leadRadius || (leadRadius = 0);
    var canMix = followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius);
    if (canMix) {
      target[borderLabel] = Math.max(mix(asNumber(followRadius), asNumber(leadRadius), progress2), 0);
      if (percent.test(leadRadius) || percent.test(followRadius)) {
        target[borderLabel] += "%";
      }
    } else {
      target[borderLabel] = leadRadius;
    }
  }
  if (follow.rotate || lead.rotate) {
    target.rotate = mix(follow.rotate || 0, lead.rotate || 0, progress2);
  }
}
function getRadius(values2, radiusName) {
  var _a;
  return (_a = values2[radiusName]) !== null && _a !== void 0 ? _a : values2.borderRadius;
}
var easeCrossfadeIn = compress(0, 0.5, circOut);
var easeCrossfadeOut = compress(0.5, 0.95, linear);
function compress(min, max, easing) {
  return function(p2) {
    if (p2 < min)
      return 0;
    if (p2 > max)
      return 1;
    return easing(progress(min, max, p2));
  };
}
function copyAxisInto(axis, originAxis) {
  axis.min = originAxis.min;
  axis.max = originAxis.max;
}
function copyBoxInto(box, originBox) {
  copyAxisInto(box.x, originBox.x);
  copyAxisInto(box.y, originBox.y);
}
function isIdentityScale(scale2) {
  return scale2 === void 0 || scale2 === 1;
}
function hasScale(_a) {
  var scale2 = _a.scale, scaleX = _a.scaleX, scaleY = _a.scaleY;
  return !isIdentityScale(scale2) || !isIdentityScale(scaleX) || !isIdentityScale(scaleY);
}
function hasTransform(values2) {
  return hasScale(values2) || hasTranslate(values2.x) || hasTranslate(values2.y) || values2.z || values2.rotate || values2.rotateX || values2.rotateY;
}
function hasTranslate(value) {
  return value && value !== "0%";
}
function scalePoint(point, scale2, originPoint) {
  var distanceFromOrigin = point - originPoint;
  var scaled = scale2 * distanceFromOrigin;
  return originPoint + scaled;
}
function applyPointDelta(point, translate, scale2, originPoint, boxScale) {
  if (boxScale !== void 0) {
    point = scalePoint(point, boxScale, originPoint);
  }
  return scalePoint(point, scale2, originPoint) + translate;
}
function applyAxisDelta(axis, translate, scale2, originPoint, boxScale) {
  if (translate === void 0) {
    translate = 0;
  }
  if (scale2 === void 0) {
    scale2 = 1;
  }
  axis.min = applyPointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = applyPointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function applyBoxDelta(box, _a) {
  var x = _a.x, y2 = _a.y;
  applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
  applyAxisDelta(box.y, y2.translate, y2.scale, y2.originPoint);
}
function applyTreeDeltas(box, treeScale, treePath, isSharedTransition) {
  var _a, _b;
  if (isSharedTransition === void 0) {
    isSharedTransition = false;
  }
  var treeLength = treePath.length;
  if (!treeLength)
    return;
  treeScale.x = treeScale.y = 1;
  var node;
  var delta;
  for (var i = 0; i < treeLength; i++) {
    node = treePath[i];
    delta = node.projectionDelta;
    if (((_b = (_a = node.instance) === null || _a === void 0 ? void 0 : _a.style) === null || _b === void 0 ? void 0 : _b.display) === "contents")
      continue;
    if (isSharedTransition && node.options.layoutScroll && node.scroll && node !== node.root) {
      transformBox(box, { x: -node.scroll.x, y: -node.scroll.y });
    }
    if (delta) {
      treeScale.x *= delta.x.scale;
      treeScale.y *= delta.y.scale;
      applyBoxDelta(box, delta);
    }
    if (isSharedTransition && hasTransform(node.latestValues)) {
      transformBox(box, node.latestValues);
    }
  }
}
function translateAxis(axis, distance3) {
  axis.min = axis.min + distance3;
  axis.max = axis.max + distance3;
}
function transformAxis(axis, transforms2, _a) {
  var _b = __read(_a, 3), key = _b[0], scaleKey = _b[1], originKey = _b[2];
  var axisOrigin = transforms2[originKey] !== void 0 ? transforms2[originKey] : 0.5;
  var originPoint = mix(axis.min, axis.max, axisOrigin);
  applyAxisDelta(axis, transforms2[key], transforms2[scaleKey], originPoint, transforms2.scale);
}
var xKeys$1 = ["x", "scaleX", "originX"];
var yKeys$1 = ["y", "scaleY", "originY"];
function transformBox(box, transform) {
  transformAxis(box.x, transform, xKeys$1);
  transformAxis(box.y, transform, yKeys$1);
}
function calcLength(axis) {
  return axis.max - axis.min;
}
function isNear(value, target, maxDistance) {
  if (target === void 0) {
    target = 0;
  }
  if (maxDistance === void 0) {
    maxDistance = 0.01;
  }
  return distance$1(value, target) < maxDistance;
}
function calcAxisDelta(delta, source, target, origin2) {
  if (origin2 === void 0) {
    origin2 = 0.5;
  }
  delta.origin = origin2;
  delta.originPoint = mix(source.min, source.max, delta.origin);
  delta.scale = calcLength(target) / calcLength(source);
  if (isNear(delta.scale, 1, 1e-4) || isNaN(delta.scale))
    delta.scale = 1;
  delta.translate = mix(target.min, target.max, delta.origin) - delta.originPoint;
  if (isNear(delta.translate) || isNaN(delta.translate))
    delta.translate = 0;
}
function calcBoxDelta(delta, source, target, origin2) {
  calcAxisDelta(delta.x, source.x, target.x, origin2 === null || origin2 === void 0 ? void 0 : origin2.originX);
  calcAxisDelta(delta.y, source.y, target.y, origin2 === null || origin2 === void 0 ? void 0 : origin2.originY);
}
function calcRelativeAxis(target, relative, parent) {
  target.min = parent.min + relative.min;
  target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent) {
  calcRelativeAxis(target.x, relative.x, parent.x);
  calcRelativeAxis(target.y, relative.y, parent.y);
}
function calcRelativeAxisPosition(target, layout, parent) {
  target.min = layout.min - parent.min;
  target.max = target.min + calcLength(layout);
}
function calcRelativePosition(target, layout, parent) {
  calcRelativeAxisPosition(target.x, layout.x, parent.x);
  calcRelativeAxisPosition(target.y, layout.y, parent.y);
}
function removePointDelta(point, translate, scale2, originPoint, boxScale) {
  point -= translate;
  point = scalePoint(point, 1 / scale2, originPoint);
  if (boxScale !== void 0) {
    point = scalePoint(point, 1 / boxScale, originPoint);
  }
  return point;
}
function removeAxisDelta(axis, translate, scale2, origin2, boxScale, originAxis, sourceAxis) {
  if (translate === void 0) {
    translate = 0;
  }
  if (scale2 === void 0) {
    scale2 = 1;
  }
  if (origin2 === void 0) {
    origin2 = 0.5;
  }
  if (originAxis === void 0) {
    originAxis = axis;
  }
  if (sourceAxis === void 0) {
    sourceAxis = axis;
  }
  if (percent.test(translate)) {
    translate = parseFloat(translate);
    var relativeProgress = mix(sourceAxis.min, sourceAxis.max, translate / 100);
    translate = relativeProgress - sourceAxis.min;
  }
  if (typeof translate !== "number")
    return;
  var originPoint = mix(originAxis.min, originAxis.max, origin2);
  if (axis === originAxis)
    originPoint -= translate;
  axis.min = removePointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = removePointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function removeAxisTransforms(axis, transforms2, _a, origin2, sourceAxis) {
  var _b = __read(_a, 3), key = _b[0], scaleKey = _b[1], originKey = _b[2];
  removeAxisDelta(axis, transforms2[key], transforms2[scaleKey], transforms2[originKey], transforms2.scale, origin2, sourceAxis);
}
var xKeys = ["x", "scaleX", "originX"];
var yKeys = ["y", "scaleY", "originY"];
function removeBoxTransforms(box, transforms2, originBox, sourceBox) {
  removeAxisTransforms(box.x, transforms2, xKeys, originBox === null || originBox === void 0 ? void 0 : originBox.x, sourceBox === null || sourceBox === void 0 ? void 0 : sourceBox.x);
  removeAxisTransforms(box.y, transforms2, yKeys, originBox === null || originBox === void 0 ? void 0 : originBox.y, sourceBox === null || sourceBox === void 0 ? void 0 : sourceBox.y);
}
var createAxisDelta = function() {
  return {
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  };
};
var createDelta = function() {
  return {
    x: createAxisDelta(),
    y: createAxisDelta()
  };
};
var createAxis = function() {
  return { min: 0, max: 0 };
};
var createBox$1 = function() {
  return {
    x: createAxis(),
    y: createAxis()
  };
};
function isAxisDeltaZero(delta) {
  return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
  return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function boxEquals(a2, b2) {
  return a2.x.min === b2.x.min && a2.x.max === b2.x.max && a2.y.min === b2.y.min && a2.y.max === b2.y.max;
}
var NodeStack = function() {
  function NodeStack2() {
    this.members = [];
  }
  NodeStack2.prototype.add = function(node) {
    addUniqueItem(this.members, node);
    node.scheduleRender();
  };
  NodeStack2.prototype.remove = function(node) {
    removeItem(this.members, node);
    if (node === this.prevLead) {
      this.prevLead = void 0;
    }
    if (node === this.lead) {
      var prevLead = this.members[this.members.length - 1];
      if (prevLead) {
        this.promote(prevLead);
      }
    }
  };
  NodeStack2.prototype.relegate = function(node) {
    var indexOfNode = this.members.findIndex(function(member2) {
      return node === member2;
    });
    if (indexOfNode === 0)
      return false;
    var prevLead;
    for (var i = indexOfNode; i >= 0; i--) {
      var member = this.members[i];
      if (member.isPresent !== false) {
        prevLead = member;
        break;
      }
    }
    if (prevLead) {
      this.promote(prevLead);
      return true;
    } else {
      return false;
    }
  };
  NodeStack2.prototype.promote = function(node, preserveFollowOpacity) {
    var _a;
    var prevLead = this.lead;
    if (node === prevLead)
      return;
    this.prevLead = prevLead;
    this.lead = node;
    node.show();
    if (prevLead) {
      prevLead.instance && prevLead.scheduleRender();
      node.scheduleRender();
      node.resumeFrom = prevLead;
      if (preserveFollowOpacity) {
        node.resumeFrom.preserveOpacity = true;
      }
      if (prevLead.snapshot) {
        node.snapshot = prevLead.snapshot;
        node.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues;
        node.snapshot.isShared = true;
      }
      if ((_a = node.root) === null || _a === void 0 ? void 0 : _a.isUpdating) {
        node.isLayoutDirty = true;
      }
      var crossfade = node.options.crossfade;
      if (crossfade === false) {
        prevLead.hide();
      }
    }
  };
  NodeStack2.prototype.exitAnimationComplete = function() {
    this.members.forEach(function(node) {
      var _a, _b, _c, _d, _e;
      (_b = (_a = node.options).onExitComplete) === null || _b === void 0 ? void 0 : _b.call(_a);
      (_e = (_c = node.resumingFrom) === null || _c === void 0 ? void 0 : (_d = _c.options).onExitComplete) === null || _e === void 0 ? void 0 : _e.call(_d);
    });
  };
  NodeStack2.prototype.scheduleRender = function() {
    this.members.forEach(function(node) {
      node.instance && node.scheduleRender(false);
    });
  };
  NodeStack2.prototype.removeLeadSnapshot = function() {
    if (this.lead && this.lead.snapshot) {
      this.lead.snapshot = void 0;
    }
  };
  return NodeStack2;
}();
var scaleCorrectors = {};
function addScaleCorrector(correctors) {
  Object.assign(scaleCorrectors, correctors);
}
var identityProjection = "translate3d(0px, 0px, 0) scale(1, 1)";
function buildProjectionTransform(delta, treeScale, latestTransform) {
  var xTranslate = delta.x.translate / treeScale.x;
  var yTranslate = delta.y.translate / treeScale.y;
  var transform = "translate3d(".concat(xTranslate, "px, ").concat(yTranslate, "px, 0) ");
  if (latestTransform) {
    var rotate = latestTransform.rotate, rotateX = latestTransform.rotateX, rotateY = latestTransform.rotateY;
    if (rotate)
      transform += "rotate(".concat(rotate, "deg) ");
    if (rotateX)
      transform += "rotateX(".concat(rotateX, "deg) ");
    if (rotateY)
      transform += "rotateY(".concat(rotateY, "deg) ");
  }
  transform += "scale(".concat(delta.x.scale, ", ").concat(delta.y.scale, ")");
  return transform === identityProjection ? "none" : transform;
}
function eachAxis(callback) {
  return [callback("x"), callback("y")];
}
var transformAxes = ["", "X", "Y", "Z"];
var order = ["translate", "scale", "rotate", "skew"];
var transformProps = ["transformPerspective", "x", "y", "z"];
order.forEach(function(operationKey) {
  return transformAxes.forEach(function(axesKey) {
    return transformProps.push(operationKey + axesKey);
  });
});
function sortTransformProps(a2, b2) {
  return transformProps.indexOf(a2) - transformProps.indexOf(b2);
}
var transformPropSet = new Set(transformProps);
function isTransformProp(key) {
  return transformPropSet.has(key);
}
var transformOriginProps = /* @__PURE__ */ new Set(["originX", "originY", "originZ"]);
function isTransformOriginProp(key) {
  return transformOriginProps.has(key);
}
var compareByDepth = function(a2, b2) {
  return a2.depth - b2.depth;
};
var FlatTree = function() {
  function FlatTree2() {
    this.children = [];
    this.isDirty = false;
  }
  FlatTree2.prototype.add = function(child) {
    addUniqueItem(this.children, child);
    this.isDirty = true;
  };
  FlatTree2.prototype.remove = function(child) {
    removeItem(this.children, child);
    this.isDirty = true;
  };
  FlatTree2.prototype.forEach = function(callback) {
    this.isDirty && this.children.sort(compareByDepth);
    this.isDirty = false;
    this.children.forEach(callback);
  };
  return FlatTree2;
}();
function resolveMotionValue(value) {
  var unwrappedValue = isMotionValue(value) ? value.get() : value;
  return isCustomValue(unwrappedValue) ? unwrappedValue.toValue() : unwrappedValue;
}
var animationTarget = 1e3;
var globalProjectionState = {
  hasAnimatedSinceResize: true,
  hasEverUpdated: false
};
function createProjectionNode(_a) {
  var attachResizeListener = _a.attachResizeListener, defaultParent = _a.defaultParent, measureScroll = _a.measureScroll, resetTransform = _a.resetTransform;
  return function() {
    function ProjectionNode(id2, latestValues, parent) {
      var _this = this;
      if (latestValues === void 0) {
        latestValues = {};
      }
      if (parent === void 0) {
        parent = defaultParent === null || defaultParent === void 0 ? void 0 : defaultParent();
      }
      this.children = /* @__PURE__ */ new Set();
      this.options = {};
      this.isTreeAnimating = false;
      this.isAnimationBlocked = false;
      this.isLayoutDirty = false;
      this.updateManuallyBlocked = false;
      this.updateBlockedByResize = false;
      this.isUpdating = false;
      this.isSVG = false;
      this.needsReset = false;
      this.shouldResetTransform = false;
      this.treeScale = { x: 1, y: 1 };
      this.eventHandlers = /* @__PURE__ */ new Map();
      this.potentialNodes = /* @__PURE__ */ new Map();
      this.checkUpdateFailed = function() {
        if (_this.isUpdating) {
          _this.isUpdating = false;
          _this.clearAllSnapshots();
        }
      };
      this.updateProjection = function() {
        _this.nodes.forEach(resolveTargetDelta);
        _this.nodes.forEach(calcProjection);
      };
      this.hasProjected = false;
      this.isVisible = true;
      this.animationProgress = 0;
      this.sharedNodes = /* @__PURE__ */ new Map();
      this.id = id2;
      this.latestValues = latestValues;
      this.root = parent ? parent.root || parent : this;
      this.path = parent ? __spreadArray(__spreadArray([], __read(parent.path), false), [parent], false) : [];
      this.parent = parent;
      this.depth = parent ? parent.depth + 1 : 0;
      id2 && this.root.registerPotentialNode(id2, this);
      for (var i = 0; i < this.path.length; i++) {
        this.path[i].shouldResetTransform = true;
      }
      if (this.root === this)
        this.nodes = new FlatTree();
    }
    ProjectionNode.prototype.addEventListener = function(name, handler) {
      if (!this.eventHandlers.has(name)) {
        this.eventHandlers.set(name, new SubscriptionManager());
      }
      return this.eventHandlers.get(name).add(handler);
    };
    ProjectionNode.prototype.notifyListeners = function(name) {
      var args = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
      }
      var subscriptionManager = this.eventHandlers.get(name);
      subscriptionManager === null || subscriptionManager === void 0 ? void 0 : subscriptionManager.notify.apply(subscriptionManager, __spreadArray([], __read(args), false));
    };
    ProjectionNode.prototype.hasListeners = function(name) {
      return this.eventHandlers.has(name);
    };
    ProjectionNode.prototype.registerPotentialNode = function(id2, node) {
      this.potentialNodes.set(id2, node);
    };
    ProjectionNode.prototype.mount = function(instance, isLayoutDirty) {
      var _this = this;
      var _a2;
      if (isLayoutDirty === void 0) {
        isLayoutDirty = false;
      }
      if (this.instance)
        return;
      this.isSVG = instance instanceof SVGElement && instance.tagName !== "svg";
      this.instance = instance;
      var _b = this.options, layoutId = _b.layoutId, layout = _b.layout, visualElement2 = _b.visualElement;
      if (visualElement2 && !visualElement2.getInstance()) {
        visualElement2.mount(instance);
      }
      this.root.nodes.add(this);
      (_a2 = this.parent) === null || _a2 === void 0 ? void 0 : _a2.children.add(this);
      this.id && this.root.potentialNodes.delete(this.id);
      if (isLayoutDirty && (layout || layoutId)) {
        this.isLayoutDirty = true;
      }
      if (attachResizeListener) {
        var unblockTimeout_1;
        var resizeUnblockUpdate_1 = function() {
          return _this.root.updateBlockedByResize = false;
        };
        attachResizeListener(instance, function() {
          _this.root.updateBlockedByResize = true;
          clearTimeout(unblockTimeout_1);
          unblockTimeout_1 = window.setTimeout(resizeUnblockUpdate_1, 250);
          if (globalProjectionState.hasAnimatedSinceResize) {
            globalProjectionState.hasAnimatedSinceResize = false;
            _this.nodes.forEach(finishAnimation);
          }
        });
      }
      if (layoutId) {
        this.root.registerSharedNode(layoutId, this);
      }
      if (this.options.animate !== false && visualElement2 && (layoutId || layout)) {
        this.addEventListener("didUpdate", function(_a3) {
          var _b2, _c, _d, _e, _f;
          var delta = _a3.delta, hasLayoutChanged = _a3.hasLayoutChanged, hasRelativeTargetChanged = _a3.hasRelativeTargetChanged, newLayout = _a3.layout;
          if (_this.isTreeAnimationBlocked()) {
            _this.target = void 0;
            _this.relativeTarget = void 0;
            return;
          }
          var layoutTransition = (_c = (_b2 = _this.options.transition) !== null && _b2 !== void 0 ? _b2 : visualElement2.getDefaultTransition()) !== null && _c !== void 0 ? _c : defaultLayoutTransition;
          var onLayoutAnimationComplete = visualElement2.getProps().onLayoutAnimationComplete;
          var targetChanged = !_this.targetLayout || !boxEquals(_this.targetLayout, newLayout) || hasRelativeTargetChanged;
          var hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeTargetChanged;
          if (((_d = _this.resumeFrom) === null || _d === void 0 ? void 0 : _d.instance) || hasOnlyRelativeTargetChanged || hasLayoutChanged && (targetChanged || !_this.currentAnimation)) {
            if (_this.resumeFrom) {
              _this.resumingFrom = _this.resumeFrom;
              _this.resumingFrom.resumingFrom = void 0;
            }
            _this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);
            var animationOptions = __assign$1(__assign$1({}, getValueTransition(layoutTransition, "layout")), { onComplete: onLayoutAnimationComplete });
            if (visualElement2.shouldReduceMotion) {
              animationOptions.delay = 0;
              animationOptions.type = false;
            }
            _this.startAnimation(animationOptions);
          } else {
            if (!hasLayoutChanged && _this.animationProgress === 0) {
              _this.finishAnimation();
            }
            _this.isLead() && ((_f = (_e = _this.options).onExitComplete) === null || _f === void 0 ? void 0 : _f.call(_e));
          }
          _this.targetLayout = newLayout;
        });
      }
    };
    ProjectionNode.prototype.unmount = function() {
      var _a2, _b;
      this.options.layoutId && this.willUpdate();
      this.root.nodes.remove(this);
      (_a2 = this.getStack()) === null || _a2 === void 0 ? void 0 : _a2.remove(this);
      (_b = this.parent) === null || _b === void 0 ? void 0 : _b.children.delete(this);
      this.instance = void 0;
      cancelSync.preRender(this.updateProjection);
    };
    ProjectionNode.prototype.blockUpdate = function() {
      this.updateManuallyBlocked = true;
    };
    ProjectionNode.prototype.unblockUpdate = function() {
      this.updateManuallyBlocked = false;
    };
    ProjectionNode.prototype.isUpdateBlocked = function() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    };
    ProjectionNode.prototype.isTreeAnimationBlocked = function() {
      var _a2;
      return this.isAnimationBlocked || ((_a2 = this.parent) === null || _a2 === void 0 ? void 0 : _a2.isTreeAnimationBlocked()) || false;
    };
    ProjectionNode.prototype.startUpdate = function() {
      var _a2;
      if (this.isUpdateBlocked())
        return;
      this.isUpdating = true;
      (_a2 = this.nodes) === null || _a2 === void 0 ? void 0 : _a2.forEach(resetRotation);
    };
    ProjectionNode.prototype.willUpdate = function(shouldNotifyListeners) {
      var _a2, _b, _c;
      if (shouldNotifyListeners === void 0) {
        shouldNotifyListeners = true;
      }
      if (this.root.isUpdateBlocked()) {
        (_b = (_a2 = this.options).onExitComplete) === null || _b === void 0 ? void 0 : _b.call(_a2);
        return;
      }
      !this.root.isUpdating && this.root.startUpdate();
      if (this.isLayoutDirty)
        return;
      this.isLayoutDirty = true;
      for (var i = 0; i < this.path.length; i++) {
        var node = this.path[i];
        node.shouldResetTransform = true;
        node.updateScroll();
      }
      var _d = this.options, layoutId = _d.layoutId, layout = _d.layout;
      if (layoutId === void 0 && !layout)
        return;
      var transformTemplate = (_c = this.options.visualElement) === null || _c === void 0 ? void 0 : _c.getProps().transformTemplate;
      this.prevTransformTemplateValue = transformTemplate === null || transformTemplate === void 0 ? void 0 : transformTemplate(this.latestValues, "");
      this.updateSnapshot();
      shouldNotifyListeners && this.notifyListeners("willUpdate");
    };
    ProjectionNode.prototype.didUpdate = function() {
      var updateWasBlocked = this.isUpdateBlocked();
      if (updateWasBlocked) {
        this.unblockUpdate();
        this.clearAllSnapshots();
        this.nodes.forEach(clearMeasurements);
        return;
      }
      if (!this.isUpdating)
        return;
      this.isUpdating = false;
      if (this.potentialNodes.size) {
        this.potentialNodes.forEach(mountNodeEarly);
        this.potentialNodes.clear();
      }
      this.nodes.forEach(resetTransformStyle);
      this.nodes.forEach(updateLayout);
      this.nodes.forEach(notifyLayoutUpdate);
      this.clearAllSnapshots();
      flushSync.update();
      flushSync.preRender();
      flushSync.render();
    };
    ProjectionNode.prototype.clearAllSnapshots = function() {
      this.nodes.forEach(clearSnapshot);
      this.sharedNodes.forEach(removeLeadSnapshots);
    };
    ProjectionNode.prototype.scheduleUpdateProjection = function() {
      sync.preRender(this.updateProjection, false, true);
    };
    ProjectionNode.prototype.scheduleCheckAfterUnmount = function() {
      var _this = this;
      sync.postRender(function() {
        if (_this.isLayoutDirty) {
          _this.root.didUpdate();
        } else {
          _this.root.checkUpdateFailed();
        }
      });
    };
    ProjectionNode.prototype.updateSnapshot = function() {
      if (this.snapshot || !this.instance)
        return;
      var measured = this.measure();
      var layout = this.removeTransform(this.removeElementScroll(measured));
      roundBox(layout);
      this.snapshot = {
        measured,
        layout,
        latestValues: {}
      };
    };
    ProjectionNode.prototype.updateLayout = function() {
      var _a2;
      if (!this.instance)
        return;
      this.updateScroll();
      if (!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty) {
        return;
      }
      if (this.resumeFrom && !this.resumeFrom.instance) {
        for (var i = 0; i < this.path.length; i++) {
          var node = this.path[i];
          node.updateScroll();
        }
      }
      var measured = this.measure();
      roundBox(measured);
      var prevLayout = this.layout;
      this.layout = {
        measured,
        actual: this.removeElementScroll(measured)
      };
      this.layoutCorrected = createBox$1();
      this.isLayoutDirty = false;
      this.projectionDelta = void 0;
      this.notifyListeners("measure", this.layout.actual);
      (_a2 = this.options.visualElement) === null || _a2 === void 0 ? void 0 : _a2.notifyLayoutMeasure(this.layout.actual, prevLayout === null || prevLayout === void 0 ? void 0 : prevLayout.actual);
    };
    ProjectionNode.prototype.updateScroll = function() {
      if (this.options.layoutScroll && this.instance) {
        this.scroll = measureScroll(this.instance);
      }
    };
    ProjectionNode.prototype.resetTransform = function() {
      var _a2;
      if (!resetTransform)
        return;
      var isResetRequested = this.isLayoutDirty || this.shouldResetTransform;
      var hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
      var transformTemplate = (_a2 = this.options.visualElement) === null || _a2 === void 0 ? void 0 : _a2.getProps().transformTemplate;
      var transformTemplateValue = transformTemplate === null || transformTemplate === void 0 ? void 0 : transformTemplate(this.latestValues, "");
      var transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
      if (isResetRequested && (hasProjection || hasTransform(this.latestValues) || transformTemplateHasChanged)) {
        resetTransform(this.instance, transformTemplateValue);
        this.shouldResetTransform = false;
        this.scheduleRender();
      }
    };
    ProjectionNode.prototype.measure = function() {
      var visualElement2 = this.options.visualElement;
      if (!visualElement2)
        return createBox$1();
      var box = visualElement2.measureViewportBox();
      var scroll3 = this.root.scroll;
      if (scroll3) {
        translateAxis(box.x, scroll3.x);
        translateAxis(box.y, scroll3.y);
      }
      return box;
    };
    ProjectionNode.prototype.removeElementScroll = function(box) {
      var boxWithoutScroll = createBox$1();
      copyBoxInto(boxWithoutScroll, box);
      for (var i = 0; i < this.path.length; i++) {
        var node = this.path[i];
        var scroll_1 = node.scroll, options = node.options;
        if (node !== this.root && scroll_1 && options.layoutScroll) {
          translateAxis(boxWithoutScroll.x, scroll_1.x);
          translateAxis(boxWithoutScroll.y, scroll_1.y);
        }
      }
      return boxWithoutScroll;
    };
    ProjectionNode.prototype.applyTransform = function(box, transformOnly) {
      if (transformOnly === void 0) {
        transformOnly = false;
      }
      var withTransforms = createBox$1();
      copyBoxInto(withTransforms, box);
      for (var i = 0; i < this.path.length; i++) {
        var node = this.path[i];
        if (!transformOnly && node.options.layoutScroll && node.scroll && node !== node.root) {
          transformBox(withTransforms, {
            x: -node.scroll.x,
            y: -node.scroll.y
          });
        }
        if (!hasTransform(node.latestValues))
          continue;
        transformBox(withTransforms, node.latestValues);
      }
      if (hasTransform(this.latestValues)) {
        transformBox(withTransforms, this.latestValues);
      }
      return withTransforms;
    };
    ProjectionNode.prototype.removeTransform = function(box) {
      var _a2;
      var boxWithoutTransform = createBox$1();
      copyBoxInto(boxWithoutTransform, box);
      for (var i = 0; i < this.path.length; i++) {
        var node = this.path[i];
        if (!node.instance)
          continue;
        if (!hasTransform(node.latestValues))
          continue;
        hasScale(node.latestValues) && node.updateSnapshot();
        var sourceBox = createBox$1();
        var nodeBox = node.measure();
        copyBoxInto(sourceBox, nodeBox);
        removeBoxTransforms(boxWithoutTransform, node.latestValues, (_a2 = node.snapshot) === null || _a2 === void 0 ? void 0 : _a2.layout, sourceBox);
      }
      if (hasTransform(this.latestValues)) {
        removeBoxTransforms(boxWithoutTransform, this.latestValues);
      }
      return boxWithoutTransform;
    };
    ProjectionNode.prototype.setTargetDelta = function(delta) {
      this.targetDelta = delta;
      this.root.scheduleUpdateProjection();
    };
    ProjectionNode.prototype.setOptions = function(options) {
      var _a2;
      this.options = __assign$1(__assign$1(__assign$1({}, this.options), options), { crossfade: (_a2 = options.crossfade) !== null && _a2 !== void 0 ? _a2 : true });
    };
    ProjectionNode.prototype.clearMeasurements = function() {
      this.scroll = void 0;
      this.layout = void 0;
      this.snapshot = void 0;
      this.prevTransformTemplateValue = void 0;
      this.targetDelta = void 0;
      this.target = void 0;
      this.isLayoutDirty = false;
    };
    ProjectionNode.prototype.resolveTargetDelta = function() {
      var _a2;
      var _b = this.options, layout = _b.layout, layoutId = _b.layoutId;
      if (!this.layout || !(layout || layoutId))
        return;
      if (!this.targetDelta && !this.relativeTarget) {
        this.relativeParent = this.getClosestProjectingParent();
        if (this.relativeParent && this.relativeParent.layout) {
          this.relativeTarget = createBox$1();
          this.relativeTargetOrigin = createBox$1();
          calcRelativePosition(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual);
          copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
        }
      }
      if (!this.relativeTarget && !this.targetDelta)
        return;
      if (!this.target) {
        this.target = createBox$1();
        this.targetWithTransforms = createBox$1();
      }
      if (this.relativeTarget && this.relativeTargetOrigin && ((_a2 = this.relativeParent) === null || _a2 === void 0 ? void 0 : _a2.target)) {
        calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target);
      } else if (this.targetDelta) {
        if (Boolean(this.resumingFrom)) {
          this.target = this.applyTransform(this.layout.actual);
        } else {
          copyBoxInto(this.target, this.layout.actual);
        }
        applyBoxDelta(this.target, this.targetDelta);
      } else {
        copyBoxInto(this.target, this.layout.actual);
      }
      if (this.attemptToResolveRelativeTarget) {
        this.attemptToResolveRelativeTarget = false;
        this.relativeParent = this.getClosestProjectingParent();
        if (this.relativeParent && Boolean(this.relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !this.relativeParent.options.layoutScroll && this.relativeParent.target) {
          this.relativeTarget = createBox$1();
          this.relativeTargetOrigin = createBox$1();
          calcRelativePosition(this.relativeTargetOrigin, this.target, this.relativeParent.target);
          copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
        }
      }
    };
    ProjectionNode.prototype.getClosestProjectingParent = function() {
      if (!this.parent || hasTransform(this.parent.latestValues))
        return void 0;
      if ((this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout) {
        return this.parent;
      } else {
        return this.parent.getClosestProjectingParent();
      }
    };
    ProjectionNode.prototype.calcProjection = function() {
      var _a2;
      var _b = this.options, layout = _b.layout, layoutId = _b.layoutId;
      this.isTreeAnimating = Boolean(((_a2 = this.parent) === null || _a2 === void 0 ? void 0 : _a2.isTreeAnimating) || this.currentAnimation || this.pendingAnimation);
      if (!this.isTreeAnimating) {
        this.targetDelta = this.relativeTarget = void 0;
      }
      if (!this.layout || !(layout || layoutId))
        return;
      var lead = this.getLead();
      copyBoxInto(this.layoutCorrected, this.layout.actual);
      applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, Boolean(this.resumingFrom) || this !== lead);
      var target = lead.target;
      if (!target)
        return;
      if (!this.projectionDelta) {
        this.projectionDelta = createDelta();
        this.projectionDeltaWithTransform = createDelta();
      }
      var prevTreeScaleX = this.treeScale.x;
      var prevTreeScaleY = this.treeScale.y;
      var prevProjectionTransform = this.projectionTransform;
      calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
      this.projectionTransform = buildProjectionTransform(this.projectionDelta, this.treeScale);
      if (this.projectionTransform !== prevProjectionTransform || this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY) {
        this.hasProjected = true;
        this.scheduleRender();
        this.notifyListeners("projectionUpdate", target);
      }
    };
    ProjectionNode.prototype.hide = function() {
      this.isVisible = false;
    };
    ProjectionNode.prototype.show = function() {
      this.isVisible = true;
    };
    ProjectionNode.prototype.scheduleRender = function(notifyAll) {
      var _a2, _b, _c;
      if (notifyAll === void 0) {
        notifyAll = true;
      }
      (_b = (_a2 = this.options).scheduleRender) === null || _b === void 0 ? void 0 : _b.call(_a2);
      notifyAll && ((_c = this.getStack()) === null || _c === void 0 ? void 0 : _c.scheduleRender());
      if (this.resumingFrom && !this.resumingFrom.instance) {
        this.resumingFrom = void 0;
      }
    };
    ProjectionNode.prototype.setAnimationOrigin = function(delta, hasOnlyRelativeTargetChanged) {
      var _this = this;
      var _a2;
      if (hasOnlyRelativeTargetChanged === void 0) {
        hasOnlyRelativeTargetChanged = false;
      }
      var snapshot = this.snapshot;
      var snapshotLatestValues = (snapshot === null || snapshot === void 0 ? void 0 : snapshot.latestValues) || {};
      var mixedValues = __assign$1({}, this.latestValues);
      var targetDelta = createDelta();
      this.relativeTarget = this.relativeTargetOrigin = void 0;
      this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
      var relativeLayout = createBox$1();
      var isSharedLayoutAnimation = snapshot === null || snapshot === void 0 ? void 0 : snapshot.isShared;
      var isOnlyMember = (((_a2 = this.getStack()) === null || _a2 === void 0 ? void 0 : _a2.members.length) || 0) <= 1;
      var shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));
      this.animationProgress = 0;
      this.mixTargetDelta = function(latest) {
        var _a3;
        var progress2 = latest / 1e3;
        mixAxisDelta(targetDelta.x, delta.x, progress2);
        mixAxisDelta(targetDelta.y, delta.y, progress2);
        _this.setTargetDelta(targetDelta);
        if (_this.relativeTarget && _this.relativeTargetOrigin && _this.layout && ((_a3 = _this.relativeParent) === null || _a3 === void 0 ? void 0 : _a3.layout)) {
          calcRelativePosition(relativeLayout, _this.layout.actual, _this.relativeParent.layout.actual);
          mixBox(_this.relativeTarget, _this.relativeTargetOrigin, relativeLayout, progress2);
        }
        if (isSharedLayoutAnimation) {
          _this.animationValues = mixedValues;
          mixValues(mixedValues, snapshotLatestValues, _this.latestValues, progress2, shouldCrossfadeOpacity, isOnlyMember);
        }
        _this.root.scheduleUpdateProjection();
        _this.scheduleRender();
        _this.animationProgress = progress2;
      };
      this.mixTargetDelta(0);
    };
    ProjectionNode.prototype.startAnimation = function(options) {
      var _this = this;
      var _a2, _b;
      (_a2 = this.currentAnimation) === null || _a2 === void 0 ? void 0 : _a2.stop();
      if (this.resumingFrom) {
        (_b = this.resumingFrom.currentAnimation) === null || _b === void 0 ? void 0 : _b.stop();
      }
      if (this.pendingAnimation) {
        cancelSync.update(this.pendingAnimation);
        this.pendingAnimation = void 0;
      }
      this.pendingAnimation = sync.update(function() {
        globalProjectionState.hasAnimatedSinceResize = true;
        _this.currentAnimation = animate(0, animationTarget, __assign$1(__assign$1({}, options), { onUpdate: function(latest) {
          var _a3;
          _this.mixTargetDelta(latest);
          (_a3 = options.onUpdate) === null || _a3 === void 0 ? void 0 : _a3.call(options, latest);
        }, onComplete: function() {
          var _a3;
          (_a3 = options.onComplete) === null || _a3 === void 0 ? void 0 : _a3.call(options);
          _this.completeAnimation();
        } }));
        if (_this.resumingFrom) {
          _this.resumingFrom.currentAnimation = _this.currentAnimation;
        }
        _this.pendingAnimation = void 0;
      });
    };
    ProjectionNode.prototype.completeAnimation = function() {
      var _a2;
      if (this.resumingFrom) {
        this.resumingFrom.currentAnimation = void 0;
        this.resumingFrom.preserveOpacity = void 0;
      }
      (_a2 = this.getStack()) === null || _a2 === void 0 ? void 0 : _a2.exitAnimationComplete();
      this.resumingFrom = this.currentAnimation = this.animationValues = void 0;
      this.notifyListeners("animationComplete");
    };
    ProjectionNode.prototype.finishAnimation = function() {
      var _a2;
      if (this.currentAnimation) {
        (_a2 = this.mixTargetDelta) === null || _a2 === void 0 ? void 0 : _a2.call(this, animationTarget);
        this.currentAnimation.stop();
      }
      this.completeAnimation();
    };
    ProjectionNode.prototype.applyTransformsToTarget = function() {
      var _a2 = this.getLead(), targetWithTransforms = _a2.targetWithTransforms, target = _a2.target, layout = _a2.layout, latestValues = _a2.latestValues;
      if (!targetWithTransforms || !target || !layout)
        return;
      copyBoxInto(targetWithTransforms, target);
      transformBox(targetWithTransforms, latestValues);
      calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
    };
    ProjectionNode.prototype.registerSharedNode = function(layoutId, node) {
      var _a2, _b, _c;
      if (!this.sharedNodes.has(layoutId)) {
        this.sharedNodes.set(layoutId, new NodeStack());
      }
      var stack = this.sharedNodes.get(layoutId);
      stack.add(node);
      node.promote({
        transition: (_a2 = node.options.initialPromotionConfig) === null || _a2 === void 0 ? void 0 : _a2.transition,
        preserveFollowOpacity: (_c = (_b = node.options.initialPromotionConfig) === null || _b === void 0 ? void 0 : _b.shouldPreserveFollowOpacity) === null || _c === void 0 ? void 0 : _c.call(_b, node)
      });
    };
    ProjectionNode.prototype.isLead = function() {
      var stack = this.getStack();
      return stack ? stack.lead === this : true;
    };
    ProjectionNode.prototype.getLead = function() {
      var _a2;
      var layoutId = this.options.layoutId;
      return layoutId ? ((_a2 = this.getStack()) === null || _a2 === void 0 ? void 0 : _a2.lead) || this : this;
    };
    ProjectionNode.prototype.getPrevLead = function() {
      var _a2;
      var layoutId = this.options.layoutId;
      return layoutId ? (_a2 = this.getStack()) === null || _a2 === void 0 ? void 0 : _a2.prevLead : void 0;
    };
    ProjectionNode.prototype.getStack = function() {
      var layoutId = this.options.layoutId;
      if (layoutId)
        return this.root.sharedNodes.get(layoutId);
    };
    ProjectionNode.prototype.promote = function(_a2) {
      var _b = _a2 === void 0 ? {} : _a2, needsReset = _b.needsReset, transition = _b.transition, preserveFollowOpacity = _b.preserveFollowOpacity;
      var stack = this.getStack();
      if (stack)
        stack.promote(this, preserveFollowOpacity);
      if (needsReset) {
        this.projectionDelta = void 0;
        this.needsReset = true;
      }
      if (transition)
        this.setOptions({ transition });
    };
    ProjectionNode.prototype.relegate = function() {
      var stack = this.getStack();
      if (stack) {
        return stack.relegate(this);
      } else {
        return false;
      }
    };
    ProjectionNode.prototype.resetRotation = function() {
      var visualElement2 = this.options.visualElement;
      if (!visualElement2)
        return;
      var hasRotate = false;
      var resetValues = {};
      for (var i = 0; i < transformAxes.length; i++) {
        var axis = transformAxes[i];
        var key = "rotate" + axis;
        if (!visualElement2.getStaticValue(key)) {
          continue;
        }
        hasRotate = true;
        resetValues[key] = visualElement2.getStaticValue(key);
        visualElement2.setStaticValue(key, 0);
      }
      if (!hasRotate)
        return;
      visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.syncRender();
      for (var key in resetValues) {
        visualElement2.setStaticValue(key, resetValues[key]);
      }
      visualElement2.scheduleRender();
    };
    ProjectionNode.prototype.getProjectionStyles = function(styleProp) {
      var _a2, _b, _c, _d, _e, _f;
      if (styleProp === void 0) {
        styleProp = {};
      }
      var styles2 = {};
      if (!this.instance || this.isSVG)
        return styles2;
      if (!this.isVisible) {
        return { visibility: "hidden" };
      } else {
        styles2.visibility = "";
      }
      var transformTemplate = (_a2 = this.options.visualElement) === null || _a2 === void 0 ? void 0 : _a2.getProps().transformTemplate;
      if (this.needsReset) {
        this.needsReset = false;
        styles2.opacity = "";
        styles2.pointerEvents = resolveMotionValue(styleProp.pointerEvents) || "";
        styles2.transform = transformTemplate ? transformTemplate(this.latestValues, "") : "none";
        return styles2;
      }
      var lead = this.getLead();
      if (!this.projectionDelta || !this.layout || !lead.target) {
        var emptyStyles = {};
        if (this.options.layoutId) {
          emptyStyles.opacity = (_b = this.latestValues.opacity) !== null && _b !== void 0 ? _b : 1;
          emptyStyles.pointerEvents = resolveMotionValue(styleProp.pointerEvents) || "";
        }
        if (this.hasProjected && !hasTransform(this.latestValues)) {
          emptyStyles.transform = transformTemplate ? transformTemplate({}, "") : "none";
          this.hasProjected = false;
        }
        return emptyStyles;
      }
      var valuesToRender = lead.animationValues || lead.latestValues;
      this.applyTransformsToTarget();
      styles2.transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
      if (transformTemplate) {
        styles2.transform = transformTemplate(valuesToRender, styles2.transform);
      }
      var _g = this.projectionDelta, x = _g.x, y2 = _g.y;
      styles2.transformOrigin = "".concat(x.origin * 100, "% ").concat(y2.origin * 100, "% 0");
      if (lead.animationValues) {
        styles2.opacity = lead === this ? (_d = (_c = valuesToRender.opacity) !== null && _c !== void 0 ? _c : this.latestValues.opacity) !== null && _d !== void 0 ? _d : 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
      } else {
        styles2.opacity = lead === this ? (_e = valuesToRender.opacity) !== null && _e !== void 0 ? _e : "" : (_f = valuesToRender.opacityExit) !== null && _f !== void 0 ? _f : 0;
      }
      for (var key in scaleCorrectors) {
        if (valuesToRender[key] === void 0)
          continue;
        var _h = scaleCorrectors[key], correct = _h.correct, applyTo = _h.applyTo;
        var corrected = correct(valuesToRender[key], lead);
        if (applyTo) {
          var num = applyTo.length;
          for (var i = 0; i < num; i++) {
            styles2[applyTo[i]] = corrected;
          }
        } else {
          styles2[key] = corrected;
        }
      }
      if (this.options.layoutId) {
        styles2.pointerEvents = lead === this ? resolveMotionValue(styleProp.pointerEvents) || "" : "none";
      }
      return styles2;
    };
    ProjectionNode.prototype.clearSnapshot = function() {
      this.resumeFrom = this.snapshot = void 0;
    };
    ProjectionNode.prototype.resetTree = function() {
      this.root.nodes.forEach(function(node) {
        var _a2;
        return (_a2 = node.currentAnimation) === null || _a2 === void 0 ? void 0 : _a2.stop();
      });
      this.root.nodes.forEach(clearMeasurements);
      this.root.sharedNodes.clear();
    };
    return ProjectionNode;
  }();
}
function updateLayout(node) {
  node.updateLayout();
}
function notifyLayoutUpdate(node) {
  var _a, _b, _c, _d;
  var snapshot = (_b = (_a = node.resumeFrom) === null || _a === void 0 ? void 0 : _a.snapshot) !== null && _b !== void 0 ? _b : node.snapshot;
  if (node.isLead() && node.layout && snapshot && node.hasListeners("didUpdate")) {
    var _e = node.layout, layout_1 = _e.actual, measuredLayout = _e.measured;
    if (node.options.animationType === "size") {
      eachAxis(function(axis) {
        var axisSnapshot = snapshot.isShared ? snapshot.measured[axis] : snapshot.layout[axis];
        var length = calcLength(axisSnapshot);
        axisSnapshot.min = layout_1[axis].min;
        axisSnapshot.max = axisSnapshot.min + length;
      });
    } else if (node.options.animationType === "position") {
      eachAxis(function(axis) {
        var axisSnapshot = snapshot.isShared ? snapshot.measured[axis] : snapshot.layout[axis];
        var length = calcLength(layout_1[axis]);
        axisSnapshot.max = axisSnapshot.min + length;
      });
    }
    var layoutDelta = createDelta();
    calcBoxDelta(layoutDelta, layout_1, snapshot.layout);
    var visualDelta = createDelta();
    if (snapshot.isShared) {
      calcBoxDelta(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measured);
    } else {
      calcBoxDelta(visualDelta, layout_1, snapshot.layout);
    }
    var hasLayoutChanged = !isDeltaZero(layoutDelta);
    var hasRelativeTargetChanged = false;
    if (!node.resumeFrom) {
      node.relativeParent = node.getClosestProjectingParent();
      if (node.relativeParent && !node.relativeParent.resumeFrom) {
        var _f = node.relativeParent, parentSnapshot = _f.snapshot, parentLayout = _f.layout;
        if (parentSnapshot && parentLayout) {
          var relativeSnapshot = createBox$1();
          calcRelativePosition(relativeSnapshot, snapshot.layout, parentSnapshot.layout);
          var relativeLayout = createBox$1();
          calcRelativePosition(relativeLayout, layout_1, parentLayout.actual);
          if (!boxEquals(relativeSnapshot, relativeLayout)) {
            hasRelativeTargetChanged = true;
          }
        }
      }
    }
    node.notifyListeners("didUpdate", {
      layout: layout_1,
      snapshot,
      delta: visualDelta,
      layoutDelta,
      hasLayoutChanged,
      hasRelativeTargetChanged
    });
  } else if (node.isLead()) {
    (_d = (_c = node.options).onExitComplete) === null || _d === void 0 ? void 0 : _d.call(_c);
  }
  node.options.transition = void 0;
}
function clearSnapshot(node) {
  node.clearSnapshot();
}
function clearMeasurements(node) {
  node.clearMeasurements();
}
function resetTransformStyle(node) {
  var visualElement2 = node.options.visualElement;
  if (visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.getProps().onBeforeLayoutMeasure) {
    visualElement2.notifyBeforeLayoutMeasure();
  }
  node.resetTransform();
}
function finishAnimation(node) {
  node.finishAnimation();
  node.targetDelta = node.relativeTarget = node.target = void 0;
}
function resolveTargetDelta(node) {
  node.resolveTargetDelta();
}
function calcProjection(node) {
  node.calcProjection();
}
function resetRotation(node) {
  node.resetRotation();
}
function removeLeadSnapshots(stack) {
  stack.removeLeadSnapshot();
}
function mixAxisDelta(output, delta, p2) {
  output.translate = mix(delta.translate, 0, p2);
  output.scale = mix(delta.scale, 1, p2);
  output.origin = delta.origin;
  output.originPoint = delta.originPoint;
}
function mixAxis(output, from, to, p2) {
  output.min = mix(from.min, to.min, p2);
  output.max = mix(from.max, to.max, p2);
}
function mixBox(output, from, to, p2) {
  mixAxis(output.x, from.x, to.x, p2);
  mixAxis(output.y, from.y, to.y, p2);
}
function hasOpacityCrossfade(node) {
  return node.animationValues && node.animationValues.opacityExit !== void 0;
}
var defaultLayoutTransition = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
function mountNodeEarly(node, id2) {
  var searchNode = node.root;
  for (var i = node.path.length - 1; i >= 0; i--) {
    if (Boolean(node.path[i].instance)) {
      searchNode = node.path[i];
      break;
    }
  }
  var searchElement = searchNode && searchNode !== node.root ? searchNode.instance : document;
  var element = searchElement.querySelector('[data-projection-id="'.concat(id2, '"]'));
  if (element)
    node.mount(element, true);
}
function roundAxis(axis) {
  axis.min = Math.round(axis.min);
  axis.max = Math.round(axis.max);
}
function roundBox(box) {
  roundAxis(box.x);
  roundAxis(box.y);
}
var id$1 = 1;
function useProjectionId() {
  return useConstant(function() {
    if (globalProjectionState.hasEverUpdated) {
      return id$1++;
    }
  });
}
var LayoutGroupContext = createContext({});
var SwitchLayoutGroupContext = createContext({});
function useProjection(projectionId, _a, visualElement2, ProjectionNodeConstructor) {
  var _b;
  var layoutId = _a.layoutId, layout = _a.layout, drag2 = _a.drag, dragConstraints = _a.dragConstraints, layoutScroll = _a.layoutScroll;
  var initialPromotionConfig = useContext(SwitchLayoutGroupContext);
  if (!ProjectionNodeConstructor || !visualElement2 || (visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.projection)) {
    return;
  }
  visualElement2.projection = new ProjectionNodeConstructor(projectionId, visualElement2.getLatestValues(), (_b = visualElement2.parent) === null || _b === void 0 ? void 0 : _b.projection);
  visualElement2.projection.setOptions({
    layoutId,
    layout,
    alwaysMeasureLayout: Boolean(drag2) || dragConstraints && isRefObject(dragConstraints),
    visualElement: visualElement2,
    scheduleRender: function() {
      return visualElement2.scheduleRender();
    },
    animationType: typeof layout === "string" ? layout : "both",
    initialPromotionConfig,
    layoutScroll
  });
}
var VisualElementHandler = function(_super) {
  __extends$1(VisualElementHandler2, _super);
  function VisualElementHandler2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  VisualElementHandler2.prototype.getSnapshotBeforeUpdate = function() {
    this.updateProps();
    return null;
  };
  VisualElementHandler2.prototype.componentDidUpdate = function() {
  };
  VisualElementHandler2.prototype.updateProps = function() {
    var _a = this.props, visualElement2 = _a.visualElement, props2 = _a.props;
    if (visualElement2)
      visualElement2.setProps(props2);
  };
  VisualElementHandler2.prototype.render = function() {
    return this.props.children;
  };
  return VisualElementHandler2;
}(React__default.Component);
function createMotionComponent(_a) {
  var preloadedFeatures = _a.preloadedFeatures, createVisualElement = _a.createVisualElement, projectionNodeConstructor = _a.projectionNodeConstructor, useRender = _a.useRender, useVisualState = _a.useVisualState, Component = _a.Component;
  preloadedFeatures && loadFeatures(preloadedFeatures);
  function MotionComponent(props2, externalRef) {
    var layoutId = useLayoutId(props2);
    props2 = __assign$1(__assign$1({}, props2), { layoutId });
    var config2 = useContext(MotionConfigContext);
    var features = null;
    var context = useCreateMotionContext(props2);
    var projectionId = config2.isStatic ? void 0 : useProjectionId();
    var visualState = useVisualState(props2, config2.isStatic);
    if (!config2.isStatic && isBrowser) {
      context.visualElement = useVisualElement(Component, visualState, __assign$1(__assign$1({}, config2), props2), createVisualElement);
      useProjection(projectionId, props2, context.visualElement, projectionNodeConstructor || featureDefinitions.projectionNodeConstructor);
      features = useFeatures(props2, context.visualElement);
    }
    return React$1.createElement(VisualElementHandler, { visualElement: context.visualElement, props: __assign$1(__assign$1({}, config2), props2) }, features, React$1.createElement(MotionContext.Provider, { value: context }, useRender(Component, props2, projectionId, useMotionRef(visualState, context.visualElement, externalRef), visualState, config2.isStatic, context.visualElement)));
  }
  return forwardRef(MotionComponent);
}
function useLayoutId(_a) {
  var _b;
  var layoutId = _a.layoutId;
  var layoutGroupId = (_b = useContext(LayoutGroupContext)) === null || _b === void 0 ? void 0 : _b.id;
  return layoutGroupId && layoutId !== void 0 ? layoutGroupId + "-" + layoutId : layoutId;
}
function createMotionProxy(createConfig) {
  function custom(Component, customMotionComponentConfig) {
    if (customMotionComponentConfig === void 0) {
      customMotionComponentConfig = {};
    }
    return createMotionComponent(createConfig(Component, customMotionComponentConfig));
  }
  if (typeof Proxy === "undefined") {
    return custom;
  }
  var componentCache = /* @__PURE__ */ new Map();
  return new Proxy(custom, {
    get: function(_target, key) {
      if (!componentCache.has(key)) {
        componentCache.set(key, custom(key));
      }
      return componentCache.get(key);
    }
  });
}
var lowercaseSVGElements = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "svg",
  "switch",
  "symbol",
  "text",
  "tspan",
  "use",
  "view"
];
function isSVGComponent(Component) {
  if (typeof Component !== "string" || Component.includes("-")) {
    return false;
  } else if (lowercaseSVGElements.indexOf(Component) > -1 || /[A-Z]/.test(Component)) {
    return true;
  }
  return false;
}
function isForcedMotionValue(key, _a) {
  var layout = _a.layout, layoutId = _a.layoutId;
  return isTransformProp(key) || isTransformOriginProp(key) || (layout || layoutId !== void 0) && (!!scaleCorrectors[key] || key === "opacity");
}
var translateAlias = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
};
function buildTransform(_a, _b, transformIsDefault, transformTemplate) {
  var transform = _a.transform, transformKeys2 = _a.transformKeys;
  var _c = _b.enableHardwareAcceleration, enableHardwareAcceleration = _c === void 0 ? true : _c, _d = _b.allowTransformNone, allowTransformNone = _d === void 0 ? true : _d;
  var transformString = "";
  transformKeys2.sort(sortTransformProps);
  var transformHasZ = false;
  var numTransformKeys = transformKeys2.length;
  for (var i = 0; i < numTransformKeys; i++) {
    var key = transformKeys2[i];
    transformString += "".concat(translateAlias[key] || key, "(").concat(transform[key], ") ");
    if (key === "z")
      transformHasZ = true;
  }
  if (!transformHasZ && enableHardwareAcceleration) {
    transformString += "translateZ(0)";
  } else {
    transformString = transformString.trim();
  }
  if (transformTemplate) {
    transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
  } else if (allowTransformNone && transformIsDefault) {
    transformString = "none";
  }
  return transformString;
}
function buildTransformOrigin(_a) {
  var _b = _a.originX, originX = _b === void 0 ? "50%" : _b, _c = _a.originY, originY = _c === void 0 ? "50%" : _c, _d = _a.originZ, originZ = _d === void 0 ? 0 : _d;
  return "".concat(originX, " ").concat(originY, " ").concat(originZ);
}
function isCSSVariable$1(key) {
  return key.startsWith("--");
}
var getValueAsType = function(value, type) {
  return type && typeof value === "number" ? type.transform(value) : value;
};
function buildHTMLStyles(state, latestValues, options, transformTemplate) {
  var _a;
  var style2 = state.style, vars = state.vars, transform = state.transform, transformKeys2 = state.transformKeys, transformOrigin = state.transformOrigin;
  transformKeys2.length = 0;
  var hasTransform2 = false;
  var hasTransformOrigin = false;
  var transformIsNone = true;
  for (var key in latestValues) {
    var value = latestValues[key];
    if (isCSSVariable$1(key)) {
      vars[key] = value;
      continue;
    }
    var valueType = numberValueTypes[key];
    var valueAsType = getValueAsType(value, valueType);
    if (isTransformProp(key)) {
      hasTransform2 = true;
      transform[key] = valueAsType;
      transformKeys2.push(key);
      if (!transformIsNone)
        continue;
      if (value !== ((_a = valueType.default) !== null && _a !== void 0 ? _a : 0))
        transformIsNone = false;
    } else if (isTransformOriginProp(key)) {
      transformOrigin[key] = valueAsType;
      hasTransformOrigin = true;
    } else {
      style2[key] = valueAsType;
    }
  }
  if (hasTransform2) {
    style2.transform = buildTransform(state, options, transformIsNone, transformTemplate);
  } else if (transformTemplate) {
    style2.transform = transformTemplate({}, "");
  } else if (!latestValues.transform && style2.transform) {
    style2.transform = "none";
  }
  if (hasTransformOrigin) {
    style2.transformOrigin = buildTransformOrigin(transformOrigin);
  }
}
var createHtmlRenderState = function() {
  return {
    style: {},
    transform: {},
    transformKeys: [],
    transformOrigin: {},
    vars: {}
  };
};
function copyRawValuesOnly(target, source, props2) {
  for (var key in source) {
    if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props2)) {
      target[key] = source[key];
    }
  }
}
function useInitialMotionValues(_a, visualState, isStatic) {
  var transformTemplate = _a.transformTemplate;
  return useMemo$1(function() {
    var state = createHtmlRenderState();
    buildHTMLStyles(state, visualState, { enableHardwareAcceleration: !isStatic }, transformTemplate);
    var vars = state.vars, style2 = state.style;
    return __assign$1(__assign$1({}, vars), style2);
  }, [visualState]);
}
function useStyle(props2, visualState, isStatic) {
  var styleProp = props2.style || {};
  var style2 = {};
  copyRawValuesOnly(style2, styleProp, props2);
  Object.assign(style2, useInitialMotionValues(props2, visualState, isStatic));
  if (props2.transformValues) {
    style2 = props2.transformValues(style2);
  }
  return style2;
}
function useHTMLProps(props2, visualState, isStatic) {
  var htmlProps = {};
  var style2 = useStyle(props2, visualState, isStatic);
  if (Boolean(props2.drag) && props2.dragListener !== false) {
    htmlProps.draggable = false;
    style2.userSelect = style2.WebkitUserSelect = style2.WebkitTouchCallout = "none";
    style2.touchAction = props2.drag === true ? "none" : "pan-".concat(props2.drag === "x" ? "y" : "x");
  }
  htmlProps.style = style2;
  return htmlProps;
}
var validMotionProps = /* @__PURE__ */ new Set([
  "initial",
  "animate",
  "exit",
  "style",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "layout",
  "layoutId",
  "layoutDependency",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "drag",
  "dragControls",
  "dragListener",
  "dragConstraints",
  "dragDirectionLock",
  "dragSnapToOrigin",
  "_dragX",
  "_dragY",
  "dragElastic",
  "dragMomentum",
  "dragPropagation",
  "dragTransition",
  "whileDrag",
  "onPan",
  "onPanStart",
  "onPanEnd",
  "onPanSessionStart",
  "onTap",
  "onTapStart",
  "onTapCancel",
  "onHoverStart",
  "onHoverEnd",
  "whileFocus",
  "whileTap",
  "whileHover",
  "whileInView",
  "onViewportEnter",
  "onViewportLeave",
  "viewport",
  "layoutScroll"
]);
function isValidMotionProp(key) {
  return validMotionProps.has(key);
}
var shouldForward = function(key) {
  return !isValidMotionProp(key);
};
function loadExternalIsValidProp(isValidProp) {
  if (!isValidProp)
    return;
  shouldForward = function(key) {
    return key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
  };
}
try {
  loadExternalIsValidProp(require("@emotion/is-prop-valid").default);
} catch (_a) {
}
function filterProps(props2, isDom, forwardMotionProps) {
  var filteredProps = {};
  for (var key in props2) {
    if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key) || props2["draggable"] && key.startsWith("onDrag")) {
      filteredProps[key] = props2[key];
    }
  }
  return filteredProps;
}
function calcOrigin$1(origin2, offset3, size) {
  return typeof origin2 === "string" ? origin2 : px.transform(offset3 + size * origin2);
}
function calcSVGTransformOrigin(dimensions, originX, originY) {
  var pxOriginX = calcOrigin$1(originX, dimensions.x, dimensions.width);
  var pxOriginY = calcOrigin$1(originY, dimensions.y, dimensions.height);
  return "".concat(pxOriginX, " ").concat(pxOriginY);
}
var dashKeys = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
};
var camelKeys = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function buildSVGPath(attrs, length, spacing, offset3, useDashCase) {
  if (spacing === void 0) {
    spacing = 1;
  }
  if (offset3 === void 0) {
    offset3 = 0;
  }
  if (useDashCase === void 0) {
    useDashCase = true;
  }
  attrs.pathLength = 1;
  var keys = useDashCase ? dashKeys : camelKeys;
  attrs[keys.offset] = px.transform(-offset3);
  var pathLength = px.transform(length);
  var pathSpacing = px.transform(spacing);
  attrs[keys.array] = "".concat(pathLength, " ").concat(pathSpacing);
}
function buildSVGAttrs(state, _a, options, transformTemplate) {
  var attrX = _a.attrX, attrY = _a.attrY, originX = _a.originX, originY = _a.originY, pathLength = _a.pathLength, _b = _a.pathSpacing, pathSpacing = _b === void 0 ? 1 : _b, _c = _a.pathOffset, pathOffset = _c === void 0 ? 0 : _c, latest = __rest$1(_a, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]);
  buildHTMLStyles(state, latest, options, transformTemplate);
  state.attrs = state.style;
  state.style = {};
  var attrs = state.attrs, style2 = state.style, dimensions = state.dimensions;
  if (attrs.transform) {
    if (dimensions)
      style2.transform = attrs.transform;
    delete attrs.transform;
  }
  if (dimensions && (originX !== void 0 || originY !== void 0 || style2.transform)) {
    style2.transformOrigin = calcSVGTransformOrigin(dimensions, originX !== void 0 ? originX : 0.5, originY !== void 0 ? originY : 0.5);
  }
  if (attrX !== void 0)
    attrs.x = attrX;
  if (attrY !== void 0)
    attrs.y = attrY;
  if (pathLength !== void 0) {
    buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
  }
}
var createSvgRenderState = function() {
  return __assign$1(__assign$1({}, createHtmlRenderState()), { attrs: {} });
};
function useSVGProps(props2, visualState) {
  var visualProps = useMemo$1(function() {
    var state = createSvgRenderState();
    buildSVGAttrs(state, visualState, { enableHardwareAcceleration: false }, props2.transformTemplate);
    return __assign$1(__assign$1({}, state.attrs), { style: __assign$1({}, state.style) });
  }, [visualState]);
  if (props2.style) {
    var rawStyles = {};
    copyRawValuesOnly(rawStyles, props2.style, props2);
    visualProps.style = __assign$1(__assign$1({}, rawStyles), visualProps.style);
  }
  return visualProps;
}
function createUseRender(forwardMotionProps) {
  if (forwardMotionProps === void 0) {
    forwardMotionProps = false;
  }
  var useRender = function(Component, props2, projectionId, ref, _a, isStatic) {
    var latestValues = _a.latestValues;
    var useVisualProps = isSVGComponent(Component) ? useSVGProps : useHTMLProps;
    var visualProps = useVisualProps(props2, latestValues, isStatic);
    var filteredProps = filterProps(props2, typeof Component === "string", forwardMotionProps);
    var elementProps = __assign$1(__assign$1(__assign$1({}, filteredProps), visualProps), { ref });
    if (projectionId) {
      elementProps["data-projection-id"] = projectionId;
    }
    return createElement(Component, elementProps);
  };
  return useRender;
}
var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
var REPLACE_TEMPLATE = "$1-$2";
var camelToDash = function(str) {
  return str.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
};
function renderHTML(element, _a, styleProp, projection) {
  var style2 = _a.style, vars = _a.vars;
  Object.assign(element.style, style2, projection && projection.getProjectionStyles(styleProp));
  for (var key in vars) {
    element.style.setProperty(key, vars[key]);
  }
}
var camelCaseAttributes = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength"
]);
function renderSVG(element, renderState) {
  renderHTML(element, renderState);
  for (var key in renderState.attrs) {
    element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
  }
}
function scrapeMotionValuesFromProps$1(props2) {
  var style2 = props2.style;
  var newValues = {};
  for (var key in style2) {
    if (isMotionValue(style2[key]) || isForcedMotionValue(key, props2)) {
      newValues[key] = style2[key];
    }
  }
  return newValues;
}
function scrapeMotionValuesFromProps(props2) {
  var newValues = scrapeMotionValuesFromProps$1(props2);
  for (var key in props2) {
    if (isMotionValue(props2[key])) {
      var targetKey = key === "x" || key === "y" ? "attr" + key.toUpperCase() : key;
      newValues[targetKey] = props2[key];
    }
  }
  return newValues;
}
function isAnimationControls(v2) {
  return typeof v2 === "object" && typeof v2.start === "function";
}
function makeState(_a, props2, context, presenceContext) {
  var scrapeMotionValuesFromProps2 = _a.scrapeMotionValuesFromProps, createRenderState = _a.createRenderState, onMount = _a.onMount;
  var state = {
    latestValues: makeLatestValues(props2, context, presenceContext, scrapeMotionValuesFromProps2),
    renderState: createRenderState()
  };
  if (onMount) {
    state.mount = function(instance) {
      return onMount(props2, instance, state);
    };
  }
  return state;
}
var makeUseVisualState = function(config2) {
  return function(props2, isStatic) {
    var context = useContext(MotionContext);
    var presenceContext = useContext(PresenceContext);
    return isStatic ? makeState(config2, props2, context, presenceContext) : useConstant(function() {
      return makeState(config2, props2, context, presenceContext);
    });
  };
};
function makeLatestValues(props2, context, presenceContext, scrapeMotionValues) {
  var values2 = {};
  var blockInitialAnimation = (presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.initial) === false;
  var motionValues = scrapeMotionValues(props2);
  for (var key in motionValues) {
    values2[key] = resolveMotionValue(motionValues[key]);
  }
  var initial = props2.initial, animate2 = props2.animate;
  var isControllingVariants = checkIfControllingVariants(props2);
  var isVariantNode = checkIfVariantNode(props2);
  if (context && isVariantNode && !isControllingVariants && props2.inherit !== false) {
    initial !== null && initial !== void 0 ? initial : initial = context.initial;
    animate2 !== null && animate2 !== void 0 ? animate2 : animate2 = context.animate;
  }
  var initialAnimationIsBlocked = blockInitialAnimation || initial === false;
  var variantToSet = initialAnimationIsBlocked ? animate2 : initial;
  if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
    var list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
    list.forEach(function(definition) {
      var resolved = resolveVariantFromProps(props2, definition);
      if (!resolved)
        return;
      var transitionEnd = resolved.transitionEnd;
      resolved.transition;
      var target = __rest$1(resolved, ["transitionEnd", "transition"]);
      for (var key2 in target) {
        var valueTarget = target[key2];
        if (Array.isArray(valueTarget)) {
          var index = initialAnimationIsBlocked ? valueTarget.length - 1 : 0;
          valueTarget = valueTarget[index];
        }
        if (valueTarget !== null) {
          values2[key2] = valueTarget;
        }
      }
      for (var key2 in transitionEnd)
        values2[key2] = transitionEnd[key2];
    });
  }
  return values2;
}
var svgMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps,
    createRenderState: createSvgRenderState,
    onMount: function(props2, instance, _a) {
      var renderState = _a.renderState, latestValues = _a.latestValues;
      try {
        renderState.dimensions = typeof instance.getBBox === "function" ? instance.getBBox() : instance.getBoundingClientRect();
      } catch (e2) {
        renderState.dimensions = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }
      buildSVGAttrs(renderState, latestValues, { enableHardwareAcceleration: false }, props2.transformTemplate);
      renderSVG(instance, renderState);
    }
  })
};
var htmlMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
    createRenderState: createHtmlRenderState
  })
};
function createDomMotionConfig(Component, _a, preloadedFeatures, createVisualElement, projectionNodeConstructor) {
  var _b = _a.forwardMotionProps, forwardMotionProps = _b === void 0 ? false : _b;
  var baseConfig = isSVGComponent(Component) ? svgMotionConfig : htmlMotionConfig;
  return __assign$1(__assign$1({}, baseConfig), { preloadedFeatures, useRender: createUseRender(forwardMotionProps), createVisualElement, projectionNodeConstructor, Component });
}
var AnimationType;
(function(AnimationType2) {
  AnimationType2["Animate"] = "animate";
  AnimationType2["Hover"] = "whileHover";
  AnimationType2["Tap"] = "whileTap";
  AnimationType2["Drag"] = "whileDrag";
  AnimationType2["Focus"] = "whileFocus";
  AnimationType2["InView"] = "whileInView";
  AnimationType2["Exit"] = "exit";
})(AnimationType || (AnimationType = {}));
function addDomEvent(target, eventName, handler, options) {
  target.addEventListener(eventName, handler, options);
  return function() {
    return target.removeEventListener(eventName, handler, options);
  };
}
function useDomEvent(ref, eventName, handler, options) {
  useEffect(function() {
    var element = ref.current;
    if (handler && element) {
      return addDomEvent(element, eventName, handler, options);
    }
  }, [ref, eventName, handler, options]);
}
function useFocusGesture(_a) {
  var whileFocus = _a.whileFocus, visualElement2 = _a.visualElement;
  var onFocus = function() {
    var _a2;
    (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Focus, true);
  };
  var onBlur = function() {
    var _a2;
    (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Focus, false);
  };
  useDomEvent(visualElement2, "focus", whileFocus ? onFocus : void 0);
  useDomEvent(visualElement2, "blur", whileFocus ? onBlur : void 0);
}
function isMouseEvent(event) {
  if (typeof PointerEvent !== "undefined" && event instanceof PointerEvent) {
    return !!(event.pointerType === "mouse");
  }
  return event instanceof MouseEvent;
}
function isTouchEvent(event) {
  var hasTouches = !!event.touches;
  return hasTouches;
}
function filterPrimaryPointer(eventHandler) {
  return function(event) {
    var isMouseEvent2 = event instanceof MouseEvent;
    var isPrimaryPointer = !isMouseEvent2 || isMouseEvent2 && event.button === 0;
    if (isPrimaryPointer) {
      eventHandler(event);
    }
  };
}
var defaultPagePoint = { pageX: 0, pageY: 0 };
function pointFromTouch(e2, pointType) {
  if (pointType === void 0) {
    pointType = "page";
  }
  var primaryTouch = e2.touches[0] || e2.changedTouches[0];
  var point = primaryTouch || defaultPagePoint;
  return {
    x: point[pointType + "X"],
    y: point[pointType + "Y"]
  };
}
function pointFromMouse(point, pointType) {
  if (pointType === void 0) {
    pointType = "page";
  }
  return {
    x: point[pointType + "X"],
    y: point[pointType + "Y"]
  };
}
function extractEventInfo(event, pointType) {
  if (pointType === void 0) {
    pointType = "page";
  }
  return {
    point: isTouchEvent(event) ? pointFromTouch(event, pointType) : pointFromMouse(event, pointType)
  };
}
var wrapHandler = function(handler, shouldFilterPrimaryPointer) {
  if (shouldFilterPrimaryPointer === void 0) {
    shouldFilterPrimaryPointer = false;
  }
  var listener = function(event) {
    return handler(event, extractEventInfo(event));
  };
  return shouldFilterPrimaryPointer ? filterPrimaryPointer(listener) : listener;
};
var supportsPointerEvents = function() {
  return isBrowser && window.onpointerdown === null;
};
var supportsTouchEvents = function() {
  return isBrowser && window.ontouchstart === null;
};
var supportsMouseEvents = function() {
  return isBrowser && window.onmousedown === null;
};
var mouseEventNames = {
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointercancel: "mousecancel",
  pointerover: "mouseover",
  pointerout: "mouseout",
  pointerenter: "mouseenter",
  pointerleave: "mouseleave"
};
var touchEventNames = {
  pointerdown: "touchstart",
  pointermove: "touchmove",
  pointerup: "touchend",
  pointercancel: "touchcancel"
};
function getPointerEventName(name) {
  if (supportsPointerEvents()) {
    return name;
  } else if (supportsTouchEvents()) {
    return touchEventNames[name];
  } else if (supportsMouseEvents()) {
    return mouseEventNames[name];
  }
  return name;
}
function addPointerEvent(target, eventName, handler, options) {
  return addDomEvent(target, getPointerEventName(eventName), wrapHandler(handler, eventName === "pointerdown"), options);
}
function usePointerEvent(ref, eventName, handler, options) {
  return useDomEvent(ref, getPointerEventName(eventName), handler && wrapHandler(handler, eventName === "pointerdown"), options);
}
function createLock(name) {
  var lock2 = null;
  return function() {
    var openLock = function() {
      lock2 = null;
    };
    if (lock2 === null) {
      lock2 = name;
      return openLock;
    }
    return false;
  };
}
var globalHorizontalLock = createLock("dragHorizontal");
var globalVerticalLock = createLock("dragVertical");
function getGlobalLock(drag2) {
  var lock2 = false;
  if (drag2 === "y") {
    lock2 = globalVerticalLock();
  } else if (drag2 === "x") {
    lock2 = globalHorizontalLock();
  } else {
    var openHorizontal_1 = globalHorizontalLock();
    var openVertical_1 = globalVerticalLock();
    if (openHorizontal_1 && openVertical_1) {
      lock2 = function() {
        openHorizontal_1();
        openVertical_1();
      };
    } else {
      if (openHorizontal_1)
        openHorizontal_1();
      if (openVertical_1)
        openVertical_1();
    }
  }
  return lock2;
}
function isDragActive() {
  var openGestureLock = getGlobalLock(true);
  if (!openGestureLock)
    return true;
  openGestureLock();
  return false;
}
function createHoverEvent(visualElement2, isActive, callback) {
  return function(event, info) {
    var _a;
    if (!isMouseEvent(event) || isDragActive())
      return;
    (_a = visualElement2.animationState) === null || _a === void 0 ? void 0 : _a.setActive(AnimationType.Hover, isActive);
    callback === null || callback === void 0 ? void 0 : callback(event, info);
  };
}
function useHoverGesture(_a) {
  var onHoverStart = _a.onHoverStart, onHoverEnd = _a.onHoverEnd, whileHover = _a.whileHover, visualElement2 = _a.visualElement;
  usePointerEvent(visualElement2, "pointerenter", onHoverStart || whileHover ? createHoverEvent(visualElement2, true, onHoverStart) : void 0);
  usePointerEvent(visualElement2, "pointerleave", onHoverEnd || whileHover ? createHoverEvent(visualElement2, false, onHoverEnd) : void 0);
}
var isNodeOrChild = function(parent, child) {
  if (!child) {
    return false;
  } else if (parent === child) {
    return true;
  } else {
    return isNodeOrChild(parent, child.parentElement);
  }
};
function useUnmountEffect(callback) {
  return useEffect(function() {
    return function() {
      return callback();
    };
  }, []);
}
function useTapGesture(_a) {
  var onTap = _a.onTap, onTapStart = _a.onTapStart, onTapCancel = _a.onTapCancel, whileTap = _a.whileTap, visualElement2 = _a.visualElement;
  var hasPressListeners = onTap || onTapStart || onTapCancel || whileTap;
  var isPressing = useRef(false);
  var cancelPointerEndListeners = useRef(null);
  function removePointerEndListener() {
    var _a2;
    (_a2 = cancelPointerEndListeners.current) === null || _a2 === void 0 ? void 0 : _a2.call(cancelPointerEndListeners);
    cancelPointerEndListeners.current = null;
  }
  function checkPointerEnd() {
    var _a2;
    removePointerEndListener();
    isPressing.current = false;
    (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Tap, false);
    return !isDragActive();
  }
  function onPointerUp(event, info) {
    if (!checkPointerEnd())
      return;
    !isNodeOrChild(visualElement2.getInstance(), event.target) ? onTapCancel === null || onTapCancel === void 0 ? void 0 : onTapCancel(event, info) : onTap === null || onTap === void 0 ? void 0 : onTap(event, info);
  }
  function onPointerCancel(event, info) {
    if (!checkPointerEnd())
      return;
    onTapCancel === null || onTapCancel === void 0 ? void 0 : onTapCancel(event, info);
  }
  function onPointerDown(event, info) {
    var _a2;
    removePointerEndListener();
    if (isPressing.current)
      return;
    isPressing.current = true;
    cancelPointerEndListeners.current = pipe(addPointerEvent(window, "pointerup", onPointerUp), addPointerEvent(window, "pointercancel", onPointerCancel));
    (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Tap, true);
    onTapStart === null || onTapStart === void 0 ? void 0 : onTapStart(event, info);
  }
  usePointerEvent(visualElement2, "pointerdown", hasPressListeners ? onPointerDown : void 0);
  useUnmountEffect(removePointerEndListener);
}
var observerCallbacks = /* @__PURE__ */ new WeakMap();
var observers = /* @__PURE__ */ new WeakMap();
var fireObserverCallback = function(entry) {
  var _a;
  (_a = observerCallbacks.get(entry.target)) === null || _a === void 0 ? void 0 : _a(entry);
};
var fireAllObserverCallbacks = function(entries) {
  entries.forEach(fireObserverCallback);
};
function initIntersectionObserver(_a) {
  var root = _a.root, options = __rest$1(_a, ["root"]);
  var lookupRoot = root || document;
  if (!observers.has(lookupRoot)) {
    observers.set(lookupRoot, {});
  }
  var rootObservers = observers.get(lookupRoot);
  var key = JSON.stringify(options);
  if (!rootObservers[key]) {
    rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, __assign$1({ root }, options));
  }
  return rootObservers[key];
}
function observeIntersection(element, options, callback) {
  var rootInteresectionObserver = initIntersectionObserver(options);
  observerCallbacks.set(element, callback);
  rootInteresectionObserver.observe(element);
  return function() {
    observerCallbacks.delete(element);
    rootInteresectionObserver.unobserve(element);
  };
}
function useViewport(_a) {
  var visualElement2 = _a.visualElement, whileInView = _a.whileInView, onViewportEnter = _a.onViewportEnter, onViewportLeave = _a.onViewportLeave, _b = _a.viewport, viewport = _b === void 0 ? {} : _b;
  var state = useRef({
    hasEnteredView: false,
    isInView: false
  });
  var shouldObserve = Boolean(whileInView || onViewportEnter || onViewportLeave);
  if (viewport.once && state.current.hasEnteredView)
    shouldObserve = false;
  var useObserver = typeof IntersectionObserver === "undefined" ? useMissingIntersectionObserver : useIntersectionObserver;
  useObserver(shouldObserve, state.current, visualElement2, viewport);
}
var thresholdNames = {
  some: 0,
  all: 1
};
function useIntersectionObserver(shouldObserve, state, visualElement2, _a) {
  var root = _a.root, rootMargin = _a.margin, _b = _a.amount, amount = _b === void 0 ? "some" : _b, once = _a.once;
  useEffect(function() {
    if (!shouldObserve)
      return;
    var options = {
      root: root === null || root === void 0 ? void 0 : root.current,
      rootMargin,
      threshold: typeof amount === "number" ? amount : thresholdNames[amount]
    };
    var intersectionCallback = function(entry) {
      var _a2;
      var isIntersecting = entry.isIntersecting;
      if (state.isInView === isIntersecting)
        return;
      state.isInView = isIntersecting;
      if (once && !isIntersecting && state.hasEnteredView) {
        return;
      } else if (isIntersecting) {
        state.hasEnteredView = true;
      }
      (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.InView, isIntersecting);
      var props2 = visualElement2.getProps();
      var callback = isIntersecting ? props2.onViewportEnter : props2.onViewportLeave;
      callback === null || callback === void 0 ? void 0 : callback(entry);
    };
    return observeIntersection(visualElement2.getInstance(), options, intersectionCallback);
  }, [shouldObserve, root, rootMargin, amount]);
}
function useMissingIntersectionObserver(shouldObserve, state, visualElement2, _a) {
  var _b = _a.fallback, fallback = _b === void 0 ? true : _b;
  useEffect(function() {
    if (!shouldObserve || !fallback)
      return;
    requestAnimationFrame(function() {
      var _a2;
      state.hasEnteredView = true;
      var onViewportEnter = visualElement2.getProps().onViewportEnter;
      onViewportEnter === null || onViewportEnter === void 0 ? void 0 : onViewportEnter(null);
      (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.InView, true);
    });
  }, [shouldObserve]);
}
var makeRenderlessComponent = function(hook) {
  return function(props2) {
    hook(props2);
    return null;
  };
};
var gestureAnimations = {
  inView: makeRenderlessComponent(useViewport),
  tap: makeRenderlessComponent(useTapGesture),
  focus: makeRenderlessComponent(useFocusGesture),
  hover: makeRenderlessComponent(useHoverGesture)
};
var counter = 0;
var incrementId = function() {
  return counter++;
};
var useId = function() {
  return useConstant(incrementId);
};
function usePresence() {
  var context = useContext(PresenceContext);
  if (context === null)
    return [true, null];
  var isPresent = context.isPresent, onExitComplete = context.onExitComplete, register = context.register;
  var id2 = useId();
  useEffect(function() {
    return register(id2);
  }, []);
  var safeToRemove = function() {
    return onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete(id2);
  };
  return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
}
function shallowCompare(next, prev) {
  if (!Array.isArray(prev))
    return false;
  var prevLength = prev.length;
  if (prevLength !== next.length)
    return false;
  for (var i = 0; i < prevLength; i++) {
    if (prev[i] !== next[i])
      return false;
  }
  return true;
}
var isNumericalString = function(v2) {
  return /^\-?\d*\.?\d+$/.test(v2);
};
var isZeroValueString = function(v2) {
  return /^0[^.\s]+$/.test(v2);
};
var testValueType = function(v2) {
  return function(type) {
    return type.test(v2);
  };
};
var auto = {
  test: function(v2) {
    return v2 === "auto";
  },
  parse: function(v2) {
    return v2;
  }
};
var dimensionValueTypes = [number, px, percent, degrees, vw, vh$1, auto];
var findDimensionValueType = function(v2) {
  return dimensionValueTypes.find(testValueType(v2));
};
var valueTypes = __spreadArray(__spreadArray([], __read(dimensionValueTypes), false), [color, complex], false);
var findValueType = function(v2) {
  return valueTypes.find(testValueType(v2));
};
function setMotionValue(visualElement2, key, value) {
  if (visualElement2.hasValue(key)) {
    visualElement2.getValue(key).set(value);
  } else {
    visualElement2.addValue(key, motionValue(value));
  }
}
function setTarget(visualElement2, definition) {
  var resolved = resolveVariant(visualElement2, definition);
  var _a = resolved ? visualElement2.makeTargetAnimatable(resolved, false) : {}, _b = _a.transitionEnd, transitionEnd = _b === void 0 ? {} : _b;
  _a.transition;
  var target = __rest$1(_a, ["transitionEnd", "transition"]);
  target = __assign$1(__assign$1({}, target), transitionEnd);
  for (var key in target) {
    var value = resolveFinalValueInKeyframes(target[key]);
    setMotionValue(visualElement2, key, value);
  }
}
function checkTargetForNewValues(visualElement2, target, origin2) {
  var _a, _b, _c;
  var _d;
  var newValueKeys = Object.keys(target).filter(function(key2) {
    return !visualElement2.hasValue(key2);
  });
  var numNewValues = newValueKeys.length;
  if (!numNewValues)
    return;
  for (var i = 0; i < numNewValues; i++) {
    var key = newValueKeys[i];
    var targetValue = target[key];
    var value = null;
    if (Array.isArray(targetValue)) {
      value = targetValue[0];
    }
    if (value === null) {
      value = (_b = (_a = origin2[key]) !== null && _a !== void 0 ? _a : visualElement2.readValue(key)) !== null && _b !== void 0 ? _b : target[key];
    }
    if (value === void 0 || value === null)
      continue;
    if (typeof value === "string" && (isNumericalString(value) || isZeroValueString(value))) {
      value = parseFloat(value);
    } else if (!findValueType(value) && complex.test(targetValue)) {
      value = getAnimatableNone(key, targetValue);
    }
    visualElement2.addValue(key, motionValue(value));
    (_c = (_d = origin2)[key]) !== null && _c !== void 0 ? _c : _d[key] = value;
    visualElement2.setBaseTarget(key, value);
  }
}
function getOriginFromTransition(key, transition) {
  if (!transition)
    return;
  var valueTransition = transition[key] || transition["default"] || transition;
  return valueTransition.from;
}
function getOrigin(target, transition, visualElement2) {
  var _a, _b;
  var origin2 = {};
  for (var key in target) {
    origin2[key] = (_a = getOriginFromTransition(key, transition)) !== null && _a !== void 0 ? _a : (_b = visualElement2.getValue(key)) === null || _b === void 0 ? void 0 : _b.get();
  }
  return origin2;
}
function animateVisualElement(visualElement2, definition, options) {
  if (options === void 0) {
    options = {};
  }
  visualElement2.notifyAnimationStart(definition);
  var animation2;
  if (Array.isArray(definition)) {
    var animations2 = definition.map(function(variant) {
      return animateVariant(visualElement2, variant, options);
    });
    animation2 = Promise.all(animations2);
  } else if (typeof definition === "string") {
    animation2 = animateVariant(visualElement2, definition, options);
  } else {
    var resolvedDefinition = typeof definition === "function" ? resolveVariant(visualElement2, definition, options.custom) : definition;
    animation2 = animateTarget(visualElement2, resolvedDefinition, options);
  }
  return animation2.then(function() {
    return visualElement2.notifyAnimationComplete(definition);
  });
}
function animateVariant(visualElement2, variant, options) {
  var _a;
  if (options === void 0) {
    options = {};
  }
  var resolved = resolveVariant(visualElement2, variant, options.custom);
  var _b = (resolved || {}).transition, transition = _b === void 0 ? visualElement2.getDefaultTransition() || {} : _b;
  if (options.transitionOverride) {
    transition = options.transitionOverride;
  }
  var getAnimation2 = resolved ? function() {
    return animateTarget(visualElement2, resolved, options);
  } : function() {
    return Promise.resolve();
  };
  var getChildAnimations = ((_a = visualElement2.variantChildren) === null || _a === void 0 ? void 0 : _a.size) ? function(forwardDelay) {
    if (forwardDelay === void 0) {
      forwardDelay = 0;
    }
    var _a2 = transition.delayChildren, delayChildren = _a2 === void 0 ? 0 : _a2, staggerChildren = transition.staggerChildren, staggerDirection = transition.staggerDirection;
    return animateChildren(visualElement2, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
  } : function() {
    return Promise.resolve();
  };
  var when = transition.when;
  if (when) {
    var _c = __read(when === "beforeChildren" ? [getAnimation2, getChildAnimations] : [getChildAnimations, getAnimation2], 2), first = _c[0], last = _c[1];
    return first().then(last);
  } else {
    return Promise.all([getAnimation2(), getChildAnimations(options.delay)]);
  }
}
function animateTarget(visualElement2, definition, _a) {
  var _b;
  var _c = _a === void 0 ? {} : _a, _d = _c.delay, delay = _d === void 0 ? 0 : _d, transitionOverride = _c.transitionOverride, type = _c.type;
  var _e = visualElement2.makeTargetAnimatable(definition), _f = _e.transition, transition = _f === void 0 ? visualElement2.getDefaultTransition() : _f, transitionEnd = _e.transitionEnd, target = __rest$1(_e, ["transition", "transitionEnd"]);
  if (transitionOverride)
    transition = transitionOverride;
  var animations2 = [];
  var animationTypeState = type && ((_b = visualElement2.animationState) === null || _b === void 0 ? void 0 : _b.getState()[type]);
  for (var key in target) {
    var value = visualElement2.getValue(key);
    var valueTarget = target[key];
    if (!value || valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key)) {
      continue;
    }
    var valueTransition = __assign$1({ delay }, transition);
    if (visualElement2.shouldReduceMotion && isTransformProp(key)) {
      valueTransition = __assign$1(__assign$1({}, valueTransition), { type: false, delay: 0 });
    }
    var animation2 = startAnimation(key, value, valueTarget, valueTransition);
    animations2.push(animation2);
  }
  return Promise.all(animations2).then(function() {
    transitionEnd && setTarget(visualElement2, transitionEnd);
  });
}
function animateChildren(visualElement2, variant, delayChildren, staggerChildren, staggerDirection, options) {
  if (delayChildren === void 0) {
    delayChildren = 0;
  }
  if (staggerChildren === void 0) {
    staggerChildren = 0;
  }
  if (staggerDirection === void 0) {
    staggerDirection = 1;
  }
  var animations2 = [];
  var maxStaggerDuration = (visualElement2.variantChildren.size - 1) * staggerChildren;
  var generateStaggerDuration = staggerDirection === 1 ? function(i) {
    if (i === void 0) {
      i = 0;
    }
    return i * staggerChildren;
  } : function(i) {
    if (i === void 0) {
      i = 0;
    }
    return maxStaggerDuration - i * staggerChildren;
  };
  Array.from(visualElement2.variantChildren).sort(sortByTreeOrder).forEach(function(child, i) {
    animations2.push(animateVariant(child, variant, __assign$1(__assign$1({}, options), { delay: delayChildren + generateStaggerDuration(i) })).then(function() {
      return child.notifyAnimationComplete(variant);
    }));
  });
  return Promise.all(animations2);
}
function sortByTreeOrder(a2, b2) {
  return a2.sortNodePosition(b2);
}
function shouldBlockAnimation(_a, key) {
  var protectedKeys = _a.protectedKeys, needsAnimating = _a.needsAnimating;
  var shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
  needsAnimating[key] = false;
  return shouldBlock;
}
var variantPriorityOrder = [
  AnimationType.Animate,
  AnimationType.InView,
  AnimationType.Focus,
  AnimationType.Hover,
  AnimationType.Tap,
  AnimationType.Drag,
  AnimationType.Exit
];
var reversePriorityOrder = __spreadArray([], __read(variantPriorityOrder), false).reverse();
var numAnimationTypes = variantPriorityOrder.length;
function animateList(visualElement2) {
  return function(animations2) {
    return Promise.all(animations2.map(function(_a) {
      var animation2 = _a.animation, options = _a.options;
      return animateVisualElement(visualElement2, animation2, options);
    }));
  };
}
function createAnimationState(visualElement2) {
  var animate2 = animateList(visualElement2);
  var state = createState();
  var allAnimatedKeys = {};
  var isInitialRender = true;
  var buildResolvedTypeValues = function(acc, definition) {
    var resolved = resolveVariant(visualElement2, definition);
    if (resolved) {
      resolved.transition;
      var transitionEnd = resolved.transitionEnd, target = __rest$1(resolved, ["transition", "transitionEnd"]);
      acc = __assign$1(__assign$1(__assign$1({}, acc), target), transitionEnd);
    }
    return acc;
  };
  function isAnimated(key) {
    return allAnimatedKeys[key] !== void 0;
  }
  function setAnimateFunction(makeAnimator) {
    animate2 = makeAnimator(visualElement2);
  }
  function animateChanges(options, changedActiveType) {
    var _a;
    var props2 = visualElement2.getProps();
    var context = visualElement2.getVariantContext(true) || {};
    var animations2 = [];
    var removedKeys = /* @__PURE__ */ new Set();
    var encounteredKeys = {};
    var removedVariantIndex = Infinity;
    var _loop_1 = function(i2) {
      var type = reversePriorityOrder[i2];
      var typeState = state[type];
      var prop = (_a = props2[type]) !== null && _a !== void 0 ? _a : context[type];
      var propIsVariant = isVariantLabel(prop);
      var activeDelta = type === changedActiveType ? typeState.isActive : null;
      if (activeDelta === false)
        removedVariantIndex = i2;
      var isInherited = prop === context[type] && prop !== props2[type] && propIsVariant;
      if (isInherited && isInitialRender && visualElement2.manuallyAnimateOnMount) {
        isInherited = false;
      }
      typeState.protectedKeys = __assign$1({}, encounteredKeys);
      if (!typeState.isActive && activeDelta === null || !prop && !typeState.prevProp || isAnimationControls(prop) || typeof prop === "boolean") {
        return "continue";
      }
      var variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
      var shouldAnimateType = variantDidChange || type === changedActiveType && typeState.isActive && !isInherited && propIsVariant || i2 > removedVariantIndex && propIsVariant;
      var definitionList = Array.isArray(prop) ? prop : [prop];
      var resolvedValues = definitionList.reduce(buildResolvedTypeValues, {});
      if (activeDelta === false)
        resolvedValues = {};
      var _b = typeState.prevResolvedValues, prevResolvedValues = _b === void 0 ? {} : _b;
      var allKeys = __assign$1(__assign$1({}, prevResolvedValues), resolvedValues);
      var markToAnimate = function(key2) {
        shouldAnimateType = true;
        removedKeys.delete(key2);
        typeState.needsAnimating[key2] = true;
      };
      for (var key in allKeys) {
        var next = resolvedValues[key];
        var prev = prevResolvedValues[key];
        if (encounteredKeys.hasOwnProperty(key))
          continue;
        if (next !== prev) {
          if (isKeyframesTarget(next) && isKeyframesTarget(prev)) {
            if (!shallowCompare(next, prev) || variantDidChange) {
              markToAnimate(key);
            } else {
              typeState.protectedKeys[key] = true;
            }
          } else if (next !== void 0) {
            markToAnimate(key);
          } else {
            removedKeys.add(key);
          }
        } else if (next !== void 0 && removedKeys.has(key)) {
          markToAnimate(key);
        } else {
          typeState.protectedKeys[key] = true;
        }
      }
      typeState.prevProp = prop;
      typeState.prevResolvedValues = resolvedValues;
      if (typeState.isActive) {
        encounteredKeys = __assign$1(__assign$1({}, encounteredKeys), resolvedValues);
      }
      if (isInitialRender && visualElement2.blockInitialAnimation) {
        shouldAnimateType = false;
      }
      if (shouldAnimateType && !isInherited) {
        animations2.push.apply(animations2, __spreadArray([], __read(definitionList.map(function(animation2) {
          return {
            animation: animation2,
            options: __assign$1({ type }, options)
          };
        })), false));
      }
    };
    for (var i = 0; i < numAnimationTypes; i++) {
      _loop_1(i);
    }
    allAnimatedKeys = __assign$1({}, encounteredKeys);
    if (removedKeys.size) {
      var fallbackAnimation_1 = {};
      removedKeys.forEach(function(key) {
        var fallbackTarget = visualElement2.getBaseTarget(key);
        if (fallbackTarget !== void 0) {
          fallbackAnimation_1[key] = fallbackTarget;
        }
      });
      animations2.push({ animation: fallbackAnimation_1 });
    }
    var shouldAnimate = Boolean(animations2.length);
    if (isInitialRender && props2.initial === false && !visualElement2.manuallyAnimateOnMount) {
      shouldAnimate = false;
    }
    isInitialRender = false;
    return shouldAnimate ? animate2(animations2) : Promise.resolve();
  }
  function setActive(type, isActive, options) {
    var _a;
    if (state[type].isActive === isActive)
      return Promise.resolve();
    (_a = visualElement2.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach(function(child) {
      var _a2;
      return (_a2 = child.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(type, isActive);
    });
    state[type].isActive = isActive;
    var animations2 = animateChanges(options, type);
    for (var key in state) {
      state[key].protectedKeys = {};
    }
    return animations2;
  }
  return {
    isAnimated,
    animateChanges,
    setActive,
    setAnimateFunction,
    getState: function() {
      return state;
    }
  };
}
function checkVariantsDidChange(prev, next) {
  if (typeof next === "string") {
    return next !== prev;
  } else if (isVariantLabels(next)) {
    return !shallowCompare(next, prev);
  }
  return false;
}
function createTypeState(isActive) {
  if (isActive === void 0) {
    isActive = false;
  }
  return {
    isActive,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function createState() {
  var _a;
  return _a = {}, _a[AnimationType.Animate] = createTypeState(true), _a[AnimationType.InView] = createTypeState(), _a[AnimationType.Hover] = createTypeState(), _a[AnimationType.Tap] = createTypeState(), _a[AnimationType.Drag] = createTypeState(), _a[AnimationType.Focus] = createTypeState(), _a[AnimationType.Exit] = createTypeState(), _a;
}
var animations = {
  animation: makeRenderlessComponent(function(_a) {
    var visualElement2 = _a.visualElement, animate2 = _a.animate;
    visualElement2.animationState || (visualElement2.animationState = createAnimationState(visualElement2));
    if (isAnimationControls(animate2)) {
      useEffect(function() {
        return animate2.subscribe(visualElement2);
      }, [animate2]);
    }
  }),
  exit: makeRenderlessComponent(function(props2) {
    var custom = props2.custom, visualElement2 = props2.visualElement;
    var _a = __read(usePresence(), 2), isPresent = _a[0], safeToRemove = _a[1];
    var presenceContext = useContext(PresenceContext);
    useEffect(function() {
      var _a2, _b;
      visualElement2.isPresent = isPresent;
      var animation2 = (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Exit, !isPresent, { custom: (_b = presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.custom) !== null && _b !== void 0 ? _b : custom });
      !isPresent && (animation2 === null || animation2 === void 0 ? void 0 : animation2.then(safeToRemove));
    }, [isPresent]);
  })
};
var PanSession = function() {
  function PanSession2(event, handlers, _a) {
    var _this = this;
    var _b = _a === void 0 ? {} : _a, transformPagePoint = _b.transformPagePoint;
    this.startEvent = null;
    this.lastMoveEvent = null;
    this.lastMoveEventInfo = null;
    this.handlers = {};
    this.updatePoint = function() {
      if (!(_this.lastMoveEvent && _this.lastMoveEventInfo))
        return;
      var info2 = getPanInfo(_this.lastMoveEventInfo, _this.history);
      var isPanStarted = _this.startEvent !== null;
      var isDistancePastThreshold = distance$1(info2.offset, { x: 0, y: 0 }) >= 3;
      if (!isPanStarted && !isDistancePastThreshold)
        return;
      var point2 = info2.point;
      var timestamp2 = getFrameData().timestamp;
      _this.history.push(__assign$1(__assign$1({}, point2), { timestamp: timestamp2 }));
      var _a2 = _this.handlers, onStart = _a2.onStart, onMove = _a2.onMove;
      if (!isPanStarted) {
        onStart && onStart(_this.lastMoveEvent, info2);
        _this.startEvent = _this.lastMoveEvent;
      }
      onMove && onMove(_this.lastMoveEvent, info2);
    };
    this.handlePointerMove = function(event2, info2) {
      _this.lastMoveEvent = event2;
      _this.lastMoveEventInfo = transformPoint(info2, _this.transformPagePoint);
      if (isMouseEvent(event2) && event2.buttons === 0) {
        _this.handlePointerUp(event2, info2);
        return;
      }
      sync.update(_this.updatePoint, true);
    };
    this.handlePointerUp = function(event2, info2) {
      _this.end();
      var _a2 = _this.handlers, onEnd = _a2.onEnd, onSessionEnd = _a2.onSessionEnd;
      var panInfo = getPanInfo(transformPoint(info2, _this.transformPagePoint), _this.history);
      if (_this.startEvent && onEnd) {
        onEnd(event2, panInfo);
      }
      onSessionEnd && onSessionEnd(event2, panInfo);
    };
    if (isTouchEvent(event) && event.touches.length > 1)
      return;
    this.handlers = handlers;
    this.transformPagePoint = transformPagePoint;
    var info = extractEventInfo(event);
    var initialInfo = transformPoint(info, this.transformPagePoint);
    var point = initialInfo.point;
    var timestamp = getFrameData().timestamp;
    this.history = [__assign$1(__assign$1({}, point), { timestamp })];
    var onSessionStart = handlers.onSessionStart;
    onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
    this.removeListeners = pipe(addPointerEvent(window, "pointermove", this.handlePointerMove), addPointerEvent(window, "pointerup", this.handlePointerUp), addPointerEvent(window, "pointercancel", this.handlePointerUp));
  }
  PanSession2.prototype.updateHandlers = function(handlers) {
    this.handlers = handlers;
  };
  PanSession2.prototype.end = function() {
    this.removeListeners && this.removeListeners();
    cancelSync.update(this.updatePoint);
  };
  return PanSession2;
}();
function transformPoint(info, transformPagePoint) {
  return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a2, b2) {
  return { x: a2.x - b2.x, y: a2.y - b2.y };
}
function getPanInfo(_a, history) {
  var point = _a.point;
  return {
    point,
    delta: subtractPoint(point, lastDevicePoint(history)),
    offset: subtractPoint(point, startDevicePoint(history)),
    velocity: getVelocity(history, 0.1)
  };
}
function startDevicePoint(history) {
  return history[0];
}
function lastDevicePoint(history) {
  return history[history.length - 1];
}
function getVelocity(history, timeDelta) {
  if (history.length < 2) {
    return { x: 0, y: 0 };
  }
  var i = history.length - 1;
  var timestampedPoint = null;
  var lastPoint = lastDevicePoint(history);
  while (i >= 0) {
    timestampedPoint = history[i];
    if (lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta)) {
      break;
    }
    i--;
  }
  if (!timestampedPoint) {
    return { x: 0, y: 0 };
  }
  var time = (lastPoint.timestamp - timestampedPoint.timestamp) / 1e3;
  if (time === 0) {
    return { x: 0, y: 0 };
  }
  var currentVelocity = {
    x: (lastPoint.x - timestampedPoint.x) / time,
    y: (lastPoint.y - timestampedPoint.y) / time
  };
  if (currentVelocity.x === Infinity) {
    currentVelocity.x = 0;
  }
  if (currentVelocity.y === Infinity) {
    currentVelocity.y = 0;
  }
  return currentVelocity;
}
function applyConstraints(point, _a, elastic) {
  var min = _a.min, max = _a.max;
  if (min !== void 0 && point < min) {
    point = elastic ? mix(min, point, elastic.min) : Math.max(point, min);
  } else if (max !== void 0 && point > max) {
    point = elastic ? mix(max, point, elastic.max) : Math.min(point, max);
  }
  return point;
}
function calcRelativeAxisConstraints(axis, min, max) {
  return {
    min: min !== void 0 ? axis.min + min : void 0,
    max: max !== void 0 ? axis.max + max - (axis.max - axis.min) : void 0
  };
}
function calcRelativeConstraints(layoutBox, _a) {
  var top = _a.top, left = _a.left, bottom = _a.bottom, right2 = _a.right;
  return {
    x: calcRelativeAxisConstraints(layoutBox.x, left, right2),
    y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
  };
}
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
  var _a;
  var min = constraintsAxis.min - layoutAxis.min;
  var max = constraintsAxis.max - layoutAxis.max;
  if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) {
    _a = __read([max, min], 2), min = _a[0], max = _a[1];
  }
  return { min, max };
}
function calcViewportConstraints(layoutBox, constraintsBox) {
  return {
    x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
    y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
  };
}
function calcOrigin(source, target) {
  var origin2 = 0.5;
  var sourceLength = calcLength(source);
  var targetLength = calcLength(target);
  if (targetLength > sourceLength) {
    origin2 = progress(target.min, target.max - sourceLength, source.min);
  } else if (sourceLength > targetLength) {
    origin2 = progress(source.min, source.max - targetLength, target.min);
  }
  return clamp$1(0, 1, origin2);
}
function rebaseAxisConstraints(layout, constraints) {
  var relativeConstraints = {};
  if (constraints.min !== void 0) {
    relativeConstraints.min = constraints.min - layout.min;
  }
  if (constraints.max !== void 0) {
    relativeConstraints.max = constraints.max - layout.min;
  }
  return relativeConstraints;
}
var defaultElastic = 0.35;
function resolveDragElastic(dragElastic) {
  if (dragElastic === void 0) {
    dragElastic = defaultElastic;
  }
  if (dragElastic === false) {
    dragElastic = 0;
  } else if (dragElastic === true) {
    dragElastic = defaultElastic;
  }
  return {
    x: resolveAxisElastic(dragElastic, "left", "right"),
    y: resolveAxisElastic(dragElastic, "top", "bottom")
  };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
  return {
    min: resolvePointElastic(dragElastic, minLabel),
    max: resolvePointElastic(dragElastic, maxLabel)
  };
}
function resolvePointElastic(dragElastic, label) {
  var _a;
  return typeof dragElastic === "number" ? dragElastic : (_a = dragElastic[label]) !== null && _a !== void 0 ? _a : 0;
}
function convertBoundingBoxToBox(_a) {
  var top = _a.top, left = _a.left, right2 = _a.right, bottom = _a.bottom;
  return {
    x: { min: left, max: right2 },
    y: { min: top, max: bottom }
  };
}
function convertBoxToBoundingBox(_a) {
  var x = _a.x, y2 = _a.y;
  return { top: y2.min, right: x.max, bottom: y2.max, left: x.min };
}
function transformBoxPoints(point, transformPoint2) {
  if (!transformPoint2)
    return point;
  var topLeft = transformPoint2({ x: point.left, y: point.top });
  var bottomRight = transformPoint2({ x: point.right, y: point.bottom });
  return {
    top: topLeft.y,
    left: topLeft.x,
    bottom: bottomRight.y,
    right: bottomRight.x
  };
}
function measureViewportBox(instance, transformPoint2) {
  return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint2));
}
function measurePageBox(element, rootProjectionNode2, transformPagePoint) {
  var viewportBox = measureViewportBox(element, transformPagePoint);
  var scroll3 = rootProjectionNode2.scroll;
  if (scroll3) {
    translateAxis(viewportBox.x, scroll3.x);
    translateAxis(viewportBox.y, scroll3.y);
  }
  return viewportBox;
}
var elementDragControls = /* @__PURE__ */ new WeakMap();
var VisualElementDragControls = function() {
  function VisualElementDragControls2(visualElement2) {
    this.openGlobalLock = null;
    this.isDragging = false;
    this.currentDirection = null;
    this.originPoint = { x: 0, y: 0 };
    this.constraints = false;
    this.hasMutatedConstraints = false;
    this.elastic = createBox$1();
    this.visualElement = visualElement2;
  }
  VisualElementDragControls2.prototype.start = function(originEvent, _a) {
    var _this = this;
    var _b = _a === void 0 ? {} : _a, _c = _b.snapToCursor, snapToCursor = _c === void 0 ? false : _c;
    if (this.visualElement.isPresent === false)
      return;
    var onSessionStart = function(event) {
      _this.stopAnimation();
      if (snapToCursor) {
        _this.snapToCursor(extractEventInfo(event, "page").point);
      }
    };
    var onStart = function(event, info) {
      var _a2;
      var _b2 = _this.getProps(), drag2 = _b2.drag, dragPropagation = _b2.dragPropagation, onDragStart3 = _b2.onDragStart;
      if (drag2 && !dragPropagation) {
        if (_this.openGlobalLock)
          _this.openGlobalLock();
        _this.openGlobalLock = getGlobalLock(drag2);
        if (!_this.openGlobalLock)
          return;
      }
      _this.isDragging = true;
      _this.currentDirection = null;
      _this.resolveConstraints();
      if (_this.visualElement.projection) {
        _this.visualElement.projection.isAnimationBlocked = true;
        _this.visualElement.projection.target = void 0;
      }
      eachAxis(function(axis) {
        var _a3, _b3;
        var current = _this.getAxisMotionValue(axis).get() || 0;
        if (percent.test(current)) {
          var measuredAxis = (_b3 = (_a3 = _this.visualElement.projection) === null || _a3 === void 0 ? void 0 : _a3.layout) === null || _b3 === void 0 ? void 0 : _b3.actual[axis];
          if (measuredAxis) {
            var length_1 = calcLength(measuredAxis);
            current = length_1 * (parseFloat(current) / 100);
          }
        }
        _this.originPoint[axis] = current;
      });
      onDragStart3 === null || onDragStart3 === void 0 ? void 0 : onDragStart3(event, info);
      (_a2 = _this.visualElement.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Drag, true);
    };
    var onMove = function(event, info) {
      var _a2 = _this.getProps(), dragPropagation = _a2.dragPropagation, dragDirectionLock = _a2.dragDirectionLock, onDirectionLock = _a2.onDirectionLock, onDrag = _a2.onDrag;
      if (!dragPropagation && !_this.openGlobalLock)
        return;
      var offset3 = info.offset;
      if (dragDirectionLock && _this.currentDirection === null) {
        _this.currentDirection = getCurrentDirection(offset3);
        if (_this.currentDirection !== null) {
          onDirectionLock === null || onDirectionLock === void 0 ? void 0 : onDirectionLock(_this.currentDirection);
        }
        return;
      }
      _this.updateAxis("x", info.point, offset3);
      _this.updateAxis("y", info.point, offset3);
      _this.visualElement.syncRender();
      onDrag === null || onDrag === void 0 ? void 0 : onDrag(event, info);
    };
    var onSessionEnd = function(event, info) {
      return _this.stop(event, info);
    };
    this.panSession = new PanSession(originEvent, {
      onSessionStart,
      onStart,
      onMove,
      onSessionEnd
    }, { transformPagePoint: this.visualElement.getTransformPagePoint() });
  };
  VisualElementDragControls2.prototype.stop = function(event, info) {
    var isDragging = this.isDragging;
    this.cancel();
    if (!isDragging)
      return;
    var velocity = info.velocity;
    this.startAnimation(velocity);
    var onDragEnd3 = this.getProps().onDragEnd;
    onDragEnd3 === null || onDragEnd3 === void 0 ? void 0 : onDragEnd3(event, info);
  };
  VisualElementDragControls2.prototype.cancel = function() {
    var _a, _b;
    this.isDragging = false;
    if (this.visualElement.projection) {
      this.visualElement.projection.isAnimationBlocked = false;
    }
    (_a = this.panSession) === null || _a === void 0 ? void 0 : _a.end();
    this.panSession = void 0;
    var dragPropagation = this.getProps().dragPropagation;
    if (!dragPropagation && this.openGlobalLock) {
      this.openGlobalLock();
      this.openGlobalLock = null;
    }
    (_b = this.visualElement.animationState) === null || _b === void 0 ? void 0 : _b.setActive(AnimationType.Drag, false);
  };
  VisualElementDragControls2.prototype.updateAxis = function(axis, _point, offset3) {
    var drag2 = this.getProps().drag;
    if (!offset3 || !shouldDrag(axis, drag2, this.currentDirection))
      return;
    var axisValue = this.getAxisMotionValue(axis);
    var next = this.originPoint[axis] + offset3[axis];
    if (this.constraints && this.constraints[axis]) {
      next = applyConstraints(next, this.constraints[axis], this.elastic[axis]);
    }
    axisValue.set(next);
  };
  VisualElementDragControls2.prototype.resolveConstraints = function() {
    var _this = this;
    var _a = this.getProps(), dragConstraints = _a.dragConstraints, dragElastic = _a.dragElastic;
    var layout = (this.visualElement.projection || {}).layout;
    var prevConstraints = this.constraints;
    if (dragConstraints && isRefObject(dragConstraints)) {
      if (!this.constraints) {
        this.constraints = this.resolveRefConstraints();
      }
    } else {
      if (dragConstraints && layout) {
        this.constraints = calcRelativeConstraints(layout.actual, dragConstraints);
      } else {
        this.constraints = false;
      }
    }
    this.elastic = resolveDragElastic(dragElastic);
    if (prevConstraints !== this.constraints && layout && this.constraints && !this.hasMutatedConstraints) {
      eachAxis(function(axis) {
        if (_this.getAxisMotionValue(axis)) {
          _this.constraints[axis] = rebaseAxisConstraints(layout.actual[axis], _this.constraints[axis]);
        }
      });
    }
  };
  VisualElementDragControls2.prototype.resolveRefConstraints = function() {
    var _a = this.getProps(), constraints = _a.dragConstraints, onMeasureDragConstraints = _a.onMeasureDragConstraints;
    if (!constraints || !isRefObject(constraints))
      return false;
    var constraintsElement = constraints.current;
    var projection = this.visualElement.projection;
    if (!projection || !projection.layout)
      return false;
    var constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
    var measuredConstraints = calcViewportConstraints(projection.layout.actual, constraintsBox);
    if (onMeasureDragConstraints) {
      var userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
      this.hasMutatedConstraints = !!userConstraints;
      if (userConstraints) {
        measuredConstraints = convertBoundingBoxToBox(userConstraints);
      }
    }
    return measuredConstraints;
  };
  VisualElementDragControls2.prototype.startAnimation = function(velocity) {
    var _this = this;
    var _a = this.getProps(), drag2 = _a.drag, dragMomentum = _a.dragMomentum, dragElastic = _a.dragElastic, dragTransition = _a.dragTransition, dragSnapToOrigin = _a.dragSnapToOrigin, onDragTransitionEnd = _a.onDragTransitionEnd;
    var constraints = this.constraints || {};
    var momentumAnimations = eachAxis(function(axis) {
      var _a2;
      if (!shouldDrag(axis, drag2, _this.currentDirection)) {
        return;
      }
      var transition = (_a2 = constraints === null || constraints === void 0 ? void 0 : constraints[axis]) !== null && _a2 !== void 0 ? _a2 : {};
      if (dragSnapToOrigin)
        transition = { min: 0, max: 0 };
      var bounceStiffness = dragElastic ? 200 : 1e6;
      var bounceDamping = dragElastic ? 40 : 1e7;
      var inertia2 = __assign$1(__assign$1({ type: "inertia", velocity: dragMomentum ? velocity[axis] : 0, bounceStiffness, bounceDamping, timeConstant: 750, restDelta: 1, restSpeed: 10 }, dragTransition), transition);
      return _this.startAxisValueAnimation(axis, inertia2);
    });
    return Promise.all(momentumAnimations).then(onDragTransitionEnd);
  };
  VisualElementDragControls2.prototype.startAxisValueAnimation = function(axis, transition) {
    var axisValue = this.getAxisMotionValue(axis);
    return startAnimation(axis, axisValue, 0, transition);
  };
  VisualElementDragControls2.prototype.stopAnimation = function() {
    var _this = this;
    eachAxis(function(axis) {
      return _this.getAxisMotionValue(axis).stop();
    });
  };
  VisualElementDragControls2.prototype.getAxisMotionValue = function(axis) {
    var _a, _b;
    var dragKey = "_drag" + axis.toUpperCase();
    var externalMotionValue = this.visualElement.getProps()[dragKey];
    return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, (_b = (_a = this.visualElement.getProps().initial) === null || _a === void 0 ? void 0 : _a[axis]) !== null && _b !== void 0 ? _b : 0);
  };
  VisualElementDragControls2.prototype.snapToCursor = function(point) {
    var _this = this;
    eachAxis(function(axis) {
      var drag2 = _this.getProps().drag;
      if (!shouldDrag(axis, drag2, _this.currentDirection))
        return;
      var projection = _this.visualElement.projection;
      var axisValue = _this.getAxisMotionValue(axis);
      if (projection && projection.layout) {
        var _a = projection.layout.actual[axis], min = _a.min, max = _a.max;
        axisValue.set(point[axis] - mix(min, max, 0.5));
      }
    });
  };
  VisualElementDragControls2.prototype.scalePositionWithinConstraints = function() {
    var _this = this;
    var _a;
    var _b = this.getProps(), drag2 = _b.drag, dragConstraints = _b.dragConstraints;
    var projection = this.visualElement.projection;
    if (!isRefObject(dragConstraints) || !projection || !this.constraints)
      return;
    this.stopAnimation();
    var boxProgress = { x: 0, y: 0 };
    eachAxis(function(axis) {
      var axisValue = _this.getAxisMotionValue(axis);
      if (axisValue) {
        var latest = axisValue.get();
        boxProgress[axis] = calcOrigin({ min: latest, max: latest }, _this.constraints[axis]);
      }
    });
    var transformTemplate = this.visualElement.getProps().transformTemplate;
    this.visualElement.getInstance().style.transform = transformTemplate ? transformTemplate({}, "") : "none";
    (_a = projection.root) === null || _a === void 0 ? void 0 : _a.updateScroll();
    projection.updateLayout();
    this.resolveConstraints();
    eachAxis(function(axis) {
      if (!shouldDrag(axis, drag2, null))
        return;
      var axisValue = _this.getAxisMotionValue(axis);
      var _a2 = _this.constraints[axis], min = _a2.min, max = _a2.max;
      axisValue.set(mix(min, max, boxProgress[axis]));
    });
  };
  VisualElementDragControls2.prototype.addListeners = function() {
    var _this = this;
    var _a;
    elementDragControls.set(this.visualElement, this);
    var element = this.visualElement.getInstance();
    var stopPointerListener = addPointerEvent(element, "pointerdown", function(event) {
      var _a2 = _this.getProps(), drag2 = _a2.drag, _b = _a2.dragListener, dragListener = _b === void 0 ? true : _b;
      drag2 && dragListener && _this.start(event);
    });
    var measureDragConstraints = function() {
      var dragConstraints = _this.getProps().dragConstraints;
      if (isRefObject(dragConstraints)) {
        _this.constraints = _this.resolveRefConstraints();
      }
    };
    var projection = this.visualElement.projection;
    var stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
    if (projection && !projection.layout) {
      (_a = projection.root) === null || _a === void 0 ? void 0 : _a.updateScroll();
      projection.updateLayout();
    }
    measureDragConstraints();
    var stopResizeListener = addDomEvent(window, "resize", function() {
      _this.scalePositionWithinConstraints();
    });
    projection.addEventListener("didUpdate", function(_a2) {
      var delta = _a2.delta, hasLayoutChanged = _a2.hasLayoutChanged;
      if (_this.isDragging && hasLayoutChanged) {
        eachAxis(function(axis) {
          var motionValue2 = _this.getAxisMotionValue(axis);
          if (!motionValue2)
            return;
          _this.originPoint[axis] += delta[axis].translate;
          motionValue2.set(motionValue2.get() + delta[axis].translate);
        });
        _this.visualElement.syncRender();
      }
    });
    return function() {
      stopResizeListener();
      stopPointerListener();
      stopMeasureLayoutListener();
    };
  };
  VisualElementDragControls2.prototype.getProps = function() {
    var props2 = this.visualElement.getProps();
    var _a = props2.drag, drag2 = _a === void 0 ? false : _a, _b = props2.dragDirectionLock, dragDirectionLock = _b === void 0 ? false : _b, _c = props2.dragPropagation, dragPropagation = _c === void 0 ? false : _c, _d = props2.dragConstraints, dragConstraints = _d === void 0 ? false : _d, _e = props2.dragElastic, dragElastic = _e === void 0 ? defaultElastic : _e, _f = props2.dragMomentum, dragMomentum = _f === void 0 ? true : _f;
    return __assign$1(__assign$1({}, props2), { drag: drag2, dragDirectionLock, dragPropagation, dragConstraints, dragElastic, dragMomentum });
  };
  return VisualElementDragControls2;
}();
function shouldDrag(direction, drag2, currentDirection) {
  return (drag2 === true || drag2 === direction) && (currentDirection === null || currentDirection === direction);
}
function getCurrentDirection(offset3, lockThreshold) {
  if (lockThreshold === void 0) {
    lockThreshold = 10;
  }
  var direction = null;
  if (Math.abs(offset3.y) > lockThreshold) {
    direction = "y";
  } else if (Math.abs(offset3.x) > lockThreshold) {
    direction = "x";
  }
  return direction;
}
function useDrag(props2) {
  var groupDragControls = props2.dragControls, visualElement2 = props2.visualElement;
  var dragControls = useConstant(function() {
    return new VisualElementDragControls(visualElement2);
  });
  useEffect(function() {
    return groupDragControls && groupDragControls.subscribe(dragControls);
  }, [dragControls, groupDragControls]);
  useEffect(function() {
    return dragControls.addListeners();
  }, [dragControls]);
}
function usePanGesture(_a) {
  var onPan = _a.onPan, onPanStart = _a.onPanStart, onPanEnd = _a.onPanEnd, onPanSessionStart = _a.onPanSessionStart, visualElement2 = _a.visualElement;
  var hasPanEvents = onPan || onPanStart || onPanEnd || onPanSessionStart;
  var panSession = useRef(null);
  var transformPagePoint = useContext(MotionConfigContext).transformPagePoint;
  var handlers = {
    onSessionStart: onPanSessionStart,
    onStart: onPanStart,
    onMove: onPan,
    onEnd: function(event, info) {
      panSession.current = null;
      onPanEnd && onPanEnd(event, info);
    }
  };
  useEffect(function() {
    if (panSession.current !== null) {
      panSession.current.updateHandlers(handlers);
    }
  });
  function onPointerDown(event) {
    panSession.current = new PanSession(event, handlers, {
      transformPagePoint
    });
  }
  usePointerEvent(visualElement2, "pointerdown", hasPanEvents && onPointerDown);
  useUnmountEffect(function() {
    return panSession.current && panSession.current.end();
  });
}
var drag = {
  pan: makeRenderlessComponent(usePanGesture),
  drag: makeRenderlessComponent(useDrag)
};
var names = [
  "LayoutMeasure",
  "BeforeLayoutMeasure",
  "LayoutUpdate",
  "ViewportBoxUpdate",
  "Update",
  "Render",
  "AnimationComplete",
  "LayoutAnimationComplete",
  "AnimationStart",
  "SetAxisTarget",
  "Unmount"
];
function createLifecycles() {
  var managers = names.map(function() {
    return new SubscriptionManager();
  });
  var propSubscriptions = {};
  var lifecycles = {
    clearAllListeners: function() {
      return managers.forEach(function(manager) {
        return manager.clear();
      });
    },
    updatePropListeners: function(props2) {
      names.forEach(function(name) {
        var _a;
        var on = "on" + name;
        var propListener = props2[on];
        (_a = propSubscriptions[name]) === null || _a === void 0 ? void 0 : _a.call(propSubscriptions);
        if (propListener) {
          propSubscriptions[name] = lifecycles[on](propListener);
        }
      });
    }
  };
  managers.forEach(function(manager, i) {
    lifecycles["on" + names[i]] = function(handler) {
      return manager.add(handler);
    };
    lifecycles["notify" + names[i]] = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return manager.notify.apply(manager, __spreadArray([], __read(args), false));
    };
  });
  return lifecycles;
}
function updateMotionValuesFromProps(element, next, prev) {
  var _a;
  for (var key in next) {
    var nextValue = next[key];
    var prevValue = prev[key];
    if (isMotionValue(nextValue)) {
      element.addValue(key, nextValue);
    } else if (isMotionValue(prevValue)) {
      element.addValue(key, motionValue(nextValue));
    } else if (prevValue !== nextValue) {
      if (element.hasValue(key)) {
        var existingValue = element.getValue(key);
        !existingValue.hasAnimated && existingValue.set(nextValue);
      } else {
        element.addValue(key, motionValue((_a = element.getStaticValue(key)) !== null && _a !== void 0 ? _a : nextValue));
      }
    }
  }
  for (var key in prev) {
    if (next[key] === void 0)
      element.removeValue(key);
  }
  return next;
}
var visualElement = function(_a) {
  var _b = _a.treeType, treeType = _b === void 0 ? "" : _b, build = _a.build, getBaseTarget = _a.getBaseTarget, makeTargetAnimatable = _a.makeTargetAnimatable, measureViewportBox2 = _a.measureViewportBox, renderInstance = _a.render, readValueFromInstance = _a.readValueFromInstance, removeValueFromRenderState = _a.removeValueFromRenderState, sortNodePosition = _a.sortNodePosition, scrapeMotionValuesFromProps2 = _a.scrapeMotionValuesFromProps;
  return function(_a2, options) {
    var parent = _a2.parent, props2 = _a2.props, presenceId = _a2.presenceId, blockInitialAnimation = _a2.blockInitialAnimation, visualState = _a2.visualState, shouldReduceMotion = _a2.shouldReduceMotion;
    if (options === void 0) {
      options = {};
    }
    var isMounted = false;
    var latestValues = visualState.latestValues, renderState = visualState.renderState;
    var instance;
    var lifecycles = createLifecycles();
    var values2 = /* @__PURE__ */ new Map();
    var valueSubscriptions = /* @__PURE__ */ new Map();
    var prevMotionValues = {};
    var baseTarget = __assign$1({}, latestValues);
    var removeFromVariantTree;
    function render() {
      if (!instance || !isMounted)
        return;
      triggerBuild();
      renderInstance(instance, renderState, props2.style, element.projection);
    }
    function triggerBuild() {
      build(element, renderState, latestValues, options, props2);
    }
    function update2() {
      lifecycles.notifyUpdate(latestValues);
    }
    function bindToMotionValue(key2, value2) {
      var removeOnChange = value2.onChange(function(latestValue) {
        latestValues[key2] = latestValue;
        props2.onUpdate && sync.update(update2, false, true);
      });
      var removeOnRenderRequest = value2.onRenderRequest(element.scheduleRender);
      valueSubscriptions.set(key2, function() {
        removeOnChange();
        removeOnRenderRequest();
      });
    }
    var initialMotionValues = scrapeMotionValuesFromProps2(props2);
    for (var key in initialMotionValues) {
      var value = initialMotionValues[key];
      if (latestValues[key] !== void 0 && isMotionValue(value)) {
        value.set(latestValues[key], false);
      }
    }
    var isControllingVariants = checkIfControllingVariants(props2);
    var isVariantNode = checkIfVariantNode(props2);
    var element = __assign$1(__assign$1({
      treeType,
      current: null,
      depth: parent ? parent.depth + 1 : 0,
      parent,
      children: /* @__PURE__ */ new Set(),
      presenceId,
      shouldReduceMotion,
      variantChildren: isVariantNode ? /* @__PURE__ */ new Set() : void 0,
      isVisible: void 0,
      manuallyAnimateOnMount: Boolean(parent === null || parent === void 0 ? void 0 : parent.isMounted()),
      blockInitialAnimation,
      isMounted: function() {
        return Boolean(instance);
      },
      mount: function(newInstance) {
        isMounted = true;
        instance = element.current = newInstance;
        if (element.projection) {
          element.projection.mount(newInstance);
        }
        if (isVariantNode && parent && !isControllingVariants) {
          removeFromVariantTree = parent === null || parent === void 0 ? void 0 : parent.addVariantChild(element);
        }
        values2.forEach(function(value2, key2) {
          return bindToMotionValue(key2, value2);
        });
        parent === null || parent === void 0 ? void 0 : parent.children.add(element);
        element.setProps(props2);
      },
      unmount: function() {
        var _a3;
        (_a3 = element.projection) === null || _a3 === void 0 ? void 0 : _a3.unmount();
        cancelSync.update(update2);
        cancelSync.render(render);
        valueSubscriptions.forEach(function(remove) {
          return remove();
        });
        removeFromVariantTree === null || removeFromVariantTree === void 0 ? void 0 : removeFromVariantTree();
        parent === null || parent === void 0 ? void 0 : parent.children.delete(element);
        lifecycles.clearAllListeners();
        instance = void 0;
        isMounted = false;
      },
      addVariantChild: function(child) {
        var _a3;
        var closestVariantNode = element.getClosestVariantNode();
        if (closestVariantNode) {
          (_a3 = closestVariantNode.variantChildren) === null || _a3 === void 0 ? void 0 : _a3.add(child);
          return function() {
            return closestVariantNode.variantChildren.delete(child);
          };
        }
      },
      sortNodePosition: function(other) {
        if (!sortNodePosition || treeType !== other.treeType)
          return 0;
        return sortNodePosition(element.getInstance(), other.getInstance());
      },
      getClosestVariantNode: function() {
        return isVariantNode ? element : parent === null || parent === void 0 ? void 0 : parent.getClosestVariantNode();
      },
      getLayoutId: function() {
        return props2.layoutId;
      },
      getInstance: function() {
        return instance;
      },
      getStaticValue: function(key2) {
        return latestValues[key2];
      },
      setStaticValue: function(key2, value2) {
        return latestValues[key2] = value2;
      },
      getLatestValues: function() {
        return latestValues;
      },
      setVisibility: function(visibility) {
        if (element.isVisible === visibility)
          return;
        element.isVisible = visibility;
        element.scheduleRender();
      },
      makeTargetAnimatable: function(target, canMutate) {
        if (canMutate === void 0) {
          canMutate = true;
        }
        return makeTargetAnimatable(element, target, props2, canMutate);
      },
      measureViewportBox: function() {
        return measureViewportBox2(instance, props2);
      },
      addValue: function(key2, value2) {
        if (element.hasValue(key2))
          element.removeValue(key2);
        values2.set(key2, value2);
        latestValues[key2] = value2.get();
        bindToMotionValue(key2, value2);
      },
      removeValue: function(key2) {
        var _a3;
        values2.delete(key2);
        (_a3 = valueSubscriptions.get(key2)) === null || _a3 === void 0 ? void 0 : _a3();
        valueSubscriptions.delete(key2);
        delete latestValues[key2];
        removeValueFromRenderState(key2, renderState);
      },
      hasValue: function(key2) {
        return values2.has(key2);
      },
      getValue: function(key2, defaultValue) {
        var value2 = values2.get(key2);
        if (value2 === void 0 && defaultValue !== void 0) {
          value2 = motionValue(defaultValue);
          element.addValue(key2, value2);
        }
        return value2;
      },
      forEachValue: function(callback) {
        return values2.forEach(callback);
      },
      readValue: function(key2) {
        var _a3;
        return (_a3 = latestValues[key2]) !== null && _a3 !== void 0 ? _a3 : readValueFromInstance(instance, key2, options);
      },
      setBaseTarget: function(key2, value2) {
        baseTarget[key2] = value2;
      },
      getBaseTarget: function(key2) {
        if (getBaseTarget) {
          var target = getBaseTarget(props2, key2);
          if (target !== void 0 && !isMotionValue(target))
            return target;
        }
        return baseTarget[key2];
      }
    }, lifecycles), {
      build: function() {
        triggerBuild();
        return renderState;
      },
      scheduleRender: function() {
        sync.render(render, false, true);
      },
      syncRender: render,
      setProps: function(newProps) {
        if (newProps.transformTemplate || props2.transformTemplate) {
          element.scheduleRender();
        }
        props2 = newProps;
        lifecycles.updatePropListeners(newProps);
        prevMotionValues = updateMotionValuesFromProps(element, scrapeMotionValuesFromProps2(props2), prevMotionValues);
      },
      getProps: function() {
        return props2;
      },
      getVariant: function(name) {
        var _a3;
        return (_a3 = props2.variants) === null || _a3 === void 0 ? void 0 : _a3[name];
      },
      getDefaultTransition: function() {
        return props2.transition;
      },
      getTransformPagePoint: function() {
        return props2.transformPagePoint;
      },
      getVariantContext: function(startAtParent) {
        if (startAtParent === void 0) {
          startAtParent = false;
        }
        if (startAtParent)
          return parent === null || parent === void 0 ? void 0 : parent.getVariantContext();
        if (!isControllingVariants) {
          var context_1 = (parent === null || parent === void 0 ? void 0 : parent.getVariantContext()) || {};
          if (props2.initial !== void 0) {
            context_1.initial = props2.initial;
          }
          return context_1;
        }
        var context = {};
        for (var i = 0; i < numVariantProps; i++) {
          var name_1 = variantProps[i];
          var prop = props2[name_1];
          if (isVariantLabel(prop) || prop === false) {
            context[name_1] = prop;
          }
        }
        return context;
      }
    });
    return element;
  };
};
var variantProps = __spreadArray(["initial"], __read(variantPriorityOrder), false);
var numVariantProps = variantProps.length;
function isCSSVariable(value) {
  return typeof value === "string" && value.startsWith("var(--");
}
var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function parseCSSVariable(current) {
  var match2 = cssVariableRegex.exec(current);
  if (!match2)
    return [,];
  var _a = __read(match2, 3), token = _a[1], fallback = _a[2];
  return [token, fallback];
}
function getVariableValue(current, element, depth) {
  var _a = __read(parseCSSVariable(current), 2), token = _a[0], fallback = _a[1];
  if (!token)
    return;
  var resolved = window.getComputedStyle(element).getPropertyValue(token);
  if (resolved) {
    return resolved.trim();
  } else if (isCSSVariable(fallback)) {
    return getVariableValue(fallback, element);
  } else {
    return fallback;
  }
}
function resolveCSSVariables(visualElement2, _a, transitionEnd) {
  var _b;
  var target = __rest$1(_a, []);
  var element = visualElement2.getInstance();
  if (!(element instanceof Element))
    return { target, transitionEnd };
  if (transitionEnd) {
    transitionEnd = __assign$1({}, transitionEnd);
  }
  visualElement2.forEachValue(function(value) {
    var current2 = value.get();
    if (!isCSSVariable(current2))
      return;
    var resolved2 = getVariableValue(current2, element);
    if (resolved2)
      value.set(resolved2);
  });
  for (var key in target) {
    var current = target[key];
    if (!isCSSVariable(current))
      continue;
    var resolved = getVariableValue(current, element);
    if (!resolved)
      continue;
    target[key] = resolved;
    if (transitionEnd)
      (_b = transitionEnd[key]) !== null && _b !== void 0 ? _b : transitionEnd[key] = current;
  }
  return { target, transitionEnd };
}
var positionalKeys = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y"
]);
var isPositionalKey = function(key) {
  return positionalKeys.has(key);
};
var hasPositionalKey = function(target) {
  return Object.keys(target).some(isPositionalKey);
};
var setAndResetVelocity = function(value, to) {
  value.set(to, false);
  value.set(to);
};
var isNumOrPxType = function(v2) {
  return v2 === number || v2 === px;
};
var BoundingBoxDimension;
(function(BoundingBoxDimension2) {
  BoundingBoxDimension2["width"] = "width";
  BoundingBoxDimension2["height"] = "height";
  BoundingBoxDimension2["left"] = "left";
  BoundingBoxDimension2["right"] = "right";
  BoundingBoxDimension2["top"] = "top";
  BoundingBoxDimension2["bottom"] = "bottom";
})(BoundingBoxDimension || (BoundingBoxDimension = {}));
var getPosFromMatrix = function(matrix, pos) {
  return parseFloat(matrix.split(", ")[pos]);
};
var getTranslateFromMatrix = function(pos2, pos3) {
  return function(_bbox, _a) {
    var transform = _a.transform;
    if (transform === "none" || !transform)
      return 0;
    var matrix3d = transform.match(/^matrix3d\((.+)\)$/);
    if (matrix3d) {
      return getPosFromMatrix(matrix3d[1], pos3);
    } else {
      var matrix = transform.match(/^matrix\((.+)\)$/);
      if (matrix) {
        return getPosFromMatrix(matrix[1], pos2);
      } else {
        return 0;
      }
    }
  };
};
var transformKeys = /* @__PURE__ */ new Set(["x", "y", "z"]);
var nonTranslationalTransformKeys = transformProps.filter(function(key) {
  return !transformKeys.has(key);
});
function removeNonTranslationalTransform(visualElement2) {
  var removedTransforms = [];
  nonTranslationalTransformKeys.forEach(function(key) {
    var value = visualElement2.getValue(key);
    if (value !== void 0) {
      removedTransforms.push([key, value.get()]);
      value.set(key.startsWith("scale") ? 1 : 0);
    }
  });
  if (removedTransforms.length)
    visualElement2.syncRender();
  return removedTransforms;
}
var positionalValues = {
  width: function(_a, _b) {
    var x = _a.x;
    var _c = _b.paddingLeft, paddingLeft = _c === void 0 ? "0" : _c, _d = _b.paddingRight, paddingRight = _d === void 0 ? "0" : _d;
    return x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight);
  },
  height: function(_a, _b) {
    var y2 = _a.y;
    var _c = _b.paddingTop, paddingTop = _c === void 0 ? "0" : _c, _d = _b.paddingBottom, paddingBottom = _d === void 0 ? "0" : _d;
    return y2.max - y2.min - parseFloat(paddingTop) - parseFloat(paddingBottom);
  },
  top: function(_bbox, _a) {
    var top = _a.top;
    return parseFloat(top);
  },
  left: function(_bbox, _a) {
    var left = _a.left;
    return parseFloat(left);
  },
  bottom: function(_a, _b) {
    var y2 = _a.y;
    var top = _b.top;
    return parseFloat(top) + (y2.max - y2.min);
  },
  right: function(_a, _b) {
    var x = _a.x;
    var left = _b.left;
    return parseFloat(left) + (x.max - x.min);
  },
  x: getTranslateFromMatrix(4, 13),
  y: getTranslateFromMatrix(5, 14)
};
var convertChangedValueTypes = function(target, visualElement2, changedKeys) {
  var originBbox = visualElement2.measureViewportBox();
  var element = visualElement2.getInstance();
  var elementComputedStyle = getComputedStyle(element);
  var display = elementComputedStyle.display;
  var origin2 = {};
  if (display === "none") {
    visualElement2.setStaticValue("display", target.display || "block");
  }
  changedKeys.forEach(function(key) {
    origin2[key] = positionalValues[key](originBbox, elementComputedStyle);
  });
  visualElement2.syncRender();
  var targetBbox = visualElement2.measureViewportBox();
  changedKeys.forEach(function(key) {
    var value = visualElement2.getValue(key);
    setAndResetVelocity(value, origin2[key]);
    target[key] = positionalValues[key](targetBbox, elementComputedStyle);
  });
  return target;
};
var checkAndConvertChangedValueTypes = function(visualElement2, target, origin2, transitionEnd) {
  if (origin2 === void 0) {
    origin2 = {};
  }
  if (transitionEnd === void 0) {
    transitionEnd = {};
  }
  target = __assign$1({}, target);
  transitionEnd = __assign$1({}, transitionEnd);
  var targetPositionalKeys = Object.keys(target).filter(isPositionalKey);
  var removedTransformValues = [];
  var hasAttemptedToRemoveTransformValues = false;
  var changedValueTypeKeys = [];
  targetPositionalKeys.forEach(function(key) {
    var value = visualElement2.getValue(key);
    if (!visualElement2.hasValue(key))
      return;
    var from = origin2[key];
    var fromType = findDimensionValueType(from);
    var to = target[key];
    var toType;
    if (isKeyframesTarget(to)) {
      var numKeyframes = to.length;
      var fromIndex = to[0] === null ? 1 : 0;
      from = to[fromIndex];
      fromType = findDimensionValueType(from);
      for (var i = fromIndex; i < numKeyframes; i++) {
        if (!toType) {
          toType = findDimensionValueType(to[i]);
        } else {
          invariant$3(findDimensionValueType(to[i]) === toType);
        }
      }
    } else {
      toType = findDimensionValueType(to);
    }
    if (fromType !== toType) {
      if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
        var current = value.get();
        if (typeof current === "string") {
          value.set(parseFloat(current));
        }
        if (typeof to === "string") {
          target[key] = parseFloat(to);
        } else if (Array.isArray(to) && toType === px) {
          target[key] = to.map(parseFloat);
        }
      } else if ((fromType === null || fromType === void 0 ? void 0 : fromType.transform) && (toType === null || toType === void 0 ? void 0 : toType.transform) && (from === 0 || to === 0)) {
        if (from === 0) {
          value.set(toType.transform(from));
        } else {
          target[key] = fromType.transform(to);
        }
      } else {
        if (!hasAttemptedToRemoveTransformValues) {
          removedTransformValues = removeNonTranslationalTransform(visualElement2);
          hasAttemptedToRemoveTransformValues = true;
        }
        changedValueTypeKeys.push(key);
        transitionEnd[key] = transitionEnd[key] !== void 0 ? transitionEnd[key] : target[key];
        setAndResetVelocity(value, to);
      }
    }
  });
  if (changedValueTypeKeys.length) {
    var convertedTarget = convertChangedValueTypes(target, visualElement2, changedValueTypeKeys);
    if (removedTransformValues.length) {
      removedTransformValues.forEach(function(_a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        visualElement2.getValue(key).set(value);
      });
    }
    visualElement2.syncRender();
    return { target: convertedTarget, transitionEnd };
  } else {
    return { target, transitionEnd };
  }
};
function unitConversion(visualElement2, target, origin2, transitionEnd) {
  return hasPositionalKey(target) ? checkAndConvertChangedValueTypes(visualElement2, target, origin2, transitionEnd) : { target, transitionEnd };
}
var parseDomVariant = function(visualElement2, target, origin2, transitionEnd) {
  var resolved = resolveCSSVariables(visualElement2, target, transitionEnd);
  target = resolved.target;
  transitionEnd = resolved.transitionEnd;
  return unitConversion(visualElement2, target, origin2, transitionEnd);
};
function getComputedStyle$1(element) {
  return window.getComputedStyle(element);
}
var htmlConfig = {
  treeType: "dom",
  readValueFromInstance: function(domElement, key) {
    if (isTransformProp(key)) {
      var defaultType = getDefaultValueType(key);
      return defaultType ? defaultType.default || 0 : 0;
    } else {
      var computedStyle = getComputedStyle$1(domElement);
      return (isCSSVariable$1(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
    }
  },
  sortNodePosition: function(a2, b2) {
    return a2.compareDocumentPosition(b2) & 2 ? 1 : -1;
  },
  getBaseTarget: function(props2, key) {
    var _a;
    return (_a = props2.style) === null || _a === void 0 ? void 0 : _a[key];
  },
  measureViewportBox: function(element, _a) {
    var transformPagePoint = _a.transformPagePoint;
    return measureViewportBox(element, transformPagePoint);
  },
  resetTransform: function(element, domElement, props2) {
    var transformTemplate = props2.transformTemplate;
    domElement.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
    element.scheduleRender();
  },
  restoreTransform: function(instance, mutableState) {
    instance.style.transform = mutableState.style.transform;
  },
  removeValueFromRenderState: function(key, _a) {
    var vars = _a.vars, style2 = _a.style;
    delete vars[key];
    delete style2[key];
  },
  makeTargetAnimatable: function(element, _a, _b, isMounted) {
    var transformValues = _b.transformValues;
    if (isMounted === void 0) {
      isMounted = true;
    }
    var transition = _a.transition, transitionEnd = _a.transitionEnd, target = __rest$1(_a, ["transition", "transitionEnd"]);
    var origin2 = getOrigin(target, transition || {}, element);
    if (transformValues) {
      if (transitionEnd)
        transitionEnd = transformValues(transitionEnd);
      if (target)
        target = transformValues(target);
      if (origin2)
        origin2 = transformValues(origin2);
    }
    if (isMounted) {
      checkTargetForNewValues(element, target, origin2);
      var parsed = parseDomVariant(element, target, origin2, transitionEnd);
      transitionEnd = parsed.transitionEnd;
      target = parsed.target;
    }
    return __assign$1({ transition, transitionEnd }, target);
  },
  scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
  build: function(element, renderState, latestValues, options, props2) {
    if (element.isVisible !== void 0) {
      renderState.style.visibility = element.isVisible ? "visible" : "hidden";
    }
    buildHTMLStyles(renderState, latestValues, options, props2.transformTemplate);
  },
  render: renderHTML
};
var htmlVisualElement = visualElement(htmlConfig);
var svgVisualElement = visualElement(__assign$1(__assign$1({}, htmlConfig), { getBaseTarget: function(props2, key) {
  return props2[key];
}, readValueFromInstance: function(domElement, key) {
  var _a;
  if (isTransformProp(key)) {
    return ((_a = getDefaultValueType(key)) === null || _a === void 0 ? void 0 : _a.default) || 0;
  }
  key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
  return domElement.getAttribute(key);
}, scrapeMotionValuesFromProps, build: function(_element, renderState, latestValues, options, props2) {
  buildSVGAttrs(renderState, latestValues, options, props2.transformTemplate);
}, render: renderSVG }));
var createDomVisualElement = function(Component, options) {
  return isSVGComponent(Component) ? svgVisualElement(options, { enableHardwareAcceleration: false }) : htmlVisualElement(options, { enableHardwareAcceleration: true });
};
function pixelsToPercent(pixels, axis) {
  if (axis.max === axis.min)
    return 0;
  return pixels / (axis.max - axis.min) * 100;
}
var correctBorderRadius = {
  correct: function(latest, node) {
    if (!node.target)
      return latest;
    if (typeof latest === "string") {
      if (px.test(latest)) {
        latest = parseFloat(latest);
      } else {
        return latest;
      }
    }
    var x = pixelsToPercent(latest, node.target.x);
    var y2 = pixelsToPercent(latest, node.target.y);
    return "".concat(x, "% ").concat(y2, "%");
  }
};
var varToken = "_$css";
var correctBoxShadow = {
  correct: function(latest, _a) {
    var treeScale = _a.treeScale, projectionDelta = _a.projectionDelta;
    var original = latest;
    var containsCSSVariables = latest.includes("var(");
    var cssVariables = [];
    if (containsCSSVariables) {
      latest = latest.replace(cssVariableRegex, function(match2) {
        cssVariables.push(match2);
        return varToken;
      });
    }
    var shadow = complex.parse(latest);
    if (shadow.length > 5)
      return original;
    var template = complex.createTransformer(latest);
    var offset3 = typeof shadow[0] !== "number" ? 1 : 0;
    var xScale = projectionDelta.x.scale * treeScale.x;
    var yScale = projectionDelta.y.scale * treeScale.y;
    shadow[0 + offset3] /= xScale;
    shadow[1 + offset3] /= yScale;
    var averageScale = mix(xScale, yScale, 0.5);
    if (typeof shadow[2 + offset3] === "number")
      shadow[2 + offset3] /= averageScale;
    if (typeof shadow[3 + offset3] === "number")
      shadow[3 + offset3] /= averageScale;
    var output = template(shadow);
    if (containsCSSVariables) {
      var i_1 = 0;
      output = output.replace(varToken, function() {
        var cssVariable = cssVariables[i_1];
        i_1++;
        return cssVariable;
      });
    }
    return output;
  }
};
var MeasureLayoutWithContext = function(_super) {
  __extends$1(MeasureLayoutWithContext2, _super);
  function MeasureLayoutWithContext2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  MeasureLayoutWithContext2.prototype.componentDidMount = function() {
    var _this = this;
    var _a = this.props, visualElement2 = _a.visualElement, layoutGroup = _a.layoutGroup, switchLayoutGroup = _a.switchLayoutGroup, layoutId = _a.layoutId;
    var projection = visualElement2.projection;
    addScaleCorrector(defaultScaleCorrectors);
    if (projection) {
      if (layoutGroup === null || layoutGroup === void 0 ? void 0 : layoutGroup.group)
        layoutGroup.group.add(projection);
      if ((switchLayoutGroup === null || switchLayoutGroup === void 0 ? void 0 : switchLayoutGroup.register) && layoutId) {
        switchLayoutGroup.register(projection);
      }
      projection.root.didUpdate();
      projection.addEventListener("animationComplete", function() {
        _this.safeToRemove();
      });
      projection.setOptions(__assign$1(__assign$1({}, projection.options), { onExitComplete: function() {
        return _this.safeToRemove();
      } }));
    }
    globalProjectionState.hasEverUpdated = true;
  };
  MeasureLayoutWithContext2.prototype.getSnapshotBeforeUpdate = function(prevProps) {
    var _this = this;
    var _a = this.props, layoutDependency = _a.layoutDependency, visualElement2 = _a.visualElement, drag2 = _a.drag, isPresent = _a.isPresent;
    var projection = visualElement2.projection;
    if (!projection)
      return null;
    projection.isPresent = isPresent;
    if (drag2 || prevProps.layoutDependency !== layoutDependency || layoutDependency === void 0) {
      projection.willUpdate();
    } else {
      this.safeToRemove();
    }
    if (prevProps.isPresent !== isPresent) {
      if (isPresent) {
        projection.promote();
      } else if (!projection.relegate()) {
        sync.postRender(function() {
          var _a2;
          if (!((_a2 = projection.getStack()) === null || _a2 === void 0 ? void 0 : _a2.members.length)) {
            _this.safeToRemove();
          }
        });
      }
    }
    return null;
  };
  MeasureLayoutWithContext2.prototype.componentDidUpdate = function() {
    var projection = this.props.visualElement.projection;
    if (projection) {
      projection.root.didUpdate();
      if (!projection.currentAnimation && projection.isLead()) {
        this.safeToRemove();
      }
    }
  };
  MeasureLayoutWithContext2.prototype.componentWillUnmount = function() {
    var _a = this.props, visualElement2 = _a.visualElement, layoutGroup = _a.layoutGroup, promoteContext = _a.switchLayoutGroup;
    var projection = visualElement2.projection;
    if (projection) {
      projection.scheduleCheckAfterUnmount();
      if (layoutGroup === null || layoutGroup === void 0 ? void 0 : layoutGroup.group)
        layoutGroup.group.remove(projection);
      if (promoteContext === null || promoteContext === void 0 ? void 0 : promoteContext.deregister)
        promoteContext.deregister(projection);
    }
  };
  MeasureLayoutWithContext2.prototype.safeToRemove = function() {
    var safeToRemove = this.props.safeToRemove;
    safeToRemove === null || safeToRemove === void 0 ? void 0 : safeToRemove();
  };
  MeasureLayoutWithContext2.prototype.render = function() {
    return null;
  };
  return MeasureLayoutWithContext2;
}(React__default.Component);
function MeasureLayout(props2) {
  var _a = __read(usePresence(), 2), isPresent = _a[0], safeToRemove = _a[1];
  var layoutGroup = useContext(LayoutGroupContext);
  return React__default.createElement(MeasureLayoutWithContext, __assign$1({}, props2, { layoutGroup, switchLayoutGroup: useContext(SwitchLayoutGroupContext), isPresent, safeToRemove }));
}
var defaultScaleCorrectors = {
  borderRadius: __assign$1(__assign$1({}, correctBorderRadius), { applyTo: [
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ] }),
  borderTopLeftRadius: correctBorderRadius,
  borderTopRightRadius: correctBorderRadius,
  borderBottomLeftRadius: correctBorderRadius,
  borderBottomRightRadius: correctBorderRadius,
  boxShadow: correctBoxShadow
};
var layoutFeatures = {
  measureLayout: MeasureLayout
};
var DocumentProjectionNode = createProjectionNode({
  attachResizeListener: function(ref, notify2) {
    ref.addEventListener("resize", notify2, { passive: true });
    return function() {
      return ref.removeEventListener("resize", notify2);
    };
  },
  measureScroll: function() {
    return {
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop
    };
  }
});
var rootProjectionNode = {
  current: void 0
};
var HTMLProjectionNode = createProjectionNode({
  measureScroll: function(instance) {
    return {
      x: instance.scrollLeft,
      y: instance.scrollTop
    };
  },
  defaultParent: function() {
    if (!rootProjectionNode.current) {
      var documentNode = new DocumentProjectionNode(0, {});
      documentNode.mount(window);
      documentNode.setOptions({ layoutScroll: true });
      rootProjectionNode.current = documentNode;
    }
    return rootProjectionNode.current;
  },
  resetTransform: function(instance, value) {
    instance.style.transform = value !== null && value !== void 0 ? value : "none";
  }
});
var featureBundle = __assign$1(__assign$1(__assign$1(__assign$1({}, animations), gestureAnimations), drag), layoutFeatures);
var motion = /* @__PURE__ */ createMotionProxy(function(Component, config2) {
  return createDomMotionConfig(Component, config2, featureBundle, createDomVisualElement, HTMLProjectionNode);
});
function useIsMounted() {
  var isMounted = useRef(false);
  useIsomorphicLayoutEffect$3(function() {
    isMounted.current = true;
    return function() {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
}
function useForceUpdate() {
  var isMounted = useIsMounted();
  var _a = __read(useState(0), 2), forcedRenderCount = _a[0], setForcedRenderCount = _a[1];
  var forceRender = useCallback$1(function() {
    isMounted.current && setForcedRenderCount(forcedRenderCount + 1);
  }, [forcedRenderCount]);
  var deferredForceRender = useCallback$1(function() {
    return sync.postRender(forceRender);
  }, [forceRender]);
  return [deferredForceRender, forcedRenderCount];
}
var PresenceChild = function(_a) {
  var children = _a.children, initial = _a.initial, isPresent = _a.isPresent, onExitComplete = _a.onExitComplete, custom = _a.custom, presenceAffectsLayout = _a.presenceAffectsLayout;
  var presenceChildren = useConstant(newChildrenMap);
  var id2 = useId();
  var context = useMemo$1(function() {
    return {
      id: id2,
      initial,
      isPresent,
      custom,
      onExitComplete: function(childId) {
        var e_1, _a2;
        presenceChildren.set(childId, true);
        try {
          for (var _b = __values(presenceChildren.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var isComplete = _c.value;
            if (!isComplete)
              return;
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a2 = _b.return))
              _a2.call(_b);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
        onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete();
      },
      register: function(childId) {
        presenceChildren.set(childId, false);
        return function() {
          return presenceChildren.delete(childId);
        };
      }
    };
  }, presenceAffectsLayout ? void 0 : [isPresent]);
  useMemo$1(function() {
    presenceChildren.forEach(function(_, key) {
      return presenceChildren.set(key, false);
    });
  }, [isPresent]);
  React$1.useEffect(function() {
    !isPresent && !presenceChildren.size && (onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete());
  }, [isPresent]);
  return React$1.createElement(PresenceContext.Provider, { value: context }, children);
};
function newChildrenMap() {
  return /* @__PURE__ */ new Map();
}
var getChildKey = function(child) {
  return child.key || "";
};
function updateChildLookup(children, allChildren) {
  children.forEach(function(child) {
    var key = getChildKey(child);
    allChildren.set(key, child);
  });
}
function onlyElements(children) {
  var filtered = [];
  Children.forEach(children, function(child) {
    if (isValidElement(child))
      filtered.push(child);
  });
  return filtered;
}
var AnimatePresence = function(_a) {
  var children = _a.children, custom = _a.custom, _b = _a.initial, initial = _b === void 0 ? true : _b, onExitComplete = _a.onExitComplete, exitBeforeEnter = _a.exitBeforeEnter, _c = _a.presenceAffectsLayout, presenceAffectsLayout = _c === void 0 ? true : _c;
  var _d = __read(useForceUpdate(), 1), forceRender = _d[0];
  var forceRenderLayoutGroup = useContext(LayoutGroupContext).forceRender;
  if (forceRenderLayoutGroup)
    forceRender = forceRenderLayoutGroup;
  var isMounted = useIsMounted();
  var filteredChildren = onlyElements(children);
  var childrenToRender = filteredChildren;
  var exiting = /* @__PURE__ */ new Set();
  var presentChildren = useRef(childrenToRender);
  var allChildren = useRef(/* @__PURE__ */ new Map()).current;
  var isInitialRender = useRef(true);
  useIsomorphicLayoutEffect$3(function() {
    isInitialRender.current = false;
    updateChildLookup(filteredChildren, allChildren);
    presentChildren.current = childrenToRender;
  });
  useUnmountEffect(function() {
    isInitialRender.current = true;
    allChildren.clear();
    exiting.clear();
  });
  if (isInitialRender.current) {
    return React$1.createElement(React$1.Fragment, null, childrenToRender.map(function(child) {
      return React$1.createElement(PresenceChild, { key: getChildKey(child), isPresent: true, initial: initial ? void 0 : false, presenceAffectsLayout }, child);
    }));
  }
  childrenToRender = __spreadArray([], __read(childrenToRender), false);
  var presentKeys = presentChildren.current.map(getChildKey);
  var targetKeys = filteredChildren.map(getChildKey);
  var numPresent = presentKeys.length;
  for (var i = 0; i < numPresent; i++) {
    var key = presentKeys[i];
    if (targetKeys.indexOf(key) === -1) {
      exiting.add(key);
    }
  }
  if (exitBeforeEnter && exiting.size) {
    childrenToRender = [];
  }
  exiting.forEach(function(key2) {
    if (targetKeys.indexOf(key2) !== -1)
      return;
    var child = allChildren.get(key2);
    if (!child)
      return;
    var insertionIndex = presentKeys.indexOf(key2);
    var onExit = function() {
      allChildren.delete(key2);
      exiting.delete(key2);
      var removeIndex = presentChildren.current.findIndex(function(presentChild) {
        return presentChild.key === key2;
      });
      presentChildren.current.splice(removeIndex, 1);
      if (!exiting.size) {
        presentChildren.current = filteredChildren;
        if (isMounted.current === false)
          return;
        forceRender();
        onExitComplete && onExitComplete();
      }
    };
    childrenToRender.splice(insertionIndex, 0, React$1.createElement(PresenceChild, { key: getChildKey(child), isPresent: false, onExitComplete: onExit, custom, presenceAffectsLayout }, child));
  });
  childrenToRender = childrenToRender.map(function(child) {
    var key2 = child.key;
    return exiting.has(key2) ? child : React$1.createElement(PresenceChild, { key: getChildKey(child), isPresent: true, presenceAffectsLayout }, child);
  });
  return React$1.createElement(React$1.Fragment, null, exiting.size ? childrenToRender : childrenToRender.map(function(child) {
    return cloneElement(child);
  }));
};
const Card = (_e) => {
  var _f = _e, { children, loading: loading2 } = _f, props2 = __objRest(_f, ["children", "loading"]);
  const getClassNames = () => {
    let className = _getClassNames(__spreadValues({
      parent: scss$n.card,
      scss: scss$n,
      loading: loading2
    }, props2));
    return className.join(" ");
  };
  const [hover, setHover] = useState(false);
  return /* @__PURE__ */ React__default.createElement(motion.div, {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { delay: hover ? 0 : 0.2, duration: 0.2 }
    },
    whileHover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    "data-testid": "Card",
    className: getClassNames(),
    onHoverStart: () => {
      setHover(true);
    }
  }, !loading2 && /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, children));
};
const CardHeader = (_g) => {
  var _h = _g, { children, type } = _h, props2 = __objRest(_h, ["children", "type"]);
  const getClassNames = () => {
    let className = _getClassNames(__spreadValues({
      parent: scss$n.header,
      scss: scss$n
    }, props2));
    return className.join(" ");
  };
  return /* @__PURE__ */ React__default.createElement("div", {
    "data-testid": "CardHeader",
    className: getClassNames()
  }, children);
};
const CardContent = (_i) => {
  var _j = _i, { children } = _j, props2 = __objRest(_j, ["children"]);
  const getClassNames = () => {
    let className = _getClassNames(__spreadValues({
      parent: scss$n.content,
      scss: scss$n
    }, props2));
    return className.join(" ");
  };
  return /* @__PURE__ */ React__default.createElement("div", {
    "data-testid": "CardContent",
    className: getClassNames()
  }, children);
};
const fontS$g = "_fontS_1djlc_1";
const fontM$g = "_fontM_1djlc_6";
const fontL$g = "_fontL_1djlc_11";
const fontXL$g = "_fontXL_1djlc_16";
const weightLight$g = "_weightLight_1djlc_21";
const weightNormal$g = "_weightNormal_1djlc_26";
const weightBold$g = "_weightBold_1djlc_31";
const disabled$g = "_disabled_1djlc_36";
const error$g = "_error_1djlc_45";
const errorMessage$g = "_errorMessage_1djlc_49";
const pointer$g = "_pointer_1djlc_54";
const loading$g = "_loading_1djlc_58";
const loadingAnimationOpacity$g = "_loadingAnimationOpacity_1djlc_1";
const loadingAnimation$g = "_loadingAnimation_1djlc_1";
const margin0$g = "_margin0_1djlc_94";
const marginS$g = "_marginS_1djlc_98";
const marginM$g = "_marginM_1djlc_102";
const marginL$g = "_marginL_1djlc_106";
const marginXL$g = "_marginXL_1djlc_110";
const marginTop0$g = "_marginTop0_1djlc_114";
const marginTopS$g = "_marginTopS_1djlc_118";
const marginTopM$g = "_marginTopM_1djlc_122";
const marginTopL$g = "_marginTopL_1djlc_126";
const marginTopXL$g = "_marginTopXL_1djlc_130";
const marginRight0$g = "_marginRight0_1djlc_134";
const marginRightS$g = "_marginRightS_1djlc_138";
const marginRightM$g = "_marginRightM_1djlc_142";
const marginRightL$g = "_marginRightL_1djlc_146";
const marginRightXL$g = "_marginRightXL_1djlc_150";
const marginBottom0$g = "_marginBottom0_1djlc_154";
const marginBottomS$g = "_marginBottomS_1djlc_158";
const marginBottomM$g = "_marginBottomM_1djlc_162";
const marginBottomL$g = "_marginBottomL_1djlc_166";
const marginBottomXL$g = "_marginBottomXL_1djlc_170";
const marginLeft0$g = "_marginLeft0_1djlc_174";
const marginLeftS$g = "_marginLeftS_1djlc_178";
const marginLeftM$g = "_marginLeftM_1djlc_182";
const marginLeftL$g = "_marginLeftL_1djlc_186";
const marginLeftXL$g = "_marginLeftXL_1djlc_190";
const padding0$g = "_padding0_1djlc_194";
const paddingS$g = "_paddingS_1djlc_198";
const paddingM$g = "_paddingM_1djlc_202";
const paddingL$g = "_paddingL_1djlc_206";
const paddingXL$g = "_paddingXL_1djlc_210";
const paddingTop0$g = "_paddingTop0_1djlc_214";
const paddingTopS$g = "_paddingTopS_1djlc_218";
const paddingTopM$g = "_paddingTopM_1djlc_222";
const paddingTopL$g = "_paddingTopL_1djlc_226";
const paddingTopXL$g = "_paddingTopXL_1djlc_230";
const paddingRight0$g = "_paddingRight0_1djlc_234";
const paddingRightS$g = "_paddingRightS_1djlc_238";
const paddingRightM$g = "_paddingRightM_1djlc_242";
const paddingRightL$g = "_paddingRightL_1djlc_246";
const paddingRightXL$g = "_paddingRightXL_1djlc_250";
const paddingBottom0$g = "_paddingBottom0_1djlc_254";
const paddingBottomS$g = "_paddingBottomS_1djlc_258";
const paddingBottomM$g = "_paddingBottomM_1djlc_262";
const paddingBottomL$g = "_paddingBottomL_1djlc_266";
const paddingBottomXL$g = "_paddingBottomXL_1djlc_270";
const paddingLeft0$g = "_paddingLeft0_1djlc_274";
const paddingLeftS$g = "_paddingLeftS_1djlc_278";
const paddingLeftM$g = "_paddingLeftM_1djlc_282";
const paddingLeftL$g = "_paddingLeftL_1djlc_286";
const paddingLeftXL$g = "_paddingLeftXL_1djlc_290";
const checkbox = "_checkbox_1djlc_310";
var scss$m = {
  fontS: fontS$g,
  fontM: fontM$g,
  fontL: fontL$g,
  fontXL: fontXL$g,
  weightLight: weightLight$g,
  weightNormal: weightNormal$g,
  weightBold: weightBold$g,
  disabled: disabled$g,
  error: error$g,
  errorMessage: errorMessage$g,
  pointer: pointer$g,
  loading: loading$g,
  loadingAnimationOpacity: loadingAnimationOpacity$g,
  loadingAnimation: loadingAnimation$g,
  margin0: margin0$g,
  marginS: marginS$g,
  marginM: marginM$g,
  marginL: marginL$g,
  marginXL: marginXL$g,
  marginTop0: marginTop0$g,
  marginTopS: marginTopS$g,
  marginTopM: marginTopM$g,
  marginTopL: marginTopL$g,
  marginTopXL: marginTopXL$g,
  marginRight0: marginRight0$g,
  marginRightS: marginRightS$g,
  marginRightM: marginRightM$g,
  marginRightL: marginRightL$g,
  marginRightXL: marginRightXL$g,
  marginBottom0: marginBottom0$g,
  marginBottomS: marginBottomS$g,
  marginBottomM: marginBottomM$g,
  marginBottomL: marginBottomL$g,
  marginBottomXL: marginBottomXL$g,
  marginLeft0: marginLeft0$g,
  marginLeftS: marginLeftS$g,
  marginLeftM: marginLeftM$g,
  marginLeftL: marginLeftL$g,
  marginLeftXL: marginLeftXL$g,
  padding0: padding0$g,
  paddingS: paddingS$g,
  paddingM: paddingM$g,
  paddingL: paddingL$g,
  paddingXL: paddingXL$g,
  paddingTop0: paddingTop0$g,
  paddingTopS: paddingTopS$g,
  paddingTopM: paddingTopM$g,
  paddingTopL: paddingTopL$g,
  paddingTopXL: paddingTopXL$g,
  paddingRight0: paddingRight0$g,
  paddingRightS: paddingRightS$g,
  paddingRightM: paddingRightM$g,
  paddingRightL: paddingRightL$g,
  paddingRightXL: paddingRightXL$g,
  paddingBottom0: paddingBottom0$g,
  paddingBottomS: paddingBottomS$g,
  paddingBottomM: paddingBottomM$g,
  paddingBottomL: paddingBottomL$g,
  paddingBottomXL: paddingBottomXL$g,
  paddingLeft0: paddingLeft0$g,
  paddingLeftS: paddingLeftS$g,
  paddingLeftM: paddingLeftM$g,
  paddingLeftL: paddingLeftL$g,
  paddingLeftXL: paddingLeftXL$g,
  "backgroundColor--primary": "_backgroundColor--primary_1djlc_294",
  "backgroundColor--text100": "_backgroundColor--text100_1djlc_298",
  "color--primary": "_color--primary_1djlc_302",
  "color--text100": "_color--text100_1djlc_306",
  checkbox
};
const Checkbox = (_k) => {
  var _l = _k, { children, error: error2, scale: scale2, weight } = _l, props2 = __objRest(_l, ["children", "error", "scale", "weight"]);
  const getClassNames = () => {
    let className = _getClassNames(__spreadValues({ parent: scss$m.checkbox, scss: scss$m }, props2));
    return className.join(" ");
  };
  return /* @__PURE__ */ React__default.createElement("span", {
    className: getClassNames()
  }, /* @__PURE__ */ React__default.createElement("input", __spreadProps(__spreadValues({
    id: "checkbox",
    type: "checkbox"
  }, props2), {
    "data-testid": "Checkbox"
  })), /* @__PURE__ */ React__default.createElement("label", {
    htmlFor: "checkbox"
  }, children));
};
const fontS$f = "_fontS_8rapd_1";
const fontM$f = "_fontM_8rapd_6";
const fontL$f = "_fontL_8rapd_11";
const fontXL$f = "_fontXL_8rapd_16";
const weightLight$f = "_weightLight_8rapd_21";
const weightNormal$f = "_weightNormal_8rapd_26";
const weightBold$f = "_weightBold_8rapd_31";
const disabled$f = "_disabled_8rapd_36";
const error$f = "_error_8rapd_45";
const errorMessage$f = "_errorMessage_8rapd_49";
const pointer$f = "_pointer_8rapd_54";
const loading$f = "_loading_8rapd_58";
const loadingAnimationOpacity$f = "_loadingAnimationOpacity_8rapd_1";
const loadingAnimation$f = "_loadingAnimation_8rapd_1";
const margin0$f = "_margin0_8rapd_94";
const marginS$f = "_marginS_8rapd_98";
const marginM$f = "_marginM_8rapd_102";
const marginL$f = "_marginL_8rapd_106";
const marginXL$f = "_marginXL_8rapd_110";
const marginTop0$f = "_marginTop0_8rapd_114";
const marginTopS$f = "_marginTopS_8rapd_118";
const marginTopM$f = "_marginTopM_8rapd_122";
const marginTopL$f = "_marginTopL_8rapd_126";
const marginTopXL$f = "_marginTopXL_8rapd_130";
const marginRight0$f = "_marginRight0_8rapd_134";
const marginRightS$f = "_marginRightS_8rapd_138";
const marginRightM$f = "_marginRightM_8rapd_142";
const marginRightL$f = "_marginRightL_8rapd_146";
const marginRightXL$f = "_marginRightXL_8rapd_150";
const marginBottom0$f = "_marginBottom0_8rapd_154";
const marginBottomS$f = "_marginBottomS_8rapd_158";
const marginBottomM$f = "_marginBottomM_8rapd_162";
const marginBottomL$f = "_marginBottomL_8rapd_166";
const marginBottomXL$f = "_marginBottomXL_8rapd_170";
const marginLeft0$f = "_marginLeft0_8rapd_174";
const marginLeftS$f = "_marginLeftS_8rapd_178";
const marginLeftM$f = "_marginLeftM_8rapd_182";
const marginLeftL$f = "_marginLeftL_8rapd_186";
const marginLeftXL$f = "_marginLeftXL_8rapd_190";
const padding0$f = "_padding0_8rapd_194";
const paddingS$f = "_paddingS_8rapd_198";
const paddingM$f = "_paddingM_8rapd_202";
const paddingL$f = "_paddingL_8rapd_206";
const paddingXL$f = "_paddingXL_8rapd_210";
const paddingTop0$f = "_paddingTop0_8rapd_214";
const paddingTopS$f = "_paddingTopS_8rapd_218";
const paddingTopM$f = "_paddingTopM_8rapd_222";
const paddingTopL$f = "_paddingTopL_8rapd_226";
const paddingTopXL$f = "_paddingTopXL_8rapd_230";
const paddingRight0$f = "_paddingRight0_8rapd_234";
const paddingRightS$f = "_paddingRightS_8rapd_238";
const paddingRightM$f = "_paddingRightM_8rapd_242";
const paddingRightL$f = "_paddingRightL_8rapd_246";
const paddingRightXL$f = "_paddingRightXL_8rapd_250";
const paddingBottom0$f = "_paddingBottom0_8rapd_254";
const paddingBottomS$f = "_paddingBottomS_8rapd_258";
const paddingBottomM$f = "_paddingBottomM_8rapd_262";
const paddingBottomL$f = "_paddingBottomL_8rapd_266";
const paddingBottomXL$f = "_paddingBottomXL_8rapd_270";
const paddingLeft0$f = "_paddingLeft0_8rapd_274";
const paddingLeftS$f = "_paddingLeftS_8rapd_278";
const paddingLeftM$f = "_paddingLeftM_8rapd_282";
const paddingLeftL$f = "_paddingLeftL_8rapd_286";
const paddingLeftXL$f = "_paddingLeftXL_8rapd_290";
const code$1 = "_code_8rapd_310";
const content = "_content_8rapd_315";
const buttonWrapper$1 = "_buttonWrapper_8rapd_337";
var scss$l = {
  fontS: fontS$f,
  fontM: fontM$f,
  fontL: fontL$f,
  fontXL: fontXL$f,
  weightLight: weightLight$f,
  weightNormal: weightNormal$f,
  weightBold: weightBold$f,
  disabled: disabled$f,
  error: error$f,
  errorMessage: errorMessage$f,
  pointer: pointer$f,
  loading: loading$f,
  loadingAnimationOpacity: loadingAnimationOpacity$f,
  loadingAnimation: loadingAnimation$f,
  margin0: margin0$f,
  marginS: marginS$f,
  marginM: marginM$f,
  marginL: marginL$f,
  marginXL: marginXL$f,
  marginTop0: marginTop0$f,
  marginTopS: marginTopS$f,
  marginTopM: marginTopM$f,
  marginTopL: marginTopL$f,
  marginTopXL: marginTopXL$f,
  marginRight0: marginRight0$f,
  marginRightS: marginRightS$f,
  marginRightM: marginRightM$f,
  marginRightL: marginRightL$f,
  marginRightXL: marginRightXL$f,
  marginBottom0: marginBottom0$f,
  marginBottomS: marginBottomS$f,
  marginBottomM: marginBottomM$f,
  marginBottomL: marginBottomL$f,
  marginBottomXL: marginBottomXL$f,
  marginLeft0: marginLeft0$f,
  marginLeftS: marginLeftS$f,
  marginLeftM: marginLeftM$f,
  marginLeftL: marginLeftL$f,
  marginLeftXL: marginLeftXL$f,
  padding0: padding0$f,
  paddingS: paddingS$f,
  paddingM: paddingM$f,
  paddingL: paddingL$f,
  paddingXL: paddingXL$f,
  paddingTop0: paddingTop0$f,
  paddingTopS: paddingTopS$f,
  paddingTopM: paddingTopM$f,
  paddingTopL: paddingTopL$f,
  paddingTopXL: paddingTopXL$f,
  paddingRight0: paddingRight0$f,
  paddingRightS: paddingRightS$f,
  paddingRightM: paddingRightM$f,
  paddingRightL: paddingRightL$f,
  paddingRightXL: paddingRightXL$f,
  paddingBottom0: paddingBottom0$f,
  paddingBottomS: paddingBottomS$f,
  paddingBottomM: paddingBottomM$f,
  paddingBottomL: paddingBottomL$f,
  paddingBottomXL: paddingBottomXL$f,
  paddingLeft0: paddingLeft0$f,
  paddingLeftS: paddingLeftS$f,
  paddingLeftM: paddingLeftM$f,
  paddingLeftL: paddingLeftL$f,
  paddingLeftXL: paddingLeftXL$f,
  "backgroundColor--primary": "_backgroundColor--primary_8rapd_294",
  "backgroundColor--text100": "_backgroundColor--text100_8rapd_298",
  "color--primary": "_color--primary_8rapd_302",
  "color--text100": "_color--text100_8rapd_306",
  code: code$1,
  content,
  buttonWrapper: buttonWrapper$1
};
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var reactContenteditable = {};
var fastDeepEqual = function equal(a2, b2) {
  if (a2 === b2)
    return true;
  if (a2 && b2 && typeof a2 == "object" && typeof b2 == "object") {
    if (a2.constructor !== b2.constructor)
      return false;
    var length, i, keys;
    if (Array.isArray(a2)) {
      length = a2.length;
      if (length != b2.length)
        return false;
      for (i = length; i-- !== 0; )
        if (!equal(a2[i], b2[i]))
          return false;
      return true;
    }
    if (a2.constructor === RegExp)
      return a2.source === b2.source && a2.flags === b2.flags;
    if (a2.valueOf !== Object.prototype.valueOf)
      return a2.valueOf() === b2.valueOf();
    if (a2.toString !== Object.prototype.toString)
      return a2.toString() === b2.toString();
    keys = Object.keys(a2);
    length = keys.length;
    if (length !== Object.keys(b2).length)
      return false;
    for (i = length; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b2, keys[i]))
        return false;
    for (i = length; i-- !== 0; ) {
      var key = keys[i];
      if (!equal(a2[key], b2[key]))
        return false;
    }
    return true;
  }
  return a2 !== a2 && b2 !== b2;
};
var propTypes = { exports: {} };
var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
var ReactPropTypesSecret = ReactPropTypesSecret_1;
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function() {
  function shim(props2, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      return;
    }
    var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
    err.name = "Invariant Violation";
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
{
  propTypes.exports = factoryWithThrowingShims();
}
var __extends = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics2 = function(d2, b2) {
    extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
      d3.__proto__ = b3;
    } || function(d3, b3) {
      for (var p2 in b3)
        if (Object.prototype.hasOwnProperty.call(b3, p2))
          d3[p2] = b3[p2];
    };
    return extendStatics2(d2, b2);
  };
  return function(d2, b2) {
    if (typeof b2 !== "function" && b2 !== null)
      throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
    extendStatics2(d2, b2);
    function __() {
      this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  };
}();
var __assign = commonjsGlobal && commonjsGlobal.__assign || function() {
  __assign = Object.assign || function(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p2 in s)
        if (Object.prototype.hasOwnProperty.call(s, p2))
          t2[p2] = s[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m2, k2, k22) {
  if (k22 === void 0)
    k22 = k2;
  Object.defineProperty(o, k22, { enumerable: true, get: function() {
    return m2[k2];
  } });
} : function(o, m2, k2, k22) {
  if (k22 === void 0)
    k22 = k2;
  o[k22] = m2[k2];
});
var __setModuleDefault = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(o, v2) {
  Object.defineProperty(o, "default", { enumerable: true, value: v2 });
} : function(o, v2) {
  o["default"] = v2;
});
var __importStar = commonjsGlobal && commonjsGlobal.__importStar || function(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k2 in mod)
      if (k2 !== "default" && Object.prototype.hasOwnProperty.call(mod, k2))
        __createBinding(result, mod, k2);
  }
  __setModuleDefault(result, mod);
  return result;
};
var __rest = commonjsGlobal && commonjsGlobal.__rest || function(s, e2) {
  var t2 = {};
  for (var p2 in s)
    if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0)
      t2[p2] = s[p2];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
        t2[p2[i]] = s[p2[i]];
    }
  return t2;
};
var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(reactContenteditable, "__esModule", { value: true });
var React = __importStar(React__default);
var fast_deep_equal_1 = __importDefault(fastDeepEqual);
var PropTypes = __importStar(propTypes.exports);
function normalizeHtml(str) {
  return str && str.replace(/&nbsp;|\u202F|\u00A0/g, " ");
}
function replaceCaret(el) {
  var target = document.createTextNode("");
  el.appendChild(target);
  var isTargetFocused = document.activeElement === el;
  if (target !== null && target.nodeValue !== null && isTargetFocused) {
    var sel = window.getSelection();
    if (sel !== null) {
      var range = document.createRange();
      range.setStart(target, target.nodeValue.length);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    }
    if (el instanceof HTMLElement)
      el.focus();
  }
}
var ContentEditable = function(_super) {
  __extends(ContentEditable2, _super);
  function ContentEditable2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.lastHtml = _this.props.html;
    _this.el = typeof _this.props.innerRef === "function" ? { current: null } : React.createRef();
    _this.getEl = function() {
      return (_this.props.innerRef && typeof _this.props.innerRef !== "function" ? _this.props.innerRef : _this.el).current;
    };
    _this.emitChange = function(originalEvt) {
      var el = _this.getEl();
      if (!el)
        return;
      var html = el.innerHTML;
      if (_this.props.onChange && html !== _this.lastHtml) {
        var evt = Object.assign({}, originalEvt, {
          target: {
            value: html
          }
        });
        _this.props.onChange(evt);
      }
      _this.lastHtml = html;
    };
    return _this;
  }
  ContentEditable2.prototype.render = function() {
    var _this = this;
    var _a = this.props, tagName = _a.tagName, html = _a.html, innerRef = _a.innerRef, props2 = __rest(_a, ["tagName", "html", "innerRef"]);
    return React.createElement(tagName || "div", __assign(__assign({}, props2), { ref: typeof innerRef === "function" ? function(current) {
      innerRef(current);
      _this.el.current = current;
    } : innerRef || this.el, onInput: this.emitChange, onBlur: this.props.onBlur || this.emitChange, onKeyUp: this.props.onKeyUp || this.emitChange, onKeyDown: this.props.onKeyDown || this.emitChange, contentEditable: !this.props.disabled, dangerouslySetInnerHTML: { __html: html } }), this.props.children);
  };
  ContentEditable2.prototype.shouldComponentUpdate = function(nextProps) {
    var props2 = this.props;
    var el = this.getEl();
    if (!el)
      return true;
    if (normalizeHtml(nextProps.html) !== normalizeHtml(el.innerHTML)) {
      return true;
    }
    return props2.disabled !== nextProps.disabled || props2.tagName !== nextProps.tagName || props2.className !== nextProps.className || props2.innerRef !== nextProps.innerRef || props2.placeholder !== nextProps.placeholder || !fast_deep_equal_1.default(props2.style, nextProps.style);
  };
  ContentEditable2.prototype.componentDidUpdate = function() {
    var el = this.getEl();
    if (!el)
      return;
    if (this.props.html !== el.innerHTML) {
      el.innerHTML = this.props.html;
    }
    this.lastHtml = this.props.html;
    replaceCaret(el);
  };
  ContentEditable2.propTypes = {
    html: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    tagName: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    innerRef: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.func
    ])
  };
  return ContentEditable2;
}(React.Component);
var _default = reactContenteditable.default = ContentEditable;
const Code = (_m) => {
  var _n = _m, { children, editable } = _n, props2 = __objRest(_n, ["children", "editable"]);
  const [value, setValue] = useState(children);
  const codeRef = useRef();
  useEffect(() => {
    setValue(children);
  }, [children]);
  const copyToClipboard = (e2) => {
    if (!navigator.clipboard) {
      codeRef.current.select();
      document.execCommand("copy");
    } else {
      let regex = /<[/]div\s*[\/]?>/gi;
      let newValue = value.replace(regex, "\n");
      regex = /(<([^>]+)>)/gi;
      newValue = newValue.replace(regex, "");
      newValue = newValue.replace(/&lt;/g, "<");
      newValue = newValue.replace(/&gt;/g, ">");
      navigator.clipboard.writeText(newValue);
    }
    e2.target.focus();
  };
  return /* @__PURE__ */ React__default.createElement("div", {
    className: scss$l.code
  }, /* @__PURE__ */ React__default.createElement(_default, {
    className: scss$l.content,
    disabled: !editable,
    innerRef: codeRef,
    defaultValue: value,
    html: value,
    onChange: (e2) => setValue(e2.target.value)
  }), /* @__PURE__ */ React__default.createElement("div", {
    className: scss$l.buttonWrapper
  }, /* @__PURE__ */ React__default.createElement(Button, {
    onClick: copyToClipboard
  }, /* @__PURE__ */ React__default.createElement(Icon, {
    icon: "copy"
  })), editable && /* @__PURE__ */ React__default.createElement(Button, {
    onClick: () => {
      codeRef.current.focus();
    }
  }, /* @__PURE__ */ React__default.createElement(Icon, {
    icon: "edit"
  }))));
};
const componentWrapper = "_componentWrapper_lc8te_1";
const component = "_component_lc8te_1";
const props = "_props_lc8te_13";
const wrapper$1 = "_wrapper_lc8te_18";
const code = "_code_lc8te_24";
const componentWrapperFlex = "_componentWrapperFlex_lc8te_28";
var scss$k = {
  componentWrapper,
  component,
  props,
  wrapper: wrapper$1,
  code,
  componentWrapperFlex
};
function ComponentWrapper(_o) {
  var _p = _o, {
    children,
    options,
    propsUnderComponent
  } = _p, props2 = __objRest(_p, [
    "children",
    "options",
    "propsUnderComponent"
  ]);
  const [newProps, setNewProps] = useState(props2);
  const [codeText, setCodeText] = useState("");
  const [newChildren, setNewChildren] = useState(null);
  const [selected2, setSelected] = useState({ margin: "all", padding: "all" });
  const addPropsToChildren = (children2, props22) => {
    const addPropsToChild = (child, props3) => {
      if (React__default.isValidElement(child)) {
        return React__default.cloneElement(child, props3);
      } else {
        console.log("ComponentWrapper: Invalid element: ", child);
        return child;
      }
    };
    if (Array.isArray(children2)) {
      return children2.map((child, ix) => addPropsToChild(child, __spreadValues({ key: ix }, props22)));
    } else {
      return addPropsToChild(children2, props22);
    }
  };
  useEffect(() => {
    let _newProps = {};
    if (newChildren === null) {
      let _props = options.map((option, i) => ({ [option.name]: option.default }));
      for (let index = 0; index < _props.length; index++) {
        Object.assign(_newProps, _props[index]);
      }
    }
    setNewProps((prev) => __spreadValues(__spreadValues({}, prev), _newProps));
  }, [options]);
  useEffect(() => {
    setNewChildren(addPropsToChildren(children, __spreadValues({}, newProps)));
  }, [newProps]);
  useEffect(() => {
    if (newChildren) {
      let text2 = `<div>import { ${newChildren.props.mdxType} } from "neuro-ui"</div><div><br></div>`;
      let propText = "";
      const arr = Object.entries(newChildren.props);
      arr.map((value, key) => {
        let _propText = "";
        let [propName, propValue] = value;
        if (propValue === "" || propValue === false)
          return;
        if (propName === "children")
          return;
        if (propName === "mdxType" || propName === "originalType")
          return;
        if (propValue === true) {
          _propText = propName;
        } else if (typeof propValue === "object") {
          _propText = propName + "={" + JSON.stringify(propValue) + "}";
        } else if (typeof propValue === "number") {
          _propText = propName + "={" + propValue + "}";
        } else {
          _propText = propName + '={"' + propValue + '"}';
        }
        _propText = "<div> " + _propText + "</div>";
        options.forEach((option) => {
          if (option.name === propName && option.default === propValue) {
            _propText = "";
            return;
          }
        });
        propText += _propText;
        return value;
      });
      if (newChildren.props.children) {
        text2 += `&lt;${newChildren.props.mdxType}${propText}&gt;${newChildren.props.children}&lt;/${newChildren.props.mdxType}&gt;`;
      } else {
        text2 += `&lt;${newChildren.props.mdxType}${propText}/&gt;`;
      }
      setCodeText(text2);
    }
  }, [newChildren]);
  const showProps = () => {
    return options.map((option, key) => {
      switch (option.type) {
        case "bool":
          return /* @__PURE__ */ React__default.createElement("div", {
            key,
            className: scss$k.wrapper
          }, /* @__PURE__ */ React__default.createElement(Text, null, option.name, ":"), /* @__PURE__ */ React__default.createElement(Toggle, {
            value: newProps[option.name],
            onClick: (e2) => setNewProps((prev) => __spreadProps(__spreadValues({}, prev), {
              [option.name]: !prev[option.name]
            }))
          }));
        case "array":
          if (option.name === "margin" || option.name === "padding") {
            return /* @__PURE__ */ React__default.createElement("div", {
              key,
              className: scss$k.wrapper
            }, /* @__PURE__ */ React__default.createElement(Text, null, option.name, ":"), /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(Icon, {
              margin: "m",
              onClick: () => setSelected((prev) => __spreadProps(__spreadValues({}, prev), { [option.name]: "all" })),
              icon: "square"
            }), /* @__PURE__ */ React__default.createElement(Icon, {
              margin: "m",
              onClick: () => setSelected((prev) => __spreadProps(__spreadValues({}, prev), { [option.name]: "each" })),
              icon: "squareLines"
            })), option.name === "margin" && selected2.margin === "each" && /* @__PURE__ */ React__default.createElement(Input, {
              value: newProps[option.name],
              onChange: (e2) => setNewProps((prev) => __spreadProps(__spreadValues({}, prev), {
                [option.name]: e2.target.value
              })),
              placeholder: option.name
            }), option.name === "margin" && selected2.margin === "all" && /* @__PURE__ */ React__default.createElement(ButtonGroup, {
              selected: newProps[option.name],
              setSelected: (value) => {
                setNewProps((prev) => __spreadProps(__spreadValues({}, prev), {
                  [option.name]: value
                }));
              },
              defaultValue: option.default,
              buttons: option.values
            }), option.name === "padding" && selected2.padding === "each" && /* @__PURE__ */ React__default.createElement(Input, {
              value: newProps[option.name],
              onChange: (e2) => setNewProps((prev) => __spreadProps(__spreadValues({}, prev), {
                [option.name]: e2.target.value
              })),
              placeholder: option.name
            }), option.name === "padding" && selected2.padding === "all" && /* @__PURE__ */ React__default.createElement(ButtonGroup, {
              selected: newProps[option.name],
              setSelected: (value) => {
                setNewProps((prev) => __spreadProps(__spreadValues({}, prev), {
                  [option.name]: value
                }));
              },
              defaultValue: option.default,
              buttons: option.values
            }));
          }
          return /* @__PURE__ */ React__default.createElement("div", {
            key,
            className: scss$k.wrapper
          }, /* @__PURE__ */ React__default.createElement(Text, null, option.name, ":"), /* @__PURE__ */ React__default.createElement(ButtonGroup, {
            selected: newProps[option.name],
            setSelected: (value) => {
              setNewProps((prev) => __spreadProps(__spreadValues({}, prev), {
                [option.name]: value
              }));
            },
            defaultValue: option.default,
            buttons: option.values
          }));
        case "string":
          return /* @__PURE__ */ React__default.createElement("div", {
            key,
            className: scss$k.wrapper
          }, /* @__PURE__ */ React__default.createElement(Text, null, option.name, ":"), /* @__PURE__ */ React__default.createElement(Input, {
            value: newProps[option.name],
            onChange: (e2) => setNewProps((prev) => __spreadProps(__spreadValues({}, prev), {
              [option.name]: e2.target.value
            })),
            placeholder: option.name
          }));
      }
    });
  };
  return /* @__PURE__ */ React__default.createElement("div", {
    className: propsUnderComponent ? scss$k.componentWrapper + " " + scss$k.componentWrapperFlex : scss$k.componentWrapper
  }, /* @__PURE__ */ React__default.createElement("div", {
    className: scss$k.component
  }, newChildren && newChildren), /* @__PURE__ */ React__default.createElement("div", {
    className: scss$k.props
  }, newChildren && /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(Text, {
    scale: "l"
  }, "Props"), " ", showProps())), /* @__PURE__ */ React__default.createElement("div", {
    className: scss$k.code
  }, codeText && /* @__PURE__ */ React__default.createElement(Code, null, codeText.toString())));
}
const menu = "_menu_1cyel_1";
var scss$j = {
  menu
};
const ContextMenu = ({
  children,
  menu: menu2,
  open: open2,
  setOpen,
  location,
  setLocation,
  isDisabled
}) => {
  const menuRef = useRef(null);
  useEffect(() => {
    if (isDisabled)
      setOpen(false);
  }, [isDisabled]);
  const handleClick = (e2) => {
    if (isDisabled)
      return;
    setOpen(true);
    setLocation({ x: e2.pageX, y: e2.pageY });
  };
  const onClickOff = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", onClickOff);
    return () => {
      document.removeEventListener("mousedown", onClickOff);
    };
  }, []);
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, React__default.cloneElement(children, {
    onContextMenu: (event) => {
      event.preventDefault();
      handleClick(event);
    }
  }), open2 ? /* @__PURE__ */ React__default.createElement("div", {
    style: { left: location.x, top: location.y },
    ref: menuRef,
    className: scss$j.menu
  }, menu2) : null);
};
const fontS$e = "_fontS_sqqd0_1";
const fontM$e = "_fontM_sqqd0_6";
const fontL$e = "_fontL_sqqd0_11";
const fontXL$e = "_fontXL_sqqd0_16";
const weightLight$e = "_weightLight_sqqd0_21";
const weightNormal$e = "_weightNormal_sqqd0_26";
const weightBold$e = "_weightBold_sqqd0_31";
const disabled$e = "_disabled_sqqd0_36";
const error$e = "_error_sqqd0_45";
const errorMessage$e = "_errorMessage_sqqd0_49";
const pointer$e = "_pointer_sqqd0_54";
const loading$e = "_loading_sqqd0_58";
const loadingAnimationOpacity$e = "_loadingAnimationOpacity_sqqd0_1";
const loadingAnimation$e = "_loadingAnimation_sqqd0_1";
const margin0$e = "_margin0_sqqd0_94";
const marginS$e = "_marginS_sqqd0_98";
const marginM$e = "_marginM_sqqd0_102";
const marginL$e = "_marginL_sqqd0_106";
const marginXL$e = "_marginXL_sqqd0_110";
const marginTop0$e = "_marginTop0_sqqd0_114";
const marginTopS$e = "_marginTopS_sqqd0_118";
const marginTopM$e = "_marginTopM_sqqd0_122";
const marginTopL$e = "_marginTopL_sqqd0_126";
const marginTopXL$e = "_marginTopXL_sqqd0_130";
const marginRight0$e = "_marginRight0_sqqd0_134";
const marginRightS$e = "_marginRightS_sqqd0_138";
const marginRightM$e = "_marginRightM_sqqd0_142";
const marginRightL$e = "_marginRightL_sqqd0_146";
const marginRightXL$e = "_marginRightXL_sqqd0_150";
const marginBottom0$e = "_marginBottom0_sqqd0_154";
const marginBottomS$e = "_marginBottomS_sqqd0_158";
const marginBottomM$e = "_marginBottomM_sqqd0_162";
const marginBottomL$e = "_marginBottomL_sqqd0_166";
const marginBottomXL$e = "_marginBottomXL_sqqd0_170";
const marginLeft0$e = "_marginLeft0_sqqd0_174";
const marginLeftS$e = "_marginLeftS_sqqd0_178";
const marginLeftM$e = "_marginLeftM_sqqd0_182";
const marginLeftL$e = "_marginLeftL_sqqd0_186";
const marginLeftXL$e = "_marginLeftXL_sqqd0_190";
const padding0$e = "_padding0_sqqd0_194";
const paddingS$e = "_paddingS_sqqd0_198";
const paddingM$e = "_paddingM_sqqd0_202";
const paddingL$e = "_paddingL_sqqd0_206";
const paddingXL$e = "_paddingXL_sqqd0_210";
const paddingTop0$e = "_paddingTop0_sqqd0_214";
const paddingTopS$e = "_paddingTopS_sqqd0_218";
const paddingTopM$e = "_paddingTopM_sqqd0_222";
const paddingTopL$e = "_paddingTopL_sqqd0_226";
const paddingTopXL$e = "_paddingTopXL_sqqd0_230";
const paddingRight0$e = "_paddingRight0_sqqd0_234";
const paddingRightS$e = "_paddingRightS_sqqd0_238";
const paddingRightM$e = "_paddingRightM_sqqd0_242";
const paddingRightL$e = "_paddingRightL_sqqd0_246";
const paddingRightXL$e = "_paddingRightXL_sqqd0_250";
const paddingBottom0$e = "_paddingBottom0_sqqd0_254";
const paddingBottomS$e = "_paddingBottomS_sqqd0_258";
const paddingBottomM$e = "_paddingBottomM_sqqd0_262";
const paddingBottomL$e = "_paddingBottomL_sqqd0_266";
const paddingBottomXL$e = "_paddingBottomXL_sqqd0_270";
const paddingLeft0$e = "_paddingLeft0_sqqd0_274";
const paddingLeftS$e = "_paddingLeftS_sqqd0_278";
const paddingLeftM$e = "_paddingLeftM_sqqd0_282";
const paddingLeftL$e = "_paddingLeftL_sqqd0_286";
const paddingLeftXL$e = "_paddingLeftXL_sqqd0_290";
const grid = "_grid_sqqd0_310";
const center = "_center_sqqd0_320";
var scss$i = {
  fontS: fontS$e,
  fontM: fontM$e,
  fontL: fontL$e,
  fontXL: fontXL$e,
  weightLight: weightLight$e,
  weightNormal: weightNormal$e,
  weightBold: weightBold$e,
  disabled: disabled$e,
  error: error$e,
  errorMessage: errorMessage$e,
  pointer: pointer$e,
  loading: loading$e,
  loadingAnimationOpacity: loadingAnimationOpacity$e,
  loadingAnimation: loadingAnimation$e,
  margin0: margin0$e,
  marginS: marginS$e,
  marginM: marginM$e,
  marginL: marginL$e,
  marginXL: marginXL$e,
  marginTop0: marginTop0$e,
  marginTopS: marginTopS$e,
  marginTopM: marginTopM$e,
  marginTopL: marginTopL$e,
  marginTopXL: marginTopXL$e,
  marginRight0: marginRight0$e,
  marginRightS: marginRightS$e,
  marginRightM: marginRightM$e,
  marginRightL: marginRightL$e,
  marginRightXL: marginRightXL$e,
  marginBottom0: marginBottom0$e,
  marginBottomS: marginBottomS$e,
  marginBottomM: marginBottomM$e,
  marginBottomL: marginBottomL$e,
  marginBottomXL: marginBottomXL$e,
  marginLeft0: marginLeft0$e,
  marginLeftS: marginLeftS$e,
  marginLeftM: marginLeftM$e,
  marginLeftL: marginLeftL$e,
  marginLeftXL: marginLeftXL$e,
  padding0: padding0$e,
  paddingS: paddingS$e,
  paddingM: paddingM$e,
  paddingL: paddingL$e,
  paddingXL: paddingXL$e,
  paddingTop0: paddingTop0$e,
  paddingTopS: paddingTopS$e,
  paddingTopM: paddingTopM$e,
  paddingTopL: paddingTopL$e,
  paddingTopXL: paddingTopXL$e,
  paddingRight0: paddingRight0$e,
  paddingRightS: paddingRightS$e,
  paddingRightM: paddingRightM$e,
  paddingRightL: paddingRightL$e,
  paddingRightXL: paddingRightXL$e,
  paddingBottom0: paddingBottom0$e,
  paddingBottomS: paddingBottomS$e,
  paddingBottomM: paddingBottomM$e,
  paddingBottomL: paddingBottomL$e,
  paddingBottomXL: paddingBottomXL$e,
  paddingLeft0: paddingLeft0$e,
  paddingLeftS: paddingLeftS$e,
  paddingLeftM: paddingLeftM$e,
  paddingLeftL: paddingLeftL$e,
  paddingLeftXL: paddingLeftXL$e,
  "backgroundColor--primary": "_backgroundColor--primary_sqqd0_294",
  "backgroundColor--text100": "_backgroundColor--text100_sqqd0_298",
  "color--primary": "_color--primary_sqqd0_302",
  "color--text100": "_color--text100_sqqd0_306",
  grid,
  center
};
const Grid = (_q) => {
  var _r = _q, { children, center: center2 } = _r, props2 = __objRest(_r, ["children", "center"]);
  const getClassNames = () => {
    let className = _getClassNames(__spreadValues({
      parent: scss$i.grid,
      scss: scss$i
    }, props2));
    if (center2)
      className.push(scss$i.center);
    return className.join(" ");
  };
  return /* @__PURE__ */ React__default.createElement("div", __spreadProps(__spreadValues({}, props2), {
    "data-testid": "Grid",
    className: getClassNames()
  }), children);
};
const fontS$d = "_fontS_d4d87_1";
const fontM$d = "_fontM_d4d87_6";
const fontL$d = "_fontL_d4d87_11";
const fontXL$d = "_fontXL_d4d87_16";
const weightLight$d = "_weightLight_d4d87_21";
const weightNormal$d = "_weightNormal_d4d87_26";
const weightBold$d = "_weightBold_d4d87_31";
const disabled$d = "_disabled_d4d87_36";
const error$d = "_error_d4d87_45";
const errorMessage$d = "_errorMessage_d4d87_49";
const pointer$d = "_pointer_d4d87_54";
const loading$d = "_loading_d4d87_58";
const loadingAnimationOpacity$d = "_loadingAnimationOpacity_d4d87_1";
const loadingAnimation$d = "_loadingAnimation_d4d87_1";
const margin0$d = "_margin0_d4d87_94";
const marginS$d = "_marginS_d4d87_98";
const marginM$d = "_marginM_d4d87_102";
const marginL$d = "_marginL_d4d87_106";
const marginXL$d = "_marginXL_d4d87_110";
const marginTop0$d = "_marginTop0_d4d87_114";
const marginTopS$d = "_marginTopS_d4d87_118";
const marginTopM$d = "_marginTopM_d4d87_122";
const marginTopL$d = "_marginTopL_d4d87_126";
const marginTopXL$d = "_marginTopXL_d4d87_130";
const marginRight0$d = "_marginRight0_d4d87_134";
const marginRightS$d = "_marginRightS_d4d87_138";
const marginRightM$d = "_marginRightM_d4d87_142";
const marginRightL$d = "_marginRightL_d4d87_146";
const marginRightXL$d = "_marginRightXL_d4d87_150";
const marginBottom0$d = "_marginBottom0_d4d87_154";
const marginBottomS$d = "_marginBottomS_d4d87_158";
const marginBottomM$d = "_marginBottomM_d4d87_162";
const marginBottomL$d = "_marginBottomL_d4d87_166";
const marginBottomXL$d = "_marginBottomXL_d4d87_170";
const marginLeft0$d = "_marginLeft0_d4d87_174";
const marginLeftS$d = "_marginLeftS_d4d87_178";
const marginLeftM$d = "_marginLeftM_d4d87_182";
const marginLeftL$d = "_marginLeftL_d4d87_186";
const marginLeftXL$d = "_marginLeftXL_d4d87_190";
const padding0$d = "_padding0_d4d87_194";
const paddingS$d = "_paddingS_d4d87_198";
const paddingM$d = "_paddingM_d4d87_202";
const paddingL$d = "_paddingL_d4d87_206";
const paddingXL$d = "_paddingXL_d4d87_210";
const paddingTop0$d = "_paddingTop0_d4d87_214";
const paddingTopS$d = "_paddingTopS_d4d87_218";
const paddingTopM$d = "_paddingTopM_d4d87_222";
const paddingTopL$d = "_paddingTopL_d4d87_226";
const paddingTopXL$d = "_paddingTopXL_d4d87_230";
const paddingRight0$d = "_paddingRight0_d4d87_234";
const paddingRightS$d = "_paddingRightS_d4d87_238";
const paddingRightM$d = "_paddingRightM_d4d87_242";
const paddingRightL$d = "_paddingRightL_d4d87_246";
const paddingRightXL$d = "_paddingRightXL_d4d87_250";
const paddingBottom0$d = "_paddingBottom0_d4d87_254";
const paddingBottomS$d = "_paddingBottomS_d4d87_258";
const paddingBottomM$d = "_paddingBottomM_d4d87_262";
const paddingBottomL$d = "_paddingBottomL_d4d87_266";
const paddingBottomXL$d = "_paddingBottomXL_d4d87_270";
const paddingLeft0$d = "_paddingLeft0_d4d87_274";
const paddingLeftS$d = "_paddingLeftS_d4d87_278";
const paddingLeftM$d = "_paddingLeftM_d4d87_282";
const paddingLeftL$d = "_paddingLeftL_d4d87_286";
const paddingLeftXL$d = "_paddingLeftXL_d4d87_290";
const icon$3 = "_icon_d4d87_310";
const animation = "_animation_d4d87_317";
const weightMedium = "_weightMedium_d4d87_342";
var scss$h = {
  fontS: fontS$d,
  fontM: fontM$d,
  fontL: fontL$d,
  fontXL: fontXL$d,
  weightLight: weightLight$d,
  weightNormal: weightNormal$d,
  weightBold: weightBold$d,
  disabled: disabled$d,
  error: error$d,
  errorMessage: errorMessage$d,
  pointer: pointer$d,
  loading: loading$d,
  loadingAnimationOpacity: loadingAnimationOpacity$d,
  loadingAnimation: loadingAnimation$d,
  margin0: margin0$d,
  marginS: marginS$d,
  marginM: marginM$d,
  marginL: marginL$d,
  marginXL: marginXL$d,
  marginTop0: marginTop0$d,
  marginTopS: marginTopS$d,
  marginTopM: marginTopM$d,
  marginTopL: marginTopL$d,
  marginTopXL: marginTopXL$d,
  marginRight0: marginRight0$d,
  marginRightS: marginRightS$d,
  marginRightM: marginRightM$d,
  marginRightL: marginRightL$d,
  marginRightXL: marginRightXL$d,
  marginBottom0: marginBottom0$d,
  marginBottomS: marginBottomS$d,
  marginBottomM: marginBottomM$d,
  marginBottomL: marginBottomL$d,
  marginBottomXL: marginBottomXL$d,
  marginLeft0: marginLeft0$d,
  marginLeftS: marginLeftS$d,
  marginLeftM: marginLeftM$d,
  marginLeftL: marginLeftL$d,
  marginLeftXL: marginLeftXL$d,
  padding0: padding0$d,
  paddingS: paddingS$d,
  paddingM: paddingM$d,
  paddingL: paddingL$d,
  paddingXL: paddingXL$d,
  paddingTop0: paddingTop0$d,
  paddingTopS: paddingTopS$d,
  paddingTopM: paddingTopM$d,
  paddingTopL: paddingTopL$d,
  paddingTopXL: paddingTopXL$d,
  paddingRight0: paddingRight0$d,
  paddingRightS: paddingRightS$d,
  paddingRightM: paddingRightM$d,
  paddingRightL: paddingRightL$d,
  paddingRightXL: paddingRightXL$d,
  paddingBottom0: paddingBottom0$d,
  paddingBottomS: paddingBottomS$d,
  paddingBottomM: paddingBottomM$d,
  paddingBottomL: paddingBottomL$d,
  paddingBottomXL: paddingBottomXL$d,
  paddingLeft0: paddingLeft0$d,
  paddingLeftS: paddingLeftS$d,
  paddingLeftM: paddingLeftM$d,
  paddingLeftL: paddingLeftL$d,
  paddingLeftXL: paddingLeftXL$d,
  "backgroundColor--primary": "_backgroundColor--primary_d4d87_294",
  "backgroundColor--text100": "_backgroundColor--text100_d4d87_298",
  "color--primary": "_color--primary_d4d87_302",
  "color--text100": "_color--text100_d4d87_306",
  icon: icon$3,
  animation,
  weightMedium
};
const Icon = (_s) => {
  var _t = _s, { icon: icon2, color: color2 } = _t, props2 = __objRest(_t, ["icon", "color"]);
  const getClassNames = () => {
    let className = _getClassNames(__spreadValues({ parent: scss$h.icon, scss: scss$h }, props2));
    return className.join(" ");
  };
  const returnSVG = () => {
    switch (icon2) {
      case "add":
        return /* @__PURE__ */ React__default.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "8.423",
          height: "8.423",
          viewBox: "0 0 8.423 8.423"
        }, /* @__PURE__ */ React__default.createElement("g", {
          id: "Component_33_1",
          "data-name": "Component 33 \u2013 1",
          transform: "translate(1 1)"
        }, /* @__PURE__ */ React__default.createElement("line", {
          id: "Line_845",
          "data-name": "Line 845",
          x2: "6.423",
          transform: "translate(0 3.211)",
          fill: "none",
          stroke: color2,
          strokeLinecap: "round",
          strokeWidth: "2"
        }), /* @__PURE__ */ React__default.createElement("line", {
          id: "Line_846",
          "data-name": "Line 846",
          x2: "6.423",
          transform: "translate(3.211) rotate(90)",
          fill: "none",
          stroke: color2,
          strokeLinecap: "round",
          strokeWidth: "2"
        })));
      case "itemMenu":
        return /* @__PURE__ */ React__default.createElement("svg", {
          id: "Component_31",
          "data-name": "Component 31",
          xmlns: "http://www.w3.org/2000/svg",
          width: "3",
          height: "13",
          viewBox: "0 0 3 13"
        }, /* @__PURE__ */ React__default.createElement("circle", {
          id: "Ellipse_1201",
          "data-name": "Ellipse 1201",
          cx: "1.5",
          cy: "1.5",
          r: "1.5",
          transform: "translate(3) rotate(90)",
          fill: "var(--text200)"
        }), /* @__PURE__ */ React__default.createElement("circle", {
          id: "Ellipse_1202",
          "data-name": "Ellipse 1202",
          cx: "1.5",
          cy: "1.5",
          r: "1.5",
          transform: "translate(3 5) rotate(90)",
          fill: "var(--text200)"
        }), /* @__PURE__ */ React__default.createElement("circle", {
          id: "Ellipse_1203",
          "data-name": "Ellipse 1203",
          cx: "1.5",
          cy: "1.5",
          r: "1.5",
          transform: "translate(3 10) rotate(90)",
          fill: "var(--text200)"
        }));
      case "arrow":
        return /* @__PURE__ */ React__default.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "8.523",
          height: "11.831",
          viewBox: "0 0 8.523 11.831"
        }, /* @__PURE__ */ React__default.createElement("line", {
          id: "Line_867",
          "data-name": "Line 867",
          x2: "3.798",
          y2: "4.288",
          transform: "translate(2.117 9.714) rotate(-90)",
          fill: "none",
          stroke: "#a7a8a8",
          strokeLinecap: "round",
          strokeWidth: "3"
        }), /* @__PURE__ */ React__default.createElement("line", {
          id: "Line_868",
          "data-name": "Line 868",
          x1: "3.798",
          y2: "4.288",
          transform: "translate(2.117 5.916) rotate(-90)",
          fill: "none",
          stroke: "#a7a8a8",
          strokeLinecap: "round",
          strokeWidth: "3"
        }));
      case "cross":
        return /* @__PURE__ */ React__default.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "11.839",
          height: "11.839",
          viewBox: "0 0 11.839 11.839"
        }, /* @__PURE__ */ React__default.createElement("line", {
          id: "Line_869",
          "data-name": "Line 869",
          y2: "10.742",
          transform: "translate(9.717 2.122) rotate(45)",
          fill: "none",
          stroke: "var(--text200)",
          strokeLinecap: "round",
          strokeWidth: "3"
        }), /* @__PURE__ */ React__default.createElement("line", {
          id: "Line_870",
          "data-name": "Line 870",
          y2: "10.742",
          transform: "translate(9.717 9.717) rotate(135)",
          fill: "none",
          stroke: "var(--text200)",
          strokeLinecap: "round",
          strokeWidth: "3"
        }));
      case "edit":
        return /* @__PURE__ */ React__default.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "11.756",
          height: "11.756",
          viewBox: "0 0 11.756 11.756"
        }, /* @__PURE__ */ React__default.createElement("path", {
          id: "Icon_material-edit",
          "data-name": "Icon material-edit",
          d: "M4.5,13.8v2.449H6.949L14.171,9.03,11.722,6.581ZM16.065,7.136a.65.65,0,0,0,0-.921L14.537,4.687a.65.65,0,0,0-.921,0l-1.2,1.2L14.87,8.331Z",
          transform: "translate(-4.5 -4.496)",
          fill: "var(--text200)"
        }));
      case "remove":
        return /* @__PURE__ */ React__default.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "12.281",
          height: "12.281",
          viewBox: "0 0 12.281 12.281"
        }, /* @__PURE__ */ React__default.createElement("path", {
          id: "Icon_material-remove-circle",
          "data-name": "Icon material-remove-circle",
          d: "M9.141,3a6.141,6.141,0,1,0,6.141,6.141A6.143,6.143,0,0,0,9.141,3Zm3.07,6.755H6.07V8.527h6.141Z",
          transform: "translate(-3 -3)",
          fill: "var(--text200)"
        }));
      case "lock":
        return /* @__PURE__ */ React__default.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "11.92",
          height: "13.623",
          viewBox: "0 0 11.92 13.623"
        }, /* @__PURE__ */ React__default.createElement("path", {
          id: "Icon_awesome-lock",
          "data-name": "Icon awesome-lock",
          d: "M10.643,5.96H10V4.044a4.044,4.044,0,1,0-8.089,0V5.96H1.277A1.277,1.277,0,0,0,0,7.237v5.109a1.277,1.277,0,0,0,1.277,1.277h9.366a1.277,1.277,0,0,0,1.277-1.277V7.237A1.277,1.277,0,0,0,10.643,5.96Zm-2.767,0H4.044V4.044a1.916,1.916,0,0,1,3.831,0Z",
          fill: "var(--text200)"
        }));
      case "eye":
        return /* @__PURE__ */ React__default.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "18",
          height: "11.927",
          viewBox: "0 0 18 11.927"
        }, /* @__PURE__ */ React__default.createElement("path", {
          id: "Path_1084",
          "data-name": "Path 1084",
          d: "M17.892,69.51A10.029,10.029,0,0,0,9,64,10.031,10.031,0,0,0,.109,69.51a1,1,0,0,0,0,.907A10.029,10.029,0,0,0,9,75.927a10.031,10.031,0,0,0,8.891-5.51,1,1,0,0,0,0-.907ZM9,74.436a4.473,4.473,0,1,1,4.5-4.473A4.486,4.486,0,0,1,9,74.436Zm0-7.454a3,3,0,0,0-.791.118,1.479,1.479,0,0,1-.147,1.932,1.5,1.5,0,0,1-1.944.146,2.966,2.966,0,0,0,1.221,3.25,3.008,3.008,0,0,0,3.489-.11A2.972,2.972,0,0,0,9,66.982Z",
          transform: "translate(-0.001 -64)",
          fill: "var(--text200)"
        }));
      case "eyeClosed":
        return /* @__PURE__ */ React__default.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "20.033",
          height: "16.027",
          viewBox: "0 0 20.033 16.027"
        }, /* @__PURE__ */ React__default.createElement("path", {
          id: "Path_1085",
          "data-name": "Path 1085",
          d: "M10.018,12.517A4.491,4.491,0,0,1,5.545,8.351L2.261,5.813a10.433,10.433,0,0,0-1.149,1.74,1.013,1.013,0,0,0,0,.914,10.04,10.04,0,0,0,8.906,5.553,9.723,9.723,0,0,0,2.438-.327l-1.624-1.257A4.512,4.512,0,0,1,10.018,12.517Zm9.823,1.819-3.46-2.674a10.369,10.369,0,0,0,2.543-3.195,1.013,1.013,0,0,0,0-.914A10.04,10.04,0,0,0,10.018,2,9.646,9.646,0,0,0,5.407,3.18L1.424.1a.5.5,0,0,0-.7.088L.107.981a.5.5,0,0,0,.088.7L18.612,15.918a.5.5,0,0,0,.7-.088l.615-.791A.5.5,0,0,0,19.841,14.336ZM14.09,9.891,12.86,8.94A2.966,2.966,0,0,0,9.226,5.124a1.492,1.492,0,0,1,.291.883,1.46,1.46,0,0,1-.048.313l-2.3-1.781A4.455,4.455,0,0,1,10.018,3.5,4.5,4.5,0,0,1,14.525,8.01a4.4,4.4,0,0,1-.435,1.882Z",
          transform: "translate(-0.001 0.003)",
          fill: "var(--text200)"
        }));
      case "copy":
        return /* @__PURE__ */ React__default.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "12.759",
          height: "14.582",
          viewBox: "0 0 12.759 14.582"
        }, /* @__PURE__ */ React__default.createElement("path", {
          id: "Icon_awesome-copy",
          "data-name": "Icon awesome-copy",
          d: "M9.114,12.759V13.9a.684.684,0,0,1-.684.684H.684A.684.684,0,0,1,0,13.9V3.418a.684.684,0,0,1,.684-.684H2.734v8.43a1.6,1.6,0,0,0,1.595,1.595Zm0-9.8V0H4.329a.684.684,0,0,0-.684.684V11.164a.684.684,0,0,0,.684.684h7.747a.684.684,0,0,0,.684-.684V3.646H9.8A.686.686,0,0,1,9.114,2.962Zm3.445-.884L10.681.2A.684.684,0,0,0,10.2,0h-.173V2.734h2.734V2.562a.684.684,0,0,0-.2-.483Z",
          fill: "var(--text200)"
        }));
      case "square":
        return /* @__PURE__ */ React__default.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "20",
          height: "20",
          viewBox: "0 0 20 20"
        }, /* @__PURE__ */ React__default.createElement("g", {
          id: "Rectangle_6648",
          "data-name": "Rectangle 6648",
          fill: "none",
          stroke: "#a7a8a8",
          strokeWidth: "2"
        }, /* @__PURE__ */ React__default.createElement("rect", {
          width: "20",
          height: "20",
          rx: "5",
          stroke: "none"
        }), /* @__PURE__ */ React__default.createElement("rect", {
          x: "1",
          y: "1",
          width: "18",
          height: "18",
          rx: "4",
          fill: "none"
        })));
      case "squareLines":
        return /* @__PURE__ */ React__default.createElement("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "20",
          height: "20",
          viewBox: "0 0 20 20"
        }, /* @__PURE__ */ React__default.createElement("g", {
          id: "Component_33_15",
          "data-name": "Component 33 \u2013 15",
          transform: "translate(1 1)"
        }, /* @__PURE__ */ React__default.createElement("path", {
          id: "top",
          "data-name": "Path 1156",
          d: "M1.711-.785h9.336",
          transform: "translate(2.621 18.785)",
          fill: "none",
          stroke: "#a7a8a8",
          strokeLinecap: "round",
          strokeWidth: "2"
        }), /* @__PURE__ */ React__default.createElement("path", {
          id: "right",
          "data-name": "Path 1157",
          d: "M0,0H9.336",
          transform: "translate(18 4.332) rotate(90)",
          fill: "none",
          stroke: "#a7a8a8",
          strokeLinecap: "round",
          strokeWidth: "2"
        }), /* @__PURE__ */ React__default.createElement("path", {
          id: "bottom",
          "data-name": "Path 1158",
          d: "M1.711-.785h9.336",
          transform: "translate(2.621 0.785)",
          fill: "none",
          stroke: "#a7a8a8",
          strokeLinecap: "round",
          strokeWidth: "2"
        }), /* @__PURE__ */ React__default.createElement("path", {
          id: "left",
          "data-name": "Path 1159",
          d: "M0,0H9.336",
          transform: "translate(0 4.332) rotate(90)",
          fill: "none",
          stroke: "#a7a8a8",
          strokeLinecap: "round",
          strokeWidth: "2"
        })));
      default:
        return /* @__PURE__ */ React__default.createElement("svg", null);
    }
  };
  return /* @__PURE__ */ React__default.createElement("div", __spreadProps(__spreadValues({}, props2), {
    className: getClassNames()
  }), returnSVG());
};
const fontS$c = "_fontS_1ml6e_1";
const fontM$c = "_fontM_1ml6e_6";
const fontL$c = "_fontL_1ml6e_11";
const fontXL$c = "_fontXL_1ml6e_16";
const weightLight$c = "_weightLight_1ml6e_21";
const weightNormal$c = "_weightNormal_1ml6e_26";
const weightBold$c = "_weightBold_1ml6e_31";
const disabled$c = "_disabled_1ml6e_36";
const error$c = "_error_1ml6e_45";
const errorMessage$c = "_errorMessage_1ml6e_49";
const pointer$c = "_pointer_1ml6e_54";
const loading$c = "_loading_1ml6e_58";
const loadingAnimationOpacity$c = "_loadingAnimationOpacity_1ml6e_1";
const loadingAnimation$c = "_loadingAnimation_1ml6e_1";
const margin0$c = "_margin0_1ml6e_94";
const marginS$c = "_marginS_1ml6e_98";
const marginM$c = "_marginM_1ml6e_102";
const marginL$c = "_marginL_1ml6e_106";
const marginXL$c = "_marginXL_1ml6e_110";
const marginTop0$c = "_marginTop0_1ml6e_114";
const marginTopS$c = "_marginTopS_1ml6e_118";
const marginTopM$c = "_marginTopM_1ml6e_122";
const marginTopL$c = "_marginTopL_1ml6e_126";
const marginTopXL$c = "_marginTopXL_1ml6e_130";
const marginRight0$c = "_marginRight0_1ml6e_134";
const marginRightS$c = "_marginRightS_1ml6e_138";
const marginRightM$c = "_marginRightM_1ml6e_142";
const marginRightL$c = "_marginRightL_1ml6e_146";
const marginRightXL$c = "_marginRightXL_1ml6e_150";
const marginBottom0$c = "_marginBottom0_1ml6e_154";
const marginBottomS$c = "_marginBottomS_1ml6e_158";
const marginBottomM$c = "_marginBottomM_1ml6e_162";
const marginBottomL$c = "_marginBottomL_1ml6e_166";
const marginBottomXL$c = "_marginBottomXL_1ml6e_170";
const marginLeft0$c = "_marginLeft0_1ml6e_174";
const marginLeftS$c = "_marginLeftS_1ml6e_178";
const marginLeftM$c = "_marginLeftM_1ml6e_182";
const marginLeftL$c = "_marginLeftL_1ml6e_186";
const marginLeftXL$c = "_marginLeftXL_1ml6e_190";
const padding0$c = "_padding0_1ml6e_194";
const paddingS$c = "_paddingS_1ml6e_198";
const paddingM$c = "_paddingM_1ml6e_202";
const paddingL$c = "_paddingL_1ml6e_206";
const paddingXL$c = "_paddingXL_1ml6e_210";
const paddingTop0$c = "_paddingTop0_1ml6e_214";
const paddingTopS$c = "_paddingTopS_1ml6e_218";
const paddingTopM$c = "_paddingTopM_1ml6e_222";
const paddingTopL$c = "_paddingTopL_1ml6e_226";
const paddingTopXL$c = "_paddingTopXL_1ml6e_230";
const paddingRight0$c = "_paddingRight0_1ml6e_234";
const paddingRightS$c = "_paddingRightS_1ml6e_238";
const paddingRightM$c = "_paddingRightM_1ml6e_242";
const paddingRightL$c = "_paddingRightL_1ml6e_246";
const paddingRightXL$c = "_paddingRightXL_1ml6e_250";
const paddingBottom0$c = "_paddingBottom0_1ml6e_254";
const paddingBottomS$c = "_paddingBottomS_1ml6e_258";
const paddingBottomM$c = "_paddingBottomM_1ml6e_262";
const paddingBottomL$c = "_paddingBottomL_1ml6e_266";
const paddingBottomXL$c = "_paddingBottomXL_1ml6e_270";
const paddingLeft0$c = "_paddingLeft0_1ml6e_274";
const paddingLeftS$c = "_paddingLeftS_1ml6e_278";
const paddingLeftM$c = "_paddingLeftM_1ml6e_282";
const paddingLeftL$c = "_paddingLeftL_1ml6e_286";
const paddingLeftXL$c = "_paddingLeftXL_1ml6e_290";
const image = "_image_1ml6e_310";
var scss$g = {
  fontS: fontS$c,
  fontM: fontM$c,
  fontL: fontL$c,
  fontXL: fontXL$c,
  weightLight: weightLight$c,
  weightNormal: weightNormal$c,
  weightBold: weightBold$c,
  disabled: disabled$c,
  error: error$c,
  errorMessage: errorMessage$c,
  pointer: pointer$c,
  loading: loading$c,
  loadingAnimationOpacity: loadingAnimationOpacity$c,
  loadingAnimation: loadingAnimation$c,
  margin0: margin0$c,
  marginS: marginS$c,
  marginM: marginM$c,
  marginL: marginL$c,
  marginXL: marginXL$c,
  marginTop0: marginTop0$c,
  marginTopS: marginTopS$c,
  marginTopM: marginTopM$c,
  marginTopL: marginTopL$c,
  marginTopXL: marginTopXL$c,
  marginRight0: marginRight0$c,
  marginRightS: marginRightS$c,
  marginRightM: marginRightM$c,
  marginRightL: marginRightL$c,
  marginRightXL: marginRightXL$c,
  marginBottom0: marginBottom0$c,
  marginBottomS: marginBottomS$c,
  marginBottomM: marginBottomM$c,
  marginBottomL: marginBottomL$c,
  marginBottomXL: marginBottomXL$c,
  marginLeft0: marginLeft0$c,
  marginLeftS: marginLeftS$c,
  marginLeftM: marginLeftM$c,
  marginLeftL: marginLeftL$c,
  marginLeftXL: marginLeftXL$c,
  padding0: padding0$c,
  paddingS: paddingS$c,
  paddingM: paddingM$c,
  paddingL: paddingL$c,
  paddingXL: paddingXL$c,
  paddingTop0: paddingTop0$c,
  paddingTopS: paddingTopS$c,
  paddingTopM: paddingTopM$c,
  paddingTopL: paddingTopL$c,
  paddingTopXL: paddingTopXL$c,
  paddingRight0: paddingRight0$c,
  paddingRightS: paddingRightS$c,
  paddingRightM: paddingRightM$c,
  paddingRightL: paddingRightL$c,
  paddingRightXL: paddingRightXL$c,
  paddingBottom0: paddingBottom0$c,
  paddingBottomS: paddingBottomS$c,
  paddingBottomM: paddingBottomM$c,
  paddingBottomL: paddingBottomL$c,
  paddingBottomXL: paddingBottomXL$c,
  paddingLeft0: paddingLeft0$c,
  paddingLeftS: paddingLeftS$c,
  paddingLeftM: paddingLeftM$c,
  paddingLeftL: paddingLeftL$c,
  paddingLeftXL: paddingLeftXL$c,
  "backgroundColor--primary": "_backgroundColor--primary_1ml6e_294",
  "backgroundColor--text100": "_backgroundColor--text100_1ml6e_298",
  "color--primary": "_color--primary_1ml6e_302",
  "color--text100": "_color--text100_1ml6e_306",
  image
};
const Image = (_u) => {
  var _v = _u, { src } = _v, props2 = __objRest(_v, ["src"]);
  const getClassNames = () => {
    let className = _getClassNames(__spreadValues({
      parent: scss$g.image,
      scss: scss$g
    }, props2));
    return className.join(" ");
  };
  return /* @__PURE__ */ React__default.createElement("img", {
    loading: "lazy",
    src,
    "data-testid": "Image",
    className: getClassNames()
  });
};
const fontS$b = "_fontS_1kesl_1";
const fontM$b = "_fontM_1kesl_6";
const fontL$b = "_fontL_1kesl_11";
const fontXL$b = "_fontXL_1kesl_16";
const weightLight$b = "_weightLight_1kesl_21";
const weightNormal$b = "_weightNormal_1kesl_26";
const weightBold$b = "_weightBold_1kesl_31";
const disabled$b = "_disabled_1kesl_36";
const error$b = "_error_1kesl_45";
const errorMessage$b = "_errorMessage_1kesl_49";
const pointer$b = "_pointer_1kesl_54";
const loading$b = "_loading_1kesl_58";
const loadingAnimationOpacity$b = "_loadingAnimationOpacity_1kesl_1";
const loadingAnimation$b = "_loadingAnimation_1kesl_1";
const margin0$b = "_margin0_1kesl_94";
const marginS$b = "_marginS_1kesl_98";
const marginM$b = "_marginM_1kesl_102";
const marginL$b = "_marginL_1kesl_106";
const marginXL$b = "_marginXL_1kesl_110";
const marginTop0$b = "_marginTop0_1kesl_114";
const marginTopS$b = "_marginTopS_1kesl_118";
const marginTopM$b = "_marginTopM_1kesl_122";
const marginTopL$b = "_marginTopL_1kesl_126";
const marginTopXL$b = "_marginTopXL_1kesl_130";
const marginRight0$b = "_marginRight0_1kesl_134";
const marginRightS$b = "_marginRightS_1kesl_138";
const marginRightM$b = "_marginRightM_1kesl_142";
const marginRightL$b = "_marginRightL_1kesl_146";
const marginRightXL$b = "_marginRightXL_1kesl_150";
const marginBottom0$b = "_marginBottom0_1kesl_154";
const marginBottomS$b = "_marginBottomS_1kesl_158";
const marginBottomM$b = "_marginBottomM_1kesl_162";
const marginBottomL$b = "_marginBottomL_1kesl_166";
const marginBottomXL$b = "_marginBottomXL_1kesl_170";
const marginLeft0$b = "_marginLeft0_1kesl_174";
const marginLeftS$b = "_marginLeftS_1kesl_178";
const marginLeftM$b = "_marginLeftM_1kesl_182";
const marginLeftL$b = "_marginLeftL_1kesl_186";
const marginLeftXL$b = "_marginLeftXL_1kesl_190";
const padding0$b = "_padding0_1kesl_194";
const paddingS$b = "_paddingS_1kesl_198";
const paddingM$b = "_paddingM_1kesl_202";
const paddingL$b = "_paddingL_1kesl_206";
const paddingXL$b = "_paddingXL_1kesl_210";
const paddingTop0$b = "_paddingTop0_1kesl_214";
const paddingTopS$b = "_paddingTopS_1kesl_218";
const paddingTopM$b = "_paddingTopM_1kesl_222";
const paddingTopL$b = "_paddingTopL_1kesl_226";
const paddingTopXL$b = "_paddingTopXL_1kesl_230";
const paddingRight0$b = "_paddingRight0_1kesl_234";
const paddingRightS$b = "_paddingRightS_1kesl_238";
const paddingRightM$b = "_paddingRightM_1kesl_242";
const paddingRightL$b = "_paddingRightL_1kesl_246";
const paddingRightXL$b = "_paddingRightXL_1kesl_250";
const paddingBottom0$b = "_paddingBottom0_1kesl_254";
const paddingBottomS$b = "_paddingBottomS_1kesl_258";
const paddingBottomM$b = "_paddingBottomM_1kesl_262";
const paddingBottomL$b = "_paddingBottomL_1kesl_266";
const paddingBottomXL$b = "_paddingBottomXL_1kesl_270";
const paddingLeft0$b = "_paddingLeft0_1kesl_274";
const paddingLeftS$b = "_paddingLeftS_1kesl_278";
const paddingLeftM$b = "_paddingLeftM_1kesl_282";
const paddingLeftL$b = "_paddingLeftL_1kesl_286";
const paddingLeftXL$b = "_paddingLeftXL_1kesl_290";
const input$2 = "_input_1kesl_310";
const icon$2 = "_icon_1kesl_336";
const password = "_password_1kesl_342";
const scaleS = "_scaleS_1kesl_354";
const scaleM = "_scaleM_1kesl_357";
const scaleL = "_scaleL_1kesl_360";
const scaleXL = "_scaleXL_1kesl_363";
var scss$f = {
  fontS: fontS$b,
  fontM: fontM$b,
  fontL: fontL$b,
  fontXL: fontXL$b,
  weightLight: weightLight$b,
  weightNormal: weightNormal$b,
  weightBold: weightBold$b,
  disabled: disabled$b,
  error: error$b,
  errorMessage: errorMessage$b,
  pointer: pointer$b,
  loading: loading$b,
  loadingAnimationOpacity: loadingAnimationOpacity$b,
  loadingAnimation: loadingAnimation$b,
  margin0: margin0$b,
  marginS: marginS$b,
  marginM: marginM$b,
  marginL: marginL$b,
  marginXL: marginXL$b,
  marginTop0: marginTop0$b,
  marginTopS: marginTopS$b,
  marginTopM: marginTopM$b,
  marginTopL: marginTopL$b,
  marginTopXL: marginTopXL$b,
  marginRight0: marginRight0$b,
  marginRightS: marginRightS$b,
  marginRightM: marginRightM$b,
  marginRightL: marginRightL$b,
  marginRightXL: marginRightXL$b,
  marginBottom0: marginBottom0$b,
  marginBottomS: marginBottomS$b,
  marginBottomM: marginBottomM$b,
  marginBottomL: marginBottomL$b,
  marginBottomXL: marginBottomXL$b,
  marginLeft0: marginLeft0$b,
  marginLeftS: marginLeftS$b,
  marginLeftM: marginLeftM$b,
  marginLeftL: marginLeftL$b,
  marginLeftXL: marginLeftXL$b,
  padding0: padding0$b,
  paddingS: paddingS$b,
  paddingM: paddingM$b,
  paddingL: paddingL$b,
  paddingXL: paddingXL$b,
  paddingTop0: paddingTop0$b,
  paddingTopS: paddingTopS$b,
  paddingTopM: paddingTopM$b,
  paddingTopL: paddingTopL$b,
  paddingTopXL: paddingTopXL$b,
  paddingRight0: paddingRight0$b,
  paddingRightS: paddingRightS$b,
  paddingRightM: paddingRightM$b,
  paddingRightL: paddingRightL$b,
  paddingRightXL: paddingRightXL$b,
  paddingBottom0: paddingBottom0$b,
  paddingBottomS: paddingBottomS$b,
  paddingBottomM: paddingBottomM$b,
  paddingBottomL: paddingBottomL$b,
  paddingBottomXL: paddingBottomXL$b,
  paddingLeft0: paddingLeft0$b,
  paddingLeftS: paddingLeftS$b,
  paddingLeftM: paddingLeftM$b,
  paddingLeftL: paddingLeftL$b,
  paddingLeftXL: paddingLeftXL$b,
  "backgroundColor--primary": "_backgroundColor--primary_1kesl_294",
  "backgroundColor--text100": "_backgroundColor--text100_1kesl_298",
  "color--primary": "_color--primary_1kesl_302",
  "color--text100": "_color--text100_1kesl_306",
  input: input$2,
  icon: icon$2,
  password,
  scaleS,
  scaleM,
  scaleL,
  scaleXL
};
const Input = (_w) => {
  var _x = _w, {
    error: error2,
    errorMessage: errorMessage2,
    type,
    scale: scale2,
    icon: icon2,
    limit,
    value,
    onChange
  } = _x, props2 = __objRest(_x, [
    "error",
    "errorMessage",
    "type",
    "scale",
    "icon",
    "limit",
    "value",
    "onChange"
  ]);
  const [showPassword, setShowPassword] = useState(false);
  const getClassNames = () => {
    let className = _getClassNames(__spreadValues({
      parent: scss$f.input,
      scss: scss$f,
      scale: scale2,
      error: error2
    }, props2));
    if (icon2 || type === "password") {
      className.push(scss$f.icon);
    }
    return className.join(" ");
  };
  return /* @__PURE__ */ React__default.createElement("div", {
    className: getClassNames()
  }, /* @__PURE__ */ React__default.createElement("div", null, icon2 && icon2, type === "password" && /* @__PURE__ */ React__default.createElement(Icon, {
    padding: "0",
    scale: scale2,
    icon: "lock"
  }), /* @__PURE__ */ React__default.createElement("input", __spreadValues({
    type: type === "password" && showPassword ? "text" : type,
    "data-testid": "Input",
    value,
    onChange
  }, props2)), type === "password" && /* @__PURE__ */ React__default.createElement("span", {
    className: scss$f.password,
    onClick: () => {
      setShowPassword((prev) => !prev);
    }
  }, showPassword ? /* @__PURE__ */ React__default.createElement(Icon, {
    padding: "0",
    icon: "eyeClosed",
    scale: scale2
  }) : /* @__PURE__ */ React__default.createElement(Icon, {
    padding: "0",
    icon: "eye",
    scale: scale2
  })), limit && /* @__PURE__ */ React__default.createElement("span", {
    className: scss$f.limit
  }, value.length, "/", props2.maxLength)), error2 && errorMessage2 && /* @__PURE__ */ React__default.createElement("span", {
    className: scss$f.errorMessage
  }, errorMessage2));
};
const board = "_board_1y65x_1";
const title = "_title_1y65x_6";
const skeletonWrapper = "_skeletonWrapper_1y65x_12";
const skeleton$1 = "_skeleton_1y65x_12";
const skeletonText = "_skeletonText_1y65x_23";
var styles$4 = {
  board,
  title,
  skeletonWrapper,
  skeleton: skeleton$1,
  skeletonText
};
const column$1 = "_column_1jjlb_1";
const skeleton = "_skeleton_1jjlb_11";
var styles$3 = {
  column: column$1,
  skeleton
};
const add$1 = "_add_13zh4_1";
const column = "_column_13zh4_14";
var styles$2 = {
  add: add$1,
  column
};
const Add = ({ text: text2, onClick, isColumn }) => {
  return /* @__PURE__ */ React__default.createElement("span", {
    "data-testid": "add",
    className: isColumn ? styles$2.add + " " + styles$2.column : styles$2.add,
    onClick
  }, /* @__PURE__ */ React__default.createElement(Icon, {
    icon: "add",
    color: "var(--text200)"
  }), " ", text2);
};
const item$1 = "_item_e949w_1";
const locked$1 = "_locked_e949w_17";
const borderAnimation$1 = "_borderAnimation_e949w_1";
const icon$1 = "_icon_e949w_23";
const lock$1 = "_lock_e949w_17";
const textWrapper$1 = "_textWrapper_e949w_38";
const input$1 = "_input_e949w_41";
const text$2 = "_text_e949w_38";
var styles$1 = {
  item: item$1,
  locked: locked$1,
  borderAnimation: borderAnimation$1,
  icon: icon$1,
  lock: lock$1,
  textWrapper: textWrapper$1,
  input: input$1,
  text: text$2
};
const Item = ({
  text: text2,
  position: position3,
  _id,
  columnId,
  createdAt,
  updatedAt,
  isDragging,
  _deleteItem,
  columnIndex,
  itemIndex,
  _editItem,
  i18n,
  newItem,
  setNewItem,
  provided,
  _isEditingItem,
  locked: locked2
}) => {
  const [open2, setOpen] = useState(false);
  const [location, setLocation] = useState({ x: 0, y: 0 });
  const [value, setValue] = useState(text2);
  const [editMode, setEditMode] = useState(newItem);
  useEffect(() => {
    _isEditingItem(columnIndex, itemIndex, editMode || isDragging);
  }, [editMode, isDragging]);
  useEffect(() => {
    setValue(text2);
  }, [text2]);
  function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = element.scrollHeight + "px";
  }
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, /* @__PURE__ */ React__default.createElement(ContextMenu, {
    menu: /* @__PURE__ */ React__default.createElement("div", {
      onClick: () => setOpen(false)
    }, /* @__PURE__ */ React__default.createElement("button", {
      onClick: () => {
        setEditMode(true);
      }
    }, /* @__PURE__ */ React__default.createElement(Icon, {
      icon: "edit"
    }), i18n.edit), /* @__PURE__ */ React__default.createElement("button", {
      onClick: () => {
        _deleteItem(columnIndex, itemIndex);
      }
    }, /* @__PURE__ */ React__default.createElement(Icon, {
      icon: "remove"
    }), i18n.remove)),
    open: open2,
    setOpen,
    location,
    setLocation,
    isDisabled: locked2
  }, /* @__PURE__ */ React__default.createElement("div", {
    "data-testid": "Item",
    className: locked2 ? styles$1.item + " " + styles$1.locked : styles$1.item,
    style: isDragging ? { border: "2px solid var(--text400)" } : {}
  }, /* @__PURE__ */ React__default.createElement("span", {
    className: styles$1.textWrapper
  }, editMode ? /* @__PURE__ */ React__default.createElement("textarea", {
    className: styles$1.input,
    autoFocus: true,
    value,
    onChange: (e2) => {
      setValue(e2.target.value);
      auto_grow(e2.target);
    },
    onBlur: (e2) => {
      setEditMode(false);
      setNewItem(false);
      _editItem(columnIndex, itemIndex, value);
    },
    onFocus: (e2) => e2.currentTarget.setSelectionRange(e2.currentTarget.value.length, e2.currentTarget.value.length)
  }) : /* @__PURE__ */ React__default.createElement("span", {
    className: styles$1.text
  }, value)), locked2 ? /* @__PURE__ */ React__default.createElement("div", {
    className: styles$1.icon + " " + styles$1.lock
  }, /* @__PURE__ */ React__default.createElement(Icon, {
    icon: "lock"
  })) : /* @__PURE__ */ React__default.createElement("div", {
    className: styles$1.icon,
    onClick: (e2) => {
      setLocation({ x: e2.pageX, y: e2.pageY });
      setOpen(true);
    }
  }, /* @__PURE__ */ React__default.createElement(Icon, {
    icon: "itemMenu"
  })))));
};
const header$1 = "_header_1jjvd_1";
const locked = "_locked_1jjvd_15";
const borderAnimation = "_borderAnimation_1jjvd_1";
const icon = "_icon_1jjvd_21";
const lock = "_lock_1jjvd_15";
const textWrapper = "_textWrapper_1jjvd_35";
const itemCount = "_itemCount_1jjvd_41";
const text$1 = "_text_1jjvd_35";
const input = "_input_1jjvd_54";
const right = "_right_1jjvd_63";
var styles = {
  header: header$1,
  locked,
  borderAnimation,
  icon,
  lock,
  textWrapper,
  itemCount,
  text: text$1,
  input,
  right
};
const Header = ({
  text: text2,
  color: color2,
  itemCount: itemCount2,
  dragHandleProps,
  _deleteColumn,
  _editColumn,
  columnIndex,
  isDragging,
  i18n,
  newColumn,
  setNewColumn,
  locked: locked2,
  _isEditingColumn
}) => {
  const [open2, setOpen] = useState(false);
  const [location, setLocation] = useState({ x: 0, y: 0 });
  const [value, setValue] = useState(text2);
  const [editMode, setEditMode] = useState(newColumn);
  useEffect(() => {
    _isEditingColumn(columnIndex, editMode || isDragging);
  }, [editMode, isDragging]);
  useEffect(() => {
    setValue(text2);
  }, [text2]);
  return /* @__PURE__ */ React__default.createElement(ContextMenu, {
    menu: /* @__PURE__ */ React__default.createElement("div", {
      onClick: () => setOpen(false)
    }, /* @__PURE__ */ React__default.createElement("div", null, /* @__PURE__ */ React__default.createElement("span", {
      onClick: () => _editColumn(columnIndex, value, "var(--text200)"),
      style: { backgroundColor: "var(--text200)" }
    }), /* @__PURE__ */ React__default.createElement("span", {
      onClick: () => _editColumn(columnIndex, value, "#796AFF"),
      style: { backgroundColor: "#796AFF" }
    }), /* @__PURE__ */ React__default.createElement("span", {
      onClick: () => _editColumn(columnIndex, value, "#FF6A6A"),
      style: { backgroundColor: "#FF6A6A" }
    }), /* @__PURE__ */ React__default.createElement("span", {
      onClick: () => _editColumn(columnIndex, value, "#FC762A"),
      style: { backgroundColor: "#FC762A" }
    }), /* @__PURE__ */ React__default.createElement("span", {
      onClick: () => _editColumn(columnIndex, value, "#FFAD1F"),
      style: { backgroundColor: "#FFAD1F" }
    }), /* @__PURE__ */ React__default.createElement("span", {
      onClick: () => _editColumn(columnIndex, value, "#17BF63"),
      style: { backgroundColor: "#17BF63" }
    })), /* @__PURE__ */ React__default.createElement("hr", null), /* @__PURE__ */ React__default.createElement("button", {
      onClick: () => setEditMode(true)
    }, /* @__PURE__ */ React__default.createElement(Icon, {
      icon: "edit"
    }), " ", i18n.edit), /* @__PURE__ */ React__default.createElement("button", {
      onClick: () => {
        _deleteColumn(columnIndex);
      }
    }, /* @__PURE__ */ React__default.createElement(Icon, {
      icon: "remove"
    }), i18n.remove)),
    open: open2,
    setOpen,
    location,
    setLocation,
    isDisabled: locked2
  }, /* @__PURE__ */ React__default.createElement("div", __spreadProps(__spreadValues({}, dragHandleProps), {
    "data-testid": "Header",
    className: locked2 ? styles.header + " " + styles.locked : styles.header,
    style: isDragging ? { border: "2px solid var(--text400)", color: color2 } : { color: color2 }
  }), /* @__PURE__ */ React__default.createElement("div", {
    className: styles.textWrapper
  }, /* @__PURE__ */ React__default.createElement("span", {
    className: styles.itemCount
  }, itemCount2), editMode ? /* @__PURE__ */ React__default.createElement("input", {
    className: styles.input,
    autoFocus: true,
    value,
    onChange: (e2) => {
      setValue(e2.target.value);
    },
    onBlur: (e2) => {
      setEditMode(false);
      setNewColumn(false);
      _editColumn(columnIndex, value, color2);
    },
    style: { color: color2 },
    maxLength: 28
  }) : /* @__PURE__ */ React__default.createElement("span", null, text2)), locked2 ? /* @__PURE__ */ React__default.createElement("div", {
    className: styles.icon + " " + styles.lock
  }, /* @__PURE__ */ React__default.createElement(Icon, {
    icon: "lock"
  })) : /* @__PURE__ */ React__default.createElement("div", {
    className: styles.icon,
    onClick: (e2) => {
      setLocation({ x: e2.pageX, y: e2.pageY });
      setOpen(true);
    }
  }, /* @__PURE__ */ React__default.createElement(Icon, {
    icon: "itemMenu"
  }))));
};
function _setPrototypeOf(o, p2) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf(o, p2);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function formatProdErrorMessage(code2) {
  return "Minified Redux error #" + code2 + "; visit https://redux.js.org/Errors?code=" + code2 + " for the full message or use the non-minified dev environment for full errors. ";
}
var $$observable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();
var randomString = function randomString2() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};
function isPlainObject(obj) {
  if (typeof obj !== "object" || obj === null)
    return false;
  var proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(obj) === proto;
}
function createStore$2(reducer2, preloadedState, enhancer) {
  var _ref2;
  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
    throw new Error(formatProdErrorMessage(0));
  }
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = void 0;
  }
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error(formatProdErrorMessage(1));
    }
    return enhancer(createStore$2)(reducer2, preloadedState);
  }
  if (typeof reducer2 !== "function") {
    throw new Error(formatProdErrorMessage(2));
  }
  var currentReducer = reducer2;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  function getState() {
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(3));
    }
    return currentState;
  }
  function subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error(formatProdErrorMessage(4));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(5));
    }
    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      if (isDispatching) {
        throw new Error(formatProdErrorMessage(6));
      }
      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error(formatProdErrorMessage(7));
    }
    if (typeof action.type === "undefined") {
      throw new Error(formatProdErrorMessage(8));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(9));
    }
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }
    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }
    return action;
  }
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== "function") {
      throw new Error(formatProdErrorMessage(10));
    }
    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  function observable() {
    var _ref;
    var outerSubscribe = subscribe;
    return _ref = {
      subscribe: function subscribe2(observer) {
        if (typeof observer !== "object" || observer === null) {
          throw new Error(formatProdErrorMessage(11));
        }
        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }
        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe
        };
      }
    }, _ref[$$observable] = function() {
      return this;
    }, _ref;
  }
  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch,
    subscribe,
    getState,
    replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
function bindActionCreator(actionCreator, dispatch) {
  return function() {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
function bindActionCreators$1(actionCreators, dispatch) {
  if (typeof actionCreators === "function") {
    return bindActionCreator(actionCreators, dispatch);
  }
  if (typeof actionCreators !== "object" || actionCreators === null) {
    throw new Error(formatProdErrorMessage(16));
  }
  var boundActionCreators = {};
  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === "function") {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  if (funcs.length === 0) {
    return function(arg) {
      return arg;
    };
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce(function(a2, b2) {
    return function() {
      return a2(b2.apply(void 0, arguments));
    };
  });
}
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }
  return function(createStore2) {
    return function() {
      var store = createStore2.apply(void 0, arguments);
      var _dispatch = function dispatch() {
        throw new Error(formatProdErrorMessage(15));
      };
      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function(middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2(_objectSpread2({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}
var ReactReduxContext = /* @__PURE__ */ React__default.createContext(null);
function defaultNoopBatch(callback) {
  callback();
}
var batch = defaultNoopBatch;
var setBatch = function setBatch2(newBatch) {
  return batch = newBatch;
};
var getBatch = function getBatch2() {
  return batch;
};
function createListenerCollection() {
  var batch2 = getBatch();
  var first = null;
  var last = null;
  return {
    clear: function clear() {
      first = null;
      last = null;
    },
    notify: function notify2() {
      batch2(function() {
        var listener = first;
        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get: function get2() {
      var listeners = [];
      var listener = first;
      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }
      return listeners;
    },
    subscribe: function subscribe(callback) {
      var isSubscribed = true;
      var listener = last = {
        callback,
        next: null,
        prev: last
      };
      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }
      return function unsubscribe() {
        if (!isSubscribed || first === null)
          return;
        isSubscribed = false;
        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }
        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}
var nullListeners = {
  notify: function notify() {
  },
  get: function get() {
    return [];
  }
};
function createSubscription(store, parentSub) {
  var unsubscribe;
  var listeners = nullListeners;
  function addNestedSub(listener) {
    trySubscribe();
    return listeners.subscribe(listener);
  }
  function notifyNestedSubs() {
    listeners.notify();
  }
  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }
  function isSubscribed() {
    return Boolean(unsubscribe);
  }
  function trySubscribe() {
    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }
  function tryUnsubscribe() {
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = void 0;
      listeners.clear();
      listeners = nullListeners;
    }
  }
  var subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe,
    tryUnsubscribe,
    getListeners: function getListeners() {
      return listeners;
    }
  };
  return subscription;
}
var useIsomorphicLayoutEffect$2 = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? useLayoutEffect : useEffect;
function Provider(_ref) {
  var store = _ref.store, context = _ref.context, children = _ref.children;
  var contextValue = useMemo$1(function() {
    var subscription = createSubscription(store);
    subscription.onStateChange = subscription.notifyNestedSubs;
    return {
      store,
      subscription
    };
  }, [store]);
  var previousState = useMemo$1(function() {
    return store.getState();
  }, [store]);
  useIsomorphicLayoutEffect$2(function() {
    var subscription = contextValue.subscription;
    subscription.trySubscribe();
    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }
    return function() {
      subscription.tryUnsubscribe();
      subscription.onStateChange = null;
    };
  }, [contextValue, previousState]);
  var Context = context || ReactReduxContext;
  return /* @__PURE__ */ React__default.createElement(Context.Provider, {
    value: contextValue
  }, children);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var reactIs$2 = { exports: {} };
var reactIs_production_min$1 = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$1 = typeof Symbol === "function" && Symbol.for, c$1 = b$1 ? Symbol.for("react.element") : 60103, d$1 = b$1 ? Symbol.for("react.portal") : 60106, e$1 = b$1 ? Symbol.for("react.fragment") : 60107, f$1 = b$1 ? Symbol.for("react.strict_mode") : 60108, g$1 = b$1 ? Symbol.for("react.profiler") : 60114, h$1 = b$1 ? Symbol.for("react.provider") : 60109, k$1 = b$1 ? Symbol.for("react.context") : 60110, l$1 = b$1 ? Symbol.for("react.async_mode") : 60111, m$2 = b$1 ? Symbol.for("react.concurrent_mode") : 60111, n$1 = b$1 ? Symbol.for("react.forward_ref") : 60112, p$1 = b$1 ? Symbol.for("react.suspense") : 60113, q$1 = b$1 ? Symbol.for("react.suspense_list") : 60120, r$2 = b$1 ? Symbol.for("react.memo") : 60115, t = b$1 ? Symbol.for("react.lazy") : 60116, v$1 = b$1 ? Symbol.for("react.block") : 60121, w$1 = b$1 ? Symbol.for("react.fundamental") : 60117, x$1 = b$1 ? Symbol.for("react.responder") : 60118, y$2 = b$1 ? Symbol.for("react.scope") : 60119;
function z$1(a2) {
  if (typeof a2 === "object" && a2 !== null) {
    var u2 = a2.$$typeof;
    switch (u2) {
      case c$1:
        switch (a2 = a2.type, a2) {
          case l$1:
          case m$2:
          case e$1:
          case g$1:
          case f$1:
          case p$1:
            return a2;
          default:
            switch (a2 = a2 && a2.$$typeof, a2) {
              case k$1:
              case n$1:
              case t:
              case r$2:
              case h$1:
                return a2;
              default:
                return u2;
            }
        }
      case d$1:
        return u2;
    }
  }
}
function A$1(a2) {
  return z$1(a2) === m$2;
}
reactIs_production_min$1.AsyncMode = l$1;
reactIs_production_min$1.ConcurrentMode = m$2;
reactIs_production_min$1.ContextConsumer = k$1;
reactIs_production_min$1.ContextProvider = h$1;
reactIs_production_min$1.Element = c$1;
reactIs_production_min$1.ForwardRef = n$1;
reactIs_production_min$1.Fragment = e$1;
reactIs_production_min$1.Lazy = t;
reactIs_production_min$1.Memo = r$2;
reactIs_production_min$1.Portal = d$1;
reactIs_production_min$1.Profiler = g$1;
reactIs_production_min$1.StrictMode = f$1;
reactIs_production_min$1.Suspense = p$1;
reactIs_production_min$1.isAsyncMode = function(a2) {
  return A$1(a2) || z$1(a2) === l$1;
};
reactIs_production_min$1.isConcurrentMode = A$1;
reactIs_production_min$1.isContextConsumer = function(a2) {
  return z$1(a2) === k$1;
};
reactIs_production_min$1.isContextProvider = function(a2) {
  return z$1(a2) === h$1;
};
reactIs_production_min$1.isElement = function(a2) {
  return typeof a2 === "object" && a2 !== null && a2.$$typeof === c$1;
};
reactIs_production_min$1.isForwardRef = function(a2) {
  return z$1(a2) === n$1;
};
reactIs_production_min$1.isFragment = function(a2) {
  return z$1(a2) === e$1;
};
reactIs_production_min$1.isLazy = function(a2) {
  return z$1(a2) === t;
};
reactIs_production_min$1.isMemo = function(a2) {
  return z$1(a2) === r$2;
};
reactIs_production_min$1.isPortal = function(a2) {
  return z$1(a2) === d$1;
};
reactIs_production_min$1.isProfiler = function(a2) {
  return z$1(a2) === g$1;
};
reactIs_production_min$1.isStrictMode = function(a2) {
  return z$1(a2) === f$1;
};
reactIs_production_min$1.isSuspense = function(a2) {
  return z$1(a2) === p$1;
};
reactIs_production_min$1.isValidElementType = function(a2) {
  return typeof a2 === "string" || typeof a2 === "function" || a2 === e$1 || a2 === m$2 || a2 === g$1 || a2 === f$1 || a2 === p$1 || a2 === q$1 || typeof a2 === "object" && a2 !== null && (a2.$$typeof === t || a2.$$typeof === r$2 || a2.$$typeof === h$1 || a2.$$typeof === k$1 || a2.$$typeof === n$1 || a2.$$typeof === w$1 || a2.$$typeof === x$1 || a2.$$typeof === y$2 || a2.$$typeof === v$1);
};
reactIs_production_min$1.typeOf = z$1;
{
  reactIs$2.exports = reactIs_production_min$1;
}
var reactIs$1 = reactIs$2.exports;
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  "$$typeof": true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  "$$typeof": true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs$1.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs$1.Memo] = MEMO_STATICS;
function getStatics(component2) {
  if (reactIs$1.isMemo(component2)) {
    return MEMO_STATICS;
  }
  return TYPE_STATICS[component2["$$typeof"]] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== "string") {
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);
      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }
    var keys = getOwnPropertyNames(sourceComponent);
    if (getOwnPropertySymbols$1) {
      keys = keys.concat(getOwnPropertySymbols$1(sourceComponent));
    }
    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);
    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];
      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
        try {
          defineProperty(targetComponent, key, descriptor);
        } catch (e2) {
        }
      }
    }
  }
  return targetComponent;
}
var hoistNonReactStatics_cjs = hoistNonReactStatics;
var reactIs = { exports: {} };
var reactIs_production_min = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = 60103, c = 60106, d = 60107, e = 60108, f = 60114, g = 60109, h = 60110, k = 60112, l = 60113, m$1 = 60120, n = 60115, p = 60116, q = 60121, r$1 = 60122, u = 60117, v = 60129, w = 60131;
if (typeof Symbol === "function" && Symbol.for) {
  var x = Symbol.for;
  b = x("react.element");
  c = x("react.portal");
  d = x("react.fragment");
  e = x("react.strict_mode");
  f = x("react.profiler");
  g = x("react.provider");
  h = x("react.context");
  k = x("react.forward_ref");
  l = x("react.suspense");
  m$1 = x("react.suspense_list");
  n = x("react.memo");
  p = x("react.lazy");
  q = x("react.block");
  r$1 = x("react.server.block");
  u = x("react.fundamental");
  v = x("react.debug_trace_mode");
  w = x("react.legacy_hidden");
}
function y$1(a2) {
  if (typeof a2 === "object" && a2 !== null) {
    var t2 = a2.$$typeof;
    switch (t2) {
      case b:
        switch (a2 = a2.type, a2) {
          case d:
          case f:
          case e:
          case l:
          case m$1:
            return a2;
          default:
            switch (a2 = a2 && a2.$$typeof, a2) {
              case h:
              case k:
              case p:
              case n:
              case g:
                return a2;
              default:
                return t2;
            }
        }
      case c:
        return t2;
    }
  }
}
var z = g, A = b, B$1 = k, C = d, D$1 = p, E$1 = n, F$1 = c, G$1 = f, H$1 = e, I$1 = l;
reactIs_production_min.ContextConsumer = h;
reactIs_production_min.ContextProvider = z;
reactIs_production_min.Element = A;
reactIs_production_min.ForwardRef = B$1;
reactIs_production_min.Fragment = C;
reactIs_production_min.Lazy = D$1;
reactIs_production_min.Memo = E$1;
reactIs_production_min.Portal = F$1;
reactIs_production_min.Profiler = G$1;
reactIs_production_min.StrictMode = H$1;
reactIs_production_min.Suspense = I$1;
reactIs_production_min.isAsyncMode = function() {
  return false;
};
reactIs_production_min.isConcurrentMode = function() {
  return false;
};
reactIs_production_min.isContextConsumer = function(a2) {
  return y$1(a2) === h;
};
reactIs_production_min.isContextProvider = function(a2) {
  return y$1(a2) === g;
};
reactIs_production_min.isElement = function(a2) {
  return typeof a2 === "object" && a2 !== null && a2.$$typeof === b;
};
reactIs_production_min.isForwardRef = function(a2) {
  return y$1(a2) === k;
};
reactIs_production_min.isFragment = function(a2) {
  return y$1(a2) === d;
};
reactIs_production_min.isLazy = function(a2) {
  return y$1(a2) === p;
};
reactIs_production_min.isMemo = function(a2) {
  return y$1(a2) === n;
};
reactIs_production_min.isPortal = function(a2) {
  return y$1(a2) === c;
};
reactIs_production_min.isProfiler = function(a2) {
  return y$1(a2) === f;
};
reactIs_production_min.isStrictMode = function(a2) {
  return y$1(a2) === e;
};
reactIs_production_min.isSuspense = function(a2) {
  return y$1(a2) === l;
};
reactIs_production_min.isValidElementType = function(a2) {
  return typeof a2 === "string" || typeof a2 === "function" || a2 === d || a2 === f || a2 === v || a2 === e || a2 === l || a2 === m$1 || a2 === w || typeof a2 === "object" && a2 !== null && (a2.$$typeof === p || a2.$$typeof === n || a2.$$typeof === g || a2.$$typeof === h || a2.$$typeof === k || a2.$$typeof === u || a2.$$typeof === q || a2[0] === r$1) ? true : false;
};
reactIs_production_min.typeOf = y$1;
{
  reactIs.exports = reactIs_production_min;
}
var _excluded$2 = ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"], _excluded2 = ["reactReduxForwardedRef"];
var EMPTY_ARRAY = [];
var NO_SUBSCRIPTION_ARRAY = [null, null];
function storeStateUpdatesReducer(state, action) {
  var updateCount = state[1];
  return [action.payload, updateCount + 1];
}
function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  useIsomorphicLayoutEffect$2(function() {
    return effectFunc.apply(void 0, effectArgs);
  }, dependencies);
}
function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs) {
  lastWrapperProps.current = wrapperProps;
  lastChildProps.current = actualChildProps;
  renderIsScheduled.current = false;
  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
}
function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch) {
  if (!shouldHandleStateChanges)
    return;
  var didUnsubscribe = false;
  var lastThrownError = null;
  var checkForUpdates = function checkForUpdates2() {
    if (didUnsubscribe) {
      return;
    }
    var latestStoreState = store.getState();
    var newChildProps, error2;
    try {
      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
    } catch (e2) {
      error2 = e2;
      lastThrownError = e2;
    }
    if (!error2) {
      lastThrownError = null;
    }
    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true;
      forceComponentUpdateDispatch({
        type: "STORE_UPDATED",
        payload: {
          error: error2
        }
      });
    }
  };
  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe();
  checkForUpdates();
  var unsubscribeWrapper = function unsubscribeWrapper2() {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;
    if (lastThrownError) {
      throw lastThrownError;
    }
  };
  return unsubscribeWrapper;
}
var initStateUpdates = function initStateUpdates2() {
  return [null, 0];
};
function connectAdvanced(selectorFactory, _ref) {
  if (_ref === void 0) {
    _ref = {};
  }
  var _ref2 = _ref, _ref2$getDisplayName = _ref2.getDisplayName, getDisplayName = _ref2$getDisplayName === void 0 ? function(name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName, _ref2$methodName = _ref2.methodName, methodName = _ref2$methodName === void 0 ? "connectAdvanced" : _ref2$methodName, _ref2$renderCountProp = _ref2.renderCountProp, renderCountProp = _ref2$renderCountProp === void 0 ? void 0 : _ref2$renderCountProp, _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges, shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta, _ref2$storeKey = _ref2.storeKey, storeKey = _ref2$storeKey === void 0 ? "store" : _ref2$storeKey;
  _ref2.withRef;
  var _ref2$forwardRef = _ref2.forwardRef, forwardRef2 = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef, _ref2$context = _ref2.context, context = _ref2$context === void 0 ? ReactReduxContext : _ref2$context, connectOptions = _objectWithoutPropertiesLoose(_ref2, _excluded$2);
  var Context = context;
  return function wrapWithConnect(WrappedComponent) {
    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || "Component";
    var displayName = getDisplayName(wrappedComponentName);
    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName,
      methodName,
      renderCountProp,
      shouldHandleStateChanges,
      storeKey,
      displayName,
      wrappedComponentName,
      WrappedComponent
    });
    var pure = connectOptions.pure;
    function createChildSelector(store) {
      return selectorFactory(store.dispatch, selectorFactoryOptions);
    }
    var usePureOnlyMemo = pure ? useMemo$1 : function(callback) {
      return callback();
    };
    function ConnectFunction(props2) {
      var _useMemo = useMemo$1(function() {
        var reactReduxForwardedRef2 = props2.reactReduxForwardedRef, wrapperProps2 = _objectWithoutPropertiesLoose(props2, _excluded2);
        return [props2.context, reactReduxForwardedRef2, wrapperProps2];
      }, [props2]), propsContext = _useMemo[0], reactReduxForwardedRef = _useMemo[1], wrapperProps = _useMemo[2];
      var ContextToUse = useMemo$1(function() {
        return propsContext && propsContext.Consumer && reactIs.exports.isContextConsumer(/* @__PURE__ */ React__default.createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]);
      var contextValue = useContext(ContextToUse);
      var didStoreComeFromProps = Boolean(props2.store) && Boolean(props2.store.getState) && Boolean(props2.store.dispatch);
      Boolean(contextValue) && Boolean(contextValue.store);
      var store = didStoreComeFromProps ? props2.store : contextValue.store;
      var childPropsSelector = useMemo$1(function() {
        return createChildSelector(store);
      }, [store]);
      var _useMemo2 = useMemo$1(function() {
        if (!shouldHandleStateChanges)
          return NO_SUBSCRIPTION_ARRAY;
        var subscription2 = createSubscription(store, didStoreComeFromProps ? null : contextValue.subscription);
        var notifyNestedSubs2 = subscription2.notifyNestedSubs.bind(subscription2);
        return [subscription2, notifyNestedSubs2];
      }, [store, didStoreComeFromProps, contextValue]), subscription = _useMemo2[0], notifyNestedSubs = _useMemo2[1];
      var overriddenContextValue = useMemo$1(function() {
        if (didStoreComeFromProps) {
          return contextValue;
        }
        return _extends({}, contextValue, {
          subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]);
      var _useReducer = useReducer(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates), _useReducer$ = _useReducer[0], previousStateUpdateResult = _useReducer$[0], forceComponentUpdateDispatch = _useReducer[1];
      if (previousStateUpdateResult && previousStateUpdateResult.error) {
        throw previousStateUpdateResult.error;
      }
      var lastChildProps = useRef();
      var lastWrapperProps = useRef(wrapperProps);
      var childPropsFromStoreUpdate = useRef();
      var renderIsScheduled = useRef(false);
      var actualChildProps = usePureOnlyMemo(function() {
        if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
          return childPropsFromStoreUpdate.current;
        }
        return childPropsSelector(store.getState(), wrapperProps);
      }, [store, previousStateUpdateResult, wrapperProps]);
      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs]);
      useIsomorphicLayoutEffectWithArgs(subscribeUpdates, [shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch], [store, subscription, childPropsSelector]);
      var renderedWrappedComponent = useMemo$1(function() {
        return /* @__PURE__ */ React__default.createElement(WrappedComponent, _extends({}, actualChildProps, {
          ref: reactReduxForwardedRef
        }));
      }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]);
      var renderedChild = useMemo$1(function() {
        if (shouldHandleStateChanges) {
          return /* @__PURE__ */ React__default.createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }
        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    }
    var Connect = pure ? React__default.memo(ConnectFunction) : ConnectFunction;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = ConnectFunction.displayName = displayName;
    if (forwardRef2) {
      var forwarded = React__default.forwardRef(function forwardConnectRef(props2, ref) {
        return /* @__PURE__ */ React__default.createElement(Connect, _extends({}, props2, {
          reactReduxForwardedRef: ref
        }));
      });
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoistNonReactStatics_cjs(forwarded, WrappedComponent);
    }
    return hoistNonReactStatics_cjs(Connect, WrappedComponent);
  };
}
function is(x, y2) {
  if (x === y2) {
    return x !== 0 || y2 !== 0 || 1 / x === 1 / y2;
  } else {
    return x !== x && y2 !== y2;
  }
}
function shallowEqual(objA, objB) {
  if (is(objA, objB))
    return true;
  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }
  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length)
    return false;
  for (var i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }
  return true;
}
function bindActionCreators(actionCreators, dispatch) {
  var boundActionCreators = {};
  var _loop = function _loop2(key2) {
    var actionCreator = actionCreators[key2];
    if (typeof actionCreator === "function") {
      boundActionCreators[key2] = function() {
        return dispatch(actionCreator.apply(void 0, arguments));
      };
    }
  };
  for (var key in actionCreators) {
    _loop(key);
  }
  return boundActionCreators;
}
function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);
    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== void 0 ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    _ref.displayName;
    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    };
    proxy.dependsOnOwnProps = true;
    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props2 = proxy(stateOrDispatch, ownProps);
      if (typeof props2 === "function") {
        proxy.mapToProps = props2;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props2);
        props2 = proxy(stateOrDispatch, ownProps);
      }
      return props2;
    };
    return proxy;
  };
}
function whenMapDispatchToPropsIsFunction(mapDispatchToProps2) {
  return typeof mapDispatchToProps2 === "function" ? wrapMapToPropsFunc(mapDispatchToProps2) : void 0;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps2) {
  return !mapDispatchToProps2 ? wrapMapToPropsConstant(function(dispatch) {
    return {
      dispatch
    };
  }) : void 0;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps2) {
  return mapDispatchToProps2 && typeof mapDispatchToProps2 === "object" ? wrapMapToPropsConstant(function(dispatch) {
    return bindActionCreators(mapDispatchToProps2, dispatch);
  }) : void 0;
}
var defaultMapDispatchToPropsFactories = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];
function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === "function" ? wrapMapToPropsFunc(mapStateToProps) : void 0;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? wrapMapToPropsConstant(function() {
    return {};
  }) : void 0;
}
var defaultMapStateToPropsFactories = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];
function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, stateProps, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    _ref.displayName;
    var pure = _ref.pure, areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);
      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps))
          mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
      }
      return mergedProps;
    };
  };
}
function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === "function" ? wrapMergePropsFunc(mergeProps) : void 0;
}
function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function() {
    return defaultMergeProps;
  } : void 0;
}
var defaultMergePropsFactories = [whenMergePropsIsFunction, whenMergePropsIsOmitted];
var _excluded$1 = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps2, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps2(dispatch, ownProps), ownProps);
  };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps2, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual, areOwnPropsEqual = _ref.areOwnPropsEqual, areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;
  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps2(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }
  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps2.dependsOnOwnProps)
      dispatchProps = mapDispatchToProps2(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps)
      stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps2.dependsOnOwnProps)
      dispatchProps = mapDispatchToProps2(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged)
      mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }
  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged)
      return handleNewPropsAndNewState();
    if (propsChanged)
      return handleNewProps();
    if (stateChanged)
      return handleNewState();
    return mergedProps;
  }
  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}
function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps, initMapDispatchToProps = _ref2.initMapDispatchToProps, initMergeProps = _ref2.initMergeProps, options = _objectWithoutPropertiesLoose(_ref2, _excluded$1);
  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps2 = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);
  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps2, mergeProps, dispatch, options);
}
var _excluded = ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"];
function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result)
      return result;
  }
  return function(dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}
function strictEqual(a2, b2) {
  return a2 === b2;
}
function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp, _ref$connectHOC = _ref.connectHOC, connectHOC = _ref$connectHOC === void 0 ? connectAdvanced : _ref$connectHOC, _ref$mapStateToPropsF = _ref.mapStateToPropsFactories, mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? defaultMapStateToPropsFactories : _ref$mapStateToPropsF, _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories, mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? defaultMapDispatchToPropsFactories : _ref$mapDispatchToPro, _ref$mergePropsFactor = _ref.mergePropsFactories, mergePropsFactories = _ref$mergePropsFactor === void 0 ? defaultMergePropsFactories : _ref$mergePropsFactor, _ref$selectorFactory = _ref.selectorFactory, selectorFactory = _ref$selectorFactory === void 0 ? finalPropsSelectorFactory : _ref$selectorFactory;
  return function connect2(mapStateToProps, mapDispatchToProps2, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }
    var _ref3 = _ref2, _ref3$pure = _ref3.pure, pure = _ref3$pure === void 0 ? true : _ref3$pure, _ref3$areStatesEqual = _ref3.areStatesEqual, areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual, _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual, areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? shallowEqual : _ref3$areOwnPropsEqua, _ref3$areStatePropsEq = _ref3.areStatePropsEqual, areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? shallowEqual : _ref3$areStatePropsEq, _ref3$areMergedPropsE = _ref3.areMergedPropsEqual, areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? shallowEqual : _ref3$areMergedPropsE, extraOptions = _objectWithoutPropertiesLoose(_ref3, _excluded);
    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, "mapStateToProps");
    var initMapDispatchToProps = match(mapDispatchToProps2, mapDispatchToPropsFactories, "mapDispatchToProps");
    var initMergeProps = match(mergeProps, mergePropsFactories, "mergeProps");
    return connectHOC(selectorFactory, _extends({
      methodName: "connect",
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      shouldHandleStateChanges: Boolean(mapStateToProps),
      initMapStateToProps,
      initMapDispatchToProps,
      initMergeProps,
      pure,
      areStatesEqual,
      areOwnPropsEqual,
      areStatePropsEqual,
      areMergedPropsEqual
    }, extraOptions));
  };
}
var connect = /* @__PURE__ */ createConnect();
var reactDom = { exports: {} };
var reactDom_production_min = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
      return test2[n2];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  var f2, g2, h2, k2;
  if (typeof performance === "object" && typeof performance.now === "function") {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  if (typeof window === "undefined" || typeof MessageChannel !== "function") {
    var t2 = null, u2 = null, w2 = function() {
      if (t2 !== null)
        try {
          var a2 = exports.unstable_now();
          t2(true, a2);
          t2 = null;
        } catch (b2) {
          throw setTimeout(w2, 0), b2;
        }
    };
    f2 = function(a2) {
      t2 !== null ? setTimeout(f2, 0, a2) : (t2 = a2, setTimeout(w2, 0));
    };
    g2 = function(a2, b2) {
      u2 = setTimeout(a2, b2);
    };
    h2 = function() {
      clearTimeout(u2);
    };
    exports.unstable_shouldYield = function() {
      return false;
    };
    k2 = exports.unstable_forceFrameRate = function() {
    };
  } else {
    var x = window.setTimeout, y2 = window.clearTimeout;
    if (typeof console !== "undefined") {
      var z2 = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame !== "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
      typeof z2 !== "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    }
    var A2 = false, B2 = null, C2 = -1, D2 = 5, E = 0;
    exports.unstable_shouldYield = function() {
      return exports.unstable_now() >= E;
    };
    k2 = function() {
    };
    exports.unstable_forceFrameRate = function(a2) {
      0 > a2 || 125 < a2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D2 = 0 < a2 ? Math.floor(1e3 / a2) : 5;
    };
    var F2 = new MessageChannel(), G2 = F2.port2;
    F2.port1.onmessage = function() {
      if (B2 !== null) {
        var a2 = exports.unstable_now();
        E = a2 + D2;
        try {
          B2(true, a2) ? G2.postMessage(null) : (A2 = false, B2 = null);
        } catch (b2) {
          throw G2.postMessage(null), b2;
        }
      } else
        A2 = false;
    };
    f2 = function(a2) {
      B2 = a2;
      A2 || (A2 = true, G2.postMessage(null));
    };
    g2 = function(a2, b2) {
      C2 = x(function() {
        a2(exports.unstable_now());
      }, b2);
    };
    h2 = function() {
      y2(C2);
      C2 = -1;
    };
  }
  function H2(a2, b2) {
    var c2 = a2.length;
    a2.push(b2);
    a:
      for (; ; ) {
        var d2 = c2 - 1 >>> 1, e2 = a2[d2];
        if (e2 !== void 0 && 0 < I2(e2, b2))
          a2[d2] = b2, a2[c2] = e2, c2 = d2;
        else
          break a;
      }
  }
  function J(a2) {
    a2 = a2[0];
    return a2 === void 0 ? null : a2;
  }
  function K(a2) {
    var b2 = a2[0];
    if (b2 !== void 0) {
      var c2 = a2.pop();
      if (c2 !== b2) {
        a2[0] = c2;
        a:
          for (var d2 = 0, e2 = a2.length; d2 < e2; ) {
            var m2 = 2 * (d2 + 1) - 1, n2 = a2[m2], v2 = m2 + 1, r2 = a2[v2];
            if (n2 !== void 0 && 0 > I2(n2, c2))
              r2 !== void 0 && 0 > I2(r2, n2) ? (a2[d2] = r2, a2[v2] = c2, d2 = v2) : (a2[d2] = n2, a2[m2] = c2, d2 = m2);
            else if (r2 !== void 0 && 0 > I2(r2, c2))
              a2[d2] = r2, a2[v2] = c2, d2 = v2;
            else
              break a;
          }
      }
      return b2;
    }
    return null;
  }
  function I2(a2, b2) {
    var c2 = a2.sortIndex - b2.sortIndex;
    return c2 !== 0 ? c2 : a2.id - b2.id;
  }
  var L = [], M2 = [], N2 = 1, O2 = null, P2 = 3, Q = false, R2 = false, S2 = false;
  function T2(a2) {
    for (var b2 = J(M2); b2 !== null; ) {
      if (b2.callback === null)
        K(M2);
      else if (b2.startTime <= a2)
        K(M2), b2.sortIndex = b2.expirationTime, H2(L, b2);
      else
        break;
      b2 = J(M2);
    }
  }
  function U2(a2) {
    S2 = false;
    T2(a2);
    if (!R2)
      if (J(L) !== null)
        R2 = true, f2(V2);
      else {
        var b2 = J(M2);
        b2 !== null && g2(U2, b2.startTime - a2);
      }
  }
  function V2(a2, b2) {
    R2 = false;
    S2 && (S2 = false, h2());
    Q = true;
    var c2 = P2;
    try {
      T2(b2);
      for (O2 = J(L); O2 !== null && (!(O2.expirationTime > b2) || a2 && !exports.unstable_shouldYield()); ) {
        var d2 = O2.callback;
        if (typeof d2 === "function") {
          O2.callback = null;
          P2 = O2.priorityLevel;
          var e2 = d2(O2.expirationTime <= b2);
          b2 = exports.unstable_now();
          typeof e2 === "function" ? O2.callback = e2 : O2 === J(L) && K(L);
          T2(b2);
        } else
          K(L);
        O2 = J(L);
      }
      if (O2 !== null)
        var m2 = true;
      else {
        var n2 = J(M2);
        n2 !== null && g2(U2, n2.startTime - b2);
        m2 = false;
      }
      return m2;
    } finally {
      O2 = null, P2 = c2, Q = false;
    }
  }
  var W2 = k2;
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a2) {
    a2.callback = null;
  };
  exports.unstable_continueExecution = function() {
    R2 || Q || (R2 = true, f2(V2));
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return P2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return J(L);
  };
  exports.unstable_next = function(a2) {
    switch (P2) {
      case 1:
      case 2:
      case 3:
        var b2 = 3;
        break;
      default:
        b2 = P2;
    }
    var c2 = P2;
    P2 = b2;
    try {
      return a2();
    } finally {
      P2 = c2;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = W2;
  exports.unstable_runWithPriority = function(a2, b2) {
    switch (a2) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a2 = 3;
    }
    var c2 = P2;
    P2 = a2;
    try {
      return b2();
    } finally {
      P2 = c2;
    }
  };
  exports.unstable_scheduleCallback = function(a2, b2, c2) {
    var d2 = exports.unstable_now();
    typeof c2 === "object" && c2 !== null ? (c2 = c2.delay, c2 = typeof c2 === "number" && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
    switch (a2) {
      case 1:
        var e2 = -1;
        break;
      case 2:
        e2 = 250;
        break;
      case 5:
        e2 = 1073741823;
        break;
      case 4:
        e2 = 1e4;
        break;
      default:
        e2 = 5e3;
    }
    e2 = c2 + e2;
    a2 = { id: N2++, callback: b2, priorityLevel: a2, startTime: c2, expirationTime: e2, sortIndex: -1 };
    c2 > d2 ? (a2.sortIndex = c2, H2(M2, a2), J(L) === null && a2 === J(M2) && (S2 ? h2() : S2 = true, g2(U2, c2 - d2))) : (a2.sortIndex = e2, H2(L, a2), R2 || Q || (R2 = true, f2(V2)));
    return a2;
  };
  exports.unstable_wrapCallback = function(a2) {
    var b2 = P2;
    return function() {
      var c2 = P2;
      P2 = b2;
      try {
        return a2.apply(this, arguments);
      } finally {
        P2 = c2;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = React__default, m = objectAssign, r = scheduler.exports;
function y(a2) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c2 = 1; c2 < arguments.length; c2++)
    b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
  return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
if (!aa)
  throw Error(y(227));
var ba = /* @__PURE__ */ new Set(), ca = {};
function da(a2, b2) {
  ea(a2, b2);
  ea(a2 + "Capture", b2);
}
function ea(a2, b2) {
  ca[a2] = b2;
  for (a2 = 0; a2 < b2.length; a2++)
    ba.add(b2[a2]);
}
var fa = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined"), ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ia = Object.prototype.hasOwnProperty, ja = {}, ka = {};
function la(a2) {
  if (ia.call(ka, a2))
    return true;
  if (ia.call(ja, a2))
    return false;
  if (ha.test(a2))
    return ka[a2] = true;
  ja[a2] = true;
  return false;
}
function ma(a2, b2, c2, d2) {
  if (c2 !== null && c2.type === 0)
    return false;
  switch (typeof b2) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d2)
        return false;
      if (c2 !== null)
        return !c2.acceptsBooleans;
      a2 = a2.toLowerCase().slice(0, 5);
      return a2 !== "data-" && a2 !== "aria-";
    default:
      return false;
  }
}
function na(a2, b2, c2, d2) {
  if (b2 === null || typeof b2 === "undefined" || ma(a2, b2, c2, d2))
    return true;
  if (d2)
    return false;
  if (c2 !== null)
    switch (c2.type) {
      case 3:
        return !b2;
      case 4:
        return b2 === false;
      case 5:
        return isNaN(b2);
      case 6:
        return isNaN(b2) || 1 > b2;
    }
  return false;
}
function B(a2, b2, c2, d2, e2, f2, g2) {
  this.acceptsBooleans = b2 === 2 || b2 === 3 || b2 === 4;
  this.attributeName = d2;
  this.attributeNamespace = e2;
  this.mustUseProperty = c2;
  this.propertyName = a2;
  this.type = b2;
  this.sanitizeURL = f2;
  this.removeEmptyString = g2;
}
var D = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
  D[a2] = new B(a2, 0, false, a2, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
  var b2 = a2[0];
  D[b2] = new B(b2, 1, false, a2[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
  D[a2] = new B(a2, 2, false, a2.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
  D[a2] = new B(a2, 2, false, a2, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
  D[a2] = new B(a2, 3, false, a2.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a2) {
  D[a2] = new B(a2, 3, true, a2, null, false, false);
});
["capture", "download"].forEach(function(a2) {
  D[a2] = new B(a2, 4, false, a2, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a2) {
  D[a2] = new B(a2, 6, false, a2, null, false, false);
});
["rowSpan", "start"].forEach(function(a2) {
  D[a2] = new B(a2, 5, false, a2.toLowerCase(), null, false, false);
});
var oa = /[\-:]([a-z])/g;
function pa(a2) {
  return a2[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
  var b2 = a2.replace(oa, pa);
  D[b2] = new B(b2, 1, false, a2, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
  var b2 = a2.replace(oa, pa);
  D[b2] = new B(b2, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
  var b2 = a2.replace(oa, pa);
  D[b2] = new B(b2, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a2) {
  D[a2] = new B(a2, 1, false, a2.toLowerCase(), null, false, false);
});
D.xlinkHref = new B("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a2) {
  D[a2] = new B(a2, 1, false, a2.toLowerCase(), null, true, true);
});
function qa(a2, b2, c2, d2) {
  var e2 = D.hasOwnProperty(b2) ? D[b2] : null;
  var f2 = e2 !== null ? e2.type === 0 : d2 ? false : !(2 < b2.length) || b2[0] !== "o" && b2[0] !== "O" || b2[1] !== "n" && b2[1] !== "N" ? false : true;
  f2 || (na(b2, c2, e2, d2) && (c2 = null), d2 || e2 === null ? la(b2) && (c2 === null ? a2.removeAttribute(b2) : a2.setAttribute(b2, "" + c2)) : e2.mustUseProperty ? a2[e2.propertyName] = c2 === null ? e2.type === 3 ? false : "" : c2 : (b2 = e2.attributeName, d2 = e2.attributeNamespace, c2 === null ? a2.removeAttribute(b2) : (e2 = e2.type, c2 = e2 === 3 || e2 === 4 && c2 === true ? "" : "" + c2, d2 ? a2.setAttributeNS(d2, b2, c2) : a2.setAttribute(b2, c2))));
}
var ra = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, sa = 60103, ta = 60106, ua = 60107, wa = 60108, xa = 60114, ya = 60109, za = 60110, Aa = 60112, Ba = 60113, Ca = 60120, Da = 60115, Ea = 60116, Fa = 60121, Ga = 60128, Ha = 60129, Ia = 60130, Ja = 60131;
if (typeof Symbol === "function" && Symbol.for) {
  var E = Symbol.for;
  sa = E("react.element");
  ta = E("react.portal");
  ua = E("react.fragment");
  wa = E("react.strict_mode");
  xa = E("react.profiler");
  ya = E("react.provider");
  za = E("react.context");
  Aa = E("react.forward_ref");
  Ba = E("react.suspense");
  Ca = E("react.suspense_list");
  Da = E("react.memo");
  Ea = E("react.lazy");
  Fa = E("react.block");
  E("react.scope");
  Ga = E("react.opaque.id");
  Ha = E("react.debug_trace_mode");
  Ia = E("react.offscreen");
  Ja = E("react.legacy_hidden");
}
var Ka = typeof Symbol === "function" && Symbol.iterator;
function La(a2) {
  if (a2 === null || typeof a2 !== "object")
    return null;
  a2 = Ka && a2[Ka] || a2["@@iterator"];
  return typeof a2 === "function" ? a2 : null;
}
var Ma;
function Na(a2) {
  if (Ma === void 0)
    try {
      throw Error();
    } catch (c2) {
      var b2 = c2.stack.trim().match(/\n( *(at )?)/);
      Ma = b2 && b2[1] || "";
    }
  return "\n" + Ma + a2;
}
var Oa = false;
function Pa(a2, b2) {
  if (!a2 || Oa)
    return "";
  Oa = true;
  var c2 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b2)
      if (b2 = function() {
        throw Error();
      }, Object.defineProperty(b2.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect === "object" && Reflect.construct) {
        try {
          Reflect.construct(b2, []);
        } catch (k2) {
          var d2 = k2;
        }
        Reflect.construct(a2, [], b2);
      } else {
        try {
          b2.call();
        } catch (k2) {
          d2 = k2;
        }
        a2.call(b2.prototype);
      }
    else {
      try {
        throw Error();
      } catch (k2) {
        d2 = k2;
      }
      a2();
    }
  } catch (k2) {
    if (k2 && d2 && typeof k2.stack === "string") {
      for (var e2 = k2.stack.split("\n"), f2 = d2.stack.split("\n"), g2 = e2.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e2[g2] !== f2[h2]; )
        h2--;
      for (; 1 <= g2 && 0 <= h2; g2--, h2--)
        if (e2[g2] !== f2[h2]) {
          if (g2 !== 1 || h2 !== 1) {
            do
              if (g2--, h2--, 0 > h2 || e2[g2] !== f2[h2])
                return "\n" + e2[g2].replace(" at new ", " at ");
            while (1 <= g2 && 0 <= h2);
          }
          break;
        }
    }
  } finally {
    Oa = false, Error.prepareStackTrace = c2;
  }
  return (a2 = a2 ? a2.displayName || a2.name : "") ? Na(a2) : "";
}
function Qa(a2) {
  switch (a2.tag) {
    case 5:
      return Na(a2.type);
    case 16:
      return Na("Lazy");
    case 13:
      return Na("Suspense");
    case 19:
      return Na("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a2 = Pa(a2.type, false), a2;
    case 11:
      return a2 = Pa(a2.type.render, false), a2;
    case 22:
      return a2 = Pa(a2.type._render, false), a2;
    case 1:
      return a2 = Pa(a2.type, true), a2;
    default:
      return "";
  }
}
function Ra(a2) {
  if (a2 == null)
    return null;
  if (typeof a2 === "function")
    return a2.displayName || a2.name || null;
  if (typeof a2 === "string")
    return a2;
  switch (a2) {
    case ua:
      return "Fragment";
    case ta:
      return "Portal";
    case xa:
      return "Profiler";
    case wa:
      return "StrictMode";
    case Ba:
      return "Suspense";
    case Ca:
      return "SuspenseList";
  }
  if (typeof a2 === "object")
    switch (a2.$$typeof) {
      case za:
        return (a2.displayName || "Context") + ".Consumer";
      case ya:
        return (a2._context.displayName || "Context") + ".Provider";
      case Aa:
        var b2 = a2.render;
        b2 = b2.displayName || b2.name || "";
        return a2.displayName || (b2 !== "" ? "ForwardRef(" + b2 + ")" : "ForwardRef");
      case Da:
        return Ra(a2.type);
      case Fa:
        return Ra(a2._render);
      case Ea:
        b2 = a2._payload;
        a2 = a2._init;
        try {
          return Ra(a2(b2));
        } catch (c2) {
        }
    }
  return null;
}
function Sa(a2) {
  switch (typeof a2) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return a2;
    default:
      return "";
  }
}
function Ta(a2) {
  var b2 = a2.type;
  return (a2 = a2.nodeName) && a2.toLowerCase() === "input" && (b2 === "checkbox" || b2 === "radio");
}
function Ua(a2) {
  var b2 = Ta(a2) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a2.constructor.prototype, b2), d2 = "" + a2[b2];
  if (!a2.hasOwnProperty(b2) && typeof c2 !== "undefined" && typeof c2.get === "function" && typeof c2.set === "function") {
    var e2 = c2.get, f2 = c2.set;
    Object.defineProperty(a2, b2, { configurable: true, get: function() {
      return e2.call(this);
    }, set: function(a3) {
      d2 = "" + a3;
      f2.call(this, a3);
    } });
    Object.defineProperty(a2, b2, { enumerable: c2.enumerable });
    return { getValue: function() {
      return d2;
    }, setValue: function(a3) {
      d2 = "" + a3;
    }, stopTracking: function() {
      a2._valueTracker = null;
      delete a2[b2];
    } };
  }
}
function Va(a2) {
  a2._valueTracker || (a2._valueTracker = Ua(a2));
}
function Wa(a2) {
  if (!a2)
    return false;
  var b2 = a2._valueTracker;
  if (!b2)
    return true;
  var c2 = b2.getValue();
  var d2 = "";
  a2 && (d2 = Ta(a2) ? a2.checked ? "true" : "false" : a2.value);
  a2 = d2;
  return a2 !== c2 ? (b2.setValue(a2), true) : false;
}
function Xa(a2) {
  a2 = a2 || (typeof document !== "undefined" ? document : void 0);
  if (typeof a2 === "undefined")
    return null;
  try {
    return a2.activeElement || a2.body;
  } catch (b2) {
    return a2.body;
  }
}
function Ya(a2, b2) {
  var c2 = b2.checked;
  return m({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c2 != null ? c2 : a2._wrapperState.initialChecked });
}
function Za(a2, b2) {
  var c2 = b2.defaultValue == null ? "" : b2.defaultValue, d2 = b2.checked != null ? b2.checked : b2.defaultChecked;
  c2 = Sa(b2.value != null ? b2.value : c2);
  a2._wrapperState = { initialChecked: d2, initialValue: c2, controlled: b2.type === "checkbox" || b2.type === "radio" ? b2.checked != null : b2.value != null };
}
function $a(a2, b2) {
  b2 = b2.checked;
  b2 != null && qa(a2, "checked", b2, false);
}
function ab(a2, b2) {
  $a(a2, b2);
  var c2 = Sa(b2.value), d2 = b2.type;
  if (c2 != null)
    if (d2 === "number") {
      if (c2 === 0 && a2.value === "" || a2.value != c2)
        a2.value = "" + c2;
    } else
      a2.value !== "" + c2 && (a2.value = "" + c2);
  else if (d2 === "submit" || d2 === "reset") {
    a2.removeAttribute("value");
    return;
  }
  b2.hasOwnProperty("value") ? bb(a2, b2.type, c2) : b2.hasOwnProperty("defaultValue") && bb(a2, b2.type, Sa(b2.defaultValue));
  b2.checked == null && b2.defaultChecked != null && (a2.defaultChecked = !!b2.defaultChecked);
}
function cb(a2, b2, c2) {
  if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
    var d2 = b2.type;
    if (!(d2 !== "submit" && d2 !== "reset" || b2.value !== void 0 && b2.value !== null))
      return;
    b2 = "" + a2._wrapperState.initialValue;
    c2 || b2 === a2.value || (a2.value = b2);
    a2.defaultValue = b2;
  }
  c2 = a2.name;
  c2 !== "" && (a2.name = "");
  a2.defaultChecked = !!a2._wrapperState.initialChecked;
  c2 !== "" && (a2.name = c2);
}
function bb(a2, b2, c2) {
  if (b2 !== "number" || Xa(a2.ownerDocument) !== a2)
    c2 == null ? a2.defaultValue = "" + a2._wrapperState.initialValue : a2.defaultValue !== "" + c2 && (a2.defaultValue = "" + c2);
}
function db(a2) {
  var b2 = "";
  aa.Children.forEach(a2, function(a3) {
    a3 != null && (b2 += a3);
  });
  return b2;
}
function eb(a2, b2) {
  a2 = m({ children: void 0 }, b2);
  if (b2 = db(b2.children))
    a2.children = b2;
  return a2;
}
function fb(a2, b2, c2, d2) {
  a2 = a2.options;
  if (b2) {
    b2 = {};
    for (var e2 = 0; e2 < c2.length; e2++)
      b2["$" + c2[e2]] = true;
    for (c2 = 0; c2 < a2.length; c2++)
      e2 = b2.hasOwnProperty("$" + a2[c2].value), a2[c2].selected !== e2 && (a2[c2].selected = e2), e2 && d2 && (a2[c2].defaultSelected = true);
  } else {
    c2 = "" + Sa(c2);
    b2 = null;
    for (e2 = 0; e2 < a2.length; e2++) {
      if (a2[e2].value === c2) {
        a2[e2].selected = true;
        d2 && (a2[e2].defaultSelected = true);
        return;
      }
      b2 !== null || a2[e2].disabled || (b2 = a2[e2]);
    }
    b2 !== null && (b2.selected = true);
  }
}
function gb(a2, b2) {
  if (b2.dangerouslySetInnerHTML != null)
    throw Error(y(91));
  return m({}, b2, { value: void 0, defaultValue: void 0, children: "" + a2._wrapperState.initialValue });
}
function hb(a2, b2) {
  var c2 = b2.value;
  if (c2 == null) {
    c2 = b2.children;
    b2 = b2.defaultValue;
    if (c2 != null) {
      if (b2 != null)
        throw Error(y(92));
      if (Array.isArray(c2)) {
        if (!(1 >= c2.length))
          throw Error(y(93));
        c2 = c2[0];
      }
      b2 = c2;
    }
    b2 == null && (b2 = "");
    c2 = b2;
  }
  a2._wrapperState = { initialValue: Sa(c2) };
}
function ib(a2, b2) {
  var c2 = Sa(b2.value), d2 = Sa(b2.defaultValue);
  c2 != null && (c2 = "" + c2, c2 !== a2.value && (a2.value = c2), b2.defaultValue == null && a2.defaultValue !== c2 && (a2.defaultValue = c2));
  d2 != null && (a2.defaultValue = "" + d2);
}
function jb(a2) {
  var b2 = a2.textContent;
  b2 === a2._wrapperState.initialValue && b2 !== "" && b2 !== null && (a2.value = b2);
}
var kb = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
function lb(a2) {
  switch (a2) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function mb(a2, b2) {
  return a2 == null || a2 === "http://www.w3.org/1999/xhtml" ? lb(b2) : a2 === "http://www.w3.org/2000/svg" && b2 === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a2;
}
var nb, ob = function(a2) {
  return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e2) {
    MSApp.execUnsafeLocalFunction(function() {
      return a2(b2, c2, d2, e2);
    });
  } : a2;
}(function(a2, b2) {
  if (a2.namespaceURI !== kb.svg || "innerHTML" in a2)
    a2.innerHTML = b2;
  else {
    nb = nb || document.createElement("div");
    nb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
    for (b2 = nb.firstChild; a2.firstChild; )
      a2.removeChild(a2.firstChild);
    for (; b2.firstChild; )
      a2.appendChild(b2.firstChild);
  }
});
function pb(a2, b2) {
  if (b2) {
    var c2 = a2.firstChild;
    if (c2 && c2 === a2.lastChild && c2.nodeType === 3) {
      c2.nodeValue = b2;
      return;
    }
  }
  a2.textContent = b2;
}
var qb = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, rb = ["Webkit", "ms", "Moz", "O"];
Object.keys(qb).forEach(function(a2) {
  rb.forEach(function(b2) {
    b2 = b2 + a2.charAt(0).toUpperCase() + a2.substring(1);
    qb[b2] = qb[a2];
  });
});
function sb(a2, b2, c2) {
  return b2 == null || typeof b2 === "boolean" || b2 === "" ? "" : c2 || typeof b2 !== "number" || b2 === 0 || qb.hasOwnProperty(a2) && qb[a2] ? ("" + b2).trim() : b2 + "px";
}
function tb(a2, b2) {
  a2 = a2.style;
  for (var c2 in b2)
    if (b2.hasOwnProperty(c2)) {
      var d2 = c2.indexOf("--") === 0, e2 = sb(c2, b2[c2], d2);
      c2 === "float" && (c2 = "cssFloat");
      d2 ? a2.setProperty(c2, e2) : a2[c2] = e2;
    }
}
var ub = m({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function vb(a2, b2) {
  if (b2) {
    if (ub[a2] && (b2.children != null || b2.dangerouslySetInnerHTML != null))
      throw Error(y(137, a2));
    if (b2.dangerouslySetInnerHTML != null) {
      if (b2.children != null)
        throw Error(y(60));
      if (!(typeof b2.dangerouslySetInnerHTML === "object" && "__html" in b2.dangerouslySetInnerHTML))
        throw Error(y(61));
    }
    if (b2.style != null && typeof b2.style !== "object")
      throw Error(y(62));
  }
}
function wb(a2, b2) {
  if (a2.indexOf("-") === -1)
    return typeof b2.is === "string";
  switch (a2) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
function xb(a2) {
  a2 = a2.target || a2.srcElement || window;
  a2.correspondingUseElement && (a2 = a2.correspondingUseElement);
  return a2.nodeType === 3 ? a2.parentNode : a2;
}
var yb = null, zb = null, Ab = null;
function Bb(a2) {
  if (a2 = Cb(a2)) {
    if (typeof yb !== "function")
      throw Error(y(280));
    var b2 = a2.stateNode;
    b2 && (b2 = Db(b2), yb(a2.stateNode, a2.type, b2));
  }
}
function Eb(a2) {
  zb ? Ab ? Ab.push(a2) : Ab = [a2] : zb = a2;
}
function Fb() {
  if (zb) {
    var a2 = zb, b2 = Ab;
    Ab = zb = null;
    Bb(a2);
    if (b2)
      for (a2 = 0; a2 < b2.length; a2++)
        Bb(b2[a2]);
  }
}
function Gb(a2, b2) {
  return a2(b2);
}
function Hb(a2, b2, c2, d2, e2) {
  return a2(b2, c2, d2, e2);
}
function Ib() {
}
var Jb = Gb, Kb = false, Lb = false;
function Mb() {
  if (zb !== null || Ab !== null)
    Ib(), Fb();
}
function Nb(a2, b2, c2) {
  if (Lb)
    return a2(b2, c2);
  Lb = true;
  try {
    return Jb(a2, b2, c2);
  } finally {
    Lb = false, Mb();
  }
}
function Ob(a2, b2) {
  var c2 = a2.stateNode;
  if (c2 === null)
    return null;
  var d2 = Db(c2);
  if (d2 === null)
    return null;
  c2 = d2[b2];
  a:
    switch (b2) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d2 = !d2.disabled) || (a2 = a2.type, d2 = !(a2 === "button" || a2 === "input" || a2 === "select" || a2 === "textarea"));
        a2 = !d2;
        break a;
      default:
        a2 = false;
    }
  if (a2)
    return null;
  if (c2 && typeof c2 !== "function")
    throw Error(y(231, b2, typeof c2));
  return c2;
}
var Pb = false;
if (fa)
  try {
    var Qb = {};
    Object.defineProperty(Qb, "passive", { get: function() {
      Pb = true;
    } });
    window.addEventListener("test", Qb, Qb);
    window.removeEventListener("test", Qb, Qb);
  } catch (a2) {
    Pb = false;
  }
function Rb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b2.apply(c2, l2);
  } catch (n2) {
    this.onError(n2);
  }
}
var Sb = false, Tb = null, Ub = false, Vb = null, Wb = { onError: function(a2) {
  Sb = true;
  Tb = a2;
} };
function Xb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  Sb = false;
  Tb = null;
  Rb.apply(Wb, arguments);
}
function Yb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  Xb.apply(this, arguments);
  if (Sb) {
    if (Sb) {
      var l2 = Tb;
      Sb = false;
      Tb = null;
    } else
      throw Error(y(198));
    Ub || (Ub = true, Vb = l2);
  }
}
function Zb(a2) {
  var b2 = a2, c2 = a2;
  if (a2.alternate)
    for (; b2.return; )
      b2 = b2.return;
  else {
    a2 = b2;
    do
      b2 = a2, (b2.flags & 1026) !== 0 && (c2 = b2.return), a2 = b2.return;
    while (a2);
  }
  return b2.tag === 3 ? c2 : null;
}
function $b(a2) {
  if (a2.tag === 13) {
    var b2 = a2.memoizedState;
    b2 === null && (a2 = a2.alternate, a2 !== null && (b2 = a2.memoizedState));
    if (b2 !== null)
      return b2.dehydrated;
  }
  return null;
}
function ac(a2) {
  if (Zb(a2) !== a2)
    throw Error(y(188));
}
function bc(a2) {
  var b2 = a2.alternate;
  if (!b2) {
    b2 = Zb(a2);
    if (b2 === null)
      throw Error(y(188));
    return b2 !== a2 ? null : a2;
  }
  for (var c2 = a2, d2 = b2; ; ) {
    var e2 = c2.return;
    if (e2 === null)
      break;
    var f2 = e2.alternate;
    if (f2 === null) {
      d2 = e2.return;
      if (d2 !== null) {
        c2 = d2;
        continue;
      }
      break;
    }
    if (e2.child === f2.child) {
      for (f2 = e2.child; f2; ) {
        if (f2 === c2)
          return ac(e2), a2;
        if (f2 === d2)
          return ac(e2), b2;
        f2 = f2.sibling;
      }
      throw Error(y(188));
    }
    if (c2.return !== d2.return)
      c2 = e2, d2 = f2;
    else {
      for (var g2 = false, h2 = e2.child; h2; ) {
        if (h2 === c2) {
          g2 = true;
          c2 = e2;
          d2 = f2;
          break;
        }
        if (h2 === d2) {
          g2 = true;
          d2 = e2;
          c2 = f2;
          break;
        }
        h2 = h2.sibling;
      }
      if (!g2) {
        for (h2 = f2.child; h2; ) {
          if (h2 === c2) {
            g2 = true;
            c2 = f2;
            d2 = e2;
            break;
          }
          if (h2 === d2) {
            g2 = true;
            d2 = f2;
            c2 = e2;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g2)
          throw Error(y(189));
      }
    }
    if (c2.alternate !== d2)
      throw Error(y(190));
  }
  if (c2.tag !== 3)
    throw Error(y(188));
  return c2.stateNode.current === c2 ? a2 : b2;
}
function cc(a2) {
  a2 = bc(a2);
  if (!a2)
    return null;
  for (var b2 = a2; ; ) {
    if (b2.tag === 5 || b2.tag === 6)
      return b2;
    if (b2.child)
      b2.child.return = b2, b2 = b2.child;
    else {
      if (b2 === a2)
        break;
      for (; !b2.sibling; ) {
        if (!b2.return || b2.return === a2)
          return null;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
  }
  return null;
}
function dc(a2, b2) {
  for (var c2 = a2.alternate; b2 !== null; ) {
    if (b2 === a2 || b2 === c2)
      return true;
    b2 = b2.return;
  }
  return false;
}
var ec, fc, gc, hc, ic = false, jc = [], kc = null, lc = null, mc = null, nc = /* @__PURE__ */ new Map(), oc = /* @__PURE__ */ new Map(), pc = [], qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a2, b2, c2, d2, e2) {
  return { blockedOn: a2, domEventName: b2, eventSystemFlags: c2 | 16, nativeEvent: e2, targetContainers: [d2] };
}
function sc(a2, b2) {
  switch (a2) {
    case "focusin":
    case "focusout":
      kc = null;
      break;
    case "dragenter":
    case "dragleave":
      lc = null;
      break;
    case "mouseover":
    case "mouseout":
      mc = null;
      break;
    case "pointerover":
    case "pointerout":
      nc.delete(b2.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      oc.delete(b2.pointerId);
  }
}
function tc(a2, b2, c2, d2, e2, f2) {
  if (a2 === null || a2.nativeEvent !== f2)
    return a2 = rc(b2, c2, d2, e2, f2), b2 !== null && (b2 = Cb(b2), b2 !== null && fc(b2)), a2;
  a2.eventSystemFlags |= d2;
  b2 = a2.targetContainers;
  e2 !== null && b2.indexOf(e2) === -1 && b2.push(e2);
  return a2;
}
function uc(a2, b2, c2, d2, e2) {
  switch (b2) {
    case "focusin":
      return kc = tc(kc, a2, b2, c2, d2, e2), true;
    case "dragenter":
      return lc = tc(lc, a2, b2, c2, d2, e2), true;
    case "mouseover":
      return mc = tc(mc, a2, b2, c2, d2, e2), true;
    case "pointerover":
      var f2 = e2.pointerId;
      nc.set(f2, tc(nc.get(f2) || null, a2, b2, c2, d2, e2));
      return true;
    case "gotpointercapture":
      return f2 = e2.pointerId, oc.set(f2, tc(oc.get(f2) || null, a2, b2, c2, d2, e2)), true;
  }
  return false;
}
function vc(a2) {
  var b2 = wc(a2.target);
  if (b2 !== null) {
    var c2 = Zb(b2);
    if (c2 !== null) {
      if (b2 = c2.tag, b2 === 13) {
        if (b2 = $b(c2), b2 !== null) {
          a2.blockedOn = b2;
          hc(a2.lanePriority, function() {
            r.unstable_runWithPriority(a2.priority, function() {
              gc(c2);
            });
          });
          return;
        }
      } else if (b2 === 3 && c2.stateNode.hydrate) {
        a2.blockedOn = c2.tag === 3 ? c2.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a2.blockedOn = null;
}
function xc(a2) {
  if (a2.blockedOn !== null)
    return false;
  for (var b2 = a2.targetContainers; 0 < b2.length; ) {
    var c2 = yc(a2.domEventName, a2.eventSystemFlags, b2[0], a2.nativeEvent);
    if (c2 !== null)
      return b2 = Cb(c2), b2 !== null && fc(b2), a2.blockedOn = c2, false;
    b2.shift();
  }
  return true;
}
function zc(a2, b2, c2) {
  xc(a2) && c2.delete(b2);
}
function Ac() {
  for (ic = false; 0 < jc.length; ) {
    var a2 = jc[0];
    if (a2.blockedOn !== null) {
      a2 = Cb(a2.blockedOn);
      a2 !== null && ec(a2);
      break;
    }
    for (var b2 = a2.targetContainers; 0 < b2.length; ) {
      var c2 = yc(a2.domEventName, a2.eventSystemFlags, b2[0], a2.nativeEvent);
      if (c2 !== null) {
        a2.blockedOn = c2;
        break;
      }
      b2.shift();
    }
    a2.blockedOn === null && jc.shift();
  }
  kc !== null && xc(kc) && (kc = null);
  lc !== null && xc(lc) && (lc = null);
  mc !== null && xc(mc) && (mc = null);
  nc.forEach(zc);
  oc.forEach(zc);
}
function Bc(a2, b2) {
  a2.blockedOn === b2 && (a2.blockedOn = null, ic || (ic = true, r.unstable_scheduleCallback(r.unstable_NormalPriority, Ac)));
}
function Cc(a2) {
  function b2(b3) {
    return Bc(b3, a2);
  }
  if (0 < jc.length) {
    Bc(jc[0], a2);
    for (var c2 = 1; c2 < jc.length; c2++) {
      var d2 = jc[c2];
      d2.blockedOn === a2 && (d2.blockedOn = null);
    }
  }
  kc !== null && Bc(kc, a2);
  lc !== null && Bc(lc, a2);
  mc !== null && Bc(mc, a2);
  nc.forEach(b2);
  oc.forEach(b2);
  for (c2 = 0; c2 < pc.length; c2++)
    d2 = pc[c2], d2.blockedOn === a2 && (d2.blockedOn = null);
  for (; 0 < pc.length && (c2 = pc[0], c2.blockedOn === null); )
    vc(c2), c2.blockedOn === null && pc.shift();
}
function Dc(a2, b2) {
  var c2 = {};
  c2[a2.toLowerCase()] = b2.toLowerCase();
  c2["Webkit" + a2] = "webkit" + b2;
  c2["Moz" + a2] = "moz" + b2;
  return c2;
}
var Ec = { animationend: Dc("Animation", "AnimationEnd"), animationiteration: Dc("Animation", "AnimationIteration"), animationstart: Dc("Animation", "AnimationStart"), transitionend: Dc("Transition", "TransitionEnd") }, Fc = {}, Gc = {};
fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);
function Hc(a2) {
  if (Fc[a2])
    return Fc[a2];
  if (!Ec[a2])
    return a2;
  var b2 = Ec[a2], c2;
  for (c2 in b2)
    if (b2.hasOwnProperty(c2) && c2 in Gc)
      return Fc[a2] = b2[c2];
  return a2;
}
var Ic = Hc("animationend"), Jc = Hc("animationiteration"), Kc = Hc("animationstart"), Lc = Hc("transitionend"), Mc = /* @__PURE__ */ new Map(), Nc = /* @__PURE__ */ new Map(), Oc = [
  "abort",
  "abort",
  Ic,
  "animationEnd",
  Jc,
  "animationIteration",
  Kc,
  "animationStart",
  "canplay",
  "canPlay",
  "canplaythrough",
  "canPlayThrough",
  "durationchange",
  "durationChange",
  "emptied",
  "emptied",
  "encrypted",
  "encrypted",
  "ended",
  "ended",
  "error",
  "error",
  "gotpointercapture",
  "gotPointerCapture",
  "load",
  "load",
  "loadeddata",
  "loadedData",
  "loadedmetadata",
  "loadedMetadata",
  "loadstart",
  "loadStart",
  "lostpointercapture",
  "lostPointerCapture",
  "playing",
  "playing",
  "progress",
  "progress",
  "seeking",
  "seeking",
  "stalled",
  "stalled",
  "suspend",
  "suspend",
  "timeupdate",
  "timeUpdate",
  Lc,
  "transitionEnd",
  "waiting",
  "waiting"
];
function Pc(a2, b2) {
  for (var c2 = 0; c2 < a2.length; c2 += 2) {
    var d2 = a2[c2], e2 = a2[c2 + 1];
    e2 = "on" + (e2[0].toUpperCase() + e2.slice(1));
    Nc.set(d2, b2);
    Mc.set(d2, e2);
    da(e2, [d2]);
  }
}
var Qc = r.unstable_now;
Qc();
var F = 8;
function Rc(a2) {
  if ((1 & a2) !== 0)
    return F = 15, 1;
  if ((2 & a2) !== 0)
    return F = 14, 2;
  if ((4 & a2) !== 0)
    return F = 13, 4;
  var b2 = 24 & a2;
  if (b2 !== 0)
    return F = 12, b2;
  if ((a2 & 32) !== 0)
    return F = 11, 32;
  b2 = 192 & a2;
  if (b2 !== 0)
    return F = 10, b2;
  if ((a2 & 256) !== 0)
    return F = 9, 256;
  b2 = 3584 & a2;
  if (b2 !== 0)
    return F = 8, b2;
  if ((a2 & 4096) !== 0)
    return F = 7, 4096;
  b2 = 4186112 & a2;
  if (b2 !== 0)
    return F = 6, b2;
  b2 = 62914560 & a2;
  if (b2 !== 0)
    return F = 5, b2;
  if (a2 & 67108864)
    return F = 4, 67108864;
  if ((a2 & 134217728) !== 0)
    return F = 3, 134217728;
  b2 = 805306368 & a2;
  if (b2 !== 0)
    return F = 2, b2;
  if ((1073741824 & a2) !== 0)
    return F = 1, 1073741824;
  F = 8;
  return a2;
}
function Sc(a2) {
  switch (a2) {
    case 99:
      return 15;
    case 98:
      return 10;
    case 97:
    case 96:
      return 8;
    case 95:
      return 2;
    default:
      return 0;
  }
}
function Tc(a2) {
  switch (a2) {
    case 15:
    case 14:
      return 99;
    case 13:
    case 12:
    case 11:
    case 10:
      return 98;
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97;
    case 3:
    case 2:
    case 1:
      return 95;
    case 0:
      return 90;
    default:
      throw Error(y(358, a2));
  }
}
function Uc(a2, b2) {
  var c2 = a2.pendingLanes;
  if (c2 === 0)
    return F = 0;
  var d2 = 0, e2 = 0, f2 = a2.expiredLanes, g2 = a2.suspendedLanes, h2 = a2.pingedLanes;
  if (f2 !== 0)
    d2 = f2, e2 = F = 15;
  else if (f2 = c2 & 134217727, f2 !== 0) {
    var k2 = f2 & ~g2;
    k2 !== 0 ? (d2 = Rc(k2), e2 = F) : (h2 &= f2, h2 !== 0 && (d2 = Rc(h2), e2 = F));
  } else
    f2 = c2 & ~g2, f2 !== 0 ? (d2 = Rc(f2), e2 = F) : h2 !== 0 && (d2 = Rc(h2), e2 = F);
  if (d2 === 0)
    return 0;
  d2 = 31 - Vc(d2);
  d2 = c2 & ((0 > d2 ? 0 : 1 << d2) << 1) - 1;
  if (b2 !== 0 && b2 !== d2 && (b2 & g2) === 0) {
    Rc(b2);
    if (e2 <= F)
      return b2;
    F = e2;
  }
  b2 = a2.entangledLanes;
  if (b2 !== 0)
    for (a2 = a2.entanglements, b2 &= d2; 0 < b2; )
      c2 = 31 - Vc(b2), e2 = 1 << c2, d2 |= a2[c2], b2 &= ~e2;
  return d2;
}
function Wc(a2) {
  a2 = a2.pendingLanes & -1073741825;
  return a2 !== 0 ? a2 : a2 & 1073741824 ? 1073741824 : 0;
}
function Xc(a2, b2) {
  switch (a2) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return a2 = Yc(24 & ~b2), a2 === 0 ? Xc(10, b2) : a2;
    case 10:
      return a2 = Yc(192 & ~b2), a2 === 0 ? Xc(8, b2) : a2;
    case 8:
      return a2 = Yc(3584 & ~b2), a2 === 0 && (a2 = Yc(4186112 & ~b2), a2 === 0 && (a2 = 512)), a2;
    case 2:
      return b2 = Yc(805306368 & ~b2), b2 === 0 && (b2 = 268435456), b2;
  }
  throw Error(y(358, a2));
}
function Yc(a2) {
  return a2 & -a2;
}
function Zc(a2) {
  for (var b2 = [], c2 = 0; 31 > c2; c2++)
    b2.push(a2);
  return b2;
}
function $c(a2, b2, c2) {
  a2.pendingLanes |= b2;
  var d2 = b2 - 1;
  a2.suspendedLanes &= d2;
  a2.pingedLanes &= d2;
  a2 = a2.eventTimes;
  b2 = 31 - Vc(b2);
  a2[b2] = c2;
}
var Vc = Math.clz32 ? Math.clz32 : ad, bd = Math.log, cd = Math.LN2;
function ad(a2) {
  return a2 === 0 ? 32 : 31 - (bd(a2) / cd | 0) | 0;
}
var dd = r.unstable_UserBlockingPriority, ed = r.unstable_runWithPriority, fd = true;
function gd(a2, b2, c2, d2) {
  Kb || Ib();
  var e2 = hd, f2 = Kb;
  Kb = true;
  try {
    Hb(e2, a2, b2, c2, d2);
  } finally {
    (Kb = f2) || Mb();
  }
}
function id(a2, b2, c2, d2) {
  ed(dd, hd.bind(null, a2, b2, c2, d2));
}
function hd(a2, b2, c2, d2) {
  if (fd) {
    var e2;
    if ((e2 = (b2 & 4) === 0) && 0 < jc.length && -1 < qc.indexOf(a2))
      a2 = rc(null, a2, b2, c2, d2), jc.push(a2);
    else {
      var f2 = yc(a2, b2, c2, d2);
      if (f2 === null)
        e2 && sc(a2, d2);
      else {
        if (e2) {
          if (-1 < qc.indexOf(a2)) {
            a2 = rc(f2, a2, b2, c2, d2);
            jc.push(a2);
            return;
          }
          if (uc(f2, a2, b2, c2, d2))
            return;
          sc(a2, d2);
        }
        jd(a2, b2, d2, null, c2);
      }
    }
  }
}
function yc(a2, b2, c2, d2) {
  var e2 = xb(d2);
  e2 = wc(e2);
  if (e2 !== null) {
    var f2 = Zb(e2);
    if (f2 === null)
      e2 = null;
    else {
      var g2 = f2.tag;
      if (g2 === 13) {
        e2 = $b(f2);
        if (e2 !== null)
          return e2;
        e2 = null;
      } else if (g2 === 3) {
        if (f2.stateNode.hydrate)
          return f2.tag === 3 ? f2.stateNode.containerInfo : null;
        e2 = null;
      } else
        f2 !== e2 && (e2 = null);
    }
  }
  jd(a2, b2, d2, e2, c2);
  return null;
}
var kd = null, ld = null, md = null;
function nd() {
  if (md)
    return md;
  var a2, b2 = ld, c2 = b2.length, d2, e2 = "value" in kd ? kd.value : kd.textContent, f2 = e2.length;
  for (a2 = 0; a2 < c2 && b2[a2] === e2[a2]; a2++)
    ;
  var g2 = c2 - a2;
  for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e2[f2 - d2]; d2++)
    ;
  return md = e2.slice(a2, 1 < d2 ? 1 - d2 : void 0);
}
function od(a2) {
  var b2 = a2.keyCode;
  "charCode" in a2 ? (a2 = a2.charCode, a2 === 0 && b2 === 13 && (a2 = 13)) : a2 = b2;
  a2 === 10 && (a2 = 13);
  return 32 <= a2 || a2 === 13 ? a2 : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a2) {
  function b2(b3, d2, e2, f2, g2) {
    this._reactName = b3;
    this._targetInst = e2;
    this.type = d2;
    this.nativeEvent = f2;
    this.target = g2;
    this.currentTarget = null;
    for (var c2 in a2)
      a2.hasOwnProperty(c2) && (b3 = a2[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
    this.isDefaultPrevented = (f2.defaultPrevented != null ? f2.defaultPrevented : f2.returnValue === false) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  m(b2.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a3 = this.nativeEvent;
    a3 && (a3.preventDefault ? a3.preventDefault() : typeof a3.returnValue !== "unknown" && (a3.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a3 = this.nativeEvent;
    a3 && (a3.stopPropagation ? a3.stopPropagation() : typeof a3.cancelBubble !== "unknown" && (a3.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b2;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a2) {
  return a2.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = m({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = m({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a2) {
  return a2.relatedTarget === void 0 ? a2.fromElement === a2.srcElement ? a2.toElement : a2.fromElement : a2.relatedTarget;
}, movementX: function(a2) {
  if ("movementX" in a2)
    return a2.movementX;
  a2 !== yd && (yd && a2.type === "mousemove" ? (wd = a2.screenX - yd.screenX, xd = a2.screenY - yd.screenY) : xd = wd = 0, yd = a2);
  return wd;
}, movementY: function(a2) {
  return "movementY" in a2 ? a2.movementY : xd;
} }), Bd = rd(Ad), Cd = m({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = m({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = m({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = m({}, sd, { clipboardData: function(a2) {
  return "clipboardData" in a2 ? a2.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = m({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a2) {
  var b2 = this.nativeEvent;
  return b2.getModifierState ? b2.getModifierState(a2) : (a2 = Od[a2]) ? !!b2[a2] : false;
}
function zd() {
  return Pd;
}
var Qd = m({}, ud, { key: function(a2) {
  if (a2.key) {
    var b2 = Md[a2.key] || a2.key;
    if (b2 !== "Unidentified")
      return b2;
  }
  return a2.type === "keypress" ? (a2 = od(a2), a2 === 13 ? "Enter" : String.fromCharCode(a2)) : a2.type === "keydown" || a2.type === "keyup" ? Nd[a2.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a2) {
  return a2.type === "keypress" ? od(a2) : 0;
}, keyCode: function(a2) {
  return a2.type === "keydown" || a2.type === "keyup" ? a2.keyCode : 0;
}, which: function(a2) {
  return a2.type === "keypress" ? od(a2) : a2.type === "keydown" || a2.type === "keyup" ? a2.keyCode : 0;
} }), Rd = rd(Qd), Sd = m({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = m({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = m({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = m({}, Ad, {
  deltaX: function(a2) {
    return "deltaX" in a2 ? a2.deltaX : "wheelDeltaX" in a2 ? -a2.wheelDeltaX : 0;
  },
  deltaY: function(a2) {
    return "deltaY" in a2 ? a2.deltaY : "wheelDeltaY" in a2 ? -a2.wheelDeltaY : "wheelDelta" in a2 ? -a2.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = fa && "CompositionEvent" in window, be = null;
fa && "documentMode" in document && (be = document.documentMode);
var ce = fa && "TextEvent" in window && !be, de = fa && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
function ge(a2, b2) {
  switch (a2) {
    case "keyup":
      return $d.indexOf(b2.keyCode) !== -1;
    case "keydown":
      return b2.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a2) {
  a2 = a2.detail;
  return typeof a2 === "object" && "data" in a2 ? a2.data : null;
}
var ie = false;
function je(a2, b2) {
  switch (a2) {
    case "compositionend":
      return he(b2);
    case "keypress":
      if (b2.which !== 32)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a2 = b2.data, a2 === ee && fe ? null : a2;
    default:
      return null;
  }
}
function ke(a2, b2) {
  if (ie)
    return a2 === "compositionend" || !ae && ge(a2, b2) ? (a2 = nd(), md = ld = kd = null, ie = false, a2) : null;
  switch (a2) {
    case "paste":
      return null;
    case "keypress":
      if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
        if (b2.char && 1 < b2.char.length)
          return b2.char;
        if (b2.which)
          return String.fromCharCode(b2.which);
      }
      return null;
    case "compositionend":
      return de && b2.locale !== "ko" ? null : b2.data;
    default:
      return null;
  }
}
var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return b2 === "input" ? !!le[a2.type] : b2 === "textarea" ? true : false;
}
function ne(a2, b2, c2, d2) {
  Eb(d2);
  b2 = oe(b2, "onChange");
  0 < b2.length && (c2 = new td("onChange", "change", null, c2, d2), a2.push({ event: c2, listeners: b2 }));
}
var pe = null, qe = null;
function re(a2) {
  se(a2, 0);
}
function te(a2) {
  var b2 = ue(a2);
  if (Wa(b2))
    return a2;
}
function ve(a2, b2) {
  if (a2 === "change")
    return b2;
}
var we = false;
if (fa) {
  var xe;
  if (fa) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = typeof ze.oninput === "function";
    }
    xe = ye;
  } else
    xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a2) {
  if (a2.propertyName === "value" && te(qe)) {
    var b2 = [];
    ne(b2, qe, a2, xb(a2));
    a2 = re;
    if (Kb)
      a2(b2);
    else {
      Kb = true;
      try {
        Gb(a2, b2);
      } finally {
        Kb = false, Mb();
      }
    }
  }
}
function Ce(a2, b2, c2) {
  a2 === "focusin" ? (Ae(), pe = b2, qe = c2, pe.attachEvent("onpropertychange", Be)) : a2 === "focusout" && Ae();
}
function De(a2) {
  if (a2 === "selectionchange" || a2 === "keyup" || a2 === "keydown")
    return te(qe);
}
function Ee(a2, b2) {
  if (a2 === "click")
    return te(b2);
}
function Fe(a2, b2) {
  if (a2 === "input" || a2 === "change")
    return te(b2);
}
function Ge(a2, b2) {
  return a2 === b2 && (a2 !== 0 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
var He = typeof Object.is === "function" ? Object.is : Ge, Ie = Object.prototype.hasOwnProperty;
function Je(a2, b2) {
  if (He(a2, b2))
    return true;
  if (typeof a2 !== "object" || a2 === null || typeof b2 !== "object" || b2 === null)
    return false;
  var c2 = Object.keys(a2), d2 = Object.keys(b2);
  if (c2.length !== d2.length)
    return false;
  for (d2 = 0; d2 < c2.length; d2++)
    if (!Ie.call(b2, c2[d2]) || !He(a2[c2[d2]], b2[c2[d2]]))
      return false;
  return true;
}
function Ke(a2) {
  for (; a2 && a2.firstChild; )
    a2 = a2.firstChild;
  return a2;
}
function Le(a2, b2) {
  var c2 = Ke(a2);
  a2 = 0;
  for (var d2; c2; ) {
    if (c2.nodeType === 3) {
      d2 = a2 + c2.textContent.length;
      if (a2 <= b2 && d2 >= b2)
        return { node: c2, offset: b2 - a2 };
      a2 = d2;
    }
    a: {
      for (; c2; ) {
        if (c2.nextSibling) {
          c2 = c2.nextSibling;
          break a;
        }
        c2 = c2.parentNode;
      }
      c2 = void 0;
    }
    c2 = Ke(c2);
  }
}
function Me(a2, b2) {
  return a2 && b2 ? a2 === b2 ? true : a2 && a2.nodeType === 3 ? false : b2 && b2.nodeType === 3 ? Me(a2, b2.parentNode) : "contains" in a2 ? a2.contains(b2) : a2.compareDocumentPosition ? !!(a2.compareDocumentPosition(b2) & 16) : false : false;
}
function Ne() {
  for (var a2 = window, b2 = Xa(); b2 instanceof a2.HTMLIFrameElement; ) {
    try {
      var c2 = typeof b2.contentWindow.location.href === "string";
    } catch (d2) {
      c2 = false;
    }
    if (c2)
      a2 = b2.contentWindow;
    else
      break;
    b2 = Xa(a2.document);
  }
  return b2;
}
function Oe(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return b2 && (b2 === "input" && (a2.type === "text" || a2.type === "search" || a2.type === "tel" || a2.type === "url" || a2.type === "password") || b2 === "textarea" || a2.contentEditable === "true");
}
var Pe = fa && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
function Ue(a2, b2, c2) {
  var d2 = c2.window === c2 ? c2.document : c2.nodeType === 9 ? c2 : c2.ownerDocument;
  Te || Qe == null || Qe !== Xa(d2) || (d2 = Qe, "selectionStart" in d2 && Oe(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Se && Je(Se, d2) || (Se = d2, d2 = oe(Re, "onSelect"), 0 < d2.length && (b2 = new td("onSelect", "select", null, b2, c2), a2.push({ event: b2, listeners: d2 }), b2.target = Qe)));
}
Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
Pc(Oc, 2);
for (var Ve = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), We = 0; We < Ve.length; We++)
  Nc.set(Ve[We], 0);
ea("onMouseEnter", ["mouseout", "mouseover"]);
ea("onMouseLeave", ["mouseout", "mouseover"]);
ea("onPointerEnter", ["pointerout", "pointerover"]);
ea("onPointerLeave", ["pointerout", "pointerover"]);
da("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
da("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
da("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
da("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Xe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ye = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a2, b2, c2) {
  var d2 = a2.type || "unknown-event";
  a2.currentTarget = c2;
  Yb(d2, b2, void 0, a2);
  a2.currentTarget = null;
}
function se(a2, b2) {
  b2 = (b2 & 4) !== 0;
  for (var c2 = 0; c2 < a2.length; c2++) {
    var d2 = a2[c2], e2 = d2.event;
    d2 = d2.listeners;
    a: {
      var f2 = void 0;
      if (b2)
        for (var g2 = d2.length - 1; 0 <= g2; g2--) {
          var h2 = d2[g2], k2 = h2.instance, l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          Ze(e2, h2, l2);
          f2 = k2;
        }
      else
        for (g2 = 0; g2 < d2.length; g2++) {
          h2 = d2[g2];
          k2 = h2.instance;
          l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          Ze(e2, h2, l2);
          f2 = k2;
        }
    }
  }
  if (Ub)
    throw a2 = Vb, Ub = false, Vb = null, a2;
}
function G(a2, b2) {
  var c2 = $e(b2), d2 = a2 + "__bubble";
  c2.has(d2) || (af(b2, a2, 2, false), c2.add(d2));
}
var bf = "_reactListening" + Math.random().toString(36).slice(2);
function cf(a2) {
  a2[bf] || (a2[bf] = true, ba.forEach(function(b2) {
    Ye.has(b2) || df(b2, false, a2, null);
    df(b2, true, a2, null);
  }));
}
function df(a2, b2, c2, d2) {
  var e2 = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, f2 = c2;
  a2 === "selectionchange" && c2.nodeType !== 9 && (f2 = c2.ownerDocument);
  if (d2 !== null && !b2 && Ye.has(a2)) {
    if (a2 !== "scroll")
      return;
    e2 |= 2;
    f2 = d2;
  }
  var g2 = $e(f2), h2 = a2 + "__" + (b2 ? "capture" : "bubble");
  g2.has(h2) || (b2 && (e2 |= 4), af(f2, a2, e2, b2), g2.add(h2));
}
function af(a2, b2, c2, d2) {
  var e2 = Nc.get(b2);
  switch (e2 === void 0 ? 2 : e2) {
    case 0:
      e2 = gd;
      break;
    case 1:
      e2 = id;
      break;
    default:
      e2 = hd;
  }
  c2 = e2.bind(null, b2, c2, a2);
  e2 = void 0;
  !Pb || b2 !== "touchstart" && b2 !== "touchmove" && b2 !== "wheel" || (e2 = true);
  d2 ? e2 !== void 0 ? a2.addEventListener(b2, c2, { capture: true, passive: e2 }) : a2.addEventListener(b2, c2, true) : e2 !== void 0 ? a2.addEventListener(b2, c2, { passive: e2 }) : a2.addEventListener(b2, c2, false);
}
function jd(a2, b2, c2, d2, e2) {
  var f2 = d2;
  if ((b2 & 1) === 0 && (b2 & 2) === 0 && d2 !== null)
    a:
      for (; ; ) {
        if (d2 === null)
          return;
        var g2 = d2.tag;
        if (g2 === 3 || g2 === 4) {
          var h2 = d2.stateNode.containerInfo;
          if (h2 === e2 || h2.nodeType === 8 && h2.parentNode === e2)
            break;
          if (g2 === 4)
            for (g2 = d2.return; g2 !== null; ) {
              var k2 = g2.tag;
              if (k2 === 3 || k2 === 4) {
                if (k2 = g2.stateNode.containerInfo, k2 === e2 || k2.nodeType === 8 && k2.parentNode === e2)
                  return;
              }
              g2 = g2.return;
            }
          for (; h2 !== null; ) {
            g2 = wc(h2);
            if (g2 === null)
              return;
            k2 = g2.tag;
            if (k2 === 5 || k2 === 6) {
              d2 = f2 = g2;
              continue a;
            }
            h2 = h2.parentNode;
          }
        }
        d2 = d2.return;
      }
  Nb(function() {
    var d3 = f2, e3 = xb(c2), g3 = [];
    a: {
      var h3 = Mc.get(a2);
      if (h3 !== void 0) {
        var k3 = td, x = a2;
        switch (a2) {
          case "keypress":
            if (od(c2) === 0)
              break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            x = "focus";
            k3 = Fd;
            break;
          case "focusout":
            x = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (c2.button === 2)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case Ic:
          case Jc:
          case Kc:
            k3 = Hd;
            break;
          case Lc:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var w2 = (b2 & 4) !== 0, z2 = !w2 && a2 === "scroll", u2 = w2 ? h3 !== null ? h3 + "Capture" : null : h3;
        w2 = [];
        for (var t2 = d3, q2; t2 !== null; ) {
          q2 = t2;
          var v2 = q2.stateNode;
          q2.tag === 5 && v2 !== null && (q2 = v2, u2 !== null && (v2 = Ob(t2, u2), v2 != null && w2.push(ef(t2, v2, q2))));
          if (z2)
            break;
          t2 = t2.return;
        }
        0 < w2.length && (h3 = new k3(h3, x, null, c2, e3), g3.push({ event: h3, listeners: w2 }));
      }
    }
    if ((b2 & 7) === 0) {
      a: {
        h3 = a2 === "mouseover" || a2 === "pointerover";
        k3 = a2 === "mouseout" || a2 === "pointerout";
        if (h3 && (b2 & 16) === 0 && (x = c2.relatedTarget || c2.fromElement) && (wc(x) || x[ff]))
          break a;
        if (k3 || h3) {
          h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
          if (k3) {
            if (x = c2.relatedTarget || c2.toElement, k3 = d3, x = x ? wc(x) : null, x !== null && (z2 = Zb(x), x !== z2 || x.tag !== 5 && x.tag !== 6))
              x = null;
          } else
            k3 = null, x = d3;
          if (k3 !== x) {
            w2 = Bd;
            v2 = "onMouseLeave";
            u2 = "onMouseEnter";
            t2 = "mouse";
            if (a2 === "pointerout" || a2 === "pointerover")
              w2 = Td, v2 = "onPointerLeave", u2 = "onPointerEnter", t2 = "pointer";
            z2 = k3 == null ? h3 : ue(k3);
            q2 = x == null ? h3 : ue(x);
            h3 = new w2(v2, t2 + "leave", k3, c2, e3);
            h3.target = z2;
            h3.relatedTarget = q2;
            v2 = null;
            wc(e3) === d3 && (w2 = new w2(u2, t2 + "enter", x, c2, e3), w2.target = q2, w2.relatedTarget = z2, v2 = w2);
            z2 = v2;
            if (k3 && x)
              b: {
                w2 = k3;
                u2 = x;
                t2 = 0;
                for (q2 = w2; q2; q2 = gf(q2))
                  t2++;
                q2 = 0;
                for (v2 = u2; v2; v2 = gf(v2))
                  q2++;
                for (; 0 < t2 - q2; )
                  w2 = gf(w2), t2--;
                for (; 0 < q2 - t2; )
                  u2 = gf(u2), q2--;
                for (; t2--; ) {
                  if (w2 === u2 || u2 !== null && w2 === u2.alternate)
                    break b;
                  w2 = gf(w2);
                  u2 = gf(u2);
                }
                w2 = null;
              }
            else
              w2 = null;
            k3 !== null && hf(g3, h3, k3, w2, false);
            x !== null && z2 !== null && hf(g3, z2, x, w2, true);
          }
        }
      }
      a: {
        h3 = d3 ? ue(d3) : window;
        k3 = h3.nodeName && h3.nodeName.toLowerCase();
        if (k3 === "select" || k3 === "input" && h3.type === "file")
          var J = ve;
        else if (me(h3))
          if (we)
            J = Fe;
          else {
            J = De;
            var K = Ce;
          }
        else
          (k3 = h3.nodeName) && k3.toLowerCase() === "input" && (h3.type === "checkbox" || h3.type === "radio") && (J = Ee);
        if (J && (J = J(a2, d3))) {
          ne(g3, J, c2, e3);
          break a;
        }
        K && K(a2, h3, d3);
        a2 === "focusout" && (K = h3._wrapperState) && K.controlled && h3.type === "number" && bb(h3, "number", h3.value);
      }
      K = d3 ? ue(d3) : window;
      switch (a2) {
        case "focusin":
          if (me(K) || K.contentEditable === "true")
            Qe = K, Re = d3, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g3, c2, e3);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g3, c2, e3);
      }
      var Q;
      if (ae)
        b: {
          switch (a2) {
            case "compositionstart":
              var L = "onCompositionStart";
              break b;
            case "compositionend":
              L = "onCompositionEnd";
              break b;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break b;
          }
          L = void 0;
        }
      else
        ie ? ge(a2, c2) && (L = "onCompositionEnd") : a2 === "keydown" && c2.keyCode === 229 && (L = "onCompositionStart");
      L && (de && c2.locale !== "ko" && (ie || L !== "onCompositionStart" ? L === "onCompositionEnd" && ie && (Q = nd()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), K = oe(d3, L), 0 < K.length && (L = new Ld(L, a2, null, c2, e3), g3.push({ event: L, listeners: K }), Q ? L.data = Q : (Q = he(c2), Q !== null && (L.data = Q))));
      if (Q = ce ? je(a2, c2) : ke(a2, c2))
        d3 = oe(d3, "onBeforeInput"), 0 < d3.length && (e3 = new Ld("onBeforeInput", "beforeinput", null, c2, e3), g3.push({ event: e3, listeners: d3 }), e3.data = Q);
    }
    se(g3, b2);
  });
}
function ef(a2, b2, c2) {
  return { instance: a2, listener: b2, currentTarget: c2 };
}
function oe(a2, b2) {
  for (var c2 = b2 + "Capture", d2 = []; a2 !== null; ) {
    var e2 = a2, f2 = e2.stateNode;
    e2.tag === 5 && f2 !== null && (e2 = f2, f2 = Ob(a2, c2), f2 != null && d2.unshift(ef(a2, f2, e2)), f2 = Ob(a2, b2), f2 != null && d2.push(ef(a2, f2, e2)));
    a2 = a2.return;
  }
  return d2;
}
function gf(a2) {
  if (a2 === null)
    return null;
  do
    a2 = a2.return;
  while (a2 && a2.tag !== 5);
  return a2 ? a2 : null;
}
function hf(a2, b2, c2, d2, e2) {
  for (var f2 = b2._reactName, g2 = []; c2 !== null && c2 !== d2; ) {
    var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
    if (k2 !== null && k2 === d2)
      break;
    h2.tag === 5 && l2 !== null && (h2 = l2, e2 ? (k2 = Ob(c2, f2), k2 != null && g2.unshift(ef(c2, k2, h2))) : e2 || (k2 = Ob(c2, f2), k2 != null && g2.push(ef(c2, k2, h2))));
    c2 = c2.return;
  }
  g2.length !== 0 && a2.push({ event: b2, listeners: g2 });
}
function jf() {
}
var kf = null, lf = null;
function mf(a2, b2) {
  switch (a2) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!b2.autoFocus;
  }
  return false;
}
function nf(a2, b2) {
  return a2 === "textarea" || a2 === "option" || a2 === "noscript" || typeof b2.children === "string" || typeof b2.children === "number" || typeof b2.dangerouslySetInnerHTML === "object" && b2.dangerouslySetInnerHTML !== null && b2.dangerouslySetInnerHTML.__html != null;
}
var of = typeof setTimeout === "function" ? setTimeout : void 0, pf = typeof clearTimeout === "function" ? clearTimeout : void 0;
function qf(a2) {
  a2.nodeType === 1 ? a2.textContent = "" : a2.nodeType === 9 && (a2 = a2.body, a2 != null && (a2.textContent = ""));
}
function rf(a2) {
  for (; a2 != null; a2 = a2.nextSibling) {
    var b2 = a2.nodeType;
    if (b2 === 1 || b2 === 3)
      break;
  }
  return a2;
}
function sf(a2) {
  a2 = a2.previousSibling;
  for (var b2 = 0; a2; ) {
    if (a2.nodeType === 8) {
      var c2 = a2.data;
      if (c2 === "$" || c2 === "$!" || c2 === "$?") {
        if (b2 === 0)
          return a2;
        b2--;
      } else
        c2 === "/$" && b2++;
    }
    a2 = a2.previousSibling;
  }
  return null;
}
var tf = 0;
function uf(a2) {
  return { $$typeof: Ga, toString: a2, valueOf: a2 };
}
var vf = Math.random().toString(36).slice(2), wf = "__reactFiber$" + vf, xf = "__reactProps$" + vf, ff = "__reactContainer$" + vf, yf = "__reactEvents$" + vf;
function wc(a2) {
  var b2 = a2[wf];
  if (b2)
    return b2;
  for (var c2 = a2.parentNode; c2; ) {
    if (b2 = c2[ff] || c2[wf]) {
      c2 = b2.alternate;
      if (b2.child !== null || c2 !== null && c2.child !== null)
        for (a2 = sf(a2); a2 !== null; ) {
          if (c2 = a2[wf])
            return c2;
          a2 = sf(a2);
        }
      return b2;
    }
    a2 = c2;
    c2 = a2.parentNode;
  }
  return null;
}
function Cb(a2) {
  a2 = a2[wf] || a2[ff];
  return !a2 || a2.tag !== 5 && a2.tag !== 6 && a2.tag !== 13 && a2.tag !== 3 ? null : a2;
}
function ue(a2) {
  if (a2.tag === 5 || a2.tag === 6)
    return a2.stateNode;
  throw Error(y(33));
}
function Db(a2) {
  return a2[xf] || null;
}
function $e(a2) {
  var b2 = a2[yf];
  b2 === void 0 && (b2 = a2[yf] = /* @__PURE__ */ new Set());
  return b2;
}
var zf = [], Af = -1;
function Bf(a2) {
  return { current: a2 };
}
function H(a2) {
  0 > Af || (a2.current = zf[Af], zf[Af] = null, Af--);
}
function I(a2, b2) {
  Af++;
  zf[Af] = a2.current;
  a2.current = b2;
}
var Cf = {}, M = Bf(Cf), N = Bf(false), Df = Cf;
function Ef(a2, b2) {
  var c2 = a2.type.contextTypes;
  if (!c2)
    return Cf;
  var d2 = a2.stateNode;
  if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2)
    return d2.__reactInternalMemoizedMaskedChildContext;
  var e2 = {}, f2;
  for (f2 in c2)
    e2[f2] = b2[f2];
  d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = b2, a2.__reactInternalMemoizedMaskedChildContext = e2);
  return e2;
}
function Ff(a2) {
  a2 = a2.childContextTypes;
  return a2 !== null && a2 !== void 0;
}
function Gf() {
  H(N);
  H(M);
}
function Hf(a2, b2, c2) {
  if (M.current !== Cf)
    throw Error(y(168));
  I(M, b2);
  I(N, c2);
}
function If(a2, b2, c2) {
  var d2 = a2.stateNode;
  a2 = b2.childContextTypes;
  if (typeof d2.getChildContext !== "function")
    return c2;
  d2 = d2.getChildContext();
  for (var e2 in d2)
    if (!(e2 in a2))
      throw Error(y(108, Ra(b2) || "Unknown", e2));
  return m({}, c2, d2);
}
function Jf(a2) {
  a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Cf;
  Df = M.current;
  I(M, a2);
  I(N, N.current);
  return true;
}
function Kf(a2, b2, c2) {
  var d2 = a2.stateNode;
  if (!d2)
    throw Error(y(169));
  c2 ? (a2 = If(a2, b2, Df), d2.__reactInternalMemoizedMergedChildContext = a2, H(N), H(M), I(M, a2)) : H(N);
  I(N, c2);
}
var Lf = null, Mf = null, Nf = r.unstable_runWithPriority, Of = r.unstable_scheduleCallback, Pf = r.unstable_cancelCallback, Qf = r.unstable_shouldYield, Rf = r.unstable_requestPaint, Sf = r.unstable_now, Tf = r.unstable_getCurrentPriorityLevel, Uf = r.unstable_ImmediatePriority, Vf = r.unstable_UserBlockingPriority, Wf = r.unstable_NormalPriority, Xf = r.unstable_LowPriority, Yf = r.unstable_IdlePriority, Zf = {}, $f = Rf !== void 0 ? Rf : function() {
}, ag = null, bg = null, cg = false, dg = Sf(), O = 1e4 > dg ? Sf : function() {
  return Sf() - dg;
};
function eg() {
  switch (Tf()) {
    case Uf:
      return 99;
    case Vf:
      return 98;
    case Wf:
      return 97;
    case Xf:
      return 96;
    case Yf:
      return 95;
    default:
      throw Error(y(332));
  }
}
function fg(a2) {
  switch (a2) {
    case 99:
      return Uf;
    case 98:
      return Vf;
    case 97:
      return Wf;
    case 96:
      return Xf;
    case 95:
      return Yf;
    default:
      throw Error(y(332));
  }
}
function gg(a2, b2) {
  a2 = fg(a2);
  return Nf(a2, b2);
}
function hg(a2, b2, c2) {
  a2 = fg(a2);
  return Of(a2, b2, c2);
}
function ig() {
  if (bg !== null) {
    var a2 = bg;
    bg = null;
    Pf(a2);
  }
  jg();
}
function jg() {
  if (!cg && ag !== null) {
    cg = true;
    var a2 = 0;
    try {
      var b2 = ag;
      gg(99, function() {
        for (; a2 < b2.length; a2++) {
          var c2 = b2[a2];
          do
            c2 = c2(true);
          while (c2 !== null);
        }
      });
      ag = null;
    } catch (c2) {
      throw ag !== null && (ag = ag.slice(a2 + 1)), Of(Uf, ig), c2;
    } finally {
      cg = false;
    }
  }
}
var kg = ra.ReactCurrentBatchConfig;
function lg(a2, b2) {
  if (a2 && a2.defaultProps) {
    b2 = m({}, b2);
    a2 = a2.defaultProps;
    for (var c2 in a2)
      b2[c2] === void 0 && (b2[c2] = a2[c2]);
    return b2;
  }
  return b2;
}
var mg = Bf(null), ng = null, og = null, pg = null;
function qg() {
  pg = og = ng = null;
}
function rg(a2) {
  var b2 = mg.current;
  H(mg);
  a2.type._context._currentValue = b2;
}
function sg(a2, b2) {
  for (; a2 !== null; ) {
    var c2 = a2.alternate;
    if ((a2.childLanes & b2) === b2)
      if (c2 === null || (c2.childLanes & b2) === b2)
        break;
      else
        c2.childLanes |= b2;
    else
      a2.childLanes |= b2, c2 !== null && (c2.childLanes |= b2);
    a2 = a2.return;
  }
}
function tg(a2, b2) {
  ng = a2;
  pg = og = null;
  a2 = a2.dependencies;
  a2 !== null && a2.firstContext !== null && ((a2.lanes & b2) !== 0 && (ug = true), a2.firstContext = null);
}
function vg(a2, b2) {
  if (pg !== a2 && b2 !== false && b2 !== 0) {
    if (typeof b2 !== "number" || b2 === 1073741823)
      pg = a2, b2 = 1073741823;
    b2 = { context: a2, observedBits: b2, next: null };
    if (og === null) {
      if (ng === null)
        throw Error(y(308));
      og = b2;
      ng.dependencies = { lanes: 0, firstContext: b2, responders: null };
    } else
      og = og.next = b2;
  }
  return a2._currentValue;
}
var wg = false;
function xg(a2) {
  a2.updateQueue = { baseState: a2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
}
function yg(a2, b2) {
  a2 = a2.updateQueue;
  b2.updateQueue === a2 && (b2.updateQueue = { baseState: a2.baseState, firstBaseUpdate: a2.firstBaseUpdate, lastBaseUpdate: a2.lastBaseUpdate, shared: a2.shared, effects: a2.effects });
}
function zg(a2, b2) {
  return { eventTime: a2, lane: b2, tag: 0, payload: null, callback: null, next: null };
}
function Ag(a2, b2) {
  a2 = a2.updateQueue;
  if (a2 !== null) {
    a2 = a2.shared;
    var c2 = a2.pending;
    c2 === null ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
    a2.pending = b2;
  }
}
function Bg(a2, b2) {
  var c2 = a2.updateQueue, d2 = a2.alternate;
  if (d2 !== null && (d2 = d2.updateQueue, c2 === d2)) {
    var e2 = null, f2 = null;
    c2 = c2.firstBaseUpdate;
    if (c2 !== null) {
      do {
        var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
        f2 === null ? e2 = f2 = g2 : f2 = f2.next = g2;
        c2 = c2.next;
      } while (c2 !== null);
      f2 === null ? e2 = f2 = b2 : f2 = f2.next = b2;
    } else
      e2 = f2 = b2;
    c2 = { baseState: d2.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects };
    a2.updateQueue = c2;
    return;
  }
  a2 = c2.lastBaseUpdate;
  a2 === null ? c2.firstBaseUpdate = b2 : a2.next = b2;
  c2.lastBaseUpdate = b2;
}
function Cg(a2, b2, c2, d2) {
  var e2 = a2.updateQueue;
  wg = false;
  var f2 = e2.firstBaseUpdate, g2 = e2.lastBaseUpdate, h2 = e2.shared.pending;
  if (h2 !== null) {
    e2.shared.pending = null;
    var k2 = h2, l2 = k2.next;
    k2.next = null;
    g2 === null ? f2 = l2 : g2.next = l2;
    g2 = k2;
    var n2 = a2.alternate;
    if (n2 !== null) {
      n2 = n2.updateQueue;
      var A2 = n2.lastBaseUpdate;
      A2 !== g2 && (A2 === null ? n2.firstBaseUpdate = l2 : A2.next = l2, n2.lastBaseUpdate = k2);
    }
  }
  if (f2 !== null) {
    A2 = e2.baseState;
    g2 = 0;
    n2 = l2 = k2 = null;
    do {
      h2 = f2.lane;
      var p2 = f2.eventTime;
      if ((d2 & h2) === h2) {
        n2 !== null && (n2 = n2.next = {
          eventTime: p2,
          lane: 0,
          tag: f2.tag,
          payload: f2.payload,
          callback: f2.callback,
          next: null
        });
        a: {
          var C2 = a2, x = f2;
          h2 = b2;
          p2 = c2;
          switch (x.tag) {
            case 1:
              C2 = x.payload;
              if (typeof C2 === "function") {
                A2 = C2.call(p2, A2, h2);
                break a;
              }
              A2 = C2;
              break a;
            case 3:
              C2.flags = C2.flags & -4097 | 64;
            case 0:
              C2 = x.payload;
              h2 = typeof C2 === "function" ? C2.call(p2, A2, h2) : C2;
              if (h2 === null || h2 === void 0)
                break a;
              A2 = m({}, A2, h2);
              break a;
            case 2:
              wg = true;
          }
        }
        f2.callback !== null && (a2.flags |= 32, h2 = e2.effects, h2 === null ? e2.effects = [f2] : h2.push(f2));
      } else
        p2 = { eventTime: p2, lane: h2, tag: f2.tag, payload: f2.payload, callback: f2.callback, next: null }, n2 === null ? (l2 = n2 = p2, k2 = A2) : n2 = n2.next = p2, g2 |= h2;
      f2 = f2.next;
      if (f2 === null)
        if (h2 = e2.shared.pending, h2 === null)
          break;
        else
          f2 = h2.next, h2.next = null, e2.lastBaseUpdate = h2, e2.shared.pending = null;
    } while (1);
    n2 === null && (k2 = A2);
    e2.baseState = k2;
    e2.firstBaseUpdate = l2;
    e2.lastBaseUpdate = n2;
    Dg |= g2;
    a2.lanes = g2;
    a2.memoizedState = A2;
  }
}
function Eg(a2, b2, c2) {
  a2 = b2.effects;
  b2.effects = null;
  if (a2 !== null)
    for (b2 = 0; b2 < a2.length; b2++) {
      var d2 = a2[b2], e2 = d2.callback;
      if (e2 !== null) {
        d2.callback = null;
        d2 = c2;
        if (typeof e2 !== "function")
          throw Error(y(191, e2));
        e2.call(d2);
      }
    }
}
var Fg = new aa.Component().refs;
function Gg(a2, b2, c2, d2) {
  b2 = a2.memoizedState;
  c2 = c2(d2, b2);
  c2 = c2 === null || c2 === void 0 ? b2 : m({}, b2, c2);
  a2.memoizedState = c2;
  a2.lanes === 0 && (a2.updateQueue.baseState = c2);
}
var Kg = { isMounted: function(a2) {
  return (a2 = a2._reactInternals) ? Zb(a2) === a2 : false;
}, enqueueSetState: function(a2, b2, c2) {
  a2 = a2._reactInternals;
  var d2 = Hg(), e2 = Ig(a2), f2 = zg(d2, e2);
  f2.payload = b2;
  c2 !== void 0 && c2 !== null && (f2.callback = c2);
  Ag(a2, f2);
  Jg(a2, e2, d2);
}, enqueueReplaceState: function(a2, b2, c2) {
  a2 = a2._reactInternals;
  var d2 = Hg(), e2 = Ig(a2), f2 = zg(d2, e2);
  f2.tag = 1;
  f2.payload = b2;
  c2 !== void 0 && c2 !== null && (f2.callback = c2);
  Ag(a2, f2);
  Jg(a2, e2, d2);
}, enqueueForceUpdate: function(a2, b2) {
  a2 = a2._reactInternals;
  var c2 = Hg(), d2 = Ig(a2), e2 = zg(c2, d2);
  e2.tag = 2;
  b2 !== void 0 && b2 !== null && (e2.callback = b2);
  Ag(a2, e2);
  Jg(a2, d2, c2);
} };
function Lg(a2, b2, c2, d2, e2, f2, g2) {
  a2 = a2.stateNode;
  return typeof a2.shouldComponentUpdate === "function" ? a2.shouldComponentUpdate(d2, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !Je(c2, d2) || !Je(e2, f2) : true;
}
function Mg(a2, b2, c2) {
  var d2 = false, e2 = Cf;
  var f2 = b2.contextType;
  typeof f2 === "object" && f2 !== null ? f2 = vg(f2) : (e2 = Ff(b2) ? Df : M.current, d2 = b2.contextTypes, f2 = (d2 = d2 !== null && d2 !== void 0) ? Ef(a2, e2) : Cf);
  b2 = new b2(c2, f2);
  a2.memoizedState = b2.state !== null && b2.state !== void 0 ? b2.state : null;
  b2.updater = Kg;
  a2.stateNode = b2;
  b2._reactInternals = a2;
  d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = e2, a2.__reactInternalMemoizedMaskedChildContext = f2);
  return b2;
}
function Ng(a2, b2, c2, d2) {
  a2 = b2.state;
  typeof b2.componentWillReceiveProps === "function" && b2.componentWillReceiveProps(c2, d2);
  typeof b2.UNSAFE_componentWillReceiveProps === "function" && b2.UNSAFE_componentWillReceiveProps(c2, d2);
  b2.state !== a2 && Kg.enqueueReplaceState(b2, b2.state, null);
}
function Og(a2, b2, c2, d2) {
  var e2 = a2.stateNode;
  e2.props = c2;
  e2.state = a2.memoizedState;
  e2.refs = Fg;
  xg(a2);
  var f2 = b2.contextType;
  typeof f2 === "object" && f2 !== null ? e2.context = vg(f2) : (f2 = Ff(b2) ? Df : M.current, e2.context = Ef(a2, f2));
  Cg(a2, c2, e2, d2);
  e2.state = a2.memoizedState;
  f2 = b2.getDerivedStateFromProps;
  typeof f2 === "function" && (Gg(a2, b2, f2, c2), e2.state = a2.memoizedState);
  typeof b2.getDerivedStateFromProps === "function" || typeof e2.getSnapshotBeforeUpdate === "function" || typeof e2.UNSAFE_componentWillMount !== "function" && typeof e2.componentWillMount !== "function" || (b2 = e2.state, typeof e2.componentWillMount === "function" && e2.componentWillMount(), typeof e2.UNSAFE_componentWillMount === "function" && e2.UNSAFE_componentWillMount(), b2 !== e2.state && Kg.enqueueReplaceState(e2, e2.state, null), Cg(a2, c2, e2, d2), e2.state = a2.memoizedState);
  typeof e2.componentDidMount === "function" && (a2.flags |= 4);
}
var Pg = Array.isArray;
function Qg(a2, b2, c2) {
  a2 = c2.ref;
  if (a2 !== null && typeof a2 !== "function" && typeof a2 !== "object") {
    if (c2._owner) {
      c2 = c2._owner;
      if (c2) {
        if (c2.tag !== 1)
          throw Error(y(309));
        var d2 = c2.stateNode;
      }
      if (!d2)
        throw Error(y(147, a2));
      var e2 = "" + a2;
      if (b2 !== null && b2.ref !== null && typeof b2.ref === "function" && b2.ref._stringRef === e2)
        return b2.ref;
      b2 = function(a3) {
        var b3 = d2.refs;
        b3 === Fg && (b3 = d2.refs = {});
        a3 === null ? delete b3[e2] : b3[e2] = a3;
      };
      b2._stringRef = e2;
      return b2;
    }
    if (typeof a2 !== "string")
      throw Error(y(284));
    if (!c2._owner)
      throw Error(y(290, a2));
  }
  return a2;
}
function Rg(a2, b2) {
  if (a2.type !== "textarea")
    throw Error(y(31, Object.prototype.toString.call(b2) === "[object Object]" ? "object with keys {" + Object.keys(b2).join(", ") + "}" : b2));
}
function Sg(a2) {
  function b2(b3, c3) {
    if (a2) {
      var d3 = b3.lastEffect;
      d3 !== null ? (d3.nextEffect = c3, b3.lastEffect = c3) : b3.firstEffect = b3.lastEffect = c3;
      c3.nextEffect = null;
      c3.flags = 8;
    }
  }
  function c2(c3, d3) {
    if (!a2)
      return null;
    for (; d3 !== null; )
      b2(c3, d3), d3 = d3.sibling;
    return null;
  }
  function d2(a3, b3) {
    for (a3 = /* @__PURE__ */ new Map(); b3 !== null; )
      b3.key !== null ? a3.set(b3.key, b3) : a3.set(b3.index, b3), b3 = b3.sibling;
    return a3;
  }
  function e2(a3, b3) {
    a3 = Tg(a3, b3);
    a3.index = 0;
    a3.sibling = null;
    return a3;
  }
  function f2(b3, c3, d3) {
    b3.index = d3;
    if (!a2)
      return c3;
    d3 = b3.alternate;
    if (d3 !== null)
      return d3 = d3.index, d3 < c3 ? (b3.flags = 2, c3) : d3;
    b3.flags = 2;
    return c3;
  }
  function g2(b3) {
    a2 && b3.alternate === null && (b3.flags = 2);
    return b3;
  }
  function h2(a3, b3, c3, d3) {
    if (b3 === null || b3.tag !== 6)
      return b3 = Ug(c3, a3.mode, d3), b3.return = a3, b3;
    b3 = e2(b3, c3);
    b3.return = a3;
    return b3;
  }
  function k2(a3, b3, c3, d3) {
    if (b3 !== null && b3.elementType === c3.type)
      return d3 = e2(b3, c3.props), d3.ref = Qg(a3, b3, c3), d3.return = a3, d3;
    d3 = Vg(c3.type, c3.key, c3.props, null, a3.mode, d3);
    d3.ref = Qg(a3, b3, c3);
    d3.return = a3;
    return d3;
  }
  function l2(a3, b3, c3, d3) {
    if (b3 === null || b3.tag !== 4 || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation)
      return b3 = Wg(c3, a3.mode, d3), b3.return = a3, b3;
    b3 = e2(b3, c3.children || []);
    b3.return = a3;
    return b3;
  }
  function n2(a3, b3, c3, d3, f3) {
    if (b3 === null || b3.tag !== 7)
      return b3 = Xg(c3, a3.mode, d3, f3), b3.return = a3, b3;
    b3 = e2(b3, c3);
    b3.return = a3;
    return b3;
  }
  function A2(a3, b3, c3) {
    if (typeof b3 === "string" || typeof b3 === "number")
      return b3 = Ug("" + b3, a3.mode, c3), b3.return = a3, b3;
    if (typeof b3 === "object" && b3 !== null) {
      switch (b3.$$typeof) {
        case sa:
          return c3 = Vg(b3.type, b3.key, b3.props, null, a3.mode, c3), c3.ref = Qg(a3, null, b3), c3.return = a3, c3;
        case ta:
          return b3 = Wg(b3, a3.mode, c3), b3.return = a3, b3;
      }
      if (Pg(b3) || La(b3))
        return b3 = Xg(b3, a3.mode, c3, null), b3.return = a3, b3;
      Rg(a3, b3);
    }
    return null;
  }
  function p2(a3, b3, c3, d3) {
    var e3 = b3 !== null ? b3.key : null;
    if (typeof c3 === "string" || typeof c3 === "number")
      return e3 !== null ? null : h2(a3, b3, "" + c3, d3);
    if (typeof c3 === "object" && c3 !== null) {
      switch (c3.$$typeof) {
        case sa:
          return c3.key === e3 ? c3.type === ua ? n2(a3, b3, c3.props.children, d3, e3) : k2(a3, b3, c3, d3) : null;
        case ta:
          return c3.key === e3 ? l2(a3, b3, c3, d3) : null;
      }
      if (Pg(c3) || La(c3))
        return e3 !== null ? null : n2(a3, b3, c3, d3, null);
      Rg(a3, c3);
    }
    return null;
  }
  function C2(a3, b3, c3, d3, e3) {
    if (typeof d3 === "string" || typeof d3 === "number")
      return a3 = a3.get(c3) || null, h2(b3, a3, "" + d3, e3);
    if (typeof d3 === "object" && d3 !== null) {
      switch (d3.$$typeof) {
        case sa:
          return a3 = a3.get(d3.key === null ? c3 : d3.key) || null, d3.type === ua ? n2(b3, a3, d3.props.children, e3, d3.key) : k2(b3, a3, d3, e3);
        case ta:
          return a3 = a3.get(d3.key === null ? c3 : d3.key) || null, l2(b3, a3, d3, e3);
      }
      if (Pg(d3) || La(d3))
        return a3 = a3.get(c3) || null, n2(b3, a3, d3, e3, null);
      Rg(b3, d3);
    }
    return null;
  }
  function x(e3, g3, h3, k3) {
    for (var l3 = null, t2 = null, u2 = g3, z2 = g3 = 0, q2 = null; u2 !== null && z2 < h3.length; z2++) {
      u2.index > z2 ? (q2 = u2, u2 = null) : q2 = u2.sibling;
      var n3 = p2(e3, u2, h3[z2], k3);
      if (n3 === null) {
        u2 === null && (u2 = q2);
        break;
      }
      a2 && u2 && n3.alternate === null && b2(e3, u2);
      g3 = f2(n3, g3, z2);
      t2 === null ? l3 = n3 : t2.sibling = n3;
      t2 = n3;
      u2 = q2;
    }
    if (z2 === h3.length)
      return c2(e3, u2), l3;
    if (u2 === null) {
      for (; z2 < h3.length; z2++)
        u2 = A2(e3, h3[z2], k3), u2 !== null && (g3 = f2(u2, g3, z2), t2 === null ? l3 = u2 : t2.sibling = u2, t2 = u2);
      return l3;
    }
    for (u2 = d2(e3, u2); z2 < h3.length; z2++)
      q2 = C2(u2, e3, z2, h3[z2], k3), q2 !== null && (a2 && q2.alternate !== null && u2.delete(q2.key === null ? z2 : q2.key), g3 = f2(q2, g3, z2), t2 === null ? l3 = q2 : t2.sibling = q2, t2 = q2);
    a2 && u2.forEach(function(a3) {
      return b2(e3, a3);
    });
    return l3;
  }
  function w2(e3, g3, h3, k3) {
    var l3 = La(h3);
    if (typeof l3 !== "function")
      throw Error(y(150));
    h3 = l3.call(h3);
    if (h3 == null)
      throw Error(y(151));
    for (var t2 = l3 = null, u2 = g3, z2 = g3 = 0, q2 = null, n3 = h3.next(); u2 !== null && !n3.done; z2++, n3 = h3.next()) {
      u2.index > z2 ? (q2 = u2, u2 = null) : q2 = u2.sibling;
      var w3 = p2(e3, u2, n3.value, k3);
      if (w3 === null) {
        u2 === null && (u2 = q2);
        break;
      }
      a2 && u2 && w3.alternate === null && b2(e3, u2);
      g3 = f2(w3, g3, z2);
      t2 === null ? l3 = w3 : t2.sibling = w3;
      t2 = w3;
      u2 = q2;
    }
    if (n3.done)
      return c2(e3, u2), l3;
    if (u2 === null) {
      for (; !n3.done; z2++, n3 = h3.next())
        n3 = A2(e3, n3.value, k3), n3 !== null && (g3 = f2(n3, g3, z2), t2 === null ? l3 = n3 : t2.sibling = n3, t2 = n3);
      return l3;
    }
    for (u2 = d2(e3, u2); !n3.done; z2++, n3 = h3.next())
      n3 = C2(u2, e3, z2, n3.value, k3), n3 !== null && (a2 && n3.alternate !== null && u2.delete(n3.key === null ? z2 : n3.key), g3 = f2(n3, g3, z2), t2 === null ? l3 = n3 : t2.sibling = n3, t2 = n3);
    a2 && u2.forEach(function(a3) {
      return b2(e3, a3);
    });
    return l3;
  }
  return function(a3, d3, f3, h3) {
    var k3 = typeof f3 === "object" && f3 !== null && f3.type === ua && f3.key === null;
    k3 && (f3 = f3.props.children);
    var l3 = typeof f3 === "object" && f3 !== null;
    if (l3)
      switch (f3.$$typeof) {
        case sa:
          a: {
            l3 = f3.key;
            for (k3 = d3; k3 !== null; ) {
              if (k3.key === l3) {
                switch (k3.tag) {
                  case 7:
                    if (f3.type === ua) {
                      c2(a3, k3.sibling);
                      d3 = e2(k3, f3.props.children);
                      d3.return = a3;
                      a3 = d3;
                      break a;
                    }
                    break;
                  default:
                    if (k3.elementType === f3.type) {
                      c2(a3, k3.sibling);
                      d3 = e2(k3, f3.props);
                      d3.ref = Qg(a3, k3, f3);
                      d3.return = a3;
                      a3 = d3;
                      break a;
                    }
                }
                c2(a3, k3);
                break;
              } else
                b2(a3, k3);
              k3 = k3.sibling;
            }
            f3.type === ua ? (d3 = Xg(f3.props.children, a3.mode, h3, f3.key), d3.return = a3, a3 = d3) : (h3 = Vg(f3.type, f3.key, f3.props, null, a3.mode, h3), h3.ref = Qg(a3, d3, f3), h3.return = a3, a3 = h3);
          }
          return g2(a3);
        case ta:
          a: {
            for (k3 = f3.key; d3 !== null; ) {
              if (d3.key === k3)
                if (d3.tag === 4 && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
                  c2(a3, d3.sibling);
                  d3 = e2(d3, f3.children || []);
                  d3.return = a3;
                  a3 = d3;
                  break a;
                } else {
                  c2(a3, d3);
                  break;
                }
              else
                b2(a3, d3);
              d3 = d3.sibling;
            }
            d3 = Wg(f3, a3.mode, h3);
            d3.return = a3;
            a3 = d3;
          }
          return g2(a3);
      }
    if (typeof f3 === "string" || typeof f3 === "number")
      return f3 = "" + f3, d3 !== null && d3.tag === 6 ? (c2(a3, d3.sibling), d3 = e2(d3, f3), d3.return = a3, a3 = d3) : (c2(a3, d3), d3 = Ug(f3, a3.mode, h3), d3.return = a3, a3 = d3), g2(a3);
    if (Pg(f3))
      return x(a3, d3, f3, h3);
    if (La(f3))
      return w2(a3, d3, f3, h3);
    l3 && Rg(a3, f3);
    if (typeof f3 === "undefined" && !k3)
      switch (a3.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(y(152, Ra(a3.type) || "Component"));
      }
    return c2(a3, d3);
  };
}
var Yg = Sg(true), Zg = Sg(false), $g = {}, ah = Bf($g), bh = Bf($g), ch = Bf($g);
function dh(a2) {
  if (a2 === $g)
    throw Error(y(174));
  return a2;
}
function eh(a2, b2) {
  I(ch, b2);
  I(bh, a2);
  I(ah, $g);
  a2 = b2.nodeType;
  switch (a2) {
    case 9:
    case 11:
      b2 = (b2 = b2.documentElement) ? b2.namespaceURI : mb(null, "");
      break;
    default:
      a2 = a2 === 8 ? b2.parentNode : b2, b2 = a2.namespaceURI || null, a2 = a2.tagName, b2 = mb(b2, a2);
  }
  H(ah);
  I(ah, b2);
}
function fh() {
  H(ah);
  H(bh);
  H(ch);
}
function gh(a2) {
  dh(ch.current);
  var b2 = dh(ah.current);
  var c2 = mb(b2, a2.type);
  b2 !== c2 && (I(bh, a2), I(ah, c2));
}
function hh(a2) {
  bh.current === a2 && (H(ah), H(bh));
}
var P = Bf(0);
function ih(a2) {
  for (var b2 = a2; b2 !== null; ) {
    if (b2.tag === 13) {
      var c2 = b2.memoizedState;
      if (c2 !== null && (c2 = c2.dehydrated, c2 === null || c2.data === "$?" || c2.data === "$!"))
        return b2;
    } else if (b2.tag === 19 && b2.memoizedProps.revealOrder !== void 0) {
      if ((b2.flags & 64) !== 0)
        return b2;
    } else if (b2.child !== null) {
      b2.child.return = b2;
      b2 = b2.child;
      continue;
    }
    if (b2 === a2)
      break;
    for (; b2.sibling === null; ) {
      if (b2.return === null || b2.return === a2)
        return null;
      b2 = b2.return;
    }
    b2.sibling.return = b2.return;
    b2 = b2.sibling;
  }
  return null;
}
var jh = null, kh = null, lh = false;
function mh(a2, b2) {
  var c2 = nh(5, null, null, 0);
  c2.elementType = "DELETED";
  c2.type = "DELETED";
  c2.stateNode = b2;
  c2.return = a2;
  c2.flags = 8;
  a2.lastEffect !== null ? (a2.lastEffect.nextEffect = c2, a2.lastEffect = c2) : a2.firstEffect = a2.lastEffect = c2;
}
function oh(a2, b2) {
  switch (a2.tag) {
    case 5:
      var c2 = a2.type;
      b2 = b2.nodeType !== 1 || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
      return b2 !== null ? (a2.stateNode = b2, true) : false;
    case 6:
      return b2 = a2.pendingProps === "" || b2.nodeType !== 3 ? null : b2, b2 !== null ? (a2.stateNode = b2, true) : false;
    case 13:
      return false;
    default:
      return false;
  }
}
function ph(a2) {
  if (lh) {
    var b2 = kh;
    if (b2) {
      var c2 = b2;
      if (!oh(a2, b2)) {
        b2 = rf(c2.nextSibling);
        if (!b2 || !oh(a2, b2)) {
          a2.flags = a2.flags & -1025 | 2;
          lh = false;
          jh = a2;
          return;
        }
        mh(jh, c2);
      }
      jh = a2;
      kh = rf(b2.firstChild);
    } else
      a2.flags = a2.flags & -1025 | 2, lh = false, jh = a2;
  }
}
function qh(a2) {
  for (a2 = a2.return; a2 !== null && a2.tag !== 5 && a2.tag !== 3 && a2.tag !== 13; )
    a2 = a2.return;
  jh = a2;
}
function rh(a2) {
  if (a2 !== jh)
    return false;
  if (!lh)
    return qh(a2), lh = true, false;
  var b2 = a2.type;
  if (a2.tag !== 5 || b2 !== "head" && b2 !== "body" && !nf(b2, a2.memoizedProps))
    for (b2 = kh; b2; )
      mh(a2, b2), b2 = rf(b2.nextSibling);
  qh(a2);
  if (a2.tag === 13) {
    a2 = a2.memoizedState;
    a2 = a2 !== null ? a2.dehydrated : null;
    if (!a2)
      throw Error(y(317));
    a: {
      a2 = a2.nextSibling;
      for (b2 = 0; a2; ) {
        if (a2.nodeType === 8) {
          var c2 = a2.data;
          if (c2 === "/$") {
            if (b2 === 0) {
              kh = rf(a2.nextSibling);
              break a;
            }
            b2--;
          } else
            c2 !== "$" && c2 !== "$!" && c2 !== "$?" || b2++;
        }
        a2 = a2.nextSibling;
      }
      kh = null;
    }
  } else
    kh = jh ? rf(a2.stateNode.nextSibling) : null;
  return true;
}
function sh() {
  kh = jh = null;
  lh = false;
}
var th = [];
function uh() {
  for (var a2 = 0; a2 < th.length; a2++)
    th[a2]._workInProgressVersionPrimary = null;
  th.length = 0;
}
var vh = ra.ReactCurrentDispatcher, wh = ra.ReactCurrentBatchConfig, xh = 0, R = null, S = null, T = null, yh = false, zh = false;
function Ah() {
  throw Error(y(321));
}
function Bh(a2, b2) {
  if (b2 === null)
    return false;
  for (var c2 = 0; c2 < b2.length && c2 < a2.length; c2++)
    if (!He(a2[c2], b2[c2]))
      return false;
  return true;
}
function Ch(a2, b2, c2, d2, e2, f2) {
  xh = f2;
  R = b2;
  b2.memoizedState = null;
  b2.updateQueue = null;
  b2.lanes = 0;
  vh.current = a2 === null || a2.memoizedState === null ? Dh : Eh;
  a2 = c2(d2, e2);
  if (zh) {
    f2 = 0;
    do {
      zh = false;
      if (!(25 > f2))
        throw Error(y(301));
      f2 += 1;
      T = S = null;
      b2.updateQueue = null;
      vh.current = Fh;
      a2 = c2(d2, e2);
    } while (zh);
  }
  vh.current = Gh;
  b2 = S !== null && S.next !== null;
  xh = 0;
  T = S = R = null;
  yh = false;
  if (b2)
    throw Error(y(300));
  return a2;
}
function Hh() {
  var a2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  T === null ? R.memoizedState = T = a2 : T = T.next = a2;
  return T;
}
function Ih() {
  if (S === null) {
    var a2 = R.alternate;
    a2 = a2 !== null ? a2.memoizedState : null;
  } else
    a2 = S.next;
  var b2 = T === null ? R.memoizedState : T.next;
  if (b2 !== null)
    T = b2, S = a2;
  else {
    if (a2 === null)
      throw Error(y(310));
    S = a2;
    a2 = { memoizedState: S.memoizedState, baseState: S.baseState, baseQueue: S.baseQueue, queue: S.queue, next: null };
    T === null ? R.memoizedState = T = a2 : T = T.next = a2;
  }
  return T;
}
function Jh(a2, b2) {
  return typeof b2 === "function" ? b2(a2) : b2;
}
function Kh(a2) {
  var b2 = Ih(), c2 = b2.queue;
  if (c2 === null)
    throw Error(y(311));
  c2.lastRenderedReducer = a2;
  var d2 = S, e2 = d2.baseQueue, f2 = c2.pending;
  if (f2 !== null) {
    if (e2 !== null) {
      var g2 = e2.next;
      e2.next = f2.next;
      f2.next = g2;
    }
    d2.baseQueue = e2 = f2;
    c2.pending = null;
  }
  if (e2 !== null) {
    e2 = e2.next;
    d2 = d2.baseState;
    var h2 = g2 = f2 = null, k2 = e2;
    do {
      var l2 = k2.lane;
      if ((xh & l2) === l2)
        h2 !== null && (h2 = h2.next = { lane: 0, action: k2.action, eagerReducer: k2.eagerReducer, eagerState: k2.eagerState, next: null }), d2 = k2.eagerReducer === a2 ? k2.eagerState : a2(d2, k2.action);
      else {
        var n2 = {
          lane: l2,
          action: k2.action,
          eagerReducer: k2.eagerReducer,
          eagerState: k2.eagerState,
          next: null
        };
        h2 === null ? (g2 = h2 = n2, f2 = d2) : h2 = h2.next = n2;
        R.lanes |= l2;
        Dg |= l2;
      }
      k2 = k2.next;
    } while (k2 !== null && k2 !== e2);
    h2 === null ? f2 = d2 : h2.next = g2;
    He(d2, b2.memoizedState) || (ug = true);
    b2.memoizedState = d2;
    b2.baseState = f2;
    b2.baseQueue = h2;
    c2.lastRenderedState = d2;
  }
  return [b2.memoizedState, c2.dispatch];
}
function Lh(a2) {
  var b2 = Ih(), c2 = b2.queue;
  if (c2 === null)
    throw Error(y(311));
  c2.lastRenderedReducer = a2;
  var d2 = c2.dispatch, e2 = c2.pending, f2 = b2.memoizedState;
  if (e2 !== null) {
    c2.pending = null;
    var g2 = e2 = e2.next;
    do
      f2 = a2(f2, g2.action), g2 = g2.next;
    while (g2 !== e2);
    He(f2, b2.memoizedState) || (ug = true);
    b2.memoizedState = f2;
    b2.baseQueue === null && (b2.baseState = f2);
    c2.lastRenderedState = f2;
  }
  return [f2, d2];
}
function Mh(a2, b2, c2) {
  var d2 = b2._getVersion;
  d2 = d2(b2._source);
  var e2 = b2._workInProgressVersionPrimary;
  if (e2 !== null)
    a2 = e2 === d2;
  else if (a2 = a2.mutableReadLanes, a2 = (xh & a2) === a2)
    b2._workInProgressVersionPrimary = d2, th.push(b2);
  if (a2)
    return c2(b2._source);
  th.push(b2);
  throw Error(y(350));
}
function Nh(a2, b2, c2, d2) {
  var e2 = U;
  if (e2 === null)
    throw Error(y(349));
  var f2 = b2._getVersion, g2 = f2(b2._source), h2 = vh.current, k2 = h2.useState(function() {
    return Mh(e2, b2, c2);
  }), l2 = k2[1], n2 = k2[0];
  k2 = T;
  var A2 = a2.memoizedState, p2 = A2.refs, C2 = p2.getSnapshot, x = A2.source;
  A2 = A2.subscribe;
  var w2 = R;
  a2.memoizedState = { refs: p2, source: b2, subscribe: d2 };
  h2.useEffect(function() {
    p2.getSnapshot = c2;
    p2.setSnapshot = l2;
    var a3 = f2(b2._source);
    if (!He(g2, a3)) {
      a3 = c2(b2._source);
      He(n2, a3) || (l2(a3), a3 = Ig(w2), e2.mutableReadLanes |= a3 & e2.pendingLanes);
      a3 = e2.mutableReadLanes;
      e2.entangledLanes |= a3;
      for (var d3 = e2.entanglements, h3 = a3; 0 < h3; ) {
        var k3 = 31 - Vc(h3), v2 = 1 << k3;
        d3[k3] |= a3;
        h3 &= ~v2;
      }
    }
  }, [c2, b2, d2]);
  h2.useEffect(function() {
    return d2(b2._source, function() {
      var a3 = p2.getSnapshot, c3 = p2.setSnapshot;
      try {
        c3(a3(b2._source));
        var d3 = Ig(w2);
        e2.mutableReadLanes |= d3 & e2.pendingLanes;
      } catch (q2) {
        c3(function() {
          throw q2;
        });
      }
    });
  }, [b2, d2]);
  He(C2, c2) && He(x, b2) && He(A2, d2) || (a2 = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: n2 }, a2.dispatch = l2 = Oh.bind(null, R, a2), k2.queue = a2, k2.baseQueue = null, n2 = Mh(e2, b2, c2), k2.memoizedState = k2.baseState = n2);
  return n2;
}
function Ph(a2, b2, c2) {
  var d2 = Ih();
  return Nh(d2, a2, b2, c2);
}
function Qh(a2) {
  var b2 = Hh();
  typeof a2 === "function" && (a2 = a2());
  b2.memoizedState = b2.baseState = a2;
  a2 = b2.queue = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: a2 };
  a2 = a2.dispatch = Oh.bind(null, R, a2);
  return [b2.memoizedState, a2];
}
function Rh(a2, b2, c2, d2) {
  a2 = { tag: a2, create: b2, destroy: c2, deps: d2, next: null };
  b2 = R.updateQueue;
  b2 === null ? (b2 = { lastEffect: null }, R.updateQueue = b2, b2.lastEffect = a2.next = a2) : (c2 = b2.lastEffect, c2 === null ? b2.lastEffect = a2.next = a2 : (d2 = c2.next, c2.next = a2, a2.next = d2, b2.lastEffect = a2));
  return a2;
}
function Sh(a2) {
  var b2 = Hh();
  a2 = { current: a2 };
  return b2.memoizedState = a2;
}
function Th() {
  return Ih().memoizedState;
}
function Uh(a2, b2, c2, d2) {
  var e2 = Hh();
  R.flags |= a2;
  e2.memoizedState = Rh(1 | b2, c2, void 0, d2 === void 0 ? null : d2);
}
function Vh(a2, b2, c2, d2) {
  var e2 = Ih();
  d2 = d2 === void 0 ? null : d2;
  var f2 = void 0;
  if (S !== null) {
    var g2 = S.memoizedState;
    f2 = g2.destroy;
    if (d2 !== null && Bh(d2, g2.deps)) {
      Rh(b2, c2, f2, d2);
      return;
    }
  }
  R.flags |= a2;
  e2.memoizedState = Rh(1 | b2, c2, f2, d2);
}
function Wh(a2, b2) {
  return Uh(516, 4, a2, b2);
}
function Xh(a2, b2) {
  return Vh(516, 4, a2, b2);
}
function Yh(a2, b2) {
  return Vh(4, 2, a2, b2);
}
function Zh(a2, b2) {
  if (typeof b2 === "function")
    return a2 = a2(), b2(a2), function() {
      b2(null);
    };
  if (b2 !== null && b2 !== void 0)
    return a2 = a2(), b2.current = a2, function() {
      b2.current = null;
    };
}
function $h(a2, b2, c2) {
  c2 = c2 !== null && c2 !== void 0 ? c2.concat([a2]) : null;
  return Vh(4, 2, Zh.bind(null, b2, a2), c2);
}
function ai() {
}
function bi(a2, b2) {
  var c2 = Ih();
  b2 = b2 === void 0 ? null : b2;
  var d2 = c2.memoizedState;
  if (d2 !== null && b2 !== null && Bh(b2, d2[1]))
    return d2[0];
  c2.memoizedState = [a2, b2];
  return a2;
}
function ci(a2, b2) {
  var c2 = Ih();
  b2 = b2 === void 0 ? null : b2;
  var d2 = c2.memoizedState;
  if (d2 !== null && b2 !== null && Bh(b2, d2[1]))
    return d2[0];
  a2 = a2();
  c2.memoizedState = [a2, b2];
  return a2;
}
function di(a2, b2) {
  var c2 = eg();
  gg(98 > c2 ? 98 : c2, function() {
    a2(true);
  });
  gg(97 < c2 ? 97 : c2, function() {
    var c3 = wh.transition;
    wh.transition = 1;
    try {
      a2(false), b2();
    } finally {
      wh.transition = c3;
    }
  });
}
function Oh(a2, b2, c2) {
  var d2 = Hg(), e2 = Ig(a2), f2 = { lane: e2, action: c2, eagerReducer: null, eagerState: null, next: null }, g2 = b2.pending;
  g2 === null ? f2.next = f2 : (f2.next = g2.next, g2.next = f2);
  b2.pending = f2;
  g2 = a2.alternate;
  if (a2 === R || g2 !== null && g2 === R)
    zh = yh = true;
  else {
    if (a2.lanes === 0 && (g2 === null || g2.lanes === 0) && (g2 = b2.lastRenderedReducer, g2 !== null))
      try {
        var h2 = b2.lastRenderedState, k2 = g2(h2, c2);
        f2.eagerReducer = g2;
        f2.eagerState = k2;
        if (He(k2, h2))
          return;
      } catch (l2) {
      } finally {
      }
    Jg(a2, e2, d2);
  }
}
var Gh = { readContext: vg, useCallback: Ah, useContext: Ah, useEffect: Ah, useImperativeHandle: Ah, useLayoutEffect: Ah, useMemo: Ah, useReducer: Ah, useRef: Ah, useState: Ah, useDebugValue: Ah, useDeferredValue: Ah, useTransition: Ah, useMutableSource: Ah, useOpaqueIdentifier: Ah, unstable_isNewReconciler: false }, Dh = { readContext: vg, useCallback: function(a2, b2) {
  Hh().memoizedState = [a2, b2 === void 0 ? null : b2];
  return a2;
}, useContext: vg, useEffect: Wh, useImperativeHandle: function(a2, b2, c2) {
  c2 = c2 !== null && c2 !== void 0 ? c2.concat([a2]) : null;
  return Uh(4, 2, Zh.bind(null, b2, a2), c2);
}, useLayoutEffect: function(a2, b2) {
  return Uh(4, 2, a2, b2);
}, useMemo: function(a2, b2) {
  var c2 = Hh();
  b2 = b2 === void 0 ? null : b2;
  a2 = a2();
  c2.memoizedState = [a2, b2];
  return a2;
}, useReducer: function(a2, b2, c2) {
  var d2 = Hh();
  b2 = c2 !== void 0 ? c2(b2) : b2;
  d2.memoizedState = d2.baseState = b2;
  a2 = d2.queue = { pending: null, dispatch: null, lastRenderedReducer: a2, lastRenderedState: b2 };
  a2 = a2.dispatch = Oh.bind(null, R, a2);
  return [d2.memoizedState, a2];
}, useRef: Sh, useState: Qh, useDebugValue: ai, useDeferredValue: function(a2) {
  var b2 = Qh(a2), c2 = b2[0], d2 = b2[1];
  Wh(function() {
    var b3 = wh.transition;
    wh.transition = 1;
    try {
      d2(a2);
    } finally {
      wh.transition = b3;
    }
  }, [a2]);
  return c2;
}, useTransition: function() {
  var a2 = Qh(false), b2 = a2[0];
  a2 = di.bind(null, a2[1]);
  Sh(a2);
  return [a2, b2];
}, useMutableSource: function(a2, b2, c2) {
  var d2 = Hh();
  d2.memoizedState = { refs: { getSnapshot: b2, setSnapshot: null }, source: a2, subscribe: c2 };
  return Nh(d2, a2, b2, c2);
}, useOpaqueIdentifier: function() {
  if (lh) {
    var a2 = false, b2 = uf(function() {
      a2 || (a2 = true, c2("r:" + (tf++).toString(36)));
      throw Error(y(355));
    }), c2 = Qh(b2)[1];
    (R.mode & 2) === 0 && (R.flags |= 516, Rh(5, function() {
      c2("r:" + (tf++).toString(36));
    }, void 0, null));
    return b2;
  }
  b2 = "r:" + (tf++).toString(36);
  Qh(b2);
  return b2;
}, unstable_isNewReconciler: false }, Eh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Kh, useRef: Th, useState: function() {
  return Kh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a2) {
  var b2 = Kh(Jh), c2 = b2[0], d2 = b2[1];
  Xh(function() {
    var b3 = wh.transition;
    wh.transition = 1;
    try {
      d2(a2);
    } finally {
      wh.transition = b3;
    }
  }, [a2]);
  return c2;
}, useTransition: function() {
  var a2 = Kh(Jh)[0];
  return [
    Th().current,
    a2
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Kh(Jh)[0];
}, unstable_isNewReconciler: false }, Fh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Lh, useRef: Th, useState: function() {
  return Lh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a2) {
  var b2 = Lh(Jh), c2 = b2[0], d2 = b2[1];
  Xh(function() {
    var b3 = wh.transition;
    wh.transition = 1;
    try {
      d2(a2);
    } finally {
      wh.transition = b3;
    }
  }, [a2]);
  return c2;
}, useTransition: function() {
  var a2 = Lh(Jh)[0];
  return [
    Th().current,
    a2
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Lh(Jh)[0];
}, unstable_isNewReconciler: false }, ei = ra.ReactCurrentOwner, ug = false;
function fi(a2, b2, c2, d2) {
  b2.child = a2 === null ? Zg(b2, null, c2, d2) : Yg(b2, a2.child, c2, d2);
}
function gi(a2, b2, c2, d2, e2) {
  c2 = c2.render;
  var f2 = b2.ref;
  tg(b2, e2);
  d2 = Ch(a2, b2, c2, d2, f2, e2);
  if (a2 !== null && !ug)
    return b2.updateQueue = a2.updateQueue, b2.flags &= -517, a2.lanes &= ~e2, hi(a2, b2, e2);
  b2.flags |= 1;
  fi(a2, b2, d2, e2);
  return b2.child;
}
function ii(a2, b2, c2, d2, e2, f2) {
  if (a2 === null) {
    var g2 = c2.type;
    if (typeof g2 === "function" && !ji(g2) && g2.defaultProps === void 0 && c2.compare === null && c2.defaultProps === void 0)
      return b2.tag = 15, b2.type = g2, ki(a2, b2, g2, d2, e2, f2);
    a2 = Vg(c2.type, null, d2, b2, b2.mode, f2);
    a2.ref = b2.ref;
    a2.return = b2;
    return b2.child = a2;
  }
  g2 = a2.child;
  if ((e2 & f2) === 0 && (e2 = g2.memoizedProps, c2 = c2.compare, c2 = c2 !== null ? c2 : Je, c2(e2, d2) && a2.ref === b2.ref))
    return hi(a2, b2, f2);
  b2.flags |= 1;
  a2 = Tg(g2, d2);
  a2.ref = b2.ref;
  a2.return = b2;
  return b2.child = a2;
}
function ki(a2, b2, c2, d2, e2, f2) {
  if (a2 !== null && Je(a2.memoizedProps, d2) && a2.ref === b2.ref)
    if (ug = false, (f2 & e2) !== 0)
      (a2.flags & 16384) !== 0 && (ug = true);
    else
      return b2.lanes = a2.lanes, hi(a2, b2, f2);
  return li(a2, b2, c2, d2, f2);
}
function mi(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.children, f2 = a2 !== null ? a2.memoizedState : null;
  if (d2.mode === "hidden" || d2.mode === "unstable-defer-without-hiding")
    if ((b2.mode & 4) === 0)
      b2.memoizedState = { baseLanes: 0 }, ni(b2, c2);
    else if ((c2 & 1073741824) !== 0)
      b2.memoizedState = { baseLanes: 0 }, ni(b2, f2 !== null ? f2.baseLanes : c2);
    else
      return a2 = f2 !== null ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a2 }, ni(b2, a2), null;
  else
    f2 !== null ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, ni(b2, d2);
  fi(a2, b2, e2, c2);
  return b2.child;
}
function oi(a2, b2) {
  var c2 = b2.ref;
  if (a2 === null && c2 !== null || a2 !== null && a2.ref !== c2)
    b2.flags |= 128;
}
function li(a2, b2, c2, d2, e2) {
  var f2 = Ff(c2) ? Df : M.current;
  f2 = Ef(b2, f2);
  tg(b2, e2);
  c2 = Ch(a2, b2, c2, d2, f2, e2);
  if (a2 !== null && !ug)
    return b2.updateQueue = a2.updateQueue, b2.flags &= -517, a2.lanes &= ~e2, hi(a2, b2, e2);
  b2.flags |= 1;
  fi(a2, b2, c2, e2);
  return b2.child;
}
function pi(a2, b2, c2, d2, e2) {
  if (Ff(c2)) {
    var f2 = true;
    Jf(b2);
  } else
    f2 = false;
  tg(b2, e2);
  if (b2.stateNode === null)
    a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2), Mg(b2, c2, d2), Og(b2, c2, d2, e2), d2 = true;
  else if (a2 === null) {
    var g2 = b2.stateNode, h2 = b2.memoizedProps;
    g2.props = h2;
    var k2 = g2.context, l2 = c2.contextType;
    typeof l2 === "object" && l2 !== null ? l2 = vg(l2) : (l2 = Ff(c2) ? Df : M.current, l2 = Ef(b2, l2));
    var n2 = c2.getDerivedStateFromProps, A2 = typeof n2 === "function" || typeof g2.getSnapshotBeforeUpdate === "function";
    A2 || typeof g2.UNSAFE_componentWillReceiveProps !== "function" && typeof g2.componentWillReceiveProps !== "function" || (h2 !== d2 || k2 !== l2) && Ng(b2, g2, d2, l2);
    wg = false;
    var p2 = b2.memoizedState;
    g2.state = p2;
    Cg(b2, d2, g2, e2);
    k2 = b2.memoizedState;
    h2 !== d2 || p2 !== k2 || N.current || wg ? (typeof n2 === "function" && (Gg(b2, c2, n2, d2), k2 = b2.memoizedState), (h2 = wg || Lg(b2, c2, h2, d2, p2, k2, l2)) ? (A2 || typeof g2.UNSAFE_componentWillMount !== "function" && typeof g2.componentWillMount !== "function" || (typeof g2.componentWillMount === "function" && g2.componentWillMount(), typeof g2.UNSAFE_componentWillMount === "function" && g2.UNSAFE_componentWillMount()), typeof g2.componentDidMount === "function" && (b2.flags |= 4)) : (typeof g2.componentDidMount === "function" && (b2.flags |= 4), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h2) : (typeof g2.componentDidMount === "function" && (b2.flags |= 4), d2 = false);
  } else {
    g2 = b2.stateNode;
    yg(a2, b2);
    h2 = b2.memoizedProps;
    l2 = b2.type === b2.elementType ? h2 : lg(b2.type, h2);
    g2.props = l2;
    A2 = b2.pendingProps;
    p2 = g2.context;
    k2 = c2.contextType;
    typeof k2 === "object" && k2 !== null ? k2 = vg(k2) : (k2 = Ff(c2) ? Df : M.current, k2 = Ef(b2, k2));
    var C2 = c2.getDerivedStateFromProps;
    (n2 = typeof C2 === "function" || typeof g2.getSnapshotBeforeUpdate === "function") || typeof g2.UNSAFE_componentWillReceiveProps !== "function" && typeof g2.componentWillReceiveProps !== "function" || (h2 !== A2 || p2 !== k2) && Ng(b2, g2, d2, k2);
    wg = false;
    p2 = b2.memoizedState;
    g2.state = p2;
    Cg(b2, d2, g2, e2);
    var x = b2.memoizedState;
    h2 !== A2 || p2 !== x || N.current || wg ? (typeof C2 === "function" && (Gg(b2, c2, C2, d2), x = b2.memoizedState), (l2 = wg || Lg(b2, c2, l2, d2, p2, x, k2)) ? (n2 || typeof g2.UNSAFE_componentWillUpdate !== "function" && typeof g2.componentWillUpdate !== "function" || (typeof g2.componentWillUpdate === "function" && g2.componentWillUpdate(d2, x, k2), typeof g2.UNSAFE_componentWillUpdate === "function" && g2.UNSAFE_componentWillUpdate(d2, x, k2)), typeof g2.componentDidUpdate === "function" && (b2.flags |= 4), typeof g2.getSnapshotBeforeUpdate === "function" && (b2.flags |= 256)) : (typeof g2.componentDidUpdate !== "function" || h2 === a2.memoizedProps && p2 === a2.memoizedState || (b2.flags |= 4), typeof g2.getSnapshotBeforeUpdate !== "function" || h2 === a2.memoizedProps && p2 === a2.memoizedState || (b2.flags |= 256), b2.memoizedProps = d2, b2.memoizedState = x), g2.props = d2, g2.state = x, g2.context = k2, d2 = l2) : (typeof g2.componentDidUpdate !== "function" || h2 === a2.memoizedProps && p2 === a2.memoizedState || (b2.flags |= 4), typeof g2.getSnapshotBeforeUpdate !== "function" || h2 === a2.memoizedProps && p2 === a2.memoizedState || (b2.flags |= 256), d2 = false);
  }
  return qi(a2, b2, c2, d2, f2, e2);
}
function qi(a2, b2, c2, d2, e2, f2) {
  oi(a2, b2);
  var g2 = (b2.flags & 64) !== 0;
  if (!d2 && !g2)
    return e2 && Kf(b2, c2, false), hi(a2, b2, f2);
  d2 = b2.stateNode;
  ei.current = b2;
  var h2 = g2 && typeof c2.getDerivedStateFromError !== "function" ? null : d2.render();
  b2.flags |= 1;
  a2 !== null && g2 ? (b2.child = Yg(b2, a2.child, null, f2), b2.child = Yg(b2, null, h2, f2)) : fi(a2, b2, h2, f2);
  b2.memoizedState = d2.state;
  e2 && Kf(b2, c2, true);
  return b2.child;
}
function ri(a2) {
  var b2 = a2.stateNode;
  b2.pendingContext ? Hf(a2, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && Hf(a2, b2.context, false);
  eh(a2, b2.containerInfo);
}
var si = { dehydrated: null, retryLane: 0 };
function ti(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = P.current, f2 = false, g2;
  (g2 = (b2.flags & 64) !== 0) || (g2 = a2 !== null && a2.memoizedState === null ? false : (e2 & 2) !== 0);
  g2 ? (f2 = true, b2.flags &= -65) : a2 !== null && a2.memoizedState === null || d2.fallback === void 0 || d2.unstable_avoidThisFallback === true || (e2 |= 1);
  I(P, e2 & 1);
  if (a2 === null) {
    d2.fallback !== void 0 && ph(b2);
    a2 = d2.children;
    e2 = d2.fallback;
    if (f2)
      return a2 = ui(b2, a2, e2, c2), b2.child.memoizedState = { baseLanes: c2 }, b2.memoizedState = si, a2;
    if (typeof d2.unstable_expectedLoadTime === "number")
      return a2 = ui(b2, a2, e2, c2), b2.child.memoizedState = { baseLanes: c2 }, b2.memoizedState = si, b2.lanes = 33554432, a2;
    c2 = vi({ mode: "visible", children: a2 }, b2.mode, c2, null);
    c2.return = b2;
    return b2.child = c2;
  }
  if (a2.memoizedState !== null) {
    if (f2)
      return d2 = wi(a2, b2, d2.children, d2.fallback, c2), f2 = b2.child, e2 = a2.child.memoizedState, f2.memoizedState = e2 === null ? { baseLanes: c2 } : { baseLanes: e2.baseLanes | c2 }, f2.childLanes = a2.childLanes & ~c2, b2.memoizedState = si, d2;
    c2 = xi(a2, b2, d2.children, c2);
    b2.memoizedState = null;
    return c2;
  }
  if (f2)
    return d2 = wi(a2, b2, d2.children, d2.fallback, c2), f2 = b2.child, e2 = a2.child.memoizedState, f2.memoizedState = e2 === null ? { baseLanes: c2 } : { baseLanes: e2.baseLanes | c2 }, f2.childLanes = a2.childLanes & ~c2, b2.memoizedState = si, d2;
  c2 = xi(a2, b2, d2.children, c2);
  b2.memoizedState = null;
  return c2;
}
function ui(a2, b2, c2, d2) {
  var e2 = a2.mode, f2 = a2.child;
  b2 = { mode: "hidden", children: b2 };
  (e2 & 2) === 0 && f2 !== null ? (f2.childLanes = 0, f2.pendingProps = b2) : f2 = vi(b2, e2, 0, null);
  c2 = Xg(c2, e2, d2, null);
  f2.return = a2;
  c2.return = a2;
  f2.sibling = c2;
  a2.child = f2;
  return c2;
}
function xi(a2, b2, c2, d2) {
  var e2 = a2.child;
  a2 = e2.sibling;
  c2 = Tg(e2, { mode: "visible", children: c2 });
  (b2.mode & 2) === 0 && (c2.lanes = d2);
  c2.return = b2;
  c2.sibling = null;
  a2 !== null && (a2.nextEffect = null, a2.flags = 8, b2.firstEffect = b2.lastEffect = a2);
  return b2.child = c2;
}
function wi(a2, b2, c2, d2, e2) {
  var f2 = b2.mode, g2 = a2.child;
  a2 = g2.sibling;
  var h2 = { mode: "hidden", children: c2 };
  (f2 & 2) === 0 && b2.child !== g2 ? (c2 = b2.child, c2.childLanes = 0, c2.pendingProps = h2, g2 = c2.lastEffect, g2 !== null ? (b2.firstEffect = c2.firstEffect, b2.lastEffect = g2, g2.nextEffect = null) : b2.firstEffect = b2.lastEffect = null) : c2 = Tg(g2, h2);
  a2 !== null ? d2 = Tg(a2, d2) : (d2 = Xg(d2, f2, e2, null), d2.flags |= 2);
  d2.return = b2;
  c2.return = b2;
  c2.sibling = d2;
  b2.child = c2;
  return d2;
}
function yi(a2, b2) {
  a2.lanes |= b2;
  var c2 = a2.alternate;
  c2 !== null && (c2.lanes |= b2);
  sg(a2.return, b2);
}
function zi(a2, b2, c2, d2, e2, f2) {
  var g2 = a2.memoizedState;
  g2 === null ? a2.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e2, lastEffect: f2 } : (g2.isBackwards = b2, g2.rendering = null, g2.renderingStartTime = 0, g2.last = d2, g2.tail = c2, g2.tailMode = e2, g2.lastEffect = f2);
}
function Ai(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.revealOrder, f2 = d2.tail;
  fi(a2, b2, d2.children, c2);
  d2 = P.current;
  if ((d2 & 2) !== 0)
    d2 = d2 & 1 | 2, b2.flags |= 64;
  else {
    if (a2 !== null && (a2.flags & 64) !== 0)
      a:
        for (a2 = b2.child; a2 !== null; ) {
          if (a2.tag === 13)
            a2.memoizedState !== null && yi(a2, c2);
          else if (a2.tag === 19)
            yi(a2, c2);
          else if (a2.child !== null) {
            a2.child.return = a2;
            a2 = a2.child;
            continue;
          }
          if (a2 === b2)
            break a;
          for (; a2.sibling === null; ) {
            if (a2.return === null || a2.return === b2)
              break a;
            a2 = a2.return;
          }
          a2.sibling.return = a2.return;
          a2 = a2.sibling;
        }
    d2 &= 1;
  }
  I(P, d2);
  if ((b2.mode & 2) === 0)
    b2.memoizedState = null;
  else
    switch (e2) {
      case "forwards":
        c2 = b2.child;
        for (e2 = null; c2 !== null; )
          a2 = c2.alternate, a2 !== null && ih(a2) === null && (e2 = c2), c2 = c2.sibling;
        c2 = e2;
        c2 === null ? (e2 = b2.child, b2.child = null) : (e2 = c2.sibling, c2.sibling = null);
        zi(b2, false, e2, c2, f2, b2.lastEffect);
        break;
      case "backwards":
        c2 = null;
        e2 = b2.child;
        for (b2.child = null; e2 !== null; ) {
          a2 = e2.alternate;
          if (a2 !== null && ih(a2) === null) {
            b2.child = e2;
            break;
          }
          a2 = e2.sibling;
          e2.sibling = c2;
          c2 = e2;
          e2 = a2;
        }
        zi(b2, true, c2, null, f2, b2.lastEffect);
        break;
      case "together":
        zi(b2, false, null, null, void 0, b2.lastEffect);
        break;
      default:
        b2.memoizedState = null;
    }
  return b2.child;
}
function hi(a2, b2, c2) {
  a2 !== null && (b2.dependencies = a2.dependencies);
  Dg |= b2.lanes;
  if ((c2 & b2.childLanes) !== 0) {
    if (a2 !== null && b2.child !== a2.child)
      throw Error(y(153));
    if (b2.child !== null) {
      a2 = b2.child;
      c2 = Tg(a2, a2.pendingProps);
      b2.child = c2;
      for (c2.return = b2; a2.sibling !== null; )
        a2 = a2.sibling, c2 = c2.sibling = Tg(a2, a2.pendingProps), c2.return = b2;
      c2.sibling = null;
    }
    return b2.child;
  }
  return null;
}
var Bi, Ci, Di, Ei;
Bi = function(a2, b2) {
  for (var c2 = b2.child; c2 !== null; ) {
    if (c2.tag === 5 || c2.tag === 6)
      a2.appendChild(c2.stateNode);
    else if (c2.tag !== 4 && c2.child !== null) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === b2)
      break;
    for (; c2.sibling === null; ) {
      if (c2.return === null || c2.return === b2)
        return;
      c2 = c2.return;
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
};
Ci = function() {
};
Di = function(a2, b2, c2, d2) {
  var e2 = a2.memoizedProps;
  if (e2 !== d2) {
    a2 = b2.stateNode;
    dh(ah.current);
    var f2 = null;
    switch (c2) {
      case "input":
        e2 = Ya(a2, e2);
        d2 = Ya(a2, d2);
        f2 = [];
        break;
      case "option":
        e2 = eb(a2, e2);
        d2 = eb(a2, d2);
        f2 = [];
        break;
      case "select":
        e2 = m({}, e2, { value: void 0 });
        d2 = m({}, d2, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e2 = gb(a2, e2);
        d2 = gb(a2, d2);
        f2 = [];
        break;
      default:
        typeof e2.onClick !== "function" && typeof d2.onClick === "function" && (a2.onclick = jf);
    }
    vb(c2, d2);
    var g2;
    c2 = null;
    for (l2 in e2)
      if (!d2.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && e2[l2] != null)
        if (l2 === "style") {
          var h2 = e2[l2];
          for (g2 in h2)
            h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
        } else
          l2 !== "dangerouslySetInnerHTML" && l2 !== "children" && l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && l2 !== "autoFocus" && (ca.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d2) {
      var k2 = d2[l2];
      h2 = e2 != null ? e2[l2] : void 0;
      if (d2.hasOwnProperty(l2) && k2 !== h2 && (k2 != null || h2 != null))
        if (l2 === "style")
          if (h2) {
            for (g2 in h2)
              !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
            for (g2 in k2)
              k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
          } else
            c2 || (f2 || (f2 = []), f2.push(l2, c2)), c2 = k2;
        else
          l2 === "dangerouslySetInnerHTML" ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, k2 != null && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : l2 === "children" ? typeof k2 !== "string" && typeof k2 !== "number" || (f2 = f2 || []).push(l2, "" + k2) : l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && (ca.hasOwnProperty(l2) ? (k2 != null && l2 === "onScroll" && G("scroll", a2), f2 || h2 === k2 || (f2 = [])) : typeof k2 === "object" && k2 !== null && k2.$$typeof === Ga ? k2.toString() : (f2 = f2 || []).push(l2, k2));
    }
    c2 && (f2 = f2 || []).push("style", c2);
    var l2 = f2;
    if (b2.updateQueue = l2)
      b2.flags |= 4;
  }
};
Ei = function(a2, b2, c2, d2) {
  c2 !== d2 && (b2.flags |= 4);
};
function Fi(a2, b2) {
  if (!lh)
    switch (a2.tailMode) {
      case "hidden":
        b2 = a2.tail;
        for (var c2 = null; b2 !== null; )
          b2.alternate !== null && (c2 = b2), b2 = b2.sibling;
        c2 === null ? a2.tail = null : c2.sibling = null;
        break;
      case "collapsed":
        c2 = a2.tail;
        for (var d2 = null; c2 !== null; )
          c2.alternate !== null && (d2 = c2), c2 = c2.sibling;
        d2 === null ? b2 || a2.tail === null ? a2.tail = null : a2.tail.sibling = null : d2.sibling = null;
    }
}
function Gi(a2, b2, c2) {
  var d2 = b2.pendingProps;
  switch (b2.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return null;
    case 1:
      return Ff(b2.type) && Gf(), null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      d2 = b2.stateNode;
      d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
      if (a2 === null || a2.child === null)
        rh(b2) ? b2.flags |= 4 : d2.hydrate || (b2.flags |= 256);
      Ci(b2);
      return null;
    case 5:
      hh(b2);
      var e2 = dh(ch.current);
      c2 = b2.type;
      if (a2 !== null && b2.stateNode != null)
        Di(a2, b2, c2, d2, e2), a2.ref !== b2.ref && (b2.flags |= 128);
      else {
        if (!d2) {
          if (b2.stateNode === null)
            throw Error(y(166));
          return null;
        }
        a2 = dh(ah.current);
        if (rh(b2)) {
          d2 = b2.stateNode;
          c2 = b2.type;
          var f2 = b2.memoizedProps;
          d2[wf] = b2;
          d2[xf] = f2;
          switch (c2) {
            case "dialog":
              G("cancel", d2);
              G("close", d2);
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", d2);
              break;
            case "video":
            case "audio":
              for (a2 = 0; a2 < Xe.length; a2++)
                G(Xe[a2], d2);
              break;
            case "source":
              G("error", d2);
              break;
            case "img":
            case "image":
            case "link":
              G("error", d2);
              G("load", d2);
              break;
            case "details":
              G("toggle", d2);
              break;
            case "input":
              Za(d2, f2);
              G("invalid", d2);
              break;
            case "select":
              d2._wrapperState = { wasMultiple: !!f2.multiple };
              G("invalid", d2);
              break;
            case "textarea":
              hb(d2, f2), G("invalid", d2);
          }
          vb(c2, f2);
          a2 = null;
          for (var g2 in f2)
            f2.hasOwnProperty(g2) && (e2 = f2[g2], g2 === "children" ? typeof e2 === "string" ? d2.textContent !== e2 && (a2 = ["children", e2]) : typeof e2 === "number" && d2.textContent !== "" + e2 && (a2 = ["children", "" + e2]) : ca.hasOwnProperty(g2) && e2 != null && g2 === "onScroll" && G("scroll", d2));
          switch (c2) {
            case "input":
              Va(d2);
              cb(d2, f2, true);
              break;
            case "textarea":
              Va(d2);
              jb(d2);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof f2.onClick === "function" && (d2.onclick = jf);
          }
          d2 = a2;
          b2.updateQueue = d2;
          d2 !== null && (b2.flags |= 4);
        } else {
          g2 = e2.nodeType === 9 ? e2 : e2.ownerDocument;
          a2 === kb.html && (a2 = lb(c2));
          a2 === kb.html ? c2 === "script" ? (a2 = g2.createElement("div"), a2.innerHTML = "<script><\/script>", a2 = a2.removeChild(a2.firstChild)) : typeof d2.is === "string" ? a2 = g2.createElement(c2, { is: d2.is }) : (a2 = g2.createElement(c2), c2 === "select" && (g2 = a2, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a2 = g2.createElementNS(a2, c2);
          a2[wf] = b2;
          a2[xf] = d2;
          Bi(a2, b2, false, false);
          b2.stateNode = a2;
          g2 = wb(c2, d2);
          switch (c2) {
            case "dialog":
              G("cancel", a2);
              G("close", a2);
              e2 = d2;
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", a2);
              e2 = d2;
              break;
            case "video":
            case "audio":
              for (e2 = 0; e2 < Xe.length; e2++)
                G(Xe[e2], a2);
              e2 = d2;
              break;
            case "source":
              G("error", a2);
              e2 = d2;
              break;
            case "img":
            case "image":
            case "link":
              G("error", a2);
              G("load", a2);
              e2 = d2;
              break;
            case "details":
              G("toggle", a2);
              e2 = d2;
              break;
            case "input":
              Za(a2, d2);
              e2 = Ya(a2, d2);
              G("invalid", a2);
              break;
            case "option":
              e2 = eb(a2, d2);
              break;
            case "select":
              a2._wrapperState = { wasMultiple: !!d2.multiple };
              e2 = m({}, d2, { value: void 0 });
              G("invalid", a2);
              break;
            case "textarea":
              hb(a2, d2);
              e2 = gb(a2, d2);
              G("invalid", a2);
              break;
            default:
              e2 = d2;
          }
          vb(c2, e2);
          var h2 = e2;
          for (f2 in h2)
            if (h2.hasOwnProperty(f2)) {
              var k2 = h2[f2];
              f2 === "style" ? tb(a2, k2) : f2 === "dangerouslySetInnerHTML" ? (k2 = k2 ? k2.__html : void 0, k2 != null && ob(a2, k2)) : f2 === "children" ? typeof k2 === "string" ? (c2 !== "textarea" || k2 !== "") && pb(a2, k2) : typeof k2 === "number" && pb(a2, "" + k2) : f2 !== "suppressContentEditableWarning" && f2 !== "suppressHydrationWarning" && f2 !== "autoFocus" && (ca.hasOwnProperty(f2) ? k2 != null && f2 === "onScroll" && G("scroll", a2) : k2 != null && qa(a2, f2, k2, g2));
            }
          switch (c2) {
            case "input":
              Va(a2);
              cb(a2, d2, false);
              break;
            case "textarea":
              Va(a2);
              jb(a2);
              break;
            case "option":
              d2.value != null && a2.setAttribute("value", "" + Sa(d2.value));
              break;
            case "select":
              a2.multiple = !!d2.multiple;
              f2 = d2.value;
              f2 != null ? fb(a2, !!d2.multiple, f2, false) : d2.defaultValue != null && fb(a2, !!d2.multiple, d2.defaultValue, true);
              break;
            default:
              typeof e2.onClick === "function" && (a2.onclick = jf);
          }
          mf(c2, d2) && (b2.flags |= 4);
        }
        b2.ref !== null && (b2.flags |= 128);
      }
      return null;
    case 6:
      if (a2 && b2.stateNode != null)
        Ei(a2, b2, a2.memoizedProps, d2);
      else {
        if (typeof d2 !== "string" && b2.stateNode === null)
          throw Error(y(166));
        c2 = dh(ch.current);
        dh(ah.current);
        rh(b2) ? (d2 = b2.stateNode, c2 = b2.memoizedProps, d2[wf] = b2, d2.nodeValue !== c2 && (b2.flags |= 4)) : (d2 = (c2.nodeType === 9 ? c2 : c2.ownerDocument).createTextNode(d2), d2[wf] = b2, b2.stateNode = d2);
      }
      return null;
    case 13:
      H(P);
      d2 = b2.memoizedState;
      if ((b2.flags & 64) !== 0)
        return b2.lanes = c2, b2;
      d2 = d2 !== null;
      c2 = false;
      a2 === null ? b2.memoizedProps.fallback !== void 0 && rh(b2) : c2 = a2.memoizedState !== null;
      if (d2 && !c2 && (b2.mode & 2) !== 0)
        if (a2 === null && b2.memoizedProps.unstable_avoidThisFallback !== true || (P.current & 1) !== 0)
          V === 0 && (V = 3);
        else {
          if (V === 0 || V === 3)
            V = 4;
          U === null || (Dg & 134217727) === 0 && (Hi & 134217727) === 0 || Ii(U, W);
        }
      if (d2 || c2)
        b2.flags |= 4;
      return null;
    case 4:
      return fh(), Ci(b2), a2 === null && cf(b2.stateNode.containerInfo), null;
    case 10:
      return rg(b2), null;
    case 17:
      return Ff(b2.type) && Gf(), null;
    case 19:
      H(P);
      d2 = b2.memoizedState;
      if (d2 === null)
        return null;
      f2 = (b2.flags & 64) !== 0;
      g2 = d2.rendering;
      if (g2 === null)
        if (f2)
          Fi(d2, false);
        else {
          if (V !== 0 || a2 !== null && (a2.flags & 64) !== 0)
            for (a2 = b2.child; a2 !== null; ) {
              g2 = ih(a2);
              if (g2 !== null) {
                b2.flags |= 64;
                Fi(d2, false);
                f2 = g2.updateQueue;
                f2 !== null && (b2.updateQueue = f2, b2.flags |= 4);
                d2.lastEffect === null && (b2.firstEffect = null);
                b2.lastEffect = d2.lastEffect;
                d2 = c2;
                for (c2 = b2.child; c2 !== null; )
                  f2 = c2, a2 = d2, f2.flags &= 2, f2.nextEffect = null, f2.firstEffect = null, f2.lastEffect = null, g2 = f2.alternate, g2 === null ? (f2.childLanes = 0, f2.lanes = a2, f2.child = null, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a2 = g2.dependencies, f2.dependencies = a2 === null ? null : { lanes: a2.lanes, firstContext: a2.firstContext }), c2 = c2.sibling;
                I(P, P.current & 1 | 2);
                return b2.child;
              }
              a2 = a2.sibling;
            }
          d2.tail !== null && O() > Ji && (b2.flags |= 64, f2 = true, Fi(d2, false), b2.lanes = 33554432);
        }
      else {
        if (!f2)
          if (a2 = ih(g2), a2 !== null) {
            if (b2.flags |= 64, f2 = true, c2 = a2.updateQueue, c2 !== null && (b2.updateQueue = c2, b2.flags |= 4), Fi(d2, true), d2.tail === null && d2.tailMode === "hidden" && !g2.alternate && !lh)
              return b2 = b2.lastEffect = d2.lastEffect, b2 !== null && (b2.nextEffect = null), null;
          } else
            2 * O() - d2.renderingStartTime > Ji && c2 !== 1073741824 && (b2.flags |= 64, f2 = true, Fi(d2, false), b2.lanes = 33554432);
        d2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = d2.last, c2 !== null ? c2.sibling = g2 : b2.child = g2, d2.last = g2);
      }
      return d2.tail !== null ? (c2 = d2.tail, d2.rendering = c2, d2.tail = c2.sibling, d2.lastEffect = b2.lastEffect, d2.renderingStartTime = O(), c2.sibling = null, b2 = P.current, I(P, f2 ? b2 & 1 | 2 : b2 & 1), c2) : null;
    case 23:
    case 24:
      return Ki(), a2 !== null && a2.memoizedState !== null !== (b2.memoizedState !== null) && d2.mode !== "unstable-defer-without-hiding" && (b2.flags |= 4), null;
  }
  throw Error(y(156, b2.tag));
}
function Li(a2) {
  switch (a2.tag) {
    case 1:
      Ff(a2.type) && Gf();
      var b2 = a2.flags;
      return b2 & 4096 ? (a2.flags = b2 & -4097 | 64, a2) : null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      b2 = a2.flags;
      if ((b2 & 64) !== 0)
        throw Error(y(285));
      a2.flags = b2 & -4097 | 64;
      return a2;
    case 5:
      return hh(a2), null;
    case 13:
      return H(P), b2 = a2.flags, b2 & 4096 ? (a2.flags = b2 & -4097 | 64, a2) : null;
    case 19:
      return H(P), null;
    case 4:
      return fh(), null;
    case 10:
      return rg(a2), null;
    case 23:
    case 24:
      return Ki(), null;
    default:
      return null;
  }
}
function Mi(a2, b2) {
  try {
    var c2 = "", d2 = b2;
    do
      c2 += Qa(d2), d2 = d2.return;
    while (d2);
    var e2 = c2;
  } catch (f2) {
    e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a2, source: b2, stack: e2 };
}
function Ni(a2, b2) {
  try {
    console.error(b2.value);
  } catch (c2) {
    setTimeout(function() {
      throw c2;
    });
  }
}
var Oi = typeof WeakMap === "function" ? WeakMap : Map;
function Pi(a2, b2, c2) {
  c2 = zg(-1, c2);
  c2.tag = 3;
  c2.payload = { element: null };
  var d2 = b2.value;
  c2.callback = function() {
    Qi || (Qi = true, Ri = d2);
    Ni(a2, b2);
  };
  return c2;
}
function Si(a2, b2, c2) {
  c2 = zg(-1, c2);
  c2.tag = 3;
  var d2 = a2.type.getDerivedStateFromError;
  if (typeof d2 === "function") {
    var e2 = b2.value;
    c2.payload = function() {
      Ni(a2, b2);
      return d2(e2);
    };
  }
  var f2 = a2.stateNode;
  f2 !== null && typeof f2.componentDidCatch === "function" && (c2.callback = function() {
    typeof d2 !== "function" && (Ti === null ? Ti = /* @__PURE__ */ new Set([this]) : Ti.add(this), Ni(a2, b2));
    var c3 = b2.stack;
    this.componentDidCatch(b2.value, { componentStack: c3 !== null ? c3 : "" });
  });
  return c2;
}
var Ui = typeof WeakSet === "function" ? WeakSet : Set;
function Vi(a2) {
  var b2 = a2.ref;
  if (b2 !== null)
    if (typeof b2 === "function")
      try {
        b2(null);
      } catch (c2) {
        Wi(a2, c2);
      }
    else
      b2.current = null;
}
function Xi(a2, b2) {
  switch (b2.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (b2.flags & 256 && a2 !== null) {
        var c2 = a2.memoizedProps, d2 = a2.memoizedState;
        a2 = b2.stateNode;
        b2 = a2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? c2 : lg(b2.type, c2), d2);
        a2.__reactInternalSnapshotBeforeUpdate = b2;
      }
      return;
    case 3:
      b2.flags & 256 && qf(b2.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(y(163));
}
function Yi(a2, b2, c2) {
  switch (c2.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      b2 = c2.updateQueue;
      b2 = b2 !== null ? b2.lastEffect : null;
      if (b2 !== null) {
        a2 = b2 = b2.next;
        do {
          if ((a2.tag & 3) === 3) {
            var d2 = a2.create;
            a2.destroy = d2();
          }
          a2 = a2.next;
        } while (a2 !== b2);
      }
      b2 = c2.updateQueue;
      b2 = b2 !== null ? b2.lastEffect : null;
      if (b2 !== null) {
        a2 = b2 = b2.next;
        do {
          var e2 = a2;
          d2 = e2.next;
          e2 = e2.tag;
          (e2 & 4) !== 0 && (e2 & 1) !== 0 && (Zi(c2, a2), $i(c2, a2));
          a2 = d2;
        } while (a2 !== b2);
      }
      return;
    case 1:
      a2 = c2.stateNode;
      c2.flags & 4 && (b2 === null ? a2.componentDidMount() : (d2 = c2.elementType === c2.type ? b2.memoizedProps : lg(c2.type, b2.memoizedProps), a2.componentDidUpdate(d2, b2.memoizedState, a2.__reactInternalSnapshotBeforeUpdate)));
      b2 = c2.updateQueue;
      b2 !== null && Eg(c2, b2, a2);
      return;
    case 3:
      b2 = c2.updateQueue;
      if (b2 !== null) {
        a2 = null;
        if (c2.child !== null)
          switch (c2.child.tag) {
            case 5:
              a2 = c2.child.stateNode;
              break;
            case 1:
              a2 = c2.child.stateNode;
          }
        Eg(c2, b2, a2);
      }
      return;
    case 5:
      a2 = c2.stateNode;
      b2 === null && c2.flags & 4 && mf(c2.type, c2.memoizedProps) && a2.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      c2.memoizedState === null && (c2 = c2.alternate, c2 !== null && (c2 = c2.memoizedState, c2 !== null && (c2 = c2.dehydrated, c2 !== null && Cc(c2))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(y(163));
}
function aj(a2, b2) {
  for (var c2 = a2; ; ) {
    if (c2.tag === 5) {
      var d2 = c2.stateNode;
      if (b2)
        d2 = d2.style, typeof d2.setProperty === "function" ? d2.setProperty("display", "none", "important") : d2.display = "none";
      else {
        d2 = c2.stateNode;
        var e2 = c2.memoizedProps.style;
        e2 = e2 !== void 0 && e2 !== null && e2.hasOwnProperty("display") ? e2.display : null;
        d2.style.display = sb("display", e2);
      }
    } else if (c2.tag === 6)
      c2.stateNode.nodeValue = b2 ? "" : c2.memoizedProps;
    else if ((c2.tag !== 23 && c2.tag !== 24 || c2.memoizedState === null || c2 === a2) && c2.child !== null) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === a2)
      break;
    for (; c2.sibling === null; ) {
      if (c2.return === null || c2.return === a2)
        return;
      c2 = c2.return;
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
}
function bj(a2, b2) {
  if (Mf && typeof Mf.onCommitFiberUnmount === "function")
    try {
      Mf.onCommitFiberUnmount(Lf, b2);
    } catch (f2) {
    }
  switch (b2.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      a2 = b2.updateQueue;
      if (a2 !== null && (a2 = a2.lastEffect, a2 !== null)) {
        var c2 = a2 = a2.next;
        do {
          var d2 = c2, e2 = d2.destroy;
          d2 = d2.tag;
          if (e2 !== void 0)
            if ((d2 & 4) !== 0)
              Zi(b2, c2);
            else {
              d2 = b2;
              try {
                e2();
              } catch (f2) {
                Wi(d2, f2);
              }
            }
          c2 = c2.next;
        } while (c2 !== a2);
      }
      break;
    case 1:
      Vi(b2);
      a2 = b2.stateNode;
      if (typeof a2.componentWillUnmount === "function")
        try {
          a2.props = b2.memoizedProps, a2.state = b2.memoizedState, a2.componentWillUnmount();
        } catch (f2) {
          Wi(b2, f2);
        }
      break;
    case 5:
      Vi(b2);
      break;
    case 4:
      cj(a2, b2);
  }
}
function dj(a2) {
  a2.alternate = null;
  a2.child = null;
  a2.dependencies = null;
  a2.firstEffect = null;
  a2.lastEffect = null;
  a2.memoizedProps = null;
  a2.memoizedState = null;
  a2.pendingProps = null;
  a2.return = null;
  a2.updateQueue = null;
}
function ej(a2) {
  return a2.tag === 5 || a2.tag === 3 || a2.tag === 4;
}
function fj(a2) {
  a: {
    for (var b2 = a2.return; b2 !== null; ) {
      if (ej(b2))
        break a;
      b2 = b2.return;
    }
    throw Error(y(160));
  }
  var c2 = b2;
  b2 = c2.stateNode;
  switch (c2.tag) {
    case 5:
      var d2 = false;
      break;
    case 3:
      b2 = b2.containerInfo;
      d2 = true;
      break;
    case 4:
      b2 = b2.containerInfo;
      d2 = true;
      break;
    default:
      throw Error(y(161));
  }
  c2.flags & 16 && (pb(b2, ""), c2.flags &= -17);
  a:
    b:
      for (c2 = a2; ; ) {
        for (; c2.sibling === null; ) {
          if (c2.return === null || ej(c2.return)) {
            c2 = null;
            break a;
          }
          c2 = c2.return;
        }
        c2.sibling.return = c2.return;
        for (c2 = c2.sibling; c2.tag !== 5 && c2.tag !== 6 && c2.tag !== 18; ) {
          if (c2.flags & 2)
            continue b;
          if (c2.child === null || c2.tag === 4)
            continue b;
          else
            c2.child.return = c2, c2 = c2.child;
        }
        if (!(c2.flags & 2)) {
          c2 = c2.stateNode;
          break a;
        }
      }
  d2 ? gj(a2, c2, b2) : hj(a2, c2, b2);
}
function gj(a2, b2, c2) {
  var d2 = a2.tag, e2 = d2 === 5 || d2 === 6;
  if (e2)
    a2 = e2 ? a2.stateNode : a2.stateNode.instance, b2 ? c2.nodeType === 8 ? c2.parentNode.insertBefore(a2, b2) : c2.insertBefore(a2, b2) : (c2.nodeType === 8 ? (b2 = c2.parentNode, b2.insertBefore(a2, c2)) : (b2 = c2, b2.appendChild(a2)), c2 = c2._reactRootContainer, c2 !== null && c2 !== void 0 || b2.onclick !== null || (b2.onclick = jf));
  else if (d2 !== 4 && (a2 = a2.child, a2 !== null))
    for (gj(a2, b2, c2), a2 = a2.sibling; a2 !== null; )
      gj(a2, b2, c2), a2 = a2.sibling;
}
function hj(a2, b2, c2) {
  var d2 = a2.tag, e2 = d2 === 5 || d2 === 6;
  if (e2)
    a2 = e2 ? a2.stateNode : a2.stateNode.instance, b2 ? c2.insertBefore(a2, b2) : c2.appendChild(a2);
  else if (d2 !== 4 && (a2 = a2.child, a2 !== null))
    for (hj(a2, b2, c2), a2 = a2.sibling; a2 !== null; )
      hj(a2, b2, c2), a2 = a2.sibling;
}
function cj(a2, b2) {
  for (var c2 = b2, d2 = false, e2, f2; ; ) {
    if (!d2) {
      d2 = c2.return;
      a:
        for (; ; ) {
          if (d2 === null)
            throw Error(y(160));
          e2 = d2.stateNode;
          switch (d2.tag) {
            case 5:
              f2 = false;
              break a;
            case 3:
              e2 = e2.containerInfo;
              f2 = true;
              break a;
            case 4:
              e2 = e2.containerInfo;
              f2 = true;
              break a;
          }
          d2 = d2.return;
        }
      d2 = true;
    }
    if (c2.tag === 5 || c2.tag === 6) {
      a:
        for (var g2 = a2, h2 = c2, k2 = h2; ; )
          if (bj(g2, k2), k2.child !== null && k2.tag !== 4)
            k2.child.return = k2, k2 = k2.child;
          else {
            if (k2 === h2)
              break a;
            for (; k2.sibling === null; ) {
              if (k2.return === null || k2.return === h2)
                break a;
              k2 = k2.return;
            }
            k2.sibling.return = k2.return;
            k2 = k2.sibling;
          }
      f2 ? (g2 = e2, h2 = c2.stateNode, g2.nodeType === 8 ? g2.parentNode.removeChild(h2) : g2.removeChild(h2)) : e2.removeChild(c2.stateNode);
    } else if (c2.tag === 4) {
      if (c2.child !== null) {
        e2 = c2.stateNode.containerInfo;
        f2 = true;
        c2.child.return = c2;
        c2 = c2.child;
        continue;
      }
    } else if (bj(a2, c2), c2.child !== null) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === b2)
      break;
    for (; c2.sibling === null; ) {
      if (c2.return === null || c2.return === b2)
        return;
      c2 = c2.return;
      c2.tag === 4 && (d2 = false);
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
}
function ij(a2, b2) {
  switch (b2.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var c2 = b2.updateQueue;
      c2 = c2 !== null ? c2.lastEffect : null;
      if (c2 !== null) {
        var d2 = c2 = c2.next;
        do
          (d2.tag & 3) === 3 && (a2 = d2.destroy, d2.destroy = void 0, a2 !== void 0 && a2()), d2 = d2.next;
        while (d2 !== c2);
      }
      return;
    case 1:
      return;
    case 5:
      c2 = b2.stateNode;
      if (c2 != null) {
        d2 = b2.memoizedProps;
        var e2 = a2 !== null ? a2.memoizedProps : d2;
        a2 = b2.type;
        var f2 = b2.updateQueue;
        b2.updateQueue = null;
        if (f2 !== null) {
          c2[xf] = d2;
          a2 === "input" && d2.type === "radio" && d2.name != null && $a(c2, d2);
          wb(a2, e2);
          b2 = wb(a2, d2);
          for (e2 = 0; e2 < f2.length; e2 += 2) {
            var g2 = f2[e2], h2 = f2[e2 + 1];
            g2 === "style" ? tb(c2, h2) : g2 === "dangerouslySetInnerHTML" ? ob(c2, h2) : g2 === "children" ? pb(c2, h2) : qa(c2, g2, h2, b2);
          }
          switch (a2) {
            case "input":
              ab(c2, d2);
              break;
            case "textarea":
              ib(c2, d2);
              break;
            case "select":
              a2 = c2._wrapperState.wasMultiple, c2._wrapperState.wasMultiple = !!d2.multiple, f2 = d2.value, f2 != null ? fb(c2, !!d2.multiple, f2, false) : a2 !== !!d2.multiple && (d2.defaultValue != null ? fb(c2, !!d2.multiple, d2.defaultValue, true) : fb(c2, !!d2.multiple, d2.multiple ? [] : "", false));
          }
        }
      }
      return;
    case 6:
      if (b2.stateNode === null)
        throw Error(y(162));
      b2.stateNode.nodeValue = b2.memoizedProps;
      return;
    case 3:
      c2 = b2.stateNode;
      c2.hydrate && (c2.hydrate = false, Cc(c2.containerInfo));
      return;
    case 12:
      return;
    case 13:
      b2.memoizedState !== null && (jj = O(), aj(b2.child, true));
      kj(b2);
      return;
    case 19:
      kj(b2);
      return;
    case 17:
      return;
    case 23:
    case 24:
      aj(b2, b2.memoizedState !== null);
      return;
  }
  throw Error(y(163));
}
function kj(a2) {
  var b2 = a2.updateQueue;
  if (b2 !== null) {
    a2.updateQueue = null;
    var c2 = a2.stateNode;
    c2 === null && (c2 = a2.stateNode = new Ui());
    b2.forEach(function(b3) {
      var d2 = lj.bind(null, a2, b3);
      c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
    });
  }
}
function mj(a2, b2) {
  return a2 !== null && (a2 = a2.memoizedState, a2 === null || a2.dehydrated !== null) ? (b2 = b2.memoizedState, b2 !== null && b2.dehydrated === null) : false;
}
var nj = Math.ceil, oj = ra.ReactCurrentDispatcher, pj = ra.ReactCurrentOwner, X = 0, U = null, Y = null, W = 0, qj = 0, rj = Bf(0), V = 0, sj = null, tj = 0, Dg = 0, Hi = 0, uj = 0, vj = null, jj = 0, Ji = Infinity;
function wj() {
  Ji = O() + 500;
}
var Z = null, Qi = false, Ri = null, Ti = null, xj = false, yj = null, zj = 90, Aj = [], Bj = [], Cj = null, Dj = 0, Ej = null, Fj = -1, Gj = 0, Hj = 0, Ij = null, Jj = false;
function Hg() {
  return (X & 48) !== 0 ? O() : Fj !== -1 ? Fj : Fj = O();
}
function Ig(a2) {
  a2 = a2.mode;
  if ((a2 & 2) === 0)
    return 1;
  if ((a2 & 4) === 0)
    return eg() === 99 ? 1 : 2;
  Gj === 0 && (Gj = tj);
  if (kg.transition !== 0) {
    Hj !== 0 && (Hj = vj !== null ? vj.pendingLanes : 0);
    a2 = Gj;
    var b2 = 4186112 & ~Hj;
    b2 &= -b2;
    b2 === 0 && (a2 = 4186112 & ~a2, b2 = a2 & -a2, b2 === 0 && (b2 = 8192));
    return b2;
  }
  a2 = eg();
  (X & 4) !== 0 && a2 === 98 ? a2 = Xc(12, Gj) : (a2 = Sc(a2), a2 = Xc(a2, Gj));
  return a2;
}
function Jg(a2, b2, c2) {
  if (50 < Dj)
    throw Dj = 0, Ej = null, Error(y(185));
  a2 = Kj(a2, b2);
  if (a2 === null)
    return null;
  $c(a2, b2, c2);
  a2 === U && (Hi |= b2, V === 4 && Ii(a2, W));
  var d2 = eg();
  b2 === 1 ? (X & 8) !== 0 && (X & 48) === 0 ? Lj(a2) : (Mj(a2, c2), X === 0 && (wj(), ig())) : ((X & 4) === 0 || d2 !== 98 && d2 !== 99 || (Cj === null ? Cj = /* @__PURE__ */ new Set([a2]) : Cj.add(a2)), Mj(a2, c2));
  vj = a2;
}
function Kj(a2, b2) {
  a2.lanes |= b2;
  var c2 = a2.alternate;
  c2 !== null && (c2.lanes |= b2);
  c2 = a2;
  for (a2 = a2.return; a2 !== null; )
    a2.childLanes |= b2, c2 = a2.alternate, c2 !== null && (c2.childLanes |= b2), c2 = a2, a2 = a2.return;
  return c2.tag === 3 ? c2.stateNode : null;
}
function Mj(a2, b2) {
  for (var c2 = a2.callbackNode, d2 = a2.suspendedLanes, e2 = a2.pingedLanes, f2 = a2.expirationTimes, g2 = a2.pendingLanes; 0 < g2; ) {
    var h2 = 31 - Vc(g2), k2 = 1 << h2, l2 = f2[h2];
    if (l2 === -1) {
      if ((k2 & d2) === 0 || (k2 & e2) !== 0) {
        l2 = b2;
        Rc(k2);
        var n2 = F;
        f2[h2] = 10 <= n2 ? l2 + 250 : 6 <= n2 ? l2 + 5e3 : -1;
      }
    } else
      l2 <= b2 && (a2.expiredLanes |= k2);
    g2 &= ~k2;
  }
  d2 = Uc(a2, a2 === U ? W : 0);
  b2 = F;
  if (d2 === 0)
    c2 !== null && (c2 !== Zf && Pf(c2), a2.callbackNode = null, a2.callbackPriority = 0);
  else {
    if (c2 !== null) {
      if (a2.callbackPriority === b2)
        return;
      c2 !== Zf && Pf(c2);
    }
    b2 === 15 ? (c2 = Lj.bind(null, a2), ag === null ? (ag = [c2], bg = Of(Uf, jg)) : ag.push(c2), c2 = Zf) : b2 === 14 ? c2 = hg(99, Lj.bind(null, a2)) : (c2 = Tc(b2), c2 = hg(c2, Nj.bind(null, a2)));
    a2.callbackPriority = b2;
    a2.callbackNode = c2;
  }
}
function Nj(a2) {
  Fj = -1;
  Hj = Gj = 0;
  if ((X & 48) !== 0)
    throw Error(y(327));
  var b2 = a2.callbackNode;
  if (Oj() && a2.callbackNode !== b2)
    return null;
  var c2 = Uc(a2, a2 === U ? W : 0);
  if (c2 === 0)
    return null;
  var d2 = c2;
  var e2 = X;
  X |= 16;
  var f2 = Pj();
  if (U !== a2 || W !== d2)
    wj(), Qj(a2, d2);
  do
    try {
      Rj();
      break;
    } catch (h2) {
      Sj(a2, h2);
    }
  while (1);
  qg();
  oj.current = f2;
  X = e2;
  Y !== null ? d2 = 0 : (U = null, W = 0, d2 = V);
  if ((tj & Hi) !== 0)
    Qj(a2, 0);
  else if (d2 !== 0) {
    d2 === 2 && (X |= 64, a2.hydrate && (a2.hydrate = false, qf(a2.containerInfo)), c2 = Wc(a2), c2 !== 0 && (d2 = Tj(a2, c2)));
    if (d2 === 1)
      throw b2 = sj, Qj(a2, 0), Ii(a2, c2), Mj(a2, O()), b2;
    a2.finishedWork = a2.current.alternate;
    a2.finishedLanes = c2;
    switch (d2) {
      case 0:
      case 1:
        throw Error(y(345));
      case 2:
        Uj(a2);
        break;
      case 3:
        Ii(a2, c2);
        if ((c2 & 62914560) === c2 && (d2 = jj + 500 - O(), 10 < d2)) {
          if (Uc(a2, 0) !== 0)
            break;
          e2 = a2.suspendedLanes;
          if ((e2 & c2) !== c2) {
            Hg();
            a2.pingedLanes |= a2.suspendedLanes & e2;
            break;
          }
          a2.timeoutHandle = of(Uj.bind(null, a2), d2);
          break;
        }
        Uj(a2);
        break;
      case 4:
        Ii(a2, c2);
        if ((c2 & 4186112) === c2)
          break;
        d2 = a2.eventTimes;
        for (e2 = -1; 0 < c2; ) {
          var g2 = 31 - Vc(c2);
          f2 = 1 << g2;
          g2 = d2[g2];
          g2 > e2 && (e2 = g2);
          c2 &= ~f2;
        }
        c2 = e2;
        c2 = O() - c2;
        c2 = (120 > c2 ? 120 : 480 > c2 ? 480 : 1080 > c2 ? 1080 : 1920 > c2 ? 1920 : 3e3 > c2 ? 3e3 : 4320 > c2 ? 4320 : 1960 * nj(c2 / 1960)) - c2;
        if (10 < c2) {
          a2.timeoutHandle = of(Uj.bind(null, a2), c2);
          break;
        }
        Uj(a2);
        break;
      case 5:
        Uj(a2);
        break;
      default:
        throw Error(y(329));
    }
  }
  Mj(a2, O());
  return a2.callbackNode === b2 ? Nj.bind(null, a2) : null;
}
function Ii(a2, b2) {
  b2 &= ~uj;
  b2 &= ~Hi;
  a2.suspendedLanes |= b2;
  a2.pingedLanes &= ~b2;
  for (a2 = a2.expirationTimes; 0 < b2; ) {
    var c2 = 31 - Vc(b2), d2 = 1 << c2;
    a2[c2] = -1;
    b2 &= ~d2;
  }
}
function Lj(a2) {
  if ((X & 48) !== 0)
    throw Error(y(327));
  Oj();
  if (a2 === U && (a2.expiredLanes & W) !== 0) {
    var b2 = W;
    var c2 = Tj(a2, b2);
    (tj & Hi) !== 0 && (b2 = Uc(a2, b2), c2 = Tj(a2, b2));
  } else
    b2 = Uc(a2, 0), c2 = Tj(a2, b2);
  a2.tag !== 0 && c2 === 2 && (X |= 64, a2.hydrate && (a2.hydrate = false, qf(a2.containerInfo)), b2 = Wc(a2), b2 !== 0 && (c2 = Tj(a2, b2)));
  if (c2 === 1)
    throw c2 = sj, Qj(a2, 0), Ii(a2, b2), Mj(a2, O()), c2;
  a2.finishedWork = a2.current.alternate;
  a2.finishedLanes = b2;
  Uj(a2);
  Mj(a2, O());
  return null;
}
function Vj() {
  if (Cj !== null) {
    var a2 = Cj;
    Cj = null;
    a2.forEach(function(a3) {
      a3.expiredLanes |= 24 & a3.pendingLanes;
      Mj(a3, O());
    });
  }
  ig();
}
function Wj(a2, b2) {
  var c2 = X;
  X |= 1;
  try {
    return a2(b2);
  } finally {
    X = c2, X === 0 && (wj(), ig());
  }
}
function Xj(a2, b2) {
  var c2 = X;
  X &= -2;
  X |= 8;
  try {
    return a2(b2);
  } finally {
    X = c2, X === 0 && (wj(), ig());
  }
}
function ni(a2, b2) {
  I(rj, qj);
  qj |= b2;
  tj |= b2;
}
function Ki() {
  qj = rj.current;
  H(rj);
}
function Qj(a2, b2) {
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  var c2 = a2.timeoutHandle;
  c2 !== -1 && (a2.timeoutHandle = -1, pf(c2));
  if (Y !== null)
    for (c2 = Y.return; c2 !== null; ) {
      var d2 = c2;
      switch (d2.tag) {
        case 1:
          d2 = d2.type.childContextTypes;
          d2 !== null && d2 !== void 0 && Gf();
          break;
        case 3:
          fh();
          H(N);
          H(M);
          uh();
          break;
        case 5:
          hh(d2);
          break;
        case 4:
          fh();
          break;
        case 13:
          H(P);
          break;
        case 19:
          H(P);
          break;
        case 10:
          rg(d2);
          break;
        case 23:
        case 24:
          Ki();
      }
      c2 = c2.return;
    }
  U = a2;
  Y = Tg(a2.current, null);
  W = qj = tj = b2;
  V = 0;
  sj = null;
  uj = Hi = Dg = 0;
}
function Sj(a2, b2) {
  do {
    var c2 = Y;
    try {
      qg();
      vh.current = Gh;
      if (yh) {
        for (var d2 = R.memoizedState; d2 !== null; ) {
          var e2 = d2.queue;
          e2 !== null && (e2.pending = null);
          d2 = d2.next;
        }
        yh = false;
      }
      xh = 0;
      T = S = R = null;
      zh = false;
      pj.current = null;
      if (c2 === null || c2.return === null) {
        V = 1;
        sj = b2;
        Y = null;
        break;
      }
      a: {
        var f2 = a2, g2 = c2.return, h2 = c2, k2 = b2;
        b2 = W;
        h2.flags |= 2048;
        h2.firstEffect = h2.lastEffect = null;
        if (k2 !== null && typeof k2 === "object" && typeof k2.then === "function") {
          var l2 = k2;
          if ((h2.mode & 2) === 0) {
            var n2 = h2.alternate;
            n2 ? (h2.updateQueue = n2.updateQueue, h2.memoizedState = n2.memoizedState, h2.lanes = n2.lanes) : (h2.updateQueue = null, h2.memoizedState = null);
          }
          var A2 = (P.current & 1) !== 0, p2 = g2;
          do {
            var C2;
            if (C2 = p2.tag === 13) {
              var x = p2.memoizedState;
              if (x !== null)
                C2 = x.dehydrated !== null ? true : false;
              else {
                var w2 = p2.memoizedProps;
                C2 = w2.fallback === void 0 ? false : w2.unstable_avoidThisFallback !== true ? true : A2 ? false : true;
              }
            }
            if (C2) {
              var z2 = p2.updateQueue;
              if (z2 === null) {
                var u2 = /* @__PURE__ */ new Set();
                u2.add(l2);
                p2.updateQueue = u2;
              } else
                z2.add(l2);
              if ((p2.mode & 2) === 0) {
                p2.flags |= 64;
                h2.flags |= 16384;
                h2.flags &= -2981;
                if (h2.tag === 1)
                  if (h2.alternate === null)
                    h2.tag = 17;
                  else {
                    var t2 = zg(-1, 1);
                    t2.tag = 2;
                    Ag(h2, t2);
                  }
                h2.lanes |= 1;
                break a;
              }
              k2 = void 0;
              h2 = b2;
              var q2 = f2.pingCache;
              q2 === null ? (q2 = f2.pingCache = new Oi(), k2 = /* @__PURE__ */ new Set(), q2.set(l2, k2)) : (k2 = q2.get(l2), k2 === void 0 && (k2 = /* @__PURE__ */ new Set(), q2.set(l2, k2)));
              if (!k2.has(h2)) {
                k2.add(h2);
                var v2 = Yj.bind(null, f2, l2, h2);
                l2.then(v2, v2);
              }
              p2.flags |= 4096;
              p2.lanes = b2;
              break a;
            }
            p2 = p2.return;
          } while (p2 !== null);
          k2 = Error((Ra(h2.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
        }
        V !== 5 && (V = 2);
        k2 = Mi(k2, h2);
        p2 = g2;
        do {
          switch (p2.tag) {
            case 3:
              f2 = k2;
              p2.flags |= 4096;
              b2 &= -b2;
              p2.lanes |= b2;
              var J = Pi(p2, f2, b2);
              Bg(p2, J);
              break a;
            case 1:
              f2 = k2;
              var K = p2.type, Q = p2.stateNode;
              if ((p2.flags & 64) === 0 && (typeof K.getDerivedStateFromError === "function" || Q !== null && typeof Q.componentDidCatch === "function" && (Ti === null || !Ti.has(Q)))) {
                p2.flags |= 4096;
                b2 &= -b2;
                p2.lanes |= b2;
                var L = Si(p2, f2, b2);
                Bg(p2, L);
                break a;
              }
          }
          p2 = p2.return;
        } while (p2 !== null);
      }
      Zj(c2);
    } catch (va) {
      b2 = va;
      Y === c2 && c2 !== null && (Y = c2 = c2.return);
      continue;
    }
    break;
  } while (1);
}
function Pj() {
  var a2 = oj.current;
  oj.current = Gh;
  return a2 === null ? Gh : a2;
}
function Tj(a2, b2) {
  var c2 = X;
  X |= 16;
  var d2 = Pj();
  U === a2 && W === b2 || Qj(a2, b2);
  do
    try {
      ak();
      break;
    } catch (e2) {
      Sj(a2, e2);
    }
  while (1);
  qg();
  X = c2;
  oj.current = d2;
  if (Y !== null)
    throw Error(y(261));
  U = null;
  W = 0;
  return V;
}
function ak() {
  for (; Y !== null; )
    bk(Y);
}
function Rj() {
  for (; Y !== null && !Qf(); )
    bk(Y);
}
function bk(a2) {
  var b2 = ck(a2.alternate, a2, qj);
  a2.memoizedProps = a2.pendingProps;
  b2 === null ? Zj(a2) : Y = b2;
  pj.current = null;
}
function Zj(a2) {
  var b2 = a2;
  do {
    var c2 = b2.alternate;
    a2 = b2.return;
    if ((b2.flags & 2048) === 0) {
      c2 = Gi(c2, b2, qj);
      if (c2 !== null) {
        Y = c2;
        return;
      }
      c2 = b2;
      if (c2.tag !== 24 && c2.tag !== 23 || c2.memoizedState === null || (qj & 1073741824) !== 0 || (c2.mode & 4) === 0) {
        for (var d2 = 0, e2 = c2.child; e2 !== null; )
          d2 |= e2.lanes | e2.childLanes, e2 = e2.sibling;
        c2.childLanes = d2;
      }
      a2 !== null && (a2.flags & 2048) === 0 && (a2.firstEffect === null && (a2.firstEffect = b2.firstEffect), b2.lastEffect !== null && (a2.lastEffect !== null && (a2.lastEffect.nextEffect = b2.firstEffect), a2.lastEffect = b2.lastEffect), 1 < b2.flags && (a2.lastEffect !== null ? a2.lastEffect.nextEffect = b2 : a2.firstEffect = b2, a2.lastEffect = b2));
    } else {
      c2 = Li(b2);
      if (c2 !== null) {
        c2.flags &= 2047;
        Y = c2;
        return;
      }
      a2 !== null && (a2.firstEffect = a2.lastEffect = null, a2.flags |= 2048);
    }
    b2 = b2.sibling;
    if (b2 !== null) {
      Y = b2;
      return;
    }
    Y = b2 = a2;
  } while (b2 !== null);
  V === 0 && (V = 5);
}
function Uj(a2) {
  var b2 = eg();
  gg(99, dk.bind(null, a2, b2));
  return null;
}
function dk(a2, b2) {
  do
    Oj();
  while (yj !== null);
  if ((X & 48) !== 0)
    throw Error(y(327));
  var c2 = a2.finishedWork;
  if (c2 === null)
    return null;
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  if (c2 === a2.current)
    throw Error(y(177));
  a2.callbackNode = null;
  var d2 = c2.lanes | c2.childLanes, e2 = d2, f2 = a2.pendingLanes & ~e2;
  a2.pendingLanes = e2;
  a2.suspendedLanes = 0;
  a2.pingedLanes = 0;
  a2.expiredLanes &= e2;
  a2.mutableReadLanes &= e2;
  a2.entangledLanes &= e2;
  e2 = a2.entanglements;
  for (var g2 = a2.eventTimes, h2 = a2.expirationTimes; 0 < f2; ) {
    var k2 = 31 - Vc(f2), l2 = 1 << k2;
    e2[k2] = 0;
    g2[k2] = -1;
    h2[k2] = -1;
    f2 &= ~l2;
  }
  Cj !== null && (d2 & 24) === 0 && Cj.has(a2) && Cj.delete(a2);
  a2 === U && (Y = U = null, W = 0);
  1 < c2.flags ? c2.lastEffect !== null ? (c2.lastEffect.nextEffect = c2, d2 = c2.firstEffect) : d2 = c2 : d2 = c2.firstEffect;
  if (d2 !== null) {
    e2 = X;
    X |= 32;
    pj.current = null;
    kf = fd;
    g2 = Ne();
    if (Oe(g2)) {
      if ("selectionStart" in g2)
        h2 = { start: g2.selectionStart, end: g2.selectionEnd };
      else
        a:
          if (h2 = (h2 = g2.ownerDocument) && h2.defaultView || window, (l2 = h2.getSelection && h2.getSelection()) && l2.rangeCount !== 0) {
            h2 = l2.anchorNode;
            f2 = l2.anchorOffset;
            k2 = l2.focusNode;
            l2 = l2.focusOffset;
            try {
              h2.nodeType, k2.nodeType;
            } catch (va) {
              h2 = null;
              break a;
            }
            var n2 = 0, A2 = -1, p2 = -1, C2 = 0, x = 0, w2 = g2, z2 = null;
            b:
              for (; ; ) {
                for (var u2; ; ) {
                  w2 !== h2 || f2 !== 0 && w2.nodeType !== 3 || (A2 = n2 + f2);
                  w2 !== k2 || l2 !== 0 && w2.nodeType !== 3 || (p2 = n2 + l2);
                  w2.nodeType === 3 && (n2 += w2.nodeValue.length);
                  if ((u2 = w2.firstChild) === null)
                    break;
                  z2 = w2;
                  w2 = u2;
                }
                for (; ; ) {
                  if (w2 === g2)
                    break b;
                  z2 === h2 && ++C2 === f2 && (A2 = n2);
                  z2 === k2 && ++x === l2 && (p2 = n2);
                  if ((u2 = w2.nextSibling) !== null)
                    break;
                  w2 = z2;
                  z2 = w2.parentNode;
                }
                w2 = u2;
              }
            h2 = A2 === -1 || p2 === -1 ? null : { start: A2, end: p2 };
          } else
            h2 = null;
      h2 = h2 || { start: 0, end: 0 };
    } else
      h2 = null;
    lf = { focusedElem: g2, selectionRange: h2 };
    fd = false;
    Ij = null;
    Jj = false;
    Z = d2;
    do
      try {
        ek();
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    Ij = null;
    Z = d2;
    do
      try {
        for (g2 = a2; Z !== null; ) {
          var t2 = Z.flags;
          t2 & 16 && pb(Z.stateNode, "");
          if (t2 & 128) {
            var q2 = Z.alternate;
            if (q2 !== null) {
              var v2 = q2.ref;
              v2 !== null && (typeof v2 === "function" ? v2(null) : v2.current = null);
            }
          }
          switch (t2 & 1038) {
            case 2:
              fj(Z);
              Z.flags &= -3;
              break;
            case 6:
              fj(Z);
              Z.flags &= -3;
              ij(Z.alternate, Z);
              break;
            case 1024:
              Z.flags &= -1025;
              break;
            case 1028:
              Z.flags &= -1025;
              ij(Z.alternate, Z);
              break;
            case 4:
              ij(Z.alternate, Z);
              break;
            case 8:
              h2 = Z;
              cj(g2, h2);
              var J = h2.alternate;
              dj(h2);
              J !== null && dj(J);
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    v2 = lf;
    q2 = Ne();
    t2 = v2.focusedElem;
    g2 = v2.selectionRange;
    if (q2 !== t2 && t2 && t2.ownerDocument && Me(t2.ownerDocument.documentElement, t2)) {
      g2 !== null && Oe(t2) && (q2 = g2.start, v2 = g2.end, v2 === void 0 && (v2 = q2), "selectionStart" in t2 ? (t2.selectionStart = q2, t2.selectionEnd = Math.min(v2, t2.value.length)) : (v2 = (q2 = t2.ownerDocument || document) && q2.defaultView || window, v2.getSelection && (v2 = v2.getSelection(), h2 = t2.textContent.length, J = Math.min(g2.start, h2), g2 = g2.end === void 0 ? J : Math.min(g2.end, h2), !v2.extend && J > g2 && (h2 = g2, g2 = J, J = h2), h2 = Le(t2, J), f2 = Le(t2, g2), h2 && f2 && (v2.rangeCount !== 1 || v2.anchorNode !== h2.node || v2.anchorOffset !== h2.offset || v2.focusNode !== f2.node || v2.focusOffset !== f2.offset) && (q2 = q2.createRange(), q2.setStart(h2.node, h2.offset), v2.removeAllRanges(), J > g2 ? (v2.addRange(q2), v2.extend(f2.node, f2.offset)) : (q2.setEnd(f2.node, f2.offset), v2.addRange(q2))))));
      q2 = [];
      for (v2 = t2; v2 = v2.parentNode; )
        v2.nodeType === 1 && q2.push({ element: v2, left: v2.scrollLeft, top: v2.scrollTop });
      typeof t2.focus === "function" && t2.focus();
      for (t2 = 0; t2 < q2.length; t2++)
        v2 = q2[t2], v2.element.scrollLeft = v2.left, v2.element.scrollTop = v2.top;
    }
    fd = !!kf;
    lf = kf = null;
    a2.current = c2;
    Z = d2;
    do
      try {
        for (t2 = a2; Z !== null; ) {
          var K = Z.flags;
          K & 36 && Yi(t2, Z.alternate, Z);
          if (K & 128) {
            q2 = void 0;
            var Q = Z.ref;
            if (Q !== null) {
              var L = Z.stateNode;
              switch (Z.tag) {
                case 5:
                  q2 = L;
                  break;
                default:
                  q2 = L;
              }
              typeof Q === "function" ? Q(q2) : Q.current = q2;
            }
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    Z = null;
    $f();
    X = e2;
  } else
    a2.current = c2;
  if (xj)
    xj = false, yj = a2, zj = b2;
  else
    for (Z = d2; Z !== null; )
      b2 = Z.nextEffect, Z.nextEffect = null, Z.flags & 8 && (K = Z, K.sibling = null, K.stateNode = null), Z = b2;
  d2 = a2.pendingLanes;
  d2 === 0 && (Ti = null);
  d2 === 1 ? a2 === Ej ? Dj++ : (Dj = 0, Ej = a2) : Dj = 0;
  c2 = c2.stateNode;
  if (Mf && typeof Mf.onCommitFiberRoot === "function")
    try {
      Mf.onCommitFiberRoot(Lf, c2, void 0, (c2.current.flags & 64) === 64);
    } catch (va) {
    }
  Mj(a2, O());
  if (Qi)
    throw Qi = false, a2 = Ri, Ri = null, a2;
  if ((X & 8) !== 0)
    return null;
  ig();
  return null;
}
function ek() {
  for (; Z !== null; ) {
    var a2 = Z.alternate;
    Jj || Ij === null || ((Z.flags & 8) !== 0 ? dc(Z, Ij) && (Jj = true) : Z.tag === 13 && mj(a2, Z) && dc(Z, Ij) && (Jj = true));
    var b2 = Z.flags;
    (b2 & 256) !== 0 && Xi(a2, Z);
    (b2 & 512) === 0 || xj || (xj = true, hg(97, function() {
      Oj();
      return null;
    }));
    Z = Z.nextEffect;
  }
}
function Oj() {
  if (zj !== 90) {
    var a2 = 97 < zj ? 97 : zj;
    zj = 90;
    return gg(a2, fk);
  }
  return false;
}
function $i(a2, b2) {
  Aj.push(b2, a2);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function Zi(a2, b2) {
  Bj.push(b2, a2);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function fk() {
  if (yj === null)
    return false;
  var a2 = yj;
  yj = null;
  if ((X & 48) !== 0)
    throw Error(y(331));
  var b2 = X;
  X |= 32;
  var c2 = Bj;
  Bj = [];
  for (var d2 = 0; d2 < c2.length; d2 += 2) {
    var e2 = c2[d2], f2 = c2[d2 + 1], g2 = e2.destroy;
    e2.destroy = void 0;
    if (typeof g2 === "function")
      try {
        g2();
      } catch (k2) {
        if (f2 === null)
          throw Error(y(330));
        Wi(f2, k2);
      }
  }
  c2 = Aj;
  Aj = [];
  for (d2 = 0; d2 < c2.length; d2 += 2) {
    e2 = c2[d2];
    f2 = c2[d2 + 1];
    try {
      var h2 = e2.create;
      e2.destroy = h2();
    } catch (k2) {
      if (f2 === null)
        throw Error(y(330));
      Wi(f2, k2);
    }
  }
  for (h2 = a2.current.firstEffect; h2 !== null; )
    a2 = h2.nextEffect, h2.nextEffect = null, h2.flags & 8 && (h2.sibling = null, h2.stateNode = null), h2 = a2;
  X = b2;
  ig();
  return true;
}
function gk(a2, b2, c2) {
  b2 = Mi(c2, b2);
  b2 = Pi(a2, b2, 1);
  Ag(a2, b2);
  b2 = Hg();
  a2 = Kj(a2, 1);
  a2 !== null && ($c(a2, 1, b2), Mj(a2, b2));
}
function Wi(a2, b2) {
  if (a2.tag === 3)
    gk(a2, a2, b2);
  else
    for (var c2 = a2.return; c2 !== null; ) {
      if (c2.tag === 3) {
        gk(c2, a2, b2);
        break;
      } else if (c2.tag === 1) {
        var d2 = c2.stateNode;
        if (typeof c2.type.getDerivedStateFromError === "function" || typeof d2.componentDidCatch === "function" && (Ti === null || !Ti.has(d2))) {
          a2 = Mi(b2, a2);
          var e2 = Si(c2, a2, 1);
          Ag(c2, e2);
          e2 = Hg();
          c2 = Kj(c2, 1);
          if (c2 !== null)
            $c(c2, 1, e2), Mj(c2, e2);
          else if (typeof d2.componentDidCatch === "function" && (Ti === null || !Ti.has(d2)))
            try {
              d2.componentDidCatch(b2, a2);
            } catch (f2) {
            }
          break;
        }
      }
      c2 = c2.return;
    }
}
function Yj(a2, b2, c2) {
  var d2 = a2.pingCache;
  d2 !== null && d2.delete(b2);
  b2 = Hg();
  a2.pingedLanes |= a2.suspendedLanes & c2;
  U === a2 && (W & c2) === c2 && (V === 4 || V === 3 && (W & 62914560) === W && 500 > O() - jj ? Qj(a2, 0) : uj |= c2);
  Mj(a2, b2);
}
function lj(a2, b2) {
  var c2 = a2.stateNode;
  c2 !== null && c2.delete(b2);
  b2 = 0;
  b2 === 0 && (b2 = a2.mode, (b2 & 2) === 0 ? b2 = 1 : (b2 & 4) === 0 ? b2 = eg() === 99 ? 1 : 2 : (Gj === 0 && (Gj = tj), b2 = Yc(62914560 & ~Gj), b2 === 0 && (b2 = 4194304)));
  c2 = Hg();
  a2 = Kj(a2, b2);
  a2 !== null && ($c(a2, b2, c2), Mj(a2, c2));
}
var ck;
ck = function(a2, b2, c2) {
  var d2 = b2.lanes;
  if (a2 !== null)
    if (a2.memoizedProps !== b2.pendingProps || N.current)
      ug = true;
    else if ((c2 & d2) !== 0)
      ug = (a2.flags & 16384) !== 0 ? true : false;
    else {
      ug = false;
      switch (b2.tag) {
        case 3:
          ri(b2);
          sh();
          break;
        case 5:
          gh(b2);
          break;
        case 1:
          Ff(b2.type) && Jf(b2);
          break;
        case 4:
          eh(b2, b2.stateNode.containerInfo);
          break;
        case 10:
          d2 = b2.memoizedProps.value;
          var e2 = b2.type._context;
          I(mg, e2._currentValue);
          e2._currentValue = d2;
          break;
        case 13:
          if (b2.memoizedState !== null) {
            if ((c2 & b2.child.childLanes) !== 0)
              return ti(a2, b2, c2);
            I(P, P.current & 1);
            b2 = hi(a2, b2, c2);
            return b2 !== null ? b2.sibling : null;
          }
          I(P, P.current & 1);
          break;
        case 19:
          d2 = (c2 & b2.childLanes) !== 0;
          if ((a2.flags & 64) !== 0) {
            if (d2)
              return Ai(a2, b2, c2);
            b2.flags |= 64;
          }
          e2 = b2.memoizedState;
          e2 !== null && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
          I(P, P.current);
          if (d2)
            break;
          else
            return null;
        case 23:
        case 24:
          return b2.lanes = 0, mi(a2, b2, c2);
      }
      return hi(a2, b2, c2);
    }
  else
    ug = false;
  b2.lanes = 0;
  switch (b2.tag) {
    case 2:
      d2 = b2.type;
      a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
      a2 = b2.pendingProps;
      e2 = Ef(b2, M.current);
      tg(b2, c2);
      e2 = Ch(null, b2, d2, a2, e2, c2);
      b2.flags |= 1;
      if (typeof e2 === "object" && e2 !== null && typeof e2.render === "function" && e2.$$typeof === void 0) {
        b2.tag = 1;
        b2.memoizedState = null;
        b2.updateQueue = null;
        if (Ff(d2)) {
          var f2 = true;
          Jf(b2);
        } else
          f2 = false;
        b2.memoizedState = e2.state !== null && e2.state !== void 0 ? e2.state : null;
        xg(b2);
        var g2 = d2.getDerivedStateFromProps;
        typeof g2 === "function" && Gg(b2, d2, g2, a2);
        e2.updater = Kg;
        b2.stateNode = e2;
        e2._reactInternals = b2;
        Og(b2, d2, a2, c2);
        b2 = qi(null, b2, d2, true, f2, c2);
      } else
        b2.tag = 0, fi(null, b2, e2, c2), b2 = b2.child;
      return b2;
    case 16:
      e2 = b2.elementType;
      a: {
        a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
        a2 = b2.pendingProps;
        f2 = e2._init;
        e2 = f2(e2._payload);
        b2.type = e2;
        f2 = b2.tag = hk(e2);
        a2 = lg(e2, a2);
        switch (f2) {
          case 0:
            b2 = li(null, b2, e2, a2, c2);
            break a;
          case 1:
            b2 = pi(null, b2, e2, a2, c2);
            break a;
          case 11:
            b2 = gi(null, b2, e2, a2, c2);
            break a;
          case 14:
            b2 = ii(null, b2, e2, lg(e2.type, a2), d2, c2);
            break a;
        }
        throw Error(y(306, e2, ""));
      }
      return b2;
    case 0:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : lg(d2, e2), li(a2, b2, d2, e2, c2);
    case 1:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : lg(d2, e2), pi(a2, b2, d2, e2, c2);
    case 3:
      ri(b2);
      d2 = b2.updateQueue;
      if (a2 === null || d2 === null)
        throw Error(y(282));
      d2 = b2.pendingProps;
      e2 = b2.memoizedState;
      e2 = e2 !== null ? e2.element : null;
      yg(a2, b2);
      Cg(b2, d2, null, c2);
      d2 = b2.memoizedState.element;
      if (d2 === e2)
        sh(), b2 = hi(a2, b2, c2);
      else {
        e2 = b2.stateNode;
        if (f2 = e2.hydrate)
          kh = rf(b2.stateNode.containerInfo.firstChild), jh = b2, f2 = lh = true;
        if (f2) {
          a2 = e2.mutableSourceEagerHydrationData;
          if (a2 != null)
            for (e2 = 0; e2 < a2.length; e2 += 2)
              f2 = a2[e2], f2._workInProgressVersionPrimary = a2[e2 + 1], th.push(f2);
          c2 = Zg(b2, null, d2, c2);
          for (b2.child = c2; c2; )
            c2.flags = c2.flags & -3 | 1024, c2 = c2.sibling;
        } else
          fi(a2, b2, d2, c2), sh();
        b2 = b2.child;
      }
      return b2;
    case 5:
      return gh(b2), a2 === null && ph(b2), d2 = b2.type, e2 = b2.pendingProps, f2 = a2 !== null ? a2.memoizedProps : null, g2 = e2.children, nf(d2, e2) ? g2 = null : f2 !== null && nf(d2, f2) && (b2.flags |= 16), oi(a2, b2), fi(a2, b2, g2, c2), b2.child;
    case 6:
      return a2 === null && ph(b2), null;
    case 13:
      return ti(a2, b2, c2);
    case 4:
      return eh(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, a2 === null ? b2.child = Yg(b2, null, d2, c2) : fi(a2, b2, d2, c2), b2.child;
    case 11:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : lg(d2, e2), gi(a2, b2, d2, e2, c2);
    case 7:
      return fi(a2, b2, b2.pendingProps, c2), b2.child;
    case 8:
      return fi(a2, b2, b2.pendingProps.children, c2), b2.child;
    case 12:
      return fi(a2, b2, b2.pendingProps.children, c2), b2.child;
    case 10:
      a: {
        d2 = b2.type._context;
        e2 = b2.pendingProps;
        g2 = b2.memoizedProps;
        f2 = e2.value;
        var h2 = b2.type._context;
        I(mg, h2._currentValue);
        h2._currentValue = f2;
        if (g2 !== null)
          if (h2 = g2.value, f2 = He(h2, f2) ? 0 : (typeof d2._calculateChangedBits === "function" ? d2._calculateChangedBits(h2, f2) : 1073741823) | 0, f2 === 0) {
            if (g2.children === e2.children && !N.current) {
              b2 = hi(a2, b2, c2);
              break a;
            }
          } else
            for (h2 = b2.child, h2 !== null && (h2.return = b2); h2 !== null; ) {
              var k2 = h2.dependencies;
              if (k2 !== null) {
                g2 = h2.child;
                for (var l2 = k2.firstContext; l2 !== null; ) {
                  if (l2.context === d2 && (l2.observedBits & f2) !== 0) {
                    h2.tag === 1 && (l2 = zg(-1, c2 & -c2), l2.tag = 2, Ag(h2, l2));
                    h2.lanes |= c2;
                    l2 = h2.alternate;
                    l2 !== null && (l2.lanes |= c2);
                    sg(h2.return, c2);
                    k2.lanes |= c2;
                    break;
                  }
                  l2 = l2.next;
                }
              } else
                g2 = h2.tag === 10 ? h2.type === b2.type ? null : h2.child : h2.child;
              if (g2 !== null)
                g2.return = h2;
              else
                for (g2 = h2; g2 !== null; ) {
                  if (g2 === b2) {
                    g2 = null;
                    break;
                  }
                  h2 = g2.sibling;
                  if (h2 !== null) {
                    h2.return = g2.return;
                    g2 = h2;
                    break;
                  }
                  g2 = g2.return;
                }
              h2 = g2;
            }
        fi(a2, b2, e2.children, c2);
        b2 = b2.child;
      }
      return b2;
    case 9:
      return e2 = b2.type, f2 = b2.pendingProps, d2 = f2.children, tg(b2, c2), e2 = vg(e2, f2.unstable_observedBits), d2 = d2(e2), b2.flags |= 1, fi(a2, b2, d2, c2), b2.child;
    case 14:
      return e2 = b2.type, f2 = lg(e2, b2.pendingProps), f2 = lg(e2.type, f2), ii(a2, b2, e2, f2, d2, c2);
    case 15:
      return ki(a2, b2, b2.type, b2.pendingProps, d2, c2);
    case 17:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : lg(d2, e2), a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2), b2.tag = 1, Ff(d2) ? (a2 = true, Jf(b2)) : a2 = false, tg(b2, c2), Mg(b2, d2, e2), Og(b2, d2, e2, c2), qi(null, b2, d2, true, a2, c2);
    case 19:
      return Ai(a2, b2, c2);
    case 23:
      return mi(a2, b2, c2);
    case 24:
      return mi(a2, b2, c2);
  }
  throw Error(y(156, b2.tag));
};
function ik(a2, b2, c2, d2) {
  this.tag = a2;
  this.key = c2;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b2;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d2;
  this.flags = 0;
  this.lastEffect = this.firstEffect = this.nextEffect = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function nh(a2, b2, c2, d2) {
  return new ik(a2, b2, c2, d2);
}
function ji(a2) {
  a2 = a2.prototype;
  return !(!a2 || !a2.isReactComponent);
}
function hk(a2) {
  if (typeof a2 === "function")
    return ji(a2) ? 1 : 0;
  if (a2 !== void 0 && a2 !== null) {
    a2 = a2.$$typeof;
    if (a2 === Aa)
      return 11;
    if (a2 === Da)
      return 14;
  }
  return 2;
}
function Tg(a2, b2) {
  var c2 = a2.alternate;
  c2 === null ? (c2 = nh(a2.tag, b2, a2.key, a2.mode), c2.elementType = a2.elementType, c2.type = a2.type, c2.stateNode = a2.stateNode, c2.alternate = a2, a2.alternate = c2) : (c2.pendingProps = b2, c2.type = a2.type, c2.flags = 0, c2.nextEffect = null, c2.firstEffect = null, c2.lastEffect = null);
  c2.childLanes = a2.childLanes;
  c2.lanes = a2.lanes;
  c2.child = a2.child;
  c2.memoizedProps = a2.memoizedProps;
  c2.memoizedState = a2.memoizedState;
  c2.updateQueue = a2.updateQueue;
  b2 = a2.dependencies;
  c2.dependencies = b2 === null ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
  c2.sibling = a2.sibling;
  c2.index = a2.index;
  c2.ref = a2.ref;
  return c2;
}
function Vg(a2, b2, c2, d2, e2, f2) {
  var g2 = 2;
  d2 = a2;
  if (typeof a2 === "function")
    ji(a2) && (g2 = 1);
  else if (typeof a2 === "string")
    g2 = 5;
  else
    a:
      switch (a2) {
        case ua:
          return Xg(c2.children, e2, f2, b2);
        case Ha:
          g2 = 8;
          e2 |= 16;
          break;
        case wa:
          g2 = 8;
          e2 |= 1;
          break;
        case xa:
          return a2 = nh(12, c2, b2, e2 | 8), a2.elementType = xa, a2.type = xa, a2.lanes = f2, a2;
        case Ba:
          return a2 = nh(13, c2, b2, e2), a2.type = Ba, a2.elementType = Ba, a2.lanes = f2, a2;
        case Ca:
          return a2 = nh(19, c2, b2, e2), a2.elementType = Ca, a2.lanes = f2, a2;
        case Ia:
          return vi(c2, e2, f2, b2);
        case Ja:
          return a2 = nh(24, c2, b2, e2), a2.elementType = Ja, a2.lanes = f2, a2;
        default:
          if (typeof a2 === "object" && a2 !== null)
            switch (a2.$$typeof) {
              case ya:
                g2 = 10;
                break a;
              case za:
                g2 = 9;
                break a;
              case Aa:
                g2 = 11;
                break a;
              case Da:
                g2 = 14;
                break a;
              case Ea:
                g2 = 16;
                d2 = null;
                break a;
              case Fa:
                g2 = 22;
                break a;
            }
          throw Error(y(130, a2 == null ? a2 : typeof a2, ""));
      }
  b2 = nh(g2, c2, b2, e2);
  b2.elementType = a2;
  b2.type = d2;
  b2.lanes = f2;
  return b2;
}
function Xg(a2, b2, c2, d2) {
  a2 = nh(7, a2, d2, b2);
  a2.lanes = c2;
  return a2;
}
function vi(a2, b2, c2, d2) {
  a2 = nh(23, a2, d2, b2);
  a2.elementType = Ia;
  a2.lanes = c2;
  return a2;
}
function Ug(a2, b2, c2) {
  a2 = nh(6, a2, null, b2);
  a2.lanes = c2;
  return a2;
}
function Wg(a2, b2, c2) {
  b2 = nh(4, a2.children !== null ? a2.children : [], a2.key, b2);
  b2.lanes = c2;
  b2.stateNode = { containerInfo: a2.containerInfo, pendingChildren: null, implementation: a2.implementation };
  return b2;
}
function jk(a2, b2, c2) {
  this.tag = b2;
  this.containerInfo = a2;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.pendingContext = this.context = null;
  this.hydrate = c2;
  this.callbackNode = null;
  this.callbackPriority = 0;
  this.eventTimes = Zc(0);
  this.expirationTimes = Zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = Zc(0);
  this.mutableSourceEagerHydrationData = null;
}
function kk(a2, b2, c2) {
  var d2 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: ta, key: d2 == null ? null : "" + d2, children: a2, containerInfo: b2, implementation: c2 };
}
function lk(a2, b2, c2, d2) {
  var e2 = b2.current, f2 = Hg(), g2 = Ig(e2);
  a:
    if (c2) {
      c2 = c2._reactInternals;
      b: {
        if (Zb(c2) !== c2 || c2.tag !== 1)
          throw Error(y(170));
        var h2 = c2;
        do {
          switch (h2.tag) {
            case 3:
              h2 = h2.stateNode.context;
              break b;
            case 1:
              if (Ff(h2.type)) {
                h2 = h2.stateNode.__reactInternalMemoizedMergedChildContext;
                break b;
              }
          }
          h2 = h2.return;
        } while (h2 !== null);
        throw Error(y(171));
      }
      if (c2.tag === 1) {
        var k2 = c2.type;
        if (Ff(k2)) {
          c2 = If(c2, k2, h2);
          break a;
        }
      }
      c2 = h2;
    } else
      c2 = Cf;
  b2.context === null ? b2.context = c2 : b2.pendingContext = c2;
  b2 = zg(f2, g2);
  b2.payload = { element: a2 };
  d2 = d2 === void 0 ? null : d2;
  d2 !== null && (b2.callback = d2);
  Ag(e2, b2);
  Jg(e2, g2, f2);
  return g2;
}
function mk(a2) {
  a2 = a2.current;
  if (!a2.child)
    return null;
  switch (a2.child.tag) {
    case 5:
      return a2.child.stateNode;
    default:
      return a2.child.stateNode;
  }
}
function nk(a2, b2) {
  a2 = a2.memoizedState;
  if (a2 !== null && a2.dehydrated !== null) {
    var c2 = a2.retryLane;
    a2.retryLane = c2 !== 0 && c2 < b2 ? c2 : b2;
  }
}
function ok(a2, b2) {
  nk(a2, b2);
  (a2 = a2.alternate) && nk(a2, b2);
}
function pk() {
  return null;
}
function qk(a2, b2, c2) {
  var d2 = c2 != null && c2.hydrationOptions != null && c2.hydrationOptions.mutableSources || null;
  c2 = new jk(a2, b2, c2 != null && c2.hydrate === true);
  b2 = nh(3, null, null, b2 === 2 ? 7 : b2 === 1 ? 3 : 0);
  c2.current = b2;
  b2.stateNode = c2;
  xg(b2);
  a2[ff] = c2.current;
  cf(a2.nodeType === 8 ? a2.parentNode : a2);
  if (d2)
    for (a2 = 0; a2 < d2.length; a2++) {
      b2 = d2[a2];
      var e2 = b2._getVersion;
      e2 = e2(b2._source);
      c2.mutableSourceEagerHydrationData == null ? c2.mutableSourceEagerHydrationData = [b2, e2] : c2.mutableSourceEagerHydrationData.push(b2, e2);
    }
  this._internalRoot = c2;
}
qk.prototype.render = function(a2) {
  lk(a2, this._internalRoot, null, null);
};
qk.prototype.unmount = function() {
  var a2 = this._internalRoot, b2 = a2.containerInfo;
  lk(null, a2, null, function() {
    b2[ff] = null;
  });
};
function rk(a2) {
  return !(!a2 || a2.nodeType !== 1 && a2.nodeType !== 9 && a2.nodeType !== 11 && (a2.nodeType !== 8 || a2.nodeValue !== " react-mount-point-unstable "));
}
function sk(a2, b2) {
  b2 || (b2 = a2 ? a2.nodeType === 9 ? a2.documentElement : a2.firstChild : null, b2 = !(!b2 || b2.nodeType !== 1 || !b2.hasAttribute("data-reactroot")));
  if (!b2)
    for (var c2; c2 = a2.lastChild; )
      a2.removeChild(c2);
  return new qk(a2, 0, b2 ? { hydrate: true } : void 0);
}
function tk(a2, b2, c2, d2, e2) {
  var f2 = c2._reactRootContainer;
  if (f2) {
    var g2 = f2._internalRoot;
    if (typeof e2 === "function") {
      var h2 = e2;
      e2 = function() {
        var a3 = mk(g2);
        h2.call(a3);
      };
    }
    lk(b2, g2, a2, e2);
  } else {
    f2 = c2._reactRootContainer = sk(c2, d2);
    g2 = f2._internalRoot;
    if (typeof e2 === "function") {
      var k2 = e2;
      e2 = function() {
        var a3 = mk(g2);
        k2.call(a3);
      };
    }
    Xj(function() {
      lk(b2, g2, a2, e2);
    });
  }
  return mk(g2);
}
ec = function(a2) {
  if (a2.tag === 13) {
    var b2 = Hg();
    Jg(a2, 4, b2);
    ok(a2, 4);
  }
};
fc = function(a2) {
  if (a2.tag === 13) {
    var b2 = Hg();
    Jg(a2, 67108864, b2);
    ok(a2, 67108864);
  }
};
gc = function(a2) {
  if (a2.tag === 13) {
    var b2 = Hg(), c2 = Ig(a2);
    Jg(a2, c2, b2);
    ok(a2, c2);
  }
};
hc = function(a2, b2) {
  return b2();
};
yb = function(a2, b2, c2) {
  switch (b2) {
    case "input":
      ab(a2, c2);
      b2 = c2.name;
      if (c2.type === "radio" && b2 != null) {
        for (c2 = a2; c2.parentNode; )
          c2 = c2.parentNode;
        c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
        for (b2 = 0; b2 < c2.length; b2++) {
          var d2 = c2[b2];
          if (d2 !== a2 && d2.form === a2.form) {
            var e2 = Db(d2);
            if (!e2)
              throw Error(y(90));
            Wa(d2);
            ab(d2, e2);
          }
        }
      }
      break;
    case "textarea":
      ib(a2, c2);
      break;
    case "select":
      b2 = c2.value, b2 != null && fb(a2, !!c2.multiple, b2, false);
  }
};
Gb = Wj;
Hb = function(a2, b2, c2, d2, e2) {
  var f2 = X;
  X |= 4;
  try {
    return gg(98, a2.bind(null, b2, c2, d2, e2));
  } finally {
    X = f2, X === 0 && (wj(), ig());
  }
};
Ib = function() {
  (X & 49) === 0 && (Vj(), Oj());
};
Jb = function(a2, b2) {
  var c2 = X;
  X |= 2;
  try {
    return a2(b2);
  } finally {
    X = c2, X === 0 && (wj(), ig());
  }
};
function uk(a2, b2) {
  var c2 = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!rk(b2))
    throw Error(y(200));
  return kk(a2, b2, null, c2);
}
var vk = { Events: [Cb, ue, Db, Eb, Fb, Oj, { current: false }] }, wk = { findFiberByHostInstance: wc, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" };
var xk = { bundleType: wk.bundleType, version: wk.version, rendererPackageName: wk.rendererPackageName, rendererConfig: wk.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ra.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
  a2 = cc(a2);
  return a2 === null ? null : a2.stateNode;
}, findFiberByHostInstance: wk.findFiberByHostInstance || pk, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
  var yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yk.isDisabled && yk.supportsFiber)
    try {
      Lf = yk.inject(xk), Mf = yk;
    } catch (a2) {
    }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vk;
reactDom_production_min.createPortal = uk;
reactDom_production_min.findDOMNode = function(a2) {
  if (a2 == null)
    return null;
  if (a2.nodeType === 1)
    return a2;
  var b2 = a2._reactInternals;
  if (b2 === void 0) {
    if (typeof a2.render === "function")
      throw Error(y(188));
    throw Error(y(268, Object.keys(a2)));
  }
  a2 = cc(b2);
  a2 = a2 === null ? null : a2.stateNode;
  return a2;
};
reactDom_production_min.flushSync = function(a2, b2) {
  var c2 = X;
  if ((c2 & 48) !== 0)
    return a2(b2);
  X |= 1;
  try {
    if (a2)
      return gg(99, a2.bind(null, b2));
  } finally {
    X = c2, ig();
  }
};
reactDom_production_min.hydrate = function(a2, b2, c2) {
  if (!rk(b2))
    throw Error(y(200));
  return tk(null, a2, b2, true, c2);
};
reactDom_production_min.render = function(a2, b2, c2) {
  if (!rk(b2))
    throw Error(y(200));
  return tk(null, a2, b2, false, c2);
};
reactDom_production_min.unmountComponentAtNode = function(a2) {
  if (!rk(a2))
    throw Error(y(40));
  return a2._reactRootContainer ? (Xj(function() {
    tk(null, null, a2, false, function() {
      a2._reactRootContainer = null;
      a2[ff] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Wj;
reactDom_production_min.unstable_createPortal = function(a2, b2) {
  return uk(a2, b2, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
};
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a2, b2, c2, d2) {
  if (!rk(c2))
    throw Error(y(200));
  if (a2 == null || a2._reactInternals === void 0)
    throw Error(y(38));
  return tk(a2, b2, c2, false, d2);
};
reactDom_production_min.version = "17.0.2";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var ReactDOM = reactDom.exports;
setBatch(reactDom.exports.unstable_batchedUpdates);
function areInputsEqual$1(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (newInputs[i] !== lastInputs[i]) {
      return false;
    }
  }
  return true;
}
function useMemoOne(getResult, inputs) {
  var initial = useState(function() {
    return {
      inputs,
      result: getResult()
    };
  })[0];
  var isFirstRun = useRef(true);
  var committed = useRef(initial);
  var useCache = isFirstRun.current || Boolean(inputs && committed.current.inputs && areInputsEqual$1(inputs, committed.current.inputs));
  var cache = useCache ? committed.current : {
    inputs,
    result: getResult()
  };
  useEffect(function() {
    isFirstRun.current = false;
    committed.current = cache;
  }, [cache]);
  return cache.result;
}
function useCallbackOne(callback, inputs) {
  return useMemoOne(function() {
    return callback;
  }, inputs);
}
var useMemo = useMemoOne;
var useCallback = useCallbackOne;
var isProduction = true;
var prefix$2 = "Invariant failed";
function invariant$2(condition, message) {
  if (condition) {
    return;
  }
  if (isProduction) {
    throw new Error(prefix$2);
  }
  var provided = typeof message === "function" ? message() : message;
  var value = provided ? prefix$2 + ": " + provided : prefix$2;
  throw new Error(value);
}
var getRect = function getRect2(_ref) {
  var top = _ref.top, right2 = _ref.right, bottom = _ref.bottom, left = _ref.left;
  var width = right2 - left;
  var height = bottom - top;
  var rect = {
    top,
    right: right2,
    bottom,
    left,
    width,
    height,
    x: left,
    y: top,
    center: {
      x: (right2 + left) / 2,
      y: (bottom + top) / 2
    }
  };
  return rect;
};
var expand = function expand2(target, expandBy) {
  return {
    top: target.top - expandBy.top,
    left: target.left - expandBy.left,
    bottom: target.bottom + expandBy.bottom,
    right: target.right + expandBy.right
  };
};
var shrink = function shrink2(target, shrinkBy) {
  return {
    top: target.top + shrinkBy.top,
    left: target.left + shrinkBy.left,
    bottom: target.bottom - shrinkBy.bottom,
    right: target.right - shrinkBy.right
  };
};
var shift = function shift2(target, shiftBy) {
  return {
    top: target.top + shiftBy.y,
    left: target.left + shiftBy.x,
    bottom: target.bottom + shiftBy.y,
    right: target.right + shiftBy.x
  };
};
var noSpacing$1 = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};
var createBox = function createBox2(_ref2) {
  var borderBox = _ref2.borderBox, _ref2$margin = _ref2.margin, margin = _ref2$margin === void 0 ? noSpacing$1 : _ref2$margin, _ref2$border = _ref2.border, border = _ref2$border === void 0 ? noSpacing$1 : _ref2$border, _ref2$padding = _ref2.padding, padding = _ref2$padding === void 0 ? noSpacing$1 : _ref2$padding;
  var marginBox = getRect(expand(borderBox, margin));
  var paddingBox = getRect(shrink(borderBox, border));
  var contentBox = getRect(shrink(paddingBox, padding));
  return {
    marginBox,
    borderBox: getRect(borderBox),
    paddingBox,
    contentBox,
    margin,
    border,
    padding
  };
};
var parse = function parse2(raw) {
  var value = raw.slice(0, -2);
  var suffix = raw.slice(-2);
  if (suffix !== "px") {
    return 0;
  }
  var result = Number(value);
  !!isNaN(result) ? invariant$2(false) : void 0;
  return result;
};
var getWindowScroll$1 = function getWindowScroll() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
};
var offset = function offset2(original, change) {
  var borderBox = original.borderBox, border = original.border, margin = original.margin, padding = original.padding;
  var shifted = shift(borderBox, change);
  return createBox({
    borderBox: shifted,
    border,
    margin,
    padding
  });
};
var withScroll = function withScroll2(original, scroll3) {
  if (scroll3 === void 0) {
    scroll3 = getWindowScroll$1();
  }
  return offset(original, scroll3);
};
var calculateBox = function calculateBox2(borderBox, styles2) {
  var margin = {
    top: parse(styles2.marginTop),
    right: parse(styles2.marginRight),
    bottom: parse(styles2.marginBottom),
    left: parse(styles2.marginLeft)
  };
  var padding = {
    top: parse(styles2.paddingTop),
    right: parse(styles2.paddingRight),
    bottom: parse(styles2.paddingBottom),
    left: parse(styles2.paddingLeft)
  };
  var border = {
    top: parse(styles2.borderTopWidth),
    right: parse(styles2.borderRightWidth),
    bottom: parse(styles2.borderBottomWidth),
    left: parse(styles2.borderLeftWidth)
  };
  return createBox({
    borderBox,
    margin,
    padding,
    border
  });
};
var getBox = function getBox2(el) {
  var borderBox = el.getBoundingClientRect();
  var styles2 = window.getComputedStyle(el);
  return calculateBox(borderBox, styles2);
};
var safeIsNaN = Number.isNaN || function ponyfill(value) {
  return typeof value === "number" && value !== value;
};
function isEqual$2(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (!isEqual$2(newInputs[i], lastInputs[i])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual4) {
  if (isEqual4 === void 0) {
    isEqual4 = areInputsEqual;
  }
  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (calledOnce && lastThis === this && isEqual4(newArgs, lastArgs)) {
      return lastResult;
    }
    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  }
  return memoized;
}
var rafSchd = function rafSchd2(fn) {
  var lastArgs = [];
  var frameId = null;
  var wrapperFn = function wrapperFn2() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    lastArgs = args;
    if (frameId) {
      return;
    }
    frameId = requestAnimationFrame(function() {
      frameId = null;
      fn.apply(void 0, lastArgs);
    });
  };
  wrapperFn.cancel = function() {
    if (!frameId) {
      return;
    }
    cancelAnimationFrame(frameId);
    frameId = null;
  };
  return wrapperFn;
};
var rafSchd$1 = rafSchd;
function log(type, message) {
  {
    return;
  }
}
log.bind(null, "warn");
log.bind(null, "error");
function noop() {
}
function getOptions(shared, fromBinding) {
  return _extends({}, shared, {}, fromBinding);
}
function bindEvents(el, bindings, sharedOptions) {
  var unbindings = bindings.map(function(binding) {
    var options = getOptions(sharedOptions, binding.options);
    el.addEventListener(binding.eventName, binding.fn, options);
    return function unbind() {
      el.removeEventListener(binding.eventName, binding.fn, options);
    };
  });
  return function unbindAll() {
    unbindings.forEach(function(unbind) {
      unbind();
    });
  };
}
var prefix = "Invariant failed";
function RbdInvariant(message) {
  this.message = message;
}
RbdInvariant.prototype.toString = function toString() {
  return this.message;
};
function invariant$1(condition, message) {
  if (condition) {
    return;
  }
  {
    throw new RbdInvariant(prefix);
  }
}
var ErrorBoundary = function(_React$Component) {
  _inheritsLoose(ErrorBoundary2, _React$Component);
  function ErrorBoundary2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.callbacks = null;
    _this.unbind = noop;
    _this.onWindowError = function(event) {
      var callbacks = _this.getCallbacks();
      if (callbacks.isDragging()) {
        callbacks.tryAbort();
      }
      var err = event.error;
      if (err instanceof RbdInvariant) {
        event.preventDefault();
      }
    };
    _this.getCallbacks = function() {
      if (!_this.callbacks) {
        throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");
      }
      return _this.callbacks;
    };
    _this.setCallbacks = function(callbacks) {
      _this.callbacks = callbacks;
    };
    return _this;
  }
  var _proto = ErrorBoundary2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.unbind = bindEvents(window, [{
      eventName: "error",
      fn: this.onWindowError
    }]);
  };
  _proto.componentDidCatch = function componentDidCatch(err) {
    if (err instanceof RbdInvariant) {
      this.setState({});
      return;
    }
    throw err;
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unbind();
  };
  _proto.render = function render() {
    return this.props.children(this.setCallbacks);
  };
  return ErrorBoundary2;
}(React__default.Component);
var dragHandleUsageInstructions = "\n  Press space bar to start a drag.\n  When dragging you can use the arrow keys to move the item around and escape to cancel.\n  Some screen readers may require you to be in focus mode or to use your pass through key\n";
var position = function position2(index) {
  return index + 1;
};
var onDragStart = function onDragStart2(start) {
  return "\n  You have lifted an item in position " + position(start.source.index) + "\n";
};
var withLocation = function withLocation2(source, destination) {
  var isInHomeList = source.droppableId === destination.droppableId;
  var startPosition = position(source.index);
  var endPosition = position(destination.index);
  if (isInHomeList) {
    return "\n      You have moved the item from position " + startPosition + "\n      to position " + endPosition + "\n    ";
  }
  return "\n    You have moved the item from position " + startPosition + "\n    in list " + source.droppableId + "\n    to list " + destination.droppableId + "\n    in position " + endPosition + "\n  ";
};
var withCombine = function withCombine2(id2, source, combine2) {
  var inHomeList = source.droppableId === combine2.droppableId;
  if (inHomeList) {
    return "\n      The item " + id2 + "\n      has been combined with " + combine2.draggableId;
  }
  return "\n      The item " + id2 + "\n      in list " + source.droppableId + "\n      has been combined with " + combine2.draggableId + "\n      in list " + combine2.droppableId + "\n    ";
};
var onDragUpdate = function onDragUpdate2(update2) {
  var location = update2.destination;
  if (location) {
    return withLocation(update2.source, location);
  }
  var combine2 = update2.combine;
  if (combine2) {
    return withCombine(update2.draggableId, update2.source, combine2);
  }
  return "You are over an area that cannot be dropped on";
};
var returnedToStart = function returnedToStart2(source) {
  return "\n  The item has returned to its starting position\n  of " + position(source.index) + "\n";
};
var onDragEnd = function onDragEnd2(result) {
  if (result.reason === "CANCEL") {
    return "\n      Movement cancelled.\n      " + returnedToStart(result.source) + "\n    ";
  }
  var location = result.destination;
  var combine2 = result.combine;
  if (location) {
    return "\n      You have dropped the item.\n      " + withLocation(result.source, location) + "\n    ";
  }
  if (combine2) {
    return "\n      You have dropped the item.\n      " + withCombine(result.draggableId, result.source, combine2) + "\n    ";
  }
  return "\n    The item has been dropped while not over a drop area.\n    " + returnedToStart(result.source) + "\n  ";
};
var preset = {
  dragHandleUsageInstructions,
  onDragStart,
  onDragUpdate,
  onDragEnd
};
var origin = {
  x: 0,
  y: 0
};
var add = function add2(point1, point2) {
  return {
    x: point1.x + point2.x,
    y: point1.y + point2.y
  };
};
var subtract = function subtract2(point1, point2) {
  return {
    x: point1.x - point2.x,
    y: point1.y - point2.y
  };
};
var isEqual = function isEqual2(point1, point2) {
  return point1.x === point2.x && point1.y === point2.y;
};
var negate = function negate2(point) {
  return {
    x: point.x !== 0 ? -point.x : 0,
    y: point.y !== 0 ? -point.y : 0
  };
};
var patch = function patch2(line2, value, otherValue) {
  var _ref;
  if (otherValue === void 0) {
    otherValue = 0;
  }
  return _ref = {}, _ref[line2] = value, _ref[line2 === "x" ? "y" : "x"] = otherValue, _ref;
};
var distance = function distance2(point1, point2) {
  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
};
var closest = function closest2(target, points) {
  return Math.min.apply(Math, points.map(function(point) {
    return distance(target, point);
  }));
};
var apply = function apply2(fn) {
  return function(point) {
    return {
      x: fn(point.x),
      y: fn(point.y)
    };
  };
};
var executeClip = function(frame2, subject) {
  var result = getRect({
    top: Math.max(subject.top, frame2.top),
    right: Math.min(subject.right, frame2.right),
    bottom: Math.min(subject.bottom, frame2.bottom),
    left: Math.max(subject.left, frame2.left)
  });
  if (result.width <= 0 || result.height <= 0) {
    return null;
  }
  return result;
};
var offsetByPosition = function offsetByPosition2(spacing, point) {
  return {
    top: spacing.top + point.y,
    left: spacing.left + point.x,
    bottom: spacing.bottom + point.y,
    right: spacing.right + point.x
  };
};
var getCorners = function getCorners2(spacing) {
  return [{
    x: spacing.left,
    y: spacing.top
  }, {
    x: spacing.right,
    y: spacing.top
  }, {
    x: spacing.left,
    y: spacing.bottom
  }, {
    x: spacing.right,
    y: spacing.bottom
  }];
};
var noSpacing = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};
var scroll = function scroll2(target, frame2) {
  if (!frame2) {
    return target;
  }
  return offsetByPosition(target, frame2.scroll.diff.displacement);
};
var increase = function increase2(target, axis, withPlaceholder) {
  if (withPlaceholder && withPlaceholder.increasedBy) {
    var _extends2;
    return _extends({}, target, (_extends2 = {}, _extends2[axis.end] = target[axis.end] + withPlaceholder.increasedBy[axis.line], _extends2));
  }
  return target;
};
var clip = function clip2(target, frame2) {
  if (frame2 && frame2.shouldClipSubject) {
    return executeClip(frame2.pageMarginBox, target);
  }
  return getRect(target);
};
var getSubject = function(_ref) {
  var page = _ref.page, withPlaceholder = _ref.withPlaceholder, axis = _ref.axis, frame2 = _ref.frame;
  var scrolled = scroll(page.marginBox, frame2);
  var increased = increase(scrolled, axis, withPlaceholder);
  var clipped = clip(increased, frame2);
  return {
    page,
    withPlaceholder,
    active: clipped
  };
};
var scrollDroppable = function(droppable2, newScroll) {
  !droppable2.frame ? invariant$1(false) : void 0;
  var scrollable = droppable2.frame;
  var scrollDiff = subtract(newScroll, scrollable.scroll.initial);
  var scrollDisplacement = negate(scrollDiff);
  var frame2 = _extends({}, scrollable, {
    scroll: {
      initial: scrollable.scroll.initial,
      current: newScroll,
      diff: {
        value: scrollDiff,
        displacement: scrollDisplacement
      },
      max: scrollable.scroll.max
    }
  });
  var subject = getSubject({
    page: droppable2.subject.page,
    withPlaceholder: droppable2.subject.withPlaceholder,
    axis: droppable2.axis,
    frame: frame2
  });
  var result = _extends({}, droppable2, {
    frame: frame2,
    subject
  });
  return result;
};
function values(map) {
  if (Object.values) {
    return Object.values(map);
  }
  return Object.keys(map).map(function(key) {
    return map[key];
  });
}
function findIndex(list, predicate) {
  if (list.findIndex) {
    return list.findIndex(predicate);
  }
  for (var i = 0; i < list.length; i++) {
    if (predicate(list[i])) {
      return i;
    }
  }
  return -1;
}
function find(list, predicate) {
  if (list.find) {
    return list.find(predicate);
  }
  var index = findIndex(list, predicate);
  if (index !== -1) {
    return list[index];
  }
  return void 0;
}
function toArray(list) {
  return Array.prototype.slice.call(list);
}
var toDroppableMap = memoizeOne(function(droppables) {
  return droppables.reduce(function(previous, current) {
    previous[current.descriptor.id] = current;
    return previous;
  }, {});
});
var toDraggableMap = memoizeOne(function(draggables) {
  return draggables.reduce(function(previous, current) {
    previous[current.descriptor.id] = current;
    return previous;
  }, {});
});
var toDroppableList = memoizeOne(function(droppables) {
  return values(droppables);
});
var toDraggableList = memoizeOne(function(draggables) {
  return values(draggables);
});
var getDraggablesInsideDroppable = memoizeOne(function(droppableId, draggables) {
  var result = toDraggableList(draggables).filter(function(draggable2) {
    return droppableId === draggable2.descriptor.droppableId;
  }).sort(function(a2, b2) {
    return a2.descriptor.index - b2.descriptor.index;
  });
  return result;
});
function tryGetDestination(impact) {
  if (impact.at && impact.at.type === "REORDER") {
    return impact.at.destination;
  }
  return null;
}
function tryGetCombine(impact) {
  if (impact.at && impact.at.type === "COMBINE") {
    return impact.at.combine;
  }
  return null;
}
var removeDraggableFromList = memoizeOne(function(remove, list) {
  return list.filter(function(item2) {
    return item2.descriptor.id !== remove.descriptor.id;
  });
});
var moveToNextCombine = function(_ref) {
  var isMovingForward = _ref.isMovingForward, draggable2 = _ref.draggable, destination = _ref.destination, insideDestination = _ref.insideDestination, previousImpact = _ref.previousImpact;
  if (!destination.isCombineEnabled) {
    return null;
  }
  var location = tryGetDestination(previousImpact);
  if (!location) {
    return null;
  }
  function getImpact(target) {
    var at = {
      type: "COMBINE",
      combine: {
        draggableId: target,
        droppableId: destination.descriptor.id
      }
    };
    return _extends({}, previousImpact, {
      at
    });
  }
  var all = previousImpact.displaced.all;
  var closestId = all.length ? all[0] : null;
  if (isMovingForward) {
    return closestId ? getImpact(closestId) : null;
  }
  var withoutDraggable = removeDraggableFromList(draggable2, insideDestination);
  if (!closestId) {
    if (!withoutDraggable.length) {
      return null;
    }
    var last = withoutDraggable[withoutDraggable.length - 1];
    return getImpact(last.descriptor.id);
  }
  var indexOfClosest = findIndex(withoutDraggable, function(d2) {
    return d2.descriptor.id === closestId;
  });
  !(indexOfClosest !== -1) ? invariant$1(false) : void 0;
  var proposedIndex = indexOfClosest - 1;
  if (proposedIndex < 0) {
    return null;
  }
  var before = withoutDraggable[proposedIndex];
  return getImpact(before.descriptor.id);
};
var isHomeOf = function(draggable2, destination) {
  return draggable2.descriptor.droppableId === destination.descriptor.id;
};
var noDisplacedBy = {
  point: origin,
  value: 0
};
var emptyGroups = {
  invisible: {},
  visible: {},
  all: []
};
var noImpact = {
  displaced: emptyGroups,
  displacedBy: noDisplacedBy,
  at: null
};
var isWithin = function(lowerBound, upperBound) {
  return function(value) {
    return lowerBound <= value && value <= upperBound;
  };
};
var isPartiallyVisibleThroughFrame = function(frame2) {
  var isWithinVertical = isWithin(frame2.top, frame2.bottom);
  var isWithinHorizontal = isWithin(frame2.left, frame2.right);
  return function(subject) {
    var isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
    if (isContained) {
      return true;
    }
    var isPartiallyVisibleVertically = isWithinVertical(subject.top) || isWithinVertical(subject.bottom);
    var isPartiallyVisibleHorizontally = isWithinHorizontal(subject.left) || isWithinHorizontal(subject.right);
    var isPartiallyContained = isPartiallyVisibleVertically && isPartiallyVisibleHorizontally;
    if (isPartiallyContained) {
      return true;
    }
    var isBiggerVertically = subject.top < frame2.top && subject.bottom > frame2.bottom;
    var isBiggerHorizontally = subject.left < frame2.left && subject.right > frame2.right;
    var isTargetBiggerThanFrame = isBiggerVertically && isBiggerHorizontally;
    if (isTargetBiggerThanFrame) {
      return true;
    }
    var isTargetBiggerOnOneAxis = isBiggerVertically && isPartiallyVisibleHorizontally || isBiggerHorizontally && isPartiallyVisibleVertically;
    return isTargetBiggerOnOneAxis;
  };
};
var isTotallyVisibleThroughFrame = function(frame2) {
  var isWithinVertical = isWithin(frame2.top, frame2.bottom);
  var isWithinHorizontal = isWithin(frame2.left, frame2.right);
  return function(subject) {
    var isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
    return isContained;
  };
};
var vertical = {
  direction: "vertical",
  line: "y",
  crossAxisLine: "x",
  start: "top",
  end: "bottom",
  size: "height",
  crossAxisStart: "left",
  crossAxisEnd: "right",
  crossAxisSize: "width"
};
var horizontal = {
  direction: "horizontal",
  line: "x",
  crossAxisLine: "y",
  start: "left",
  end: "right",
  size: "width",
  crossAxisStart: "top",
  crossAxisEnd: "bottom",
  crossAxisSize: "height"
};
var isTotallyVisibleThroughFrameOnAxis = function(axis) {
  return function(frame2) {
    var isWithinVertical = isWithin(frame2.top, frame2.bottom);
    var isWithinHorizontal = isWithin(frame2.left, frame2.right);
    return function(subject) {
      if (axis === vertical) {
        return isWithinVertical(subject.top) && isWithinVertical(subject.bottom);
      }
      return isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
    };
  };
};
var getDroppableDisplaced = function getDroppableDisplaced2(target, destination) {
  var displacement = destination.frame ? destination.frame.scroll.diff.displacement : origin;
  return offsetByPosition(target, displacement);
};
var isVisibleInDroppable = function isVisibleInDroppable2(target, destination, isVisibleThroughFrameFn) {
  if (!destination.subject.active) {
    return false;
  }
  return isVisibleThroughFrameFn(destination.subject.active)(target);
};
var isVisibleInViewport = function isVisibleInViewport2(target, viewport, isVisibleThroughFrameFn) {
  return isVisibleThroughFrameFn(viewport)(target);
};
var isVisible = function isVisible2(_ref) {
  var toBeDisplaced = _ref.target, destination = _ref.destination, viewport = _ref.viewport, withDroppableDisplacement2 = _ref.withDroppableDisplacement, isVisibleThroughFrameFn = _ref.isVisibleThroughFrameFn;
  var displacedTarget = withDroppableDisplacement2 ? getDroppableDisplaced(toBeDisplaced, destination) : toBeDisplaced;
  return isVisibleInDroppable(displacedTarget, destination, isVisibleThroughFrameFn) && isVisibleInViewport(displacedTarget, viewport, isVisibleThroughFrameFn);
};
var isPartiallyVisible = function isPartiallyVisible2(args) {
  return isVisible(_extends({}, args, {
    isVisibleThroughFrameFn: isPartiallyVisibleThroughFrame
  }));
};
var isTotallyVisible = function isTotallyVisible2(args) {
  return isVisible(_extends({}, args, {
    isVisibleThroughFrameFn: isTotallyVisibleThroughFrame
  }));
};
var isTotallyVisibleOnAxis = function isTotallyVisibleOnAxis2(args) {
  return isVisible(_extends({}, args, {
    isVisibleThroughFrameFn: isTotallyVisibleThroughFrameOnAxis(args.destination.axis)
  }));
};
var getShouldAnimate = function getShouldAnimate2(id2, last, forceShouldAnimate) {
  if (typeof forceShouldAnimate === "boolean") {
    return forceShouldAnimate;
  }
  if (!last) {
    return true;
  }
  var invisible = last.invisible, visible = last.visible;
  if (invisible[id2]) {
    return false;
  }
  var previous = visible[id2];
  return previous ? previous.shouldAnimate : true;
};
function getTarget(draggable2, displacedBy) {
  var marginBox = draggable2.page.marginBox;
  var expandBy = {
    top: displacedBy.point.y,
    right: 0,
    bottom: 0,
    left: displacedBy.point.x
  };
  return getRect(expand(marginBox, expandBy));
}
function getDisplacementGroups(_ref) {
  var afterDragging = _ref.afterDragging, destination = _ref.destination, displacedBy = _ref.displacedBy, viewport = _ref.viewport, forceShouldAnimate = _ref.forceShouldAnimate, last = _ref.last;
  return afterDragging.reduce(function process(groups, draggable2) {
    var target = getTarget(draggable2, displacedBy);
    var id2 = draggable2.descriptor.id;
    groups.all.push(id2);
    var isVisible3 = isPartiallyVisible({
      target,
      destination,
      viewport,
      withDroppableDisplacement: true
    });
    if (!isVisible3) {
      groups.invisible[draggable2.descriptor.id] = true;
      return groups;
    }
    var shouldAnimate = getShouldAnimate(id2, last, forceShouldAnimate);
    var displacement = {
      draggableId: id2,
      shouldAnimate
    };
    groups.visible[id2] = displacement;
    return groups;
  }, {
    all: [],
    visible: {},
    invisible: {}
  });
}
function getIndexOfLastItem(draggables, options) {
  if (!draggables.length) {
    return 0;
  }
  var indexOfLastItem = draggables[draggables.length - 1].descriptor.index;
  return options.inHomeList ? indexOfLastItem : indexOfLastItem + 1;
}
function goAtEnd(_ref) {
  var insideDestination = _ref.insideDestination, inHomeList = _ref.inHomeList, displacedBy = _ref.displacedBy, destination = _ref.destination;
  var newIndex = getIndexOfLastItem(insideDestination, {
    inHomeList
  });
  return {
    displaced: emptyGroups,
    displacedBy,
    at: {
      type: "REORDER",
      destination: {
        droppableId: destination.descriptor.id,
        index: newIndex
      }
    }
  };
}
function calculateReorderImpact(_ref2) {
  var draggable2 = _ref2.draggable, insideDestination = _ref2.insideDestination, destination = _ref2.destination, viewport = _ref2.viewport, displacedBy = _ref2.displacedBy, last = _ref2.last, index = _ref2.index, forceShouldAnimate = _ref2.forceShouldAnimate;
  var inHomeList = isHomeOf(draggable2, destination);
  if (index == null) {
    return goAtEnd({
      insideDestination,
      inHomeList,
      displacedBy,
      destination
    });
  }
  var match2 = find(insideDestination, function(item2) {
    return item2.descriptor.index === index;
  });
  if (!match2) {
    return goAtEnd({
      insideDestination,
      inHomeList,
      displacedBy,
      destination
    });
  }
  var withoutDragging = removeDraggableFromList(draggable2, insideDestination);
  var sliceFrom = insideDestination.indexOf(match2);
  var impacted = withoutDragging.slice(sliceFrom);
  var displaced = getDisplacementGroups({
    afterDragging: impacted,
    destination,
    displacedBy,
    last,
    viewport: viewport.frame,
    forceShouldAnimate
  });
  return {
    displaced,
    displacedBy,
    at: {
      type: "REORDER",
      destination: {
        droppableId: destination.descriptor.id,
        index
      }
    }
  };
}
function didStartAfterCritical(draggableId, afterCritical) {
  return Boolean(afterCritical.effected[draggableId]);
}
var fromCombine = function(_ref) {
  var isMovingForward = _ref.isMovingForward, destination = _ref.destination, draggables = _ref.draggables, combine2 = _ref.combine, afterCritical = _ref.afterCritical;
  if (!destination.isCombineEnabled) {
    return null;
  }
  var combineId = combine2.draggableId;
  var combineWith = draggables[combineId];
  var combineWithIndex = combineWith.descriptor.index;
  var didCombineWithStartAfterCritical = didStartAfterCritical(combineId, afterCritical);
  if (didCombineWithStartAfterCritical) {
    if (isMovingForward) {
      return combineWithIndex;
    }
    return combineWithIndex - 1;
  }
  if (isMovingForward) {
    return combineWithIndex + 1;
  }
  return combineWithIndex;
};
var fromReorder = function(_ref) {
  var isMovingForward = _ref.isMovingForward, isInHomeList = _ref.isInHomeList, insideDestination = _ref.insideDestination, location = _ref.location;
  if (!insideDestination.length) {
    return null;
  }
  var currentIndex = location.index;
  var proposedIndex = isMovingForward ? currentIndex + 1 : currentIndex - 1;
  var firstIndex = insideDestination[0].descriptor.index;
  var lastIndex = insideDestination[insideDestination.length - 1].descriptor.index;
  var upperBound = isInHomeList ? lastIndex : lastIndex + 1;
  if (proposedIndex < firstIndex) {
    return null;
  }
  if (proposedIndex > upperBound) {
    return null;
  }
  return proposedIndex;
};
var moveToNextIndex = function(_ref) {
  var isMovingForward = _ref.isMovingForward, isInHomeList = _ref.isInHomeList, draggable2 = _ref.draggable, draggables = _ref.draggables, destination = _ref.destination, insideDestination = _ref.insideDestination, previousImpact = _ref.previousImpact, viewport = _ref.viewport, afterCritical = _ref.afterCritical;
  var wasAt = previousImpact.at;
  !wasAt ? invariant$1(false) : void 0;
  if (wasAt.type === "REORDER") {
    var _newIndex = fromReorder({
      isMovingForward,
      isInHomeList,
      location: wasAt.destination,
      insideDestination
    });
    if (_newIndex == null) {
      return null;
    }
    return calculateReorderImpact({
      draggable: draggable2,
      insideDestination,
      destination,
      viewport,
      last: previousImpact.displaced,
      displacedBy: previousImpact.displacedBy,
      index: _newIndex
    });
  }
  var newIndex = fromCombine({
    isMovingForward,
    destination,
    displaced: previousImpact.displaced,
    draggables,
    combine: wasAt.combine,
    afterCritical
  });
  if (newIndex == null) {
    return null;
  }
  return calculateReorderImpact({
    draggable: draggable2,
    insideDestination,
    destination,
    viewport,
    last: previousImpact.displaced,
    displacedBy: previousImpact.displacedBy,
    index: newIndex
  });
};
var getCombinedItemDisplacement = function(_ref) {
  var displaced = _ref.displaced, afterCritical = _ref.afterCritical, combineWith = _ref.combineWith, displacedBy = _ref.displacedBy;
  var isDisplaced = Boolean(displaced.visible[combineWith] || displaced.invisible[combineWith]);
  if (didStartAfterCritical(combineWith, afterCritical)) {
    return isDisplaced ? origin : negate(displacedBy.point);
  }
  return isDisplaced ? displacedBy.point : origin;
};
var whenCombining = function(_ref) {
  var afterCritical = _ref.afterCritical, impact = _ref.impact, draggables = _ref.draggables;
  var combine2 = tryGetCombine(impact);
  !combine2 ? invariant$1(false) : void 0;
  var combineWith = combine2.draggableId;
  var center2 = draggables[combineWith].page.borderBox.center;
  var displaceBy = getCombinedItemDisplacement({
    displaced: impact.displaced,
    afterCritical,
    combineWith,
    displacedBy: impact.displacedBy
  });
  return add(center2, displaceBy);
};
var distanceFromStartToBorderBoxCenter = function distanceFromStartToBorderBoxCenter2(axis, box) {
  return box.margin[axis.start] + box.borderBox[axis.size] / 2;
};
var distanceFromEndToBorderBoxCenter = function distanceFromEndToBorderBoxCenter2(axis, box) {
  return box.margin[axis.end] + box.borderBox[axis.size] / 2;
};
var getCrossAxisBorderBoxCenter = function getCrossAxisBorderBoxCenter2(axis, target, isMoving) {
  return target[axis.crossAxisStart] + isMoving.margin[axis.crossAxisStart] + isMoving.borderBox[axis.crossAxisSize] / 2;
};
var goAfter = function goAfter2(_ref) {
  var axis = _ref.axis, moveRelativeTo = _ref.moveRelativeTo, isMoving = _ref.isMoving;
  return patch(axis.line, moveRelativeTo.marginBox[axis.end] + distanceFromStartToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveRelativeTo.marginBox, isMoving));
};
var goBefore = function goBefore2(_ref2) {
  var axis = _ref2.axis, moveRelativeTo = _ref2.moveRelativeTo, isMoving = _ref2.isMoving;
  return patch(axis.line, moveRelativeTo.marginBox[axis.start] - distanceFromEndToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveRelativeTo.marginBox, isMoving));
};
var goIntoStart = function goIntoStart2(_ref3) {
  var axis = _ref3.axis, moveInto = _ref3.moveInto, isMoving = _ref3.isMoving;
  return patch(axis.line, moveInto.contentBox[axis.start] + distanceFromStartToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveInto.contentBox, isMoving));
};
var whenReordering = function(_ref) {
  var impact = _ref.impact, draggable2 = _ref.draggable, draggables = _ref.draggables, droppable2 = _ref.droppable, afterCritical = _ref.afterCritical;
  var insideDestination = getDraggablesInsideDroppable(droppable2.descriptor.id, draggables);
  var draggablePage = draggable2.page;
  var axis = droppable2.axis;
  if (!insideDestination.length) {
    return goIntoStart({
      axis,
      moveInto: droppable2.page,
      isMoving: draggablePage
    });
  }
  var displaced = impact.displaced, displacedBy = impact.displacedBy;
  var closestAfter = displaced.all[0];
  if (closestAfter) {
    var closest3 = draggables[closestAfter];
    if (didStartAfterCritical(closestAfter, afterCritical)) {
      return goBefore({
        axis,
        moveRelativeTo: closest3.page,
        isMoving: draggablePage
      });
    }
    var withDisplacement = offset(closest3.page, displacedBy.point);
    return goBefore({
      axis,
      moveRelativeTo: withDisplacement,
      isMoving: draggablePage
    });
  }
  var last = insideDestination[insideDestination.length - 1];
  if (last.descriptor.id === draggable2.descriptor.id) {
    return draggablePage.borderBox.center;
  }
  if (didStartAfterCritical(last.descriptor.id, afterCritical)) {
    var page = offset(last.page, negate(afterCritical.displacedBy.point));
    return goAfter({
      axis,
      moveRelativeTo: page,
      isMoving: draggablePage
    });
  }
  return goAfter({
    axis,
    moveRelativeTo: last.page,
    isMoving: draggablePage
  });
};
var withDroppableDisplacement = function(droppable2, point) {
  var frame2 = droppable2.frame;
  if (!frame2) {
    return point;
  }
  return add(point, frame2.scroll.diff.displacement);
};
var getResultWithoutDroppableDisplacement = function getResultWithoutDroppableDisplacement2(_ref) {
  var impact = _ref.impact, draggable2 = _ref.draggable, droppable2 = _ref.droppable, draggables = _ref.draggables, afterCritical = _ref.afterCritical;
  var original = draggable2.page.borderBox.center;
  var at = impact.at;
  if (!droppable2) {
    return original;
  }
  if (!at) {
    return original;
  }
  if (at.type === "REORDER") {
    return whenReordering({
      impact,
      draggable: draggable2,
      draggables,
      droppable: droppable2,
      afterCritical
    });
  }
  return whenCombining({
    impact,
    draggables,
    afterCritical
  });
};
var getPageBorderBoxCenterFromImpact = function(args) {
  var withoutDisplacement = getResultWithoutDroppableDisplacement(args);
  var droppable2 = args.droppable;
  var withDisplacement = droppable2 ? withDroppableDisplacement(droppable2, withoutDisplacement) : withoutDisplacement;
  return withDisplacement;
};
var scrollViewport = function(viewport, newScroll) {
  var diff = subtract(newScroll, viewport.scroll.initial);
  var displacement = negate(diff);
  var frame2 = getRect({
    top: newScroll.y,
    bottom: newScroll.y + viewport.frame.height,
    left: newScroll.x,
    right: newScroll.x + viewport.frame.width
  });
  var updated = {
    frame: frame2,
    scroll: {
      initial: viewport.scroll.initial,
      max: viewport.scroll.max,
      current: newScroll,
      diff: {
        value: diff,
        displacement
      }
    }
  };
  return updated;
};
function getDraggables(ids, draggables) {
  return ids.map(function(id2) {
    return draggables[id2];
  });
}
function tryGetVisible(id2, groups) {
  for (var i = 0; i < groups.length; i++) {
    var displacement = groups[i].visible[id2];
    if (displacement) {
      return displacement;
    }
  }
  return null;
}
var speculativelyIncrease = function(_ref) {
  var impact = _ref.impact, viewport = _ref.viewport, destination = _ref.destination, draggables = _ref.draggables, maxScrollChange = _ref.maxScrollChange;
  var scrolledViewport = scrollViewport(viewport, add(viewport.scroll.current, maxScrollChange));
  var scrolledDroppable = destination.frame ? scrollDroppable(destination, add(destination.frame.scroll.current, maxScrollChange)) : destination;
  var last = impact.displaced;
  var withViewportScroll = getDisplacementGroups({
    afterDragging: getDraggables(last.all, draggables),
    destination,
    displacedBy: impact.displacedBy,
    viewport: scrolledViewport.frame,
    last,
    forceShouldAnimate: false
  });
  var withDroppableScroll2 = getDisplacementGroups({
    afterDragging: getDraggables(last.all, draggables),
    destination: scrolledDroppable,
    displacedBy: impact.displacedBy,
    viewport: viewport.frame,
    last,
    forceShouldAnimate: false
  });
  var invisible = {};
  var visible = {};
  var groups = [last, withViewportScroll, withDroppableScroll2];
  last.all.forEach(function(id2) {
    var displacement = tryGetVisible(id2, groups);
    if (displacement) {
      visible[id2] = displacement;
      return;
    }
    invisible[id2] = true;
  });
  var newImpact = _extends({}, impact, {
    displaced: {
      all: last.all,
      invisible,
      visible
    }
  });
  return newImpact;
};
var withViewportDisplacement = function(viewport, point) {
  return add(viewport.scroll.diff.displacement, point);
};
var getClientFromPageBorderBoxCenter = function(_ref) {
  var pageBorderBoxCenter = _ref.pageBorderBoxCenter, draggable2 = _ref.draggable, viewport = _ref.viewport;
  var withoutPageScrollChange = withViewportDisplacement(viewport, pageBorderBoxCenter);
  var offset3 = subtract(withoutPageScrollChange, draggable2.page.borderBox.center);
  return add(draggable2.client.borderBox.center, offset3);
};
var isTotallyVisibleInNewLocation = function(_ref) {
  var draggable2 = _ref.draggable, destination = _ref.destination, newPageBorderBoxCenter = _ref.newPageBorderBoxCenter, viewport = _ref.viewport, withDroppableDisplacement2 = _ref.withDroppableDisplacement, _ref$onlyOnMainAxis = _ref.onlyOnMainAxis, onlyOnMainAxis = _ref$onlyOnMainAxis === void 0 ? false : _ref$onlyOnMainAxis;
  var changeNeeded = subtract(newPageBorderBoxCenter, draggable2.page.borderBox.center);
  var shifted = offsetByPosition(draggable2.page.borderBox, changeNeeded);
  var args = {
    target: shifted,
    destination,
    withDroppableDisplacement: withDroppableDisplacement2,
    viewport
  };
  return onlyOnMainAxis ? isTotallyVisibleOnAxis(args) : isTotallyVisible(args);
};
var moveToNextPlace = function(_ref) {
  var isMovingForward = _ref.isMovingForward, draggable2 = _ref.draggable, destination = _ref.destination, draggables = _ref.draggables, previousImpact = _ref.previousImpact, viewport = _ref.viewport, previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter, previousClientSelection = _ref.previousClientSelection, afterCritical = _ref.afterCritical;
  if (!destination.isEnabled) {
    return null;
  }
  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
  var isInHomeList = isHomeOf(draggable2, destination);
  var impact = moveToNextCombine({
    isMovingForward,
    draggable: draggable2,
    destination,
    insideDestination,
    previousImpact
  }) || moveToNextIndex({
    isMovingForward,
    isInHomeList,
    draggable: draggable2,
    draggables,
    destination,
    insideDestination,
    previousImpact,
    viewport,
    afterCritical
  });
  if (!impact) {
    return null;
  }
  var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
    impact,
    draggable: draggable2,
    droppable: destination,
    draggables,
    afterCritical
  });
  var isVisibleInNewLocation = isTotallyVisibleInNewLocation({
    draggable: draggable2,
    destination,
    newPageBorderBoxCenter: pageBorderBoxCenter,
    viewport: viewport.frame,
    withDroppableDisplacement: false,
    onlyOnMainAxis: true
  });
  if (isVisibleInNewLocation) {
    var clientSelection = getClientFromPageBorderBoxCenter({
      pageBorderBoxCenter,
      draggable: draggable2,
      viewport
    });
    return {
      clientSelection,
      impact,
      scrollJumpRequest: null
    };
  }
  var distance3 = subtract(pageBorderBoxCenter, previousPageBorderBoxCenter);
  var cautious = speculativelyIncrease({
    impact,
    viewport,
    destination,
    draggables,
    maxScrollChange: distance3
  });
  return {
    clientSelection: previousClientSelection,
    impact: cautious,
    scrollJumpRequest: distance3
  };
};
var getKnownActive = function getKnownActive2(droppable2) {
  var rect = droppable2.subject.active;
  !rect ? invariant$1(false) : void 0;
  return rect;
};
var getBestCrossAxisDroppable = function(_ref) {
  var isMovingForward = _ref.isMovingForward, pageBorderBoxCenter = _ref.pageBorderBoxCenter, source = _ref.source, droppables = _ref.droppables, viewport = _ref.viewport;
  var active = source.subject.active;
  if (!active) {
    return null;
  }
  var axis = source.axis;
  var isBetweenSourceClipped = isWithin(active[axis.start], active[axis.end]);
  var candidates = toDroppableList(droppables).filter(function(droppable2) {
    return droppable2 !== source;
  }).filter(function(droppable2) {
    return droppable2.isEnabled;
  }).filter(function(droppable2) {
    return Boolean(droppable2.subject.active);
  }).filter(function(droppable2) {
    return isPartiallyVisibleThroughFrame(viewport.frame)(getKnownActive(droppable2));
  }).filter(function(droppable2) {
    var activeOfTarget = getKnownActive(droppable2);
    if (isMovingForward) {
      return active[axis.crossAxisEnd] < activeOfTarget[axis.crossAxisEnd];
    }
    return activeOfTarget[axis.crossAxisStart] < active[axis.crossAxisStart];
  }).filter(function(droppable2) {
    var activeOfTarget = getKnownActive(droppable2);
    var isBetweenDestinationClipped = isWithin(activeOfTarget[axis.start], activeOfTarget[axis.end]);
    return isBetweenSourceClipped(activeOfTarget[axis.start]) || isBetweenSourceClipped(activeOfTarget[axis.end]) || isBetweenDestinationClipped(active[axis.start]) || isBetweenDestinationClipped(active[axis.end]);
  }).sort(function(a2, b2) {
    var first = getKnownActive(a2)[axis.crossAxisStart];
    var second = getKnownActive(b2)[axis.crossAxisStart];
    if (isMovingForward) {
      return first - second;
    }
    return second - first;
  }).filter(function(droppable2, index, array) {
    return getKnownActive(droppable2)[axis.crossAxisStart] === getKnownActive(array[0])[axis.crossAxisStart];
  });
  if (!candidates.length) {
    return null;
  }
  if (candidates.length === 1) {
    return candidates[0];
  }
  var contains = candidates.filter(function(droppable2) {
    var isWithinDroppable = isWithin(getKnownActive(droppable2)[axis.start], getKnownActive(droppable2)[axis.end]);
    return isWithinDroppable(pageBorderBoxCenter[axis.line]);
  });
  if (contains.length === 1) {
    return contains[0];
  }
  if (contains.length > 1) {
    return contains.sort(function(a2, b2) {
      return getKnownActive(a2)[axis.start] - getKnownActive(b2)[axis.start];
    })[0];
  }
  return candidates.sort(function(a2, b2) {
    var first = closest(pageBorderBoxCenter, getCorners(getKnownActive(a2)));
    var second = closest(pageBorderBoxCenter, getCorners(getKnownActive(b2)));
    if (first !== second) {
      return first - second;
    }
    return getKnownActive(a2)[axis.start] - getKnownActive(b2)[axis.start];
  })[0];
};
var getCurrentPageBorderBoxCenter = function getCurrentPageBorderBoxCenter2(draggable2, afterCritical) {
  var original = draggable2.page.borderBox.center;
  return didStartAfterCritical(draggable2.descriptor.id, afterCritical) ? subtract(original, afterCritical.displacedBy.point) : original;
};
var getCurrentPageBorderBox = function getCurrentPageBorderBox2(draggable2, afterCritical) {
  var original = draggable2.page.borderBox;
  return didStartAfterCritical(draggable2.descriptor.id, afterCritical) ? offsetByPosition(original, negate(afterCritical.displacedBy.point)) : original;
};
var getClosestDraggable = function(_ref) {
  var pageBorderBoxCenter = _ref.pageBorderBoxCenter, viewport = _ref.viewport, destination = _ref.destination, insideDestination = _ref.insideDestination, afterCritical = _ref.afterCritical;
  var sorted = insideDestination.filter(function(draggable2) {
    return isTotallyVisible({
      target: getCurrentPageBorderBox(draggable2, afterCritical),
      destination,
      viewport: viewport.frame,
      withDroppableDisplacement: true
    });
  }).sort(function(a2, b2) {
    var distanceToA = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, getCurrentPageBorderBoxCenter(a2, afterCritical)));
    var distanceToB = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, getCurrentPageBorderBoxCenter(b2, afterCritical)));
    if (distanceToA < distanceToB) {
      return -1;
    }
    if (distanceToB < distanceToA) {
      return 1;
    }
    return a2.descriptor.index - b2.descriptor.index;
  });
  return sorted[0] || null;
};
var getDisplacedBy = memoizeOne(function getDisplacedBy2(axis, displaceBy) {
  var displacement = displaceBy[axis.line];
  return {
    value: displacement,
    point: patch(axis.line, displacement)
  };
});
var getRequiredGrowthForPlaceholder = function getRequiredGrowthForPlaceholder2(droppable2, placeholderSize, draggables) {
  var axis = droppable2.axis;
  if (droppable2.descriptor.mode === "virtual") {
    return patch(axis.line, placeholderSize[axis.line]);
  }
  var availableSpace = droppable2.subject.page.contentBox[axis.size];
  var insideDroppable = getDraggablesInsideDroppable(droppable2.descriptor.id, draggables);
  var spaceUsed = insideDroppable.reduce(function(sum, dimension) {
    return sum + dimension.client.marginBox[axis.size];
  }, 0);
  var requiredSpace = spaceUsed + placeholderSize[axis.line];
  var needsToGrowBy = requiredSpace - availableSpace;
  if (needsToGrowBy <= 0) {
    return null;
  }
  return patch(axis.line, needsToGrowBy);
};
var withMaxScroll = function withMaxScroll2(frame2, max) {
  return _extends({}, frame2, {
    scroll: _extends({}, frame2.scroll, {
      max
    })
  });
};
var addPlaceholder = function addPlaceholder2(droppable2, draggable2, draggables) {
  var frame2 = droppable2.frame;
  !!isHomeOf(draggable2, droppable2) ? invariant$1(false) : void 0;
  !!droppable2.subject.withPlaceholder ? invariant$1(false) : void 0;
  var placeholderSize = getDisplacedBy(droppable2.axis, draggable2.displaceBy).point;
  var requiredGrowth = getRequiredGrowthForPlaceholder(droppable2, placeholderSize, draggables);
  var added = {
    placeholderSize,
    increasedBy: requiredGrowth,
    oldFrameMaxScroll: droppable2.frame ? droppable2.frame.scroll.max : null
  };
  if (!frame2) {
    var _subject = getSubject({
      page: droppable2.subject.page,
      withPlaceholder: added,
      axis: droppable2.axis,
      frame: droppable2.frame
    });
    return _extends({}, droppable2, {
      subject: _subject
    });
  }
  var maxScroll = requiredGrowth ? add(frame2.scroll.max, requiredGrowth) : frame2.scroll.max;
  var newFrame = withMaxScroll(frame2, maxScroll);
  var subject = getSubject({
    page: droppable2.subject.page,
    withPlaceholder: added,
    axis: droppable2.axis,
    frame: newFrame
  });
  return _extends({}, droppable2, {
    subject,
    frame: newFrame
  });
};
var removePlaceholder = function removePlaceholder2(droppable2) {
  var added = droppable2.subject.withPlaceholder;
  !added ? invariant$1(false) : void 0;
  var frame2 = droppable2.frame;
  if (!frame2) {
    var _subject2 = getSubject({
      page: droppable2.subject.page,
      axis: droppable2.axis,
      frame: null,
      withPlaceholder: null
    });
    return _extends({}, droppable2, {
      subject: _subject2
    });
  }
  var oldMaxScroll = added.oldFrameMaxScroll;
  !oldMaxScroll ? invariant$1(false) : void 0;
  var newFrame = withMaxScroll(frame2, oldMaxScroll);
  var subject = getSubject({
    page: droppable2.subject.page,
    axis: droppable2.axis,
    frame: newFrame,
    withPlaceholder: null
  });
  return _extends({}, droppable2, {
    subject,
    frame: newFrame
  });
};
var moveToNewDroppable = function(_ref) {
  var previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter, moveRelativeTo = _ref.moveRelativeTo, insideDestination = _ref.insideDestination, draggable2 = _ref.draggable, draggables = _ref.draggables, destination = _ref.destination, viewport = _ref.viewport, afterCritical = _ref.afterCritical;
  if (!moveRelativeTo) {
    if (insideDestination.length) {
      return null;
    }
    var proposed = {
      displaced: emptyGroups,
      displacedBy: noDisplacedBy,
      at: {
        type: "REORDER",
        destination: {
          droppableId: destination.descriptor.id,
          index: 0
        }
      }
    };
    var proposedPageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
      impact: proposed,
      draggable: draggable2,
      droppable: destination,
      draggables,
      afterCritical
    });
    var withPlaceholder = isHomeOf(draggable2, destination) ? destination : addPlaceholder(destination, draggable2, draggables);
    var isVisibleInNewLocation = isTotallyVisibleInNewLocation({
      draggable: draggable2,
      destination: withPlaceholder,
      newPageBorderBoxCenter: proposedPageBorderBoxCenter,
      viewport: viewport.frame,
      withDroppableDisplacement: false,
      onlyOnMainAxis: true
    });
    return isVisibleInNewLocation ? proposed : null;
  }
  var isGoingBeforeTarget = Boolean(previousPageBorderBoxCenter[destination.axis.line] <= moveRelativeTo.page.borderBox.center[destination.axis.line]);
  var proposedIndex = function() {
    var relativeTo = moveRelativeTo.descriptor.index;
    if (moveRelativeTo.descriptor.id === draggable2.descriptor.id) {
      return relativeTo;
    }
    if (isGoingBeforeTarget) {
      return relativeTo;
    }
    return relativeTo + 1;
  }();
  var displacedBy = getDisplacedBy(destination.axis, draggable2.displaceBy);
  return calculateReorderImpact({
    draggable: draggable2,
    insideDestination,
    destination,
    viewport,
    displacedBy,
    last: emptyGroups,
    index: proposedIndex
  });
};
var moveCrossAxis = function(_ref) {
  var isMovingForward = _ref.isMovingForward, previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter, draggable2 = _ref.draggable, isOver = _ref.isOver, draggables = _ref.draggables, droppables = _ref.droppables, viewport = _ref.viewport, afterCritical = _ref.afterCritical;
  var destination = getBestCrossAxisDroppable({
    isMovingForward,
    pageBorderBoxCenter: previousPageBorderBoxCenter,
    source: isOver,
    droppables,
    viewport
  });
  if (!destination) {
    return null;
  }
  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
  var moveRelativeTo = getClosestDraggable({
    pageBorderBoxCenter: previousPageBorderBoxCenter,
    viewport,
    destination,
    insideDestination,
    afterCritical
  });
  var impact = moveToNewDroppable({
    previousPageBorderBoxCenter,
    destination,
    draggable: draggable2,
    draggables,
    moveRelativeTo,
    insideDestination,
    viewport,
    afterCritical
  });
  if (!impact) {
    return null;
  }
  var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
    impact,
    draggable: draggable2,
    droppable: destination,
    draggables,
    afterCritical
  });
  var clientSelection = getClientFromPageBorderBoxCenter({
    pageBorderBoxCenter,
    draggable: draggable2,
    viewport
  });
  return {
    clientSelection,
    impact,
    scrollJumpRequest: null
  };
};
var whatIsDraggedOver = function(impact) {
  var at = impact.at;
  if (!at) {
    return null;
  }
  if (at.type === "REORDER") {
    return at.destination.droppableId;
  }
  return at.combine.droppableId;
};
var getDroppableOver = function getDroppableOver2(impact, droppables) {
  var id2 = whatIsDraggedOver(impact);
  return id2 ? droppables[id2] : null;
};
var moveInDirection = function(_ref) {
  var state = _ref.state, type = _ref.type;
  var isActuallyOver = getDroppableOver(state.impact, state.dimensions.droppables);
  var isMainAxisMovementAllowed = Boolean(isActuallyOver);
  var home2 = state.dimensions.droppables[state.critical.droppable.id];
  var isOver = isActuallyOver || home2;
  var direction = isOver.axis.direction;
  var isMovingOnMainAxis = direction === "vertical" && (type === "MOVE_UP" || type === "MOVE_DOWN") || direction === "horizontal" && (type === "MOVE_LEFT" || type === "MOVE_RIGHT");
  if (isMovingOnMainAxis && !isMainAxisMovementAllowed) {
    return null;
  }
  var isMovingForward = type === "MOVE_DOWN" || type === "MOVE_RIGHT";
  var draggable2 = state.dimensions.draggables[state.critical.draggable.id];
  var previousPageBorderBoxCenter = state.current.page.borderBoxCenter;
  var _state$dimensions = state.dimensions, draggables = _state$dimensions.draggables, droppables = _state$dimensions.droppables;
  return isMovingOnMainAxis ? moveToNextPlace({
    isMovingForward,
    previousPageBorderBoxCenter,
    draggable: draggable2,
    destination: isOver,
    draggables,
    viewport: state.viewport,
    previousClientSelection: state.current.client.selection,
    previousImpact: state.impact,
    afterCritical: state.afterCritical
  }) : moveCrossAxis({
    isMovingForward,
    previousPageBorderBoxCenter,
    draggable: draggable2,
    isOver,
    draggables,
    droppables,
    viewport: state.viewport,
    afterCritical: state.afterCritical
  });
};
function isMovementAllowed(state) {
  return state.phase === "DRAGGING" || state.phase === "COLLECTING";
}
function isPositionInFrame(frame2) {
  var isWithinVertical = isWithin(frame2.top, frame2.bottom);
  var isWithinHorizontal = isWithin(frame2.left, frame2.right);
  return function run(point) {
    return isWithinVertical(point.y) && isWithinHorizontal(point.x);
  };
}
function getHasOverlap(first, second) {
  return first.left < second.right && first.right > second.left && first.top < second.bottom && first.bottom > second.top;
}
function getFurthestAway(_ref) {
  var pageBorderBox = _ref.pageBorderBox, draggable2 = _ref.draggable, candidates = _ref.candidates;
  var startCenter = draggable2.page.borderBox.center;
  var sorted = candidates.map(function(candidate) {
    var axis = candidate.axis;
    var target = patch(candidate.axis.line, pageBorderBox.center[axis.line], candidate.page.borderBox.center[axis.crossAxisLine]);
    return {
      id: candidate.descriptor.id,
      distance: distance(startCenter, target)
    };
  }).sort(function(a2, b2) {
    return b2.distance - a2.distance;
  });
  return sorted[0] ? sorted[0].id : null;
}
function getDroppableOver$1(_ref2) {
  var pageBorderBox = _ref2.pageBorderBox, draggable2 = _ref2.draggable, droppables = _ref2.droppables;
  var candidates = toDroppableList(droppables).filter(function(item2) {
    if (!item2.isEnabled) {
      return false;
    }
    var active = item2.subject.active;
    if (!active) {
      return false;
    }
    if (!getHasOverlap(pageBorderBox, active)) {
      return false;
    }
    if (isPositionInFrame(active)(pageBorderBox.center)) {
      return true;
    }
    var axis = item2.axis;
    var childCenter = active.center[axis.crossAxisLine];
    var crossAxisStart = pageBorderBox[axis.crossAxisStart];
    var crossAxisEnd = pageBorderBox[axis.crossAxisEnd];
    var isContained = isWithin(active[axis.crossAxisStart], active[axis.crossAxisEnd]);
    var isStartContained = isContained(crossAxisStart);
    var isEndContained = isContained(crossAxisEnd);
    if (!isStartContained && !isEndContained) {
      return true;
    }
    if (isStartContained) {
      return crossAxisStart < childCenter;
    }
    return crossAxisEnd > childCenter;
  });
  if (!candidates.length) {
    return null;
  }
  if (candidates.length === 1) {
    return candidates[0].descriptor.id;
  }
  return getFurthestAway({
    pageBorderBox,
    draggable: draggable2,
    candidates
  });
}
var offsetRectByPosition = function offsetRectByPosition2(rect, point) {
  return getRect(offsetByPosition(rect, point));
};
var withDroppableScroll = function(droppable2, area) {
  var frame2 = droppable2.frame;
  if (!frame2) {
    return area;
  }
  return offsetRectByPosition(area, frame2.scroll.diff.value);
};
function getIsDisplaced(_ref) {
  var displaced = _ref.displaced, id2 = _ref.id;
  return Boolean(displaced.visible[id2] || displaced.invisible[id2]);
}
function atIndex(_ref) {
  var draggable2 = _ref.draggable, closest3 = _ref.closest, inHomeList = _ref.inHomeList;
  if (!closest3) {
    return null;
  }
  if (!inHomeList) {
    return closest3.descriptor.index;
  }
  if (closest3.descriptor.index > draggable2.descriptor.index) {
    return closest3.descriptor.index - 1;
  }
  return closest3.descriptor.index;
}
var getReorderImpact = function(_ref2) {
  var targetRect = _ref2.pageBorderBoxWithDroppableScroll, draggable2 = _ref2.draggable, destination = _ref2.destination, insideDestination = _ref2.insideDestination, last = _ref2.last, viewport = _ref2.viewport, afterCritical = _ref2.afterCritical;
  var axis = destination.axis;
  var displacedBy = getDisplacedBy(destination.axis, draggable2.displaceBy);
  var displacement = displacedBy.value;
  var targetStart = targetRect[axis.start];
  var targetEnd = targetRect[axis.end];
  var withoutDragging = removeDraggableFromList(draggable2, insideDestination);
  var closest3 = find(withoutDragging, function(child) {
    var id2 = child.descriptor.id;
    var childCenter = child.page.borderBox.center[axis.line];
    var didStartAfterCritical$1 = didStartAfterCritical(id2, afterCritical);
    var isDisplaced = getIsDisplaced({
      displaced: last,
      id: id2
    });
    if (didStartAfterCritical$1) {
      if (isDisplaced) {
        return targetEnd <= childCenter;
      }
      return targetStart < childCenter - displacement;
    }
    if (isDisplaced) {
      return targetEnd <= childCenter + displacement;
    }
    return targetStart < childCenter;
  });
  var newIndex = atIndex({
    draggable: draggable2,
    closest: closest3,
    inHomeList: isHomeOf(draggable2, destination)
  });
  return calculateReorderImpact({
    draggable: draggable2,
    insideDestination,
    destination,
    viewport,
    last,
    displacedBy,
    index: newIndex
  });
};
var combineThresholdDivisor = 4;
var getCombineImpact = function(_ref) {
  var draggable2 = _ref.draggable, targetRect = _ref.pageBorderBoxWithDroppableScroll, previousImpact = _ref.previousImpact, destination = _ref.destination, insideDestination = _ref.insideDestination, afterCritical = _ref.afterCritical;
  if (!destination.isCombineEnabled) {
    return null;
  }
  var axis = destination.axis;
  var displacedBy = getDisplacedBy(destination.axis, draggable2.displaceBy);
  var displacement = displacedBy.value;
  var targetStart = targetRect[axis.start];
  var targetEnd = targetRect[axis.end];
  var withoutDragging = removeDraggableFromList(draggable2, insideDestination);
  var combineWith = find(withoutDragging, function(child) {
    var id2 = child.descriptor.id;
    var childRect = child.page.borderBox;
    var childSize = childRect[axis.size];
    var threshold = childSize / combineThresholdDivisor;
    var didStartAfterCritical$1 = didStartAfterCritical(id2, afterCritical);
    var isDisplaced = getIsDisplaced({
      displaced: previousImpact.displaced,
      id: id2
    });
    if (didStartAfterCritical$1) {
      if (isDisplaced) {
        return targetEnd > childRect[axis.start] + threshold && targetEnd < childRect[axis.end] - threshold;
      }
      return targetStart > childRect[axis.start] - displacement + threshold && targetStart < childRect[axis.end] - displacement - threshold;
    }
    if (isDisplaced) {
      return targetEnd > childRect[axis.start] + displacement + threshold && targetEnd < childRect[axis.end] + displacement - threshold;
    }
    return targetStart > childRect[axis.start] + threshold && targetStart < childRect[axis.end] - threshold;
  });
  if (!combineWith) {
    return null;
  }
  var impact = {
    displacedBy,
    displaced: previousImpact.displaced,
    at: {
      type: "COMBINE",
      combine: {
        draggableId: combineWith.descriptor.id,
        droppableId: destination.descriptor.id
      }
    }
  };
  return impact;
};
var getDragImpact = function(_ref) {
  var pageOffset = _ref.pageOffset, draggable2 = _ref.draggable, draggables = _ref.draggables, droppables = _ref.droppables, previousImpact = _ref.previousImpact, viewport = _ref.viewport, afterCritical = _ref.afterCritical;
  var pageBorderBox = offsetRectByPosition(draggable2.page.borderBox, pageOffset);
  var destinationId = getDroppableOver$1({
    pageBorderBox,
    draggable: draggable2,
    droppables
  });
  if (!destinationId) {
    return noImpact;
  }
  var destination = droppables[destinationId];
  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
  var pageBorderBoxWithDroppableScroll = withDroppableScroll(destination, pageBorderBox);
  return getCombineImpact({
    pageBorderBoxWithDroppableScroll,
    draggable: draggable2,
    previousImpact,
    destination,
    insideDestination,
    afterCritical
  }) || getReorderImpact({
    pageBorderBoxWithDroppableScroll,
    draggable: draggable2,
    destination,
    insideDestination,
    last: previousImpact.displaced,
    viewport,
    afterCritical
  });
};
var patchDroppableMap = function(droppables, updated) {
  var _extends2;
  return _extends({}, droppables, (_extends2 = {}, _extends2[updated.descriptor.id] = updated, _extends2));
};
var clearUnusedPlaceholder = function clearUnusedPlaceholder2(_ref) {
  var previousImpact = _ref.previousImpact, impact = _ref.impact, droppables = _ref.droppables;
  var last = whatIsDraggedOver(previousImpact);
  var now = whatIsDraggedOver(impact);
  if (!last) {
    return droppables;
  }
  if (last === now) {
    return droppables;
  }
  var lastDroppable = droppables[last];
  if (!lastDroppable.subject.withPlaceholder) {
    return droppables;
  }
  var updated = removePlaceholder(lastDroppable);
  return patchDroppableMap(droppables, updated);
};
var recomputePlaceholders = function(_ref2) {
  var draggable2 = _ref2.draggable, draggables = _ref2.draggables, droppables = _ref2.droppables, previousImpact = _ref2.previousImpact, impact = _ref2.impact;
  var cleaned = clearUnusedPlaceholder({
    previousImpact,
    impact,
    droppables
  });
  var isOver = whatIsDraggedOver(impact);
  if (!isOver) {
    return cleaned;
  }
  var droppable2 = droppables[isOver];
  if (isHomeOf(draggable2, droppable2)) {
    return cleaned;
  }
  if (droppable2.subject.withPlaceholder) {
    return cleaned;
  }
  var patched = addPlaceholder(droppable2, draggable2, draggables);
  return patchDroppableMap(cleaned, patched);
};
var update = function(_ref) {
  var state = _ref.state, forcedClientSelection = _ref.clientSelection, forcedDimensions = _ref.dimensions, forcedViewport = _ref.viewport, forcedImpact = _ref.impact, scrollJumpRequest = _ref.scrollJumpRequest;
  var viewport = forcedViewport || state.viewport;
  var dimensions = forcedDimensions || state.dimensions;
  var clientSelection = forcedClientSelection || state.current.client.selection;
  var offset3 = subtract(clientSelection, state.initial.client.selection);
  var client = {
    offset: offset3,
    selection: clientSelection,
    borderBoxCenter: add(state.initial.client.borderBoxCenter, offset3)
  };
  var page = {
    selection: add(client.selection, viewport.scroll.current),
    borderBoxCenter: add(client.borderBoxCenter, viewport.scroll.current),
    offset: add(client.offset, viewport.scroll.diff.value)
  };
  var current = {
    client,
    page
  };
  if (state.phase === "COLLECTING") {
    return _extends({
      phase: "COLLECTING"
    }, state, {
      dimensions,
      viewport,
      current
    });
  }
  var draggable2 = dimensions.draggables[state.critical.draggable.id];
  var newImpact = forcedImpact || getDragImpact({
    pageOffset: page.offset,
    draggable: draggable2,
    draggables: dimensions.draggables,
    droppables: dimensions.droppables,
    previousImpact: state.impact,
    viewport,
    afterCritical: state.afterCritical
  });
  var withUpdatedPlaceholders = recomputePlaceholders({
    draggable: draggable2,
    impact: newImpact,
    previousImpact: state.impact,
    draggables: dimensions.draggables,
    droppables: dimensions.droppables
  });
  var result = _extends({}, state, {
    current,
    dimensions: {
      draggables: dimensions.draggables,
      droppables: withUpdatedPlaceholders
    },
    impact: newImpact,
    viewport,
    scrollJumpRequest: scrollJumpRequest || null,
    forceShouldAnimate: scrollJumpRequest ? false : null
  });
  return result;
};
function getDraggables$1(ids, draggables) {
  return ids.map(function(id2) {
    return draggables[id2];
  });
}
var recompute = function(_ref) {
  var impact = _ref.impact, viewport = _ref.viewport, draggables = _ref.draggables, destination = _ref.destination, forceShouldAnimate = _ref.forceShouldAnimate;
  var last = impact.displaced;
  var afterDragging = getDraggables$1(last.all, draggables);
  var displaced = getDisplacementGroups({
    afterDragging,
    destination,
    displacedBy: impact.displacedBy,
    viewport: viewport.frame,
    forceShouldAnimate,
    last
  });
  return _extends({}, impact, {
    displaced
  });
};
var getClientBorderBoxCenter = function(_ref) {
  var impact = _ref.impact, draggable2 = _ref.draggable, droppable2 = _ref.droppable, draggables = _ref.draggables, viewport = _ref.viewport, afterCritical = _ref.afterCritical;
  var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
    impact,
    draggable: draggable2,
    draggables,
    droppable: droppable2,
    afterCritical
  });
  return getClientFromPageBorderBoxCenter({
    pageBorderBoxCenter,
    draggable: draggable2,
    viewport
  });
};
var refreshSnap = function(_ref) {
  var state = _ref.state, forcedDimensions = _ref.dimensions, forcedViewport = _ref.viewport;
  !(state.movementMode === "SNAP") ? invariant$1(false) : void 0;
  var needsVisibilityCheck = state.impact;
  var viewport = forcedViewport || state.viewport;
  var dimensions = forcedDimensions || state.dimensions;
  var draggables = dimensions.draggables, droppables = dimensions.droppables;
  var draggable2 = draggables[state.critical.draggable.id];
  var isOver = whatIsDraggedOver(needsVisibilityCheck);
  !isOver ? invariant$1(false) : void 0;
  var destination = droppables[isOver];
  var impact = recompute({
    impact: needsVisibilityCheck,
    viewport,
    destination,
    draggables
  });
  var clientSelection = getClientBorderBoxCenter({
    impact,
    draggable: draggable2,
    droppable: destination,
    draggables,
    viewport,
    afterCritical: state.afterCritical
  });
  return update({
    impact,
    clientSelection,
    state,
    dimensions,
    viewport
  });
};
var getHomeLocation = function(descriptor) {
  return {
    index: descriptor.index,
    droppableId: descriptor.droppableId
  };
};
var getLiftEffect = function(_ref) {
  var draggable2 = _ref.draggable, home2 = _ref.home, draggables = _ref.draggables, viewport = _ref.viewport;
  var displacedBy = getDisplacedBy(home2.axis, draggable2.displaceBy);
  var insideHome = getDraggablesInsideDroppable(home2.descriptor.id, draggables);
  var rawIndex = insideHome.indexOf(draggable2);
  !(rawIndex !== -1) ? invariant$1(false) : void 0;
  var afterDragging = insideHome.slice(rawIndex + 1);
  var effected = afterDragging.reduce(function(previous, item2) {
    previous[item2.descriptor.id] = true;
    return previous;
  }, {});
  var afterCritical = {
    inVirtualList: home2.descriptor.mode === "virtual",
    displacedBy,
    effected
  };
  var displaced = getDisplacementGroups({
    afterDragging,
    destination: home2,
    displacedBy,
    last: null,
    viewport: viewport.frame,
    forceShouldAnimate: false
  });
  var impact = {
    displaced,
    displacedBy,
    at: {
      type: "REORDER",
      destination: getHomeLocation(draggable2.descriptor)
    }
  };
  return {
    impact,
    afterCritical
  };
};
var patchDimensionMap = function(dimensions, updated) {
  return {
    draggables: dimensions.draggables,
    droppables: patchDroppableMap(dimensions.droppables, updated)
  };
};
var offsetDraggable = function(_ref) {
  var draggable2 = _ref.draggable, offset$1 = _ref.offset, initialWindowScroll = _ref.initialWindowScroll;
  var client = offset(draggable2.client, offset$1);
  var page = withScroll(client, initialWindowScroll);
  var moved = _extends({}, draggable2, {
    placeholder: _extends({}, draggable2.placeholder, {
      client
    }),
    client,
    page
  });
  return moved;
};
var getFrame = function(droppable2) {
  var frame2 = droppable2.frame;
  !frame2 ? invariant$1(false) : void 0;
  return frame2;
};
var adjustAdditionsForScrollChanges = function(_ref) {
  var additions = _ref.additions, updatedDroppables = _ref.updatedDroppables, viewport = _ref.viewport;
  var windowScrollChange = viewport.scroll.diff.value;
  return additions.map(function(draggable2) {
    var droppableId = draggable2.descriptor.droppableId;
    var modified = updatedDroppables[droppableId];
    var frame2 = getFrame(modified);
    var droppableScrollChange = frame2.scroll.diff.value;
    var totalChange = add(windowScrollChange, droppableScrollChange);
    var moved = offsetDraggable({
      draggable: draggable2,
      offset: totalChange,
      initialWindowScroll: viewport.scroll.initial
    });
    return moved;
  });
};
var publishWhileDraggingInVirtual = function(_ref) {
  var state = _ref.state, published = _ref.published;
  var withScrollChange = published.modified.map(function(update2) {
    var existing = state.dimensions.droppables[update2.droppableId];
    var scrolled = scrollDroppable(existing, update2.scroll);
    return scrolled;
  });
  var droppables = _extends({}, state.dimensions.droppables, {}, toDroppableMap(withScrollChange));
  var updatedAdditions = toDraggableMap(adjustAdditionsForScrollChanges({
    additions: published.additions,
    updatedDroppables: droppables,
    viewport: state.viewport
  }));
  var draggables = _extends({}, state.dimensions.draggables, {}, updatedAdditions);
  published.removals.forEach(function(id2) {
    delete draggables[id2];
  });
  var dimensions = {
    droppables,
    draggables
  };
  var wasOverId = whatIsDraggedOver(state.impact);
  var wasOver = wasOverId ? dimensions.droppables[wasOverId] : null;
  var draggable2 = dimensions.draggables[state.critical.draggable.id];
  var home2 = dimensions.droppables[state.critical.droppable.id];
  var _getLiftEffect = getLiftEffect({
    draggable: draggable2,
    home: home2,
    draggables,
    viewport: state.viewport
  }), onLiftImpact = _getLiftEffect.impact, afterCritical = _getLiftEffect.afterCritical;
  var previousImpact = wasOver && wasOver.isCombineEnabled ? state.impact : onLiftImpact;
  var impact = getDragImpact({
    pageOffset: state.current.page.offset,
    draggable: dimensions.draggables[state.critical.draggable.id],
    draggables: dimensions.draggables,
    droppables: dimensions.droppables,
    previousImpact,
    viewport: state.viewport,
    afterCritical
  });
  var draggingState = _extends({
    phase: "DRAGGING"
  }, state, {
    phase: "DRAGGING",
    impact,
    onLiftImpact,
    dimensions,
    afterCritical,
    forceShouldAnimate: false
  });
  if (state.phase === "COLLECTING") {
    return draggingState;
  }
  var dropPending3 = _extends({
    phase: "DROP_PENDING"
  }, draggingState, {
    phase: "DROP_PENDING",
    reason: state.reason,
    isWaiting: false
  });
  return dropPending3;
};
var isSnapping = function isSnapping2(state) {
  return state.movementMode === "SNAP";
};
var postDroppableChange = function postDroppableChange2(state, updated, isEnabledChanging) {
  var dimensions = patchDimensionMap(state.dimensions, updated);
  if (!isSnapping(state) || isEnabledChanging) {
    return update({
      state,
      dimensions
    });
  }
  return refreshSnap({
    state,
    dimensions
  });
};
function removeScrollJumpRequest(state) {
  if (state.isDragging && state.movementMode === "SNAP") {
    return _extends({
      phase: "DRAGGING"
    }, state, {
      scrollJumpRequest: null
    });
  }
  return state;
}
var idle = {
  phase: "IDLE",
  completed: null,
  shouldFlush: false
};
var reducer = function(state, action) {
  if (state === void 0) {
    state = idle;
  }
  if (action.type === "FLUSH") {
    return _extends({}, idle, {
      shouldFlush: true
    });
  }
  if (action.type === "INITIAL_PUBLISH") {
    !(state.phase === "IDLE") ? invariant$1(false) : void 0;
    var _action$payload = action.payload, critical = _action$payload.critical, clientSelection = _action$payload.clientSelection, viewport = _action$payload.viewport, dimensions = _action$payload.dimensions, movementMode = _action$payload.movementMode;
    var draggable2 = dimensions.draggables[critical.draggable.id];
    var home2 = dimensions.droppables[critical.droppable.id];
    var client = {
      selection: clientSelection,
      borderBoxCenter: draggable2.client.borderBox.center,
      offset: origin
    };
    var initial = {
      client,
      page: {
        selection: add(client.selection, viewport.scroll.initial),
        borderBoxCenter: add(client.selection, viewport.scroll.initial),
        offset: add(client.selection, viewport.scroll.diff.value)
      }
    };
    var isWindowScrollAllowed = toDroppableList(dimensions.droppables).every(function(item2) {
      return !item2.isFixedOnPage;
    });
    var _getLiftEffect = getLiftEffect({
      draggable: draggable2,
      home: home2,
      draggables: dimensions.draggables,
      viewport
    }), impact = _getLiftEffect.impact, afterCritical = _getLiftEffect.afterCritical;
    var result = {
      phase: "DRAGGING",
      isDragging: true,
      critical,
      movementMode,
      dimensions,
      initial,
      current: initial,
      isWindowScrollAllowed,
      impact,
      afterCritical,
      onLiftImpact: impact,
      viewport,
      scrollJumpRequest: null,
      forceShouldAnimate: null
    };
    return result;
  }
  if (action.type === "COLLECTION_STARTING") {
    if (state.phase === "COLLECTING" || state.phase === "DROP_PENDING") {
      return state;
    }
    !(state.phase === "DRAGGING") ? invariant$1(false) : void 0;
    var _result = _extends({
      phase: "COLLECTING"
    }, state, {
      phase: "COLLECTING"
    });
    return _result;
  }
  if (action.type === "PUBLISH_WHILE_DRAGGING") {
    !(state.phase === "COLLECTING" || state.phase === "DROP_PENDING") ? invariant$1(false) : void 0;
    return publishWhileDraggingInVirtual({
      state,
      published: action.payload
    });
  }
  if (action.type === "MOVE") {
    if (state.phase === "DROP_PENDING") {
      return state;
    }
    !isMovementAllowed(state) ? invariant$1(false) : void 0;
    var _clientSelection = action.payload.client;
    if (isEqual(_clientSelection, state.current.client.selection)) {
      return state;
    }
    return update({
      state,
      clientSelection: _clientSelection,
      impact: isSnapping(state) ? state.impact : null
    });
  }
  if (action.type === "UPDATE_DROPPABLE_SCROLL") {
    if (state.phase === "DROP_PENDING") {
      return removeScrollJumpRequest(state);
    }
    if (state.phase === "COLLECTING") {
      return removeScrollJumpRequest(state);
    }
    !isMovementAllowed(state) ? invariant$1(false) : void 0;
    var _action$payload2 = action.payload, id2 = _action$payload2.id, newScroll = _action$payload2.newScroll;
    var target = state.dimensions.droppables[id2];
    if (!target) {
      return state;
    }
    var scrolled = scrollDroppable(target, newScroll);
    return postDroppableChange(state, scrolled, false);
  }
  if (action.type === "UPDATE_DROPPABLE_IS_ENABLED") {
    if (state.phase === "DROP_PENDING") {
      return state;
    }
    !isMovementAllowed(state) ? invariant$1(false) : void 0;
    var _action$payload3 = action.payload, _id = _action$payload3.id, isEnabled = _action$payload3.isEnabled;
    var _target = state.dimensions.droppables[_id];
    !_target ? invariant$1(false) : void 0;
    !(_target.isEnabled !== isEnabled) ? invariant$1(false) : void 0;
    var updated = _extends({}, _target, {
      isEnabled
    });
    return postDroppableChange(state, updated, true);
  }
  if (action.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
    if (state.phase === "DROP_PENDING") {
      return state;
    }
    !isMovementAllowed(state) ? invariant$1(false) : void 0;
    var _action$payload4 = action.payload, _id2 = _action$payload4.id, isCombineEnabled = _action$payload4.isCombineEnabled;
    var _target2 = state.dimensions.droppables[_id2];
    !_target2 ? invariant$1(false) : void 0;
    !(_target2.isCombineEnabled !== isCombineEnabled) ? invariant$1(false) : void 0;
    var _updated = _extends({}, _target2, {
      isCombineEnabled
    });
    return postDroppableChange(state, _updated, true);
  }
  if (action.type === "MOVE_BY_WINDOW_SCROLL") {
    if (state.phase === "DROP_PENDING" || state.phase === "DROP_ANIMATING") {
      return state;
    }
    !isMovementAllowed(state) ? invariant$1(false) : void 0;
    !state.isWindowScrollAllowed ? invariant$1(false) : void 0;
    var _newScroll = action.payload.newScroll;
    if (isEqual(state.viewport.scroll.current, _newScroll)) {
      return removeScrollJumpRequest(state);
    }
    var _viewport = scrollViewport(state.viewport, _newScroll);
    if (isSnapping(state)) {
      return refreshSnap({
        state,
        viewport: _viewport
      });
    }
    return update({
      state,
      viewport: _viewport
    });
  }
  if (action.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
    if (!isMovementAllowed(state)) {
      return state;
    }
    var maxScroll = action.payload.maxScroll;
    if (isEqual(maxScroll, state.viewport.scroll.max)) {
      return state;
    }
    var withMaxScroll3 = _extends({}, state.viewport, {
      scroll: _extends({}, state.viewport.scroll, {
        max: maxScroll
      })
    });
    return _extends({
      phase: "DRAGGING"
    }, state, {
      viewport: withMaxScroll3
    });
  }
  if (action.type === "MOVE_UP" || action.type === "MOVE_DOWN" || action.type === "MOVE_LEFT" || action.type === "MOVE_RIGHT") {
    if (state.phase === "COLLECTING" || state.phase === "DROP_PENDING") {
      return state;
    }
    !(state.phase === "DRAGGING") ? invariant$1(false) : void 0;
    var _result2 = moveInDirection({
      state,
      type: action.type
    });
    if (!_result2) {
      return state;
    }
    return update({
      state,
      impact: _result2.impact,
      clientSelection: _result2.clientSelection,
      scrollJumpRequest: _result2.scrollJumpRequest
    });
  }
  if (action.type === "DROP_PENDING") {
    var reason = action.payload.reason;
    !(state.phase === "COLLECTING") ? invariant$1(false) : void 0;
    var newState = _extends({
      phase: "DROP_PENDING"
    }, state, {
      phase: "DROP_PENDING",
      isWaiting: true,
      reason
    });
    return newState;
  }
  if (action.type === "DROP_ANIMATE") {
    var _action$payload5 = action.payload, completed = _action$payload5.completed, dropDuration = _action$payload5.dropDuration, newHomeClientOffset = _action$payload5.newHomeClientOffset;
    !(state.phase === "DRAGGING" || state.phase === "DROP_PENDING") ? invariant$1(false) : void 0;
    var _result3 = {
      phase: "DROP_ANIMATING",
      completed,
      dropDuration,
      newHomeClientOffset,
      dimensions: state.dimensions
    };
    return _result3;
  }
  if (action.type === "DROP_COMPLETE") {
    var _completed = action.payload.completed;
    return {
      phase: "IDLE",
      completed: _completed,
      shouldFlush: false
    };
  }
  return state;
};
var beforeInitialCapture = function beforeInitialCapture2(args) {
  return {
    type: "BEFORE_INITIAL_CAPTURE",
    payload: args
  };
};
var lift = function lift2(args) {
  return {
    type: "LIFT",
    payload: args
  };
};
var initialPublish = function initialPublish2(args) {
  return {
    type: "INITIAL_PUBLISH",
    payload: args
  };
};
var publishWhileDragging = function publishWhileDragging2(args) {
  return {
    type: "PUBLISH_WHILE_DRAGGING",
    payload: args
  };
};
var collectionStarting = function collectionStarting2() {
  return {
    type: "COLLECTION_STARTING",
    payload: null
  };
};
var updateDroppableScroll = function updateDroppableScroll2(args) {
  return {
    type: "UPDATE_DROPPABLE_SCROLL",
    payload: args
  };
};
var updateDroppableIsEnabled = function updateDroppableIsEnabled2(args) {
  return {
    type: "UPDATE_DROPPABLE_IS_ENABLED",
    payload: args
  };
};
var updateDroppableIsCombineEnabled = function updateDroppableIsCombineEnabled2(args) {
  return {
    type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
    payload: args
  };
};
var move = function move2(args) {
  return {
    type: "MOVE",
    payload: args
  };
};
var moveByWindowScroll = function moveByWindowScroll2(args) {
  return {
    type: "MOVE_BY_WINDOW_SCROLL",
    payload: args
  };
};
var updateViewportMaxScroll = function updateViewportMaxScroll2(args) {
  return {
    type: "UPDATE_VIEWPORT_MAX_SCROLL",
    payload: args
  };
};
var moveUp = function moveUp2() {
  return {
    type: "MOVE_UP",
    payload: null
  };
};
var moveDown = function moveDown2() {
  return {
    type: "MOVE_DOWN",
    payload: null
  };
};
var moveRight = function moveRight2() {
  return {
    type: "MOVE_RIGHT",
    payload: null
  };
};
var moveLeft = function moveLeft2() {
  return {
    type: "MOVE_LEFT",
    payload: null
  };
};
var flush = function flush2() {
  return {
    type: "FLUSH",
    payload: null
  };
};
var animateDrop = function animateDrop2(args) {
  return {
    type: "DROP_ANIMATE",
    payload: args
  };
};
var completeDrop = function completeDrop2(args) {
  return {
    type: "DROP_COMPLETE",
    payload: args
  };
};
var drop = function drop2(args) {
  return {
    type: "DROP",
    payload: args
  };
};
var dropPending = function dropPending2(args) {
  return {
    type: "DROP_PENDING",
    payload: args
  };
};
var dropAnimationFinished = function dropAnimationFinished2() {
  return {
    type: "DROP_ANIMATION_FINISHED",
    payload: null
  };
};
var lift$1 = function(marshal) {
  return function(_ref) {
    var getState = _ref.getState, dispatch = _ref.dispatch;
    return function(next) {
      return function(action) {
        if (action.type !== "LIFT") {
          next(action);
          return;
        }
        var _action$payload = action.payload, id2 = _action$payload.id, clientSelection = _action$payload.clientSelection, movementMode = _action$payload.movementMode;
        var initial = getState();
        if (initial.phase === "DROP_ANIMATING") {
          dispatch(completeDrop({
            completed: initial.completed
          }));
        }
        !(getState().phase === "IDLE") ? invariant$1(false) : void 0;
        dispatch(flush());
        dispatch(beforeInitialCapture({
          draggableId: id2,
          movementMode
        }));
        var scrollOptions = {
          shouldPublishImmediately: movementMode === "SNAP"
        };
        var request = {
          draggableId: id2,
          scrollOptions
        };
        var _marshal$startPublish = marshal.startPublishing(request), critical = _marshal$startPublish.critical, dimensions = _marshal$startPublish.dimensions, viewport = _marshal$startPublish.viewport;
        dispatch(initialPublish({
          critical,
          dimensions,
          clientSelection,
          movementMode,
          viewport
        }));
      };
    };
  };
};
var style = function(marshal) {
  return function() {
    return function(next) {
      return function(action) {
        if (action.type === "INITIAL_PUBLISH") {
          marshal.dragging();
        }
        if (action.type === "DROP_ANIMATE") {
          marshal.dropping(action.payload.completed.result.reason);
        }
        if (action.type === "FLUSH" || action.type === "DROP_COMPLETE") {
          marshal.resting();
        }
        next(action);
      };
    };
  };
};
var curves = {
  outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
  drop: "cubic-bezier(.2,1,.1,1)"
};
var combine = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
};
var timings = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
};
var outOfTheWayTiming = timings.outOfTheWay + "s " + curves.outOfTheWay;
var transitions = {
  fluid: "opacity " + outOfTheWayTiming,
  snap: "transform " + outOfTheWayTiming + ", opacity " + outOfTheWayTiming,
  drop: function drop3(duration) {
    var timing = duration + "s " + curves.drop;
    return "transform " + timing + ", opacity " + timing;
  },
  outOfTheWay: "transform " + outOfTheWayTiming,
  placeholder: "height " + outOfTheWayTiming + ", width " + outOfTheWayTiming + ", margin " + outOfTheWayTiming
};
var moveTo = function moveTo2(offset3) {
  return isEqual(offset3, origin) ? null : "translate(" + offset3.x + "px, " + offset3.y + "px)";
};
var transforms = {
  moveTo,
  drop: function drop4(offset3, isCombining) {
    var translate = moveTo(offset3);
    if (!translate) {
      return null;
    }
    if (!isCombining) {
      return translate;
    }
    return translate + " scale(" + combine.scale.drop + ")";
  }
};
var minDropTime = timings.minDropTime, maxDropTime = timings.maxDropTime;
var dropTimeRange = maxDropTime - minDropTime;
var maxDropTimeAtDistance = 1500;
var cancelDropModifier = 0.6;
var getDropDuration = function(_ref) {
  var current = _ref.current, destination = _ref.destination, reason = _ref.reason;
  var distance$12 = distance(current, destination);
  if (distance$12 <= 0) {
    return minDropTime;
  }
  if (distance$12 >= maxDropTimeAtDistance) {
    return maxDropTime;
  }
  var percentage = distance$12 / maxDropTimeAtDistance;
  var duration = minDropTime + dropTimeRange * percentage;
  var withDuration = reason === "CANCEL" ? duration * cancelDropModifier : duration;
  return Number(withDuration.toFixed(2));
};
var getNewHomeClientOffset = function(_ref) {
  var impact = _ref.impact, draggable2 = _ref.draggable, dimensions = _ref.dimensions, viewport = _ref.viewport, afterCritical = _ref.afterCritical;
  var draggables = dimensions.draggables, droppables = dimensions.droppables;
  var droppableId = whatIsDraggedOver(impact);
  var destination = droppableId ? droppables[droppableId] : null;
  var home2 = droppables[draggable2.descriptor.droppableId];
  var newClientCenter = getClientBorderBoxCenter({
    impact,
    draggable: draggable2,
    draggables,
    afterCritical,
    droppable: destination || home2,
    viewport
  });
  var offset3 = subtract(newClientCenter, draggable2.client.borderBox.center);
  return offset3;
};
var getDropImpact = function(_ref) {
  var draggables = _ref.draggables, reason = _ref.reason, lastImpact = _ref.lastImpact, home2 = _ref.home, viewport = _ref.viewport, onLiftImpact = _ref.onLiftImpact;
  if (!lastImpact.at || reason !== "DROP") {
    var recomputedHomeImpact = recompute({
      draggables,
      impact: onLiftImpact,
      destination: home2,
      viewport,
      forceShouldAnimate: true
    });
    return {
      impact: recomputedHomeImpact,
      didDropInsideDroppable: false
    };
  }
  if (lastImpact.at.type === "REORDER") {
    return {
      impact: lastImpact,
      didDropInsideDroppable: true
    };
  }
  var withoutMovement = _extends({}, lastImpact, {
    displaced: emptyGroups
  });
  return {
    impact: withoutMovement,
    didDropInsideDroppable: true
  };
};
var drop$1 = function(_ref) {
  var getState = _ref.getState, dispatch = _ref.dispatch;
  return function(next) {
    return function(action) {
      if (action.type !== "DROP") {
        next(action);
        return;
      }
      var state = getState();
      var reason = action.payload.reason;
      if (state.phase === "COLLECTING") {
        dispatch(dropPending({
          reason
        }));
        return;
      }
      if (state.phase === "IDLE") {
        return;
      }
      var isWaitingForDrop = state.phase === "DROP_PENDING" && state.isWaiting;
      !!isWaitingForDrop ? invariant$1(false) : void 0;
      !(state.phase === "DRAGGING" || state.phase === "DROP_PENDING") ? invariant$1(false) : void 0;
      var critical = state.critical;
      var dimensions = state.dimensions;
      var draggable2 = dimensions.draggables[state.critical.draggable.id];
      var _getDropImpact = getDropImpact({
        reason,
        lastImpact: state.impact,
        afterCritical: state.afterCritical,
        onLiftImpact: state.onLiftImpact,
        home: state.dimensions.droppables[state.critical.droppable.id],
        viewport: state.viewport,
        draggables: state.dimensions.draggables
      }), impact = _getDropImpact.impact, didDropInsideDroppable = _getDropImpact.didDropInsideDroppable;
      var destination = didDropInsideDroppable ? tryGetDestination(impact) : null;
      var combine2 = didDropInsideDroppable ? tryGetCombine(impact) : null;
      var source = {
        index: critical.draggable.index,
        droppableId: critical.droppable.id
      };
      var result = {
        draggableId: draggable2.descriptor.id,
        type: draggable2.descriptor.type,
        source,
        reason,
        mode: state.movementMode,
        destination,
        combine: combine2
      };
      var newHomeClientOffset = getNewHomeClientOffset({
        impact,
        draggable: draggable2,
        dimensions,
        viewport: state.viewport,
        afterCritical: state.afterCritical
      });
      var completed = {
        critical: state.critical,
        afterCritical: state.afterCritical,
        result,
        impact
      };
      var isAnimationRequired = !isEqual(state.current.client.offset, newHomeClientOffset) || Boolean(result.combine);
      if (!isAnimationRequired) {
        dispatch(completeDrop({
          completed
        }));
        return;
      }
      var dropDuration = getDropDuration({
        current: state.current.client.offset,
        destination: newHomeClientOffset,
        reason
      });
      var args = {
        newHomeClientOffset,
        dropDuration,
        completed
      };
      dispatch(animateDrop(args));
    };
  };
};
var getWindowScroll2 = function() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
};
function getWindowScrollBinding(update2) {
  return {
    eventName: "scroll",
    options: {
      passive: true,
      capture: false
    },
    fn: function fn(event) {
      if (event.target !== window && event.target !== window.document) {
        return;
      }
      update2();
    }
  };
}
function getScrollListener(_ref) {
  var onWindowScroll = _ref.onWindowScroll;
  function updateScroll() {
    onWindowScroll(getWindowScroll2());
  }
  var scheduled = rafSchd$1(updateScroll);
  var binding = getWindowScrollBinding(scheduled);
  var unbind = noop;
  function isActive() {
    return unbind !== noop;
  }
  function start() {
    !!isActive() ? invariant$1(false) : void 0;
    unbind = bindEvents(window, [binding]);
  }
  function stop() {
    !isActive() ? invariant$1(false) : void 0;
    scheduled.cancel();
    unbind();
    unbind = noop;
  }
  return {
    start,
    stop,
    isActive
  };
}
var shouldEnd = function shouldEnd2(action) {
  return action.type === "DROP_COMPLETE" || action.type === "DROP_ANIMATE" || action.type === "FLUSH";
};
var scrollListener = function(store) {
  var listener = getScrollListener({
    onWindowScroll: function onWindowScroll(newScroll) {
      store.dispatch(moveByWindowScroll({
        newScroll
      }));
    }
  });
  return function(next) {
    return function(action) {
      if (!listener.isActive() && action.type === "INITIAL_PUBLISH") {
        listener.start();
      }
      if (listener.isActive() && shouldEnd(action)) {
        listener.stop();
      }
      next(action);
    };
  };
};
var getExpiringAnnounce = function(announce) {
  var wasCalled = false;
  var isExpired = false;
  var timeoutId = setTimeout(function() {
    isExpired = true;
  });
  var result = function result2(message) {
    if (wasCalled) {
      return;
    }
    if (isExpired) {
      return;
    }
    wasCalled = true;
    announce(message);
    clearTimeout(timeoutId);
  };
  result.wasCalled = function() {
    return wasCalled;
  };
  return result;
};
var getAsyncMarshal = function() {
  var entries = [];
  var execute3 = function execute4(timerId) {
    var index = findIndex(entries, function(item2) {
      return item2.timerId === timerId;
    });
    !(index !== -1) ? invariant$1(false) : void 0;
    var _entries$splice = entries.splice(index, 1), entry = _entries$splice[0];
    entry.callback();
  };
  var add3 = function add4(fn) {
    var timerId = setTimeout(function() {
      return execute3(timerId);
    });
    var entry = {
      timerId,
      callback: fn
    };
    entries.push(entry);
  };
  var flush3 = function flush4() {
    if (!entries.length) {
      return;
    }
    var shallow = [].concat(entries);
    entries.length = 0;
    shallow.forEach(function(entry) {
      clearTimeout(entry.timerId);
      entry.callback();
    });
  };
  return {
    add: add3,
    flush: flush3
  };
};
var areLocationsEqual = function areLocationsEqual2(first, second) {
  if (first == null && second == null) {
    return true;
  }
  if (first == null || second == null) {
    return false;
  }
  return first.droppableId === second.droppableId && first.index === second.index;
};
var isCombineEqual = function isCombineEqual2(first, second) {
  if (first == null && second == null) {
    return true;
  }
  if (first == null || second == null) {
    return false;
  }
  return first.draggableId === second.draggableId && first.droppableId === second.droppableId;
};
var isCriticalEqual = function isCriticalEqual2(first, second) {
  if (first === second) {
    return true;
  }
  var isDraggableEqual = first.draggable.id === second.draggable.id && first.draggable.droppableId === second.draggable.droppableId && first.draggable.type === second.draggable.type && first.draggable.index === second.draggable.index;
  var isDroppableEqual = first.droppable.id === second.droppable.id && first.droppable.type === second.droppable.type;
  return isDraggableEqual && isDroppableEqual;
};
var withTimings = function withTimings2(key, fn) {
  fn();
};
var getDragStart = function getDragStart2(critical, mode) {
  return {
    draggableId: critical.draggable.id,
    type: critical.droppable.type,
    source: {
      droppableId: critical.droppable.id,
      index: critical.draggable.index
    },
    mode
  };
};
var execute = function execute2(responder, data, announce, getDefaultMessage) {
  if (!responder) {
    announce(getDefaultMessage(data));
    return;
  }
  var willExpire = getExpiringAnnounce(announce);
  var provided = {
    announce: willExpire
  };
  responder(data, provided);
  if (!willExpire.wasCalled()) {
    announce(getDefaultMessage(data));
  }
};
var getPublisher = function(getResponders, announce) {
  var asyncMarshal = getAsyncMarshal();
  var dragging = null;
  var beforeCapture = function beforeCapture2(draggableId, mode) {
    !!dragging ? invariant$1(false) : void 0;
    withTimings("onBeforeCapture", function() {
      var fn = getResponders().onBeforeCapture;
      if (fn) {
        var before = {
          draggableId,
          mode
        };
        fn(before);
      }
    });
  };
  var beforeStart = function beforeStart2(critical, mode) {
    !!dragging ? invariant$1(false) : void 0;
    withTimings("onBeforeDragStart", function() {
      var fn = getResponders().onBeforeDragStart;
      if (fn) {
        fn(getDragStart(critical, mode));
      }
    });
  };
  var start = function start2(critical, mode) {
    !!dragging ? invariant$1(false) : void 0;
    var data = getDragStart(critical, mode);
    dragging = {
      mode,
      lastCritical: critical,
      lastLocation: data.source,
      lastCombine: null
    };
    asyncMarshal.add(function() {
      withTimings("onDragStart", function() {
        return execute(getResponders().onDragStart, data, announce, preset.onDragStart);
      });
    });
  };
  var update2 = function update3(critical, impact) {
    var location = tryGetDestination(impact);
    var combine2 = tryGetCombine(impact);
    !dragging ? invariant$1(false) : void 0;
    var hasCriticalChanged = !isCriticalEqual(critical, dragging.lastCritical);
    if (hasCriticalChanged) {
      dragging.lastCritical = critical;
    }
    var hasLocationChanged = !areLocationsEqual(dragging.lastLocation, location);
    if (hasLocationChanged) {
      dragging.lastLocation = location;
    }
    var hasGroupingChanged = !isCombineEqual(dragging.lastCombine, combine2);
    if (hasGroupingChanged) {
      dragging.lastCombine = combine2;
    }
    if (!hasCriticalChanged && !hasLocationChanged && !hasGroupingChanged) {
      return;
    }
    var data = _extends({}, getDragStart(critical, dragging.mode), {
      combine: combine2,
      destination: location
    });
    asyncMarshal.add(function() {
      withTimings("onDragUpdate", function() {
        return execute(getResponders().onDragUpdate, data, announce, preset.onDragUpdate);
      });
    });
  };
  var flush3 = function flush4() {
    !dragging ? invariant$1(false) : void 0;
    asyncMarshal.flush();
  };
  var drop5 = function drop6(result) {
    !dragging ? invariant$1(false) : void 0;
    dragging = null;
    withTimings("onDragEnd", function() {
      return execute(getResponders().onDragEnd, result, announce, preset.onDragEnd);
    });
  };
  var abort = function abort2() {
    if (!dragging) {
      return;
    }
    var result = _extends({}, getDragStart(dragging.lastCritical, dragging.mode), {
      combine: null,
      destination: null,
      reason: "CANCEL"
    });
    drop5(result);
  };
  return {
    beforeCapture,
    beforeStart,
    start,
    update: update2,
    flush: flush3,
    drop: drop5,
    abort
  };
};
var responders = function(getResponders, announce) {
  var publisher = getPublisher(getResponders, announce);
  return function(store) {
    return function(next) {
      return function(action) {
        if (action.type === "BEFORE_INITIAL_CAPTURE") {
          publisher.beforeCapture(action.payload.draggableId, action.payload.movementMode);
          return;
        }
        if (action.type === "INITIAL_PUBLISH") {
          var critical = action.payload.critical;
          publisher.beforeStart(critical, action.payload.movementMode);
          next(action);
          publisher.start(critical, action.payload.movementMode);
          return;
        }
        if (action.type === "DROP_COMPLETE") {
          var result = action.payload.completed.result;
          publisher.flush();
          next(action);
          publisher.drop(result);
          return;
        }
        next(action);
        if (action.type === "FLUSH") {
          publisher.abort();
          return;
        }
        var state = store.getState();
        if (state.phase === "DRAGGING") {
          publisher.update(state.critical, state.impact);
        }
      };
    };
  };
};
var dropAnimationFinish = function(store) {
  return function(next) {
    return function(action) {
      if (action.type !== "DROP_ANIMATION_FINISHED") {
        next(action);
        return;
      }
      var state = store.getState();
      !(state.phase === "DROP_ANIMATING") ? invariant$1(false) : void 0;
      store.dispatch(completeDrop({
        completed: state.completed
      }));
    };
  };
};
var dropAnimationFlushOnScroll = function(store) {
  var unbind = null;
  var frameId = null;
  function clear() {
    if (frameId) {
      cancelAnimationFrame(frameId);
      frameId = null;
    }
    if (unbind) {
      unbind();
      unbind = null;
    }
  }
  return function(next) {
    return function(action) {
      if (action.type === "FLUSH" || action.type === "DROP_COMPLETE" || action.type === "DROP_ANIMATION_FINISHED") {
        clear();
      }
      next(action);
      if (action.type !== "DROP_ANIMATE") {
        return;
      }
      var binding = {
        eventName: "scroll",
        options: {
          capture: true,
          passive: false,
          once: true
        },
        fn: function flushDropAnimation() {
          var state = store.getState();
          if (state.phase === "DROP_ANIMATING") {
            store.dispatch(dropAnimationFinished());
          }
        }
      };
      frameId = requestAnimationFrame(function() {
        frameId = null;
        unbind = bindEvents(window, [binding]);
      });
    };
  };
};
var dimensionMarshalStopper = function(marshal) {
  return function() {
    return function(next) {
      return function(action) {
        if (action.type === "DROP_COMPLETE" || action.type === "FLUSH" || action.type === "DROP_ANIMATE") {
          marshal.stopPublishing();
        }
        next(action);
      };
    };
  };
};
var focus = function(marshal) {
  var isWatching = false;
  return function() {
    return function(next) {
      return function(action) {
        if (action.type === "INITIAL_PUBLISH") {
          isWatching = true;
          marshal.tryRecordFocus(action.payload.critical.draggable.id);
          next(action);
          marshal.tryRestoreFocusRecorded();
          return;
        }
        next(action);
        if (!isWatching) {
          return;
        }
        if (action.type === "FLUSH") {
          isWatching = false;
          marshal.tryRestoreFocusRecorded();
          return;
        }
        if (action.type === "DROP_COMPLETE") {
          isWatching = false;
          var result = action.payload.completed.result;
          if (result.combine) {
            marshal.tryShiftRecord(result.draggableId, result.combine.draggableId);
          }
          marshal.tryRestoreFocusRecorded();
        }
      };
    };
  };
};
var shouldStop = function shouldStop2(action) {
  return action.type === "DROP_COMPLETE" || action.type === "DROP_ANIMATE" || action.type === "FLUSH";
};
var autoScroll = function(autoScroller) {
  return function(store) {
    return function(next) {
      return function(action) {
        if (shouldStop(action)) {
          autoScroller.stop();
          next(action);
          return;
        }
        if (action.type === "INITIAL_PUBLISH") {
          next(action);
          var state = store.getState();
          !(state.phase === "DRAGGING") ? invariant$1(false) : void 0;
          autoScroller.start(state);
          return;
        }
        next(action);
        autoScroller.scroll(store.getState());
      };
    };
  };
};
var pendingDrop = function(store) {
  return function(next) {
    return function(action) {
      next(action);
      if (action.type !== "PUBLISH_WHILE_DRAGGING") {
        return;
      }
      var postActionState = store.getState();
      if (postActionState.phase !== "DROP_PENDING") {
        return;
      }
      if (postActionState.isWaiting) {
        return;
      }
      store.dispatch(drop({
        reason: postActionState.reason
      }));
    };
  };
};
var composeEnhancers = compose;
var createStore$1 = function(_ref) {
  var dimensionMarshal = _ref.dimensionMarshal, focusMarshal = _ref.focusMarshal, styleMarshal = _ref.styleMarshal, getResponders = _ref.getResponders, announce = _ref.announce, autoScroller = _ref.autoScroller;
  return createStore$2(reducer, composeEnhancers(applyMiddleware(style(styleMarshal), dimensionMarshalStopper(dimensionMarshal), lift$1(dimensionMarshal), drop$1, dropAnimationFinish, dropAnimationFlushOnScroll, pendingDrop, autoScroll(autoScroller), scrollListener, focus(focusMarshal), responders(getResponders, announce))));
};
var clean$1 = function clean() {
  return {
    additions: {},
    removals: {},
    modified: {}
  };
};
function createPublisher(_ref) {
  var registry = _ref.registry, callbacks = _ref.callbacks;
  var staging = clean$1();
  var frameId = null;
  var collect = function collect2() {
    if (frameId) {
      return;
    }
    callbacks.collectionStarting();
    frameId = requestAnimationFrame(function() {
      frameId = null;
      var _staging = staging, additions = _staging.additions, removals = _staging.removals, modified = _staging.modified;
      var added = Object.keys(additions).map(function(id2) {
        return registry.draggable.getById(id2).getDimension(origin);
      }).sort(function(a2, b2) {
        return a2.descriptor.index - b2.descriptor.index;
      });
      var updated = Object.keys(modified).map(function(id2) {
        var entry = registry.droppable.getById(id2);
        var scroll3 = entry.callbacks.getScrollWhileDragging();
        return {
          droppableId: id2,
          scroll: scroll3
        };
      });
      var result = {
        additions: added,
        removals: Object.keys(removals),
        modified: updated
      };
      staging = clean$1();
      callbacks.publish(result);
    });
  };
  var add3 = function add4(entry) {
    var id2 = entry.descriptor.id;
    staging.additions[id2] = entry;
    staging.modified[entry.descriptor.droppableId] = true;
    if (staging.removals[id2]) {
      delete staging.removals[id2];
    }
    collect();
  };
  var remove = function remove2(entry) {
    var descriptor = entry.descriptor;
    staging.removals[descriptor.id] = true;
    staging.modified[descriptor.droppableId] = true;
    if (staging.additions[descriptor.id]) {
      delete staging.additions[descriptor.id];
    }
    collect();
  };
  var stop = function stop2() {
    if (!frameId) {
      return;
    }
    cancelAnimationFrame(frameId);
    frameId = null;
    staging = clean$1();
  };
  return {
    add: add3,
    remove,
    stop
  };
}
var getMaxScroll = function(_ref) {
  var scrollHeight = _ref.scrollHeight, scrollWidth = _ref.scrollWidth, height = _ref.height, width = _ref.width;
  var maxScroll = subtract({
    x: scrollWidth,
    y: scrollHeight
  }, {
    x: width,
    y: height
  });
  var adjustedMaxScroll = {
    x: Math.max(0, maxScroll.x),
    y: Math.max(0, maxScroll.y)
  };
  return adjustedMaxScroll;
};
var getDocumentElement = function() {
  var doc = document.documentElement;
  !doc ? invariant$1(false) : void 0;
  return doc;
};
var getMaxWindowScroll = function() {
  var doc = getDocumentElement();
  var maxScroll = getMaxScroll({
    scrollHeight: doc.scrollHeight,
    scrollWidth: doc.scrollWidth,
    width: doc.clientWidth,
    height: doc.clientHeight
  });
  return maxScroll;
};
var getViewport = function() {
  var scroll3 = getWindowScroll2();
  var maxScroll = getMaxWindowScroll();
  var top = scroll3.y;
  var left = scroll3.x;
  var doc = getDocumentElement();
  var width = doc.clientWidth;
  var height = doc.clientHeight;
  var right2 = left + width;
  var bottom = top + height;
  var frame2 = getRect({
    top,
    left,
    right: right2,
    bottom
  });
  var viewport = {
    frame: frame2,
    scroll: {
      initial: scroll3,
      current: scroll3,
      max: maxScroll,
      diff: {
        value: origin,
        displacement: origin
      }
    }
  };
  return viewport;
};
var getInitialPublish = function(_ref) {
  var critical = _ref.critical, scrollOptions = _ref.scrollOptions, registry = _ref.registry;
  var viewport = getViewport();
  var windowScroll = viewport.scroll.current;
  var home2 = critical.droppable;
  var droppables = registry.droppable.getAllByType(home2.type).map(function(entry) {
    return entry.callbacks.getDimensionAndWatchScroll(windowScroll, scrollOptions);
  });
  var draggables = registry.draggable.getAllByType(critical.draggable.type).map(function(entry) {
    return entry.getDimension(windowScroll);
  });
  var dimensions = {
    draggables: toDraggableMap(draggables),
    droppables: toDroppableMap(droppables)
  };
  var result = {
    dimensions,
    critical,
    viewport
  };
  return result;
};
function shouldPublishUpdate(registry, dragging, entry) {
  if (entry.descriptor.id === dragging.id) {
    return false;
  }
  if (entry.descriptor.type !== dragging.type) {
    return false;
  }
  var home2 = registry.droppable.getById(entry.descriptor.droppableId);
  if (home2.descriptor.mode !== "virtual") {
    return false;
  }
  return true;
}
var createDimensionMarshal = function(registry, callbacks) {
  var collection = null;
  var publisher = createPublisher({
    callbacks: {
      publish: callbacks.publishWhileDragging,
      collectionStarting: callbacks.collectionStarting
    },
    registry
  });
  var updateDroppableIsEnabled3 = function updateDroppableIsEnabled4(id2, isEnabled) {
    !registry.droppable.exists(id2) ? invariant$1(false) : void 0;
    if (!collection) {
      return;
    }
    callbacks.updateDroppableIsEnabled({
      id: id2,
      isEnabled
    });
  };
  var updateDroppableIsCombineEnabled3 = function updateDroppableIsCombineEnabled4(id2, isCombineEnabled) {
    if (!collection) {
      return;
    }
    !registry.droppable.exists(id2) ? invariant$1(false) : void 0;
    callbacks.updateDroppableIsCombineEnabled({
      id: id2,
      isCombineEnabled
    });
  };
  var updateDroppableScroll3 = function updateDroppableScroll4(id2, newScroll) {
    if (!collection) {
      return;
    }
    !registry.droppable.exists(id2) ? invariant$1(false) : void 0;
    callbacks.updateDroppableScroll({
      id: id2,
      newScroll
    });
  };
  var scrollDroppable2 = function scrollDroppable3(id2, change) {
    if (!collection) {
      return;
    }
    registry.droppable.getById(id2).callbacks.scroll(change);
  };
  var stopPublishing = function stopPublishing2() {
    if (!collection) {
      return;
    }
    publisher.stop();
    var home2 = collection.critical.droppable;
    registry.droppable.getAllByType(home2.type).forEach(function(entry) {
      return entry.callbacks.dragStopped();
    });
    collection.unsubscribe();
    collection = null;
  };
  var subscriber = function subscriber2(event) {
    !collection ? invariant$1(false) : void 0;
    var dragging = collection.critical.draggable;
    if (event.type === "ADDITION") {
      if (shouldPublishUpdate(registry, dragging, event.value)) {
        publisher.add(event.value);
      }
    }
    if (event.type === "REMOVAL") {
      if (shouldPublishUpdate(registry, dragging, event.value)) {
        publisher.remove(event.value);
      }
    }
  };
  var startPublishing = function startPublishing2(request) {
    !!collection ? invariant$1(false) : void 0;
    var entry = registry.draggable.getById(request.draggableId);
    var home2 = registry.droppable.getById(entry.descriptor.droppableId);
    var critical = {
      draggable: entry.descriptor,
      droppable: home2.descriptor
    };
    var unsubscribe = registry.subscribe(subscriber);
    collection = {
      critical,
      unsubscribe
    };
    return getInitialPublish({
      critical,
      registry,
      scrollOptions: request.scrollOptions
    });
  };
  var marshal = {
    updateDroppableIsEnabled: updateDroppableIsEnabled3,
    updateDroppableIsCombineEnabled: updateDroppableIsCombineEnabled3,
    scrollDroppable: scrollDroppable2,
    updateDroppableScroll: updateDroppableScroll3,
    startPublishing,
    stopPublishing
  };
  return marshal;
};
var canStartDrag = function(state, id2) {
  if (state.phase === "IDLE") {
    return true;
  }
  if (state.phase !== "DROP_ANIMATING") {
    return false;
  }
  if (state.completed.result.draggableId === id2) {
    return false;
  }
  return state.completed.result.reason === "DROP";
};
var scrollWindow = function(change) {
  window.scrollBy(change.x, change.y);
};
var getScrollableDroppables = memoizeOne(function(droppables) {
  return toDroppableList(droppables).filter(function(droppable2) {
    if (!droppable2.isEnabled) {
      return false;
    }
    if (!droppable2.frame) {
      return false;
    }
    return true;
  });
});
var getScrollableDroppableOver = function getScrollableDroppableOver2(target, droppables) {
  var maybe = find(getScrollableDroppables(droppables), function(droppable2) {
    !droppable2.frame ? invariant$1(false) : void 0;
    return isPositionInFrame(droppable2.frame.pageMarginBox)(target);
  });
  return maybe;
};
var getBestScrollableDroppable = function(_ref) {
  var center2 = _ref.center, destination = _ref.destination, droppables = _ref.droppables;
  if (destination) {
    var _dimension = droppables[destination];
    if (!_dimension.frame) {
      return null;
    }
    return _dimension;
  }
  var dimension = getScrollableDroppableOver(center2, droppables);
  return dimension;
};
var config = {
  startFromPercentage: 0.25,
  maxScrollAtPercentage: 0.05,
  maxPixelScroll: 28,
  ease: function ease(percentage) {
    return Math.pow(percentage, 2);
  },
  durationDampening: {
    stopDampeningAt: 1200,
    accelerateAt: 360
  }
};
var getDistanceThresholds = function(container, axis) {
  var startScrollingFrom = container[axis.size] * config.startFromPercentage;
  var maxScrollValueAt = container[axis.size] * config.maxScrollAtPercentage;
  var thresholds = {
    startScrollingFrom,
    maxScrollValueAt
  };
  return thresholds;
};
var getPercentage = function(_ref) {
  var startOfRange = _ref.startOfRange, endOfRange = _ref.endOfRange, current = _ref.current;
  var range = endOfRange - startOfRange;
  if (range === 0) {
    return 0;
  }
  var currentInRange = current - startOfRange;
  var percentage = currentInRange / range;
  return percentage;
};
var minScroll = 1;
var getValueFromDistance = function(distanceToEdge, thresholds) {
  if (distanceToEdge > thresholds.startScrollingFrom) {
    return 0;
  }
  if (distanceToEdge <= thresholds.maxScrollValueAt) {
    return config.maxPixelScroll;
  }
  if (distanceToEdge === thresholds.startScrollingFrom) {
    return minScroll;
  }
  var percentageFromMaxScrollValueAt = getPercentage({
    startOfRange: thresholds.maxScrollValueAt,
    endOfRange: thresholds.startScrollingFrom,
    current: distanceToEdge
  });
  var percentageFromStartScrollingFrom = 1 - percentageFromMaxScrollValueAt;
  var scroll3 = config.maxPixelScroll * config.ease(percentageFromStartScrollingFrom);
  return Math.ceil(scroll3);
};
var accelerateAt = config.durationDampening.accelerateAt;
var stopAt = config.durationDampening.stopDampeningAt;
var dampenValueByTime = function(proposedScroll, dragStartTime) {
  var startOfRange = dragStartTime;
  var endOfRange = stopAt;
  var now = Date.now();
  var runTime = now - startOfRange;
  if (runTime >= stopAt) {
    return proposedScroll;
  }
  if (runTime < accelerateAt) {
    return minScroll;
  }
  var betweenAccelerateAtAndStopAtPercentage = getPercentage({
    startOfRange: accelerateAt,
    endOfRange,
    current: runTime
  });
  var scroll3 = proposedScroll * config.ease(betweenAccelerateAtAndStopAtPercentage);
  return Math.ceil(scroll3);
};
var getValue = function(_ref) {
  var distanceToEdge = _ref.distanceToEdge, thresholds = _ref.thresholds, dragStartTime = _ref.dragStartTime, shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var scroll3 = getValueFromDistance(distanceToEdge, thresholds);
  if (scroll3 === 0) {
    return 0;
  }
  if (!shouldUseTimeDampening) {
    return scroll3;
  }
  return Math.max(dampenValueByTime(scroll3, dragStartTime), minScroll);
};
var getScrollOnAxis = function(_ref) {
  var container = _ref.container, distanceToEdges = _ref.distanceToEdges, dragStartTime = _ref.dragStartTime, axis = _ref.axis, shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var thresholds = getDistanceThresholds(container, axis);
  var isCloserToEnd = distanceToEdges[axis.end] < distanceToEdges[axis.start];
  if (isCloserToEnd) {
    return getValue({
      distanceToEdge: distanceToEdges[axis.end],
      thresholds,
      dragStartTime,
      shouldUseTimeDampening
    });
  }
  return -1 * getValue({
    distanceToEdge: distanceToEdges[axis.start],
    thresholds,
    dragStartTime,
    shouldUseTimeDampening
  });
};
var adjustForSizeLimits = function(_ref) {
  var container = _ref.container, subject = _ref.subject, proposedScroll = _ref.proposedScroll;
  var isTooBigVertically = subject.height > container.height;
  var isTooBigHorizontally = subject.width > container.width;
  if (!isTooBigHorizontally && !isTooBigVertically) {
    return proposedScroll;
  }
  if (isTooBigHorizontally && isTooBigVertically) {
    return null;
  }
  return {
    x: isTooBigHorizontally ? 0 : proposedScroll.x,
    y: isTooBigVertically ? 0 : proposedScroll.y
  };
};
var clean$2 = apply(function(value) {
  return value === 0 ? 0 : value;
});
var getScroll = function(_ref) {
  var dragStartTime = _ref.dragStartTime, container = _ref.container, subject = _ref.subject, center2 = _ref.center, shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var distanceToEdges = {
    top: center2.y - container.top,
    right: container.right - center2.x,
    bottom: container.bottom - center2.y,
    left: center2.x - container.left
  };
  var y2 = getScrollOnAxis({
    container,
    distanceToEdges,
    dragStartTime,
    axis: vertical,
    shouldUseTimeDampening
  });
  var x = getScrollOnAxis({
    container,
    distanceToEdges,
    dragStartTime,
    axis: horizontal,
    shouldUseTimeDampening
  });
  var required = clean$2({
    x,
    y: y2
  });
  if (isEqual(required, origin)) {
    return null;
  }
  var limited = adjustForSizeLimits({
    container,
    subject,
    proposedScroll: required
  });
  if (!limited) {
    return null;
  }
  return isEqual(limited, origin) ? null : limited;
};
var smallestSigned = apply(function(value) {
  if (value === 0) {
    return 0;
  }
  return value > 0 ? 1 : -1;
});
var getOverlap = function() {
  var getRemainder = function getRemainder2(target, max) {
    if (target < 0) {
      return target;
    }
    if (target > max) {
      return target - max;
    }
    return 0;
  };
  return function(_ref) {
    var current = _ref.current, max = _ref.max, change = _ref.change;
    var targetScroll = add(current, change);
    var overlap = {
      x: getRemainder(targetScroll.x, max.x),
      y: getRemainder(targetScroll.y, max.y)
    };
    if (isEqual(overlap, origin)) {
      return null;
    }
    return overlap;
  };
}();
var canPartiallyScroll = function canPartiallyScroll2(_ref2) {
  var rawMax = _ref2.max, current = _ref2.current, change = _ref2.change;
  var max = {
    x: Math.max(current.x, rawMax.x),
    y: Math.max(current.y, rawMax.y)
  };
  var smallestChange = smallestSigned(change);
  var overlap = getOverlap({
    max,
    current,
    change: smallestChange
  });
  if (!overlap) {
    return true;
  }
  if (smallestChange.x !== 0 && overlap.x === 0) {
    return true;
  }
  if (smallestChange.y !== 0 && overlap.y === 0) {
    return true;
  }
  return false;
};
var canScrollWindow = function canScrollWindow2(viewport, change) {
  return canPartiallyScroll({
    current: viewport.scroll.current,
    max: viewport.scroll.max,
    change
  });
};
var getWindowOverlap = function getWindowOverlap2(viewport, change) {
  if (!canScrollWindow(viewport, change)) {
    return null;
  }
  var max = viewport.scroll.max;
  var current = viewport.scroll.current;
  return getOverlap({
    current,
    max,
    change
  });
};
var canScrollDroppable = function canScrollDroppable2(droppable2, change) {
  var frame2 = droppable2.frame;
  if (!frame2) {
    return false;
  }
  return canPartiallyScroll({
    current: frame2.scroll.current,
    max: frame2.scroll.max,
    change
  });
};
var getDroppableOverlap = function getDroppableOverlap2(droppable2, change) {
  var frame2 = droppable2.frame;
  if (!frame2) {
    return null;
  }
  if (!canScrollDroppable(droppable2, change)) {
    return null;
  }
  return getOverlap({
    current: frame2.scroll.current,
    max: frame2.scroll.max,
    change
  });
};
var getWindowScrollChange = function(_ref) {
  var viewport = _ref.viewport, subject = _ref.subject, center2 = _ref.center, dragStartTime = _ref.dragStartTime, shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var scroll3 = getScroll({
    dragStartTime,
    container: viewport.frame,
    subject,
    center: center2,
    shouldUseTimeDampening
  });
  return scroll3 && canScrollWindow(viewport, scroll3) ? scroll3 : null;
};
var getDroppableScrollChange = function(_ref) {
  var droppable2 = _ref.droppable, subject = _ref.subject, center2 = _ref.center, dragStartTime = _ref.dragStartTime, shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var frame2 = droppable2.frame;
  if (!frame2) {
    return null;
  }
  var scroll3 = getScroll({
    dragStartTime,
    container: frame2.pageMarginBox,
    subject,
    center: center2,
    shouldUseTimeDampening
  });
  return scroll3 && canScrollDroppable(droppable2, scroll3) ? scroll3 : null;
};
var scroll$1 = function(_ref) {
  var state = _ref.state, dragStartTime = _ref.dragStartTime, shouldUseTimeDampening = _ref.shouldUseTimeDampening, scrollWindow2 = _ref.scrollWindow, scrollDroppable2 = _ref.scrollDroppable;
  var center2 = state.current.page.borderBoxCenter;
  var draggable2 = state.dimensions.draggables[state.critical.draggable.id];
  var subject = draggable2.page.marginBox;
  if (state.isWindowScrollAllowed) {
    var viewport = state.viewport;
    var _change = getWindowScrollChange({
      dragStartTime,
      viewport,
      subject,
      center: center2,
      shouldUseTimeDampening
    });
    if (_change) {
      scrollWindow2(_change);
      return;
    }
  }
  var droppable2 = getBestScrollableDroppable({
    center: center2,
    destination: whatIsDraggedOver(state.impact),
    droppables: state.dimensions.droppables
  });
  if (!droppable2) {
    return;
  }
  var change = getDroppableScrollChange({
    dragStartTime,
    droppable: droppable2,
    subject,
    center: center2,
    shouldUseTimeDampening
  });
  if (change) {
    scrollDroppable2(droppable2.descriptor.id, change);
  }
};
var createFluidScroller = function(_ref) {
  var scrollWindow2 = _ref.scrollWindow, scrollDroppable2 = _ref.scrollDroppable;
  var scheduleWindowScroll = rafSchd$1(scrollWindow2);
  var scheduleDroppableScroll = rafSchd$1(scrollDroppable2);
  var dragging = null;
  var tryScroll = function tryScroll2(state) {
    !dragging ? invariant$1(false) : void 0;
    var _dragging = dragging, shouldUseTimeDampening = _dragging.shouldUseTimeDampening, dragStartTime = _dragging.dragStartTime;
    scroll$1({
      state,
      scrollWindow: scheduleWindowScroll,
      scrollDroppable: scheduleDroppableScroll,
      dragStartTime,
      shouldUseTimeDampening
    });
  };
  var start$1 = function start$12(state) {
    !!dragging ? invariant$1(false) : void 0;
    var dragStartTime = Date.now();
    var wasScrollNeeded = false;
    var fakeScrollCallback = function fakeScrollCallback2() {
      wasScrollNeeded = true;
    };
    scroll$1({
      state,
      dragStartTime: 0,
      shouldUseTimeDampening: false,
      scrollWindow: fakeScrollCallback,
      scrollDroppable: fakeScrollCallback
    });
    dragging = {
      dragStartTime,
      shouldUseTimeDampening: wasScrollNeeded
    };
    if (wasScrollNeeded) {
      tryScroll(state);
    }
  };
  var stop = function stop2() {
    if (!dragging) {
      return;
    }
    scheduleWindowScroll.cancel();
    scheduleDroppableScroll.cancel();
    dragging = null;
  };
  return {
    start: start$1,
    stop,
    scroll: tryScroll
  };
};
var createJumpScroller = function(_ref) {
  var move3 = _ref.move, scrollDroppable2 = _ref.scrollDroppable, scrollWindow2 = _ref.scrollWindow;
  var moveByOffset = function moveByOffset2(state, offset3) {
    var client = add(state.current.client.selection, offset3);
    move3({
      client
    });
  };
  var scrollDroppableAsMuchAsItCan = function scrollDroppableAsMuchAsItCan2(droppable2, change) {
    if (!canScrollDroppable(droppable2, change)) {
      return change;
    }
    var overlap = getDroppableOverlap(droppable2, change);
    if (!overlap) {
      scrollDroppable2(droppable2.descriptor.id, change);
      return null;
    }
    var whatTheDroppableCanScroll = subtract(change, overlap);
    scrollDroppable2(droppable2.descriptor.id, whatTheDroppableCanScroll);
    var remainder = subtract(change, whatTheDroppableCanScroll);
    return remainder;
  };
  var scrollWindowAsMuchAsItCan = function scrollWindowAsMuchAsItCan2(isWindowScrollAllowed, viewport, change) {
    if (!isWindowScrollAllowed) {
      return change;
    }
    if (!canScrollWindow(viewport, change)) {
      return change;
    }
    var overlap = getWindowOverlap(viewport, change);
    if (!overlap) {
      scrollWindow2(change);
      return null;
    }
    var whatTheWindowCanScroll = subtract(change, overlap);
    scrollWindow2(whatTheWindowCanScroll);
    var remainder = subtract(change, whatTheWindowCanScroll);
    return remainder;
  };
  var jumpScroller = function jumpScroller2(state) {
    var request = state.scrollJumpRequest;
    if (!request) {
      return;
    }
    var destination = whatIsDraggedOver(state.impact);
    !destination ? invariant$1(false) : void 0;
    var droppableRemainder = scrollDroppableAsMuchAsItCan(state.dimensions.droppables[destination], request);
    if (!droppableRemainder) {
      return;
    }
    var viewport = state.viewport;
    var windowRemainder = scrollWindowAsMuchAsItCan(state.isWindowScrollAllowed, viewport, droppableRemainder);
    if (!windowRemainder) {
      return;
    }
    moveByOffset(state, windowRemainder);
  };
  return jumpScroller;
};
var createAutoScroller = function(_ref) {
  var scrollDroppable2 = _ref.scrollDroppable, scrollWindow2 = _ref.scrollWindow, move3 = _ref.move;
  var fluidScroller = createFluidScroller({
    scrollWindow: scrollWindow2,
    scrollDroppable: scrollDroppable2
  });
  var jumpScroll = createJumpScroller({
    move: move3,
    scrollWindow: scrollWindow2,
    scrollDroppable: scrollDroppable2
  });
  var scroll3 = function scroll4(state) {
    if (state.phase !== "DRAGGING") {
      return;
    }
    if (state.movementMode === "FLUID") {
      fluidScroller.scroll(state);
      return;
    }
    if (!state.scrollJumpRequest) {
      return;
    }
    jumpScroll(state);
  };
  var scroller = {
    scroll: scroll3,
    start: fluidScroller.start,
    stop: fluidScroller.stop
  };
  return scroller;
};
var prefix$1 = "data-rbd";
var dragHandle = function() {
  var base = prefix$1 + "-drag-handle";
  return {
    base,
    draggableId: base + "-draggable-id",
    contextId: base + "-context-id"
  };
}();
var draggable = function() {
  var base = prefix$1 + "-draggable";
  return {
    base,
    contextId: base + "-context-id",
    id: base + "-id"
  };
}();
var droppable = function() {
  var base = prefix$1 + "-droppable";
  return {
    base,
    contextId: base + "-context-id",
    id: base + "-id"
  };
}();
var scrollContainer = {
  contextId: prefix$1 + "-scroll-container-context-id"
};
var makeGetSelector = function makeGetSelector2(context) {
  return function(attribute) {
    return "[" + attribute + '="' + context + '"]';
  };
};
var getStyles = function getStyles2(rules, property) {
  return rules.map(function(rule) {
    var value = rule.styles[property];
    if (!value) {
      return "";
    }
    return rule.selector + " { " + value + " }";
  }).join(" ");
};
var noPointerEvents = "pointer-events: none;";
var getStyles$1 = function(contextId) {
  var getSelector2 = makeGetSelector(contextId);
  var dragHandle$1 = function() {
    var grabCursor = "\n      cursor: -webkit-grab;\n      cursor: grab;\n    ";
    return {
      selector: getSelector2(dragHandle.contextId),
      styles: {
        always: "\n          -webkit-touch-callout: none;\n          -webkit-tap-highlight-color: rgba(0,0,0,0);\n          touch-action: manipulation;\n        ",
        resting: grabCursor,
        dragging: noPointerEvents,
        dropAnimating: grabCursor
      }
    };
  }();
  var draggable$1 = function() {
    var transition = "\n      transition: " + transitions.outOfTheWay + ";\n    ";
    return {
      selector: getSelector2(draggable.contextId),
      styles: {
        dragging: transition,
        dropAnimating: transition,
        userCancel: transition
      }
    };
  }();
  var droppable$1 = {
    selector: getSelector2(droppable.contextId),
    styles: {
      always: "overflow-anchor: none;"
    }
  };
  var body = {
    selector: "body",
    styles: {
      dragging: "\n        cursor: grabbing;\n        cursor: -webkit-grabbing;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        overflow-anchor: none;\n      "
    }
  };
  var rules = [draggable$1, dragHandle$1, droppable$1, body];
  return {
    always: getStyles(rules, "always"),
    resting: getStyles(rules, "resting"),
    dragging: getStyles(rules, "dragging"),
    dropAnimating: getStyles(rules, "dropAnimating"),
    userCancel: getStyles(rules, "userCancel")
  };
};
var useIsomorphicLayoutEffect$1 = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? useLayoutEffect : useEffect;
var getHead = function getHead2() {
  var head = document.querySelector("head");
  !head ? invariant$1(false) : void 0;
  return head;
};
var createStyleEl = function createStyleEl2(nonce) {
  var el = document.createElement("style");
  if (nonce) {
    el.setAttribute("nonce", nonce);
  }
  el.type = "text/css";
  return el;
};
function useStyleMarshal(contextId, nonce) {
  var styles2 = useMemo(function() {
    return getStyles$1(contextId);
  }, [contextId]);
  var alwaysRef = useRef(null);
  var dynamicRef = useRef(null);
  var setDynamicStyle = useCallback(memoizeOne(function(proposed) {
    var el = dynamicRef.current;
    !el ? invariant$1(false) : void 0;
    el.textContent = proposed;
  }), []);
  var setAlwaysStyle = useCallback(function(proposed) {
    var el = alwaysRef.current;
    !el ? invariant$1(false) : void 0;
    el.textContent = proposed;
  }, []);
  useIsomorphicLayoutEffect$1(function() {
    !(!alwaysRef.current && !dynamicRef.current) ? invariant$1(false) : void 0;
    var always = createStyleEl(nonce);
    var dynamic = createStyleEl(nonce);
    alwaysRef.current = always;
    dynamicRef.current = dynamic;
    always.setAttribute(prefix$1 + "-always", contextId);
    dynamic.setAttribute(prefix$1 + "-dynamic", contextId);
    getHead().appendChild(always);
    getHead().appendChild(dynamic);
    setAlwaysStyle(styles2.always);
    setDynamicStyle(styles2.resting);
    return function() {
      var remove = function remove2(ref) {
        var current = ref.current;
        !current ? invariant$1(false) : void 0;
        getHead().removeChild(current);
        ref.current = null;
      };
      remove(alwaysRef);
      remove(dynamicRef);
    };
  }, [nonce, setAlwaysStyle, setDynamicStyle, styles2.always, styles2.resting, contextId]);
  var dragging = useCallback(function() {
    return setDynamicStyle(styles2.dragging);
  }, [setDynamicStyle, styles2.dragging]);
  var dropping = useCallback(function(reason) {
    if (reason === "DROP") {
      setDynamicStyle(styles2.dropAnimating);
      return;
    }
    setDynamicStyle(styles2.userCancel);
  }, [setDynamicStyle, styles2.dropAnimating, styles2.userCancel]);
  var resting = useCallback(function() {
    if (!dynamicRef.current) {
      return;
    }
    setDynamicStyle(styles2.resting);
  }, [setDynamicStyle, styles2.resting]);
  var marshal = useMemo(function() {
    return {
      dragging,
      dropping,
      resting
    };
  }, [dragging, dropping, resting]);
  return marshal;
}
var getWindowFromEl = function(el) {
  return el && el.ownerDocument ? el.ownerDocument.defaultView : window;
};
function isHtmlElement(el) {
  return el instanceof getWindowFromEl(el).HTMLElement;
}
function findDragHandle(contextId, draggableId) {
  var selector = "[" + dragHandle.contextId + '="' + contextId + '"]';
  var possible = toArray(document.querySelectorAll(selector));
  if (!possible.length) {
    return null;
  }
  var handle2 = find(possible, function(el) {
    return el.getAttribute(dragHandle.draggableId) === draggableId;
  });
  if (!handle2) {
    return null;
  }
  if (!isHtmlElement(handle2)) {
    return null;
  }
  return handle2;
}
function useFocusMarshal(contextId) {
  var entriesRef = useRef({});
  var recordRef = useRef(null);
  var restoreFocusFrameRef = useRef(null);
  var isMountedRef = useRef(false);
  var register = useCallback(function register2(id2, focus2) {
    var entry = {
      id: id2,
      focus: focus2
    };
    entriesRef.current[id2] = entry;
    return function unregister() {
      var entries = entriesRef.current;
      var current = entries[id2];
      if (current !== entry) {
        delete entries[id2];
      }
    };
  }, []);
  var tryGiveFocus = useCallback(function tryGiveFocus2(tryGiveFocusTo) {
    var handle2 = findDragHandle(contextId, tryGiveFocusTo);
    if (handle2 && handle2 !== document.activeElement) {
      handle2.focus();
    }
  }, [contextId]);
  var tryShiftRecord = useCallback(function tryShiftRecord2(previous, redirectTo) {
    if (recordRef.current === previous) {
      recordRef.current = redirectTo;
    }
  }, []);
  var tryRestoreFocusRecorded = useCallback(function tryRestoreFocusRecorded2() {
    if (restoreFocusFrameRef.current) {
      return;
    }
    if (!isMountedRef.current) {
      return;
    }
    restoreFocusFrameRef.current = requestAnimationFrame(function() {
      restoreFocusFrameRef.current = null;
      var record = recordRef.current;
      if (record) {
        tryGiveFocus(record);
      }
    });
  }, [tryGiveFocus]);
  var tryRecordFocus = useCallback(function tryRecordFocus2(id2) {
    recordRef.current = null;
    var focused = document.activeElement;
    if (!focused) {
      return;
    }
    if (focused.getAttribute(dragHandle.draggableId) !== id2) {
      return;
    }
    recordRef.current = id2;
  }, []);
  useIsomorphicLayoutEffect$1(function() {
    isMountedRef.current = true;
    return function clearFrameOnUnmount() {
      isMountedRef.current = false;
      var frameId = restoreFocusFrameRef.current;
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);
  var marshal = useMemo(function() {
    return {
      register,
      tryRecordFocus,
      tryRestoreFocusRecorded,
      tryShiftRecord
    };
  }, [register, tryRecordFocus, tryRestoreFocusRecorded, tryShiftRecord]);
  return marshal;
}
function createRegistry() {
  var entries = {
    draggables: {},
    droppables: {}
  };
  var subscribers = [];
  function subscribe(cb2) {
    subscribers.push(cb2);
    return function unsubscribe() {
      var index = subscribers.indexOf(cb2);
      if (index === -1) {
        return;
      }
      subscribers.splice(index, 1);
    };
  }
  function notify2(event) {
    if (subscribers.length) {
      subscribers.forEach(function(cb2) {
        return cb2(event);
      });
    }
  }
  function findDraggableById(id2) {
    return entries.draggables[id2] || null;
  }
  function getDraggableById(id2) {
    var entry = findDraggableById(id2);
    !entry ? invariant$1(false) : void 0;
    return entry;
  }
  var draggableAPI = {
    register: function register(entry) {
      entries.draggables[entry.descriptor.id] = entry;
      notify2({
        type: "ADDITION",
        value: entry
      });
    },
    update: function update2(entry, last) {
      var current = entries.draggables[last.descriptor.id];
      if (!current) {
        return;
      }
      if (current.uniqueId !== entry.uniqueId) {
        return;
      }
      delete entries.draggables[last.descriptor.id];
      entries.draggables[entry.descriptor.id] = entry;
    },
    unregister: function unregister(entry) {
      var draggableId = entry.descriptor.id;
      var current = findDraggableById(draggableId);
      if (!current) {
        return;
      }
      if (entry.uniqueId !== current.uniqueId) {
        return;
      }
      delete entries.draggables[draggableId];
      notify2({
        type: "REMOVAL",
        value: entry
      });
    },
    getById: getDraggableById,
    findById: findDraggableById,
    exists: function exists(id2) {
      return Boolean(findDraggableById(id2));
    },
    getAllByType: function getAllByType(type) {
      return values(entries.draggables).filter(function(entry) {
        return entry.descriptor.type === type;
      });
    }
  };
  function findDroppableById(id2) {
    return entries.droppables[id2] || null;
  }
  function getDroppableById(id2) {
    var entry = findDroppableById(id2);
    !entry ? invariant$1(false) : void 0;
    return entry;
  }
  var droppableAPI = {
    register: function register(entry) {
      entries.droppables[entry.descriptor.id] = entry;
    },
    unregister: function unregister(entry) {
      var current = findDroppableById(entry.descriptor.id);
      if (!current) {
        return;
      }
      if (entry.uniqueId !== current.uniqueId) {
        return;
      }
      delete entries.droppables[entry.descriptor.id];
    },
    getById: getDroppableById,
    findById: findDroppableById,
    exists: function exists(id2) {
      return Boolean(findDroppableById(id2));
    },
    getAllByType: function getAllByType(type) {
      return values(entries.droppables).filter(function(entry) {
        return entry.descriptor.type === type;
      });
    }
  };
  function clean2() {
    entries.draggables = {};
    entries.droppables = {};
    subscribers.length = 0;
  }
  return {
    draggable: draggableAPI,
    droppable: droppableAPI,
    subscribe,
    clean: clean2
  };
}
function useRegistry() {
  var registry = useMemo(createRegistry, []);
  useEffect(function() {
    return function unmount() {
      requestAnimationFrame(registry.clean);
    };
  }, [registry]);
  return registry;
}
var StoreContext = React__default.createContext(null);
var getBodyElement = function() {
  var body = document.body;
  !body ? invariant$1(false) : void 0;
  return body;
};
var visuallyHidden = {
  position: "absolute",
  width: "1px",
  height: "1px",
  margin: "-1px",
  border: "0",
  padding: "0",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  "clip-path": "inset(100%)"
};
var getId = function getId2(contextId) {
  return "rbd-announcement-" + contextId;
};
function useAnnouncer(contextId) {
  var id2 = useMemo(function() {
    return getId(contextId);
  }, [contextId]);
  var ref = useRef(null);
  useEffect(function setup() {
    var el = document.createElement("div");
    ref.current = el;
    el.id = id2;
    el.setAttribute("aria-live", "assertive");
    el.setAttribute("aria-atomic", "true");
    _extends(el.style, visuallyHidden);
    getBodyElement().appendChild(el);
    return function cleanup() {
      setTimeout(function remove() {
        var body = getBodyElement();
        if (body.contains(el)) {
          body.removeChild(el);
        }
        if (el === ref.current) {
          ref.current = null;
        }
      });
    };
  }, [id2]);
  var announce = useCallback(function(message) {
    var el = ref.current;
    if (el) {
      el.textContent = message;
      return;
    }
  }, []);
  return announce;
}
var count = 0;
var defaults = {
  separator: "::"
};
function useUniqueId(prefix2, options) {
  if (options === void 0) {
    options = defaults;
  }
  return useMemo(function() {
    return "" + prefix2 + options.separator + count++;
  }, [options.separator, prefix2]);
}
function getElementId(_ref) {
  var contextId = _ref.contextId, uniqueId = _ref.uniqueId;
  return "rbd-hidden-text-" + contextId + "-" + uniqueId;
}
function useHiddenTextElement(_ref2) {
  var contextId = _ref2.contextId, text2 = _ref2.text;
  var uniqueId = useUniqueId("hidden-text", {
    separator: "-"
  });
  var id2 = useMemo(function() {
    return getElementId({
      contextId,
      uniqueId
    });
  }, [uniqueId, contextId]);
  useEffect(function mount() {
    var el = document.createElement("div");
    el.id = id2;
    el.textContent = text2;
    el.style.display = "none";
    getBodyElement().appendChild(el);
    return function unmount() {
      var body = getBodyElement();
      if (body.contains(el)) {
        body.removeChild(el);
      }
    };
  }, [id2, text2]);
  return id2;
}
var AppContext = React__default.createContext(null);
function usePrevious(current) {
  var ref = useRef(current);
  useEffect(function() {
    ref.current = current;
  });
  return ref;
}
function create$1() {
  var lock2 = null;
  function isClaimed() {
    return Boolean(lock2);
  }
  function isActive(value) {
    return value === lock2;
  }
  function claim(abandon) {
    !!lock2 ? invariant$1(false) : void 0;
    var newLock = {
      abandon
    };
    lock2 = newLock;
    return newLock;
  }
  function release() {
    !lock2 ? invariant$1(false) : void 0;
    lock2 = null;
  }
  function tryAbandon() {
    if (lock2) {
      lock2.abandon();
      release();
    }
  }
  return {
    isClaimed,
    isActive,
    claim,
    release,
    tryAbandon
  };
}
var tab = 9;
var enter = 13;
var escape = 27;
var space = 32;
var pageUp = 33;
var pageDown = 34;
var end = 35;
var home = 36;
var arrowLeft = 37;
var arrowUp = 38;
var arrowRight = 39;
var arrowDown = 40;
var _preventedKeys;
var preventedKeys = (_preventedKeys = {}, _preventedKeys[enter] = true, _preventedKeys[tab] = true, _preventedKeys);
var preventStandardKeyEvents = function(event) {
  if (preventedKeys[event.keyCode]) {
    event.preventDefault();
  }
};
var supportedEventName = function() {
  var base = "visibilitychange";
  if (typeof document === "undefined") {
    return base;
  }
  var candidates = [base, "ms" + base, "webkit" + base, "moz" + base, "o" + base];
  var supported = find(candidates, function(eventName) {
    return "on" + eventName in document;
  });
  return supported || base;
}();
var primaryButton = 0;
var sloppyClickThreshold = 5;
function isSloppyClickThresholdExceeded(original, current) {
  return Math.abs(current.x - original.x) >= sloppyClickThreshold || Math.abs(current.y - original.y) >= sloppyClickThreshold;
}
var idle$1 = {
  type: "IDLE"
};
function getCaptureBindings(_ref) {
  var cancel = _ref.cancel, completed = _ref.completed, getPhase = _ref.getPhase, setPhase = _ref.setPhase;
  return [{
    eventName: "mousemove",
    fn: function fn(event) {
      var button2 = event.button, clientX = event.clientX, clientY = event.clientY;
      if (button2 !== primaryButton) {
        return;
      }
      var point = {
        x: clientX,
        y: clientY
      };
      var phase = getPhase();
      if (phase.type === "DRAGGING") {
        event.preventDefault();
        phase.actions.move(point);
        return;
      }
      !(phase.type === "PENDING") ? invariant$1(false) : void 0;
      var pending = phase.point;
      if (!isSloppyClickThresholdExceeded(pending, point)) {
        return;
      }
      event.preventDefault();
      var actions = phase.actions.fluidLift(point);
      setPhase({
        type: "DRAGGING",
        actions
      });
    }
  }, {
    eventName: "mouseup",
    fn: function fn(event) {
      var phase = getPhase();
      if (phase.type !== "DRAGGING") {
        cancel();
        return;
      }
      event.preventDefault();
      phase.actions.drop({
        shouldBlockNextClick: true
      });
      completed();
    }
  }, {
    eventName: "mousedown",
    fn: function fn(event) {
      if (getPhase().type === "DRAGGING") {
        event.preventDefault();
      }
      cancel();
    }
  }, {
    eventName: "keydown",
    fn: function fn(event) {
      var phase = getPhase();
      if (phase.type === "PENDING") {
        cancel();
        return;
      }
      if (event.keyCode === escape) {
        event.preventDefault();
        cancel();
        return;
      }
      preventStandardKeyEvents(event);
    }
  }, {
    eventName: "resize",
    fn: cancel
  }, {
    eventName: "scroll",
    options: {
      passive: true,
      capture: false
    },
    fn: function fn() {
      if (getPhase().type === "PENDING") {
        cancel();
      }
    }
  }, {
    eventName: "webkitmouseforcedown",
    fn: function fn(event) {
      var phase = getPhase();
      !(phase.type !== "IDLE") ? invariant$1(false) : void 0;
      if (phase.actions.shouldRespectForcePress()) {
        cancel();
        return;
      }
      event.preventDefault();
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}
function useMouseSensor(api) {
  var phaseRef = useRef(idle$1);
  var unbindEventsRef = useRef(noop);
  var startCaptureBinding = useMemo(function() {
    return {
      eventName: "mousedown",
      fn: function onMouseDown(event) {
        if (event.defaultPrevented) {
          return;
        }
        if (event.button !== primaryButton) {
          return;
        }
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
          return;
        }
        var draggableId = api.findClosestDraggableId(event);
        if (!draggableId) {
          return;
        }
        var actions = api.tryGetLock(draggableId, stop, {
          sourceEvent: event
        });
        if (!actions) {
          return;
        }
        event.preventDefault();
        var point = {
          x: event.clientX,
          y: event.clientY
        };
        unbindEventsRef.current();
        startPendingDrag(actions, point);
      }
    };
  }, [api]);
  var preventForcePressBinding = useMemo(function() {
    return {
      eventName: "webkitmouseforcewillbegin",
      fn: function fn(event) {
        if (event.defaultPrevented) {
          return;
        }
        var id2 = api.findClosestDraggableId(event);
        if (!id2) {
          return;
        }
        var options = api.findOptionsForDraggable(id2);
        if (!options) {
          return;
        }
        if (options.shouldRespectForcePress) {
          return;
        }
        if (!api.canGetLock(id2)) {
          return;
        }
        event.preventDefault();
      }
    };
  }, [api]);
  var listenForCapture = useCallback(function listenForCapture2() {
    var options = {
      passive: false,
      capture: true
    };
    unbindEventsRef.current = bindEvents(window, [preventForcePressBinding, startCaptureBinding], options);
  }, [preventForcePressBinding, startCaptureBinding]);
  var stop = useCallback(function() {
    var current = phaseRef.current;
    if (current.type === "IDLE") {
      return;
    }
    phaseRef.current = idle$1;
    unbindEventsRef.current();
    listenForCapture();
  }, [listenForCapture]);
  var cancel = useCallback(function() {
    var phase = phaseRef.current;
    stop();
    if (phase.type === "DRAGGING") {
      phase.actions.cancel({
        shouldBlockNextClick: true
      });
    }
    if (phase.type === "PENDING") {
      phase.actions.abort();
    }
  }, [stop]);
  var bindCapturingEvents = useCallback(function bindCapturingEvents2() {
    var options = {
      capture: true,
      passive: false
    };
    var bindings = getCaptureBindings({
      cancel,
      completed: stop,
      getPhase: function getPhase() {
        return phaseRef.current;
      },
      setPhase: function setPhase(phase) {
        phaseRef.current = phase;
      }
    });
    unbindEventsRef.current = bindEvents(window, bindings, options);
  }, [cancel, stop]);
  var startPendingDrag = useCallback(function startPendingDrag2(actions, point) {
    !(phaseRef.current.type === "IDLE") ? invariant$1(false) : void 0;
    phaseRef.current = {
      type: "PENDING",
      point,
      actions
    };
    bindCapturingEvents();
  }, [bindCapturingEvents]);
  useIsomorphicLayoutEffect$1(function mount() {
    listenForCapture();
    return function unmount() {
      unbindEventsRef.current();
    };
  }, [listenForCapture]);
}
var _scrollJumpKeys;
function noop$1() {
}
var scrollJumpKeys = (_scrollJumpKeys = {}, _scrollJumpKeys[pageDown] = true, _scrollJumpKeys[pageUp] = true, _scrollJumpKeys[home] = true, _scrollJumpKeys[end] = true, _scrollJumpKeys);
function getDraggingBindings(actions, stop) {
  function cancel() {
    stop();
    actions.cancel();
  }
  function drop5() {
    stop();
    actions.drop();
  }
  return [{
    eventName: "keydown",
    fn: function fn(event) {
      if (event.keyCode === escape) {
        event.preventDefault();
        cancel();
        return;
      }
      if (event.keyCode === space) {
        event.preventDefault();
        drop5();
        return;
      }
      if (event.keyCode === arrowDown) {
        event.preventDefault();
        actions.moveDown();
        return;
      }
      if (event.keyCode === arrowUp) {
        event.preventDefault();
        actions.moveUp();
        return;
      }
      if (event.keyCode === arrowRight) {
        event.preventDefault();
        actions.moveRight();
        return;
      }
      if (event.keyCode === arrowLeft) {
        event.preventDefault();
        actions.moveLeft();
        return;
      }
      if (scrollJumpKeys[event.keyCode]) {
        event.preventDefault();
        return;
      }
      preventStandardKeyEvents(event);
    }
  }, {
    eventName: "mousedown",
    fn: cancel
  }, {
    eventName: "mouseup",
    fn: cancel
  }, {
    eventName: "click",
    fn: cancel
  }, {
    eventName: "touchstart",
    fn: cancel
  }, {
    eventName: "resize",
    fn: cancel
  }, {
    eventName: "wheel",
    fn: cancel,
    options: {
      passive: true
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}
function useKeyboardSensor(api) {
  var unbindEventsRef = useRef(noop$1);
  var startCaptureBinding = useMemo(function() {
    return {
      eventName: "keydown",
      fn: function onKeyDown(event) {
        if (event.defaultPrevented) {
          return;
        }
        if (event.keyCode !== space) {
          return;
        }
        var draggableId = api.findClosestDraggableId(event);
        if (!draggableId) {
          return;
        }
        var preDrag = api.tryGetLock(draggableId, stop, {
          sourceEvent: event
        });
        if (!preDrag) {
          return;
        }
        event.preventDefault();
        var isCapturing = true;
        var actions = preDrag.snapLift();
        unbindEventsRef.current();
        function stop() {
          !isCapturing ? invariant$1(false) : void 0;
          isCapturing = false;
          unbindEventsRef.current();
          listenForCapture();
        }
        unbindEventsRef.current = bindEvents(window, getDraggingBindings(actions, stop), {
          capture: true,
          passive: false
        });
      }
    };
  }, [api]);
  var listenForCapture = useCallback(function tryStartCapture() {
    var options = {
      passive: false,
      capture: true
    };
    unbindEventsRef.current = bindEvents(window, [startCaptureBinding], options);
  }, [startCaptureBinding]);
  useIsomorphicLayoutEffect$1(function mount() {
    listenForCapture();
    return function unmount() {
      unbindEventsRef.current();
    };
  }, [listenForCapture]);
}
var idle$2 = {
  type: "IDLE"
};
var timeForLongPress = 120;
var forcePressThreshold = 0.15;
function getWindowBindings(_ref) {
  var cancel = _ref.cancel, getPhase = _ref.getPhase;
  return [{
    eventName: "orientationchange",
    fn: cancel
  }, {
    eventName: "resize",
    fn: cancel
  }, {
    eventName: "contextmenu",
    fn: function fn(event) {
      event.preventDefault();
    }
  }, {
    eventName: "keydown",
    fn: function fn(event) {
      if (getPhase().type !== "DRAGGING") {
        cancel();
        return;
      }
      if (event.keyCode === escape) {
        event.preventDefault();
      }
      cancel();
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}
function getHandleBindings(_ref2) {
  var cancel = _ref2.cancel, completed = _ref2.completed, getPhase = _ref2.getPhase;
  return [{
    eventName: "touchmove",
    options: {
      capture: false
    },
    fn: function fn(event) {
      var phase = getPhase();
      if (phase.type !== "DRAGGING") {
        cancel();
        return;
      }
      phase.hasMoved = true;
      var _event$touches$ = event.touches[0], clientX = _event$touches$.clientX, clientY = _event$touches$.clientY;
      var point = {
        x: clientX,
        y: clientY
      };
      event.preventDefault();
      phase.actions.move(point);
    }
  }, {
    eventName: "touchend",
    fn: function fn(event) {
      var phase = getPhase();
      if (phase.type !== "DRAGGING") {
        cancel();
        return;
      }
      event.preventDefault();
      phase.actions.drop({
        shouldBlockNextClick: true
      });
      completed();
    }
  }, {
    eventName: "touchcancel",
    fn: function fn(event) {
      if (getPhase().type !== "DRAGGING") {
        cancel();
        return;
      }
      event.preventDefault();
      cancel();
    }
  }, {
    eventName: "touchforcechange",
    fn: function fn(event) {
      var phase = getPhase();
      !(phase.type !== "IDLE") ? invariant$1(false) : void 0;
      var touch = event.touches[0];
      if (!touch) {
        return;
      }
      var isForcePress = touch.force >= forcePressThreshold;
      if (!isForcePress) {
        return;
      }
      var shouldRespect = phase.actions.shouldRespectForcePress();
      if (phase.type === "PENDING") {
        if (shouldRespect) {
          cancel();
        }
        return;
      }
      if (shouldRespect) {
        if (phase.hasMoved) {
          event.preventDefault();
          return;
        }
        cancel();
        return;
      }
      event.preventDefault();
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}
function useTouchSensor(api) {
  var phaseRef = useRef(idle$2);
  var unbindEventsRef = useRef(noop);
  var getPhase = useCallback(function getPhase2() {
    return phaseRef.current;
  }, []);
  var setPhase = useCallback(function setPhase2(phase) {
    phaseRef.current = phase;
  }, []);
  var startCaptureBinding = useMemo(function() {
    return {
      eventName: "touchstart",
      fn: function onTouchStart(event) {
        if (event.defaultPrevented) {
          return;
        }
        var draggableId = api.findClosestDraggableId(event);
        if (!draggableId) {
          return;
        }
        var actions = api.tryGetLock(draggableId, stop, {
          sourceEvent: event
        });
        if (!actions) {
          return;
        }
        var touch = event.touches[0];
        var clientX = touch.clientX, clientY = touch.clientY;
        var point = {
          x: clientX,
          y: clientY
        };
        unbindEventsRef.current();
        startPendingDrag(actions, point);
      }
    };
  }, [api]);
  var listenForCapture = useCallback(function listenForCapture2() {
    var options = {
      capture: true,
      passive: false
    };
    unbindEventsRef.current = bindEvents(window, [startCaptureBinding], options);
  }, [startCaptureBinding]);
  var stop = useCallback(function() {
    var current = phaseRef.current;
    if (current.type === "IDLE") {
      return;
    }
    if (current.type === "PENDING") {
      clearTimeout(current.longPressTimerId);
    }
    setPhase(idle$2);
    unbindEventsRef.current();
    listenForCapture();
  }, [listenForCapture, setPhase]);
  var cancel = useCallback(function() {
    var phase = phaseRef.current;
    stop();
    if (phase.type === "DRAGGING") {
      phase.actions.cancel({
        shouldBlockNextClick: true
      });
    }
    if (phase.type === "PENDING") {
      phase.actions.abort();
    }
  }, [stop]);
  var bindCapturingEvents = useCallback(function bindCapturingEvents2() {
    var options = {
      capture: true,
      passive: false
    };
    var args = {
      cancel,
      completed: stop,
      getPhase
    };
    var unbindTarget = bindEvents(window, getHandleBindings(args), options);
    var unbindWindow = bindEvents(window, getWindowBindings(args), options);
    unbindEventsRef.current = function unbindAll() {
      unbindTarget();
      unbindWindow();
    };
  }, [cancel, getPhase, stop]);
  var startDragging = useCallback(function startDragging2() {
    var phase = getPhase();
    !(phase.type === "PENDING") ? invariant$1(false) : void 0;
    var actions = phase.actions.fluidLift(phase.point);
    setPhase({
      type: "DRAGGING",
      actions,
      hasMoved: false
    });
  }, [getPhase, setPhase]);
  var startPendingDrag = useCallback(function startPendingDrag2(actions, point) {
    !(getPhase().type === "IDLE") ? invariant$1(false) : void 0;
    var longPressTimerId = setTimeout(startDragging, timeForLongPress);
    setPhase({
      type: "PENDING",
      point,
      actions,
      longPressTimerId
    });
    bindCapturingEvents();
  }, [bindCapturingEvents, getPhase, setPhase, startDragging]);
  useIsomorphicLayoutEffect$1(function mount() {
    listenForCapture();
    return function unmount() {
      unbindEventsRef.current();
      var phase = getPhase();
      if (phase.type === "PENDING") {
        clearTimeout(phase.longPressTimerId);
        setPhase(idle$2);
      }
    };
  }, [getPhase, listenForCapture, setPhase]);
  useIsomorphicLayoutEffect$1(function webkitHack() {
    var unbind = bindEvents(window, [{
      eventName: "touchmove",
      fn: function fn() {
      },
      options: {
        capture: false,
        passive: false
      }
    }]);
    return unbind;
  }, []);
}
var interactiveTagNames = {
  input: true,
  button: true,
  textarea: true,
  select: true,
  option: true,
  optgroup: true,
  video: true,
  audio: true
};
function isAnInteractiveElement(parent, current) {
  if (current == null) {
    return false;
  }
  var hasAnInteractiveTag = Boolean(interactiveTagNames[current.tagName.toLowerCase()]);
  if (hasAnInteractiveTag) {
    return true;
  }
  var attribute = current.getAttribute("contenteditable");
  if (attribute === "true" || attribute === "") {
    return true;
  }
  if (current === parent) {
    return false;
  }
  return isAnInteractiveElement(parent, current.parentElement);
}
function isEventInInteractiveElement(draggable2, event) {
  var target = event.target;
  if (!isHtmlElement(target)) {
    return false;
  }
  return isAnInteractiveElement(draggable2, target);
}
var getBorderBoxCenterPosition = function(el) {
  return getRect(el.getBoundingClientRect()).center;
};
function isElement(el) {
  return el instanceof getWindowFromEl(el).Element;
}
var supportedMatchesName = function() {
  var base = "matches";
  if (typeof document === "undefined") {
    return base;
  }
  var candidates = [base, "msMatchesSelector", "webkitMatchesSelector"];
  var value = find(candidates, function(name) {
    return name in Element.prototype;
  });
  return value || base;
}();
function closestPonyfill(el, selector) {
  if (el == null) {
    return null;
  }
  if (el[supportedMatchesName](selector)) {
    return el;
  }
  return closestPonyfill(el.parentElement, selector);
}
function closest$1(el, selector) {
  if (el.closest) {
    return el.closest(selector);
  }
  return closestPonyfill(el, selector);
}
function getSelector(contextId) {
  return "[" + dragHandle.contextId + '="' + contextId + '"]';
}
function findClosestDragHandleFromEvent(contextId, event) {
  var target = event.target;
  if (!isElement(target)) {
    return null;
  }
  var selector = getSelector(contextId);
  var handle2 = closest$1(target, selector);
  if (!handle2) {
    return null;
  }
  if (!isHtmlElement(handle2)) {
    return null;
  }
  return handle2;
}
function tryGetClosestDraggableIdFromEvent(contextId, event) {
  var handle2 = findClosestDragHandleFromEvent(contextId, event);
  if (!handle2) {
    return null;
  }
  return handle2.getAttribute(dragHandle.draggableId);
}
function findDraggable(contextId, draggableId) {
  var selector = "[" + draggable.contextId + '="' + contextId + '"]';
  var possible = toArray(document.querySelectorAll(selector));
  var draggable$1 = find(possible, function(el) {
    return el.getAttribute(draggable.id) === draggableId;
  });
  if (!draggable$1) {
    return null;
  }
  if (!isHtmlElement(draggable$1)) {
    return null;
  }
  return draggable$1;
}
function preventDefault(event) {
  event.preventDefault();
}
function _isActive(_ref) {
  var expected = _ref.expected, phase = _ref.phase, isLockActive = _ref.isLockActive;
  _ref.shouldWarn;
  if (!isLockActive()) {
    return false;
  }
  if (expected !== phase) {
    return false;
  }
  return true;
}
function canStart(_ref2) {
  var lockAPI = _ref2.lockAPI, store = _ref2.store, registry = _ref2.registry, draggableId = _ref2.draggableId;
  if (lockAPI.isClaimed()) {
    return false;
  }
  var entry = registry.draggable.findById(draggableId);
  if (!entry) {
    return false;
  }
  if (!entry.options.isEnabled) {
    return false;
  }
  if (!canStartDrag(store.getState(), draggableId)) {
    return false;
  }
  return true;
}
function tryStart(_ref3) {
  var lockAPI = _ref3.lockAPI, contextId = _ref3.contextId, store = _ref3.store, registry = _ref3.registry, draggableId = _ref3.draggableId, forceSensorStop = _ref3.forceSensorStop, sourceEvent = _ref3.sourceEvent;
  var shouldStart = canStart({
    lockAPI,
    store,
    registry,
    draggableId
  });
  if (!shouldStart) {
    return null;
  }
  var entry = registry.draggable.getById(draggableId);
  var el = findDraggable(contextId, entry.descriptor.id);
  if (!el) {
    return null;
  }
  if (sourceEvent && !entry.options.canDragInteractiveElements && isEventInInteractiveElement(el, sourceEvent)) {
    return null;
  }
  var lock2 = lockAPI.claim(forceSensorStop || noop);
  var phase = "PRE_DRAG";
  function getShouldRespectForcePress() {
    return entry.options.shouldRespectForcePress;
  }
  function isLockActive() {
    return lockAPI.isActive(lock2);
  }
  function tryDispatch(expected, getAction) {
    if (_isActive({
      expected,
      phase,
      isLockActive,
      shouldWarn: true
    })) {
      store.dispatch(getAction());
    }
  }
  var tryDispatchWhenDragging = tryDispatch.bind(null, "DRAGGING");
  function lift$12(args) {
    function completed() {
      lockAPI.release();
      phase = "COMPLETED";
    }
    if (phase !== "PRE_DRAG") {
      completed();
      !(phase === "PRE_DRAG") ? invariant$1(false) : void 0;
    }
    store.dispatch(lift(args.liftActionArgs));
    phase = "DRAGGING";
    function finish(reason, options) {
      if (options === void 0) {
        options = {
          shouldBlockNextClick: false
        };
      }
      args.cleanup();
      if (options.shouldBlockNextClick) {
        var unbind = bindEvents(window, [{
          eventName: "click",
          fn: preventDefault,
          options: {
            once: true,
            passive: false,
            capture: true
          }
        }]);
        setTimeout(unbind);
      }
      completed();
      store.dispatch(drop({
        reason
      }));
    }
    return _extends({
      isActive: function isActive() {
        return _isActive({
          expected: "DRAGGING",
          phase,
          isLockActive,
          shouldWarn: false
        });
      },
      shouldRespectForcePress: getShouldRespectForcePress,
      drop: function drop5(options) {
        return finish("DROP", options);
      },
      cancel: function cancel(options) {
        return finish("CANCEL", options);
      }
    }, args.actions);
  }
  function fluidLift(clientSelection) {
    var move$1 = rafSchd$1(function(client) {
      tryDispatchWhenDragging(function() {
        return move({
          client
        });
      });
    });
    var api = lift$12({
      liftActionArgs: {
        id: draggableId,
        clientSelection,
        movementMode: "FLUID"
      },
      cleanup: function cleanup() {
        return move$1.cancel();
      },
      actions: {
        move: move$1
      }
    });
    return _extends({}, api, {
      move: move$1
    });
  }
  function snapLift() {
    var actions = {
      moveUp: function moveUp$1() {
        return tryDispatchWhenDragging(moveUp);
      },
      moveRight: function moveRight$1() {
        return tryDispatchWhenDragging(moveRight);
      },
      moveDown: function moveDown$1() {
        return tryDispatchWhenDragging(moveDown);
      },
      moveLeft: function moveLeft$1() {
        return tryDispatchWhenDragging(moveLeft);
      }
    };
    return lift$12({
      liftActionArgs: {
        id: draggableId,
        clientSelection: getBorderBoxCenterPosition(el),
        movementMode: "SNAP"
      },
      cleanup: noop,
      actions
    });
  }
  function abortPreDrag() {
    var shouldRelease = _isActive({
      expected: "PRE_DRAG",
      phase,
      isLockActive,
      shouldWarn: true
    });
    if (shouldRelease) {
      lockAPI.release();
    }
  }
  var preDrag = {
    isActive: function isActive() {
      return _isActive({
        expected: "PRE_DRAG",
        phase,
        isLockActive,
        shouldWarn: false
      });
    },
    shouldRespectForcePress: getShouldRespectForcePress,
    fluidLift,
    snapLift,
    abort: abortPreDrag
  };
  return preDrag;
}
var defaultSensors = [useMouseSensor, useKeyboardSensor, useTouchSensor];
function useSensorMarshal(_ref4) {
  var contextId = _ref4.contextId, store = _ref4.store, registry = _ref4.registry, customSensors = _ref4.customSensors, enableDefaultSensors = _ref4.enableDefaultSensors;
  var useSensors = [].concat(enableDefaultSensors ? defaultSensors : [], customSensors || []);
  var lockAPI = useState(function() {
    return create$1();
  })[0];
  var tryAbandonLock = useCallback(function tryAbandonLock2(previous, current) {
    if (previous.isDragging && !current.isDragging) {
      lockAPI.tryAbandon();
    }
  }, [lockAPI]);
  useIsomorphicLayoutEffect$1(function listenToStore() {
    var previous = store.getState();
    var unsubscribe = store.subscribe(function() {
      var current = store.getState();
      tryAbandonLock(previous, current);
      previous = current;
    });
    return unsubscribe;
  }, [lockAPI, store, tryAbandonLock]);
  useIsomorphicLayoutEffect$1(function() {
    return lockAPI.tryAbandon;
  }, [lockAPI.tryAbandon]);
  var canGetLock = useCallback(function(draggableId) {
    return canStart({
      lockAPI,
      registry,
      store,
      draggableId
    });
  }, [lockAPI, registry, store]);
  var tryGetLock = useCallback(function(draggableId, forceStop, options) {
    return tryStart({
      lockAPI,
      registry,
      contextId,
      store,
      draggableId,
      forceSensorStop: forceStop,
      sourceEvent: options && options.sourceEvent ? options.sourceEvent : null
    });
  }, [contextId, lockAPI, registry, store]);
  var findClosestDraggableId = useCallback(function(event) {
    return tryGetClosestDraggableIdFromEvent(contextId, event);
  }, [contextId]);
  var findOptionsForDraggable = useCallback(function(id2) {
    var entry = registry.draggable.findById(id2);
    return entry ? entry.options : null;
  }, [registry.draggable]);
  var tryReleaseLock = useCallback(function tryReleaseLock2() {
    if (!lockAPI.isClaimed()) {
      return;
    }
    lockAPI.tryAbandon();
    if (store.getState().phase !== "IDLE") {
      store.dispatch(flush());
    }
  }, [lockAPI, store]);
  var isLockClaimed = useCallback(lockAPI.isClaimed, [lockAPI]);
  var api = useMemo(function() {
    return {
      canGetLock,
      tryGetLock,
      findClosestDraggableId,
      findOptionsForDraggable,
      tryReleaseLock,
      isLockClaimed
    };
  }, [canGetLock, tryGetLock, findClosestDraggableId, findOptionsForDraggable, tryReleaseLock, isLockClaimed]);
  for (var i = 0; i < useSensors.length; i++) {
    useSensors[i](api);
  }
}
var createResponders = function createResponders2(props2) {
  return {
    onBeforeCapture: props2.onBeforeCapture,
    onBeforeDragStart: props2.onBeforeDragStart,
    onDragStart: props2.onDragStart,
    onDragEnd: props2.onDragEnd,
    onDragUpdate: props2.onDragUpdate
  };
};
function getStore(lazyRef) {
  !lazyRef.current ? invariant$1(false) : void 0;
  return lazyRef.current;
}
function App(props2) {
  var contextId = props2.contextId, setCallbacks = props2.setCallbacks, sensors = props2.sensors, nonce = props2.nonce, dragHandleUsageInstructions2 = props2.dragHandleUsageInstructions;
  var lazyStoreRef = useRef(null);
  var lastPropsRef = usePrevious(props2);
  var getResponders = useCallback(function() {
    return createResponders(lastPropsRef.current);
  }, [lastPropsRef]);
  var announce = useAnnouncer(contextId);
  var dragHandleUsageInstructionsId = useHiddenTextElement({
    contextId,
    text: dragHandleUsageInstructions2
  });
  var styleMarshal = useStyleMarshal(contextId, nonce);
  var lazyDispatch = useCallback(function(action) {
    getStore(lazyStoreRef).dispatch(action);
  }, []);
  var marshalCallbacks = useMemo(function() {
    return bindActionCreators$1({
      publishWhileDragging,
      updateDroppableScroll,
      updateDroppableIsEnabled,
      updateDroppableIsCombineEnabled,
      collectionStarting
    }, lazyDispatch);
  }, [lazyDispatch]);
  var registry = useRegistry();
  var dimensionMarshal = useMemo(function() {
    return createDimensionMarshal(registry, marshalCallbacks);
  }, [registry, marshalCallbacks]);
  var autoScroller = useMemo(function() {
    return createAutoScroller(_extends({
      scrollWindow,
      scrollDroppable: dimensionMarshal.scrollDroppable
    }, bindActionCreators$1({
      move
    }, lazyDispatch)));
  }, [dimensionMarshal.scrollDroppable, lazyDispatch]);
  var focusMarshal = useFocusMarshal(contextId);
  var store = useMemo(function() {
    return createStore$1({
      announce,
      autoScroller,
      dimensionMarshal,
      focusMarshal,
      getResponders,
      styleMarshal
    });
  }, [announce, autoScroller, dimensionMarshal, focusMarshal, getResponders, styleMarshal]);
  lazyStoreRef.current = store;
  var tryResetStore = useCallback(function() {
    var current = getStore(lazyStoreRef);
    var state = current.getState();
    if (state.phase !== "IDLE") {
      current.dispatch(flush());
    }
  }, []);
  var isDragging = useCallback(function() {
    var state = getStore(lazyStoreRef).getState();
    return state.isDragging || state.phase === "DROP_ANIMATING";
  }, []);
  var appCallbacks = useMemo(function() {
    return {
      isDragging,
      tryAbort: tryResetStore
    };
  }, [isDragging, tryResetStore]);
  setCallbacks(appCallbacks);
  var getCanLift = useCallback(function(id2) {
    return canStartDrag(getStore(lazyStoreRef).getState(), id2);
  }, []);
  var getIsMovementAllowed = useCallback(function() {
    return isMovementAllowed(getStore(lazyStoreRef).getState());
  }, []);
  var appContext = useMemo(function() {
    return {
      marshal: dimensionMarshal,
      focus: focusMarshal,
      contextId,
      canLift: getCanLift,
      isMovementAllowed: getIsMovementAllowed,
      dragHandleUsageInstructionsId,
      registry
    };
  }, [contextId, dimensionMarshal, dragHandleUsageInstructionsId, focusMarshal, getCanLift, getIsMovementAllowed, registry]);
  useSensorMarshal({
    contextId,
    store,
    registry,
    customSensors: sensors,
    enableDefaultSensors: props2.enableDefaultSensors !== false
  });
  useEffect(function() {
    return tryResetStore;
  }, [tryResetStore]);
  return React__default.createElement(AppContext.Provider, {
    value: appContext
  }, React__default.createElement(Provider, {
    context: StoreContext,
    store
  }, props2.children));
}
var count$1 = 0;
function useInstanceCount() {
  return useMemo(function() {
    return "" + count$1++;
  }, []);
}
function DragDropContext(props2) {
  var contextId = useInstanceCount();
  var dragHandleUsageInstructions2 = props2.dragHandleUsageInstructions || preset.dragHandleUsageInstructions;
  return React__default.createElement(ErrorBoundary, null, function(setCallbacks) {
    return React__default.createElement(App, {
      nonce: props2.nonce,
      contextId,
      setCallbacks,
      dragHandleUsageInstructions: dragHandleUsageInstructions2,
      enableDefaultSensors: props2.enableDefaultSensors,
      sensors: props2.sensors,
      onBeforeCapture: props2.onBeforeCapture,
      onBeforeDragStart: props2.onBeforeDragStart,
      onDragStart: props2.onDragStart,
      onDragUpdate: props2.onDragUpdate,
      onDragEnd: props2.onDragEnd
    }, props2.children);
  });
}
var isEqual$1 = function isEqual3(base) {
  return function(value) {
    return base === value;
  };
};
var isScroll = isEqual$1("scroll");
var isAuto = isEqual$1("auto");
var isEither = function isEither2(overflow, fn) {
  return fn(overflow.overflowX) || fn(overflow.overflowY);
};
var isElementScrollable = function isElementScrollable2(el) {
  var style2 = window.getComputedStyle(el);
  var overflow = {
    overflowX: style2.overflowX,
    overflowY: style2.overflowY
  };
  return isEither(overflow, isScroll) || isEither(overflow, isAuto);
};
var isBodyScrollable = function isBodyScrollable2() {
  {
    return false;
  }
};
var getClosestScrollable = function getClosestScrollable2(el) {
  if (el == null) {
    return null;
  }
  if (el === document.body) {
    return isBodyScrollable() ? el : null;
  }
  if (el === document.documentElement) {
    return null;
  }
  if (!isElementScrollable(el)) {
    return getClosestScrollable2(el.parentElement);
  }
  return el;
};
var getScroll$1 = function(el) {
  return {
    x: el.scrollLeft,
    y: el.scrollTop
  };
};
var getIsFixed = function getIsFixed2(el) {
  if (!el) {
    return false;
  }
  var style2 = window.getComputedStyle(el);
  if (style2.position === "fixed") {
    return true;
  }
  return getIsFixed2(el.parentElement);
};
var getEnv = function(start) {
  var closestScrollable = getClosestScrollable(start);
  var isFixedOnPage = getIsFixed(start);
  return {
    closestScrollable,
    isFixedOnPage
  };
};
var getDroppableDimension = function(_ref) {
  var descriptor = _ref.descriptor, isEnabled = _ref.isEnabled, isCombineEnabled = _ref.isCombineEnabled, isFixedOnPage = _ref.isFixedOnPage, direction = _ref.direction, client = _ref.client, page = _ref.page, closest3 = _ref.closest;
  var frame2 = function() {
    if (!closest3) {
      return null;
    }
    var scrollSize = closest3.scrollSize, frameClient = closest3.client;
    var maxScroll = getMaxScroll({
      scrollHeight: scrollSize.scrollHeight,
      scrollWidth: scrollSize.scrollWidth,
      height: frameClient.paddingBox.height,
      width: frameClient.paddingBox.width
    });
    return {
      pageMarginBox: closest3.page.marginBox,
      frameClient,
      scrollSize,
      shouldClipSubject: closest3.shouldClipSubject,
      scroll: {
        initial: closest3.scroll,
        current: closest3.scroll,
        max: maxScroll,
        diff: {
          value: origin,
          displacement: origin
        }
      }
    };
  }();
  var axis = direction === "vertical" ? vertical : horizontal;
  var subject = getSubject({
    page,
    withPlaceholder: null,
    axis,
    frame: frame2
  });
  var dimension = {
    descriptor,
    isCombineEnabled,
    isFixedOnPage,
    axis,
    isEnabled,
    client,
    page,
    frame: frame2,
    subject
  };
  return dimension;
};
var getClient = function getClient2(targetRef, closestScrollable) {
  var base = getBox(targetRef);
  if (!closestScrollable) {
    return base;
  }
  if (targetRef !== closestScrollable) {
    return base;
  }
  var top = base.paddingBox.top - closestScrollable.scrollTop;
  var left = base.paddingBox.left - closestScrollable.scrollLeft;
  var bottom = top + closestScrollable.scrollHeight;
  var right2 = left + closestScrollable.scrollWidth;
  var paddingBox = {
    top,
    right: right2,
    bottom,
    left
  };
  var borderBox = expand(paddingBox, base.border);
  var client = createBox({
    borderBox,
    margin: base.margin,
    border: base.border,
    padding: base.padding
  });
  return client;
};
var getDimension = function(_ref) {
  var ref = _ref.ref, descriptor = _ref.descriptor, env = _ref.env, windowScroll = _ref.windowScroll, direction = _ref.direction, isDropDisabled = _ref.isDropDisabled, isCombineEnabled = _ref.isCombineEnabled, shouldClipSubject = _ref.shouldClipSubject;
  var closestScrollable = env.closestScrollable;
  var client = getClient(ref, closestScrollable);
  var page = withScroll(client, windowScroll);
  var closest3 = function() {
    if (!closestScrollable) {
      return null;
    }
    var frameClient = getBox(closestScrollable);
    var scrollSize = {
      scrollHeight: closestScrollable.scrollHeight,
      scrollWidth: closestScrollable.scrollWidth
    };
    return {
      client: frameClient,
      page: withScroll(frameClient, windowScroll),
      scroll: getScroll$1(closestScrollable),
      scrollSize,
      shouldClipSubject
    };
  }();
  var dimension = getDroppableDimension({
    descriptor,
    isEnabled: !isDropDisabled,
    isCombineEnabled,
    isFixedOnPage: env.isFixedOnPage,
    direction,
    client,
    page,
    closest: closest3
  });
  return dimension;
};
var immediate = {
  passive: false
};
var delayed = {
  passive: true
};
var getListenerOptions = function(options) {
  return options.shouldPublishImmediately ? immediate : delayed;
};
function useRequiredContext(Context) {
  var result = useContext(Context);
  !result ? invariant$1(false) : void 0;
  return result;
}
var getClosestScrollableFromDrag = function getClosestScrollableFromDrag2(dragging) {
  return dragging && dragging.env.closestScrollable || null;
};
function useDroppablePublisher(args) {
  var whileDraggingRef = useRef(null);
  var appContext = useRequiredContext(AppContext);
  var uniqueId = useUniqueId("droppable");
  var registry = appContext.registry, marshal = appContext.marshal;
  var previousRef = usePrevious(args);
  var descriptor = useMemo(function() {
    return {
      id: args.droppableId,
      type: args.type,
      mode: args.mode
    };
  }, [args.droppableId, args.mode, args.type]);
  var publishedDescriptorRef = useRef(descriptor);
  var memoizedUpdateScroll = useMemo(function() {
    return memoizeOne(function(x, y2) {
      !whileDraggingRef.current ? invariant$1(false) : void 0;
      var scroll4 = {
        x,
        y: y2
      };
      marshal.updateDroppableScroll(descriptor.id, scroll4);
    });
  }, [descriptor.id, marshal]);
  var getClosestScroll = useCallback(function() {
    var dragging = whileDraggingRef.current;
    if (!dragging || !dragging.env.closestScrollable) {
      return origin;
    }
    return getScroll$1(dragging.env.closestScrollable);
  }, []);
  var updateScroll = useCallback(function() {
    var scroll4 = getClosestScroll();
    memoizedUpdateScroll(scroll4.x, scroll4.y);
  }, [getClosestScroll, memoizedUpdateScroll]);
  var scheduleScrollUpdate = useMemo(function() {
    return rafSchd$1(updateScroll);
  }, [updateScroll]);
  var onClosestScroll = useCallback(function() {
    var dragging = whileDraggingRef.current;
    var closest3 = getClosestScrollableFromDrag(dragging);
    !(dragging && closest3) ? invariant$1(false) : void 0;
    var options = dragging.scrollOptions;
    if (options.shouldPublishImmediately) {
      updateScroll();
      return;
    }
    scheduleScrollUpdate();
  }, [scheduleScrollUpdate, updateScroll]);
  var getDimensionAndWatchScroll = useCallback(function(windowScroll, options) {
    !!whileDraggingRef.current ? invariant$1(false) : void 0;
    var previous = previousRef.current;
    var ref = previous.getDroppableRef();
    !ref ? invariant$1(false) : void 0;
    var env = getEnv(ref);
    var dragging = {
      ref,
      descriptor,
      env,
      scrollOptions: options
    };
    whileDraggingRef.current = dragging;
    var dimension = getDimension({
      ref,
      descriptor,
      env,
      windowScroll,
      direction: previous.direction,
      isDropDisabled: previous.isDropDisabled,
      isCombineEnabled: previous.isCombineEnabled,
      shouldClipSubject: !previous.ignoreContainerClipping
    });
    var scrollable = env.closestScrollable;
    if (scrollable) {
      scrollable.setAttribute(scrollContainer.contextId, appContext.contextId);
      scrollable.addEventListener("scroll", onClosestScroll, getListenerOptions(dragging.scrollOptions));
    }
    return dimension;
  }, [appContext.contextId, descriptor, onClosestScroll, previousRef]);
  var getScrollWhileDragging = useCallback(function() {
    var dragging = whileDraggingRef.current;
    var closest3 = getClosestScrollableFromDrag(dragging);
    !(dragging && closest3) ? invariant$1(false) : void 0;
    return getScroll$1(closest3);
  }, []);
  var dragStopped = useCallback(function() {
    var dragging = whileDraggingRef.current;
    !dragging ? invariant$1(false) : void 0;
    var closest3 = getClosestScrollableFromDrag(dragging);
    whileDraggingRef.current = null;
    if (!closest3) {
      return;
    }
    scheduleScrollUpdate.cancel();
    closest3.removeAttribute(scrollContainer.contextId);
    closest3.removeEventListener("scroll", onClosestScroll, getListenerOptions(dragging.scrollOptions));
  }, [onClosestScroll, scheduleScrollUpdate]);
  var scroll3 = useCallback(function(change) {
    var dragging = whileDraggingRef.current;
    !dragging ? invariant$1(false) : void 0;
    var closest3 = getClosestScrollableFromDrag(dragging);
    !closest3 ? invariant$1(false) : void 0;
    closest3.scrollTop += change.y;
    closest3.scrollLeft += change.x;
  }, []);
  var callbacks = useMemo(function() {
    return {
      getDimensionAndWatchScroll,
      getScrollWhileDragging,
      dragStopped,
      scroll: scroll3
    };
  }, [dragStopped, getDimensionAndWatchScroll, getScrollWhileDragging, scroll3]);
  var entry = useMemo(function() {
    return {
      uniqueId,
      descriptor,
      callbacks
    };
  }, [callbacks, descriptor, uniqueId]);
  useIsomorphicLayoutEffect$1(function() {
    publishedDescriptorRef.current = entry.descriptor;
    registry.droppable.register(entry);
    return function() {
      if (whileDraggingRef.current) {
        dragStopped();
      }
      registry.droppable.unregister(entry);
    };
  }, [callbacks, descriptor, dragStopped, entry, marshal, registry.droppable]);
  useIsomorphicLayoutEffect$1(function() {
    if (!whileDraggingRef.current) {
      return;
    }
    marshal.updateDroppableIsEnabled(publishedDescriptorRef.current.id, !args.isDropDisabled);
  }, [args.isDropDisabled, marshal]);
  useIsomorphicLayoutEffect$1(function() {
    if (!whileDraggingRef.current) {
      return;
    }
    marshal.updateDroppableIsCombineEnabled(publishedDescriptorRef.current.id, args.isCombineEnabled);
  }, [args.isCombineEnabled, marshal]);
}
function noop$2() {
}
var empty = {
  width: 0,
  height: 0,
  margin: noSpacing
};
var getSize = function getSize2(_ref) {
  var isAnimatingOpenOnMount = _ref.isAnimatingOpenOnMount, placeholder = _ref.placeholder, animate2 = _ref.animate;
  if (isAnimatingOpenOnMount) {
    return empty;
  }
  if (animate2 === "close") {
    return empty;
  }
  return {
    height: placeholder.client.borderBox.height,
    width: placeholder.client.borderBox.width,
    margin: placeholder.client.margin
  };
};
var getStyle = function getStyle2(_ref2) {
  var isAnimatingOpenOnMount = _ref2.isAnimatingOpenOnMount, placeholder = _ref2.placeholder, animate2 = _ref2.animate;
  var size = getSize({
    isAnimatingOpenOnMount,
    placeholder,
    animate: animate2
  });
  return {
    display: placeholder.display,
    boxSizing: "border-box",
    width: size.width,
    height: size.height,
    marginTop: size.margin.top,
    marginRight: size.margin.right,
    marginBottom: size.margin.bottom,
    marginLeft: size.margin.left,
    flexShrink: "0",
    flexGrow: "0",
    pointerEvents: "none",
    transition: animate2 !== "none" ? transitions.placeholder : null
  };
};
function Placeholder(props2) {
  var animateOpenTimerRef = useRef(null);
  var tryClearAnimateOpenTimer = useCallback(function() {
    if (!animateOpenTimerRef.current) {
      return;
    }
    clearTimeout(animateOpenTimerRef.current);
    animateOpenTimerRef.current = null;
  }, []);
  var animate2 = props2.animate, onTransitionEnd = props2.onTransitionEnd, onClose = props2.onClose, contextId = props2.contextId;
  var _useState = useState(props2.animate === "open"), isAnimatingOpenOnMount = _useState[0], setIsAnimatingOpenOnMount = _useState[1];
  useEffect(function() {
    if (!isAnimatingOpenOnMount) {
      return noop$2;
    }
    if (animate2 !== "open") {
      tryClearAnimateOpenTimer();
      setIsAnimatingOpenOnMount(false);
      return noop$2;
    }
    if (animateOpenTimerRef.current) {
      return noop$2;
    }
    animateOpenTimerRef.current = setTimeout(function() {
      animateOpenTimerRef.current = null;
      setIsAnimatingOpenOnMount(false);
    });
    return tryClearAnimateOpenTimer;
  }, [animate2, isAnimatingOpenOnMount, tryClearAnimateOpenTimer]);
  var onSizeChangeEnd = useCallback(function(event) {
    if (event.propertyName !== "height") {
      return;
    }
    onTransitionEnd();
    if (animate2 === "close") {
      onClose();
    }
  }, [animate2, onClose, onTransitionEnd]);
  var style2 = getStyle({
    isAnimatingOpenOnMount,
    animate: props2.animate,
    placeholder: props2.placeholder
  });
  return React__default.createElement(props2.placeholder.tagName, {
    style: style2,
    "data-rbd-placeholder-context-id": contextId,
    onTransitionEnd: onSizeChangeEnd,
    ref: props2.innerRef
  });
}
var Placeholder$1 = React__default.memo(Placeholder);
var DroppableContext = React__default.createContext(null);
var AnimateInOut = function(_React$PureComponent) {
  _inheritsLoose(AnimateInOut2, _React$PureComponent);
  function AnimateInOut2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;
    _this.state = {
      isVisible: Boolean(_this.props.on),
      data: _this.props.on,
      animate: _this.props.shouldAnimate && _this.props.on ? "open" : "none"
    };
    _this.onClose = function() {
      if (_this.state.animate !== "close") {
        return;
      }
      _this.setState({
        isVisible: false
      });
    };
    return _this;
  }
  AnimateInOut2.getDerivedStateFromProps = function getDerivedStateFromProps(props2, state) {
    if (!props2.shouldAnimate) {
      return {
        isVisible: Boolean(props2.on),
        data: props2.on,
        animate: "none"
      };
    }
    if (props2.on) {
      return {
        isVisible: true,
        data: props2.on,
        animate: "open"
      };
    }
    if (state.isVisible) {
      return {
        isVisible: true,
        data: state.data,
        animate: "close"
      };
    }
    return {
      isVisible: false,
      animate: "close",
      data: null
    };
  };
  var _proto = AnimateInOut2.prototype;
  _proto.render = function render() {
    if (!this.state.isVisible) {
      return null;
    }
    var provided = {
      onClose: this.onClose,
      data: this.state.data,
      animate: this.state.animate
    };
    return this.props.children(provided);
  };
  return AnimateInOut2;
}(React__default.PureComponent);
var zIndexOptions = {
  dragging: 5e3,
  dropAnimating: 4500
};
var getDraggingTransition = function getDraggingTransition2(shouldAnimateDragMovement, dropping) {
  if (dropping) {
    return transitions.drop(dropping.duration);
  }
  if (shouldAnimateDragMovement) {
    return transitions.snap;
  }
  return transitions.fluid;
};
var getDraggingOpacity = function getDraggingOpacity2(isCombining, isDropAnimating) {
  if (!isCombining) {
    return null;
  }
  return isDropAnimating ? combine.opacity.drop : combine.opacity.combining;
};
var getShouldDraggingAnimate = function getShouldDraggingAnimate2(dragging) {
  if (dragging.forceShouldAnimate != null) {
    return dragging.forceShouldAnimate;
  }
  return dragging.mode === "SNAP";
};
function getDraggingStyle(dragging) {
  var dimension = dragging.dimension;
  var box = dimension.client;
  var offset3 = dragging.offset, combineWith = dragging.combineWith, dropping = dragging.dropping;
  var isCombining = Boolean(combineWith);
  var shouldAnimate = getShouldDraggingAnimate(dragging);
  var isDropAnimating = Boolean(dropping);
  var transform = isDropAnimating ? transforms.drop(offset3, isCombining) : transforms.moveTo(offset3);
  var style2 = {
    position: "fixed",
    top: box.marginBox.top,
    left: box.marginBox.left,
    boxSizing: "border-box",
    width: box.borderBox.width,
    height: box.borderBox.height,
    transition: getDraggingTransition(shouldAnimate, dropping),
    transform,
    opacity: getDraggingOpacity(isCombining, isDropAnimating),
    zIndex: isDropAnimating ? zIndexOptions.dropAnimating : zIndexOptions.dragging,
    pointerEvents: "none"
  };
  return style2;
}
function getSecondaryStyle(secondary) {
  return {
    transform: transforms.moveTo(secondary.offset),
    transition: secondary.shouldAnimateDisplacement ? null : "none"
  };
}
function getStyle$1(mapped) {
  return mapped.type === "DRAGGING" ? getDraggingStyle(mapped) : getSecondaryStyle(mapped);
}
function getDimension$1(descriptor, el, windowScroll) {
  if (windowScroll === void 0) {
    windowScroll = origin;
  }
  var computedStyles = window.getComputedStyle(el);
  var borderBox = el.getBoundingClientRect();
  var client = calculateBox(borderBox, computedStyles);
  var page = withScroll(client, windowScroll);
  var placeholder = {
    client,
    tagName: el.tagName.toLowerCase(),
    display: computedStyles.display
  };
  var displaceBy = {
    x: client.marginBox.width,
    y: client.marginBox.height
  };
  var dimension = {
    descriptor,
    placeholder,
    displaceBy,
    client,
    page
  };
  return dimension;
}
function useDraggablePublisher(args) {
  var uniqueId = useUniqueId("draggable");
  var descriptor = args.descriptor, registry = args.registry, getDraggableRef = args.getDraggableRef, canDragInteractiveElements = args.canDragInteractiveElements, shouldRespectForcePress = args.shouldRespectForcePress, isEnabled = args.isEnabled;
  var options = useMemo(function() {
    return {
      canDragInteractiveElements,
      shouldRespectForcePress,
      isEnabled
    };
  }, [canDragInteractiveElements, isEnabled, shouldRespectForcePress]);
  var getDimension2 = useCallback(function(windowScroll) {
    var el = getDraggableRef();
    !el ? invariant$1(false) : void 0;
    return getDimension$1(descriptor, el, windowScroll);
  }, [descriptor, getDraggableRef]);
  var entry = useMemo(function() {
    return {
      uniqueId,
      descriptor,
      options,
      getDimension: getDimension2
    };
  }, [descriptor, getDimension2, options, uniqueId]);
  var publishedRef = useRef(entry);
  var isFirstPublishRef = useRef(true);
  useIsomorphicLayoutEffect$1(function() {
    registry.draggable.register(publishedRef.current);
    return function() {
      return registry.draggable.unregister(publishedRef.current);
    };
  }, [registry.draggable]);
  useIsomorphicLayoutEffect$1(function() {
    if (isFirstPublishRef.current) {
      isFirstPublishRef.current = false;
      return;
    }
    var last = publishedRef.current;
    publishedRef.current = entry;
    registry.draggable.update(entry, last);
  }, [entry, registry.draggable]);
}
function preventHtml5Dnd(event) {
  event.preventDefault();
}
function Draggable(props2) {
  var ref = useRef(null);
  var setRef = useCallback(function(el) {
    ref.current = el;
  }, []);
  var getRef = useCallback(function() {
    return ref.current;
  }, []);
  var _useRequiredContext = useRequiredContext(AppContext), contextId = _useRequiredContext.contextId, dragHandleUsageInstructionsId = _useRequiredContext.dragHandleUsageInstructionsId, registry = _useRequiredContext.registry;
  var _useRequiredContext2 = useRequiredContext(DroppableContext), type = _useRequiredContext2.type, droppableId = _useRequiredContext2.droppableId;
  var descriptor = useMemo(function() {
    return {
      id: props2.draggableId,
      index: props2.index,
      type,
      droppableId
    };
  }, [props2.draggableId, props2.index, type, droppableId]);
  var children = props2.children, draggableId = props2.draggableId, isEnabled = props2.isEnabled, shouldRespectForcePress = props2.shouldRespectForcePress, canDragInteractiveElements = props2.canDragInteractiveElements, isClone = props2.isClone, mapped = props2.mapped, dropAnimationFinishedAction = props2.dropAnimationFinished;
  if (!isClone) {
    var forPublisher = useMemo(function() {
      return {
        descriptor,
        registry,
        getDraggableRef: getRef,
        canDragInteractiveElements,
        shouldRespectForcePress,
        isEnabled
      };
    }, [descriptor, registry, getRef, canDragInteractiveElements, shouldRespectForcePress, isEnabled]);
    useDraggablePublisher(forPublisher);
  }
  var dragHandleProps = useMemo(function() {
    return isEnabled ? {
      tabIndex: 0,
      role: "button",
      "aria-describedby": dragHandleUsageInstructionsId,
      "data-rbd-drag-handle-draggable-id": draggableId,
      "data-rbd-drag-handle-context-id": contextId,
      draggable: false,
      onDragStart: preventHtml5Dnd
    } : null;
  }, [contextId, dragHandleUsageInstructionsId, draggableId, isEnabled]);
  var onMoveEnd = useCallback(function(event) {
    if (mapped.type !== "DRAGGING") {
      return;
    }
    if (!mapped.dropping) {
      return;
    }
    if (event.propertyName !== "transform") {
      return;
    }
    dropAnimationFinishedAction();
  }, [dropAnimationFinishedAction, mapped]);
  var provided = useMemo(function() {
    var style2 = getStyle$1(mapped);
    var onTransitionEnd = mapped.type === "DRAGGING" && mapped.dropping ? onMoveEnd : null;
    var result = {
      innerRef: setRef,
      draggableProps: {
        "data-rbd-draggable-context-id": contextId,
        "data-rbd-draggable-id": draggableId,
        style: style2,
        onTransitionEnd
      },
      dragHandleProps
    };
    return result;
  }, [contextId, dragHandleProps, draggableId, mapped, onMoveEnd, setRef]);
  var rubric = useMemo(function() {
    return {
      draggableId: descriptor.id,
      type: descriptor.type,
      source: {
        index: descriptor.index,
        droppableId: descriptor.droppableId
      }
    };
  }, [descriptor.droppableId, descriptor.id, descriptor.index, descriptor.type]);
  return children(provided, mapped.snapshot, rubric);
}
var isStrictEqual = function(a2, b2) {
  return a2 === b2;
};
var whatIsDraggedOverFromResult = function(result) {
  var combine2 = result.combine, destination = result.destination;
  if (destination) {
    return destination.droppableId;
  }
  if (combine2) {
    return combine2.droppableId;
  }
  return null;
};
var getCombineWithFromResult = function getCombineWithFromResult2(result) {
  return result.combine ? result.combine.draggableId : null;
};
var getCombineWithFromImpact = function getCombineWithFromImpact2(impact) {
  return impact.at && impact.at.type === "COMBINE" ? impact.at.combine.draggableId : null;
};
function getDraggableSelector() {
  var memoizedOffset = memoizeOne(function(x, y2) {
    return {
      x,
      y: y2
    };
  });
  var getMemoizedSnapshot = memoizeOne(function(mode, isClone, draggingOver, combineWith, dropping) {
    return {
      isDragging: true,
      isClone,
      isDropAnimating: Boolean(dropping),
      dropAnimation: dropping,
      mode,
      draggingOver,
      combineWith,
      combineTargetFor: null
    };
  });
  var getMemoizedProps = memoizeOne(function(offset3, mode, dimension, isClone, draggingOver, combineWith, forceShouldAnimate) {
    return {
      mapped: {
        type: "DRAGGING",
        dropping: null,
        draggingOver,
        combineWith,
        mode,
        offset: offset3,
        dimension,
        forceShouldAnimate,
        snapshot: getMemoizedSnapshot(mode, isClone, draggingOver, combineWith, null)
      }
    };
  });
  var selector = function selector2(state, ownProps) {
    if (state.isDragging) {
      if (state.critical.draggable.id !== ownProps.draggableId) {
        return null;
      }
      var offset3 = state.current.client.offset;
      var dimension = state.dimensions.draggables[ownProps.draggableId];
      var draggingOver = whatIsDraggedOver(state.impact);
      var combineWith = getCombineWithFromImpact(state.impact);
      var forceShouldAnimate = state.forceShouldAnimate;
      return getMemoizedProps(memoizedOffset(offset3.x, offset3.y), state.movementMode, dimension, ownProps.isClone, draggingOver, combineWith, forceShouldAnimate);
    }
    if (state.phase === "DROP_ANIMATING") {
      var completed = state.completed;
      if (completed.result.draggableId !== ownProps.draggableId) {
        return null;
      }
      var isClone = ownProps.isClone;
      var _dimension = state.dimensions.draggables[ownProps.draggableId];
      var result = completed.result;
      var mode = result.mode;
      var _draggingOver = whatIsDraggedOverFromResult(result);
      var _combineWith = getCombineWithFromResult(result);
      var duration = state.dropDuration;
      var dropping = {
        duration,
        curve: curves.drop,
        moveTo: state.newHomeClientOffset,
        opacity: _combineWith ? combine.opacity.drop : null,
        scale: _combineWith ? combine.scale.drop : null
      };
      return {
        mapped: {
          type: "DRAGGING",
          offset: state.newHomeClientOffset,
          dimension: _dimension,
          dropping,
          draggingOver: _draggingOver,
          combineWith: _combineWith,
          mode,
          forceShouldAnimate: null,
          snapshot: getMemoizedSnapshot(mode, isClone, _draggingOver, _combineWith, dropping)
        }
      };
    }
    return null;
  };
  return selector;
}
function getSecondarySnapshot(combineTargetFor) {
  return {
    isDragging: false,
    isDropAnimating: false,
    isClone: false,
    dropAnimation: null,
    mode: null,
    draggingOver: null,
    combineTargetFor,
    combineWith: null
  };
}
var atRest = {
  mapped: {
    type: "SECONDARY",
    offset: origin,
    combineTargetFor: null,
    shouldAnimateDisplacement: true,
    snapshot: getSecondarySnapshot(null)
  }
};
function getSecondarySelector() {
  var memoizedOffset = memoizeOne(function(x, y2) {
    return {
      x,
      y: y2
    };
  });
  var getMemoizedSnapshot = memoizeOne(getSecondarySnapshot);
  var getMemoizedProps = memoizeOne(function(offset3, combineTargetFor, shouldAnimateDisplacement) {
    if (combineTargetFor === void 0) {
      combineTargetFor = null;
    }
    return {
      mapped: {
        type: "SECONDARY",
        offset: offset3,
        combineTargetFor,
        shouldAnimateDisplacement,
        snapshot: getMemoizedSnapshot(combineTargetFor)
      }
    };
  });
  var getFallback = function getFallback2(combineTargetFor) {
    return combineTargetFor ? getMemoizedProps(origin, combineTargetFor, true) : null;
  };
  var getProps = function getProps2(ownId, draggingId, impact, afterCritical) {
    var visualDisplacement = impact.displaced.visible[ownId];
    var isAfterCriticalInVirtualList = Boolean(afterCritical.inVirtualList && afterCritical.effected[ownId]);
    var combine2 = tryGetCombine(impact);
    var combineTargetFor = combine2 && combine2.draggableId === ownId ? draggingId : null;
    if (!visualDisplacement) {
      if (!isAfterCriticalInVirtualList) {
        return getFallback(combineTargetFor);
      }
      if (impact.displaced.invisible[ownId]) {
        return null;
      }
      var change = negate(afterCritical.displacedBy.point);
      var _offset = memoizedOffset(change.x, change.y);
      return getMemoizedProps(_offset, combineTargetFor, true);
    }
    if (isAfterCriticalInVirtualList) {
      return getFallback(combineTargetFor);
    }
    var displaceBy = impact.displacedBy.point;
    var offset3 = memoizedOffset(displaceBy.x, displaceBy.y);
    return getMemoizedProps(offset3, combineTargetFor, visualDisplacement.shouldAnimate);
  };
  var selector = function selector2(state, ownProps) {
    if (state.isDragging) {
      if (state.critical.draggable.id === ownProps.draggableId) {
        return null;
      }
      return getProps(ownProps.draggableId, state.critical.draggable.id, state.impact, state.afterCritical);
    }
    if (state.phase === "DROP_ANIMATING") {
      var completed = state.completed;
      if (completed.result.draggableId === ownProps.draggableId) {
        return null;
      }
      return getProps(ownProps.draggableId, completed.result.draggableId, completed.impact, completed.afterCritical);
    }
    return null;
  };
  return selector;
}
var makeMapStateToProps = function makeMapStateToProps2() {
  var draggingSelector = getDraggableSelector();
  var secondarySelector = getSecondarySelector();
  var selector = function selector2(state, ownProps) {
    return draggingSelector(state, ownProps) || secondarySelector(state, ownProps) || atRest;
  };
  return selector;
};
var mapDispatchToProps = {
  dropAnimationFinished
};
var ConnectedDraggable = connect(makeMapStateToProps, mapDispatchToProps, null, {
  context: StoreContext,
  pure: true,
  areStatePropsEqual: isStrictEqual
})(Draggable);
function PrivateDraggable(props2) {
  var droppableContext = useRequiredContext(DroppableContext);
  var isUsingCloneFor = droppableContext.isUsingCloneFor;
  if (isUsingCloneFor === props2.draggableId && !props2.isClone) {
    return null;
  }
  return React__default.createElement(ConnectedDraggable, props2);
}
function PublicDraggable(props2) {
  var isEnabled = typeof props2.isDragDisabled === "boolean" ? !props2.isDragDisabled : true;
  var canDragInteractiveElements = Boolean(props2.disableInteractiveElementBlocking);
  var shouldRespectForcePress = Boolean(props2.shouldRespectForcePress);
  return React__default.createElement(PrivateDraggable, _extends({}, props2, {
    isClone: false,
    isEnabled,
    canDragInteractiveElements,
    shouldRespectForcePress
  }));
}
function Droppable(props2) {
  var appContext = useContext(AppContext);
  !appContext ? invariant$1(false) : void 0;
  var contextId = appContext.contextId, isMovementAllowed2 = appContext.isMovementAllowed;
  var droppableRef = useRef(null);
  var placeholderRef = useRef(null);
  var children = props2.children, droppableId = props2.droppableId, type = props2.type, mode = props2.mode, direction = props2.direction, ignoreContainerClipping = props2.ignoreContainerClipping, isDropDisabled = props2.isDropDisabled, isCombineEnabled = props2.isCombineEnabled, snapshot = props2.snapshot, useClone = props2.useClone, updateViewportMaxScroll3 = props2.updateViewportMaxScroll, getContainerForClone = props2.getContainerForClone;
  var getDroppableRef = useCallback(function() {
    return droppableRef.current;
  }, []);
  var setDroppableRef = useCallback(function(value) {
    droppableRef.current = value;
  }, []);
  useCallback(function() {
    return placeholderRef.current;
  }, []);
  var setPlaceholderRef = useCallback(function(value) {
    placeholderRef.current = value;
  }, []);
  var onPlaceholderTransitionEnd = useCallback(function() {
    if (isMovementAllowed2()) {
      updateViewportMaxScroll3({
        maxScroll: getMaxWindowScroll()
      });
    }
  }, [isMovementAllowed2, updateViewportMaxScroll3]);
  useDroppablePublisher({
    droppableId,
    type,
    mode,
    direction,
    isDropDisabled,
    isCombineEnabled,
    ignoreContainerClipping,
    getDroppableRef
  });
  var placeholder = React__default.createElement(AnimateInOut, {
    on: props2.placeholder,
    shouldAnimate: props2.shouldAnimatePlaceholder
  }, function(_ref) {
    var onClose = _ref.onClose, data = _ref.data, animate2 = _ref.animate;
    return React__default.createElement(Placeholder$1, {
      placeholder: data,
      onClose,
      innerRef: setPlaceholderRef,
      animate: animate2,
      contextId,
      onTransitionEnd: onPlaceholderTransitionEnd
    });
  });
  var provided = useMemo(function() {
    return {
      innerRef: setDroppableRef,
      placeholder,
      droppableProps: {
        "data-rbd-droppable-id": droppableId,
        "data-rbd-droppable-context-id": contextId
      }
    };
  }, [contextId, droppableId, placeholder, setDroppableRef]);
  var isUsingCloneFor = useClone ? useClone.dragging.draggableId : null;
  var droppableContext = useMemo(function() {
    return {
      droppableId,
      type,
      isUsingCloneFor
    };
  }, [droppableId, isUsingCloneFor, type]);
  function getClone() {
    if (!useClone) {
      return null;
    }
    var dragging = useClone.dragging, render = useClone.render;
    var node = React__default.createElement(PrivateDraggable, {
      draggableId: dragging.draggableId,
      index: dragging.source.index,
      isClone: true,
      isEnabled: true,
      shouldRespectForcePress: false,
      canDragInteractiveElements: true
    }, function(draggableProvided, draggableSnapshot) {
      return render(draggableProvided, draggableSnapshot, dragging);
    });
    return ReactDOM.createPortal(node, getContainerForClone());
  }
  return React__default.createElement(DroppableContext.Provider, {
    value: droppableContext
  }, children(provided, snapshot), getClone());
}
var isMatchingType = function isMatchingType2(type, critical) {
  return type === critical.droppable.type;
};
var getDraggable = function getDraggable2(critical, dimensions) {
  return dimensions.draggables[critical.draggable.id];
};
var makeMapStateToProps$1 = function makeMapStateToProps3() {
  var idleWithAnimation = {
    placeholder: null,
    shouldAnimatePlaceholder: true,
    snapshot: {
      isDraggingOver: false,
      draggingOverWith: null,
      draggingFromThisWith: null,
      isUsingPlaceholder: false
    },
    useClone: null
  };
  var idleWithoutAnimation = _extends({}, idleWithAnimation, {
    shouldAnimatePlaceholder: false
  });
  var getDraggableRubric = memoizeOne(function(descriptor) {
    return {
      draggableId: descriptor.id,
      type: descriptor.type,
      source: {
        index: descriptor.index,
        droppableId: descriptor.droppableId
      }
    };
  });
  var getMapProps = memoizeOne(function(id2, isEnabled, isDraggingOverForConsumer, isDraggingOverForImpact, dragging, renderClone) {
    var draggableId = dragging.descriptor.id;
    var isHome = dragging.descriptor.droppableId === id2;
    if (isHome) {
      var useClone = renderClone ? {
        render: renderClone,
        dragging: getDraggableRubric(dragging.descriptor)
      } : null;
      var _snapshot = {
        isDraggingOver: isDraggingOverForConsumer,
        draggingOverWith: isDraggingOverForConsumer ? draggableId : null,
        draggingFromThisWith: draggableId,
        isUsingPlaceholder: true
      };
      return {
        placeholder: dragging.placeholder,
        shouldAnimatePlaceholder: false,
        snapshot: _snapshot,
        useClone
      };
    }
    if (!isEnabled) {
      return idleWithoutAnimation;
    }
    if (!isDraggingOverForImpact) {
      return idleWithAnimation;
    }
    var snapshot = {
      isDraggingOver: isDraggingOverForConsumer,
      draggingOverWith: draggableId,
      draggingFromThisWith: null,
      isUsingPlaceholder: true
    };
    return {
      placeholder: dragging.placeholder,
      shouldAnimatePlaceholder: true,
      snapshot,
      useClone: null
    };
  });
  var selector = function selector2(state, ownProps) {
    var id2 = ownProps.droppableId;
    var type = ownProps.type;
    var isEnabled = !ownProps.isDropDisabled;
    var renderClone = ownProps.renderClone;
    if (state.isDragging) {
      var critical = state.critical;
      if (!isMatchingType(type, critical)) {
        return idleWithoutAnimation;
      }
      var dragging = getDraggable(critical, state.dimensions);
      var isDraggingOver = whatIsDraggedOver(state.impact) === id2;
      return getMapProps(id2, isEnabled, isDraggingOver, isDraggingOver, dragging, renderClone);
    }
    if (state.phase === "DROP_ANIMATING") {
      var completed = state.completed;
      if (!isMatchingType(type, completed.critical)) {
        return idleWithoutAnimation;
      }
      var _dragging = getDraggable(completed.critical, state.dimensions);
      return getMapProps(id2, isEnabled, whatIsDraggedOverFromResult(completed.result) === id2, whatIsDraggedOver(completed.impact) === id2, _dragging, renderClone);
    }
    if (state.phase === "IDLE" && state.completed && !state.shouldFlush) {
      var _completed = state.completed;
      if (!isMatchingType(type, _completed.critical)) {
        return idleWithoutAnimation;
      }
      var wasOver = whatIsDraggedOver(_completed.impact) === id2;
      var wasCombining = Boolean(_completed.impact.at && _completed.impact.at.type === "COMBINE");
      var isHome = _completed.critical.droppable.id === id2;
      if (wasOver) {
        return wasCombining ? idleWithAnimation : idleWithoutAnimation;
      }
      if (isHome) {
        return idleWithAnimation;
      }
      return idleWithoutAnimation;
    }
    return idleWithoutAnimation;
  };
  return selector;
};
var mapDispatchToProps$1 = {
  updateViewportMaxScroll
};
function getBody() {
  !document.body ? invariant$1(false) : void 0;
  return document.body;
}
var defaultProps = {
  mode: "standard",
  type: "DEFAULT",
  direction: "vertical",
  isDropDisabled: false,
  isCombineEnabled: false,
  ignoreContainerClipping: false,
  renderClone: null,
  getContainerForClone: getBody
};
var ConnectedDroppable = connect(makeMapStateToProps$1, mapDispatchToProps$1, null, {
  context: StoreContext,
  pure: true,
  areStatePropsEqual: isStrictEqual
})(Droppable);
ConnectedDroppable.defaultProps = defaultProps;
const Column = ({
  title: title2,
  color: color2,
  position: position3,
  _id,
  items,
  createdAt,
  updatedAt,
  dragHandleProps,
  i18n,
  index,
  _addItem,
  _deleteItem,
  _editItem,
  _deleteColumn,
  _editColumn,
  isDragging,
  newColumn,
  setNewColumn,
  _isEditingColumn,
  _isEditingItem,
  editList,
  locked: locked2
}) => {
  const [newItem, setNewItem] = useState(false);
  return /* @__PURE__ */ React__default.createElement("div", {
    "data-testid": "Column",
    className: styles$3.column
  }, /* @__PURE__ */ React__default.createElement(Header, {
    dragHandleProps,
    text: title2,
    itemCount: items.length,
    color: color2,
    _deleteColumn,
    _editColumn,
    columnIndex: index,
    isDragging,
    i18n,
    newColumn,
    setNewColumn,
    locked: locked2,
    _isEditingColumn
  }), /* @__PURE__ */ React__default.createElement(ConnectedDroppable, {
    droppableId: String(index),
    key: _id,
    type: "COLUMN"
  }, (provided) => /* @__PURE__ */ React__default.createElement("div", __spreadValues({
    style: { width: "100%" },
    ref: provided.innerRef
  }, provided.droppableProps), items.sort((itemA, itemB) => itemA.position - itemB.position).map((item2, itemIndex) => /* @__PURE__ */ React__default.createElement(PublicDraggable, {
    draggableId: item2._id,
    key: item2._id,
    index: itemIndex,
    isDragDisabled: editList.indexOf(item2._id) !== -1
  }, (provided2, snapshot) => /* @__PURE__ */ React__default.createElement("div", __spreadValues(__spreadValues({
    ref: provided2.innerRef
  }, provided2.draggableProps), provided2.dragHandleProps), /* @__PURE__ */ React__default.createElement(Item, {
    text: item2.text,
    position: item2.position,
    _id: item2._id,
    columnId: item2.columnId,
    createdAt: item2.createdAt,
    updatedAt: item2.updatedAt,
    isDragging: snapshot.isDragging,
    _deleteItem,
    itemIndex,
    columnIndex: index,
    _editItem,
    i18n,
    newItem: itemIndex === items.length - 1 ? newItem : false,
    setNewItem,
    provided: provided2,
    _isEditingItem,
    locked: editList.indexOf(item2._id) !== -1
  }), provided2.placeholder))), /* @__PURE__ */ React__default.createElement("div", {
    style: { height: "1px" }
  }), provided.placeholder)), /* @__PURE__ */ React__default.createElement(Add, {
    text: (i18n == null ? void 0 : i18n.addNew) || "Add new",
    onClick: () => {
      _addItem(index, _id);
      setNewItem(true);
    }
  }));
};
const Board = ({
  columns,
  setColumns,
  title: title2,
  projectId,
  _id,
  createdAt,
  updatedAt,
  i18n,
  emitter,
  editList
}) => {
  const [newColumn, setNewColumn] = useState(false);
  const onDragEnd3 = (result) => {
    if (!result.destination) {
      return;
    }
    const source = result.source;
    const destination = result.destination;
    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }
    if (result.type === "BOARD") {
      let ordered = reorder(columns, source.index, destination.index);
      ordered = setPosition(ordered);
      setColumns((prev) => __spreadProps(__spreadValues({}, prev), { columns: ordered }));
      if (emitter)
        emitter.emit("REORDER_COLUMNS", {
          boardId: _id,
          columns: ordered
        });
    } else if (result.type === "COLUMN") {
      const data = reorderColumns(columns, source, destination);
      setColumns((prev) => __spreadProps(__spreadValues({}, prev), { columns: data }));
      let current = [...data[source.droppableId].items];
      [...data[destination.droppableId].items];
      current[source.index];
      if (emitter)
        emitter.emit("REORDER_COLUMNS", {
          boardId: _id,
          columns: data
        });
    }
  };
  const reorderColumns = (columns2, source, destination) => {
    const current = [...columns2[source.droppableId].items];
    const next = [...columns2[destination.droppableId].items];
    const target = current[source.index];
    if (source.droppableId === destination.droppableId) {
      const reordered = reorder(current, source.index, destination.index);
      columns2[source.droppableId].items = setPosition(reordered);
      return columns2;
    }
    current.splice(source.index, 1);
    next.splice(destination.index, 0, target);
    columns2[source.droppableId].items = setPosition(current);
    columns2[destination.droppableId].items = setPosition(next);
    return columns2;
  };
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };
  const setPosition = (ordered) => {
    let withPosition = ordered.map((item2, index) => {
      item2.position = index;
      return item2;
    });
    return withPosition;
  };
  const _addItem = (columnIndex, columnId) => {
    columns[columnIndex].items.push({
      text: "",
      position: columns[columnIndex].items.length,
      columnId,
      _id: Math.random().toString(36).substr(2, 9)
    });
    setColumns((prev) => __spreadProps(__spreadValues({}, prev), { columns }));
    if (emitter)
      emitter.emit("ADD_ITEM", { boardId: _id, columnId: columns[columnIndex]._id, text: "" });
  };
  const _deleteItem = (columnIndex, itemIndex) => {
    if (emitter)
      emitter.emit("DELETE_ITEM", {
        boardId: _id,
        columnId: columns[columnIndex]._id,
        itemId: columns[columnIndex].items[itemIndex]._id
      });
    columns[columnIndex].items.splice(itemIndex, 1);
    setColumns((prev) => __spreadProps(__spreadValues({}, prev), { columns }));
  };
  const _editItem = (columnIndex, itemIndex, text2) => {
    columns[columnIndex].items[itemIndex].text = text2;
    setColumns((prev) => __spreadProps(__spreadValues({}, prev), { columns }));
    if (emitter)
      emitter.emit("EDIT_ITEM", {
        boardId: _id,
        columnId: columns[columnIndex]._id,
        itemId: columns[columnIndex].items[itemIndex]._id,
        text: text2,
        position: columns[columnIndex].items[itemIndex].position
      });
  };
  const _addColumn = () => {
    if (emitter)
      emitter.emit("ADD_COLUMN", {
        boardId: _id,
        title: "",
        color: "var(--text200)"
      });
    setColumns((prev) => __spreadProps(__spreadValues({}, prev), {
      columns: [
        ...prev.columns,
        {
          title: "",
          position: columns.length,
          color: "var(--text200)",
          _id: Math.random().toString(36).substr(2, 9),
          items: []
        }
      ]
    }));
  };
  const _deleteColumn = (columnIndex) => {
    if (emitter)
      emitter.emit("DELETE_COLUMN", {
        boardId: _id,
        columnId: columns[columnIndex]._id
      });
    columns.splice(columnIndex, 1);
    setColumns((prev) => __spreadProps(__spreadValues({}, prev), { columns }));
  };
  const _editColumn = (columnIndex, title22, color2) => {
    columns[columnIndex].title = title22;
    columns[columnIndex].color = color2;
    setColumns((prev) => __spreadProps(__spreadValues({}, prev), { columns }));
    if (emitter)
      emitter.emit("EDIT_COLUMN", {
        boardId: _id,
        columnId: columns[columnIndex]._id,
        title: title22,
        color: color2,
        position: columns[columnIndex].position
      });
  };
  const _isEditingItem = (columnIndex, itemIndex, isEditing) => {
    if (emitter)
      emitter.emit("IS_EDITING_ITEM", {
        boardId: _id,
        columnId: columns[columnIndex]._id,
        itemId: columns[columnIndex].items[itemIndex]._id,
        position: columns[columnIndex].items[itemIndex].position,
        isEditing
      });
  };
  const _isEditingColumn = (columnIndex, isEditing) => {
    if (emitter)
      emitter.emit("IS_EDITING_COLUMN", {
        boardId: _id,
        columnId: columns[columnIndex]._id,
        position: columns[columnIndex].position,
        isEditing
      });
  };
  return /* @__PURE__ */ React__default.createElement("div", null, columns && /* @__PURE__ */ React__default.createElement(DragDropContext, {
    onDragEnd: onDragEnd3
  }, /* @__PURE__ */ React__default.createElement("div", {
    className: styles$4.title
  }, title2), /* @__PURE__ */ React__default.createElement(ConnectedDroppable, {
    droppableId: String(_id),
    direction: "horizontal",
    type: "BOARD"
  }, (provided) => /* @__PURE__ */ React__default.createElement("div", __spreadProps(__spreadValues({
    ref: provided.innerRef
  }, provided.droppableProps), {
    className: styles$4.board
  }), columns.sort((columnA, columnB) => columnA.position - columnB.position).map((col, index) => /* @__PURE__ */ React__default.createElement(PublicDraggable, {
    draggableId: String(index),
    key: index,
    index,
    isDragDisabled: editList.indexOf(col._id) !== -1
  }, (provided2, snapshot) => /* @__PURE__ */ React__default.createElement("div", __spreadValues({
    ref: provided2.innerRef
  }, provided2.draggableProps), /* @__PURE__ */ React__default.createElement(Column, {
    title: col.title,
    color: col.color,
    position: col.position,
    _id: col._id,
    createdAt: col.createdAt,
    updatedAt: col.updatedAt,
    items: col.items,
    dragHandleProps: provided2.dragHandleProps,
    i18n,
    index,
    _addItem,
    _deleteItem,
    _editItem,
    _deleteColumn,
    _editColumn,
    isDragging: snapshot.isDragging,
    newColumn: index === columns.length - 1 ? newColumn : false,
    setNewColumn,
    _isEditingColumn,
    _isEditingItem,
    editList,
    locked: editList.indexOf(col._id) !== -1
  }), provided2.placeholder))), provided.placeholder, /* @__PURE__ */ React__default.createElement(Add, {
    isColumn: true,
    text: (i18n == null ? void 0 : i18n.addNew) || "Add new",
    onClick: () => {
      _addColumn();
      setNewColumn(true);
    }
  })))));
};
const fontS$a = "_fontS_1x5qq_1";
const fontM$a = "_fontM_1x5qq_6";
const fontL$a = "_fontL_1x5qq_11";
const fontXL$a = "_fontXL_1x5qq_16";
const weightLight$a = "_weightLight_1x5qq_21";
const weightNormal$a = "_weightNormal_1x5qq_26";
const weightBold$a = "_weightBold_1x5qq_31";
const disabled$a = "_disabled_1x5qq_36";
const error$a = "_error_1x5qq_45";
const errorMessage$a = "_errorMessage_1x5qq_49";
const pointer$a = "_pointer_1x5qq_54";
const loading$a = "_loading_1x5qq_58";
const loadingAnimationOpacity$a = "_loadingAnimationOpacity_1x5qq_1";
const loadingAnimation$a = "_loadingAnimation_1x5qq_1";
const margin0$a = "_margin0_1x5qq_94";
const marginS$a = "_marginS_1x5qq_98";
const marginM$a = "_marginM_1x5qq_102";
const marginL$a = "_marginL_1x5qq_106";
const marginXL$a = "_marginXL_1x5qq_110";
const marginTop0$a = "_marginTop0_1x5qq_114";
const marginTopS$a = "_marginTopS_1x5qq_118";
const marginTopM$a = "_marginTopM_1x5qq_122";
const marginTopL$a = "_marginTopL_1x5qq_126";
const marginTopXL$a = "_marginTopXL_1x5qq_130";
const marginRight0$a = "_marginRight0_1x5qq_134";
const marginRightS$a = "_marginRightS_1x5qq_138";
const marginRightM$a = "_marginRightM_1x5qq_142";
const marginRightL$a = "_marginRightL_1x5qq_146";
const marginRightXL$a = "_marginRightXL_1x5qq_150";
const marginBottom0$a = "_marginBottom0_1x5qq_154";
const marginBottomS$a = "_marginBottomS_1x5qq_158";
const marginBottomM$a = "_marginBottomM_1x5qq_162";
const marginBottomL$a = "_marginBottomL_1x5qq_166";
const marginBottomXL$a = "_marginBottomXL_1x5qq_170";
const marginLeft0$a = "_marginLeft0_1x5qq_174";
const marginLeftS$a = "_marginLeftS_1x5qq_178";
const marginLeftM$a = "_marginLeftM_1x5qq_182";
const marginLeftL$a = "_marginLeftL_1x5qq_186";
const marginLeftXL$a = "_marginLeftXL_1x5qq_190";
const padding0$a = "_padding0_1x5qq_194";
const paddingS$a = "_paddingS_1x5qq_198";
const paddingM$a = "_paddingM_1x5qq_202";
const paddingL$a = "_paddingL_1x5qq_206";
const paddingXL$a = "_paddingXL_1x5qq_210";
const paddingTop0$a = "_paddingTop0_1x5qq_214";
const paddingTopS$a = "_paddingTopS_1x5qq_218";
const paddingTopM$a = "_paddingTopM_1x5qq_222";
const paddingTopL$a = "_paddingTopL_1x5qq_226";
const paddingTopXL$a = "_paddingTopXL_1x5qq_230";
const paddingRight0$a = "_paddingRight0_1x5qq_234";
const paddingRightS$a = "_paddingRightS_1x5qq_238";
const paddingRightM$a = "_paddingRightM_1x5qq_242";
const paddingRightL$a = "_paddingRightL_1x5qq_246";
const paddingRightXL$a = "_paddingRightXL_1x5qq_250";
const paddingBottom0$a = "_paddingBottom0_1x5qq_254";
const paddingBottomS$a = "_paddingBottomS_1x5qq_258";
const paddingBottomM$a = "_paddingBottomM_1x5qq_262";
const paddingBottomL$a = "_paddingBottomL_1x5qq_266";
const paddingBottomXL$a = "_paddingBottomXL_1x5qq_270";
const paddingLeft0$a = "_paddingLeft0_1x5qq_274";
const paddingLeftS$a = "_paddingLeftS_1x5qq_278";
const paddingLeftM$a = "_paddingLeftM_1x5qq_282";
const paddingLeftL$a = "_paddingLeftL_1x5qq_286";
const paddingLeftXL$a = "_paddingLeftXL_1x5qq_290";
const line = "_line_1x5qq_310";
var scss$e = {
  fontS: fontS$a,
  fontM: fontM$a,
  fontL: fontL$a,
  fontXL: fontXL$a,
  weightLight: weightLight$a,
  weightNormal: weightNormal$a,
  weightBold: weightBold$a,
  disabled: disabled$a,
  error: error$a,
  errorMessage: errorMessage$a,
  pointer: pointer$a,
  loading: loading$a,
  loadingAnimationOpacity: loadingAnimationOpacity$a,
  loadingAnimation: loadingAnimation$a,
  margin0: margin0$a,
  marginS: marginS$a,
  marginM: marginM$a,
  marginL: marginL$a,
  marginXL: marginXL$a,
  marginTop0: marginTop0$a,
  marginTopS: marginTopS$a,
  marginTopM: marginTopM$a,
  marginTopL: marginTopL$a,
  marginTopXL: marginTopXL$a,
  marginRight0: marginRight0$a,
  marginRightS: marginRightS$a,
  marginRightM: marginRightM$a,
  marginRightL: marginRightL$a,
  marginRightXL: marginRightXL$a,
  marginBottom0: marginBottom0$a,
  marginBottomS: marginBottomS$a,
  marginBottomM: marginBottomM$a,
  marginBottomL: marginBottomL$a,
  marginBottomXL: marginBottomXL$a,
  marginLeft0: marginLeft0$a,
  marginLeftS: marginLeftS$a,
  marginLeftM: marginLeftM$a,
  marginLeftL: marginLeftL$a,
  marginLeftXL: marginLeftXL$a,
  padding0: padding0$a,
  paddingS: paddingS$a,
  paddingM: paddingM$a,
  paddingL: paddingL$a,
  paddingXL: paddingXL$a,
  paddingTop0: paddingTop0$a,
  paddingTopS: paddingTopS$a,
  paddingTopM: paddingTopM$a,
  paddingTopL: paddingTopL$a,
  paddingTopXL: paddingTopXL$a,
  paddingRight0: paddingRight0$a,
  paddingRightS: paddingRightS$a,
  paddingRightM: paddingRightM$a,
  paddingRightL: paddingRightL$a,
  paddingRightXL: paddingRightXL$a,
  paddingBottom0: paddingBottom0$a,
  paddingBottomS: paddingBottomS$a,
  paddingBottomM: paddingBottomM$a,
  paddingBottomL: paddingBottomL$a,
  paddingBottomXL: paddingBottomXL$a,
  paddingLeft0: paddingLeft0$a,
  paddingLeftS: paddingLeftS$a,
  paddingLeftM: paddingLeftM$a,
  paddingLeftL: paddingLeftL$a,
  paddingLeftXL: paddingLeftXL$a,
  "backgroundColor--primary": "_backgroundColor--primary_1x5qq_294",
  "backgroundColor--text100": "_backgroundColor--text100_1x5qq_298",
  "color--primary": "_color--primary_1x5qq_302",
  "color--text100": "_color--text100_1x5qq_306",
  line
};
const Line = (_y) => {
  var props2 = __objRest(_y, []);
  const getClassNames = () => {
    let className = _getClassNames(__spreadValues({
      parent: scss$e.line,
      scss: scss$e
    }, props2));
    return className.join(" ");
  };
  return /* @__PURE__ */ React__default.createElement("hr", {
    "data-testid": "Line",
    className: getClassNames()
  });
};
const modal = "_modal_9yghs_1";
const open$2 = "_open_9yghs_16";
const inner = "_inner_9yghs_19";
const closed = "_closed_9yghs_23";
const close$2 = "_close_9yghs_23";
const confirm = "_confirm_9yghs_59";
const buttonWrapper = "_buttonWrapper_9yghs_67";
const noWrap = "_noWrap_9yghs_70";
var scss$d = {
  modal,
  open: open$2,
  inner,
  closed,
  close: close$2,
  confirm,
  buttonWrapper,
  noWrap
};
const Modal = (_z) => {
  var _A = _z, { children, open: open2, onClose, type, onConfirm, i18n } = _A, props2 = __objRest(_A, ["children", "open", "onClose", "type", "onConfirm", "i18n"]);
  const getClassNames = () => {
    let className = _getClassNames(__spreadValues({
      parent: scss$d.modal,
      scss: scss$d
    }, props2));
    if (open2)
      className.push(scss$d.open);
    else
      className.push(scss$d.closed);
    return className.join(" ");
  };
  function handleChildClick(e2) {
    e2.stopPropagation();
  }
  return /* @__PURE__ */ React__default.createElement("div", {
    onClick: () => onClose(),
    className: getClassNames()
  }, /* @__PURE__ */ React__default.createElement("div", {
    onClick: handleChildClick,
    className: scss$d.inner
  }, children, /* @__PURE__ */ React__default.createElement("div", {
    className: scss$d.close,
    onClick: () => onClose()
  }, /* @__PURE__ */ React__default.createElement(Icon, {
    icon: "cross"
  })), type === "confirm" && /* @__PURE__ */ React__default.createElement("div", {
    className: scss$d.confirm
  }, /* @__PURE__ */ React__default.createElement(Button, {
    onClick: onClose
  }, i18n ? i18n.no : "Cancel"), /* @__PURE__ */ React__default.createElement(Button, {
    style: { marginLeft: "10px" },
    onClick: onConfirm,
    primary: true
  }, i18n ? i18n.yes : "Confirm"))));
};
const fontS$9 = "_fontS_ihcnd_1";
const fontM$9 = "_fontM_ihcnd_6";
const fontL$9 = "_fontL_ihcnd_11";
const fontXL$9 = "_fontXL_ihcnd_16";
const weightLight$9 = "_weightLight_ihcnd_21";
const weightNormal$9 = "_weightNormal_ihcnd_26";
const weightBold$9 = "_weightBold_ihcnd_31";
const disabled$9 = "_disabled_ihcnd_36";
const error$9 = "_error_ihcnd_45";
const errorMessage$9 = "_errorMessage_ihcnd_49";
const pointer$9 = "_pointer_ihcnd_54";
const loading$9 = "_loading_ihcnd_58";
const loadingAnimationOpacity$9 = "_loadingAnimationOpacity_ihcnd_1";
const loadingAnimation$9 = "_loadingAnimation_ihcnd_1";
const margin0$9 = "_margin0_ihcnd_94";
const marginS$9 = "_marginS_ihcnd_98";
const marginM$9 = "_marginM_ihcnd_102";
const marginL$9 = "_marginL_ihcnd_106";
const marginXL$9 = "_marginXL_ihcnd_110";
const marginTop0$9 = "_marginTop0_ihcnd_114";
const marginTopS$9 = "_marginTopS_ihcnd_118";
const marginTopM$9 = "_marginTopM_ihcnd_122";
const marginTopL$9 = "_marginTopL_ihcnd_126";
const marginTopXL$9 = "_marginTopXL_ihcnd_130";
const marginRight0$9 = "_marginRight0_ihcnd_134";
const marginRightS$9 = "_marginRightS_ihcnd_138";
const marginRightM$9 = "_marginRightM_ihcnd_142";
const marginRightL$9 = "_marginRightL_ihcnd_146";
const marginRightXL$9 = "_marginRightXL_ihcnd_150";
const marginBottom0$9 = "_marginBottom0_ihcnd_154";
const marginBottomS$9 = "_marginBottomS_ihcnd_158";
const marginBottomM$9 = "_marginBottomM_ihcnd_162";
const marginBottomL$9 = "_marginBottomL_ihcnd_166";
const marginBottomXL$9 = "_marginBottomXL_ihcnd_170";
const marginLeft0$9 = "_marginLeft0_ihcnd_174";
const marginLeftS$9 = "_marginLeftS_ihcnd_178";
const marginLeftM$9 = "_marginLeftM_ihcnd_182";
const marginLeftL$9 = "_marginLeftL_ihcnd_186";
const marginLeftXL$9 = "_marginLeftXL_ihcnd_190";
const padding0$9 = "_padding0_ihcnd_194";
const paddingS$9 = "_paddingS_ihcnd_198";
const paddingM$9 = "_paddingM_ihcnd_202";
const paddingL$9 = "_paddingL_ihcnd_206";
const paddingXL$9 = "_paddingXL_ihcnd_210";
const paddingTop0$9 = "_paddingTop0_ihcnd_214";
const paddingTopS$9 = "_paddingTopS_ihcnd_218";
const paddingTopM$9 = "_paddingTopM_ihcnd_222";
const paddingTopL$9 = "_paddingTopL_ihcnd_226";
const paddingTopXL$9 = "_paddingTopXL_ihcnd_230";
const paddingRight0$9 = "_paddingRight0_ihcnd_234";
const paddingRightS$9 = "_paddingRightS_ihcnd_238";
const paddingRightM$9 = "_paddingRightM_ihcnd_242";
const paddingRightL$9 = "_paddingRightL_ihcnd_246";
const paddingRightXL$9 = "_paddingRightXL_ihcnd_250";
const paddingBottom0$9 = "_paddingBottom0_ihcnd_254";
const paddingBottomS$9 = "_paddingBottomS_ihcnd_258";
const paddingBottomM$9 = "_paddingBottomM_ihcnd_262";
const paddingBottomL$9 = "_paddingBottomL_ihcnd_266";
const paddingBottomXL$9 = "_paddingBottomXL_ihcnd_270";
const paddingLeft0$9 = "_paddingLeft0_ihcnd_274";
const paddingLeftS$9 = "_paddingLeftS_ihcnd_278";
const paddingLeftM$9 = "_paddingLeftM_ihcnd_282";
const paddingLeftL$9 = "_paddingLeftL_ihcnd_286";
const paddingLeftXL$9 = "_paddingLeftXL_ihcnd_290";
const spacer = "_spacer_ihcnd_310";
var scss$c = {
  fontS: fontS$9,
  fontM: fontM$9,
  fontL: fontL$9,
  fontXL: fontXL$9,
  weightLight: weightLight$9,
  weightNormal: weightNormal$9,
  weightBold: weightBold$9,
  disabled: disabled$9,
  error: error$9,
  errorMessage: errorMessage$9,
  pointer: pointer$9,
  loading: loading$9,
  loadingAnimationOpacity: loadingAnimationOpacity$9,
  loadingAnimation: loadingAnimation$9,
  margin0: margin0$9,
  marginS: marginS$9,
  marginM: marginM$9,
  marginL: marginL$9,
  marginXL: marginXL$9,
  marginTop0: marginTop0$9,
  marginTopS: marginTopS$9,
  marginTopM: marginTopM$9,
  marginTopL: marginTopL$9,
  marginTopXL: marginTopXL$9,
  marginRight0: marginRight0$9,
  marginRightS: marginRightS$9,
  marginRightM: marginRightM$9,
  marginRightL: marginRightL$9,
  marginRightXL: marginRightXL$9,
  marginBottom0: marginBottom0$9,
  marginBottomS: marginBottomS$9,
  marginBottomM: marginBottomM$9,
  marginBottomL: marginBottomL$9,
  marginBottomXL: marginBottomXL$9,
  marginLeft0: marginLeft0$9,
  marginLeftS: marginLeftS$9,
  marginLeftM: marginLeftM$9,
  marginLeftL: marginLeftL$9,
  marginLeftXL: marginLeftXL$9,
  padding0: padding0$9,
  paddingS: paddingS$9,
  paddingM: paddingM$9,
  paddingL: paddingL$9,
  paddingXL: paddingXL$9,
  paddingTop0: paddingTop0$9,
  paddingTopS: paddingTopS$9,
  paddingTopM: paddingTopM$9,
  paddingTopL: paddingTopL$9,
  paddingTopXL: paddingTopXL$9,
  paddingRight0: paddingRight0$9,
  paddingRightS: paddingRightS$9,
  paddingRightM: paddingRightM$9,
  paddingRightL: paddingRightL$9,
  paddingRightXL: paddingRightXL$9,
  paddingBottom0: paddingBottom0$9,
  paddingBottomS: paddingBottomS$9,
  paddingBottomM: paddingBottomM$9,
  paddingBottomL: paddingBottomL$9,
  paddingBottomXL: paddingBottomXL$9,
  paddingLeft0: paddingLeft0$9,
  paddingLeftS: paddingLeftS$9,
  paddingLeftM: paddingLeftM$9,
  paddingLeftL: paddingLeftL$9,
  paddingLeftXL: paddingLeftXL$9,
  "backgroundColor--primary": "_backgroundColor--primary_ihcnd_294",
  "backgroundColor--text100": "_backgroundColor--text100_ihcnd_298",
  "color--primary": "_color--primary_ihcnd_302",
  "color--text100": "_color--text100_ihcnd_306",
  spacer
};
const Spacer = (_B) => {
  var props2 = __objRest(_B, []);
  const getClassNames = () => {
    let className = _getClassNames(__spreadValues({
      parent: scss$c.spacer,
      scss: scss$c
    }, props2));
    return className.join(" ");
  };
  return /* @__PURE__ */ React__default.createElement("div", {
    "data-testid": "Spacer",
    className: getClassNames()
  });
};
const fontS$8 = "_fontS_y510e_1";
const fontM$8 = "_fontM_y510e_6";
const fontL$8 = "_fontL_y510e_11";
const fontXL$8 = "_fontXL_y510e_16";
const weightLight$8 = "_weightLight_y510e_21";
const weightNormal$8 = "_weightNormal_y510e_26";
const weightBold$8 = "_weightBold_y510e_31";
const disabled$8 = "_disabled_y510e_36";
const error$8 = "_error_y510e_45";
const errorMessage$8 = "_errorMessage_y510e_49";
const pointer$8 = "_pointer_y510e_54";
const loading$8 = "_loading_y510e_58";
const loadingAnimationOpacity$8 = "_loadingAnimationOpacity_y510e_1";
const loadingAnimation$8 = "_loadingAnimation_y510e_1";
const margin0$8 = "_margin0_y510e_94";
const marginS$8 = "_marginS_y510e_98";
const marginM$8 = "_marginM_y510e_102";
const marginL$8 = "_marginL_y510e_106";
const marginXL$8 = "_marginXL_y510e_110";
const marginTop0$8 = "_marginTop0_y510e_114";
const marginTopS$8 = "_marginTopS_y510e_118";
const marginTopM$8 = "_marginTopM_y510e_122";
const marginTopL$8 = "_marginTopL_y510e_126";
const marginTopXL$8 = "_marginTopXL_y510e_130";
const marginRight0$8 = "_marginRight0_y510e_134";
const marginRightS$8 = "_marginRightS_y510e_138";
const marginRightM$8 = "_marginRightM_y510e_142";
const marginRightL$8 = "_marginRightL_y510e_146";
const marginRightXL$8 = "_marginRightXL_y510e_150";
const marginBottom0$8 = "_marginBottom0_y510e_154";
const marginBottomS$8 = "_marginBottomS_y510e_158";
const marginBottomM$8 = "_marginBottomM_y510e_162";
const marginBottomL$8 = "_marginBottomL_y510e_166";
const marginBottomXL$8 = "_marginBottomXL_y510e_170";
const marginLeft0$8 = "_marginLeft0_y510e_174";
const marginLeftS$8 = "_marginLeftS_y510e_178";
const marginLeftM$8 = "_marginLeftM_y510e_182";
const marginLeftL$8 = "_marginLeftL_y510e_186";
const marginLeftXL$8 = "_marginLeftXL_y510e_190";
const padding0$8 = "_padding0_y510e_194";
const paddingS$8 = "_paddingS_y510e_198";
const paddingM$8 = "_paddingM_y510e_202";
const paddingL$8 = "_paddingL_y510e_206";
const paddingXL$8 = "_paddingXL_y510e_210";
const paddingTop0$8 = "_paddingTop0_y510e_214";
const paddingTopS$8 = "_paddingTopS_y510e_218";
const paddingTopM$8 = "_paddingTopM_y510e_222";
const paddingTopL$8 = "_paddingTopL_y510e_226";
const paddingTopXL$8 = "_paddingTopXL_y510e_230";
const paddingRight0$8 = "_paddingRight0_y510e_234";
const paddingRightS$8 = "_paddingRightS_y510e_238";
const paddingRightM$8 = "_paddingRightM_y510e_242";
const paddingRightL$8 = "_paddingRightL_y510e_246";
const paddingRightXL$8 = "_paddingRightXL_y510e_250";
const paddingBottom0$8 = "_paddingBottom0_y510e_254";
const paddingBottomS$8 = "_paddingBottomS_y510e_258";
const paddingBottomM$8 = "_paddingBottomM_y510e_262";
const paddingBottomL$8 = "_paddingBottomL_y510e_266";
const paddingBottomXL$8 = "_paddingBottomXL_y510e_270";
const paddingLeft0$8 = "_paddingLeft0_y510e_274";
const paddingLeftS$8 = "_paddingLeftS_y510e_278";
const paddingLeftM$8 = "_paddingLeftM_y510e_282";
const paddingLeftL$8 = "_paddingLeftL_y510e_286";
const paddingLeftXL$8 = "_paddingLeftXL_y510e_290";
const text = "_text_y510e_310";
var scss$b = {
  fontS: fontS$8,
  fontM: fontM$8,
  fontL: fontL$8,
  fontXL: fontXL$8,
  weightLight: weightLight$8,
  weightNormal: weightNormal$8,
  weightBold: weightBold$8,
  disabled: disabled$8,
  error: error$8,
  errorMessage: errorMessage$8,
  pointer: pointer$8,
  loading: loading$8,
  loadingAnimationOpacity: loadingAnimationOpacity$8,
  loadingAnimation: loadingAnimation$8,
  margin0: margin0$8,
  marginS: marginS$8,
  marginM: marginM$8,
  marginL: marginL$8,
  marginXL: marginXL$8,
  marginTop0: marginTop0$8,
  marginTopS: marginTopS$8,
  marginTopM: marginTopM$8,
  marginTopL: marginTopL$8,
  marginTopXL: marginTopXL$8,
  marginRight0: marginRight0$8,
  marginRightS: marginRightS$8,
  marginRightM: marginRightM$8,
  marginRightL: marginRightL$8,
  marginRightXL: marginRightXL$8,
  marginBottom0: marginBottom0$8,
  marginBottomS: marginBottomS$8,
  marginBottomM: marginBottomM$8,
  marginBottomL: marginBottomL$8,
  marginBottomXL: marginBottomXL$8,
  marginLeft0: marginLeft0$8,
  marginLeftS: marginLeftS$8,
  marginLeftM: marginLeftM$8,
  marginLeftL: marginLeftL$8,
  marginLeftXL: marginLeftXL$8,
  padding0: padding0$8,
  paddingS: paddingS$8,
  paddingM: paddingM$8,
  paddingL: paddingL$8,
  paddingXL: paddingXL$8,
  paddingTop0: paddingTop0$8,
  paddingTopS: paddingTopS$8,
  paddingTopM: paddingTopM$8,
  paddingTopL: paddingTopL$8,
  paddingTopXL: paddingTopXL$8,
  paddingRight0: paddingRight0$8,
  paddingRightS: paddingRightS$8,
  paddingRightM: paddingRightM$8,
  paddingRightL: paddingRightL$8,
  paddingRightXL: paddingRightXL$8,
  paddingBottom0: paddingBottom0$8,
  paddingBottomS: paddingBottomS$8,
  paddingBottomM: paddingBottomM$8,
  paddingBottomL: paddingBottomL$8,
  paddingBottomXL: paddingBottomXL$8,
  paddingLeft0: paddingLeft0$8,
  paddingLeftS: paddingLeftS$8,
  paddingLeftM: paddingLeftM$8,
  paddingLeftL: paddingLeftL$8,
  paddingLeftXL: paddingLeftXL$8,
  "backgroundColor--primary": "_backgroundColor--primary_y510e_294",
  "backgroundColor--text100": "_backgroundColor--text100_y510e_298",
  "color--primary": "_color--primary_y510e_302",
  "color--text100": "_color--text100_y510e_306",
  text
};
const Text = (_C) => {
  var _D = _C, { children, href } = _D, props2 = __objRest(_D, ["children", "href"]);
  const getClassNames = () => {
    let _className = _getClassNames(__spreadValues({
      parent: scss$b.text,
      scss: scss$b
    }, props2));
    return _className.join(" ");
  };
  return href ? /* @__PURE__ */ React__default.createElement("a", __spreadProps(__spreadValues({}, props2), {
    href,
    target: "_blank",
    "data-testid": "Text",
    className: getClassNames()
  }), children) : /* @__PURE__ */ React__default.createElement("div", __spreadProps(__spreadValues({}, props2), {
    "data-testid": "Text",
    className: getClassNames()
  }), children);
};
const fontS$7 = "_fontS_1dqn0_1";
const fontM$7 = "_fontM_1dqn0_6";
const fontL$7 = "_fontL_1dqn0_11";
const fontXL$7 = "_fontXL_1dqn0_16";
const weightLight$7 = "_weightLight_1dqn0_21";
const weightNormal$7 = "_weightNormal_1dqn0_26";
const weightBold$7 = "_weightBold_1dqn0_31";
const disabled$7 = "_disabled_1dqn0_36";
const error$7 = "_error_1dqn0_45";
const errorMessage$7 = "_errorMessage_1dqn0_49";
const pointer$7 = "_pointer_1dqn0_54";
const loading$7 = "_loading_1dqn0_58";
const loadingAnimationOpacity$7 = "_loadingAnimationOpacity_1dqn0_1";
const loadingAnimation$7 = "_loadingAnimation_1dqn0_1";
const margin0$7 = "_margin0_1dqn0_94";
const marginS$7 = "_marginS_1dqn0_98";
const marginM$7 = "_marginM_1dqn0_102";
const marginL$7 = "_marginL_1dqn0_106";
const marginXL$7 = "_marginXL_1dqn0_110";
const marginTop0$7 = "_marginTop0_1dqn0_114";
const marginTopS$7 = "_marginTopS_1dqn0_118";
const marginTopM$7 = "_marginTopM_1dqn0_122";
const marginTopL$7 = "_marginTopL_1dqn0_126";
const marginTopXL$7 = "_marginTopXL_1dqn0_130";
const marginRight0$7 = "_marginRight0_1dqn0_134";
const marginRightS$7 = "_marginRightS_1dqn0_138";
const marginRightM$7 = "_marginRightM_1dqn0_142";
const marginRightL$7 = "_marginRightL_1dqn0_146";
const marginRightXL$7 = "_marginRightXL_1dqn0_150";
const marginBottom0$7 = "_marginBottom0_1dqn0_154";
const marginBottomS$7 = "_marginBottomS_1dqn0_158";
const marginBottomM$7 = "_marginBottomM_1dqn0_162";
const marginBottomL$7 = "_marginBottomL_1dqn0_166";
const marginBottomXL$7 = "_marginBottomXL_1dqn0_170";
const marginLeft0$7 = "_marginLeft0_1dqn0_174";
const marginLeftS$7 = "_marginLeftS_1dqn0_178";
const marginLeftM$7 = "_marginLeftM_1dqn0_182";
const marginLeftL$7 = "_marginLeftL_1dqn0_186";
const marginLeftXL$7 = "_marginLeftXL_1dqn0_190";
const padding0$7 = "_padding0_1dqn0_194";
const paddingS$7 = "_paddingS_1dqn0_198";
const paddingM$7 = "_paddingM_1dqn0_202";
const paddingL$7 = "_paddingL_1dqn0_206";
const paddingXL$7 = "_paddingXL_1dqn0_210";
const paddingTop0$7 = "_paddingTop0_1dqn0_214";
const paddingTopS$7 = "_paddingTopS_1dqn0_218";
const paddingTopM$7 = "_paddingTopM_1dqn0_222";
const paddingTopL$7 = "_paddingTopL_1dqn0_226";
const paddingTopXL$7 = "_paddingTopXL_1dqn0_230";
const paddingRight0$7 = "_paddingRight0_1dqn0_234";
const paddingRightS$7 = "_paddingRightS_1dqn0_238";
const paddingRightM$7 = "_paddingRightM_1dqn0_242";
const paddingRightL$7 = "_paddingRightL_1dqn0_246";
const paddingRightXL$7 = "_paddingRightXL_1dqn0_250";
const paddingBottom0$7 = "_paddingBottom0_1dqn0_254";
const paddingBottomS$7 = "_paddingBottomS_1dqn0_258";
const paddingBottomM$7 = "_paddingBottomM_1dqn0_262";
const paddingBottomL$7 = "_paddingBottomL_1dqn0_266";
const paddingBottomXL$7 = "_paddingBottomXL_1dqn0_270";
const paddingLeft0$7 = "_paddingLeft0_1dqn0_274";
const paddingLeftS$7 = "_paddingLeftS_1dqn0_278";
const paddingLeftM$7 = "_paddingLeftM_1dqn0_282";
const paddingLeftL$7 = "_paddingLeftL_1dqn0_286";
const paddingLeftXL$7 = "_paddingLeftXL_1dqn0_290";
const textarea = "_textarea_1dqn0_310";
var scss$a = {
  fontS: fontS$7,
  fontM: fontM$7,
  fontL: fontL$7,
  fontXL: fontXL$7,
  weightLight: weightLight$7,
  weightNormal: weightNormal$7,
  weightBold: weightBold$7,
  disabled: disabled$7,
  error: error$7,
  errorMessage: errorMessage$7,
  pointer: pointer$7,
  loading: loading$7,
  loadingAnimationOpacity: loadingAnimationOpacity$7,
  loadingAnimation: loadingAnimation$7,
  margin0: margin0$7,
  marginS: marginS$7,
  marginM: marginM$7,
  marginL: marginL$7,
  marginXL: marginXL$7,
  marginTop0: marginTop0$7,
  marginTopS: marginTopS$7,
  marginTopM: marginTopM$7,
  marginTopL: marginTopL$7,
  marginTopXL: marginTopXL$7,
  marginRight0: marginRight0$7,
  marginRightS: marginRightS$7,
  marginRightM: marginRightM$7,
  marginRightL: marginRightL$7,
  marginRightXL: marginRightXL$7,
  marginBottom0: marginBottom0$7,
  marginBottomS: marginBottomS$7,
  marginBottomM: marginBottomM$7,
  marginBottomL: marginBottomL$7,
  marginBottomXL: marginBottomXL$7,
  marginLeft0: marginLeft0$7,
  marginLeftS: marginLeftS$7,
  marginLeftM: marginLeftM$7,
  marginLeftL: marginLeftL$7,
  marginLeftXL: marginLeftXL$7,
  padding0: padding0$7,
  paddingS: paddingS$7,
  paddingM: paddingM$7,
  paddingL: paddingL$7,
  paddingXL: paddingXL$7,
  paddingTop0: paddingTop0$7,
  paddingTopS: paddingTopS$7,
  paddingTopM: paddingTopM$7,
  paddingTopL: paddingTopL$7,
  paddingTopXL: paddingTopXL$7,
  paddingRight0: paddingRight0$7,
  paddingRightS: paddingRightS$7,
  paddingRightM: paddingRightM$7,
  paddingRightL: paddingRightL$7,
  paddingRightXL: paddingRightXL$7,
  paddingBottom0: paddingBottom0$7,
  paddingBottomS: paddingBottomS$7,
  paddingBottomM: paddingBottomM$7,
  paddingBottomL: paddingBottomL$7,
  paddingBottomXL: paddingBottomXL$7,
  paddingLeft0: paddingLeft0$7,
  paddingLeftS: paddingLeftS$7,
  paddingLeftM: paddingLeftM$7,
  paddingLeftL: paddingLeftL$7,
  paddingLeftXL: paddingLeftXL$7,
  "backgroundColor--primary": "_backgroundColor--primary_1dqn0_294",
  "backgroundColor--text100": "_backgroundColor--text100_1dqn0_298",
  "color--primary": "_color--primary_1dqn0_302",
  "color--text100": "_color--text100_1dqn0_306",
  textarea
};
const TextArea = ({ value }) => {
  return /* @__PURE__ */ React__default.createElement("textarea", {
    "data-testid": "TextArea",
    className: scss$a.textarea
  }, value);
};
const dropDown = "_dropDown_1db5w_1";
const selected$1 = "_selected_1db5w_31";
const open$1 = "_open_1db5w_35";
const close$1 = "_close_1db5w_39";
const header = "_header_1db5w_42";
var scss$9 = {
  dropDown,
  selected: selected$1,
  open: open$1,
  close: close$1,
  header
};
const DropDown = (_E) => {
  var _F = _E, {
    items,
    selected: selected2,
    setSelected,
    placeholder
  } = _F, props2 = __objRest(_F, [
    "items",
    "selected",
    "setSelected",
    "placeholder"
  ]);
  const Item2 = ({ children, disabled: disabled2, index }) => {
    return /* @__PURE__ */ React__default.createElement("li", {
      className: selected2 === index ? scss$9.selected : "",
      key: index,
      onClick: () => setSelected(index)
    }, children);
  };
  const [open2, setOpen] = useState(false);
  return /* @__PURE__ */ React__default.createElement("div", {
    "data-testid": "DropDown",
    className: scss$9.dropDown,
    onClick: () => {
      setOpen((prev) => !prev);
    }
  }, /* @__PURE__ */ React__default.createElement("div", {
    className: scss$9.header
  }, selected2 !== null ? items[selected2].children : placeholder), /* @__PURE__ */ React__default.createElement("ul", {
    className: open2 ? scss$9.open + " " + scss$9.itemWrapper : scss$9.close + " " + scss$9.itemWrapper
  }, items.map((item2, index) => /* @__PURE__ */ React__default.createElement(Item2, {
    index,
    disabled: item2.disabled
  }, item2.children))));
};
const fontS$6 = "_fontS_zlbyg_1";
const fontM$6 = "_fontM_zlbyg_6";
const fontL$6 = "_fontL_zlbyg_11";
const fontXL$6 = "_fontXL_zlbyg_16";
const weightLight$6 = "_weightLight_zlbyg_21";
const weightNormal$6 = "_weightNormal_zlbyg_26";
const weightBold$6 = "_weightBold_zlbyg_31";
const disabled$6 = "_disabled_zlbyg_36";
const error$6 = "_error_zlbyg_45";
const errorMessage$6 = "_errorMessage_zlbyg_49";
const pointer$6 = "_pointer_zlbyg_54";
const loading$6 = "_loading_zlbyg_58";
const loadingAnimationOpacity$6 = "_loadingAnimationOpacity_zlbyg_1";
const loadingAnimation$6 = "_loadingAnimation_zlbyg_1";
const margin0$6 = "_margin0_zlbyg_94";
const marginS$6 = "_marginS_zlbyg_98";
const marginM$6 = "_marginM_zlbyg_102";
const marginL$6 = "_marginL_zlbyg_106";
const marginXL$6 = "_marginXL_zlbyg_110";
const marginTop0$6 = "_marginTop0_zlbyg_114";
const marginTopS$6 = "_marginTopS_zlbyg_118";
const marginTopM$6 = "_marginTopM_zlbyg_122";
const marginTopL$6 = "_marginTopL_zlbyg_126";
const marginTopXL$6 = "_marginTopXL_zlbyg_130";
const marginRight0$6 = "_marginRight0_zlbyg_134";
const marginRightS$6 = "_marginRightS_zlbyg_138";
const marginRightM$6 = "_marginRightM_zlbyg_142";
const marginRightL$6 = "_marginRightL_zlbyg_146";
const marginRightXL$6 = "_marginRightXL_zlbyg_150";
const marginBottom0$6 = "_marginBottom0_zlbyg_154";
const marginBottomS$6 = "_marginBottomS_zlbyg_158";
const marginBottomM$6 = "_marginBottomM_zlbyg_162";
const marginBottomL$6 = "_marginBottomL_zlbyg_166";
const marginBottomXL$6 = "_marginBottomXL_zlbyg_170";
const marginLeft0$6 = "_marginLeft0_zlbyg_174";
const marginLeftS$6 = "_marginLeftS_zlbyg_178";
const marginLeftM$6 = "_marginLeftM_zlbyg_182";
const marginLeftL$6 = "_marginLeftL_zlbyg_186";
const marginLeftXL$6 = "_marginLeftXL_zlbyg_190";
const padding0$6 = "_padding0_zlbyg_194";
const paddingS$6 = "_paddingS_zlbyg_198";
const paddingM$6 = "_paddingM_zlbyg_202";
const paddingL$6 = "_paddingL_zlbyg_206";
const paddingXL$6 = "_paddingXL_zlbyg_210";
const paddingTop0$6 = "_paddingTop0_zlbyg_214";
const paddingTopS$6 = "_paddingTopS_zlbyg_218";
const paddingTopM$6 = "_paddingTopM_zlbyg_222";
const paddingTopL$6 = "_paddingTopL_zlbyg_226";
const paddingTopXL$6 = "_paddingTopXL_zlbyg_230";
const paddingRight0$6 = "_paddingRight0_zlbyg_234";
const paddingRightS$6 = "_paddingRightS_zlbyg_238";
const paddingRightM$6 = "_paddingRightM_zlbyg_242";
const paddingRightL$6 = "_paddingRightL_zlbyg_246";
const paddingRightXL$6 = "_paddingRightXL_zlbyg_250";
const paddingBottom0$6 = "_paddingBottom0_zlbyg_254";
const paddingBottomS$6 = "_paddingBottomS_zlbyg_258";
const paddingBottomM$6 = "_paddingBottomM_zlbyg_262";
const paddingBottomL$6 = "_paddingBottomL_zlbyg_266";
const paddingBottomXL$6 = "_paddingBottomXL_zlbyg_270";
const paddingLeft0$6 = "_paddingLeft0_zlbyg_274";
const paddingLeftS$6 = "_paddingLeftS_zlbyg_278";
const paddingLeftM$6 = "_paddingLeftM_zlbyg_282";
const paddingLeftL$6 = "_paddingLeftL_zlbyg_286";
const paddingLeftXL$6 = "_paddingLeftXL_zlbyg_290";
var scss$8 = {
  fontS: fontS$6,
  fontM: fontM$6,
  fontL: fontL$6,
  fontXL: fontXL$6,
  weightLight: weightLight$6,
  weightNormal: weightNormal$6,
  weightBold: weightBold$6,
  disabled: disabled$6,
  error: error$6,
  errorMessage: errorMessage$6,
  pointer: pointer$6,
  loading: loading$6,
  loadingAnimationOpacity: loadingAnimationOpacity$6,
  loadingAnimation: loadingAnimation$6,
  margin0: margin0$6,
  marginS: marginS$6,
  marginM: marginM$6,
  marginL: marginL$6,
  marginXL: marginXL$6,
  marginTop0: marginTop0$6,
  marginTopS: marginTopS$6,
  marginTopM: marginTopM$6,
  marginTopL: marginTopL$6,
  marginTopXL: marginTopXL$6,
  marginRight0: marginRight0$6,
  marginRightS: marginRightS$6,
  marginRightM: marginRightM$6,
  marginRightL: marginRightL$6,
  marginRightXL: marginRightXL$6,
  marginBottom0: marginBottom0$6,
  marginBottomS: marginBottomS$6,
  marginBottomM: marginBottomM$6,
  marginBottomL: marginBottomL$6,
  marginBottomXL: marginBottomXL$6,
  marginLeft0: marginLeft0$6,
  marginLeftS: marginLeftS$6,
  marginLeftM: marginLeftM$6,
  marginLeftL: marginLeftL$6,
  marginLeftXL: marginLeftXL$6,
  padding0: padding0$6,
  paddingS: paddingS$6,
  paddingM: paddingM$6,
  paddingL: paddingL$6,
  paddingXL: paddingXL$6,
  paddingTop0: paddingTop0$6,
  paddingTopS: paddingTopS$6,
  paddingTopM: paddingTopM$6,
  paddingTopL: paddingTopL$6,
  paddingTopXL: paddingTopXL$6,
  paddingRight0: paddingRight0$6,
  paddingRightS: paddingRightS$6,
  paddingRightM: paddingRightM$6,
  paddingRightL: paddingRightL$6,
  paddingRightXL: paddingRightXL$6,
  paddingBottom0: paddingBottom0$6,
  paddingBottomS: paddingBottomS$6,
  paddingBottomM: paddingBottomM$6,
  paddingBottomL: paddingBottomL$6,
  paddingBottomXL: paddingBottomXL$6,
  paddingLeft0: paddingLeft0$6,
  paddingLeftS: paddingLeftS$6,
  paddingLeftM: paddingLeftM$6,
  paddingLeftL: paddingLeftL$6,
  paddingLeftXL: paddingLeftXL$6,
  "backgroundColor--primary": "_backgroundColor--primary_zlbyg_294",
  "backgroundColor--text100": "_backgroundColor--text100_zlbyg_298",
  "color--primary": "_color--primary_zlbyg_302",
  "color--text100": "_color--text100_zlbyg_306"
};
const Flex = (_G) => {
  var _H = _G, { children } = _H, props2 = __objRest(_H, ["children"]);
  const getClassNames = () => {
    let className = _getClassNames(__spreadValues({
      parent: scss$8.flex,
      scss: scss$8
    }, props2));
    return className.join(" ");
  };
  return /* @__PURE__ */ React__default.createElement("div", __spreadValues({
    "data-testid": "Flex",
    className: getClassNames(),
    style: {
      display: props2.container ? "block" : "flex",
      justifyContent: props2.justifyContent || "flex-start",
      flexDirection: props2.flexDirection || "column",
      flexGrow: props2.flexGrow || 0,
      flexBasis: props2.flexBasis || "auto",
      flexShrink: props2.flexShrink || 1,
      flexWrap: props2.flexWrap || "nowrap",
      flex: props2.flex || "0 1 auto",
      alignItems: props2.alignItems || "stretch",
      margin: props2.margin || "0",
      padding: props2.padding || "0",
      width: props2.width || "auto",
      height: props2.height || "auto",
      maxWidth: props2.maxWidth || "none"
    }
  }, props2), children);
};
const fontS$5 = "_fontS_fudu7_1";
const fontM$5 = "_fontM_fudu7_6";
const fontL$5 = "_fontL_fudu7_11";
const fontXL$5 = "_fontXL_fudu7_16";
const weightLight$5 = "_weightLight_fudu7_21";
const weightNormal$5 = "_weightNormal_fudu7_26";
const weightBold$5 = "_weightBold_fudu7_31";
const disabled$5 = "_disabled_fudu7_36";
const error$5 = "_error_fudu7_45";
const errorMessage$5 = "_errorMessage_fudu7_49";
const pointer$5 = "_pointer_fudu7_54";
const loading$5 = "_loading_fudu7_58";
const loadingAnimationOpacity$5 = "_loadingAnimationOpacity_fudu7_1";
const loadingAnimation$5 = "_loadingAnimation_fudu7_1";
const margin0$5 = "_margin0_fudu7_94";
const marginS$5 = "_marginS_fudu7_98";
const marginM$5 = "_marginM_fudu7_102";
const marginL$5 = "_marginL_fudu7_106";
const marginXL$5 = "_marginXL_fudu7_110";
const marginTop0$5 = "_marginTop0_fudu7_114";
const marginTopS$5 = "_marginTopS_fudu7_118";
const marginTopM$5 = "_marginTopM_fudu7_122";
const marginTopL$5 = "_marginTopL_fudu7_126";
const marginTopXL$5 = "_marginTopXL_fudu7_130";
const marginRight0$5 = "_marginRight0_fudu7_134";
const marginRightS$5 = "_marginRightS_fudu7_138";
const marginRightM$5 = "_marginRightM_fudu7_142";
const marginRightL$5 = "_marginRightL_fudu7_146";
const marginRightXL$5 = "_marginRightXL_fudu7_150";
const marginBottom0$5 = "_marginBottom0_fudu7_154";
const marginBottomS$5 = "_marginBottomS_fudu7_158";
const marginBottomM$5 = "_marginBottomM_fudu7_162";
const marginBottomL$5 = "_marginBottomL_fudu7_166";
const marginBottomXL$5 = "_marginBottomXL_fudu7_170";
const marginLeft0$5 = "_marginLeft0_fudu7_174";
const marginLeftS$5 = "_marginLeftS_fudu7_178";
const marginLeftM$5 = "_marginLeftM_fudu7_182";
const marginLeftL$5 = "_marginLeftL_fudu7_186";
const marginLeftXL$5 = "_marginLeftXL_fudu7_190";
const padding0$5 = "_padding0_fudu7_194";
const paddingS$5 = "_paddingS_fudu7_198";
const paddingM$5 = "_paddingM_fudu7_202";
const paddingL$5 = "_paddingL_fudu7_206";
const paddingXL$5 = "_paddingXL_fudu7_210";
const paddingTop0$5 = "_paddingTop0_fudu7_214";
const paddingTopS$5 = "_paddingTopS_fudu7_218";
const paddingTopM$5 = "_paddingTopM_fudu7_222";
const paddingTopL$5 = "_paddingTopL_fudu7_226";
const paddingTopXL$5 = "_paddingTopXL_fudu7_230";
const paddingRight0$5 = "_paddingRight0_fudu7_234";
const paddingRightS$5 = "_paddingRightS_fudu7_238";
const paddingRightM$5 = "_paddingRightM_fudu7_242";
const paddingRightL$5 = "_paddingRightL_fudu7_246";
const paddingRightXL$5 = "_paddingRightXL_fudu7_250";
const paddingBottom0$5 = "_paddingBottom0_fudu7_254";
const paddingBottomS$5 = "_paddingBottomS_fudu7_258";
const paddingBottomM$5 = "_paddingBottomM_fudu7_262";
const paddingBottomL$5 = "_paddingBottomL_fudu7_266";
const paddingBottomXL$5 = "_paddingBottomXL_fudu7_270";
const paddingLeft0$5 = "_paddingLeft0_fudu7_274";
const paddingLeftS$5 = "_paddingLeftS_fudu7_278";
const paddingLeftM$5 = "_paddingLeftM_fudu7_282";
const paddingLeftL$5 = "_paddingLeftL_fudu7_286";
const paddingLeftXL$5 = "_paddingLeftXL_fudu7_290";
const tag = "_tag_fudu7_310";
var scss$7 = {
  fontS: fontS$5,
  fontM: fontM$5,
  fontL: fontL$5,
  fontXL: fontXL$5,
  weightLight: weightLight$5,
  weightNormal: weightNormal$5,
  weightBold: weightBold$5,
  disabled: disabled$5,
  error: error$5,
  errorMessage: errorMessage$5,
  pointer: pointer$5,
  loading: loading$5,
  loadingAnimationOpacity: loadingAnimationOpacity$5,
  loadingAnimation: loadingAnimation$5,
  margin0: margin0$5,
  marginS: marginS$5,
  marginM: marginM$5,
  marginL: marginL$5,
  marginXL: marginXL$5,
  marginTop0: marginTop0$5,
  marginTopS: marginTopS$5,
  marginTopM: marginTopM$5,
  marginTopL: marginTopL$5,
  marginTopXL: marginTopXL$5,
  marginRight0: marginRight0$5,
  marginRightS: marginRightS$5,
  marginRightM: marginRightM$5,
  marginRightL: marginRightL$5,
  marginRightXL: marginRightXL$5,
  marginBottom0: marginBottom0$5,
  marginBottomS: marginBottomS$5,
  marginBottomM: marginBottomM$5,
  marginBottomL: marginBottomL$5,
  marginBottomXL: marginBottomXL$5,
  marginLeft0: marginLeft0$5,
  marginLeftS: marginLeftS$5,
  marginLeftM: marginLeftM$5,
  marginLeftL: marginLeftL$5,
  marginLeftXL: marginLeftXL$5,
  padding0: padding0$5,
  paddingS: paddingS$5,
  paddingM: paddingM$5,
  paddingL: paddingL$5,
  paddingXL: paddingXL$5,
  paddingTop0: paddingTop0$5,
  paddingTopS: paddingTopS$5,
  paddingTopM: paddingTopM$5,
  paddingTopL: paddingTopL$5,
  paddingTopXL: paddingTopXL$5,
  paddingRight0: paddingRight0$5,
  paddingRightS: paddingRightS$5,
  paddingRightM: paddingRightM$5,
  paddingRightL: paddingRightL$5,
  paddingRightXL: paddingRightXL$5,
  paddingBottom0: paddingBottom0$5,
  paddingBottomS: paddingBottomS$5,
  paddingBottomM: paddingBottomM$5,
  paddingBottomL: paddingBottomL$5,
  paddingBottomXL: paddingBottomXL$5,
  paddingLeft0: paddingLeft0$5,
  paddingLeftS: paddingLeftS$5,
  paddingLeftM: paddingLeftM$5,
  paddingLeftL: paddingLeftL$5,
  paddingLeftXL: paddingLeftXL$5,
  "backgroundColor--primary": "_backgroundColor--primary_fudu7_294",
  "backgroundColor--text100": "_backgroundColor--text100_fudu7_298",
  "color--primary": "_color--primary_fudu7_302",
  "color--text100": "_color--text100_fudu7_306",
  tag
};
const Tag = (_I) => {
  var _J = _I, { children, href } = _J, props2 = __objRest(_J, ["children", "href"]);
  const getClassNames = () => {
    let className = _getClassNames(__spreadValues({ parent: scss$7.tag, scss: scss$7 }, props2));
    return className.join(" ");
  };
  const container = {
    show: {
      transition: {
        type: "spring",
        stiffness: 0,
        staggerChildren: 0.2
      }
    }
  };
  const item2 = {
    hidden: { scale: 0.8, opacity: 0.1 },
    show: { scale: 1, opacity: 1 }
  };
  return /* @__PURE__ */ React__default.createElement(motion.div, {
    variants: container,
    initial: "hidden",
    animate: "show"
  }, /* @__PURE__ */ React__default.createElement(Flex, {
    margin: "s",
    flexDirection: "row",
    flexWrap: "wrap"
  }, typeof children === "string" ? /* @__PURE__ */ React__default.createElement("a", {
    href: typeof href === "string" ? href : "//:0",
    target: "_blank",
    rel: "noopener noreferrer",
    "data-testid": "Tag",
    className: getClassNames()
  }, children) : children.map((tag2, index) => /* @__PURE__ */ React__default.createElement(motion.a, {
    href: href && href[index] !== "" ? href[index] : "//:0",
    target: "_blank",
    rel: "noopener noreferrer",
    key: index,
    "data-testid": "Tag",
    className: getClassNames(),
    variants: item2
  }, tag2))));
};
const collapse = "_collapse_19yi9_1";
const wrapper = "_wrapper_19yi9_4";
const open = "_open_19yi9_39";
const close = "_close_19yi9_42";
var scss$6 = {
  collapse,
  wrapper,
  open,
  close
};
var Action;
(function(Action2) {
  Action2["Pop"] = "POP";
  Action2["Push"] = "PUSH";
  Action2["Replace"] = "REPLACE";
})(Action || (Action = {}));
function parsePath(path) {
  var parsedPath = {};
  if (path) {
    var hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    var searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
/**
 * React Router v6.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function invariant(cond, message) {
  if (!cond)
    throw new Error(message);
}
const NavigationContext = /* @__PURE__ */ createContext(null);
const LocationContext = /* @__PURE__ */ createContext(null);
const RouteContext = /* @__PURE__ */ createContext({
  outlet: null,
  matches: []
});
function useInRouterContext() {
  return useContext(LocationContext) != null;
}
function useLocation() {
  !useInRouterContext() ? invariant(false) : void 0;
  return useContext(LocationContext).location;
}
function useNavigate() {
  !useInRouterContext() ? invariant(false) : void 0;
  let {
    basename,
    navigator: navigator2
  } = useContext(NavigationContext);
  let {
    matches
  } = useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(matches.map((match2) => match2.pathnameBase));
  let activeRef = useRef(false);
  useEffect(() => {
    activeRef.current = true;
  });
  let navigate = useCallback$1(function(to, options) {
    if (options === void 0) {
      options = {};
    }
    if (!activeRef.current)
      return;
    if (typeof to === "number") {
      navigator2.go(to);
      return;
    }
    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname);
    if (basename !== "/") {
      path.pathname = joinPaths([basename, path.pathname]);
    }
    (!!options.replace ? navigator2.replace : navigator2.push)(path, options.state);
  }, [basename, navigator2, routePathnamesJson, locationPathname]);
  return navigate;
}
function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      if (segments.length > 1)
        segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function resolveTo(toArg, routePathnames, locationPathname) {
  let to = typeof toArg === "string" ? parsePath(toArg) : toArg;
  let toPathname = toArg === "" || to.pathname === "" ? "/" : to.pathname;
  let from;
  if (toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from);
  if (toPathname && toPathname !== "/" && toPathname.endsWith("/") && !path.pathname.endsWith("/")) {
    path.pathname += "/";
  }
  return path;
}
const joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
const normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
const normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
const Collapse = (_K) => {
  var _L = _K, { children, items, scale: scale2, weight } = _L, props2 = __objRest(_L, ["children", "items", "scale", "weight"]);
  const [open2, setOpen] = useState(false);
  let navigate = useNavigate();
  const getClassNames = () => {
    let _className = _getClassNames({
      parent: scss$6.collapse,
      scss: scss$6,
      scale: scale2,
      weight
    });
    if (open2) {
      _className.push(scss$6.open);
    } else {
      _className.push(scss$6.close);
    }
    return _className.join(" ");
  };
  return /* @__PURE__ */ React__default.createElement("div", __spreadValues({
    "data-testid": "Collapse",
    className: getClassNames(),
    onClick: () => {
    }
  }, props2), /* @__PURE__ */ React__default.createElement("div", {
    onClick: () => {
      setOpen((prev) => !prev);
    },
    className: scss$6.wrapper
  }, /* @__PURE__ */ React__default.createElement("span", null, children), items && /* @__PURE__ */ React__default.createElement(Icon, {
    icon: "arrow"
  })), items && /* @__PURE__ */ React__default.createElement("ul", {
    style: open2 ? {
      maxHeight: items.length * 50 + "px",
      transitionDuration: items.length > 10 ? "0.5s" : "0.25s"
    } : {
      maxHeight: "0px",
      transitionDuration: items.length > 10 ? "0.5s" : "0.25s"
    }
  }, items.map((item2, index) => /* @__PURE__ */ React__default.createElement("li", {
    key: index,
    onClick: () => navigate(item2.toLowerCase().replace(/\s/g, ""))
  }, item2))));
};
const fontS$4 = "_fontS_zlbyg_1";
const fontM$4 = "_fontM_zlbyg_6";
const fontL$4 = "_fontL_zlbyg_11";
const fontXL$4 = "_fontXL_zlbyg_16";
const weightLight$4 = "_weightLight_zlbyg_21";
const weightNormal$4 = "_weightNormal_zlbyg_26";
const weightBold$4 = "_weightBold_zlbyg_31";
const disabled$4 = "_disabled_zlbyg_36";
const error$4 = "_error_zlbyg_45";
const errorMessage$4 = "_errorMessage_zlbyg_49";
const pointer$4 = "_pointer_zlbyg_54";
const loading$4 = "_loading_zlbyg_58";
const loadingAnimationOpacity$4 = "_loadingAnimationOpacity_zlbyg_1";
const loadingAnimation$4 = "_loadingAnimation_zlbyg_1";
const margin0$4 = "_margin0_zlbyg_94";
const marginS$4 = "_marginS_zlbyg_98";
const marginM$4 = "_marginM_zlbyg_102";
const marginL$4 = "_marginL_zlbyg_106";
const marginXL$4 = "_marginXL_zlbyg_110";
const marginTop0$4 = "_marginTop0_zlbyg_114";
const marginTopS$4 = "_marginTopS_zlbyg_118";
const marginTopM$4 = "_marginTopM_zlbyg_122";
const marginTopL$4 = "_marginTopL_zlbyg_126";
const marginTopXL$4 = "_marginTopXL_zlbyg_130";
const marginRight0$4 = "_marginRight0_zlbyg_134";
const marginRightS$4 = "_marginRightS_zlbyg_138";
const marginRightM$4 = "_marginRightM_zlbyg_142";
const marginRightL$4 = "_marginRightL_zlbyg_146";
const marginRightXL$4 = "_marginRightXL_zlbyg_150";
const marginBottom0$4 = "_marginBottom0_zlbyg_154";
const marginBottomS$4 = "_marginBottomS_zlbyg_158";
const marginBottomM$4 = "_marginBottomM_zlbyg_162";
const marginBottomL$4 = "_marginBottomL_zlbyg_166";
const marginBottomXL$4 = "_marginBottomXL_zlbyg_170";
const marginLeft0$4 = "_marginLeft0_zlbyg_174";
const marginLeftS$4 = "_marginLeftS_zlbyg_178";
const marginLeftM$4 = "_marginLeftM_zlbyg_182";
const marginLeftL$4 = "_marginLeftL_zlbyg_186";
const marginLeftXL$4 = "_marginLeftXL_zlbyg_190";
const padding0$4 = "_padding0_zlbyg_194";
const paddingS$4 = "_paddingS_zlbyg_198";
const paddingM$4 = "_paddingM_zlbyg_202";
const paddingL$4 = "_paddingL_zlbyg_206";
const paddingXL$4 = "_paddingXL_zlbyg_210";
const paddingTop0$4 = "_paddingTop0_zlbyg_214";
const paddingTopS$4 = "_paddingTopS_zlbyg_218";
const paddingTopM$4 = "_paddingTopM_zlbyg_222";
const paddingTopL$4 = "_paddingTopL_zlbyg_226";
const paddingTopXL$4 = "_paddingTopXL_zlbyg_230";
const paddingRight0$4 = "_paddingRight0_zlbyg_234";
const paddingRightS$4 = "_paddingRightS_zlbyg_238";
const paddingRightM$4 = "_paddingRightM_zlbyg_242";
const paddingRightL$4 = "_paddingRightL_zlbyg_246";
const paddingRightXL$4 = "_paddingRightXL_zlbyg_250";
const paddingBottom0$4 = "_paddingBottom0_zlbyg_254";
const paddingBottomS$4 = "_paddingBottomS_zlbyg_258";
const paddingBottomM$4 = "_paddingBottomM_zlbyg_262";
const paddingBottomL$4 = "_paddingBottomL_zlbyg_266";
const paddingBottomXL$4 = "_paddingBottomXL_zlbyg_270";
const paddingLeft0$4 = "_paddingLeft0_zlbyg_274";
const paddingLeftS$4 = "_paddingLeftS_zlbyg_278";
const paddingLeftM$4 = "_paddingLeftM_zlbyg_282";
const paddingLeftL$4 = "_paddingLeftL_zlbyg_286";
const paddingLeftXL$4 = "_paddingLeftXL_zlbyg_290";
var scss$5 = {
  fontS: fontS$4,
  fontM: fontM$4,
  fontL: fontL$4,
  fontXL: fontXL$4,
  weightLight: weightLight$4,
  weightNormal: weightNormal$4,
  weightBold: weightBold$4,
  disabled: disabled$4,
  error: error$4,
  errorMessage: errorMessage$4,
  pointer: pointer$4,
  loading: loading$4,
  loadingAnimationOpacity: loadingAnimationOpacity$4,
  loadingAnimation: loadingAnimation$4,
  margin0: margin0$4,
  marginS: marginS$4,
  marginM: marginM$4,
  marginL: marginL$4,
  marginXL: marginXL$4,
  marginTop0: marginTop0$4,
  marginTopS: marginTopS$4,
  marginTopM: marginTopM$4,
  marginTopL: marginTopL$4,
  marginTopXL: marginTopXL$4,
  marginRight0: marginRight0$4,
  marginRightS: marginRightS$4,
  marginRightM: marginRightM$4,
  marginRightL: marginRightL$4,
  marginRightXL: marginRightXL$4,
  marginBottom0: marginBottom0$4,
  marginBottomS: marginBottomS$4,
  marginBottomM: marginBottomM$4,
  marginBottomL: marginBottomL$4,
  marginBottomXL: marginBottomXL$4,
  marginLeft0: marginLeft0$4,
  marginLeftS: marginLeftS$4,
  marginLeftM: marginLeftM$4,
  marginLeftL: marginLeftL$4,
  marginLeftXL: marginLeftXL$4,
  padding0: padding0$4,
  paddingS: paddingS$4,
  paddingM: paddingM$4,
  paddingL: paddingL$4,
  paddingXL: paddingXL$4,
  paddingTop0: paddingTop0$4,
  paddingTopS: paddingTopS$4,
  paddingTopM: paddingTopM$4,
  paddingTopL: paddingTopL$4,
  paddingTopXL: paddingTopXL$4,
  paddingRight0: paddingRight0$4,
  paddingRightS: paddingRightS$4,
  paddingRightM: paddingRightM$4,
  paddingRightL: paddingRightL$4,
  paddingRightXL: paddingRightXL$4,
  paddingBottom0: paddingBottom0$4,
  paddingBottomS: paddingBottomS$4,
  paddingBottomM: paddingBottomM$4,
  paddingBottomL: paddingBottomL$4,
  paddingBottomXL: paddingBottomXL$4,
  paddingLeft0: paddingLeft0$4,
  paddingLeftS: paddingLeftS$4,
  paddingLeftM: paddingLeftM$4,
  paddingLeftL: paddingLeftL$4,
  paddingLeftXL: paddingLeftXL$4,
  "backgroundColor--primary": "_backgroundColor--primary_zlbyg_294",
  "backgroundColor--text100": "_backgroundColor--text100_zlbyg_298",
  "color--primary": "_color--primary_zlbyg_302",
  "color--text100": "_color--text100_zlbyg_306"
};
function createStore(createState2) {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (nextState !== state) {
      const previousState = state;
      state = replace ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const subscribeWithSelector = (listener, selector = getState, equalityFn = Object.is) => {
    console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");
    let currentSlice = selector(state);
    function listenerToAdd() {
      const nextSlice = selector(state);
      if (!equalityFn(currentSlice, nextSlice)) {
        const previousSlice = currentSlice;
        listener(currentSlice = nextSlice, previousSlice);
      }
    }
    listeners.add(listenerToAdd);
    return () => listeners.delete(listenerToAdd);
  };
  const subscribe = (listener, selector, equalityFn) => {
    if (selector || equalityFn) {
      return subscribeWithSelector(listener, selector, equalityFn);
    }
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const destroy = () => listeners.clear();
  const api = { setState, getState, subscribe, destroy };
  state = createState2(setState, getState, api);
  return api;
}
const isSSR = typeof window === "undefined" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
const useIsomorphicLayoutEffect = isSSR ? useEffect : useLayoutEffect;
function create(createState2) {
  const api = typeof createState2 === "function" ? createStore(createState2) : createState2;
  const useStore2 = (selector = api.getState, equalityFn = Object.is) => {
    const [, forceUpdate] = useReducer((c2) => c2 + 1, 0);
    const state = api.getState();
    const stateRef = useRef(state);
    const selectorRef = useRef(selector);
    const equalityFnRef = useRef(equalityFn);
    const erroredRef = useRef(false);
    const currentSliceRef = useRef();
    if (currentSliceRef.current === void 0) {
      currentSliceRef.current = selector(state);
    }
    let newStateSlice;
    let hasNewStateSlice = false;
    if (stateRef.current !== state || selectorRef.current !== selector || equalityFnRef.current !== equalityFn || erroredRef.current) {
      newStateSlice = selector(state);
      hasNewStateSlice = !equalityFn(currentSliceRef.current, newStateSlice);
    }
    useIsomorphicLayoutEffect(() => {
      if (hasNewStateSlice) {
        currentSliceRef.current = newStateSlice;
      }
      stateRef.current = state;
      selectorRef.current = selector;
      equalityFnRef.current = equalityFn;
      erroredRef.current = false;
    });
    const stateBeforeSubscriptionRef = useRef(state);
    useIsomorphicLayoutEffect(() => {
      const listener = () => {
        try {
          const nextState = api.getState();
          const nextStateSlice = selectorRef.current(nextState);
          if (!equalityFnRef.current(currentSliceRef.current, nextStateSlice)) {
            stateRef.current = nextState;
            currentSliceRef.current = nextStateSlice;
            forceUpdate();
          }
        } catch (error2) {
          erroredRef.current = true;
          forceUpdate();
        }
      };
      const unsubscribe = api.subscribe(listener);
      if (api.getState() !== stateBeforeSubscriptionRef.current) {
        listener();
      }
      return unsubscribe;
    }, []);
    const sliceToReturn = hasNewStateSlice ? newStateSlice : currentSliceRef.current;
    useDebugValue(sliceToReturn);
    return sliceToReturn;
  };
  Object.assign(useStore2, api);
  useStore2[Symbol.iterator] = function() {
    console.warn("[useStore, api] = create() is deprecated and will be removed in v4");
    const items = [useStore2, api];
    return {
      next() {
        const done = items.length <= 0;
        return { value: items.shift(), done };
      }
    };
  };
  return useStore2;
}
const useStore = create((set, get2) => ({
  theme: "dark",
  setTheme: (theme) => set({ theme }),
  isLoading: true,
  setIsLoading: (isLoading) => set({ isLoading }),
  toasts: [],
  addToast: (toast2) => set((state) => {
    state.toasts.push(toast2);
  }),
  removeToast: (id2) => set((state) => ({
    toasts: state.toasts.filter((toast2) => toast2.id !== id2)
  }))
}));
const ThemeChanger = (_M) => {
  var props2 = __objRest(_M, []);
  const [theme, setTheme] = useStore((s) => [s.theme, s.setTheme]);
  const getClassNames = () => {
    let className = _getClassNames(__spreadValues({
      parent: scss$5.themeChanger,
      scss: scss$5
    }, props2));
    return className.join(" ");
  };
  const changeTheme = (theme2) => {
    localStorage.setItem("theme", theme2);
    setTheme(theme2);
  };
  return /* @__PURE__ */ React__default.createElement("div", {
    "data-testid": "ThemeChanger",
    className: getClassNames()
  }, /* @__PURE__ */ React__default.createElement(ButtonGroup, {
    buttons: ["dark", "light"],
    selected: theme,
    setSelected: changeTheme
  }));
};
const fontS$3 = "_fontS_41blb_1";
const fontM$3 = "_fontM_41blb_6";
const fontL$3 = "_fontL_41blb_11";
const fontXL$3 = "_fontXL_41blb_16";
const weightLight$3 = "_weightLight_41blb_21";
const weightNormal$3 = "_weightNormal_41blb_26";
const weightBold$3 = "_weightBold_41blb_31";
const disabled$3 = "_disabled_41blb_36";
const error$3 = "_error_41blb_45";
const errorMessage$3 = "_errorMessage_41blb_49";
const pointer$3 = "_pointer_41blb_54";
const loading$3 = "_loading_41blb_58";
const loadingAnimationOpacity$3 = "_loadingAnimationOpacity_41blb_1";
const loadingAnimation$3 = "_loadingAnimation_41blb_1";
const margin0$3 = "_margin0_41blb_94";
const marginS$3 = "_marginS_41blb_98";
const marginM$3 = "_marginM_41blb_102";
const marginL$3 = "_marginL_41blb_106";
const marginXL$3 = "_marginXL_41blb_110";
const marginTop0$3 = "_marginTop0_41blb_114";
const marginTopS$3 = "_marginTopS_41blb_118";
const marginTopM$3 = "_marginTopM_41blb_122";
const marginTopL$3 = "_marginTopL_41blb_126";
const marginTopXL$3 = "_marginTopXL_41blb_130";
const marginRight0$3 = "_marginRight0_41blb_134";
const marginRightS$3 = "_marginRightS_41blb_138";
const marginRightM$3 = "_marginRightM_41blb_142";
const marginRightL$3 = "_marginRightL_41blb_146";
const marginRightXL$3 = "_marginRightXL_41blb_150";
const marginBottom0$3 = "_marginBottom0_41blb_154";
const marginBottomS$3 = "_marginBottomS_41blb_158";
const marginBottomM$3 = "_marginBottomM_41blb_162";
const marginBottomL$3 = "_marginBottomL_41blb_166";
const marginBottomXL$3 = "_marginBottomXL_41blb_170";
const marginLeft0$3 = "_marginLeft0_41blb_174";
const marginLeftS$3 = "_marginLeftS_41blb_178";
const marginLeftM$3 = "_marginLeftM_41blb_182";
const marginLeftL$3 = "_marginLeftL_41blb_186";
const marginLeftXL$3 = "_marginLeftXL_41blb_190";
const padding0$3 = "_padding0_41blb_194";
const paddingS$3 = "_paddingS_41blb_198";
const paddingM$3 = "_paddingM_41blb_202";
const paddingL$3 = "_paddingL_41blb_206";
const paddingXL$3 = "_paddingXL_41blb_210";
const paddingTop0$3 = "_paddingTop0_41blb_214";
const paddingTopS$3 = "_paddingTopS_41blb_218";
const paddingTopM$3 = "_paddingTopM_41blb_222";
const paddingTopL$3 = "_paddingTopL_41blb_226";
const paddingTopXL$3 = "_paddingTopXL_41blb_230";
const paddingRight0$3 = "_paddingRight0_41blb_234";
const paddingRightS$3 = "_paddingRightS_41blb_238";
const paddingRightM$3 = "_paddingRightM_41blb_242";
const paddingRightL$3 = "_paddingRightL_41blb_246";
const paddingRightXL$3 = "_paddingRightXL_41blb_250";
const paddingBottom0$3 = "_paddingBottom0_41blb_254";
const paddingBottomS$3 = "_paddingBottomS_41blb_258";
const paddingBottomM$3 = "_paddingBottomM_41blb_262";
const paddingBottomL$3 = "_paddingBottomL_41blb_266";
const paddingBottomXL$3 = "_paddingBottomXL_41blb_270";
const paddingLeft0$3 = "_paddingLeft0_41blb_274";
const paddingLeftS$3 = "_paddingLeftS_41blb_278";
const paddingLeftM$3 = "_paddingLeftM_41blb_282";
const paddingLeftL$3 = "_paddingLeftL_41blb_286";
const paddingLeftXL$3 = "_paddingLeftXL_41blb_290";
const splashScreen = "_splashScreen_41blb_310";
var scss$4 = {
  fontS: fontS$3,
  fontM: fontM$3,
  fontL: fontL$3,
  fontXL: fontXL$3,
  weightLight: weightLight$3,
  weightNormal: weightNormal$3,
  weightBold: weightBold$3,
  disabled: disabled$3,
  error: error$3,
  errorMessage: errorMessage$3,
  pointer: pointer$3,
  loading: loading$3,
  loadingAnimationOpacity: loadingAnimationOpacity$3,
  loadingAnimation: loadingAnimation$3,
  margin0: margin0$3,
  marginS: marginS$3,
  marginM: marginM$3,
  marginL: marginL$3,
  marginXL: marginXL$3,
  marginTop0: marginTop0$3,
  marginTopS: marginTopS$3,
  marginTopM: marginTopM$3,
  marginTopL: marginTopL$3,
  marginTopXL: marginTopXL$3,
  marginRight0: marginRight0$3,
  marginRightS: marginRightS$3,
  marginRightM: marginRightM$3,
  marginRightL: marginRightL$3,
  marginRightXL: marginRightXL$3,
  marginBottom0: marginBottom0$3,
  marginBottomS: marginBottomS$3,
  marginBottomM: marginBottomM$3,
  marginBottomL: marginBottomL$3,
  marginBottomXL: marginBottomXL$3,
  marginLeft0: marginLeft0$3,
  marginLeftS: marginLeftS$3,
  marginLeftM: marginLeftM$3,
  marginLeftL: marginLeftL$3,
  marginLeftXL: marginLeftXL$3,
  padding0: padding0$3,
  paddingS: paddingS$3,
  paddingM: paddingM$3,
  paddingL: paddingL$3,
  paddingXL: paddingXL$3,
  paddingTop0: paddingTop0$3,
  paddingTopS: paddingTopS$3,
  paddingTopM: paddingTopM$3,
  paddingTopL: paddingTopL$3,
  paddingTopXL: paddingTopXL$3,
  paddingRight0: paddingRight0$3,
  paddingRightS: paddingRightS$3,
  paddingRightM: paddingRightM$3,
  paddingRightL: paddingRightL$3,
  paddingRightXL: paddingRightXL$3,
  paddingBottom0: paddingBottom0$3,
  paddingBottomS: paddingBottomS$3,
  paddingBottomM: paddingBottomM$3,
  paddingBottomL: paddingBottomL$3,
  paddingBottomXL: paddingBottomXL$3,
  paddingLeft0: paddingLeft0$3,
  paddingLeftS: paddingLeftS$3,
  paddingLeftM: paddingLeftM$3,
  paddingLeftL: paddingLeftL$3,
  paddingLeftXL: paddingLeftXL$3,
  "backgroundColor--primary": "_backgroundColor--primary_41blb_294",
  "backgroundColor--text100": "_backgroundColor--text100_41blb_298",
  "color--primary": "_color--primary_41blb_302",
  "color--text100": "_color--text100_41blb_306",
  splashScreen
};
const SplashScreen = (_N) => {
  var props2 = __objRest(_N, []);
  const [theme, isLoading, setIsLoading] = useStore((s) => [s.theme, s.isLoading, s.setIsLoading]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1600);
    return () => {
      clearTimeout(timeout);
      setIsLoading(false);
    };
  }, []);
  return /* @__PURE__ */ React__default.createElement("div", {
    "data-testid": "SplashScreen",
    className: scss$4.splashScreen,
    "data-isloading": isLoading,
    onClick: () => setIsLoading(false)
  }, /* @__PURE__ */ React__default.createElement(motion.div, {
    animate: {
      scale: [1.2, 1.5, 0.8, 0]
    },
    transition: spring$1
  }));
};
const spring$1 = {
  type: "spring",
  stiffness: 10700,
  damping: 0,
  duration: 3
};
const fontS$2 = "_fontS_v3jtl_1";
const fontM$2 = "_fontM_v3jtl_6";
const fontL$2 = "_fontL_v3jtl_11";
const fontXL$2 = "_fontXL_v3jtl_16";
const weightLight$2 = "_weightLight_v3jtl_21";
const weightNormal$2 = "_weightNormal_v3jtl_26";
const weightBold$2 = "_weightBold_v3jtl_31";
const disabled$2 = "_disabled_v3jtl_36";
const error$2 = "_error_v3jtl_45";
const errorMessage$2 = "_errorMessage_v3jtl_49";
const pointer$2 = "_pointer_v3jtl_54";
const loading$2 = "_loading_v3jtl_58";
const loadingAnimationOpacity$2 = "_loadingAnimationOpacity_v3jtl_1";
const loadingAnimation$2 = "_loadingAnimation_v3jtl_1";
const margin0$2 = "_margin0_v3jtl_94";
const marginS$2 = "_marginS_v3jtl_98";
const marginM$2 = "_marginM_v3jtl_102";
const marginL$2 = "_marginL_v3jtl_106";
const marginXL$2 = "_marginXL_v3jtl_110";
const marginTop0$2 = "_marginTop0_v3jtl_114";
const marginTopS$2 = "_marginTopS_v3jtl_118";
const marginTopM$2 = "_marginTopM_v3jtl_122";
const marginTopL$2 = "_marginTopL_v3jtl_126";
const marginTopXL$2 = "_marginTopXL_v3jtl_130";
const marginRight0$2 = "_marginRight0_v3jtl_134";
const marginRightS$2 = "_marginRightS_v3jtl_138";
const marginRightM$2 = "_marginRightM_v3jtl_142";
const marginRightL$2 = "_marginRightL_v3jtl_146";
const marginRightXL$2 = "_marginRightXL_v3jtl_150";
const marginBottom0$2 = "_marginBottom0_v3jtl_154";
const marginBottomS$2 = "_marginBottomS_v3jtl_158";
const marginBottomM$2 = "_marginBottomM_v3jtl_162";
const marginBottomL$2 = "_marginBottomL_v3jtl_166";
const marginBottomXL$2 = "_marginBottomXL_v3jtl_170";
const marginLeft0$2 = "_marginLeft0_v3jtl_174";
const marginLeftS$2 = "_marginLeftS_v3jtl_178";
const marginLeftM$2 = "_marginLeftM_v3jtl_182";
const marginLeftL$2 = "_marginLeftL_v3jtl_186";
const marginLeftXL$2 = "_marginLeftXL_v3jtl_190";
const padding0$2 = "_padding0_v3jtl_194";
const paddingS$2 = "_paddingS_v3jtl_198";
const paddingM$2 = "_paddingM_v3jtl_202";
const paddingL$2 = "_paddingL_v3jtl_206";
const paddingXL$2 = "_paddingXL_v3jtl_210";
const paddingTop0$2 = "_paddingTop0_v3jtl_214";
const paddingTopS$2 = "_paddingTopS_v3jtl_218";
const paddingTopM$2 = "_paddingTopM_v3jtl_222";
const paddingTopL$2 = "_paddingTopL_v3jtl_226";
const paddingTopXL$2 = "_paddingTopXL_v3jtl_230";
const paddingRight0$2 = "_paddingRight0_v3jtl_234";
const paddingRightS$2 = "_paddingRightS_v3jtl_238";
const paddingRightM$2 = "_paddingRightM_v3jtl_242";
const paddingRightL$2 = "_paddingRightL_v3jtl_246";
const paddingRightXL$2 = "_paddingRightXL_v3jtl_250";
const paddingBottom0$2 = "_paddingBottom0_v3jtl_254";
const paddingBottomS$2 = "_paddingBottomS_v3jtl_258";
const paddingBottomM$2 = "_paddingBottomM_v3jtl_262";
const paddingBottomL$2 = "_paddingBottomL_v3jtl_266";
const paddingBottomXL$2 = "_paddingBottomXL_v3jtl_270";
const paddingLeft0$2 = "_paddingLeft0_v3jtl_274";
const paddingLeftS$2 = "_paddingLeftS_v3jtl_278";
const paddingLeftM$2 = "_paddingLeftM_v3jtl_282";
const paddingLeftL$2 = "_paddingLeftL_v3jtl_286";
const paddingLeftXL$2 = "_paddingLeftXL_v3jtl_290";
const toast = "_toast_v3jtl_310";
const success = "_success_v3jtl_325";
var scss$3 = {
  fontS: fontS$2,
  fontM: fontM$2,
  fontL: fontL$2,
  fontXL: fontXL$2,
  weightLight: weightLight$2,
  weightNormal: weightNormal$2,
  weightBold: weightBold$2,
  disabled: disabled$2,
  error: error$2,
  errorMessage: errorMessage$2,
  pointer: pointer$2,
  loading: loading$2,
  loadingAnimationOpacity: loadingAnimationOpacity$2,
  loadingAnimation: loadingAnimation$2,
  margin0: margin0$2,
  marginS: marginS$2,
  marginM: marginM$2,
  marginL: marginL$2,
  marginXL: marginXL$2,
  marginTop0: marginTop0$2,
  marginTopS: marginTopS$2,
  marginTopM: marginTopM$2,
  marginTopL: marginTopL$2,
  marginTopXL: marginTopXL$2,
  marginRight0: marginRight0$2,
  marginRightS: marginRightS$2,
  marginRightM: marginRightM$2,
  marginRightL: marginRightL$2,
  marginRightXL: marginRightXL$2,
  marginBottom0: marginBottom0$2,
  marginBottomS: marginBottomS$2,
  marginBottomM: marginBottomM$2,
  marginBottomL: marginBottomL$2,
  marginBottomXL: marginBottomXL$2,
  marginLeft0: marginLeft0$2,
  marginLeftS: marginLeftS$2,
  marginLeftM: marginLeftM$2,
  marginLeftL: marginLeftL$2,
  marginLeftXL: marginLeftXL$2,
  padding0: padding0$2,
  paddingS: paddingS$2,
  paddingM: paddingM$2,
  paddingL: paddingL$2,
  paddingXL: paddingXL$2,
  paddingTop0: paddingTop0$2,
  paddingTopS: paddingTopS$2,
  paddingTopM: paddingTopM$2,
  paddingTopL: paddingTopL$2,
  paddingTopXL: paddingTopXL$2,
  paddingRight0: paddingRight0$2,
  paddingRightS: paddingRightS$2,
  paddingRightM: paddingRightM$2,
  paddingRightL: paddingRightL$2,
  paddingRightXL: paddingRightXL$2,
  paddingBottom0: paddingBottom0$2,
  paddingBottomS: paddingBottomS$2,
  paddingBottomM: paddingBottomM$2,
  paddingBottomL: paddingBottomL$2,
  paddingBottomXL: paddingBottomXL$2,
  paddingLeft0: paddingLeft0$2,
  paddingLeftS: paddingLeftS$2,
  paddingLeftM: paddingLeftM$2,
  paddingLeftL: paddingLeftL$2,
  paddingLeftXL: paddingLeftXL$2,
  "backgroundColor--primary": "_backgroundColor--primary_v3jtl_294",
  "backgroundColor--text100": "_backgroundColor--text100_v3jtl_298",
  "color--primary": "_color--primary_v3jtl_302",
  "color--text100": "_color--text100_v3jtl_306",
  toast,
  success
};
const Toast = (_O) => {
  var _P = _O, { children, id: id2, type } = _P, props2 = __objRest(_P, ["children", "id", "type"]);
  const [removeToast] = useStore((s) => [s.removeToast]);
  const [animate2, setAnimate] = useState({ x: -50, y: 0, scale: 1, rotate: 0, opacity: 1 });
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate({ x: 200, y: 0, scale: 1, rotate: 0, opacity: 0 });
      const timeout1 = setTimeout(() => {
        removeToast(id2);
        clearTimeout(timeout1);
      }, 2500);
    }, 2e3);
    return () => {
      clearTimeout(timeout);
      removeToast(id2);
    };
  }, []);
  const getClassNames = () => {
    let className = _getClassNames(__spreadValues({
      parent: scss$3.toast,
      scss: scss$3
    }, props2));
    return className.join(" ");
  };
  return /* @__PURE__ */ React__default.createElement(motion.div, {
    animate: animate2
  }, /* @__PURE__ */ React__default.createElement("div", {
    "data-testid": "Toast",
    className: getClassNames()
  }, children));
};
const toastContainer = "_toastContainer_10au3_1";
var scss$2 = {
  toastContainer
};
const StoreProvider = (_Q) => {
  var _R = _Q, {
    children,
    defaultTheme,
    disableSplashScreen
  } = _R, props2 = __objRest(_R, [
    "children",
    "defaultTheme",
    "disableSplashScreen"
  ]);
  const [theme, setTheme, toasts] = useStore((s) => [s.theme, s.setTheme, s.toasts]);
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      const _theme = localStorage.getItem("theme");
      setTheme(_theme || "dark");
    }
  }, [localStorage]);
  const showToasts = () => {
    return /* @__PURE__ */ React__default.createElement("div", {
      className: scss$2.toastContainer
    }, toasts.map((toast2, index) => /* @__PURE__ */ React__default.createElement(Toast, {
      key: index,
      id: toast2.id,
      type: "default"
    }, toast2.children)));
  };
  return /* @__PURE__ */ React__default.createElement("div", {
    "data-testid": "StoreProvider",
    className: theme
  }, showToasts(), !disableSplashScreen && /* @__PURE__ */ React__default.createElement(SplashScreen, null), children);
};
const fontS$1 = "_fontS_1b4he_1";
const fontM$1 = "_fontM_1b4he_6";
const fontL$1 = "_fontL_1b4he_11";
const fontXL$1 = "_fontXL_1b4he_16";
const weightLight$1 = "_weightLight_1b4he_21";
const weightNormal$1 = "_weightNormal_1b4he_26";
const weightBold$1 = "_weightBold_1b4he_31";
const disabled$1 = "_disabled_1b4he_36";
const error$1 = "_error_1b4he_45";
const errorMessage$1 = "_errorMessage_1b4he_49";
const pointer$1 = "_pointer_1b4he_54";
const loading$1 = "_loading_1b4he_58";
const loadingAnimationOpacity$1 = "_loadingAnimationOpacity_1b4he_1";
const loadingAnimation$1 = "_loadingAnimation_1b4he_1";
const margin0$1 = "_margin0_1b4he_94";
const marginS$1 = "_marginS_1b4he_98";
const marginM$1 = "_marginM_1b4he_102";
const marginL$1 = "_marginL_1b4he_106";
const marginXL$1 = "_marginXL_1b4he_110";
const marginTop0$1 = "_marginTop0_1b4he_114";
const marginTopS$1 = "_marginTopS_1b4he_118";
const marginTopM$1 = "_marginTopM_1b4he_122";
const marginTopL$1 = "_marginTopL_1b4he_126";
const marginTopXL$1 = "_marginTopXL_1b4he_130";
const marginRight0$1 = "_marginRight0_1b4he_134";
const marginRightS$1 = "_marginRightS_1b4he_138";
const marginRightM$1 = "_marginRightM_1b4he_142";
const marginRightL$1 = "_marginRightL_1b4he_146";
const marginRightXL$1 = "_marginRightXL_1b4he_150";
const marginBottom0$1 = "_marginBottom0_1b4he_154";
const marginBottomS$1 = "_marginBottomS_1b4he_158";
const marginBottomM$1 = "_marginBottomM_1b4he_162";
const marginBottomL$1 = "_marginBottomL_1b4he_166";
const marginBottomXL$1 = "_marginBottomXL_1b4he_170";
const marginLeft0$1 = "_marginLeft0_1b4he_174";
const marginLeftS$1 = "_marginLeftS_1b4he_178";
const marginLeftM$1 = "_marginLeftM_1b4he_182";
const marginLeftL$1 = "_marginLeftL_1b4he_186";
const marginLeftXL$1 = "_marginLeftXL_1b4he_190";
const padding0$1 = "_padding0_1b4he_194";
const paddingS$1 = "_paddingS_1b4he_198";
const paddingM$1 = "_paddingM_1b4he_202";
const paddingL$1 = "_paddingL_1b4he_206";
const paddingXL$1 = "_paddingXL_1b4he_210";
const paddingTop0$1 = "_paddingTop0_1b4he_214";
const paddingTopS$1 = "_paddingTopS_1b4he_218";
const paddingTopM$1 = "_paddingTopM_1b4he_222";
const paddingTopL$1 = "_paddingTopL_1b4he_226";
const paddingTopXL$1 = "_paddingTopXL_1b4he_230";
const paddingRight0$1 = "_paddingRight0_1b4he_234";
const paddingRightS$1 = "_paddingRightS_1b4he_238";
const paddingRightM$1 = "_paddingRightM_1b4he_242";
const paddingRightL$1 = "_paddingRightL_1b4he_246";
const paddingRightXL$1 = "_paddingRightXL_1b4he_250";
const paddingBottom0$1 = "_paddingBottom0_1b4he_254";
const paddingBottomS$1 = "_paddingBottomS_1b4he_258";
const paddingBottomM$1 = "_paddingBottomM_1b4he_262";
const paddingBottomL$1 = "_paddingBottomL_1b4he_266";
const paddingBottomXL$1 = "_paddingBottomXL_1b4he_270";
const paddingLeft0$1 = "_paddingLeft0_1b4he_274";
const paddingLeftS$1 = "_paddingLeftS_1b4he_278";
const paddingLeftM$1 = "_paddingLeftM_1b4he_282";
const paddingLeftL$1 = "_paddingLeftL_1b4he_286";
const paddingLeftXL$1 = "_paddingLeftXL_1b4he_290";
const handle = "_handle_1b4he_336";
var scss$1 = {
  fontS: fontS$1,
  fontM: fontM$1,
  fontL: fontL$1,
  fontXL: fontXL$1,
  weightLight: weightLight$1,
  weightNormal: weightNormal$1,
  weightBold: weightBold$1,
  disabled: disabled$1,
  error: error$1,
  errorMessage: errorMessage$1,
  pointer: pointer$1,
  loading: loading$1,
  loadingAnimationOpacity: loadingAnimationOpacity$1,
  loadingAnimation: loadingAnimation$1,
  margin0: margin0$1,
  marginS: marginS$1,
  marginM: marginM$1,
  marginL: marginL$1,
  marginXL: marginXL$1,
  marginTop0: marginTop0$1,
  marginTopS: marginTopS$1,
  marginTopM: marginTopM$1,
  marginTopL: marginTopL$1,
  marginTopXL: marginTopXL$1,
  marginRight0: marginRight0$1,
  marginRightS: marginRightS$1,
  marginRightM: marginRightM$1,
  marginRightL: marginRightL$1,
  marginRightXL: marginRightXL$1,
  marginBottom0: marginBottom0$1,
  marginBottomS: marginBottomS$1,
  marginBottomM: marginBottomM$1,
  marginBottomL: marginBottomL$1,
  marginBottomXL: marginBottomXL$1,
  marginLeft0: marginLeft0$1,
  marginLeftS: marginLeftS$1,
  marginLeftM: marginLeftM$1,
  marginLeftL: marginLeftL$1,
  marginLeftXL: marginLeftXL$1,
  padding0: padding0$1,
  paddingS: paddingS$1,
  paddingM: paddingM$1,
  paddingL: paddingL$1,
  paddingXL: paddingXL$1,
  paddingTop0: paddingTop0$1,
  paddingTopS: paddingTopS$1,
  paddingTopM: paddingTopM$1,
  paddingTopL: paddingTopL$1,
  paddingTopXL: paddingTopXL$1,
  paddingRight0: paddingRight0$1,
  paddingRightS: paddingRightS$1,
  paddingRightM: paddingRightM$1,
  paddingRightL: paddingRightL$1,
  paddingRightXL: paddingRightXL$1,
  paddingBottom0: paddingBottom0$1,
  paddingBottomS: paddingBottomS$1,
  paddingBottomM: paddingBottomM$1,
  paddingBottomL: paddingBottomL$1,
  paddingBottomXL: paddingBottomXL$1,
  paddingLeft0: paddingLeft0$1,
  paddingLeftS: paddingLeftS$1,
  paddingLeftM: paddingLeftM$1,
  paddingLeftL: paddingLeftL$1,
  paddingLeftXL: paddingLeftXL$1,
  "backgroundColor--primary": "_backgroundColor--primary_1b4he_294",
  "backgroundColor--text100": "_backgroundColor--text100_1b4he_298",
  "color--primary": "_color--primary_1b4he_302",
  "color--text100": "_color--text100_1b4he_306",
  "switch": "_switch_1b4he_310",
  handle
};
const Toggle = (_S) => {
  var _T = _S, { onClick, value, disabled: disabled2 } = _T, props2 = __objRest(_T, ["onClick", "value", "disabled"]);
  const getClassNames = () => {
    let className = _getClassNames(__spreadValues({
      parent: scss$1.switch,
      scss: scss$1,
      disabled: disabled2
    }, props2));
    return className.join(" ");
  };
  return /* @__PURE__ */ React__default.createElement("div", {
    className: getClassNames(),
    "data-ison": value,
    onClick: (e2) => {
      if (disabled2)
        return;
      if (onClick)
        onClick(e2);
    }
  }, /* @__PURE__ */ React__default.createElement(motion.div, {
    className: scss$1.handle,
    layout: true,
    transition: spring
  }));
};
const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};
const fontS = "_fontS_kh6c6_1";
const fontM = "_fontM_kh6c6_6";
const fontL = "_fontL_kh6c6_11";
const fontXL = "_fontXL_kh6c6_16";
const weightLight = "_weightLight_kh6c6_21";
const weightNormal = "_weightNormal_kh6c6_26";
const weightBold = "_weightBold_kh6c6_31";
const disabled = "_disabled_kh6c6_36";
const error = "_error_kh6c6_45";
const errorMessage = "_errorMessage_kh6c6_49";
const pointer = "_pointer_kh6c6_54";
const loading = "_loading_kh6c6_58";
const loadingAnimationOpacity = "_loadingAnimationOpacity_kh6c6_1";
const loadingAnimation = "_loadingAnimation_kh6c6_1";
const margin0 = "_margin0_kh6c6_94";
const marginS = "_marginS_kh6c6_98";
const marginM = "_marginM_kh6c6_102";
const marginL = "_marginL_kh6c6_106";
const marginXL = "_marginXL_kh6c6_110";
const marginTop0 = "_marginTop0_kh6c6_114";
const marginTopS = "_marginTopS_kh6c6_118";
const marginTopM = "_marginTopM_kh6c6_122";
const marginTopL = "_marginTopL_kh6c6_126";
const marginTopXL = "_marginTopXL_kh6c6_130";
const marginRight0 = "_marginRight0_kh6c6_134";
const marginRightS = "_marginRightS_kh6c6_138";
const marginRightM = "_marginRightM_kh6c6_142";
const marginRightL = "_marginRightL_kh6c6_146";
const marginRightXL = "_marginRightXL_kh6c6_150";
const marginBottom0 = "_marginBottom0_kh6c6_154";
const marginBottomS = "_marginBottomS_kh6c6_158";
const marginBottomM = "_marginBottomM_kh6c6_162";
const marginBottomL = "_marginBottomL_kh6c6_166";
const marginBottomXL = "_marginBottomXL_kh6c6_170";
const marginLeft0 = "_marginLeft0_kh6c6_174";
const marginLeftS = "_marginLeftS_kh6c6_178";
const marginLeftM = "_marginLeftM_kh6c6_182";
const marginLeftL = "_marginLeftL_kh6c6_186";
const marginLeftXL = "_marginLeftXL_kh6c6_190";
const padding0 = "_padding0_kh6c6_194";
const paddingS = "_paddingS_kh6c6_198";
const paddingM = "_paddingM_kh6c6_202";
const paddingL = "_paddingL_kh6c6_206";
const paddingXL = "_paddingXL_kh6c6_210";
const paddingTop0 = "_paddingTop0_kh6c6_214";
const paddingTopS = "_paddingTopS_kh6c6_218";
const paddingTopM = "_paddingTopM_kh6c6_222";
const paddingTopL = "_paddingTopL_kh6c6_226";
const paddingTopXL = "_paddingTopXL_kh6c6_230";
const paddingRight0 = "_paddingRight0_kh6c6_234";
const paddingRightS = "_paddingRightS_kh6c6_238";
const paddingRightM = "_paddingRightM_kh6c6_242";
const paddingRightL = "_paddingRightL_kh6c6_246";
const paddingRightXL = "_paddingRightXL_kh6c6_250";
const paddingBottom0 = "_paddingBottom0_kh6c6_254";
const paddingBottomS = "_paddingBottomS_kh6c6_258";
const paddingBottomM = "_paddingBottomM_kh6c6_262";
const paddingBottomL = "_paddingBottomL_kh6c6_266";
const paddingBottomXL = "_paddingBottomXL_kh6c6_270";
const paddingLeft0 = "_paddingLeft0_kh6c6_274";
const paddingLeftS = "_paddingLeftS_kh6c6_278";
const paddingLeftM = "_paddingLeftM_kh6c6_282";
const paddingLeftL = "_paddingLeftL_kh6c6_286";
const paddingLeftXL = "_paddingLeftXL_kh6c6_290";
const tabs = "_tabs_kh6c6_310";
const item = "_item_kh6c6_335";
const selected = "_selected_kh6c6_338";
const overlay = "_overlay_kh6c6_345";
var scss = {
  fontS,
  fontM,
  fontL,
  fontXL,
  weightLight,
  weightNormal,
  weightBold,
  disabled,
  error,
  errorMessage,
  pointer,
  loading,
  loadingAnimationOpacity,
  loadingAnimation,
  margin0,
  marginS,
  marginM,
  marginL,
  marginXL,
  marginTop0,
  marginTopS,
  marginTopM,
  marginTopL,
  marginTopXL,
  marginRight0,
  marginRightS,
  marginRightM,
  marginRightL,
  marginRightXL,
  marginBottom0,
  marginBottomS,
  marginBottomM,
  marginBottomL,
  marginBottomXL,
  marginLeft0,
  marginLeftS,
  marginLeftM,
  marginLeftL,
  marginLeftXL,
  padding0,
  paddingS,
  paddingM,
  paddingL,
  paddingXL,
  paddingTop0,
  paddingTopS,
  paddingTopM,
  paddingTopL,
  paddingTopXL,
  paddingRight0,
  paddingRightS,
  paddingRightM,
  paddingRightL,
  paddingRightXL,
  paddingBottom0,
  paddingBottomS,
  paddingBottomM,
  paddingBottomL,
  paddingBottomXL,
  paddingLeft0,
  paddingLeftS,
  paddingLeftM,
  paddingLeftL,
  paddingLeftXL,
  "backgroundColor--primary": "_backgroundColor--primary_kh6c6_294",
  "backgroundColor--text100": "_backgroundColor--text100_kh6c6_298",
  "color--primary": "_color--primary_kh6c6_302",
  "color--text100": "_color--text100_kh6c6_306",
  tabs,
  item,
  selected,
  overlay
};
const Tabs = (_U) => {
  var _V = _U, { children } = _V, props2 = __objRest(_V, ["children"]);
  const getClassNames = () => {
    let className = _getClassNames(__spreadValues({
      parent: scss.tabs,
      scss
    }, props2));
    return className.join(" ");
  };
  const [selectedTab, setSelectedTab] = useState(children[0]);
  return /* @__PURE__ */ React__default.createElement("div", {
    "data-testid": "Tabs",
    className: getClassNames()
  }, /* @__PURE__ */ React__default.createElement("ul", null, children.map((item2, index) => /* @__PURE__ */ React__default.createElement(motion.li, {
    key: item2,
    className: item2 === selectedTab ? scss.selected : "",
    onClick: () => setSelectedTab(item2)
  }, item2 === selectedTab ? /* @__PURE__ */ React__default.createElement(motion.div, {
    className: scss.overlay,
    layoutId: "overlay"
  }) : null, /* @__PURE__ */ React__default.createElement("span", {
    className: scss.item
  }, item2)))), /* @__PURE__ */ React__default.createElement(AnimatePresence, {
    exitBeforeEnter: true
  }, /* @__PURE__ */ React__default.createElement(motion.div, {
    key: selectedTab ? selectedTab : "empty",
    animate: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: 20 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.15 }
  }, selectedTab ? selectedTab : "\u{1F60B}")));
};
export { Board, Button, ButtonGroup, Card, CardContent, CardHeader, Checkbox, Code, Collapse, ComponentWrapper, ContextMenu, DropDown, Flex, Grid, Icon, Image, Input, Line, Modal, Spacer, SplashScreen, StoreProvider, Tabs, Tag, Text, TextArea, ThemeChanger, Toast, Toggle };