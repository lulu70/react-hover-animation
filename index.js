Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactSpring = require('react-spring');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var useHover = function (props) {
    if (props === void 0) { props = {}; }
    var _a = React.useState(false), hover = _a[0], setHover = _a[1];
    var initialProps = Object.entries(props).reduce(function (acc, entry) {
        var _a;
        var key = entry[0];
        var value = entry[1];
        var hasTwoValues = (value === null || value === void 0 ? void 0 : value.initial) && (value === null || value === void 0 ? void 0 : value.onHover) && true;
        if (!hasTwoValues)
            return acc;
        return __assign(__assign({}, acc), (_a = {}, _a[key] = value === null || value === void 0 ? void 0 : value.initial, _a));
    }, { transform: 'scale(1)', opacity: '1' });
    var _b = reactSpring.useSpring(function () { return initialProps; }), spring = _b[0], setSpring = _b[1];
    var onHoverProps = Object.entries(props).reduce(function (acc, entry) {
        var _a;
        var key = entry[0];
        var value = entry[1];
        var hasTwoValues = (value === null || value === void 0 ? void 0 : value.initial) && (value === null || value === void 0 ? void 0 : value.onHover) && true;
        if (!hasTwoValues)
            return acc;
        return __assign(__assign({}, acc), (_a = {}, _a[key] = hover ? value === null || value === void 0 ? void 0 : value.onHover : value === null || value === void 0 ? void 0 : value.initial, _a));
    }, {});
    setSpring(__assign({ transform: "scale(" + (hover ? '0.95' : '1') + ")", opacity: hover ? '0.6' : '1' }, onHoverProps));
    return {
        spring: spring,
        animated: reactSpring.animated,
        setHover: setHover,
    };
};

var AnimationWrapper = function (_a) {
    var children = _a.children, config = _a.config, style = _a.style, reset = _a.reset, rest = __rest(_a, ["children", "config", "style", "reset"]);
    var hookConfig = reset
        ? __assign({ opacity: {
                initial: '1',
                onHover: '1',
            }, transform: {
                initial: 'scale(1)',
                onHover: 'scale(1)',
            } }, config) : config;
    var _b = useHover(hookConfig), animated = _b.animated, setHover = _b.setHover, spring = _b.spring;
    return (React.createElement(animated.div, __assign({}, rest, { style: __assign(__assign({}, spring), style), onPointerOver: function () {
            setHover(true);
        }, onPointerOut: function () {
            setHover(false);
        } }), children));
};

exports.AnimationWrapper = AnimationWrapper;
exports.useHover = useHover;
//# sourceMappingURL=index.js.map
