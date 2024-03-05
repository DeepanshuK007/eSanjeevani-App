import { ImageBackground, StyleSheet, View } from 'react-native';
import React from 'react';
import { Text } from 'react-native-paper';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from '../i18n';

const LoadingScreen = () => {
  const { t } = useTranslation();

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('../assets/images/loadingScreen.png')}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <Text
          variant='headlineSmall'
          style={{ color: '#fff', marginTop: 50, fontStyle: 'italic' }}
        >
          Loading...
        </Text>
      </ImageBackground>
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({});
