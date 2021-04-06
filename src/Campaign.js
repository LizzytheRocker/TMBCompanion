import Character from './Character.js';

class Campaign {
    //The name that the campaign will be saved under (this should be a string)
    #save_name

    //The special effects of the campaign (this should be a string)
    #adventure_effect

    //The boons the characters have (this should be a string)
    #boons

    //The characters in the party for this campaign (this should be a list of characters)
    #characters

    //The tyrants that have been defeated (this should be a string)
    #tyrants_defeated

    //The current tyrant of the campaign, if a game is currently ongoing (this should be a string)
    #tyrant

    //The starting point of the game, if one is currently ongoing (this should be an integer)
    #starting_point

    //The number of progress points required to face the current tyrant, if a game is currently ongoing (this should be an integer)
    #required_progress

    //The current game of the campaign, if one is currently ongoing (this should be a game, or 0)
    #game

    constructor(save_name = "TMB_Campaign", adventure_effect = "", boons = "", characters = [], tyrants_defeated = "", tyrant = "", starting_point = 0, required_progress = 0, game = 0) {
        this.#save_name = save_name;
        this.#adventure_effect = adventure_effect;
        this.#boons = boons;
        this.#characters = characters;
        this.#tyrants_defeated = tyrants_defeated;
        this.#tyrant = tyrant;
        this.#starting_point = starting_point;
        this.#required_progress = required_progress;
        this.#game = game;
    }

    toJSON() {
        return {
            save_name: this.#save_name,
            adventure_effect: this.#adventure_effect,
            boons: this.#boons,
            characters: this.#characters,
            tyrants_defeated: this.#tyrants_defeated,
            tyrant: this.#tyrant,
            starting_point: this.#starting_point,
            required_progress: this.#required_progress,
            game: this.#game
        }
    }

    get save_name() {
        return this.#save_name;
    }

    set save_name(save_name) {
        if (typeof (save_name) != "string") {
            throw new TypeError("Expected string, type provided was " + typeof (save_name));
        }

        this.#save_name = save_name;
    }

    get adventure_effect() {
        return this.#adventure_effect;
    }

    set adventure_effect(adventure_effect) {
        if (typeof (adventure_effect) != "string") {
            throw new TypeError("Expected string, type provided was " + typeof (adventure_effect));
        }

        this.#adventure_effect = adventure_effect;
    }

    get boons() {
        return this.#boons;
    }

    set boons(boons) {
        if (typeof (boons) != "string") {
            throw new TypeError("Expected string, type provided was " + typeof (boons));
        }

        this.#boons = boons;
    }

    get characters() {
        return this.#characters;
    }

    set characters(characters) {
        if (typeof (characters) != "object") {
            throw new TypeError("Expected object, type provided was " + typeof (characters));
        }

        this.#characters = characters
    }

    addCharacter(character) {
        if (!(character instanceof Character)) {
            throw new TypeError("Value provided must be an instance of the Character class");
        }

        this.#characters.push(character);
    }

    get tyrants_defeated() {
        return this.#tyrants_defeated;
    }

    set tyrants_defeated(tyrants_defeated) {
        if (typeof (tyrants_defeated) != "string") {
            throw new TypeError("Expected string, type provided was " + typeof (tyrants_defeated));
        }

        this.#tyrants_defeated = tyrants_defeated;
    }

    get tyrant() {
        return this.#tyrant;
    }

    set tyrant(tyrant) {
        if (typeof (tyrant) != "string") {
            throw new TypeError("Expected string, type provided was " + typeof (tyrant));
        }

        this.#tyrant = tyrant;
    }

    get starting_point() {
        return this.#starting_point;
    }

    set starting_point(starting_point) {
        if (typeof (starting_point) != "number") {
            throw new TypeError("Expected number, type provided was " + typeof (starting_point));
        }

        if (!Number.isInteger(starting_point)) {
            throw new TypeError("Value must be an integer, value was " + String(starting_point));
        }

        if (starting_point < 0) {
            throw new RangeError("Value must be at least 0, value was " + String(starting_point));
        }

        this.#starting_point = starting_point;
    }

    get required_progress() {
        return this.#required_progress;
    }

    set required_progress(required_progress) {
        if (typeof (required_progress) != "number") {
            throw new TypeError("Expected number, type provided was " + typeof (required_progress));
        }

        if (!Number.isInteger(required_progress)) {
            throw new TypeError("Value must be an integer, value was " + String(required_progress));
        }

        if (required_progress < 0) {
            throw new RangeError("Value must be at least 0, value was " + String(required_progress));
        }

        this.#required_progress = required_progress;
    }

    get game() {
        return this.#game;
    }

    set game(game) {
        if (typeof (game) != "object" && game != 0) {
            throw new TypeError("Expected object, type provided was " + typeof (game));
        }

        this.#game = game;
    }
}

export default Campaign;