import React, { useEffect, useState } from "react";
import { AppLoading } from "expo";
import { H3, Icon, Left, List, ListItem, Right, Text } from "native-base";
import { ScrollView, View } from "react-native";
import { useQuery } from "react-query";
import { useHistory } from "react-router-native";

import { API } from "../../api";

export const States = () => {
  const history = useHistory();
  const { isLoading, error, data } = useQuery("countries list", () =>
    API.getStates()
  );
  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>An error has occurred: {error.message}</Text>;
  const onItemPressed = (id) => (ev) => history.push(`/state/${id}`);
  return (
    <View>
      <H3>States List</H3>
      <ScrollView>
        <List>
          {data?.data?.map(({ state, name }) => {
            return (
              <ListItem onPress={onItemPressed(state)} key={state}>
                <Left>
                  <Text>{name}</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            );
          })}
        </List>
      </ScrollView>
    </View>
  );
};
