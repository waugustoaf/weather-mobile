import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  padding-top: 10%;
  align-items: center;
  flex: 1;
  background-color: #e8f0ff;
`;

export const BackButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-left: 15px;
  align-self: flex-start;
  margin-bottom: 10px;
`;

export const BackButtonText = styled.Text`
  font-size: 22px;
`;

export const SearchBox = styled.View`
  align-items: center;
  flex-direction: row;
  background-color: #ddd;
  width: 90%;
  height: 50px;
  border-radius: 8px;
`;

export const SearchBoxInput = styled.TextInput`
  width: 85%;
  height: 50px;
  background-color: #fff;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  justify-content: center;
  align-items: center;
  padding: 7px;
`;

export const Icon = styled.TouchableOpacity`
  width: 15%;
  height: 50px;
  background-color: #1ed6ff;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;
