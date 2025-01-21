import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const ContainerCard = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #1f1e25;
  padding-left: 20px;
  width: 100%;
  height: 55px;
  border-radius: 5px;
  margin-top: 12px;
`;

export const IconExclude = styled(TouchableOpacity)`
  background-color: red;
`;

export const Text = styled.Text`
  width: 86%;
  color: ${(props) => props.theme.colors.buttonText};
  padding-left: 10px;
  font-size: 18px;
`;

export const Text2 = styled.Text`
  width: 100%;
  color: ${(props) => props.theme.colors.buttonText};
  font-size: 18px;
`;
