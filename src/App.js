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
import BaddieWiki from './BaddieWiki.js'
import BoomerWiki from './BoomerWiki.js'
import DartWiki from './DartWiki.js'
import DusterWiki from './DusterWiki.js'
import GasketWiki from './GasketWiki.js'
import GhillieWiki from './GhillieWiki.js'
import NuggetWiki from './NuggetWiki.js'
import PatchesWiki from './PatchesWiki.js'
import PicketWiki from './PicketWiki.js'
import StanzaWiki from './StanzaWiki.js'
import TantrumWiki from './TantrumWiki.js'
import TinkWiki from './TinkWiki.js'

const Button = styled.button`
    background-color: #2a6f97;
    &:hover {
        background-color: #014f86;
    }
    border-radius: 7px;
    padding: 0px 10px;
    font-size: 40px;
    outline: 0;
    box-shadow: 0px 5px 5px #28467a;
`;
const Title = styled.div`
    color: black;
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

const WikiBottom = styled.div`
    padding: 53px;
`;

const CharBottom = styled.div`
    padding: 54px;
`;

var rootStyle = {
    backgroundColor: "#61a5c2",
    color: "#61a5c2",
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

                <Button onClick={() => navigation.navigate("Main Wiki Screen")}>Open Wiki</Button>
                <Space></Space>
            </div>
            <Button onClick={() => window.close()}>Done</Button>
            <Space></Space>
        </View>
    );
}

function CharacterScreen({ navigation }) {
    return (
	<div>
	<CharInfo />
	<Space></Space>
	<Button onClick={() => navigation.goBack()}>Back</Button>;
	<CharBottom/>
	</div>
    );
}
function CharacterLoadScreen({ navigation }) {
    return (
	<div>
	<CharInfoLoad />
	<Space></Space>
	<Button onClick={() => navigation.goBack()}>Back</Button>;
	<CharBottom/>
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

function MainWikiScreen({ navigation }) {
    return (
	<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <div className="App" style={rootStyle}>
            <Space></Space>
            <Title>Too Many Bones Wiki</Title>
            <Space></Space>
            <Space></Space>

            <Button onClick={() => navigation.navigate("Character Wiki Screen")}>Character Wiki</Button>
            <Space></Space>
            <Space></Space>

            <Button onClick={() => navigation.navigate("Baddie Wiki Screen")}>Baddie Wiki</Button>
            <Space></Space>
            <Space></Space>

            <Button onClick={() => navigation.navigate("Tyrant Wiki Screen")}>Tyrant Wiki</Button>
            <Space></Space>
            <Space></Space>

            <Button onClick={() => navigation.goBack()}>Back</Button>;
            <WikiBottom/>
        </div>
	</View>
    );
}

function CharacterWikiScreen({ navigation }) {
    return (
	<div>
	<Title>Character Wiki</Title>
	<Space></Space>

    <Button onClick={() => navigation.navigate("Boomer Wiki Screen")}>Boomer Wiki</Button>
    <Space></Space>
    <Space></Space>

    <Button onClick={() => navigation.navigate("Dart Wiki Screen")}>Dart Wiki</Button>
    <Space></Space>
    <Space></Space>

    <Button onClick={() => navigation.navigate("Duster Wiki Screen")}>Duster Wiki</Button>
    <Space></Space>
    <Space></Space>

    <Button onClick={() => navigation.navigate("Gasket Wiki Screen")}>Gasket Wiki</Button>
    <Space></Space>
    <Space></Space>

    <Button onClick={() => navigation.navigate("Ghillie Wiki Screen")}>Ghillie Wiki</Button>
    <Space></Space>
    <Space></Space>

    <Button onClick={() => navigation.navigate("Nugget Wiki Screen")}>Nugget Wiki</Button>
    <Space></Space>
    <Space></Space>

    <Button onClick={() => navigation.navigate("Patches Wiki Screen")}>Patches Wiki</Button>
    <Space></Space>
    <Space></Space>

    <Button onClick={() => navigation.navigate("Picket Wiki Screen")}>Picket Wiki</Button>
    <Space></Space>
    <Space></Space>

    <Button onClick={() => navigation.navigate("Stanza Wiki Screen")}>Stanza Wiki</Button>
    <Space></Space>
    <Space></Space>

    <Button onClick={() => navigation.navigate("Tantrum Wiki Screen")}>Tantrum Wiki</Button>
    <Space></Space>
    <Space></Space>

    <Button onClick={() => navigation.navigate("Tink Wiki Screen")}>Tink Wiki</Button>
    <Space></Space>
    <Space></Space>

	<Button onClick={() => navigation.goBack()}>Back</Button>;
	<Space></Space>
	</div>
    );
}

function BaddieWikiScreen({ navigation }) {
    return (
	<div>
	<BaddieWiki />
	<Space></Space>

	<Button onClick={() => navigation.goBack()}>Back</Button>;
	<Space></Space>
	</div>
    );
}

function TyrantWikiScreen({ navigation }) {
    return (
	<div>
	<Title>Tyrant Wiki</Title>
	<Space></Space>

	<Button onClick={() => navigation.goBack()}>Back</Button>;
	<Space></Space>
	</div>
    );
}

function BoomerWikiScreen({ navigation }) {
    return (
	<div>
	<BoomerWiki />
	<Space></Space>

	<Button onClick={() => navigation.goBack()}>Back</Button>;
	<Space></Space>
	</div>
    );
}

function DartWikiScreen({ navigation }) {
    return (
	<div>
	<DartWiki />
	<Space></Space>

	<Button onClick={() => navigation.goBack()}>Back</Button>;
	<Space></Space>
	</div>
    );
}

function DusterWikiScreen({ navigation }) {
    return (
	<div>
	<DusterWiki />
	<Space></Space>

	<Button onClick={() => navigation.goBack()}>Back</Button>;
	<Space></Space>
	</div>
    );
}

function GasketWikiScreen({ navigation }) {
    return (
	<div>
	<GasketWiki />
	<Space></Space>

	<Button onClick={() => navigation.goBack()}>Back</Button>;
	<Space></Space>
	</div>
    );
}

function GhillieWikiScreen({ navigation }) {
    return (
	<div>
	<GhillieWiki />
	<Space></Space>

	<Button onClick={() => navigation.goBack()}>Back</Button>;
	<Space></Space>
	</div>
    );
}

function NuggetWikiScreen({ navigation }) {
    return (
	<div>
	<NuggetWiki />
	<Space></Space>

	<Button onClick={() => navigation.goBack()}>Back</Button>;
	<Space></Space>
	</div>
    );
}

function PatchesWikiScreen({ navigation }) {
    return (
	<div>
	<PatchesWiki />
	<Space></Space>

	<Button onClick={() => navigation.goBack()}>Back</Button>;
	<Space></Space>
	</div>
    );
}

function PicketWikiScreen({ navigation }) {
    return (
	<div>
	<PicketWiki />
	<Space></Space>

	<Button onClick={() => navigation.goBack()}>Back</Button>;
	<Space></Space>
	</div>
    );
}

function StanzaWikiScreen({ navigation }) {
    return (
	<div>
	<StanzaWiki />
	<Space></Space>

	<Button onClick={() => navigation.goBack()}>Back</Button>;
	<Space></Space>
	</div>
    );
}

function TantrumWikiScreen({ navigation }) {
    return (
	<div>
	<TantrumWiki />
	<Space></Space>

	<Button onClick={() => navigation.goBack()}>Back</Button>;
	<Space></Space>
	</div>
    );
}

function TinkWikiScreen({ navigation }) {
    return (
	<div>
	<TinkWiki />
	<Space></Space>

	<Button onClick={() => navigation.goBack()}>Back</Button>;
	<Space></Space>
	</div>
    );
}

const App = () => {
    return (
    <html lang="en">
    <head>
	<meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>

	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous"/>
    </head>
    <body>
    <NavigationContainer>
        {
            <Stack.Navigator
                initialRouteName="Main Menu"
                screenOptions={{
                    headerTitleAlign: "center",
                    cardStyle: { backgroundColor: "#61a5c2" }
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
                <Stack.Screen
                    name="Main Wiki Screen"
                    component={MainWikiScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Character Wiki Screen"
                    component={CharacterWikiScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Baddie Wiki Screen"
                    component={BaddieWikiScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Tyrant Wiki Screen"
                    component={TyrantWikiScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Boomer Wiki Screen"
                    component={BoomerWikiScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Dart Wiki Screen"
                    component={DartWikiScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Duster Wiki Screen"
                    component={DusterWikiScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Gasket Wiki Screen"
                    component={GasketWikiScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Ghillie Wiki Screen"
                    component={GhillieWikiScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Nugget Wiki Screen"
                    component={NuggetWikiScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Patches Wiki Screen"
                    component={PatchesWikiScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Picket Wiki Screen"
                    component={PicketWikiScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Stanza Wiki Screen"
                    component={StanzaWikiScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Tantrum Wiki Screen"
                    component={TantrumWikiScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Tink Wiki Screen"
                    component={TinkWikiScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        }
    </NavigationContainer>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
    </body>
    </html>
    );
}

export default App;