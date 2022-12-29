import React, { useEffect } from 'react';
import { Button } from 'react-native';

import { Amplify } from 'aws-amplify';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native';
import awsExports from './src/aws-exports';
import Main from './layouts/Main';
Amplify.configure(awsExports);



function App() {
  return (
    <Authenticator.Provider>
      <Authenticator>
        <Main />
      </Authenticator>
    </Authenticator.Provider>
  );
}

export default App;