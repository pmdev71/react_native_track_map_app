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

const DetailsPackageScreen = ({route, navigation}) => {
  const packageInfo = route.params.packageInfo;
  const [phoneNumber, setPhoneNumber] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    setModalVisible(modalVisible);
  }, [modalVisible]);

  const handleOrder = () => {
    //handle order here
    navigation.navigate('OrderHistoryScreen');
  };
  return (
    <>
      <ScrollView>
        {/* // <Text> Package ID:{packageInfo._id}</Text>
        // <Text> Package Name:{packageInfo.name}</Text> */}

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
                <Heading size="md" ml="-1">
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
                {/* <Input
                mt="3"
                w="85%"
                h="10"
                maxWidth="300px"
                size="lg"
                fontWeight="700"
                maxLength={11}
                keyboardType="numeric"
                placeholder="Mobile Number [ only 11 digits ]"
                onChangeText={e => setPhoneNumber(e)}
              /> */}
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
                    {/* <InputRightAddon children={'.io'} /> */}
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
                colorScheme="indigo"
                onPress={() => setModalVisible(!modalVisible)}>
                Order Now
              </Button>
              {modalVisible && (
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
