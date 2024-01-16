import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, connect, useSelector } from "react-redux"
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Image,
    Dimensions,
    TextInput,
    Platform,
    ScrollView,
    KeyboardAvoidingView,
    TouchableOpacity
} from 'react-native';

import AuthCheckComponent from '../../../components/AuthCheckComponent';
import { green100 } from '../../../utils/colors';
import { useLogoutMutation } from '../../auth/slices/authApiSlice';

import { LOG_OUT } from '../../../redux/constants/actionTypes';

const DashboardScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const [logout] = useLogoutMutation()

    const handleLogOut = async (e) => {
        try {
          const responseData = await logout().unwrap()
        } catch (err) {
          console.log("err", err)
        }
        dispatch({ type: LOG_OUT })
        navigation.navigate('LandingScreen')
      }

    return (
        <SafeAreaView style={styles.container}>
            <AuthCheckComponent navigation={navigation} isPrivate={true} />
            <View>
                <Text onPress={handleLogOut}>Logout!</Text>

            </View>
        </SafeAreaView>
    )

}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: '400',
        backgroundColor: green100
    },
    scrollView: {
        paddingLeft: width * 0.04,
        paddingRight: width * 0.04,
        paddingTop: '10%',
        paddingBottom: '10%'
    }
})

export default DashboardScreen;