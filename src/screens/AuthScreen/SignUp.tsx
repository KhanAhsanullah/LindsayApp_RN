import React from 'react';
import SafeAreaContainer from '../../containers/SafeAreaContainer';
import SignUpFields from '../../components/molecules/SignUpMol/SignUpFields';

const SignUp = () => {
  return (
    <SafeAreaContainer safeArea={false}>
      <SignUpFields />
    </SafeAreaContainer>
  );
};

export default SignUp;
