// src/screens/Home/HomeScreen.styles.ts
import { Theme } from "@/@types/themeType";
import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";
import { heightScreen, widthScreen } from "@/constants/DimensionScreen";
import { TextInput } from "react-native";

export interface HomeScreenProps {
  toggleTheme?: () => void;
}

export const Container = styled.View`
  flex: 1;
  padding-top: 20px;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Title = styled.Text`
  font-size: 30px;
  align-text-align: center;
  color: ${(props) => props.theme.colors.text};
`;

export const SubTitle = styled.Text`
  font-size: 17px;
  margin-top: 42px;
  color: ${(props) => props.theme.colors.subText};
`;

export const Button = styled(TouchableOpacity)`
  background-color: ${(props) => props.theme.colors.buttonBackground};
  padding: ${heightScreen * 0.015}px ${widthScreen * 0.2}px;
  border-radius: 5px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.buttonText};
  font-size: 18px;
`;

export const StyledInput = styled.TextInput`
  width: 88%;
  height: 50px;
  padding: 15px;
  font-size: 16px;
`;

export const IconContainer = styled.View`
  background-color: transparent;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4px;
  padding-left: 18px;
  width: 12%;
  height: 43px;
  border-radius: 5px;
  z-index: 99;
`;
export const ShowPassword = styled.Pressable`
  background-color: transparent;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4px;
  width: 11%;
  height: 43px;
  border-radius: 5px;
  z-index: 99;
`;

export const InputContainer = styled.Pressable`
  width: 90%;
  margin-bottom: 15px;
  flex-direction: row;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.inputBackground};
  border: 1px solid ${(props) => props.theme.colors.inputBorder};
`;
export const InputPassword = styled.View`
  width: 90%;
  margin-bottom: 15px;
  margin-top: 0px;
  flex-direction: row;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.inputBackground};
  border: 1px solid ${(props) => props.theme.colors.inputBorder};
`;
