import React, { useContext, useEffect } from 'react';
import { Box, FlatList, Heading, VStack } from "native-base";
import { UsersContext } from '../context/context'
import { getUsers } from '../actions/Actions'
import UserItem from "./UserItem";

export default function Users({ ...props }) {
    const [state, dispatch] = useContext(UsersContext);
    useEffect(
        () => {
            const resolveAction = async () => {
                dispatch(await getUsers())
            }
            resolveAction();
        }, [])

    return (
        <>
            <Box>
                <VStack>
                    <Heading
                        fontSize="xl"
                        p="4"
                        pb="3"
                    >
                        Users List
                    </Heading>
                    <FlatList
                        data={state.list}
                        renderItem={
                            ({ item }) => {
                                return (
                                    <UserItem item={item} {...props} />
                                )
                            }
                        }
                    />
                </VStack>
            </Box>
        </>
    )
};