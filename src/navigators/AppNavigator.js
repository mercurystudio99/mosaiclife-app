import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import LoginScreen from '../features/auth/screens/LoginScreen';
import RegisterScreen from '../features/auth/screens/RegisterScreen';
import LandingScreen from '../features/landing/screens/LandingScreen';
import VerificationScreen from '../features/auth/screens/VerificationScreen';
import ForgotPasswordScreen from '../features/auth/screens/ForgotPasswordScreen';
import CheckEmailScreen from '../features/auth/screens/CheckEmailScreen';
import NewPasswordScreen from '../features/auth/screens/NewPasswordScreen';

import AssessmentScreen from '../features/assessments/screens/AssessmentScreen';
import DashboardScreen from '../features/dashboard/screens/DashboardScreen';
import AgreeTermsPrivacyScreen from '../features/termsprivacy/screens/AgreeTermsPrivacyScreen';
import PricingScreen from '../features/stripe/screens/PricingScreen';
import CheckoutScreen from '../features/stripe/screens/CheckoutScreen';
import TermsScreen from '../features/termsprivacy/screens/TermsScreen';
import PrivacyScreen from '../features/termsprivacy/screens/PrivacyScreen';

import { Image } from 'react-native';
import { grayScale500 } from '../utils/colors';

const headerOption = {
    title: null,
    headerBackTitle: 'Back',
    headerBackTitleStyle: {
        fontFamily: 'Roboto',
        color: grayScale500,
        fontSize: 16,
        fontWeight: '400',
    },
    headerBackImage: ()=> (
        <Image
        source={require('./../assets/img/back.png')}
        style={{ width: 20, height: 20, marginLeft: 10 }}
      />
    )
}
const linking = {
    prefixes: ['MosaicLifeApp://', 'https://mosaiclifeapp.link.handler']
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTab = () => (
    <Tab.Navigator initialRouteName='LandingScreen'>
      <Tab.Screen name="DashboardScreen" component={DashboardScreen} options={{ headerShown: false, title: 'Dashboard' }} />
      <Tab.Screen name="AssessmentScreen" component={AssessmentScreen} options={{ headerShown: false, title: 'Assessments' }} />
    </Tab.Navigator>
  );
  

export default function AppNavigator() {
    
    return (
        <NavigationContainer linking={linking}>
            <Stack.Navigator initialRouteName='LandingScreen'>
                <Stack.Screen name="MainTab" component={MainTab} options={{ headerShown: false }} />

                <Stack.Screen name="LandingScreen" component={LandingScreen} options={{ headerShown: false }} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={headerOption} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={headerOption} />
                <Stack.Screen name="CheckEmailScreen" component={CheckEmailScreen} options={headerOption} />
                <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} options={headerOption} />
                <Stack.Screen name="VerificationScreen" component={VerificationScreen} options={headerOption} />

                <Stack.Screen name="AgreeTermsPrivacyScreen" component={AgreeTermsPrivacyScreen} options={headerOption} />
                <Stack.Screen name="PricingScreen" component={PricingScreen} options={{ headerShown: false }} />
                <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} options={headerOption} />
                <Stack.Screen name="TermsScreen" component={TermsScreen} options={headerOption} />
                <Stack.Screen name="PrivacyScreen" component={PrivacyScreen} options={headerOption} />

            </Stack.Navigator>

        </NavigationContainer>

    );
}
