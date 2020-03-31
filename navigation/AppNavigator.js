import * as React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import MainTabNavigator from './MainTabNavigator';
import SignInScreen from '../screens/auth/SignInScreen';
import AuthLoadingScreen from '../screens/auth/AuthLoadingScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import ErfolgScreen from '../screens/auth/ErfolgScreen';
import LandingScreen from '../screens/auth/Landing';

import ResetScreen from '../screens/main/ResetScreen';
import Preregister from '../screens/auth/Preregister';
import RegisterScreen2 from '../screens/auth/RegisterScreen2';
import RegisterScreen3 from '../screens/auth/RegisterScreen3';

import ProfileScreen from '../screens/main/ProfileScreen';

import ChangeName from '../screens/main/ChangeName';
import ChangePassword from '../screens/main/ChangePassword';


const AuthStack = createStackNavigator({ Landing: LandingScreen, SignIn: SignInScreen, Register: RegisterScreen, Erfolg: ErfolgScreen, Pre: Preregister, Register2: RegisterScreen2, Register3: RegisterScreen3, Profile : ProfileScreen, CN : ChangeName, CP : ChangePassword});
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
