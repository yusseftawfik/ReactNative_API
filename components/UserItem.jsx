import React from 'react'
import { Box, Text, VStack, HStack, Button, InfoIcon } from 'native-base';
import UserDetails from './UserDetails'

function UserItem({ item, navigation, route }) {
    return (
        <>
            <Box
                borderBottomWidth="1"
                _dark={{
                    borderColor: "gray.600"
                }}
                borderColor="gray.200"
                pl="4"
                pr="5"
                py="2">
                <HStack style={{ justifyContent: 'space-between', margin: 5 }}>
                    <VStack>
                        <Text
                            _dark={{
                                color: "warmGray.50"
                            }}
                            color="coolGray.800"
                            bold
                        >
                            {item.name}
                        </Text>
                    </VStack>
                    <VStack>
                        <Button
                            variant={'ghost'}
                            onPress={() => {
                                navigation.navigate('UserDetails', { params: { id: item.id } })
                            }} >
                            <InfoIcon size="5" />
                        </Button>
                    </VStack>
                </HStack>
            </Box >
        </>
    )
}

export default UserItem;