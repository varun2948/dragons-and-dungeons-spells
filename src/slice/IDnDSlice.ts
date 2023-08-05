interface DamageType {
    index: string;
    name: string;
    url: string;
}

interface DamageAtCharacterLevel {
    [level: number]: string;
}

interface Damage {
    damage_type: DamageType;
    damage_at_character_level: DamageAtCharacterLevel;
}

interface DCType {
    index: string;
    name: string;
    url: string;
}

interface DC {
    dc_type: DCType;
    dc_success: string;
}

export interface ISchool {
    index: string;
    name: string;
    url: string;
}

export interface IClass {
    index: string;
    name: string;
    url: string;
}

export interface ISubclass {
    index: string;
    name: string;
    url: string;
}

interface SpellDetails {
    [key: string]: ISchool | IClass[] | ISubclass[] | string[] | string | boolean | number | Damage | DC;
    higher_level: string[];
    material: string;
    attack_type: string;
    index: string;
    name: string;
    desc: string[];
    range: string;
    components: string[];
    ritual: boolean;
    duration: string;
    concentration: boolean;
    casting_time: string;
    level: number;
    damage: Damage;
    dc: DC;
    school: ISchool;
    classes: IClass[];
    subclasses: ISubclass[];
    url: string;
}

export interface Spell {
    index: string;
    name: string;
    url: string;
}

interface SpellList {
    count: number;
    results: Spell[];
}
export interface DnDState {
    spells: SpellList | null,
    spellsLoading: boolean,
    spellsError: string | null,
    spellDetails: SpellDetails | null,
    spellsDetailLoading: boolean,
    favoriteSpell: Spell[] | []
}

