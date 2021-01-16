import React, { useEffect, useState } from "react";
import { AppLoading } from "expo";
import {
  BackButton,
  NativeRouter as Router,
  Route,
  Switch,
} from "react-router-native";
import { Container, Header, Body, Title } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { States } from "./components/states";
import { StateDetails } from "./components/state";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        ...Ionicons.font,
      });
      setIsLoading(false);
    };
    loadFonts();
  }, []);
  return isLoading ? (
    <AppLoading />
  ) : (
    <Container>
      <Header>
        <Body>
          <Title>Covid-19 statistics</Title>
        </Body>
      </Header>
      <Router>
        <BackButton>
          <Switch>
            <Route exact path="/" component={States} />
            <Route path="/state/:id" component={StateDetails} />
          </Switch>
        </BackButton>
      </Router>
    </Container>
  );
}
