Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactSpring = require('react-spring');
var PropTypes = require('prop-types');

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

var useHover = function (_a) {
    var _b = _a === void 0 ? {} : _a, minimumScale = _b.minimumScale, minimumOpacity = _b.minimumOpacity, colors = _b.colors, backgroundColors = _b.backgroundColors;
    var _c = React.useState(false), hover = _c[0], setHover = _c[1];
    var hasTwoColors = colors && colors.color && colors.hoverColor && true;
    var hasTwoBGColors = backgroundColors &&
        backgroundColors.color &&
        backgroundColors.hoverColor &&
        true;
    var minScale = minimumScale ? minimumScale : 0.95;
    var minOpacity = minimumOpacity ? minimumOpacity : 0.6;
    var springInitialProps = {
        transform: "scale(1)",
        opacity: '1',
        color: colors && hasTwoColors ? colors.color : '',
        backgroundColor: backgroundColors && hasTwoBGColors ? backgroundColors.color : '',
    };
    var _d = reactSpring.useSpring(function () { return springInitialProps; }), spring = _d[0], setSpring = _d[1];
    setSpring({
        transform: "scale(" + (hover ? minScale : '1') + ")",
        opacity: hover ? "" + minOpacity : '1',
        color: colors && hasTwoColors ? (hover ? colors.hoverColor : colors.color) : '',
        backgroundColor: backgroundColors && hasTwoBGColors
            ? hover
                ? backgroundColors.hoverColor
                : backgroundColors.color
            : '',
    });
    return {
        setHover: setHover,
        spring: spring,
        animated: reactSpring.animated,
    };
};

var AnimationWrapper = function (_a) {
    var colors = _a.colors, backgroundColors = _a.backgroundColors, minimumScale = _a.minimumScale, minimumOpacity = _a.minimumOpacity, style = _a.style, props = __rest(_a, ["colors", "backgroundColors", "minimumScale", "minimumOpacity", "style"]);
    var _b = useHover({
        minimumScale: minimumScale,
        colors: colors,
        backgroundColors: backgroundColors,
        minimumOpacity: minimumOpacity,
    }), animated = _b.animated, setHover = _b.setHover, spring = _b.spring;
    return (React.createElement(animated.div, __assign({}, props, { style: __assign(__assign({ display: 'inline-block' }, spring), style), onPointerOver: function () {
            setHover(true);
        }, onPointerOut: function () {
            setHover(false);
        } })));
};
AnimationWrapper.propTypes = {
    colors: PropTypes.shape({
        color: PropTypes.string.isRequired,
        hoverColor: PropTypes.string.isRequired,
    }),
    backgroundColors: PropTypes.shape({
        color: PropTypes.string.isRequired,
        hoverColor: PropTypes.string.isRequired,
    }),
    minimumScale: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    minimumOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    style: PropTypes.object,
};

exports.AnimationWrapper = AnimationWrapper;
exports.useHover = useHover;
//# sourceMappingURL=index.js.map
