import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const SeparatorSvgWhite = (props: any) => (
  <Svg
    width={368}
    height={2}
    viewBox="0 0 368 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 1L368 0.999968" stroke="url(#paint0_linear_5411_115)" />
    <Defs>
      <LinearGradient
        id="paint0_linear_5411_115"
        x1={0}
        y1={1}
        x2={364.45}
        y2={0.999968}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E0E1E2" stopOpacity={0} />
        <Stop offset={0.5} stopColor="#E0E1E2" />
        <Stop offset={1} stopColor="#E0E1E2" stopOpacity={0.15625} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SeparatorSvgWhite;
