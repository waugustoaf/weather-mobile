import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #e8f0ff;
  padding-top: 5%;
`;

export const DaysList = styled.FlatList`
  margin-top: 15px;
  margin-left: 10px;
`;

export const ErrorMsgText = styled.Text`
  color: #ff0000;
  font-size: 18px;
  font-weight: bold;
`;
