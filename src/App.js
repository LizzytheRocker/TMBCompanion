import React from 'react';
import "./styles.css";
import styled from "styled-components";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import logo from "./TMB logo.png";
import Character from './Character.js';

function buttonClick({ navigation }) {
  navigation.navigate("New Screen");
}

function backButton({ navigation }) {
  navigation.navigate("Main Menu");
}

const Button = styled.button`
  background-color: #00bcd4;
  &:hover {
    background-color: #0097a7;
  }
  border-radius: 7px;
  padding: 10px 20px;
  font-size: 40px;
  outline: 0;
  box-shadow: 0px 5px 5px #28467a;
`;
const Title = styled.div`
  font-size: 42px;
  padding: 30px 0px;
`;

const Space = styled.div`
  padding: 15px;
`;
const MenuBottom = styled.div`
  padding: 200px;
`;

var rootStyle = {
  backgroundColor: "#28527a",
  color: "#28527a",
  height: "100%"
};

const Stack = createStackNavigator();

function MainMenu({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <div className="App" style={rootStyle}>
        <Space></Space>
        <img src={logo} className="photo " alt="Logo" />

        <Space></Space>
        <div>
          <Button onClick={buttonClick({ navigation })}>Create Game</Button>
        </div>

        <Space></Space>
        <div>
          <Button>Load Game</Button>
        </div>
        <Space></Space>
        <Space></Space>
      </div>
    </View>
  );
}

function NewScreen({ navigation }) {
  return <Button onClick={backButton({ navigation })}>Back</Button>;
}




const App = () => {
    var test = new Character;

    test.name = "Test";
    test.stats_base = [4, 2, 3, 3];
    test.stats_dice = [0, 2, 1, 0];
    test.dice_acq = [1, 4];
    test.innate = true;
    test.curr_hp = 2;
    test.loot = ["Big gun"];
    test.player_notes = "The bad guy is bad";
    test.locked_slots = ["2 bombs"];
    test.scars = ["None"];

    //Will not work in a browser
    //test.save("test");
    //test.load("test");

    return (
	<>
	<NavigationContainer>
          {
            <Stack.Navigator
              initialRouteName="Main Menu"
              screenOptions={{
                headerTitleAlign: "center",
                cardStyle: { backgroundColor: "#28527a" }
              }}
            >
              <Stack.Screen
                name="Main Menu"
                component={MainMenu}
                options={{ headerShown: false }}
              />
              <Stack.Screen name="New Screen" component={NewScreen} />
            </Stack.Navigator>
          }
        </NavigationContainer>
        <html>
            <body>
                <h1> Test Character </h1>
                <ul>
                    <li> Name: {test.name} </li>
                    <li> Base stats:
                        <ul>
                            <li> HP: {test.stats_base.hp} </li>
                            <li> Dexterity: {test.stats_base.dex} </li>
                            <li> Attack: {test.stats_base.atk} </li>
                            <li> Defense: {test.stats_base.df} </li>
                        </ul>
                    </li>
                    <li> Dice stats:
                        <ul>
                            <li> HP: {test.stats_dice.hp} </li>
                            <li> Dexterity: {test.stats_dice.dex} </li>
                            <li> Attack: {test.stats_dice.atk} </li>
                            <li> Defense: {test.stats_dice.df} </li>
                        </ul>
                    </li>
                    <li> Dice acquired: {test.dice_acq.toString()} </li>
                    <li> Innate +1: {test.innate.toString()} </li>
                    <li> Current HP: {test.curr_hp} </li>
                    <li> Loot: {test.loot.toString()} </li>
                    <li> Notes: {test.player_notes} </li>
                    <li> Locked Slots: {test.locked_slots.toString()} </li>
                    <li> Scars: {test.scars.toString()} </li>
                </ul>
            </body>
        </html>
	</>
    );
}

export default App;