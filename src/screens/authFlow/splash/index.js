import React, { useContext } from 'react'
import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import { useSelector } from 'react-redux'

import { routes } from '../../../services'
import { styles } from './styles'
import themeContext from '../../../services/config/themeContext'

const Splash = ({ navigation }) => {
  const theme = useContext(themeContext)
  const user = useSelector((state) => state.splash.value)

  React.useEffect(() => {
    performTimeConsumingTask()
  }, [])

  const performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        navigation.replace(user == null ? routes.login : routes.drawer)
      }, 3000),
    )
  }
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar backgroundColor={theme.background} barStyle={theme.theme === 'dark' ? 'light-content' : 'dark-content'} />
      <View style={styles.wrapper}>
        <Text style={{ color: theme.color, fontSize: 20 }}>Splash screen</Text>
      </View>
    </SafeAreaView>
  )
}

export default Splash

