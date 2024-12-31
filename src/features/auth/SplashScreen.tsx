import { View, Text, StatusBar, Platform, Image } from 'react-native'
import React, { FC, useEffect } from 'react'
import { useStyles } from 'react-native-unistyles'
import { splashStyles } from '@unistyles/authStyles'
import Animated, { FadeInDown } from 'react-native-reanimated'
import CustomText from '@components/global/CustomText'
import { resetAndNavigate } from '@utils/NavigationUtils'

const SplashScreen: FC = () => {

  const { styles } = useStyles(splashStyles)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      resetAndNavigate('LoginScreen')
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar hidden={Platform.OS !== 'android'} />
      <Image source={require('@assets/images/logo_t.png')}
        style={styles.logoImage}
      />
      <Animated.View style={styles.animatedContainer} entering={FadeInDown.delay(400)}>
        <Image source={require('@assets/images/tree.png')}
          style={styles.treeImage}
        />
      </Animated.View>

      <CustomText variant='h5' style={styles.msgText}
        fontFamily='Okra-Medium'
        color='#fff'
      >
        Carbon and Plastic neutral deliveries in India
      </CustomText>
    </View>
  )
}

export default SplashScreen