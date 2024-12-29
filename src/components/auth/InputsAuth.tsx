import {
  IconContainer,
  InputContainer,
  InputPassword,
  ShowPassword,
  StyledInput,
} from "@/screens/home/style";
import ProfileIcon from "../svgs/profileIcon";
import { useThemeStyled } from "@/hooks/useThemed";
import { darkTheme, lightTheme } from "@/constants/Colors";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

export const InputsAuth = ({
  email,
  password,
  setEmail,
  setPassword,
  isPressedEmail,
  setIsPressedEmail,
  isPressedPassword,
  setIsPressedPassword,
  isShowPassword,
  setIsShowPassword,
}: {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  isPressedEmail: boolean;
  setIsPressedEmail: (isPressedEmail: boolean) => void;
  isPressedPassword: boolean;
  setIsPressedPassword: (isPressedPassword: boolean) => void;
  isShowPassword: boolean;
  setIsShowPassword: (isShowPassword: boolean) => void;
}) => {
  const { isDarkMode } = useThemeStyled();
  return (
    <>
      <InputContainer
        style={[
          isPressedEmail && {
            borderColor: isDarkMode ? "#EFF3F7" : "#000",
          },
        ]}
      >
        <IconContainer style={{}}>
          <ProfileIcon></ProfileIcon>
        </IconContainer>
        <StyledInput
          onBlur={() => console.log("pressed")}
          onPress={() => {
            setIsPressedEmail(true);
            setIsPressedPassword(false);
          }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholderTextColor={
            isDarkMode ? darkTheme.colors.text : lightTheme.colors.text
          }
          placeholder="Digite seu email"
          style={{ color: isDarkMode ? "#EFF3F7" : "#000" }}
        />
      </InputContainer>
      <InputPassword
        style={[
          isPressedPassword && {
            borderColor: isDarkMode ? "#EFF3F7" : "#000",
          },
        ]}
      >
        <IconContainer style={{}}>
          <FontAwesome5
            name="key"
            size={20}
            color={isDarkMode ? "#EFF3F7" : "#000"}
          />
        </IconContainer>
        <StyledInput
          onPress={() => {
            setIsPressedPassword(true);
            setIsPressedEmail(false);
          }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={!isShowPassword}
          placeholderTextColor={
            isDarkMode ? darkTheme.colors.text : lightTheme.colors.text
          }
          style={{ color: isDarkMode ? "#EFF3F7" : "#000" }}
          placeholder="Digite sua senha"
        ></StyledInput>
        <ShowPassword
          onPress={() => setIsShowPassword(!isShowPassword)}
          style={{ marginLeft: -46 }}
        >
          <Ionicons
            style={{}}
            name={isShowPassword ? "eye-off-sharp" : "eye"}
            size={25}
            color={isDarkMode ? "#EFF3F7" : "#000"}
          />
        </ShowPassword>
      </InputPassword>
    </>
  );
};
