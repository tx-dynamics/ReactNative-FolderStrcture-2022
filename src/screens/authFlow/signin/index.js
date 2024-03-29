import React, { useContext } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { routes } from '../../../services'
import { Header } from '../../../components';
import { styles } from './styles';
import { userSave } from '../../../redux/Slices/splashSlice';
import themeContext from '../../../services/config/themeContext';
import Button from '../../../components/button';

const LoginScreen = ({ navigation }) => {
  const theme = useContext(themeContext)
  const dispatch = useDispatch()
  const { t } = useTranslation();

  const onPressLogin = () => {
    dispatch(userSave(true))
    navigation.replace(routes.drawer)
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]} >
      <StatusBar backgroundColor={theme.background} barStyle={theme.theme === 'dark' ? 'light-content' : 'dark-content'} />
      <Header title={'Login'} />
      <View style={[styles.wrapper, { backgroundColor: theme.background }]}>
        <Text style={{ color: theme.color, fontSize: 20 }}>{t('Login Screen')}</Text>
        <View style={{ paddingTop: 20 }}>
          <Button onPress={() => onPressLogin()}>{t('Login')}</Button>
        </View>
        <View style={{ paddingTop: 20 }}>
          <Button onPress={() => navigation.navigate(routes.signup)}>{t('Signup')}</Button>
        </View>
      </View>
    </View>
  )
}

export default LoginScreen