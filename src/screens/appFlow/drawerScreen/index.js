import React, { useContext } from 'react';
import ToggleSwitch from 'toggle-switch-react-native';
import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { DrawerActions } from '@react-navigation/native'
import { EventRegister } from 'react-native-event-listeners';
import { useDispatch } from 'react-redux';

import { appIcons, colors, hp, routes, wp } from '../../../services';
import { userSave } from '../../../redux/Slices/splashSlice';
import themeContext from '../../../services/config/themeContext';


const DrawerScreen = ({ navigation }) => {
    const theme = useContext(themeContext)
    const dispatch = useDispatch()

    const handleLogout = async () => {
        dispatch(userSave(null))
        navigation.replace(routes.auth)
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
            <View style={{ flex: 1, backgroundColor: theme.background, padding: wp(5) }}>
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                    <Image source={appIcons.cross} style={{ height: 19, width: 19, tintColor: theme.theme === 'dark' ? colors.white : colors.black }} resizeMode={"contain"} />
                </TouchableOpacity>
                <View style={{ paddingTop: hp(10), flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: theme.color, fontSize: 16 }}>Dark Mode</Text>
                    <ToggleSwitch
                        isOn={theme.theme === 'dark' ? true : false}
                        onColor={colors.green}
                        offColor={colors.lightBlack}
                        labelStyle={{ display: 'none' }}
                        size='small'
                        onToggle={(value) => {
                            EventRegister.emit("changeTheme", value)
                        }
                        }
                    />
                </View>
                <TouchableOpacity onPress={() => handleLogout()} style={{ paddingTop: hp(5) }}>
                    <Text style={{ color: theme.color, fontSize: 16 }}>Logout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


export default DrawerScreen;


