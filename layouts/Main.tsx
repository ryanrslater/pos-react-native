import React, { useState, useEffect } from 'react'
import { Button, View } from 'react-native'
import { Auth } from 'aws-amplify'
import { User } from '../types/User'
import { API, graphqlOperation } from 'aws-amplify'
import { getAccountHolder } from '../src/graphql/queries'

const Main = () => {
    const [user, setUser] = useState<null | User>(null)

    const fetchUser = async () => {
        const { attributes } = await Auth.currentAuthenticatedUser()
        if (!attributes) {
            return
        }
        setUser(attributes)
        const accountHolderData = await API.graphql(
            graphqlOperation(getAccountHolder, {
                sub: attributes.sub,
            }))

            console.log(accountHolderData)

    }
    useEffect(() => {
        fetchUser()
    }, [])
    return (
        <View>
            <Button title='sign out' onPress={() => Auth.signOut()} />
        </View>
    )
}

export default Main