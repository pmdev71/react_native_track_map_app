import React, {useEffect, useState} from 'react';
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  Checkbox,
  Input,
  ScrollView,
  Button,
  Badge,
  InputGroup,
  InputLeftAddon,
} from 'native-base';
import OrderDetailsConfermation from '../components/OrderDetailsConfermation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {baseUrl} from '../api/baseApi';

const DetailsPackageScreen = ({route, navigation}) => {
  const packageInfo = route.params.packageInfo;
  const [user, setUser] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const {
    _id,
    name,
    regulaPrice,
    discountPrice,
    operator,
    area,
    operatorImageThumb,
    operatorImageBanner,
  } = packageInfo;

  useEffect(() => {
    const handleAsyncStorage = async () => {
      const user = JSON.parse(await AsyncStorage.getItem('user'));
      setUser(user);
    };
    handleAsyncStorage();

    setModalVisible(modalVisible);
  }, [modalVisible]);

  //handle order here
  const handleOrder = phoneNumber => {
    fetch(`${baseUrl}/orders`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: user.user._id,
        userEmail: user.user.email,
        productId: _id,
        productName: name,
        productDiscountPrice: discountPrice,
        productRegularPrice: regulaPrice,
        productLocation: area,
        productValidity: '30 Days',
        productOperator: operator,
        productImage: operatorImageThumb,
        receverPhone: phoneNumber,
        paymentStatus: 'Paid',
        orderStatus: 'Pending',
      }),
    });

    navigation.navigate('OrderHistoryScreen');
  };
  return (
    <>
      <ScrollView>
        <Box flex={1} alignItems="center" h="100%">
          <Box
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="1"
            _dark={{
              borderColor: 'coolGray.600',
              backgroundColor: 'gray.700',
            }}
            _web={{
              shadow: 2,
              borderWidth: 0,
            }}
            _light={{
              backgroundColor: 'gray.50',
            }}>
            <Box>
              <AspectRatio w="100%" ratio={16 / 9}>
                <Image
                  source={{
                    uri: packageInfo.operatorImageBanner,
                  }}
                  alt="image"
                />
              </AspectRatio>
              <Center
                bg="violet.500"
                _dark={{
                  bg: 'violet.400',
                }}
                _text={{
                  color: 'warmGray.50',
                  fontWeight: '700',
                  fontSize: 'sm',
                }}
                position="absolute"
                bottom="0"
                px="3"
                py="1.5">
                {packageInfo.operator}
              </Center>
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="md" ml="-1" py="1">
                  {packageInfo.name}
                </Heading>
                <HStack
                  alignItems="center"
                  space={4}
                  justifyContent="space-between">
                  <Text
                    fontSize="lg"
                    backgroundColor="violet.500"
                    color="violet.700"
                    fontWeight="700"
                    ml="-0.5"
                    mt="-1">
                    {packageInfo.discountPrice} Taka
                  </Text>

                  <Text
                    strikeThrough
                    fontSize="lg"
                    backgroundColor="rose.500"
                    color="rose.500"
                    fontWeight="700"
                    ml="-0.5"
                    mt="-1">
                    {packageInfo.regulaPrice} Taka
                  </Text>
                </HStack>
              </Stack>
              <HStack
                alignItems="center"
                space={4}
                justifyContent="space-between">
                <Badge
                  colorScheme="darkBlue"
                  _text={{
                    color: 'white',
                  }}
                  variant="solid"
                  rounded="4">
                  {packageInfo.area}
                </Badge>

                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}
                  fontWeight="700">
                  30 Days
                </Text>
              </HStack>
              <Text fontWeight="400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam harum, rerum accusamus similique deleniti aperiam
                exercitationem iure amet odio. Ea expedita suscipit nulla vitae
                numquam, eligendi sit aliquam accusantium ratione nam dolorem
                nisi iusto labore tempora from request for each of them to do on
                this.
              </Text>
              <Box alignItems="center">
                <Box flex={1} w="75%">
                  <InputGroup
                    w={{
                      base: '100%',
                    }}>
                    <InputLeftAddon w="20%" fontWeight="700" children="+88" />
                    <Input
                      size="lg"
                      fontWeight="700"
                      maxLength={11}
                      minHeight={11}
                      keyboardType="numeric"
                      w="80%"
                      placeholder="Enter Number"
                      onChangeText={e => setPhoneNumber(e)}
                    />
                  </InputGroup>
                </Box>
              </Box>
              <HStack alignItems="center" justifyContent="center" mt={2}>
                <Checkbox
                  value="indigo"
                  size="xm"
                  colorScheme="indigo"
                  defaultIsChecked>
                  Agree with Terms and Conditions.
                </Checkbox>
              </HStack>
              <Button
                mt="2"
                width="90%"
                alignSelf="center"
                colorScheme="indigo"
                onPress={() => setModalVisible(!modalVisible)}>
                Order Now
              </Button>
              {modalVisible && phoneNumber.length > 10 && (
                <OrderDetailsConfermation
                  packageInfo={packageInfo}
                  phoneNumber={phoneNumber}
                  modal={modalVisible}
                  setModal={setModalVisible}
                  handleOrder={handleOrder}
                />
              )}
            </Stack>
          </Box>
        </Box>
      </ScrollView>
    </>
  );
};

export default DetailsPackageScreen;
