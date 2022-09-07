import React, {useContext, useEffect, useState} from 'react';
import {Box, HStack, VStack, Text, Spacer, FlatList, Image} from 'native-base';
import SchelatonPackage from '../components/SchelatonPackage';
import {UserAuthContext} from '../context/UserAuthContext';
import {baseUrl} from '../api/baseApi';
import {RefreshControl} from 'react-native';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const OrderHistoryScreen = () => {
  const {user} = useContext(UserAuthContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    fetch(`${baseUrl}/orders/${user.user._id}`)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  });

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
      ) : data.length > 0 ? (
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
                py="1"
                my="1">
                <HStack space={4} justifyContent="space-between">
                  <Image
                    alt="operator"
                    size="48px"
                    borderRadius="10"
                    source={{
                      uri: item.productImage,
                    }}
                  />
                  <VStack>
                    <Text
                      _dark={{
                        color: 'warmGray.50',
                      }}
                      color="coolGray.800"
                      bold>
                      {item.productName}
                    </Text>
                    <Text fontWeight={500} color="coolGray.600">
                      +880{item.receverPhone}
                    </Text>
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: 'warmGray.200',
                      }}>
                      {item.createdAt}
                    </Text>
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: 'warmGray.200',
                      }}>
                      ID: {item._id}
                    </Text>
                  </VStack>
                  <Spacer />
                  <VStack>
                    <Text
                      fontSize="xs"
                      fontWeight="400"
                      _dark={{
                        color: 'warmGray.50',
                      }}
                      color="coolGray.800"
                      alignSelf="flex-start">
                      {item.productDiscountPrice} Tk
                    </Text>
                    <Text
                      fontSize="xs"
                      fontWeight="500"
                      _dark={{
                        color: 'warmGray.50',
                      }}
                      color="coolGray.800"
                      alignSelf="flex-start">
                      {item.orderStatus}
                    </Text>
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
      ) : (
        <Box flex={1} justifyContent="center" alignItems="center">
          <Text fontSize="lg" fontWeight="500">
            No Order History
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default OrderHistoryScreen;
