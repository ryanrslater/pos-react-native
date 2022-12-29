import React, {useEffect} from 'react';
import { Button } from 'react-native';

import { Amplify, API, graphqlOperation, Auth } from 'aws-amplify';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native';
import { getAccountHolder } from './src/graphql/queries'
import awsExports from './src/aws-exports';
Amplify.configure(awsExports);

function SignOutButton() {
  const { signOut } = useAuthenticator();
  return <Button title="Sign Out" onPress={signOut} />;
}

function App() {

  // const { user } = useAuthenticator()

  // const fetchData = async () => {
  //   if (!user) return

  //   const {attributes} = await Auth.currentAuthenticatedUser()
  
  //   const data = await API.graphql({
  //     query: getAccountHolder,
  //     variables: {
  //       sub: attributes.sub
  //     }
  //   })
  //   console.log(data)
  // }
  // useEffect(() => {
  //   fetchData()
  // }, [])

  return (
    <Authenticator.Provider>
      <Authenticator>
        <SignOutButton />
      </Authenticator>
    </Authenticator.Provider>
  );
}

export default App;