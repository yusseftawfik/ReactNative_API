import React, { useContext, useEffect } from 'react';
import { Box, Heading, Text, Spacer, HStack, VStack } from 'native-base';
import { UsersContext } from '../context/context'
import { getUsersDetails, clearDetails } from '../actions/Actions';

function UserDetails({ route }) {
    const { id } = route.params;
    console.log(route.params.id)
    const [state, dispatch] = useContext(UsersContext);
    useEffect(
        () => {
            const resolveAction = async () => {
                dispatch(await getUsersDetails(id))
            }
            resolveAction();
            return () => {
                dispatch(clearDetails())
            }
        }, [])

    if (state.details.id)
        return (
            <>
                <Box
                    borderBottomWidth="5"
                    _dark={{
                        borderColor: "black"
                    }}
                    borderColor="black"
                    pl="4"
                    pr="5"
                    py="2"
                >
                    <Heading>
                        {state.details.name} Details :
                    </Heading>
                    <Spacer />

                    <HStack>
                        <VStack>
                            <Text>
                                Email:
                            </Text>
                        </VStack>
                        <VStack>
                            <Text>{state.details.email}</Text>
                        </VStack>
                    </HStack>

                    <Spacer />

                    <HStack>
                        <VStack>
                            <Text>
                                Phone:
                            </Text>
                        </VStack>
                        <VStack>
                            <Text>{state.details.phone}</Text>
                        </VStack>
                    </HStack>

                    <Spacer />

                    <HStack>
                        <VStack>
                            <Text>
                                Username:
                            </Text>
                        </VStack>
                        <VStack>
                            <Text>{state.details.username}</Text>
                        </VStack>
                    </HStack>

                    <Spacer />

                    <HStack>
                        <VStack>
                            <Text>
                                Company:
                            </Text>
                        </VStack>
                        <VStack>
                            <Text>{state.details.company.name}</Text>
                        </VStack>
                    </HStack>

                    <Spacer />

                    <HStack>
                        <VStack>
                            <Text>
                                Website:
                            </Text>
                        </VStack>
                        <VStack>
                            <Text>{state.details.website}</Text>
                        </VStack>
                    </HStack>

                    <Spacer />

                    <HStack>
                        <VStack>
                            <Text>
                                City:
                            </Text>
                        </VStack>
                        <VStack>
                            <Text>{state.details.address.city}</Text>
                        </VStack>
                    </HStack>
                </Box>
            </>
        )
    return (
        <Text>Loading...</Text>
    )
}

export default UserDetails;