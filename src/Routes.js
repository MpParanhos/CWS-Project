import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import home from './screens/home/index';
import entry from './screens/entry/index';
import signature from './screens/signature/index';

export default function Routes() {
    return (
            <NavigationContainer>
                <AppStack.Navigator>
                    <AppStack.Screen name='home' component={home} />
                    <AppStack.Screen name='entry' component={entry} options={{ title: 'CheckList' }}/>
                    <AppStack.Screen name='signature' component={signature} options={{title: 'Assinatura'}}/>
                </AppStack.Navigator>
            </NavigationContainer>
    );
}