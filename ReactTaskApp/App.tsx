import {StyleSheet, Text, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import Navigation from './src/navigation/Navigation';
import {store, persistedStore} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={persistedStore}>
          <Navigation />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
