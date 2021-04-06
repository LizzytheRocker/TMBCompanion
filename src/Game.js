import Character from './Character.js';

class Game {
    //The name that the game will be saved under (this should be a string)
    #save_name

    //The name of the game's tyrant (this should be a string)
    #tyrant

    //The current day of the game (this should be an integer with a value of at least one)
    #day_count

    //The number of progress points that the party has earned this game (this should be an integer with a value of at least zero)
    #progress_points

    //The encounters that the party has already completed this game (this should be a string)
    #encounters_completed

    //The encounters that the party has not yet completed this game (this should be a string)
    #encounters_remaining

    //The loot that has already been used this game (this should be a string)
    #loot_used

    //The characters in the party for this game (this should be a list of characters)
    #characters

    constructor(save_name = "TMB_Game", tyrant = "", day_count = 1, progress_points = 0, encounters_completed = "", encounters_remaining = "", loot_used = "", characters = []) {
        this.#save_name = save_name;
        this.#tyrant = tyrant;
        this.#day_count = day_count;
        this.#progress_points = progress_points;
        this.#encounters_completed = encounters_completed;
        this.#encounters_remaining = encounters_remaining;
        this.#loot_used = loot_used;
        this.#characters = characters;
    }

    toJSON() {
        return {
            save_name: this.#save_name,
            tyrant: this.#tyrant,
            day_count: this.#day_count,
            progress_points: this.#progress_points,
            encounters_completed: this.#encounters_completed,
            encounters_remaining: this.#encounters_remaining,
            loot_used: this.#loot_used,
            characters: this.#characters
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

    get tyrant() {
        return this.#tyrant;
    }

    set tyrant(tyrant) {
        if (typeof (tyrant) != "string") {
            throw new TypeError("Expected string, type provided was " + typeof (tyrant));
        }

        this.#tyrant = tyrant;
    }

    get day_count() {
        return this.#day_count;
    }

    set day_count(day_count) {
        if (typeof (day_count) != "number") {
            throw new TypeError("Expected number, type provided was " + typeof (day_count));
        }

        if (!Number.isInteger(day_count)) {
            throw new TypeError("Value must be an integer, value was " + String(day_count));
        }

        if (day_count < 1) {
            throw new RangeError("Value must be at least 1, value was " + String(day_count));
        }

        this.#day_count = day_count;
    }

    get progress_points() {
        return this.#progress_points;
    }

    set progress_points(progress_points) {
        if (typeof (progress_points) != "number") {
            throw new TypeError("Expected number, type provided was " + typeof (progress_points));
        }

        if (!Number.isInteger(progress_points)) {
            throw new TypeError("Value must be an integer, value was " + String(progress_points));
        }

        if (progress_points < 0) {
            throw new RangeError("Value must be at least 0, value was " + String(progress_points));
        }

        this.#progress_points = progress_points;
    }

    get encounters_completed() {
        return this.#encounters_completed;
    }

    set encounters_completed(encounters_completed) {
        if (typeof (encounters_completed) != "string") {
            throw new TypeError("Expected string, type provided was " + typeof (encounters_completed));
        }

        this.#encounters_completed = encounters_completed;
    }

    get encounters_remaining() {
        return this.#encounters_remaining;
    }

    set encounters_remaining(encounters_remaining) {
        if (typeof (encounters_remaining) != "string") {
            throw new TypeError("Expected string, type provided was " + typeof (encounters_remaining));
        }

        this.#encounters_remaining = encounters_remaining;
    }

    get loot_used() {
        return this.#loot_used;
    }

    set loot_used(loot_used) {
        if (typeof (loot_used) != "string") {
            throw new TypeError("Expected string, type provided was " + typeof (loot_used));
        }

        this.#loot_used = loot_used;
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
}

export default Game;