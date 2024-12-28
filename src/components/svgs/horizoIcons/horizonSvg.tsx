import { View } from "react-native";
import { HorizonSvgWhite } from "./HorizonIconWhite";
import { useThemeStyled } from "@/hooks/useThemed";
import { HorizonSvgBlack } from "./HorizonIconBlack";

const HorizonSvgComponent = ({
  height,
  width,
}: {
  height?: number;
  width?: number;
}) => {
  const { isDarkMode } = useThemeStyled();
  return (
    <View
      style={{
        width: width || "100%",
        height: height || "100%",
        paddingBottom: -10,
        marginRight: 14,
      }}
    >
      {isDarkMode ? <HorizonSvgWhite /> : <HorizonSvgBlack></HorizonSvgBlack>}
    </View>
  );
};
export default HorizonSvgComponent;
