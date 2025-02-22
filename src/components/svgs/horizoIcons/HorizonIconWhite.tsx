import * as React from "react";
import { View } from "react-native";
import { widthScreen } from "../../../constants/DimensionScreen";
import Svg, {
  SvgProps,
  Defs,
  LinearGradient,
  Stop,
  G,
  Path,
  Circle,
  ClipPath,
  Rect,
} from "react-native-svg";
export const HorizonSvgWhite = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    viewBox="0 0 1060 300"
    {...props}
  >
    <Defs>
      <LinearGradient
        id="b"
        x1={0.272}
        x2={0.879}
        y1={0.239}
        y2={0.761}
        gradientUnits="objectBoundingBox"
        spreadMethod="pad"
      >
        <Stop offset="0%" stopColor="#99d43c" />
        <Stop offset="100%" stopColor="#25b169" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={0.135}
        x2={1.107}
        y1={0.5}
        y2={0.265}
        gradientUnits="objectBoundingBox"
        spreadMethod="pad"
      >
        <Stop offset="0%" stopColor="rgba(122,203,77,0.61)" />
        <Stop offset="100%" stopColor="#16984d" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={0.042}
        x2={0.855}
        y1={0.443}
        y2={0.691}
        gradientUnits="objectBoundingBox"
        spreadMethod="pad"
      >
        <Stop offset="0%" stopColor="rgba(0,249,112,0.45)" />
        <Stop offset="100%" stopColor="rgba(42,156,86,0.51)" />
      </LinearGradient>
    </Defs>
    <G clipPath="url(#a)" transform="translate(2.666 .69)">
      <Path
        fill="url(#b)"
        d="M-6.823 173.537c0-101.416 82.213-183.63 183.629-183.63s183.63 82.214 183.63 183.63-82.214 183.63-183.63 183.63-183.63-82.215-183.63-183.63Z"
        transform="matrix(1.02723 0 0 1 -42.385 29.993)"
      />
      <Circle
        r={89.846}
        fill="url(#c)"
        transform="matrix(1.4805 0 0 1.33351 100.822 290.375)"
      />
      <Circle
        r={89.846}
        fill="url(#d)"
        transform="matrix(2.41697 0 0 2.34453 309.607 70.028)"
      />
      <Path
        fill="#fff"
        d="m215.173 65.526 102.692-3.408 1 123.826c-8.097 5.71-50.1 7.899-99.18 0l-4.512-120.418Z"
      />
      <ClipPath id="a">
        <Path
          fill="#e80e0e"
          strokeWidth={0}
          d="m64.336 300 63.324-.69.075-64.874c36.854 25.923 87.298 31.178 93.438 31.842v33.032h63.001V81.4h-63v104.69c-13.658-1.873-72.699-16.372-93.51-46.43V81.4l-46.01.07v20.49l-17.318-.15V300Z"
        />
      </ClipPath>
    </G>
    <Rect
      width={13.291}
      height={13.291}
      fill="#fff"
      rx={0}
      ry={0}
      transform="matrix(1.39906 0 0 1.39906 11.393 30.37)"
    />
    <Rect
      width={13.291}
      height={13.291}
      fill="#fff"
      rx={0}
      ry={0}
      transform="translate(35.933 53.534) scale(3.12991)"
    />
    <Path
      fill="#fff"
      d="M376.627 155.478c17.257-1.314 40.434 8.87 50.333 19.112 13.066 12.923 21.317 32.762 20.366 52.376-.161 18.218-7.508 36.197-18.254 47.64-11.552 12.384-28.834 20.332-47.853 21.15-17.485 1.493-39.388-3.22-55.954-18.055-13.86-15.182-20.848-29.387-21.054-52.03-.193-21.328 4.497-34.447 22.47-53.347 16.473-12.957 31.057-16.554 49.946-16.846Zm-.532 21.48c-26.582-.517-46.007 17.867-45.348 49.518s17.584 47.256 46.817 47.476 41.523-21.995 42.813-47.802-14.346-48.934-44.282-49.192ZM469.102 294.428V156.984h48.08c12.457.04 28.208 5.022 33.16 9.262 8.176 2.348 16.748 17.105 16.307 30.712.352 10.726-6.365 23.369-11.94 27.772-3.598 4.059-13.471 9.796-19.378 11.095 2.461 1.119 7.104 5.531 7.77 7 3.653 4.37 20.128 28.856 36.076 51.649l-24.468.042c-3.33.31-7.542-2.511-8.948-5.046l-30.03-44.488c-.322-.528-1.261-1.616-1.8-2.08-.755-.649-1.348-.995-2.381-1.374-1.77-.65-3.87-.736-5.419-.728-3.193.017-10.873-.003-10.873-.003l-.1 53.633-26.056-.002Zm42.555-72.076c2.71.053 7.509-.301 9.802-.895 3.166-.455 8.575-2.584 10.489-4.493 2.297-1.365 5.885-5.639 6.934-8.552 1.58-3.614 2.132-9.032 1.818-11.515.102-3.414-1.9-9.29-4.084-11.722-2.324-2.83-7.086-5.815-9.545-6.344-2.999-1.136-9.766-2.152-13.499-2.108l-18.299-.013v45.647l16.384-.005ZM625.624 156.966h-26.369v137.58h26.413l-.044-137.58ZM653.804 156.966v20.383h70.442q-72.313 99.683-72.341 99.724c-1.708 2.426-2.09 3.468-2.706 6.493l.05 10.873h107.386v-20.404h-73.307l71.624-98.543c2.08-2.583 3.577-5.755 3.351-10.252v-8.237l-104.499-.037ZM837.991 155.478c17.257-1.314 40.434 8.87 50.333 19.112 13.066 12.923 21.317 32.762 20.366 52.376-.161 18.218-7.508 36.197-18.254 47.64-11.552 12.384-28.834 20.332-47.853 21.15-17.485 1.493-39.388-3.22-55.954-18.055-13.86-15.182-20.848-29.387-21.054-52.03-.193-21.328 4.497-34.447 22.47-53.347 16.473-12.957 31.057-16.554 49.946-16.846Zm-.532 21.48c-26.582-.517-46.007 17.867-45.348 49.518s17.584 47.256 46.817 47.476 41.523-21.995 42.813-47.802-14.346-48.934-44.282-49.192ZM929.363 156.94h13.923c4.502-.017 6.082.783 8.852 4.34l73.914 91.755c-.309-2.527-.627-8.487-.737-11.92v-84.239h23.235v137.693h-12.43c-6.445.205-8.17-1.52-12.026-6.465l-72.152-89.573c.324 2.683.607 8.133.58 10.9v85.098h-23.161q-.033-137.532.002-137.589Z"
    />
  </Svg>
);
