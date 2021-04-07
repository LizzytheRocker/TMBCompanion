import React from 'react';
import "./styles.css";
import styled from "styled-components";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import logo from "./TMB logo.png";
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
            </div>
            <Button onClick={() => window.close()}>Done</Button>
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
	</>
    );
}

export default App;