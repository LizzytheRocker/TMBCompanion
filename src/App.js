import React from 'react';
import "./styles.css";
import styled from "styled-components";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import logo from "./TMB logo.png";
import CharInfoButton from './CharInfoButton'
import GameInfoButton from './GameInfoButton'
import CampaignInfoButton from './CampaignInfoButton'
import './CharInfo.css'
import Character from './Character.js';
import Game from './Game.js';
import Campaign from './Campaign.js';
import CharInfo from './CharInfo.js';
import GameInfo from './GameInfo.js';
import CampaignInfo from './CampaignInfo.js';
import CharInfoLoad from './CharInfoLoad.js'
import GameInfoLoad from './GameInfoLoad.js'
import CampaignInfoLoad from './CampaignInfoLoad.js'

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

const Col = styled.div`
  padding: 0px 60px;
`;
const Row = styled.div`
  font-size: 28px;
  padding: 20px 0px;
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
            	<Button onClick={() => navigation.navigate("Character Screen")}>Save Character</Button>
		<Button onClick={() => navigation.navigate("Character Load Screen")}>Load Character</Button>
		</div>

                <Space></Space>
                <div>
                <Button onClick={() => navigation.navigate("Game Screen")}>Save Game</Button>
		<Button onClick={() => navigation.navigate("Game Load Screen")}>Load Game</Button>
                </div>

		<Space></Space>
                <div>
                <Button onClick={() => navigation.navigate("Campaign Screen")}>Save Campaign</Button>
		<Button onClick={() => navigation.navigate("Campaign Load Screen")}>Load Campaign</Button>
                </div>
                <Space></Space>
                <Space></Space>
            </div>
        </View>
    );
}

function CharacterScreen({ navigation }) {
    return (
	<div>
	<CharInfo />
	<Space></Space>
	<Button onClick={() => navigation.goBack()}>Back</Button>;
	</div>
    );
}
function CharacterLoadScreen({ navigation }) {
    return (
	<div>
	<CharInfoLoad />
	<Space></Space>
	<Button onClick={() => navigation.goBack()}>Back</Button>;
	</div>
    );
}

function GameScreen({ navigation }) {
    return (
	<div>
	<GameInfo />
	<Space></Space>
	<Button onClick={() => navigation.goBack()}>Back</Button>;
	</div>
    );
}
function GameLoadScreen({ navigation }) {
    return (
	<div>
	<GameInfoLoad />
	<Space></Space>
	<Button onClick={() => navigation.goBack()}>Back</Button>;
	</div>
    );
}

function CampaignScreen({ navigation }) {
    return (
	<div>
	<CampaignInfo />
	<Space></Space>
	<Button onClick={() => navigation.goBack()}>Back</Button>;
	</div>
    );
}
function CampaignLoadScreen({ navigation }) {
    return (
	<div>
	<CampaignInfoLoad />
	<Space></Space>
	<Button onClick={() => navigation.goBack()}>Back</Button>;
	</div>
    );
}

const App = () => {
    /* Example test campaign
    var character = new Character("Test", { hp: 4, dex: 2, atk: 3, df: 3 }, { hp: 0, dex: 2, atk: 1, df: 0 }, "1, 4", true, 2, "Big gun", "The bad guy is bad", "2 bombs", "None");
    var game = new Game("Test Game", "Bad Guy", 2, 3, "The first one", "All of the other ones", "Big bomb", []);
    game.addCharacter(character);
    var temp = new Campaign();
    temp.save_name = "Test Campaign";
    temp.adventure_effect = "-1 damage";
    temp.boons = "+1 damage";
    temp.characters = game.characters;
    temp.tyrants_defeated = "Dragon";
    temp.tyrant = "Bad Guy";
    temp.starting_point = 1;
    temp.required_progress = 20;
    temp.game = game;

    var json = JSON.stringify(temp);
    var campaign = Object.assign(new Campaign, JSON.parse(json));*/

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
                <Stack.Screen
                    name="Character Screen"
                    component={CharacterScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Character Load Screen"
                    component={CharacterLoadScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Game Screen"
                    component={GameScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Game Load Screen"
                    component={GameLoadScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Campaign Screen"
                    component={CampaignScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Campaign Load Screen"
                    component={CampaignLoadScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        }
    </NavigationContainer>
    {/* <html>
        <body>
            <h1> Test Campaign </h1>
            <ul>
                <li> Save name: {campaign.save_name} </li>
                <li> Adventure effect: {campaign.adventure_effect} </li>
                <li> Boons: {campaign.boons} </li>
                <li> Tyrants Defeated: {campaign.tyrants_defeated} </li>
                <li> Tyrant: {campaign.tyrant} </li>
                <li> Starting progress points: {campaign.starting_point} </li>
                <li> Required progress points: {campaign.required_progress} </li>
                <li> Characters: {campaign.game.characters.length} </li>
                <ul>
                    <li> Name: {campaign.game.characters[0].name} </li>
                    <li> Base stats:
                        <ul>
                            <li> HP: {campaign.game.characters[0].stats_base.hp} </li>
                            <li> Dexterity: {campaign.game.characters[0].stats_base.dex} </li>
                            <li> Attack: {campaign.game.characters[0].stats_base.atk} </li>
                            <li> Defense: {campaign.game.characters[0].stats_base.df} </li>
                        </ul>
                    </li>
                    <li> Dice stats:
                        <ul>
                            <li> HP: {campaign.game.characters[0].stats_dice.hp} </li>
                            <li> Dexterity: {campaign.game.characters[0].stats_dice.dex} </li>
                            <li> Attack: {campaign.game.characters[0].stats_dice.atk} </li>
                            <li> Defense: {campaign.game.characters[0].stats_dice.df} </li>
                        </ul>
                    </li>
                    <li> Dice acquired: {campaign.game.characters[0].dice_acq.toString()} </li>
                    <li> Innate +1: {campaign.game.characters[0].innate.toString()} </li>
                    <li> Current HP: {campaign.game.characters[0].curr_hp} </li>
                    <li> Loot: {campaign.game.characters[0].loot.toString()} </li>
                    <li> Notes: {campaign.game.characters[0].player_notes} </li>
                    <li> Locked Slots: {campaign.game.characters[0].locked_slots.toString()} </li>
                    <li> Scars: {campaign.game.characters[0].scars.toString()} </li>
                </ul>
                <li> Game: 
                    <ul>
                        <li> Save name: {campaign.game.save_name} </li>
                        <li> Tyrant: {campaign.game.tyrant} </li>
                        <li> Day count: {campaign.game.day_count} </li>
                        <li> Progress points: {campaign.game.progress_points} </li>
                        <li> Encounters completed: {campaign.game.encounters_completed} </li>
                        <li> Encounters remaining: {campaign.game.encounters_remaining} </li>
                        <li> Loot used: {campaign.game.loot_used} </li>
                        <li> Characters: {campaign.game.characters.length} </li>
                        <ul>
                            <li> Name: {campaign.game.characters[0].name} </li>
                            <li> Base stats:
                                <ul>
                                    <li> HP: {campaign.game.characters[0].stats_base.hp} </li>
                                    <li> Dexterity: {campaign.game.characters[0].stats_base.dex} </li>
                                    <li> Attack: {campaign.game.characters[0].stats_base.atk} </li>
                                    <li> Defense: {campaign.game.characters[0].stats_base.df} </li>
                                </ul>
                            </li>
                            <li> Dice stats:
                                <ul>
                                    <li> HP: {campaign.game.characters[0].stats_dice.hp} </li>
                                    <li> Dexterity: {campaign.game.characters[0].stats_dice.dex} </li>
                                    <li> Attack: {campaign.game.characters[0].stats_dice.atk} </li>
                                    <li> Defense: {campaign.game.characters[0].stats_dice.df} </li>
                                </ul>
                            </li>
                            <li> Dice acquired: {campaign.game.characters[0].dice_acq.toString()} </li>
                            <li> Innate +1: {campaign.game.characters[0].innate.toString()} </li>
                            <li> Current HP: {campaign.game.characters[0].curr_hp} </li>
                            <li> Loot: {campaign.game.characters[0].loot.toString()} </li>
                            <li> Notes: {campaign.game.characters[0].player_notes} </li>
                            <li> Locked Slots: {campaign.game.characters[0].locked_slots.toString()} </li>
                            <li> Scars: {campaign.game.characters[0].scars.toString()} </li>
                        </ul>
                    </ul>
                </li>
            </ul>
        </body>
    </html> */}
	</>
    );
}

export default App;