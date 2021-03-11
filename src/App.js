import React from 'react';
import Character from './Character.js';
import CharSelect from './CharSelect'
import './CharSelect.css'

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
        <div className='App'>
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
                <CharSelect />
            </body>
        </html>
        </div>
    );
}

export default App;