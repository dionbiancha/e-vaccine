import React from 'react';
import styled from 'styled-components/native'

const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 20px;
  
`;
export default () => {
  return (
    <Page>
      <Text>Home</Text>
    </Page>
  );
}