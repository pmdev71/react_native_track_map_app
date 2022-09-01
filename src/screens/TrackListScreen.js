import {Alert, BackHandler, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const TrackListScreen = () => {
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hello,', 'Are you sure you want exit from this app?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View>
      <Text>TrackListscreen</Text>
    </View>
  );
};

export default TrackListScreen;

const styles = StyleSheet.create({});
