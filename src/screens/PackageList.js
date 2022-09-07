import React, {useCallback, useEffect, useState} from 'react';
import {
  Box,
  HStack,
  VStack,
  Text,
  Spacer,
  FlatList,
  Image,
  Button,
} from 'native-base';
import SchelatonPackage from '../components/SchelatonPackage';
import {useNavigation} from '@react-navigation/native';
import {baseUrl} from '../api/baseApi';
import {Alert, BackHandler, RefreshControl} from 'react-native';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const PackageList = () => {
  const navigation = useNavigation();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    fetch(`${baseUrl}/packages`)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
      });
  });

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
    <Box flex={1}>
      {loading ? (
        <Box flex={1}>
          <SchelatonPackage />
          <SchelatonPackage />
          <SchelatonPackage />
          <SchelatonPackage />
          <SchelatonPackage />
          <SchelatonPackage />
          <SchelatonPackage />
        </Box>
      ) : (
        <Box flex={1}>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <Box
                borderBottomWidth="1"
                _dark={{
                  borderColor: 'gray.600',
                }}
                borderColor="coolGray.200"
                pl="5"
                pr="5"
                py="2"
                my="2">
                <HStack space={4} justifyContent="space-between">
                  <Image
                    alt="operator"
                    size="48px"
                    borderRadius="10"
                    source={{
                      uri: item.operatorImageThumb,
                    }}
                  />
                  <VStack>
                    <Text
                      _dark={{
                        color: 'warmGray.50',
                      }}
                      color="coolGray.800"
                      bold>
                      {item.name}
                    </Text>
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: 'warmGray.200',
                      }}>
                      {item.discountPrice} Taka
                    </Text>
                  </VStack>
                  <Spacer />
                  <VStack>
                    <Text
                      fontSize="xs"
                      _dark={{
                        color: 'warmGray.50',
                      }}
                      color="coolGray.800"
                      alignSelf="flex-start">
                      {item.area}
                    </Text>
                    <Button
                      w="20"
                      mt="2"
                      colorScheme="indigo"
                      size="sm"
                      onPress={() =>
                        navigation.navigate('DetailsPackageScreen', {
                          packageInfo: item,
                        })
                      }>
                      Details
                    </Button>
                  </VStack>
                </HStack>
              </Box>
            )}
            keyExtractor={item => item._id}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        </Box>
      )}
    </Box>
  );
};

export default PackageList;
