import * as React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import MainTabNavigator from './MainTabNavigator';
import SignInScreen from '../screens/auth/SignInScreen';
import AuthLoadingScreen from '../screens/auth/AuthLoadingScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import LandingScreen from '../screens/auth/Landing';
import Preregister from '../screens/auth/Preregister';


const AuthStack = createStackNavigator({ Landing: LandingScreen, SignIn: SignInScreen, Register: RegisterScreen,  Pre: Preregister});
// if you wanna use navigation -> put your code here!
// uniqueName : file
// refer to 'uniqueName' for the navigation!
export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    AuthLoading: AuthLoadingScreen,
    Main: MainTabNavigator,
    Auth: AuthStack,
    
  },
  {
       initialRouteName: 'AuthLoading', // usually at AuthLoading
     }
   )
);
