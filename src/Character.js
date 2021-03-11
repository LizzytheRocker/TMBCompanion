class Character {
    //The name of the character (this should be a string)
    #name;

    //The base stats of the character (this should be an object containing four integers with values of at least one)
    #stats_base;

    //The dice that have been added to the character's base stats (this should be an object containing four integers with values of at least zero)
    #stats_dice;

    //The skill dice that the character has acquired (this should be an object containing integers with unique values between 1 and 16)
    #dice_acq;

    //Whether or not the character has awakened their innate +1 (this should be a boolean)
    #innate;

    //The current hp of the character (this should be an integer with a value of at least zero)
    #curr_hp;

    //The loot that the character has aqcuired (this should be an object containing strings)
    #loot;

    //The notes the player has taken (this should be a string)
    #player_notes;

    //The dice the character has in their locked slots (this should be an object containing strings)
    #locked_slots;

    //The scars the character has (this should be an object containing strings)
    #scars;

    constructor(name = "", stats_base = { hp: 1, dex: 1, atk: 1, df: 1 }, stats_dice = { hp: 0, dex: 0, atk: 0, df: 0 }, dice_acq = [], innate = false, curr_hp = 0, loot = [], player_notes = "", locked_slots = [], scars = []) {
        this.#name = name;
        this.#stats_base = stats_base;
        this.#stats_dice = stats_dice;
        this.#dice_acq = dice_acq;
        this.#innate = innate;
        this.#curr_hp = curr_hp;
        this.#loot = loot;
        this.#player_notes = player_notes;
        this.#locked_slots = locked_slots;
        this.#scars = scars;
    }

    //TODO: make this compatible with browsers
    load(file) {
        if (typeof (file) != "string") {
            throw new TypeError("Expected string, type provided was " + typeof (file));
        }

        const fs = require('fs');

        let data = fs.readFileSync(file + '.json');

        let object = JSON.parse(data);

        return new Character(object.name, object.stats_base, object.stats_dice, object.dice_acq, object.innate, object.curr_hp, object.loot, object.player_notes, object.locked_slots, object.scars);
    }

    //TODO: make this compatible with browsers
    save(file) {
        if (typeof (file) != "string") {
            throw new TypeError("Expected string, type provided was " + typeof (file));
        }

        const fs = require('fs');

        let data = JSON.stringify(this, null, 2);

        fs.writeFileSync(file + '.json', data);
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        if (typeof (name) != "string") {
            throw new TypeError("Expected string, type provided was " + typeof (name));
        }

        this.#name = name;
    }

    get stats_base() {
        return this.#stats_base;
    }

    set stats_base(stats_base) {
        if (typeof (stats_base) != "object") {
            throw new TypeError("Expected object, type provided was " + typeof (stats_base));
        }

        if (stats_base.length != 4) {
            throw new RangeError("Length of object must be 4, length of array was " + String(stats_base.length));
        }

        let i = 0;
        for (; i < stats_base.length; i++) {
            if (typeof (stats_base[i]) != "number") {
                throw new TypeError("Expected object containing numbers, type of element " + String(i) + " was " + typeof (stats_base[i]));
            }

            if (!Number.isInteger(stats_base[i])) {
                throw new RangeError("Values must be integers, value of element " + String(i) + " was " + String(stats_base[i]));
            }

            if (stats_base[i] < 1) {
                throw new RangeError("Values must be at least 1, value of element " + String(i) + " was " + String(stats_base[i]));
            }
        }

        this.#stats_base = { hp: stats_base[0], dex: stats_base[1], atk: stats_base[2], df: stats_base[3] };
    }

    get stats_dice() {
        return this.#stats_dice;
    }

    set stats_dice(stats_dice) {
        if (typeof (stats_dice) != "object") {
            throw new TypeError("Expected object, type provided was " + typeof (stats_dice));
        }

        if (stats_dice.length != 4) {
            throw new RangeError("Length of object must be 4, length of array was " + String(stats_dice.length));
        }

        let i = 0;
        for (; i < stats_dice.length; i++) {
            if (typeof (stats_dice[i]) != "number") {
                throw new TypeError("Expected object containing numbers, type of element " + String(i) + " was " + typeof (stats_dice[i]));
            }

            if (!Number.isInteger(stats_dice[i])) {
                throw new RangeError("Values must be integers, value of element " + String(i) + " was " + String(stats_dice[i]));
            }

            if (stats_dice[i] < 0) {
                throw new RangeError("Values must be at least 0, value of element " + String(i) + " was " + String(stats_dice[i]));
            }
        }

        this.#stats_dice = { hp: stats_dice[0], dex: stats_dice[1], atk: stats_dice[2], df: stats_dice[3] };
    }

    get dice_acq() {
        return this.#dice_acq;
    }

    set dice_acq(dice_acq) {
        if (typeof (dice_acq) != "object") {
            throw new TypeError("Expected array, type provided was " + typeof (dice_acq));
        }

        if (dice_acq.length > 16) {
            throw new RangeError("Length of object must be at most 16, length of array was " + String(dice_acq.length));
        }

        let i = 0;
        for (; i < dice_acq.length; i++) {
            if (typeof (dice_acq[i]) != "number") {
                throw new TypeError("Expected object containing numbers, type of element " + String(i) + " was " + typeof (dice_acq[i]));
            }

            if (!Number.isInteger(dice_acq[i])) {
                throw new RangeError("Values must be integers, value of element " + String(i) + " was " + String(dice_acq[i]));
            }

            if (dice_acq[i] < 1 || dice_acq[i] > 16) {
                throw new RangeError("Values must be between 1 and 16, value of element " + String(i) + " was " + String(dice_acq[i]));
            }

            if (new Set(dice_acq).size != dice_acq.length) {
                throw new RangeError("Values must be unique");
            }
        }

        this.#dice_acq = dice_acq;
    }

    get innate() {
        return this.#innate;
    }

    set innate(innate) {
        if (typeof (innate) != "boolean") {
            throw new TypeError("Expected boolean, type provided was " + typeof (innate));
        }

        this.#innate = innate;
    }

    get curr_hp() {
        return this.#curr_hp;
    }

    set curr_hp(curr_hp) {
        if (typeof (curr_hp) != "number") {
            throw new TypeError("Expected number, type provided was " + typeof (curr_hp));
        }

        if (!Number.isInteger(curr_hp)) {
            throw new RangeError("Value must be an integer, value was " + String(curr_hp));
        }

        if (curr_hp < 0) {
            throw new RangeError("Value must be at least 0, value was " + String(curr_hp));
        }

        this.#curr_hp = curr_hp;
    }

    get loot() {
        return this.#loot;
    }

    set loot(loot) {
        if (typeof (loot) != "object") {
            throw new TypeError("Expected object, type provided was " + typeof (loot));
        }

        let i = 0;
        for (; i < loot.length; i++) {
            if (typeof (loot[i]) != "string") {
                throw new TypeError("Expected object containing strings, type of element " + String(i) + " was " + typeof (loot[i]));
            }
        }

        this.#loot = loot;
    }

    get player_notes() {
        return this.#player_notes;
    }

    set player_notes(player_notes) {
        if (typeof (player_notes) != "string") {
            throw new TypeError("Expected string, type provided was " + typeof (player_notes));
        }

        this.#player_notes = player_notes;
    }

    get locked_slots() {
        return this.#locked_slots;
    }

    set locked_slots(locked_slots) {
        if (typeof (locked_slots) != "object") {
            throw new TypeError("Expected object, type provided was " + typeof (locked_slots));
        }

        let i = 0;
        for (; i < locked_slots.length; i++) {
            if (typeof (locked_slots[i]) != "string") {
                throw new TypeError("Expected object containing strings, type of element " + String(i) + " was " + typeof (locked_slots[i]));
            }
        }

        this.#locked_slots = locked_slots;
    }

    get scars() {
        return this.#scars;
    }

    set scars(scars) {
        if (typeof (scars) != "object") {
            throw new TypeError("Expected object, type provided was " + typeof (scars));
        }

        let i = 0;
        for (; i < scars.length; i++) {
            if (typeof (scars[i]) != "string") {
                throw new TypeError("Expected object containing strings, type of element " + String(i) + " was " + typeof (scars[i]));
            }
        }

        this.#scars = scars;
    }
}

export default Character;