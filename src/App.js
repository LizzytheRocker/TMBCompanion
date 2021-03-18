import React from 'react';
import "./styles.css";
import styled from "styled-components";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import logo from "./TMB logo.png";
import Character from './Character.js';
import CharInfoButton from './CharInfoButton'
import Game from './Game.js';
import './CharInfo.css'

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
    /* Example test game
    var character = new Character("Test", { hp: 4, dex: 2, atk: 3, df: 3 }, { hp: 0, dex: 2, atk: 1, df: 0 }, "1, 4", true, 2, "Big gun", "The bad guy is bad", "2 bombs", "None");
    var temp = new Game();
    temp.save_name = "Test Game";
    temp.tyrant = "Bad Guy";
    temp.day_count = 2;
    temp.progress_points = 3;
    temp.encounters_completed = "The first one";
    temp.encounters_remaining = "All of the other ones";
    temp.loot_used = "Big bomb";
    temp.addCharacter(character);

    var json = JSON.stringify(temp);
    var game = Object.assign(new Game, JSON.parse(json));*/

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
    <CharInfoButton />
    {/* <html>
        <body>
            <h1> Test Game </h1>
            <ul>
                <li> Save name: {game.save_name} </li>
                <li> Tyrant: {game.tyrant} </li>
                <li> Day count: {game.day_count} </li>
                <li> Progress points: {game.progress_points} </li>
                <li> Encounters completed: {game.encounters_completed} </li>
                <li> Encounters remaining: {game.encounters_remaining} </li>
                <li> Loot used: {game.loot_used} </li>
                <li> Characters: {game.characters.length} </li>
                <ul>
                            <li> Name: {game.characters[0].name} </li>
                    <li> Base stats:
                        <ul>
                            <li> HP: {game.characters[0].stats_base.hp} </li>
                            <li> Dexterity: {game.characters[0].stats_base.dex} </li>
                            <li> Attack: {game.characters[0].stats_base.atk} </li>
                            <li> Defense: {game.characters[0].stats_base.df} </li>
                        </ul>
                    </li>
                    <li> Dice stats:
                        <ul>
                            <li> HP: {game.characters[0].stats_dice.hp} </li>
                            <li> Dexterity: {game.characters[0].stats_dice.dex} </li>
                            <li> Attack: {game.characters[0].stats_dice.atk} </li>
                            <li> Defense: {game.characters[0].stats_dice.df} </li>
                        </ul>
                    </li>
                    <li> Dice acquired: {game.characters[0].dice_acq.toString()} </li>
                    <li> Innate +1: {game.characters[0].innate.toString()} </li>
                    <li> Current HP: {game.characters[0].curr_hp} </li>
                    <li> Loot: {game.characters[0].loot.toString()} </li>
                    <li> Notes: {game.characters[0].player_notes} </li>
                    <li> Locked Slots: {game.characters[0].locked_slots.toString()} </li>
                    <li> Scars: {game.characters[0].scars.toString()} </li>
                </ul>
            </ul>
        </body>
    </html> */}
	</>
    );
}

export default App;