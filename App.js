import * as React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './api/store';
import { PersistGate } from 'redux-persist/integration/react';

import { Platform } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './components/HomeScreen';
import DeckScreen from './components/DeckScreen';
import CreateDeckScreen from './components/CreateDeckScreen';
import CreateCardScreen from './components/CreateCardScreen';
import ShowCardScreen from './components/ShowCardScreen';
import ShowScoreScreen from './components/ShowScoreScreen';

import { SetLocalNotification, AddNotificationListener } from './api/notification';

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'CreateDeckScreen') {
            iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
          } else if (route.name === 'HomeScreen') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ tabBarLabel: 'Decks' }}
      />
      <Tab.Screen
        name="CreateDeckScreen"
        component={CreateDeckScreen}
        options={{ tabBarLabel: 'Create Deck' }}
      />
    </Tab.Navigator>
  );
}

const RootStack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export default function App() {

  React.useEffect(() => {
    console.log("App started...");
    // Use the notification api only on android and ios
    if (Platform.OS === 'android' || Platform.OS === 'ios') {
      SetLocalNotification();
      // If we want to do something with the notification when the app
      // is active, we need to listen to notification events and
      // handle them in a callback
      const subscription = AddNotificationListener((notify) => console.log("Notify EVENT: ", notify));
      return () => subscription.remove();
    }
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <RootStack.Navigator>
            <RootStack.Screen
              name="Home"
              component={HomeTabs}
              options={{ title: 'Decks' }}
            />
            <RootStack.Screen
              name="DeckScreen"
              component={DeckScreen}
              options={{
                title: 'Deck',
                transitionSpec: {
                  open: config,
                  close: config,
                },
              }}
            />
            <RootStack.Screen
              name="CreateCardScreen"
              component={CreateCardScreen}
              options={{ title: 'Add Card' }}
            />
            <RootStack.Screen
              name="ShowCardScreen"
              component={ShowCardScreen}
              options={{ title: 'Quiz...' }}
            />
            <RootStack.Screen
              name="ShowScoreScreen"
              component={ShowScoreScreen}
              options={{ title: 'Score' }}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
