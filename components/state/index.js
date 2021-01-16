import React from "react";
import { Content, H2, H3, Text } from "native-base";
import { useQuery } from "react-query";
import { useParams } from "react-router-native";

import { API } from "../../api";

export const StateDetails = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery(id, () => API.getState(id));
  if (isLoading) return <H2>Loading...</H2>;
  if (error || !data.data)
    return <Text>An error has occurred: {error.message}</Text>;
  const { positive, state, death, recovered } = data.data;
  return (
    <Content>
      <H2>{state} total statistics on today</H2>
      <H3 style={{ color: "blue" }}>Confirmed: {positive}</H3>
      <H3 style={{ color: "red" }}>Dead: {death}</H3>
      <H3 style={{ color: "green" }}>Recovered: {recovered}</H3>
    </Content>
  );
};
