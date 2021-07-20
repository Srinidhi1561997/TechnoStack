
import React from 'react';
import { store, persistor } from './Src/ConfigureStore';
import type {Node} from 'react';
import { Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import Screen1 from './Src/Components/Screen1';
import Task2 from './Src/Components/Task2';
import Task1 from './Src/Components/Task1';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
const Appcontainer=()=>{
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Screen1'>
      <Stack.Screen name="Screen1" component={Screen1} options={{headerShown: false}}/>
      <Stack.Screen name="Task1" component={Task1} options={{headerShown: false}}/>
      <Stack.Screen name="Task2" component={Task2} options={{headerShown: false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}
const App: () => Node = () => {
  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Appcontainer/>
        </PersistGate>
      </Provider>
  );
};

export default App;
