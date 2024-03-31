"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }"use client";

// src/react-virtual-map/main.jsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var mapPropsContext = _react.createContext.call(void 0, null);
var Container = ({ coordinateCenter = "tl", width, height, AllowScrolX, AllowScrolY, children, className = "", style = {} }) => {
  const mover = _react.useRef.call(void 0, null);
  var moving = false;
  var lastPos = [0, 0];
  var pos = [0, 0];
  function renewPos(newPos) {
    if (!moving) {
      return;
    }
    let newEPos = [
      pos[0] + (newPos[0] - lastPos[0]),
      pos[1] + (newPos[1] - lastPos[1])
    ];
    lastPos = newPos;
    pos = newEPos;
    mover.current.style.transform = `translateX(${pos[0]}px) translateY(${pos[1]}px)`;
  }
  return /* @__PURE__ */ _react2.default.createElement(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        overflow: "hidden",
        ...style
      },
      onMouseLeave: () => {
        moving = false;
      },
      onMouseEnter: () => {
        moving = false;
      },
      onMouseMove: (e) => {
        renewPos([e.clientX, e.clientY]);
      }
    },
    /* @__PURE__ */ _react2.default.createElement(
      "div",
      {
        style: {
          width: `${width}px`,
          overflow: "hidden",
          height: `${height}px`
        },
        className,
        ref: mover,
        onMouseDown: (e) => {
          moving = true;
          lastPos = [e.clientX, e.clientY];
        },
        onMouseUp: () => {
          moving = false;
        }
      },
      /* @__PURE__ */ _react2.default.createElement(mapPropsContext.Provider, { value: {
        coordinateCenter,
        width,
        height
      } }, children)
    )
  );
};
var Children = ({ x, y, children, className = "" }) => {
  const mapProps = _react.useContext.call(void 0, mapPropsContext);
  const xf = mapProps.coordinateCenter[1] === "l";
  const yf = mapProps.coordinateCenter[0] === "t";
  let xi = x, yi = y;
  if (!xf) {
    xi = mapProps.width - x;
  }
  if (!yf) {
    yi = mapProps.height - y;
  }
  return /* @__PURE__ */ _react2.default.createElement(
    "div",
    {
      style: {
        width: "0px",
        height: "0px",
        transform: `translateX(${xi}px) translateY(${yi}px)`
      }
    },
    /* @__PURE__ */ _react2.default.createElement(
      "div",
      {
        style: {
          width: "0px",
          height: "0px",
          overflow: "visible",
          display: "flex",
          justifyContent: xf ? "start" : "end",
          alignItems: yf ? "start" : "end"
        },
        className
      },
      /* @__PURE__ */ _react2.default.createElement(
        "div",
        {
          style: { flexShrink: "0" }
        },
        children
      )
    )
  );
};

// src/react-virtual-map/index.tsx
var OhMyMap = Container;
var MapObj = Children;



exports.MapObj = MapObj; exports.OhMyMap = OhMyMap;
