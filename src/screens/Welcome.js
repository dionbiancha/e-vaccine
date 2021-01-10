import React from 'react';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

import covid from '../lottie/welcome.json';

const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin: 20px;
  color:#161B22;
  
`;

const SubTitle = styled.Text`
  font-size: 15px;
  text-align: center;
  color:#A8A8A8;
  
`;

export default (props) => {
  return (
    <Page onLoad={setTimeout(() => {props.navigation.navigate('Home')}, 1200)}>
      <LottieView autoSize source={covid} autoPlay loop />
      <Title>Vacinas salvam vidas!</Title>
      <SubTitle>Não seja idiota</SubTitle>
    </Page>
    
  );
}