class Character {
    //The name of the character (this should be a string)
    #name;

    //The base stats of the character (this should be an object containing four integers named hp, dex, atk, and df, with values of at least one)
    #stats_base;

    //The dice that have been added to the character's base stats (this should be an object containing four integers named hp, dex, atk, and df, with values of at least zero)
    #stats_dice;

    //The skill dice that the character has acquired (this should be a string)
    #dice_acq;

    //Whether or not the character has awakened their innate +1 (this should be a boolean)
    #innate;

    //The current hp of the character (this should be an integer with a value of at least zero)
    #curr_hp;

    //The loot that the character has aqcuired (this should be a string)
    #loot;

    //The notes the player has taken (this should be a string)
    #player_notes;

    //The dice the character has in their locked slots (this should be a string)
    #locked_slots;

    //The scars the character has (this should be a string)
    #scars;

    constructor(name = "TMB_Character", stats_base = { hp: 1, dex: 1, atk: 1, df: 1 }, stats_dice = { hp: 0, dex: 0, atk: 0, df: 0 }, dice_acq = "", innate = false, curr_hp = 0, loot = "", player_notes = "", locked_slots = "", scars = "") {
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

    toJSON() {
        return {
            name: this.#name,
            stats_base: this.#stats_base,
            stats_dice: this.#stats_dice,
            dice_acq: this.#dice_acq,
            innate: this.#innate,
            curr_hp: this.#curr_hp,
            loot: this.#loot,
            player_notes: this.#player_notes,
            locked_slots: this.#locked_slots,
            scars: this.#scars
        }
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

        if (typeof (stats_base.hp) != "number") {
            throw new TypeError("Expected object containing numbers, type of element hp was " + typeof (stats_base.hp));
        }

        if (!Number.isInteger(stats_base.hp)) {
            throw new TypeError("Values must be integers, value of element hp was " + String(stats_base.hp));
        }

        if (stats_base.hp < 1) {
            throw new RangeError("Values must be at least 0, value of element hp was " + String(stats_base.hp));
        }

        if (typeof (stats_base.dex) != "number") {
            throw new TypeError("Expected object containing numbers, type of element dex was " + typeof (stats_base.dex));
        }

        if (!Number.isInteger(stats_base.dex)) {
            throw new TypeError("Values must be integers, value of element dex was " + String(stats_base.dex));
        }

        if (stats_base.dex < 1) {
            throw new RangeError("Values must be at least 0, value of element dex was " + String(stats_base.dex));
        }

        if (typeof (stats_base.atk) != "number") {
            throw new TypeError("Expected object containing numbers, type of element atk was " + typeof (stats_base.atk));
        }

        if (!Number.isInteger(stats_base.atk)) {
            throw new TypeError("Values must be integers, value of element atk was " + String(stats_base.atk));
        }

        if (stats_base.atk < 1) {
            throw new RangeError("Values must be at least 0, value of element atk was " + String(stats_base.atk));
        }

        if (typeof (stats_base.df) != "number") {
            throw new TypeError("Expected object containing numbers, type of element df was " + typeof (stats_base.df));
        }

        if (!Number.isInteger(stats_base.df)) {
            throw new TypeError("Values must be integers, value of element df was " + String(stats_base.df));
        }

        if (stats_base.df < 1) {
            throw new RangeError("Values must be at least 0, value of element df was " + String(stats_base.df));
        }

        this.#stats_base = { hp: stats_base.hp, dex: stats_base.dex, atk: stats_base.atk, df: stats_base.df };
    }

    get stats_dice() {
        return this.#stats_dice;
    }

    set stats_dice(stats_dice) {
        if (typeof (stats_dice) != "object") {
            throw new TypeError("Expected object, type provided was " + typeof (stats_dice));
        }

        if (typeof (stats_dice.hp) != "number") {
            throw new TypeError("Expected object containing numbers, type of element hp was " + typeof (stats_dice.hp));
        }

        if (!Number.isInteger(stats_dice.hp)) {
            throw new TypeError("Values must be integers, value of element hp was " + String(stats_dice.hp));
        }

        if (stats_dice.hp < 0) {
            throw new RangeError("Values must be at least 0, value of element hp was " + String(stats_dice.hp));
        }

        if (typeof (stats_dice.dex) != "number") {
            throw new TypeError("Expected object containing numbers, type of element dex was " + typeof (stats_dice.dex));
        }

        if (!Number.isInteger(stats_dice.dex)) {
            throw new TypeError("Values must be integers, value of element dex was " + String(stats_dice.dex));
        }

        if (stats_dice.dex < 0) {
            throw new RangeError("Values must be at least 0, value of element dex was " + String(stats_dice.dex));
        }

        if (typeof (stats_dice.atk) != "number") {
            throw new TypeError("Expected object containing numbers, type of element atk was " + typeof (stats_dice.atk));
        }

        if (!Number.isInteger(stats_dice.atk)) {
            throw new TypeError("Values must be integers, value of element atk was " + String(stats_dice.atk));
        }

        if (stats_dice.atk < 0) {
            throw new RangeError("Values must be at least 0, value of element atk was " + String(stats_dice.atk));
        }

        if (typeof (stats_dice.df) != "number") {
            throw new TypeError("Expected object containing numbers, type of element df was " + typeof (stats_dice.df));
        }

        if (!Number.isInteger(stats_dice.df)) {
            throw new TypeError("Values must be integers, value of element df was " + String(stats_dice.df));
        }

        if (stats_dice.df < 0) {
            throw new RangeError("Values must be at least 0, value of element df was " + String(stats_dice.df));
        }

        this.#stats_dice = { hp: stats_dice.hp, dex: stats_dice.dex, atk: stats_dice.atk, df: stats_dice.df };
    }

    get dice_acq() {
        return this.#dice_acq;
    }

    set dice_acq(dice_acq) {
        if (typeof (dice_acq) != "string") {
            throw new TypeError("Expected string, type provided was " + typeof (dice_acq));
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
        if (typeof (loot) != "string") {
            throw new TypeError("Expected string, type provided was " + typeof (loot));
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
        if (typeof (locked_slots) != "string") {
            throw new TypeError("Expected string, type provided was " + typeof (locked_slots));
        }

        this.#locked_slots = locked_slots;
    }

    get scars() {
        return this.#scars;
    }

    set scars(scars) {
        if (typeof (scars) != "string") {
            throw new TypeError("Expected string, type provided was " + typeof (scars));
        }

        this.#scars = scars;
    }
}

export default Character;