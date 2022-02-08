export const CONSTANTS: {
    Version: string
    _idleSpeed: number
    MaxSkillLevel: number
    MilliPerCycle: number
    CorpFactionRepRequirement: number
    BaseCostFor1GBOfRamHome: number
    BaseCostFor1GBOfRamServer: number
    TravelCost: number
    BaseFavorToDonate: number
    DonateMoneyToRepDivisor: number
    FactionReputationToFavorBase: number
    FactionReputationToFavorMult: number
    CompanyReputationToFavorBase: number
    CompanyReputationToFavorMult: number
    NeuroFluxGovernorLevelMult: number
    NumNetscriptPorts: number
    HomeComputerMaxRam: number
    ServerBaseGrowthRate: number
    ServerMaxGrowthRate: number
    ServerFortifyAmount: number
    ServerWeakenAmount: number
    PurchasedServerLimit: number
    PurchasedServerMaxRam: number
    MultipleAugMultiplier: number
    TorRouterCost: number
    InfiltrationBribeBaseAmount: number
    InfiltrationMoneyValue: number
    InfiltrationRepValue: number
    InfiltrationExpPow: number
    WSEAccountCost: number
    TIXAPICost: number
    MarketData4SCost: number
    MarketDataTixApi4SCost: number
    StockMarketCommission: number
    HospitalCostPerHp: number
    IntelligenceCrimeWeight: number
    IntelligenceInfiltrationWeight: number
    IntelligenceCrimeBaseExpGain: number
    IntelligenceProgramBaseExpGain: number
    IntelligenceTerminalHackBaseExpGain: number
    IntelligenceSingFnBaseExpGain: number
    IntelligenceClassBaseExpGain: number
    IntelligenceHackingMissionBaseExpGain: number
    HackingMissionRepToDiffConversion: number
    HackingMissionRepToRewardConversion: number
    HackingMissionSpamTimeIncrease: number
    HackingMissionTransferAttackIncrease: number
    HackingMissionMiscDefenseIncrease: number
    HackingMissionDifficultyToHacking: number
    HackingMissionHowToPlay: string
    MillisecondsPer20Hours: number
    GameCyclesPer20Hours: number
    MillisecondsPer10Hours: number
    GameCyclesPer10Hours: number
    MillisecondsPer8Hours: number
    GameCyclesPer8Hours: number
    MillisecondsPer4Hours: number
    GameCyclesPer4Hours: number
    MillisecondsPer2Hours: number
    GameCyclesPer2Hours: number
    MillisecondsPerHour: number
    GameCyclesPerHour: number
    MillisecondsPerHalfHour: number
    GameCyclesPerHalfHour: number
    MillisecondsPerQuarterHour: number
    GameCyclesPerQuarterHour: number
    MillisecondsPerFiveMinutes: number
    GameCyclesPerFiveMinutes: number
    FactionWorkHacking: string
    FactionWorkField: string
    FactionWorkSecurity: string
    WorkTypeCompany: string
    WorkTypeCompanyPartTime: string
    WorkTypeFaction: string
    WorkTypeCreateProgram: string
    WorkTypeStudyClass: string
    WorkTypeCrime: string
    ClassStudyComputerScience: string
    ClassDataStructures: string
    ClassNetworks: string
    ClassAlgorithms: string
    ClassManagement: string
    ClassLeadership: string
    ClassGymStrength: string
    ClassGymDefense: string
    ClassGymDexterity: string
    ClassGymAgility: string
    ClassDataStructuresBaseCost: number
    ClassNetworksBaseCost: number
    ClassAlgorithmsBaseCost: number
    ClassManagementBaseCost: number
    ClassLeadershipBaseCost: number
    ClassGymBaseCost: number
    ClassStudyComputerScienceBaseExp: number
    ClassDataStructuresBaseExp: number
    ClassNetworksBaseExp: number
    ClassAlgorithmsBaseExp: number
    ClassManagementBaseExp: number
    ClassLeadershipBaseExp: number
    CrimeShoplift: string
    CrimeRobStore: string
    CrimeMug: string
    CrimeLarceny: string
    CrimeDrugs: string
    CrimeBondForgery: string
    CrimeTraffickArms: string
    CrimeHomicide: string
    CrimeGrandTheftAuto: string
    CrimeKidnap: string
    CrimeAssassination: string
    CrimeHeist: string
    CodingContractBaseFactionRepGain: number
    CodingContractBaseCompanyRepGain: number
    CodingContractBaseMoneyGain: number
    TotalNumBitNodes: number
    LatestUpdate: string
} = {
    Version: "0.52.9",

    // Speed (in ms) at which the main loop is updated
    _idleSpeed: 200,

    /** Max level for any skill, assuming no multipliers. Determined by max numerical value in javascript for experience
     * and the skill level formula in Player.js. Note that all this means it that when experience hits MAX_INT, then
     * the player will have this level assuming no multipliers. Multipliers can cause skills to go above this.
     */
    MaxSkillLevel: 975,

    // Milliseconds per game cycle
    MilliPerCycle: 200,

    // How much reputation is needed to join a megacorporation's faction
    CorpFactionRepRequirement: 200e3,

    // Base RAM costs
    BaseCostFor1GBOfRamHome: 32000,
    BaseCostFor1GBOfRamServer: 55000, //1 GB of RAM

    // Cost to travel to another city
    TravelCost: 200e3,

    // Faction and Company favor-related things
    BaseFavorToDonate: 150,
    DonateMoneyToRepDivisor: 1e6,
    FactionReputationToFavorBase: 500,
    FactionReputationToFavorMult: 1.02,
    CompanyReputationToFavorBase: 500,
    CompanyReputationToFavorMult: 1.02,

    // NeuroFlux Governor Augmentation cost multiplier
    NeuroFluxGovernorLevelMult: 1.14,

    NumNetscriptPorts: 20,

    // Server-related constants
    HomeComputerMaxRam: 1073741824, // 2 ^ 30
    ServerBaseGrowthRate: 1.03, // Unadjusted Growth rate
    ServerMaxGrowthRate: 1.0035, // Maximum possible growth rate (max rate accounting for server security)
    ServerFortifyAmount: 0.002, // Amount by which server's security increases when its hacked/grown
    ServerWeakenAmount: 0.05, // Amount by which server's security decreases when weakened

    PurchasedServerLimit: 25,
    PurchasedServerMaxRam: 1048576, // 2^20

    // Augmentation Constants
    MultipleAugMultiplier: 1.9,

    // TOR Router
    TorRouterCost: 200e3,

    // Infiltration
    InfiltrationBribeBaseAmount: 100e3, //Amount per clearance level
    InfiltrationMoneyValue: 5e3, //Convert "secret" value to money
    InfiltrationRepValue: 1.4, //Convert "secret" value to faction reputation
    InfiltrationExpPow: 0.8,

    // Stock market
    WSEAccountCost: 200e6,
    TIXAPICost: 5e9,
    MarketData4SCost: 1e9,
    MarketDataTixApi4SCost: 25e9,
    StockMarketCommission: 100e3,

    // Hospital/Health
    HospitalCostPerHp: 100e3,

    // Intelligence-related constants
    IntelligenceCrimeWeight: 0.025, // Weight for how much int affects crime success rates
    IntelligenceInfiltrationWeight: 0.1, // Weight for how much int affects infiltration success rates
    IntelligenceCrimeBaseExpGain: 0.05,
    IntelligenceProgramBaseExpGain: 2.5, // Program required hack level divided by this to determine int exp gain
    IntelligenceTerminalHackBaseExpGain: 200, // Hacking exp divided by this to determine int exp gain
    IntelligenceSingFnBaseExpGain: 1.5,
    IntelligenceClassBaseExpGain: 0.01,
    IntelligenceHackingMissionBaseExpGain: 3, // Hacking Mission difficulty multiplied by this to get exp gain

    // Hacking Missions
    // TODO Move this into Hacking Mission implementation
    HackingMissionRepToDiffConversion: 10000, // Faction rep is divided by this to get mission difficulty
    HackingMissionRepToRewardConversion: 7, // Faction rep divided byt his to get mission rep reward
    HackingMissionSpamTimeIncrease: 25000, // How much time limit increase is gained when conquering a Spam Node (ms)
    HackingMissionTransferAttackIncrease: 1.05, // Multiplier by which the attack for all Core Nodes is increased when conquering a Transfer Node
    HackingMissionMiscDefenseIncrease: 1.05, // The amount by which every misc node's defense is multiplied when one is conquered
    HackingMissionDifficultyToHacking: 135, // Difficulty is multiplied by this to determine enemy's "hacking" level (to determine effects of scan/attack, etc)
    HackingMissionHowToPlay:
        "Hacking missions are a minigame that, if won, will reward you with faction reputation.<br><br>" +
        "In this game you control a set of Nodes and use them to try and defeat an enemy. Your Nodes " +
        "are colored blue, while the enemy's are red. There are also other nodes on the map colored gray " +
        "that initially belong to neither you nor the enemy. The goal of the game is " +
        "to capture all of the enemy's Database nodes within the time limit. " +
        "If you fail to do this, you will lose.<br><br>" +
        "Each Node has three stats: Attack, Defense, and HP. There are five different actions that " +
        "a Node can take:<br><br> " +
        "Attack - Targets an enemy Node and lowers its HP. The effectiveness is determined by the owner's Attack, the Player's " +
        "hacking level, and the enemy's defense.<br><br>" +
        "Scan - Targets an enemy Node and lowers its Defense. The effectiveness is determined by the owner's Attack, the Player's hacking level, and the " +
        "enemy's defense.<br><br>" +
        "Weaken - Targets an enemy Node and lowers its Attack. The effectiveness is determined by the owner's Attack, the Player's hacking level, and the enemy's " +
        "defense.<br><br>" +
        "Fortify - Raises the Node's Defense. The effectiveness is determined by your hacking level.<br><br>" +
        "Overflow - Raises the Node's Attack but lowers its Defense. The effectiveness is determined by your hacking level.<br><br>" +
        "Note that when determining the effectiveness of the above actions, the TOTAL Attack or Defense of the team is used, not just the " +
        "Attack/Defense of the individual Node that is performing the action.<br><br>" +
        "To capture a Node, you must lower its HP down to 0.<br><br>" +
        "There are six different types of Nodes:<br><br>" +
        "CPU Core - These are your main Nodes that are used to perform actions. Capable of performing every action<br><br>" +
        "Firewall - Nodes with high defense. These Nodes can 'Fortify'<br><br>" +
        "Database - A special type of Node. The player's objective is to conquer all of the enemy's Database Nodes within " +
        "the time limit. These Nodes cannot perform any actions<br><br>" +
        "Spam - Conquering one of these Nodes will slow the enemy's trace, giving the player additional time to complete " +
        "the mission. These Nodes cannot perform any actions<br><br>" +
        "Transfer - Conquering one of these nodes will increase the Attack of all of your CPU Cores by a small fixed percentage. " +
        "These Nodes are capable of performing every action except the 'Attack' action<br><br>" +
        "Shield - Nodes with high defense. These Nodes can 'Fortify'<br><br>" +
        "To assign an action to a Node, you must first select one of your Nodes. This can be done by simply clicking on it. Double-clicking " +
        "a node will select all of your Nodes of the same type (e.g. select all CPU Core Nodes or all Transfer Nodes). Note that only Nodes " +
        "that can perform actions (CPU Core, Transfer, Shield, Firewall) can be selected. Selected Nodes will be denoted with a white highlight. After selecting a Node or multiple Nodes, " +
        "select its action using the Action Buttons near the top of the screen. Every action also has a corresponding keyboard " +
        "shortcut.<br><br>" +
        "For certain actions such as attacking, scanning, and weakening, the Node performing the action must have a target. To target " +
        "another node, simply click-and-drag from the 'source' Node to a target. A Node can only have one target, and you can target " +
        "any Node that is adjacent to one of your Nodes (immediately above, below, or to the side. NOT diagonal). Furthermore, only CPU Cores and Transfer Nodes " +
        "can target, since they are the only ones that can perform the related actions. To remove a target, you can simply click on the line that represents " +
        "the connection between one of your Nodes and its target. Alternatively, you can select the 'source' Node and click the 'Drop Connection' button, " +
        "or press 'd'.<br><br>" +
        "Other Notes:<br><br>" +
        "-Whenever a miscellenaous Node (not owned by the player or enemy) is conquered, the defense of all remaining miscellaneous Nodes that " +
        "are not actively being targeted will increase by a fixed percentage.<br><br>" +
        "-Whenever a Node is conquered, its stats are significantly reduced<br><br>" +
        "-Miscellaneous Nodes slowly raise their defense over time<br><br>" +
        "-Nodes slowly regenerate health over time.",

    // Time-related constants
    MillisecondsPer20Hours: 72000000,
    GameCyclesPer20Hours: 72000000 / 200,

    MillisecondsPer10Hours: 36000000,
    GameCyclesPer10Hours: 36000000 / 200,

    MillisecondsPer8Hours: 28800000,
    GameCyclesPer8Hours: 28800000 / 200,

    MillisecondsPer4Hours: 14400000,
    GameCyclesPer4Hours: 14400000 / 200,

    MillisecondsPer2Hours: 7200000,
    GameCyclesPer2Hours: 7200000 / 200,

    MillisecondsPerHour: 3600000,
    GameCyclesPerHour: 3600000 / 200,

    MillisecondsPerHalfHour: 1800000,
    GameCyclesPerHalfHour: 1800000 / 200,

    MillisecondsPerQuarterHour: 900000,
    GameCyclesPerQuarterHour: 900000 / 200,

    MillisecondsPerFiveMinutes: 300000,
    GameCyclesPerFiveMinutes: 300000 / 200,

    // Player Work & Action
    FactionWorkHacking: "Faction Hacking Work",
    FactionWorkField: "Faction Field Work",
    FactionWorkSecurity: "Faction Security Work",

    WorkTypeCompany: "Working for Company",
    WorkTypeCompanyPartTime: "Working for Company part-time",
    WorkTypeFaction: "Working for Faction",
    WorkTypeCreateProgram: "Working on Create a Program",
    WorkTypeStudyClass: "Studying or Taking a class at university",
    WorkTypeCrime: "Committing a crime",

    ClassStudyComputerScience: "studying Computer Science",
    ClassDataStructures: "taking a Data Structures course",
    ClassNetworks: "taking a Networks course",
    ClassAlgorithms: "taking an Algorithms course",
    ClassManagement: "taking a Management course",
    ClassLeadership: "taking a Leadership course",
    ClassGymStrength: "training your strength at a gym",
    ClassGymDefense: "training your defense at a gym",
    ClassGymDexterity: "training your dexterity at a gym",
    ClassGymAgility: "training your agility at a gym",

    ClassDataStructuresBaseCost: 40,
    ClassNetworksBaseCost: 80,
    ClassAlgorithmsBaseCost: 320,
    ClassManagementBaseCost: 160,
    ClassLeadershipBaseCost: 320,
    ClassGymBaseCost: 120,

    ClassStudyComputerScienceBaseExp: 0.5,
    ClassDataStructuresBaseExp: 1,
    ClassNetworksBaseExp: 2,
    ClassAlgorithmsBaseExp: 4,
    ClassManagementBaseExp: 2,
    ClassLeadershipBaseExp: 4,

    CrimeShoplift: "shoplift",
    CrimeRobStore: "rob a store",
    CrimeMug: "mug someone",
    CrimeLarceny: "commit larceny",
    CrimeDrugs: "deal drugs",
    CrimeBondForgery: "forge corporate bonds",
    CrimeTraffickArms: "traffick illegal arms",
    CrimeHomicide: "commit homicide",
    CrimeGrandTheftAuto: "commit grand theft auto",
    CrimeKidnap: "kidnap someone for ransom",
    CrimeAssassination: "assassinate a high-profile target",
    CrimeHeist: "pull off the ultimate heist",

    // Coding Contract
    // TODO: Move this into Coding contract implementation?
    CodingContractBaseFactionRepGain: 2500,
    CodingContractBaseCompanyRepGain: 4000,
    CodingContractBaseMoneyGain: 75e6,

    // BitNode/Source-File related stuff
    TotalNumBitNodes: 24,

    LatestUpdate: `
      v0.52.9 - 2021-08-27 Less lag! (hydroflame & community)
      -------------------------------------------
      ** Active Scripts page **
      * Now less laggy, has pagination.
      ** File diagnostic ** 
      * Added a popup found under options that shows the files you own and how
        large they are. This help find bugs and leftover massive logs files.
      ** Corporation **
      * Added safeguard against a very specific bug that causes NaN money. I'm
        still not sure what the root cause is but it should prevent corp from
        breaking.
      ** Netscript ** 
      * tprintf is a new function that doesn't print the filename.
      ** Misc. **
      * Infiltration kills you if you try to automate it. (@threehams)
      * Fix beautify button not working
      * Added bladeburner_analysis_mult to getPlayer() (@brusby)
      * Fixed joining bladeburner via netscript functions. (@omuretsu)
      * All bladeburner actions are click-to-copy
      * nerf noodle bar
  `

    /*
     */
}

export const SourceFileFlags: number[] = Array(CONSTANTS.TotalNumBitNodes + 1) // Skip index 0

export const Augmentations: IMap<Augmentation> = {}

export function factionExists(name: string): boolean {
    return Factions.hasOwnProperty(name)
}

export function clearObject(obj: any): void {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            // tslint:disable-next-line:no-dynamic-delete
            delete obj[key]
        }
    }
}

export function favorToRep(f: number): number {
    const raw = 25000 * (Math.pow(1.02, f) - 1)
    return Math.round(raw * 10000) / 10000 // round to make things easier.
}

export function repToFavor(r: number): number {
    const raw = Math.log(r / 25000 + 1) / Math.log(1.02)
    return Math.round(raw * 10000) / 10000 // round to make things easier.
}

export class FactionInfo {
    /**
     * The multiplier to apply to augmentation base purchase price.
     */
    augmentationPriceMult: number

    /**
     * The multiplier to apply to augmentation reputation base requirement.
     */
    augmentationRepRequirementMult: number

    /**
     * The names of all other factions considered to be enemies to this faction.
     */
    enemies: string[]

    /**
     * The descriptive text to show on the faction's page.
     */
    infoText: string

    /**
     * A flag indicating if the faction supports field work to earn reputation.
     */
    offerFieldWork: boolean

    /**
     * A flag indicating if the faction supports hacking missions to earn reputation.
     */
    offerHackingMission: boolean

    /**
     * A flag indicating if the faction supports hacking work to earn reputation.
     */
    offerHackingWork: boolean

    /**
     * A flag indicating if the faction supports security work to earn reputation.
     */
    offerSecurityWork: boolean

    /**
     * Keep faction on install.
     */
    keep: boolean

    /**
     * Special faction
     */
    special: boolean

    constructor(
        infoText: string,
        enemies: string[],
        offerHackingMission: boolean,
        offerHackingWork: boolean,
        offerFieldWork: boolean,
        offerSecurityWork: boolean,
        special: boolean,
        keep: boolean
    ) {
        this.infoText = infoText
        this.enemies = enemies
        this.offerHackingMission = offerHackingMission
        this.offerHackingWork = offerHackingWork
        this.offerFieldWork = offerFieldWork
        this.offerSecurityWork = offerSecurityWork

        // These are always all 1 for now.
        this.augmentationPriceMult = 1
        this.augmentationRepRequirementMult = 1
        this.keep = keep
        this.special = special
    }

    offersWork(): boolean {
        return this.offerFieldWork || this.offerHackingMission || this.offerHackingWork || this.offerSecurityWork
    }
}

/**
 * A map of all factions and associated info to them.
 */
// tslint:disable-next-line:variable-name
export const FactionInfos: IMap<FactionInfo> = {
    // Endgame
    Illuminati: new FactionInfo("", [], true, true, true, false, false, false),

    Daedalus: new FactionInfo("", [], true, true, true, false, false, false),

    "The Covenant": new FactionInfo("", [], true, true, true, false, false, false),

    // Megacorporations, each forms its own faction
    ECorp: new FactionInfo("", [], true, true, true, true, false, true),

    MegaCorp: new FactionInfo("", [], true, true, true, true, false, true),

    "Bachman & Associates": new FactionInfo("", [], true, true, true, true, false, true),

    "Blade Industries": new FactionInfo("", [], true, true, true, true, false, true),

    NWO: new FactionInfo("", [], true, true, true, true, false, true),

    "Clarke Incorporated": new FactionInfo("", [], true, true, true, true, false, true),

    "OmniTek Incorporated": new FactionInfo("", [], true, true, true, true, false, true),

    "Four Sigma": new FactionInfo("", [], true, true, true, true, false, true),

    "KuaiGong International": new FactionInfo("", [], true, true, true, true, false, true),

    // Other Corporations
    "Fulcrum Secret Technologies": new FactionInfo("", [], true, true, false, true, false, true),

    // Hacker groups
    BitRunners: new FactionInfo("", [], true, true, false, false, false, false),

    "The Black Hand": new FactionInfo("", [], true, true, true, false, false, false),

    // prettier-ignore
    NiteSec: new FactionInfo("",
      [],
      true,
      true,
      false,
      false,
      false,
      false,
    ),

    // City factions, essentially governments
    Aevum: new FactionInfo("", ["Chongqing", "New Tokyo", "Ishima", "Volhaven"], true, true, true, true, false, false),
    Chongqing: new FactionInfo("", ["Sector-12", "Aevum", "Volhaven"], true, true, true, true, false, false),
    Ishima: new FactionInfo("", ["Sector-12", "Aevum", "Volhaven"], true, true, true, true, false, false),
    "New Tokyo": new FactionInfo("", ["Sector-12", "Aevum", "Volhaven"], true, true, true, true, false, false),
    "Sector-12": new FactionInfo(
        "",
        ["Chongqing", "New Tokyo", "Ishima", "Volhaven"],
        true,
        true,
        true,
        true,
        false,
        false
    ),
    Volhaven: new FactionInfo(
        "",
        ["Chongqing", "Sector-12", "New Tokyo", "Aevum", "Ishima"],
        true,
        true,
        true,
        true,
        false,
        false
    ),

    // Criminal Organizations/Gangs
    "Speakers for the Dead": new FactionInfo("", [], true, true, true, true, false, false),

    "The Dark Army": new FactionInfo("", [], true, true, true, false, false, false),

    "The Syndicate": new FactionInfo("", [], true, true, true, true, false, false),

    Silhouette: new FactionInfo("", [], true, true, true, false, false, false),

    Tetrads: new FactionInfo("", [], false, false, true, true, false, false),

    "Slum Snakes": new FactionInfo("", [], false, false, true, true, false, false),

    // Earlygame factions - factions the player will prestige with early on that don't belong in other categories.
    Netburners: new FactionInfo("", [], true, true, false, false, false, false),

    "Tian Di Hui": new FactionInfo("", [], true, true, false, true, false, false),

    CyberSec: new FactionInfo("", [], true, true, false, false, false, false),

    // Special Factions
    Bladeburners: new FactionInfo("", [], false, false, false, false, true, false),

    // prettier-ignore
    "Church of the Machine God": new FactionInfo("",
      [],
      false,
      false,
      false,
      false,
      true,
      true,
    )
}

class Faction {
    /**
     * Flag signalling whether the player has already received an invitation
     * to this faction
     */
    alreadyInvited = false

    /**
     * Holds names of all augmentations that this Faction offers
     */
    augmentations: string[] = []

    /**
     * Amount of favor the player has with this faction.
     */
    favor = 0

    /**
     * Flag signalling whether player has been banned from this faction
     */
    isBanned = false

    /**
     * Flag signalling whether player is a member of this faction
     */
    isMember = false

    /**
     * Name of faction
     */
    name = ""

    /**
     * Amount of reputation player has with this faction
     */
    playerReputation = 0

    constructor(name = "") {
        this.name = name
    }

    getInfo(): FactionInfo {
        const info = FactionInfos[this.name]
        if (info == null) {
            throw new Error(
                `Missing faction from FactionInfos: ${this.name} this probably means the faction got corrupted somehow`
            )
        }

        return info
    }

    gainFavor(): void {
        if (this.favor == null) {
            this.favor = 0
        }
        this.favor += this.getFavorGain()
    }

    //Returns an array with [How much favor would be gained, how much rep would be left over]
    getFavorGain(): number {
        if (this.favor == null) {
            this.favor = 0
        }
        const storedRep = Math.max(0, favorToRep(this.favor))
        const totalRep = storedRep + this.playerReputation
        const newFavor = repToFavor(totalRep)
        return newFavor - this.favor
    }

    /**
     * Serialize the current object to a JSON save state.
     */
    toJSON(): any {
        return Generic_toJSON("Faction", this)
    }

    /**
     * Initiatizes a Faction object from a JSON save state.
     */
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    static fromJSON(value: any): Faction {
        return Generic_fromJSON(Faction, value.data)
    }
}

export const Factions: IMap<Faction> = {}

function AddToFactions(faction: Faction): void {
    const name: string = faction.name
    Factions[name] = faction
}

export function initFactions(): void {
    for (const name of Object.keys(FactionInfos)) {
        resetFaction(new Faction(name))
    }
}

function resetFaction(newFactionObject: Faction): void {
    if (!(newFactionObject instanceof Faction)) {
        throw new Error("Invalid argument 'newFactionObject' passed into resetFaction()")
    }
    const factionName: string = newFactionObject.name
    if (factionExists(factionName)) {
        newFactionObject.favor = Factions[factionName].favor
        delete Factions[factionName]
    }
    AddToFactions(newFactionObject)
}

export interface IConstructorParams {
    info: string | JSX.Element
    stats?: JSX.Element | null
    isSpecial?: boolean
    moneyCost: number
    name: string
    prereqs?: string[]
    repCost: number

    hacking_mult?: number
    strength_mult?: number
    defense_mult?: number
    dexterity_mult?: number
    agility_mult?: number
    charisma_mult?: number
    hacking_exp_mult?: number
    strength_exp_mult?: number
    defense_exp_mult?: number
    dexterity_exp_mult?: number
    agility_exp_mult?: number
    charisma_exp_mult?: number
    hacking_chance_mult?: number
    hacking_speed_mult?: number
    hacking_money_mult?: number
    hacking_grow_mult?: number
    company_rep_mult?: number
    faction_rep_mult?: number
    crime_money_mult?: number
    crime_success_mult?: number
    work_money_mult?: number
    hacknet_node_money_mult?: number
    hacknet_node_purchase_cost_mult?: number
    hacknet_node_ram_cost_mult?: number
    hacknet_node_core_cost_mult?: number
    hacknet_node_level_cost_mult?: number
    bladeburner_max_stamina_mult?: number
    bladeburner_stamina_gain_mult?: number
    bladeburner_analysis_mult?: number
    bladeburner_success_chance_mult?: number

    startingMoney?: number
    programs?: string[]
}

export interface IMap<T> {
    [key: string]: T
}

interface IReviverValue {
    ctor: string
    data: any
}

// A generic "toJSON" function that creates the data expected
// by Reviver.
// `ctorName`  The name of the constructor to use to revive it
// `obj`       The object being serialized
// `keys`      (Optional) Array of the properties to serialize,
//             if not given then all of the objects "own" properties
//             that don't have function values will be serialized.
//             (Note: If you list a property in `keys`, it will be serialized
//             regardless of whether it's an "own" property.)
// Returns:    The structure (which will then be turned into a string
//             as part of the JSON.stringify algorithm)
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function Generic_toJSON(ctorName: string, obj: any, keys?: string[]): IReviverValue {
    if (!keys) {
        keys = Object.keys(obj) // Only "own" properties are included
    }

    const data: any = {}
    for (let index = 0; index < keys.length; ++index) {
        const key = keys[index]
        data[key] = obj[key]
    }
    return { ctor: ctorName, data: data }
}

// A generic "fromJSON" function for use with Reviver: Just calls the
// constructor function with no arguments, then applies all of the
// key/value pairs from the raw data to the instance. Only useful for
// constructors that can be reasonably called without arguments!
// `ctor`      The constructor to call
// `data`      The data to apply
// Returns:    The object
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function Generic_fromJSON<T>(ctor: new () => T, data: any): T {
    const obj: any = new ctor()
    for (const name in data) {
        obj[name] = data[name]
    }
    return obj
}

export class Augmentation {
    // How much money this costs to buy
    baseCost = 0

    // How much faction reputation is required to unlock this
    baseRepRequirement = 0

    // Description of what this Aug is and what it does
    info: string | JSX.Element

    // Description of the stats, often autogenerated, sometimes manually written.
    stats: JSX.Element | null

    // Any Augmentation not immediately available in BitNode-1 is special (e.g. Bladeburner augs)
    isSpecial = false

    // Augmentation level - for repeatable Augs like NeuroFlux Governor
    level = 0

    // Name of Augmentation
    name = ""

    // Whether the player owns this Augmentation
    owned = false

    // Array of names of all prerequisites
    prereqs: string[] = []

    // Multipliers given by this Augmentation.  Must match the property name in
    // The Player/Person classes
    mults: IMap<number> = {}

    // Initial cost. Doesn't change when you purchase multiple Augmentation
    startingCost = 0

    constructor(
        params: IConstructorParams = {
            info: "",
            moneyCost: 0,
            name: "",
            repCost: 0
        }
    ) {
        this.name = params.name
        this.info = params.info
        this.prereqs = params.prereqs ? params.prereqs : []

        this.baseRepRequirement = params.repCost * 1 //BitNodeMultipliers.AugmentationRepCost
        this.baseCost = params.moneyCost * 1 //BitNodeMultipliers.AugmentationMoneyCost
        this.startingCost = this.baseCost

        if (params.isSpecial) {
            this.isSpecial = true
        }

        this.level = 0

        // Set multipliers
        if (params.hacking_mult) {
            this.mults.hacking_mult = params.hacking_mult
        }
        if (params.strength_mult) {
            this.mults.strength_mult = params.strength_mult
        }
        if (params.defense_mult) {
            this.mults.defense_mult = params.defense_mult
        }
        if (params.dexterity_mult) {
            this.mults.dexterity_mult = params.dexterity_mult
        }
        if (params.agility_mult) {
            this.mults.agility_mult = params.agility_mult
        }
        if (params.charisma_mult) {
            this.mults.charisma_mult = params.charisma_mult
        }
        if (params.hacking_exp_mult) {
            this.mults.hacking_exp_mult = params.hacking_exp_mult
        }
        if (params.strength_exp_mult) {
            this.mults.strength_exp_mult = params.strength_exp_mult
        }
        if (params.defense_exp_mult) {
            this.mults.defense_exp_mult = params.defense_exp_mult
        }
        if (params.dexterity_exp_mult) {
            this.mults.dexterity_exp_mult = params.dexterity_exp_mult
        }
        if (params.agility_exp_mult) {
            this.mults.agility_exp_mult = params.agility_exp_mult
        }
        if (params.charisma_exp_mult) {
            this.mults.charisma_exp_mult = params.charisma_exp_mult
        }
        if (params.hacking_chance_mult) {
            this.mults.hacking_chance_mult = params.hacking_chance_mult
        }
        if (params.hacking_speed_mult) {
            this.mults.hacking_speed_mult = params.hacking_speed_mult
        }
        if (params.hacking_money_mult) {
            this.mults.hacking_money_mult = params.hacking_money_mult
        }
        if (params.hacking_grow_mult) {
            this.mults.hacking_grow_mult = params.hacking_grow_mult
        }
        if (params.company_rep_mult) {
            this.mults.company_rep_mult = params.company_rep_mult
        }
        if (params.faction_rep_mult) {
            this.mults.faction_rep_mult = params.faction_rep_mult
        }
        if (params.crime_money_mult) {
            this.mults.crime_money_mult = params.crime_money_mult
        }
        if (params.crime_success_mult) {
            this.mults.crime_success_mult = params.crime_success_mult
        }
        if (params.work_money_mult) {
            this.mults.work_money_mult = params.work_money_mult
        }
        if (params.hacknet_node_money_mult) {
            this.mults.hacknet_node_money_mult = params.hacknet_node_money_mult
        }
        if (params.hacknet_node_purchase_cost_mult) {
            this.mults.hacknet_node_purchase_cost_mult = params.hacknet_node_purchase_cost_mult
        }
        if (params.hacknet_node_ram_cost_mult) {
            this.mults.hacknet_node_ram_cost_mult = params.hacknet_node_ram_cost_mult
        }
        if (params.hacknet_node_core_cost_mult) {
            this.mults.hacknet_node_core_cost_mult = params.hacknet_node_core_cost_mult
        }
        if (params.hacknet_node_level_cost_mult) {
            this.mults.hacknet_node_level_cost_mult = params.hacknet_node_level_cost_mult
        }
        if (params.bladeburner_max_stamina_mult) {
            this.mults.bladeburner_max_stamina_mult = params.bladeburner_max_stamina_mult
        }
        if (params.bladeburner_stamina_gain_mult) {
            this.mults.bladeburner_stamina_gain_mult = params.bladeburner_stamina_gain_mult
        }
        if (params.bladeburner_analysis_mult) {
            this.mults.bladeburner_analysis_mult = params.bladeburner_analysis_mult
        }
        if (params.bladeburner_success_chance_mult) {
            this.mults.bladeburner_success_chance_mult = params.bladeburner_success_chance_mult
        }

        if (params.stats === undefined) {
            this.stats = null
            // this.stats = generateStatsDescription(this.mults, params.programs, params.startingMoney);
        } else this.stats = params.stats
    }

    // Adds this Augmentation to the specified Factions
    addToFactions(factionList: string[]): void {
        for (let i = 0; i < factionList.length; ++i) {
            const faction: Faction | null = Factions[factionList[i]]
            if (faction == null) {
                console.warn(
                    `In Augmentation.addToFactions(), could not find faction with this name: ${factionList[i]}`
                )
                continue
            }
            faction.augmentations.push(this.name)
        }
    }

    // Adds this Augmentation to all Factions
    addToAllFactions(): void {
        for (const fac of Object.keys(Factions)) {
            if (Factions.hasOwnProperty(fac)) {
                const facObj: Faction | null = Factions[fac]
                if (facObj == null) {
                    console.warn(`Invalid Faction object in addToAllFactions(). Key value: ${fac}`)
                    continue
                }
                if (facObj.getInfo().special) continue
                facObj.augmentations.push(this.name)
            }
        }
    }

    // Serialize the current object to a JSON save state.
    toJSON(): any {
        return Generic_toJSON("Augmentation", this)
    }

    // Initiatizes a Augmentation object from a JSON save state.
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    static fromJSON(value: any): Augmentation {
        return Generic_fromJSON(Augmentation, value.data)
    }
}

export const AugmentationNames: {
    Targeting1: string
    Targeting2: string
    Targeting3: string
    SyntheticHeart: string
    SynfibrilMuscle: string
    CombatRib1: string
    CombatRib2: string
    CombatRib3: string
    NanofiberWeave: string
    SubdermalArmor: string
    WiredReflexes: string
    GrapheneBoneLacings: string
    BionicSpine: string
    GrapheneBionicSpine: string
    BionicLegs: string
    GrapheneBionicLegs: string
    SpeechProcessor: string
    TITN41Injection: string
    EnhancedSocialInteractionImplant: string
    BitWire: string
    ArtificialBioNeuralNetwork: string
    ArtificialSynapticPotentiation: string
    EnhancedMyelinSheathing: string
    SynapticEnhancement: string
    NeuralRetentionEnhancement: string
    DataJack: string
    ENM: string
    ENMCore: string
    ENMCoreV2: string
    ENMCoreV3: string
    ENMAnalyzeEngine: string
    ENMDMA: string
    Neuralstimulator: string
    NeuralAccelerator: string
    CranialSignalProcessorsG1: string
    CranialSignalProcessorsG2: string
    CranialSignalProcessorsG3: string
    CranialSignalProcessorsG4: string
    CranialSignalProcessorsG5: string
    NeuronalDensification: string
    NeuroreceptorManager: string
    NuoptimalInjectorImplant: string
    SpeechEnhancement: string
    FocusWire: string
    PCDNI: string
    PCDNIOptimizer: string
    PCDNINeuralNetwork: string
    PCMatrix: string
    ADRPheromone1: string
    ADRPheromone2: string
    ShadowsSimulacrum: string
    HacknetNodeCPUUpload: string
    HacknetNodeCacheUpload: string
    HacknetNodeNICUpload: string
    HacknetNodeKernelDNI: string
    HacknetNodeCoreDNI: string
    NeuroFluxGovernor: string
    Neurotrainer1: string
    Neurotrainer2: string
    Neurotrainer3: string
    Hypersight: string
    LuminCloaking1: string
    LuminCloaking2: string
    HemoRecirculator: string
    SmartSonar: string
    PowerRecirculator: string
    QLink: string
    TheRedPill: string
    SPTN97: string
    HiveMind: string
    CordiARCReactor: string
    SmartJaw: string
    Neotra: string
    Xanipher: string
    nextSENS: string
    OmniTekInfoLoad: string
    PhotosyntheticCells: string
    Neurolink: string
    TheBlackHand: string
    UnstableCircadianModulator: string
    CRTX42AA: string
    Neuregen: string
    CashRoot: string
    NutriGen: string
    INFRARet: string
    DermaForce: string
    GrapheneBrachiBlades: string
    GrapheneBionicArms: string
    BrachiBlades: string
    BionicArms: string
    SNA: string
    HydroflameLeftArm: string
    EsperEyewear: string
    EMS4Recombination: string
    OrionShoulder: string
    HyperionV1: string
    HyperionV2: string
    GolemSerum: string
    VangelisVirus: string
    VangelisVirus3: string
    INTERLINKED: string
    BladeRunner: string
    BladeArmor: string
    BladeArmorPowerCells: string
    BladeArmorEnergyShielding: string
    BladeArmorUnibeam: string
    BladeArmorOmnibeam: string
    BladeArmorIPU: string
    BladesSimulacrum: string
    StaneksGift1: string
    StaneksGift2: string
    StaneksGift3: string
} = {
    Targeting1: "Augmented Targeting I",
    Targeting2: "Augmented Targeting II",
    Targeting3: "Augmented Targeting III",
    SyntheticHeart: "Synthetic Heart",
    SynfibrilMuscle: "Synfibril Muscle",
    CombatRib1: "Combat Rib I",
    CombatRib2: "Combat Rib II",
    CombatRib3: "Combat Rib III",
    NanofiberWeave: "Nanofiber Weave",
    SubdermalArmor: "NEMEAN Subdermal Weave",
    WiredReflexes: "Wired Reflexes",
    GrapheneBoneLacings: "Graphene Bone Lacings",
    BionicSpine: "Bionic Spine",
    GrapheneBionicSpine: "Graphene Bionic Spine Upgrade",
    BionicLegs: "Bionic Legs",
    GrapheneBionicLegs: "Graphene Bionic Legs Upgrade",
    SpeechProcessor: "Speech Processor Implant",
    TITN41Injection: "TITN-41 Gene-Modification Injection",
    EnhancedSocialInteractionImplant: "Enhanced Social Interaction Implant",
    BitWire: "BitWire",
    ArtificialBioNeuralNetwork: "Artificial Bio-neural Network Implant",
    ArtificialSynapticPotentiation: "Artificial Synaptic Potentiation",
    EnhancedMyelinSheathing: "Enhanced Myelin Sheathing",
    SynapticEnhancement: "Synaptic Enhancement Implant",
    NeuralRetentionEnhancement: "Neural-Retention Enhancement",
    DataJack: "DataJack",
    ENM: "Embedded Netburner Module",
    ENMCore: "Embedded Netburner Module Core Implant",
    ENMCoreV2: "Embedded Netburner Module Core V2 Upgrade",
    ENMCoreV3: "Embedded Netburner Module Core V3 Upgrade",
    ENMAnalyzeEngine: "Embedded Netburner Module Analyze Engine",
    ENMDMA: "Embedded Netburner Module Direct Memory Access Upgrade",
    Neuralstimulator: "Neuralstimulator",
    NeuralAccelerator: "Neural Accelerator",
    CranialSignalProcessorsG1: "Cranial Signal Processors - Gen I",
    CranialSignalProcessorsG2: "Cranial Signal Processors - Gen II",
    CranialSignalProcessorsG3: "Cranial Signal Processors - Gen III",
    CranialSignalProcessorsG4: "Cranial Signal Processors - Gen IV",
    CranialSignalProcessorsG5: "Cranial Signal Processors - Gen V",
    NeuronalDensification: "Neuronal Densification",
    NeuroreceptorManager: "Neuroreceptor Management Implant",
    NuoptimalInjectorImplant: "Nuoptimal Nootropic Injector Implant",
    SpeechEnhancement: "Speech Enhancement",
    FocusWire: "FocusWire",
    PCDNI: "PC Direct-Neural Interface",
    PCDNIOptimizer: "PC Direct-Neural Interface Optimization Submodule",
    PCDNINeuralNetwork: "PC Direct-Neural Interface NeuroNet Injector",
    PCMatrix: "PCMatrix",
    ADRPheromone1: "ADR-V1 Pheromone Gene",
    ADRPheromone2: "ADR-V2 Pheromone Gene",
    ShadowsSimulacrum: "The Shadow's Simulacrum",
    HacknetNodeCPUUpload: "Hacknet Node CPU Architecture Neural-Upload",
    HacknetNodeCacheUpload: "Hacknet Node Cache Architecture Neural-Upload",
    HacknetNodeNICUpload: "Hacknet Node NIC Architecture Neural-Upload",
    HacknetNodeKernelDNI: "Hacknet Node Kernel Direct-Neural Interface",
    HacknetNodeCoreDNI: "Hacknet Node Core Direct-Neural Interface",
    NeuroFluxGovernor: "NeuroFlux Governor",
    Neurotrainer1: "Neurotrainer I",
    Neurotrainer2: "Neurotrainer II",
    Neurotrainer3: "Neurotrainer III",
    Hypersight: "HyperSight Corneal Implant",
    LuminCloaking1: "LuminCloaking-V1 Skin Implant",
    LuminCloaking2: "LuminCloaking-V2 Skin Implant",
    HemoRecirculator: "HemoRecirculator",
    SmartSonar: "SmartSonar Implant",
    PowerRecirculator: "Power Recirculation Core",
    QLink: "QLink",
    TheRedPill: "The Red Pill",
    SPTN97: "SPTN-97 Gene Modification",
    HiveMind: "ECorp HVMind Implant",
    CordiARCReactor: "CordiARC Fusion Reactor",
    SmartJaw: "SmartJaw",
    Neotra: "Neotra",
    Xanipher: "Xanipher",
    nextSENS: "nextSENS Gene Modification",
    OmniTekInfoLoad: "OmniTek InfoLoad",
    PhotosyntheticCells: "Photosynthetic Cells",
    Neurolink: "BitRunners Neurolink",
    TheBlackHand: "The Black Hand",
    UnstableCircadianModulator: "Unstable Circadian Modulator",
    CRTX42AA: "CRTX42-AA Gene Modification",
    Neuregen: "Neuregen Gene Modification",
    CashRoot: "CashRoot Starter Kit",
    NutriGen: "NutriGen Implant",
    INFRARet: "INFRARET Enhancement",
    DermaForce: "DermaForce Particle Barrier",
    GrapheneBrachiBlades: "Graphene BrachiBlades Upgrade",
    GrapheneBionicArms: "Graphene Bionic Arms Upgrade",
    BrachiBlades: "BrachiBlades",
    BionicArms: "Bionic Arms",
    SNA: "Social Negotiation Assistant (S.N.A)",
    HydroflameLeftArm: "Hydroflame Left Arm",
    EsperEyewear: "EsperTech Bladeburner Eyewear",
    EMS4Recombination: "EMS-4 Recombination",
    OrionShoulder: "ORION-MKIV Shoulder",
    HyperionV1: "Hyperion Plasma Cannon V1",
    HyperionV2: "Hyperion Plasma Cannon V2",
    GolemSerum: "GOLEM Serum",
    VangelisVirus: "Vangelis Virus",
    VangelisVirus3: "Vangelis Virus 3.0",
    INTERLINKED: "I.N.T.E.R.L.I.N.K.E.D",
    BladeRunner: "Blade's Runners",
    BladeArmor: "BLADE-51b Tesla Armor",
    BladeArmorPowerCells: "BLADE-51b Tesla Armor: Power Cells Upgrade",
    BladeArmorEnergyShielding: "BLADE-51b Tesla Armor: Energy Shielding Upgrade",
    BladeArmorUnibeam: "BLADE-51b Tesla Armor: Unibeam Upgrade",
    BladeArmorOmnibeam: "BLADE-51b Tesla Armor: Omnibeam Upgrade",
    BladeArmorIPU: "BLADE-51b Tesla Armor: IPU Upgrade",
    BladesSimulacrum: "The Blade's Simulacrum",

    StaneksGift1: "Stanek's Gift - Genesis",
    StaneksGift2: "Stanek's Gift - Awakening",
    StaneksGift3: "Stanek's Gift - Serenity"

    //Wasteland Augs
    //PepBoy:                             "P.E.P-Boy", Plasma Energy Projection System
    //PepBoyForceField Generates plasma force fields
    //PepBoyBlasts Generate high density plasma concussive blasts
    //PepBoyDataStorage STore more data on pep boy,
}

function AddToAugmentations(aug: Augmentation): void {
    const name = aug.name
    Augmentations[name] = aug
}

function initAugmentations(): void {
    for (const name of Object.keys(Factions)) {
        if (Factions.hasOwnProperty(name)) {
            Factions[name].augmentations = []
        }
    }

    //Reset Augmentations
    clearObject(Augmentations)

    //Combat stat augmentations
    const HemoRecirculator = new Augmentation({
        name: AugmentationNames.HemoRecirculator,
        moneyCost: 4.5e7,
        repCost: 1e4,
        info: "A heart implant that greatly increases the body's ability to effectively use and pump " + "blood.",
        strength_mult: 1.08,
        defense_mult: 1.08,
        agility_mult: 1.08,
        dexterity_mult: 1.08
    })
    HemoRecirculator.addToFactions(["Tetrads", "The Dark Army", "The Syndicate"])
    if (augmentationExists(AugmentationNames.HemoRecirculator)) {
        delete Augmentations[AugmentationNames.HemoRecirculator]
    }
    AddToAugmentations(HemoRecirculator)

    const Targeting1 = new Augmentation({
        name: AugmentationNames.Targeting1,
        moneyCost: 1.5e7,
        repCost: 5e3,
        info:
            "A cranial implant that is embedded within the inner ear structures and optic nerves. It regulates " +
            "and enhances balance and hand-eye coordination.",
        dexterity_mult: 1.1
    })
    Targeting1.addToFactions([
        "Slum Snakes",
        "The Dark Army",
        "The Syndicate",
        "Sector-12",
        "Ishima",
        "OmniTek Incorporated",
        "KuaiGong International",
        "Blade Industries"
    ])
    if (augmentationExists(AugmentationNames.Targeting1)) {
        delete Augmentations[AugmentationNames.Targeting1]
    }
    AddToAugmentations(Targeting1)

    const Targeting2 = new Augmentation({
        name: AugmentationNames.Targeting2,
        moneyCost: 4.25e7,
        repCost: 8.75e3,
        info:
            "This upgraded version of the 'Augmented Targeting' implant is capable of augmenting " +
            "reality by digitally displaying weaknesses and vital signs of threats.",
        prereqs: [AugmentationNames.Targeting1],
        dexterity_mult: 1.2
    })
    Targeting2.addToFactions([
        "The Dark Army",
        "The Syndicate",
        "Sector-12",
        "OmniTek Incorporated",
        "KuaiGong International",
        "Blade Industries"
    ])
    if (augmentationExists(AugmentationNames.Targeting2)) {
        delete Augmentations[AugmentationNames.Targeting2]
    }
    AddToAugmentations(Targeting2)

    const Targeting3 = new Augmentation({
        name: AugmentationNames.Targeting3,
        moneyCost: 1.15e8,
        repCost: 2.75e4,
        info: "The latest version of the 'Augmented Targeting' implant adds the ability to lock-on and track threats.",
        prereqs: [AugmentationNames.Targeting2],
        dexterity_mult: 1.3
    })
    Targeting3.addToFactions([
        "The Dark Army",
        "The Syndicate",
        "OmniTek Incorporated",
        "KuaiGong International",
        "Blade Industries",
        "The Covenant"
    ])
    if (augmentationExists(AugmentationNames.Targeting3)) {
        delete Augmentations[AugmentationNames.Targeting3]
    }
    AddToAugmentations(Targeting3)

    const SyntheticHeart = new Augmentation({
        name: AugmentationNames.SyntheticHeart,
        moneyCost: 2.875e9,
        repCost: 7.5e5,
        info:
            "This advanced artificial heart, created from plasteel and graphene, is capable of pumping blood " +
            "more efficiently than an organic heart.",
        agility_mult: 1.5,
        strength_mult: 1.5
    })
    SyntheticHeart.addToFactions([
        "KuaiGong International",
        "Fulcrum Secret Technologies",
        "Speakers for the Dead",
        "NWO",
        "The Covenant",
        "Daedalus",
        "Illuminati"
    ])
    if (augmentationExists(AugmentationNames.SyntheticHeart)) {
        delete Augmentations[AugmentationNames.SyntheticHeart]
    }
    AddToAugmentations(SyntheticHeart)

    const SynfibrilMuscle = new Augmentation({
        name: AugmentationNames.SynfibrilMuscle,
        repCost: 4.375e5,
        moneyCost: 1.125e9,
        info:
            "The myofibrils in human muscles are injected with special chemicals that react with the proteins inside " +
            "the myofibrils, altering their underlying structure. The end result is muscles that are stronger and more elastic. " +
            "Scientists have named these artificially enhanced units 'synfibrils'.",
        strength_mult: 1.3,
        defense_mult: 1.3
    })
    SynfibrilMuscle.addToFactions([
        "KuaiGong International",
        "Fulcrum Secret Technologies",
        "Speakers for the Dead",
        "NWO",
        "The Covenant",
        "Daedalus",
        "Illuminati",
        "Blade Industries"
    ])
    if (augmentationExists(AugmentationNames.SynfibrilMuscle)) {
        delete Augmentations[AugmentationNames.SynfibrilMuscle]
    }
    AddToAugmentations(SynfibrilMuscle)

    const CombatRib1 = new Augmentation({
        name: AugmentationNames.CombatRib1,
        repCost: 7.5e3,
        moneyCost: 2.375e7,
        info:
            "The rib cage is augmented to continuously release boosters into the bloodstream " +
            "which increase the oxygen-carrying capacity of blood.",
        strength_mult: 1.1,
        defense_mult: 1.1
    })
    CombatRib1.addToFactions([
        "Slum Snakes",
        "The Dark Army",
        "The Syndicate",
        "Volhaven",
        "Ishima",
        "OmniTek Incorporated",
        "KuaiGong International",
        "Blade Industries"
    ])
    if (augmentationExists(AugmentationNames.CombatRib1)) {
        delete Augmentations[AugmentationNames.CombatRib1]
    }
    AddToAugmentations(CombatRib1)

    const CombatRib2 = new Augmentation({
        name: AugmentationNames.CombatRib2,
        repCost: 1.875e4,
        moneyCost: 6.5e7,
        info:
            "An upgraded version of the 'Combat Rib' augmentation that adds potent stimulants which " +
            "improve focus and endurance while decreasing reaction time and fatigue.",
        prereqs: [AugmentationNames.CombatRib1],
        strength_mult: 1.14,
        defense_mult: 1.14
    })
    CombatRib2.addToFactions([
        "The Dark Army",
        "The Syndicate",
        "Volhaven",
        "OmniTek Incorporated",
        "KuaiGong International",
        "Blade Industries"
    ])
    if (augmentationExists(AugmentationNames.CombatRib2)) {
        delete Augmentations[AugmentationNames.CombatRib2]
    }
    AddToAugmentations(CombatRib2)

    const CombatRib3 = new Augmentation({
        name: AugmentationNames.CombatRib3,
        repCost: 3.5e4,
        moneyCost: 1.2e8,
        info:
            "The latest version of the 'Combat Rib' augmentation releases advanced anabolic steroids that " +
            "improve muscle mass and physical performance while being safe and free of side effects.",
        prereqs: [AugmentationNames.CombatRib2],
        strength_mult: 1.18,
        defense_mult: 1.18
    })
    CombatRib3.addToFactions([
        "The Dark Army",
        "The Syndicate",
        "OmniTek Incorporated",
        "KuaiGong International",
        "Blade Industries",
        "The Covenant"
    ])
    if (augmentationExists(AugmentationNames.CombatRib3)) {
        delete Augmentations[AugmentationNames.CombatRib3]
    }
    AddToAugmentations(CombatRib3)

    const NanofiberWeave = new Augmentation({
        name: AugmentationNames.NanofiberWeave,
        repCost: 3.75e4,
        moneyCost: 1.25e8,
        info:
            "Synthetic nanofibers are woven into the skin's extracellular matrix using electrospinning, " +
            "which improves its regenerative and extracellular homeostasis abilities.",
        strength_mult: 1.2,
        defense_mult: 1.2
    })
    NanofiberWeave.addToFactions([
        "Tian Di Hui",
        "The Syndicate",
        "The Dark Army",
        "Speakers for the Dead",
        "Blade Industries",
        "Fulcrum Secret Technologies",
        "OmniTek Incorporated"
    ])
    if (augmentationExists(AugmentationNames.NanofiberWeave)) {
        delete Augmentations[AugmentationNames.NanofiberWeave]
    }
    AddToAugmentations(NanofiberWeave)

    const SubdermalArmor = new Augmentation({
        name: AugmentationNames.SubdermalArmor,
        repCost: 8.75e5,
        moneyCost: 3.25e9,
        info:
            "The NEMEAN Subdermal Weave is a thin, light-weight, graphene plating that houses a dilatant fluid. " +
            "The material is implanted underneath the skin, and is the most advanced form of defensive enhancement " +
            "that has ever been created. The dilatant fluid, despite being thin and light, is extremely effective " +
            "at stopping piercing blows and reducing blunt trauma. The properties of graphene allow the plating to " +
            "mitigate damage from any fire or electrical traumas.",
        defense_mult: 2.2
    })
    SubdermalArmor.addToFactions([
        "The Syndicate",
        "Fulcrum Secret Technologies",
        "Illuminati",
        "Daedalus",
        "The Covenant"
    ])
    if (augmentationExists(AugmentationNames.SubdermalArmor)) {
        delete Augmentations[AugmentationNames.SubdermalArmor]
    }
    AddToAugmentations(SubdermalArmor)

    const WiredReflexes = new Augmentation({
        name: AugmentationNames.WiredReflexes,
        repCost: 1.25e3,
        moneyCost: 2.5e6,
        info:
            "Synthetic nerve-enhancements are injected into all major parts of the somatic nervous system, " +
            "supercharging the spread of neural signals and increasing reflex speed.",
        agility_mult: 1.05,
        dexterity_mult: 1.05
    })
    WiredReflexes.addToFactions([
        "Tian Di Hui",
        "Slum Snakes",
        "Sector-12",
        "Volhaven",
        "Aevum",
        "Ishima",
        "The Syndicate",
        "The Dark Army",
        "Speakers for the Dead"
    ])
    if (augmentationExists(AugmentationNames.WiredReflexes)) {
        delete Augmentations[AugmentationNames.WiredReflexes]
    }
    AddToAugmentations(WiredReflexes)

    const GrapheneBoneLacings = new Augmentation({
        name: AugmentationNames.GrapheneBoneLacings,
        repCost: 1.125e6,
        moneyCost: 4.25e9,
        info:
            "Graphene is grafted and fused into the skeletal structure, " +
            "enhancing bone density and tensile strength.",
        strength_mult: 1.7,
        defense_mult: 1.7
    })
    GrapheneBoneLacings.addToFactions(["Fulcrum Secret Technologies", "The Covenant"])
    if (augmentationExists(AugmentationNames.GrapheneBoneLacings)) {
        delete Augmentations[AugmentationNames.GrapheneBoneLacings]
    }
    AddToAugmentations(GrapheneBoneLacings)

    const BionicSpine = new Augmentation({
        name: AugmentationNames.BionicSpine,
        repCost: 4.5e4,
        moneyCost: 1.25e8,
        info:
            "The spine is reconstructed using plasteel and carbon fibers. " +
            "It is now capable of stimulating and regulating neural signals " +
            "passing through the spinal cord, improving senses and reaction speed. " +
            "The 'Bionic Spine' also interfaces with all other 'Bionic' implants.",
        strength_mult: 1.15,
        defense_mult: 1.15,
        agility_mult: 1.15,
        dexterity_mult: 1.15
    })
    BionicSpine.addToFactions([
        "Speakers for the Dead",
        "The Syndicate",
        "KuaiGong International",
        "OmniTek Incorporated",
        "Blade Industries"
    ])
    if (augmentationExists(AugmentationNames.BionicSpine)) {
        delete Augmentations[AugmentationNames.BionicSpine]
    }
    AddToAugmentations(BionicSpine)

    const GrapheneBionicSpine = new Augmentation({
        name: AugmentationNames.GrapheneBionicSpine,
        repCost: 1.625e6,
        moneyCost: 6e9,
        info:
            "An upgrade to the 'Bionic Spine' augmentation. The spine is fused with graphene " +
            "which enhances durability and supercharges all body functions.",
        prereqs: [AugmentationNames.BionicSpine],
        strength_mult: 1.6,
        defense_mult: 1.6,
        agility_mult: 1.6,
        dexterity_mult: 1.6
    })
    GrapheneBionicSpine.addToFactions(["Fulcrum Secret Technologies", "ECorp"])
    if (augmentationExists(AugmentationNames.GrapheneBionicSpine)) {
        delete Augmentations[AugmentationNames.GrapheneBionicSpine]
    }
    AddToAugmentations(GrapheneBionicSpine)

    const BionicLegs = new Augmentation({
        name: AugmentationNames.BionicLegs,
        repCost: 1.5e5,
        moneyCost: 3.75e8,
        info: "Cybernetic legs, created from plasteel and carbon fibers, enhance running speed.",
        agility_mult: 1.6
    })
    BionicLegs.addToFactions([
        "Speakers for the Dead",
        "The Syndicate",
        "KuaiGong International",
        "OmniTek Incorporated",
        "Blade Industries"
    ])
    if (augmentationExists(AugmentationNames.BionicLegs)) {
        delete Augmentations[AugmentationNames.BionicLegs]
    }
    AddToAugmentations(BionicLegs)

    const GrapheneBionicLegs = new Augmentation({
        name: AugmentationNames.GrapheneBionicLegs,
        repCost: 7.5e5,
        moneyCost: 4.5e9,
        info:
            "An upgrade to the 'Bionic Legs' augmentation. The legs are fused " +
            "with graphene, greatly enhancing jumping ability.",
        prereqs: [AugmentationNames.BionicLegs],
        agility_mult: 2.5
    })
    GrapheneBionicLegs.addToFactions(["MegaCorp", "ECorp", "Fulcrum Secret Technologies"])
    if (augmentationExists(AugmentationNames.GrapheneBionicLegs)) {
        delete Augmentations[AugmentationNames.GrapheneBionicLegs]
    }
    AddToAugmentations(GrapheneBionicLegs)

    // Work stat augmentations
    const SpeechProcessor = new Augmentation({
        name: AugmentationNames.SpeechProcessor,
        repCost: 7.5e3,
        moneyCost: 5e7,
        info:
            "A cochlear implant with an embedded computer that analyzes incoming speech. " +
            "The embedded computer processes characteristics of incoming speech, such as tone " +
            "and inflection, to pick up on subtle cues and aid in social interactions.",
        charisma_mult: 1.2
    })
    SpeechProcessor.addToFactions([
        "Tian Di Hui",
        "Chongqing",
        "Sector-12",
        "New Tokyo",
        "Aevum",
        "Ishima",
        "Volhaven",
        "Silhouette"
    ])
    if (augmentationExists(AugmentationNames.SpeechProcessor)) {
        delete Augmentations[AugmentationNames.SpeechProcessor]
    }
    AddToAugmentations(SpeechProcessor)

    const TITN41Injection = new Augmentation({
        name: AugmentationNames.TITN41Injection,
        repCost: 2.5e4,
        moneyCost: 1.9e8,
        info:
            "TITN is a series of viruses that targets and alters the sequences of human DNA in genes that " +
            "control personality. The TITN-41 strain alters these genes so that the subject becomes more " +
            "outgoing and socialable.",
        charisma_mult: 1.15,
        charisma_exp_mult: 1.15
    })
    TITN41Injection.addToFactions(["Silhouette"])
    if (augmentationExists(AugmentationNames.TITN41Injection)) {
        delete Augmentations[AugmentationNames.TITN41Injection]
    }
    AddToAugmentations(TITN41Injection)

    const EnhancedSocialInteractionImplant = new Augmentation({
        name: AugmentationNames.EnhancedSocialInteractionImplant,
        repCost: 3.75e5,
        moneyCost: 1.375e9,
        info:
            "A cranial implant that greatly assists in the user's ability to analyze social situations " +
            "and interactions. The system uses a wide variety of factors such as facial expressions, body " +
            "language, and the voice tone, and inflection to determine the best course of action during social" +
            "situations. The implant also uses deep learning software to continuously learn new behavior" +
            "patterns and how to best respond.",
        charisma_mult: 1.6,
        charisma_exp_mult: 1.6
    })
    EnhancedSocialInteractionImplant.addToFactions([
        "Bachman & Associates",
        "NWO",
        "Clarke Incorporated",
        "OmniTek Incorporated",
        "Four Sigma"
    ])
    if (augmentationExists(AugmentationNames.EnhancedSocialInteractionImplant)) {
        delete Augmentations[AugmentationNames.EnhancedSocialInteractionImplant]
    }
    AddToAugmentations(EnhancedSocialInteractionImplant)

    // Hacking augmentations
    const BitWire = new Augmentation({
        name: AugmentationNames.BitWire,
        repCost: 3.75e3,
        moneyCost: 1e7,
        info:
            "A small brain implant embedded in the cerebrum. This regulates and improves the brain's computing " +
            "capabilities.",
        hacking_mult: 1.05
    })
    BitWire.addToFactions(["CyberSec", "NiteSec"])
    if (augmentationExists(AugmentationNames.BitWire)) {
        delete Augmentations[AugmentationNames.BitWire]
    }
    AddToAugmentations(BitWire)

    const ArtificialBioNeuralNetwork = new Augmentation({
        name: AugmentationNames.ArtificialBioNeuralNetwork,
        repCost: 2.75e5,
        moneyCost: 3e9,
        info:
            "A network consisting of millions of nanoprocessors is embedded into the brain. " +
            "The network is meant to mimic the way a biological brain solves a problem, with each " +
            "nanoprocessor acting similar to the way a neuron would in a neural network. However, these " +
            "nanoprocessors are programmed to perform computations much faster than organic neurons, " +
            "allowing the user to solve much more complex problems at a much faster rate.",
        hacking_speed_mult: 1.03,
        hacking_money_mult: 1.15,
        hacking_mult: 1.12
    })
    ArtificialBioNeuralNetwork.addToFactions(["BitRunners", "Fulcrum Secret Technologies"])
    if (augmentationExists(AugmentationNames.ArtificialBioNeuralNetwork)) {
        delete Augmentations[AugmentationNames.ArtificialBioNeuralNetwork]
    }
    AddToAugmentations(ArtificialBioNeuralNetwork)

    const ArtificialSynapticPotentiation = new Augmentation({
        name: AugmentationNames.ArtificialSynapticPotentiation,
        repCost: 6.25e3,
        moneyCost: 8e7,
        info:
            "The body is injected with a chemical that artificially induces synaptic potentiation, " +
            "otherwise known as the strengthening of synapses. This results in enhanced cognitive abilities.",
        hacking_speed_mult: 1.02,
        hacking_chance_mult: 1.05,
        hacking_exp_mult: 1.05
    })
    ArtificialSynapticPotentiation.addToFactions(["The Black Hand", "NiteSec"])
    if (augmentationExists(AugmentationNames.ArtificialSynapticPotentiation)) {
        delete Augmentations[AugmentationNames.ArtificialSynapticPotentiation]
    }
    AddToAugmentations(ArtificialSynapticPotentiation)

    const EnhancedMyelinSheathing = new Augmentation({
        name: AugmentationNames.EnhancedMyelinSheathing,
        repCost: 1e5,
        moneyCost: 1.375e9,
        info:
            "Electrical signals are used to induce a new, artificial form of myelinogenesis in the human body. " +
            "This process results in the proliferation of new, synthetic myelin sheaths in the nervous " +
            "system. These myelin sheaths can propogate neuro-signals much faster than their organic " +
            "counterparts, leading to greater processing speeds and better brain function.",
        hacking_speed_mult: 1.03,
        hacking_exp_mult: 1.1,
        hacking_mult: 1.08
    })
    EnhancedMyelinSheathing.addToFactions(["Fulcrum Secret Technologies", "BitRunners", "The Black Hand"])
    if (augmentationExists(AugmentationNames.EnhancedMyelinSheathing)) {
        delete Augmentations[AugmentationNames.EnhancedMyelinSheathing]
    }
    AddToAugmentations(EnhancedMyelinSheathing)

    const SynapticEnhancement = new Augmentation({
        name: AugmentationNames.SynapticEnhancement,
        repCost: 2e3,
        moneyCost: 7.5e6,
        info:
            "A small cranial implant that continuously uses weak electrical signals to stimulate the brain and " +
            "induce stronger synaptic activity. This improves the user's cognitive abilities.",
        hacking_speed_mult: 1.03
    })
    SynapticEnhancement.addToFactions(["CyberSec", "Aevum"])
    if (augmentationExists(AugmentationNames.SynapticEnhancement)) {
        delete Augmentations[AugmentationNames.SynapticEnhancement]
    }
    AddToAugmentations(SynapticEnhancement)

    const NeuralRetentionEnhancement = new Augmentation({
        name: AugmentationNames.NeuralRetentionEnhancement,
        repCost: 2e4,
        moneyCost: 2.5e8,
        info:
            "Chemical injections are used to permanently alter and strengthen the brain's neuronal " +
            "circuits, strengthening the ability to retain information.",
        hacking_exp_mult: 1.25
    })
    NeuralRetentionEnhancement.addToFactions(["NiteSec"])
    if (augmentationExists(AugmentationNames.NeuralRetentionEnhancement)) {
        delete Augmentations[AugmentationNames.NeuralRetentionEnhancement]
    }
    AddToAugmentations(NeuralRetentionEnhancement)

    const DataJack = new Augmentation({
        name: AugmentationNames.DataJack,
        repCost: 1.125e5,
        moneyCost: 4.5e8,
        info:
            "A brain implant that provides an interface for direct, wireless communication between a computer's main " +
            "memory and the mind. This implant allows the user to not only access a computer's memory, but also alter " +
            "and delete it.",
        hacking_money_mult: 1.25
    })
    DataJack.addToFactions(["BitRunners", "The Black Hand", "NiteSec", "Chongqing", "New Tokyo"])
    if (augmentationExists(AugmentationNames.DataJack)) {
        delete Augmentations[AugmentationNames.DataJack]
    }
    AddToAugmentations(DataJack)

    const ENM = new Augmentation({
        name: AugmentationNames.ENM,
        repCost: 1.5e4,
        moneyCost: 2.5e8,
        info:
            "A thin device embedded inside the arm containing a wireless module capable of connecting " +
            "to nearby networks. Once connected, the Netburner Module is capable of capturing and " +
            "processing all of the traffic on that network. By itself, the Embedded Netburner Module does " +
            "not do much, but a variety of very powerful upgrades can be installed that allow you to fully " +
            "control the traffic on a network.",
        hacking_mult: 1.08
    })
    ENM.addToFactions([
        "BitRunners",
        "The Black Hand",
        "NiteSec",
        "ECorp",
        "MegaCorp",
        "Fulcrum Secret Technologies",
        "NWO",
        "Blade Industries"
    ])
    if (augmentationExists(AugmentationNames.ENM)) {
        delete Augmentations[AugmentationNames.ENM]
    }
    AddToAugmentations(ENM)

    const ENMCore = new Augmentation({
        name: AugmentationNames.ENMCore,
        repCost: 175e3,
        moneyCost: 2.5e9,
        info:
            "The Core library is an implant that upgrades the firmware of the Embedded Netburner Module. " +
            "This upgrade allows the Embedded Netburner Module to generate its own data on a network.",
        prereqs: [AugmentationNames.ENM],
        hacking_speed_mult: 1.03,
        hacking_money_mult: 1.1,
        hacking_chance_mult: 1.03,
        hacking_exp_mult: 1.07,
        hacking_mult: 1.07
    })
    ENMCore.addToFactions([
        "BitRunners",
        "The Black Hand",
        "ECorp",
        "MegaCorp",
        "Fulcrum Secret Technologies",
        "NWO",
        "Blade Industries"
    ])
    if (augmentationExists(AugmentationNames.ENMCore)) {
        delete Augmentations[AugmentationNames.ENMCore]
    }
    AddToAugmentations(ENMCore)

    const ENMCoreV2 = new Augmentation({
        name: AugmentationNames.ENMCoreV2,
        repCost: 1e6,
        moneyCost: 4.5e9,
        info:
            "The Core V2 library is an implant that upgrades the firmware of the Embedded Netburner Module. " +
            "This upgraded firmware allows the Embedded Netburner Module to control information on " +
            "a network by re-routing traffic, spoofing IP addresses, and altering the data inside network " +
            "packets.",
        prereqs: [AugmentationNames.ENMCore],
        hacking_speed_mult: 1.05,
        hacking_money_mult: 1.3,
        hacking_chance_mult: 1.05,
        hacking_exp_mult: 1.15,
        hacking_mult: 1.08
    })
    ENMCoreV2.addToFactions([
        "BitRunners",
        "ECorp",
        "MegaCorp",
        "Fulcrum Secret Technologies",
        "NWO",
        "Blade Industries",
        "OmniTek Incorporated",
        "KuaiGong International"
    ])
    if (augmentationExists(AugmentationNames.ENMCoreV2)) {
        delete Augmentations[AugmentationNames.ENMCoreV2]
    }
    AddToAugmentations(ENMCoreV2)

    const ENMCoreV3 = new Augmentation({
        name: AugmentationNames.ENMCoreV3,
        repCost: 1.75e6,
        moneyCost: 7.5e9,
        info:
            "The Core V3 library is an implant that upgrades the firmware of the Embedded Netburner Module. " +
            "This upgraded firmware allows the Embedded Netburner Module to seamlessly inject code into " +
            "any device on a network.",
        prereqs: [AugmentationNames.ENMCoreV2],
        hacking_speed_mult: 1.05,
        hacking_money_mult: 1.4,
        hacking_chance_mult: 1.1,
        hacking_exp_mult: 1.25,
        hacking_mult: 1.1
    })
    ENMCoreV3.addToFactions([
        "ECorp",
        "MegaCorp",
        "Fulcrum Secret Technologies",
        "NWO",
        "Daedalus",
        "The Covenant",
        "Illuminati"
    ])
    if (augmentationExists(AugmentationNames.ENMCoreV3)) {
        delete Augmentations[AugmentationNames.ENMCoreV3]
    }
    AddToAugmentations(ENMCoreV3)

    const ENMAnalyzeEngine = new Augmentation({
        name: AugmentationNames.ENMAnalyzeEngine,
        repCost: 6.25e5,
        moneyCost: 6e9,
        info:
            "Installs the Analyze Engine for the Embedded Netburner Module, which is a CPU cluster " +
            "that vastly outperforms the Netburner Module's native single-core processor.",
        prereqs: [AugmentationNames.ENM],
        hacking_speed_mult: 1.1
    })
    ENMAnalyzeEngine.addToFactions([
        "ECorp",
        "MegaCorp",
        "Fulcrum Secret Technologies",
        "NWO",
        "Daedalus",
        "The Covenant",
        "Illuminati"
    ])
    if (augmentationExists(AugmentationNames.ENMAnalyzeEngine)) {
        delete Augmentations[AugmentationNames.ENMAnalyzeEngine]
    }
    AddToAugmentations(ENMAnalyzeEngine)

    const ENMDMA = new Augmentation({
        name: AugmentationNames.ENMDMA,
        repCost: 1e6,
        moneyCost: 7e9,
        info:
            "This implant installs a Direct Memory Access (DMA) controller into the " +
            "Embedded Netburner Module. This allows the Module to send and receive data " +
            "directly to and from the main memory of devices on a network.",
        prereqs: [AugmentationNames.ENM],
        hacking_money_mult: 1.4,
        hacking_chance_mult: 1.2
    })
    ENMDMA.addToFactions([
        "ECorp",
        "MegaCorp",
        "Fulcrum Secret Technologies",
        "NWO",
        "Daedalus",
        "The Covenant",
        "Illuminati"
    ])
    if (augmentationExists(AugmentationNames.ENMDMA)) {
        delete Augmentations[AugmentationNames.ENMDMA]
    }
    AddToAugmentations(ENMDMA)

    const Neuralstimulator = new Augmentation({
        name: AugmentationNames.Neuralstimulator,
        repCost: 5e4,
        moneyCost: 3e9,
        info:
            "A cranial implant that intelligently stimulates certain areas of the brain " +
            "in order to improve cognitive functions.",
        hacking_speed_mult: 1.02,
        hacking_chance_mult: 1.1,
        hacking_exp_mult: 1.12
    })
    Neuralstimulator.addToFactions([
        "The Black Hand",
        "Chongqing",
        "Sector-12",
        "New Tokyo",
        "Aevum",
        "Ishima",
        "Volhaven",
        "Bachman & Associates",
        "Clarke Incorporated",
        "Four Sigma"
    ])
    if (augmentationExists(AugmentationNames.Neuralstimulator)) {
        delete Augmentations[AugmentationNames.Neuralstimulator]
    }
    AddToAugmentations(Neuralstimulator)

    const NeuralAccelerator = new Augmentation({
        name: AugmentationNames.NeuralAccelerator,
        repCost: 2e5,
        moneyCost: 1.75e9,
        info:
            "A microprocessor that accelerates the processing " +
            "speed of biological neural networks. This is a cranial implant that is embedded inside the brain.",
        hacking_mult: 1.1,
        hacking_exp_mult: 1.15,
        hacking_money_mult: 1.2
    })
    NeuralAccelerator.addToFactions(["BitRunners"])
    if (augmentationExists(AugmentationNames.NeuralAccelerator)) {
        delete Augmentations[AugmentationNames.NeuralAccelerator]
    }
    AddToAugmentations(NeuralAccelerator)

    const CranialSignalProcessorsG1 = new Augmentation({
        name: AugmentationNames.CranialSignalProcessorsG1,
        repCost: 1e4,
        moneyCost: 7e7,
        info:
            "The first generation of Cranial Signal Processors. Cranial Signal Processors " +
            "are a set of specialized microprocessors that are attached to " +
            "neurons in the brain. These chips process neural signals to quickly and automatically perform specific computations " +
            "so that the brain doesn't have to.",
        hacking_speed_mult: 1.01,
        hacking_mult: 1.05
    })
    CranialSignalProcessorsG1.addToFactions(["CyberSec"])
    if (augmentationExists(AugmentationNames.CranialSignalProcessorsG1)) {
        delete Augmentations[AugmentationNames.CranialSignalProcessorsG1]
    }
    AddToAugmentations(CranialSignalProcessorsG1)

    const CranialSignalProcessorsG2 = new Augmentation({
        name: AugmentationNames.CranialSignalProcessorsG2,
        repCost: 1.875e4,
        moneyCost: 1.25e8,
        info:
            "The second generation of Cranial Signal Processors. Cranial Signal Processors " +
            "are a set of specialized microprocessors that are attached to " +
            "neurons in the brain. These chips process neural signals to quickly and automatically perform specific computations " +
            "so that the brain doesn't have to.",
        prereqs: [AugmentationNames.CranialSignalProcessorsG1],
        hacking_speed_mult: 1.02,
        hacking_chance_mult: 1.05,
        hacking_mult: 1.07
    })
    CranialSignalProcessorsG2.addToFactions(["CyberSec", "NiteSec"])
    if (augmentationExists(AugmentationNames.CranialSignalProcessorsG2)) {
        delete Augmentations[AugmentationNames.CranialSignalProcessorsG2]
    }
    AddToAugmentations(CranialSignalProcessorsG2)

    const CranialSignalProcessorsG3 = new Augmentation({
        name: AugmentationNames.CranialSignalProcessorsG3,
        repCost: 5e4,
        moneyCost: 5.5e8,
        info:
            "The third generation of Cranial Signal Processors. Cranial Signal Processors " +
            "are a set of specialized microprocessors that are attached to " +
            "neurons in the brain. These chips process neural signals to quickly and automatically perform specific computations " +
            "so that the brain doesn't have to.",
        prereqs: [AugmentationNames.CranialSignalProcessorsG2],
        hacking_speed_mult: 1.02,
        hacking_money_mult: 1.15,
        hacking_mult: 1.09
    })
    CranialSignalProcessorsG3.addToFactions(["NiteSec", "The Black Hand", "BitRunners"])
    if (augmentationExists(AugmentationNames.CranialSignalProcessorsG3)) {
        delete Augmentations[AugmentationNames.CranialSignalProcessorsG3]
    }
    AddToAugmentations(CranialSignalProcessorsG3)

    const CranialSignalProcessorsG4 = new Augmentation({
        name: AugmentationNames.CranialSignalProcessorsG4,
        repCost: 1.25e5,
        moneyCost: 1.1e9,
        info:
            "The fourth generation of Cranial Signal Processors. Cranial Signal Processors " +
            "are a set of specialized microprocessors that are attached to " +
            "neurons in the brain. These chips process neural signals to quickly and automatically perform specific computations " +
            "so that the brain doesn't have to.",
        prereqs: [AugmentationNames.CranialSignalProcessorsG3],
        hacking_speed_mult: 1.02,
        hacking_money_mult: 1.2,
        hacking_grow_mult: 1.25
    })
    CranialSignalProcessorsG4.addToFactions(["The Black Hand", "BitRunners"])
    if (augmentationExists(AugmentationNames.CranialSignalProcessorsG4)) {
        delete Augmentations[AugmentationNames.CranialSignalProcessorsG4]
    }
    AddToAugmentations(CranialSignalProcessorsG4)

    const CranialSignalProcessorsG5 = new Augmentation({
        name: AugmentationNames.CranialSignalProcessorsG5,
        repCost: 2.5e5,
        moneyCost: 2.25e9,
        info:
            "The fifth generation of Cranial Signal Processors. Cranial Signal Processors " +
            "are a set of specialized microprocessors that are attached to " +
            "neurons in the brain. These chips process neural signals to quickly and automatically perform specific computations " +
            "so that the brain doesn't have to.",
        prereqs: [AugmentationNames.CranialSignalProcessorsG4],
        hacking_mult: 1.3,
        hacking_money_mult: 1.25,
        hacking_grow_mult: 1.75
    })
    CranialSignalProcessorsG5.addToFactions(["BitRunners"])
    if (augmentationExists(AugmentationNames.CranialSignalProcessorsG5)) {
        delete Augmentations[AugmentationNames.CranialSignalProcessorsG5]
    }
    AddToAugmentations(CranialSignalProcessorsG5)

    const NeuronalDensification = new Augmentation({
        name: AugmentationNames.NeuronalDensification,
        repCost: 1.875e5,
        moneyCost: 1.375e9,
        info:
            "The brain is surgically re-engineered to have increased neuronal density " +
            "by decreasing the neuron gap junction. Then, the body is genetically modified " +
            "to enhance the production and capabilities of its neural stem cells.",
        hacking_mult: 1.15,
        hacking_exp_mult: 1.1,
        hacking_speed_mult: 1.03
    })
    NeuronalDensification.addToFactions(["Clarke Incorporated"])
    if (augmentationExists(AugmentationNames.NeuronalDensification)) {
        delete Augmentations[AugmentationNames.NeuronalDensification]
    }
    AddToAugmentations(NeuronalDensification)

    // Work Augmentations
    const NuoptimalInjectorImplant = new Augmentation({
        name: AugmentationNames.NuoptimalInjectorImplant,
        repCost: 5e3,
        moneyCost: 2e7,
        info:
            "This torso implant automatically injects nootropic supplements into " +
            "the bloodstream to improve memory, increase focus, and provide other " +
            "cognitive enhancements.",
        company_rep_mult: 1.2
    })
    NuoptimalInjectorImplant.addToFactions([
        "Tian Di Hui",
        "Volhaven",
        "New Tokyo",
        "Chongqing",
        "Clarke Incorporated",
        "Four Sigma",
        "Bachman & Associates"
    ])
    if (augmentationExists(AugmentationNames.NuoptimalInjectorImplant)) {
        delete Augmentations[AugmentationNames.NuoptimalInjectorImplant]
    }
    AddToAugmentations(NuoptimalInjectorImplant)

    const SpeechEnhancement = new Augmentation({
        name: AugmentationNames.SpeechEnhancement,
        repCost: 2.5e3,
        moneyCost: 1.25e7,
        info:
            "An advanced neural implant that improves your speaking abilities, making " +
            "you more convincing and likable in conversations and overall improving your " +
            "social interactions.",
        company_rep_mult: 1.1,
        charisma_mult: 1.1
    })
    SpeechEnhancement.addToFactions([
        "Tian Di Hui",
        "Speakers for the Dead",
        "Four Sigma",
        "KuaiGong International",
        "Clarke Incorporated",
        "Bachman & Associates"
    ])
    if (augmentationExists(AugmentationNames.SpeechEnhancement)) {
        delete Augmentations[AugmentationNames.SpeechEnhancement]
    }
    AddToAugmentations(SpeechEnhancement)

    const FocusWire = new Augmentation({
        name: AugmentationNames.FocusWire,
        repCost: 7.5e4,
        moneyCost: 9e8,
        info: "A cranial implant that stops procrastination by blocking specific neural pathways " + "in the brain.",
        hacking_exp_mult: 1.05,
        strength_exp_mult: 1.05,
        defense_exp_mult: 1.05,
        dexterity_exp_mult: 1.05,
        agility_exp_mult: 1.05,
        charisma_exp_mult: 1.05,
        company_rep_mult: 1.1,
        work_money_mult: 1.2
    })
    FocusWire.addToFactions(["Bachman & Associates", "Clarke Incorporated", "Four Sigma", "KuaiGong International"])
    if (augmentationExists(AugmentationNames.FocusWire)) {
        delete Augmentations[AugmentationNames.FocusWire]
    }
    AddToAugmentations(FocusWire)

    const PCDNI = new Augmentation({
        name: AugmentationNames.PCDNI,
        repCost: 3.75e5,
        moneyCost: 3.75e9,
        info:
            "Installs a Direct-Neural Interface jack into your arm that is compatible with most " +
            "computers. Connecting to a computer through this jack allows you to interface with " +
            "it using the brain's electrochemical signals.",
        company_rep_mult: 1.3,
        hacking_mult: 1.08
    })
    PCDNI.addToFactions(["Four Sigma", "OmniTek Incorporated", "ECorp", "Blade Industries"])
    if (augmentationExists(AugmentationNames.PCDNI)) {
        delete Augmentations[AugmentationNames.PCDNI]
    }
    AddToAugmentations(PCDNI)

    const PCDNIOptimizer = new Augmentation({
        name: AugmentationNames.PCDNIOptimizer,
        repCost: 5e5,
        moneyCost: 4.5e9,
        info:
            "This is a submodule upgrade to the PC Direct-Neural Interface augmentation. It " +
            "improves the performance of the interface and gives the user more control options " +
            "to a connected computer.",
        prereqs: [AugmentationNames.PCDNI],
        company_rep_mult: 1.75,
        hacking_mult: 1.1
    })
    PCDNIOptimizer.addToFactions(["Fulcrum Secret Technologies", "ECorp", "Blade Industries"])
    if (augmentationExists(AugmentationNames.PCDNIOptimizer)) {
        delete Augmentations[AugmentationNames.PCDNIOptimizer]
    }
    AddToAugmentations(PCDNIOptimizer)

    const PCDNINeuralNetwork = new Augmentation({
        name: AugmentationNames.PCDNINeuralNetwork,
        repCost: 1.5e6,
        moneyCost: 7.5e9,
        info:
            "This is an additional installation that upgrades the functionality of the " +
            "PC Direct-Neural Interface augmentation. When connected to a computer, " +
            "The Neural Network upgrade allows the user to use their own brain's " +
            "processing power to aid the computer in computational tasks.",
        prereqs: [AugmentationNames.PCDNI],
        company_rep_mult: 2,
        hacking_mult: 1.1,
        hacking_speed_mult: 1.05
    })
    PCDNINeuralNetwork.addToFactions(["Fulcrum Secret Technologies"])
    if (augmentationExists(AugmentationNames.PCDNINeuralNetwork)) {
        delete Augmentations[AugmentationNames.PCDNINeuralNetwork]
    }
    AddToAugmentations(PCDNINeuralNetwork)

    const ADRPheromone1 = new Augmentation({
        name: AugmentationNames.ADRPheromone1,
        repCost: 3.75e3,
        moneyCost: 1.75e7,
        info:
            "The body is genetically re-engineered so that it produces the ADR-V1 pheromone, " +
            "an artificial pheromone discovered by scientists. The ADR-V1 pheromone, when excreted, " +
            "triggers feelings of admiration and approval in other people.",
        company_rep_mult: 1.1,
        faction_rep_mult: 1.1
    })
    ADRPheromone1.addToFactions(["Tian Di Hui", "The Syndicate", "NWO", "MegaCorp", "Four Sigma"])
    if (augmentationExists(AugmentationNames.ADRPheromone1)) {
        delete Augmentations[AugmentationNames.ADRPheromone1]
    }
    AddToAugmentations(ADRPheromone1)

    const ADRPheromone2 = new Augmentation({
        name: AugmentationNames.ADRPheromone2,
        repCost: 6.25e4,
        moneyCost: 5.5e8,
        info:
            "The body is genetically re-engineered so that it produces the ADR-V2 pheromone, " +
            "which is similar to but more potent than ADR-V1. This pheromone, when excreted, " +
            "triggers feelings of admiration, approval, and respect in others.",
        company_rep_mult: 1.2,
        faction_rep_mult: 1.2
    })
    ADRPheromone2.addToFactions(["Silhouette", "Four Sigma", "Bachman & Associates", "Clarke Incorporated"])
    if (augmentationExists(AugmentationNames.ADRPheromone2)) {
        delete Augmentations[AugmentationNames.ADRPheromone2]
    }
    AddToAugmentations(ADRPheromone2)

    const ShadowsSimulacrum = new Augmentation({
        name: AugmentationNames.ShadowsSimulacrum,
        repCost: 3.75e4,
        moneyCost: 4e8,
        info:
            "A crude but functional matter phase-shifter module that is embedded " +
            "in the brainstem and cerebellum. This augmentation was developed by " +
            "criminal organizations and allows the user to project and control holographic " +
            "simulacrums within a large radius. These simulacrums are commonly used for " +
            "espionage and surveillance work.",
        company_rep_mult: 1.15,
        faction_rep_mult: 1.15
    })
    ShadowsSimulacrum.addToFactions(["The Syndicate", "The Dark Army", "Speakers for the Dead"])
    if (augmentationExists(AugmentationNames.ShadowsSimulacrum)) {
        delete Augmentations[AugmentationNames.ShadowsSimulacrum]
    }
    AddToAugmentations(ShadowsSimulacrum)

    // HacknetNode Augmentations
    const HacknetNodeCPUUpload = new Augmentation({
        name: AugmentationNames.HacknetNodeCPUUpload,
        repCost: 3.75e3,
        moneyCost: 1.1e7,
        info:
            "Uploads the architecture and design details of a Hacknet Node's CPU into " +
            "the brain. This allows the user to engineer custom hardware and software  " +
            "for the Hacknet Node that provides better performance.",
        hacknet_node_money_mult: 1.15,
        hacknet_node_purchase_cost_mult: 0.85
    })
    HacknetNodeCPUUpload.addToFactions(["Netburners"])
    if (augmentationExists(AugmentationNames.HacknetNodeCPUUpload)) {
        delete Augmentations[AugmentationNames.HacknetNodeCPUUpload]
    }
    AddToAugmentations(HacknetNodeCPUUpload)

    const HacknetNodeCacheUpload = new Augmentation({
        name: AugmentationNames.HacknetNodeCacheUpload,
        repCost: 2.5e3,
        moneyCost: 5.5e6,
        info:
            "Uploads the architecture and design details of a Hacknet Node's main-memory cache " +
            "into the brain. This allows the user to engineer custom cache hardware for the  " +
            "Hacknet Node that offers better performance.",
        hacknet_node_money_mult: 1.1,
        hacknet_node_level_cost_mult: 0.85
    })
    HacknetNodeCacheUpload.addToFactions(["Netburners"])
    if (augmentationExists(AugmentationNames.HacknetNodeCacheUpload)) {
        delete Augmentations[AugmentationNames.HacknetNodeCacheUpload]
    }
    AddToAugmentations(HacknetNodeCacheUpload)

    const HacknetNodeNICUpload = new Augmentation({
        name: AugmentationNames.HacknetNodeNICUpload,
        repCost: 1.875e3,
        moneyCost: 4.5e6,
        info:
            "Uploads the architecture and design details of a Hacknet Node's Network Interface Card (NIC) " +
            "into the brain. This allows the user to engineer a custom NIC for the Hacknet Node that " +
            "offers better performance.",
        hacknet_node_money_mult: 1.1,
        hacknet_node_purchase_cost_mult: 0.9
    })
    HacknetNodeNICUpload.addToFactions(["Netburners"])
    if (augmentationExists(AugmentationNames.HacknetNodeNICUpload)) {
        delete Augmentations[AugmentationNames.HacknetNodeNICUpload]
    }
    AddToAugmentations(HacknetNodeNICUpload)

    const HacknetNodeKernelDNI = new Augmentation({
        name: AugmentationNames.HacknetNodeKernelDNI,
        repCost: 7.5e3,
        moneyCost: 4e7,
        info:
            "Installs a Direct-Neural Interface jack into the arm that is capable of connecting to a " +
            "Hacknet Node. This lets the user access and manipulate the Node's kernel using " +
            "electrochemical signals.",
        hacknet_node_money_mult: 1.25
    })
    HacknetNodeKernelDNI.addToFactions(["Netburners"])
    if (augmentationExists(AugmentationNames.HacknetNodeKernelDNI)) {
        delete Augmentations[AugmentationNames.HacknetNodeKernelDNI]
    }
    AddToAugmentations(HacknetNodeKernelDNI)

    const HacknetNodeCoreDNI = new Augmentation({
        name: AugmentationNames.HacknetNodeCoreDNI,
        repCost: 1.25e4,
        moneyCost: 6e7,
        info:
            "Installs a Direct-Neural Interface jack into the arm that is capable of connecting " +
            "to a Hacknet Node. This lets the user access and manipulate the Node's processing logic using " +
            "electrochemical signals.",
        hacknet_node_money_mult: 1.45
    })
    HacknetNodeCoreDNI.addToFactions(["Netburners"])
    if (augmentationExists(AugmentationNames.HacknetNodeCoreDNI)) {
        delete Augmentations[AugmentationNames.HacknetNodeCoreDNI]
    }
    AddToAugmentations(HacknetNodeCoreDNI)

    //Misc/Hybrid augmentations

    const Neurotrainer1 = new Augmentation({
        name: AugmentationNames.Neurotrainer1,
        repCost: 1e3,
        moneyCost: 4e6,
        info:
            "A decentralized cranial implant that improves the brain's ability to learn. It is " +
            "installed by releasing millions of nanobots into the human brain, each of which " +
            "attaches to a different neural pathway to enhance the brain's ability to retain " +
            "and retrieve information.",
        hacking_exp_mult: 1.1,
        strength_exp_mult: 1.1,
        defense_exp_mult: 1.1,
        dexterity_exp_mult: 1.1,
        agility_exp_mult: 1.1,
        charisma_exp_mult: 1.1
    })
    Neurotrainer1.addToFactions(["CyberSec", "Aevum"])
    if (augmentationExists(AugmentationNames.Neurotrainer1)) {
        delete Augmentations[AugmentationNames.Neurotrainer1]
    }
    AddToAugmentations(Neurotrainer1)

    const Neurotrainer2 = new Augmentation({
        name: AugmentationNames.Neurotrainer2,
        repCost: 1e4,
        moneyCost: 4.5e7,
        info:
            "A decentralized cranial implant that improves the brain's ability to learn. This " +
            "is a more powerful version of the Neurotrainer I augmentation, but it does not " +
            "require Neurotrainer I to be installed as a prerequisite.",
        hacking_exp_mult: 1.15,
        strength_exp_mult: 1.15,
        defense_exp_mult: 1.15,
        dexterity_exp_mult: 1.15,
        agility_exp_mult: 1.15,
        charisma_exp_mult: 1.15
    })
    Neurotrainer2.addToFactions(["BitRunners", "NiteSec"])
    if (augmentationExists(AugmentationNames.Neurotrainer2)) {
        delete Augmentations[AugmentationNames.Neurotrainer2]
    }
    AddToAugmentations(Neurotrainer2)

    const Neurotrainer3 = new Augmentation({
        name: AugmentationNames.Neurotrainer3,
        repCost: 2.5e4,
        moneyCost: 1.3e8,
        info:
            "A decentralized cranial implant that improves the brain's ability to learn. This " +
            "is a more powerful version of the Neurotrainer I and Neurotrainer II augmentation, " +
            "but it does not require either of them to be installed as a prerequisite.",
        hacking_exp_mult: 1.2,
        strength_exp_mult: 1.2,
        defense_exp_mult: 1.2,
        dexterity_exp_mult: 1.2,
        agility_exp_mult: 1.2,
        charisma_exp_mult: 1.2
    })
    Neurotrainer3.addToFactions(["NWO", "Four Sigma"])
    if (augmentationExists(AugmentationNames.Neurotrainer3)) {
        delete Augmentations[AugmentationNames.Neurotrainer3]
    }
    AddToAugmentations(Neurotrainer3)

    const Hypersight = new Augmentation({
        name: AugmentationNames.Hypersight,
        repCost: 1.5e5,
        moneyCost: 2.75e9,
        info:
            "A bionic eye implant that grants sight capabilities far beyond those of a natural human. " +
            "Embedded circuitry within the implant provides the ability to detect heat and movement " +
            "through solid objects such as walls, thus providing 'x-ray vision'-like capabilities.",
        dexterity_mult: 1.4,
        hacking_speed_mult: 1.03,
        hacking_money_mult: 1.1
    })
    Hypersight.addToFactions(["Blade Industries", "KuaiGong International"])
    if (augmentationExists(AugmentationNames.Hypersight)) {
        delete Augmentations[AugmentationNames.Hypersight]
    }
    AddToAugmentations(Hypersight)

    const LuminCloaking1 = new Augmentation({
        name: AugmentationNames.LuminCloaking1,
        repCost: 1.5e3,
        moneyCost: 5e6,
        info:
            "A skin implant that reinforces the skin with highly-advanced synthetic cells. These " +
            "cells, when powered, have a negative refractive index. As a result, they bend light " +
            "around the skin, making the user much harder to see to the naked eye.",
        agility_mult: 1.05,
        crime_money_mult: 1.1
    })
    LuminCloaking1.addToFactions(["Slum Snakes", "Tetrads"])
    if (augmentationExists(AugmentationNames.LuminCloaking1)) {
        delete Augmentations[AugmentationNames.LuminCloaking1]
    }
    AddToAugmentations(LuminCloaking1)

    const LuminCloaking2 = new Augmentation({
        name: AugmentationNames.LuminCloaking2,
        repCost: 5e3,
        moneyCost: 3e7,
        info:
            "This is a more advanced version of the LuminCloaking-V1 augmentation. This skin implant " +
            "reinforces the skin with highly-advanced synthetic cells. These " +
            "cells, when powered, are capable of not only bending light but also of bending heat, " +
            "making the user more resilient as well as stealthy.",
        prereqs: [AugmentationNames.LuminCloaking1],
        agility_mult: 1.1,
        defense_mult: 1.1,
        crime_money_mult: 1.25
    })
    LuminCloaking2.addToFactions(["Slum Snakes", "Tetrads"])
    if (augmentationExists(AugmentationNames.LuminCloaking2)) {
        delete Augmentations[AugmentationNames.LuminCloaking2]
    }
    AddToAugmentations(LuminCloaking2)

    const SmartSonar = new Augmentation({
        name: AugmentationNames.SmartSonar,
        repCost: 2.25e4,
        moneyCost: 7.5e7,
        info: "A cochlear implant that helps the player detect and locate enemies " + "using sound propagation.",
        dexterity_mult: 1.1,
        dexterity_exp_mult: 1.15,
        crime_money_mult: 1.25
    })
    SmartSonar.addToFactions(["Slum Snakes"])
    if (augmentationExists(AugmentationNames.SmartSonar)) {
        delete Augmentations[AugmentationNames.SmartSonar]
    }
    AddToAugmentations(SmartSonar)

    const PowerRecirculator = new Augmentation({
        name: AugmentationNames.PowerRecirculator,
        repCost: 2.5e4,
        moneyCost: 1.8e8,
        info:
            "The body's nerves are attached with polypyrrole nanocircuits that " +
            "are capable of capturing wasted energy, in the form of heat, " +
            "and converting it back into usable power.",
        hacking_mult: 1.05,
        strength_mult: 1.05,
        defense_mult: 1.05,
        dexterity_mult: 1.05,
        agility_mult: 1.05,
        charisma_mult: 1.05,
        hacking_exp_mult: 1.1,
        strength_exp_mult: 1.1,
        defense_exp_mult: 1.1,
        dexterity_exp_mult: 1.1,
        agility_exp_mult: 1.1,
        charisma_exp_mult: 1.1
    })
    PowerRecirculator.addToFactions(["Tetrads", "The Dark Army", "The Syndicate", "NWO"])
    if (augmentationExists(AugmentationNames.PowerRecirculator)) {
        delete Augmentations[AugmentationNames.PowerRecirculator]
    }
    AddToAugmentations(PowerRecirculator)

    // Unique AUGS (Each Faction gets one unique augmentation)
    // Factions that already have unique augs up to this point:
    //   Slum Snakes, CyberSec, Netburners, Fulcrum Secret Technologies,
    //   Silhouette

    // Illuminati
    const QLink = new Augmentation({
        name: AugmentationNames.QLink,
        repCost: 1.875e6,
        moneyCost: 2.5e13,
        info:
            "A brain implant that wirelessly connects you to the Illuminati's " +
            "quantum supercomputer, allowing you to access and use its incredible " +
            "computing power.",
        hacking_mult: 1.75,
        hacking_speed_mult: 2,
        hacking_chance_mult: 2.5,
        hacking_money_mult: 4
    })
    QLink.addToFactions(["Illuminati"])
    if (augmentationExists(AugmentationNames.QLink)) {
        delete Augmentations[AugmentationNames.QLink]
    }
    AddToAugmentations(QLink)

    // Daedalus
    const RedPill = new Augmentation({
        name: AugmentationNames.TheRedPill,
        repCost: 2.5e6,
        moneyCost: 0,
        info: "It's time to leave the cave.",
        stats: null
    })
    RedPill.addToFactions(["Daedalus"])
    if (augmentationExists(AugmentationNames.TheRedPill)) {
        delete Augmentations[AugmentationNames.TheRedPill]
    }
    AddToAugmentations(RedPill)

    // Covenant
    const SPTN97 = new Augmentation({
        name: AugmentationNames.SPTN97,
        repCost: 1.25e6,
        moneyCost: 4.875e9,
        info:
            "The SPTN-97 gene is injected into the genome. The SPTN-97 gene is an " +
            "artificially-synthesized gene that was developed by DARPA to create " +
            "super-soldiers through genetic modification. The gene was outlawed in " +
            "2056.",
        strength_mult: 1.75,
        defense_mult: 1.75,
        dexterity_mult: 1.75,
        agility_mult: 1.75,
        hacking_mult: 1.15
    })
    SPTN97.addToFactions(["The Covenant"])
    if (augmentationExists(AugmentationNames.SPTN97)) {
        delete Augmentations[AugmentationNames.SPTN97]
    }
    AddToAugmentations(SPTN97)

    // ECorp
    const HiveMind = new Augmentation({
        name: AugmentationNames.HiveMind,
        repCost: 1.5e6,
        moneyCost: 5.5e9,
        info:
            "A brain implant developed by ECorp. They do not reveal what " +
            "exactly the implant does, but they promise that it will greatly " +
            "enhance your abilities.",
        hacking_grow_mult: 3,
        stats: null
    })
    HiveMind.addToFactions(["ECorp"])
    if (augmentationExists(AugmentationNames.HiveMind)) {
        delete Augmentations[AugmentationNames.HiveMind]
    }
    AddToAugmentations(HiveMind)

    // MegaCorp
    const CordiARCReactor = new Augmentation({
        name: AugmentationNames.CordiARCReactor,
        repCost: 1.125e6,
        moneyCost: 5e9,
        info:
            "The thoracic cavity is equipped with a small chamber designed " +
            "to hold and sustain hydrogen plasma. The plasma is used to generate " +
            "fusion power through nuclear fusion, providing limitless amounts of clean " +
            "energy for the body.",
        strength_mult: 1.35,
        defense_mult: 1.35,
        dexterity_mult: 1.35,
        agility_mult: 1.35,
        strength_exp_mult: 1.35,
        defense_exp_mult: 1.35,
        dexterity_exp_mult: 1.35,
        agility_exp_mult: 1.35
    })
    CordiARCReactor.addToFactions(["MegaCorp"])
    if (augmentationExists(AugmentationNames.CordiARCReactor)) {
        delete Augmentations[AugmentationNames.CordiARCReactor]
    }
    AddToAugmentations(CordiARCReactor)

    // BachmanAndAssociates
    const SmartJaw = new Augmentation({
        name: AugmentationNames.SmartJaw,
        repCost: 3.75e5,
        moneyCost: 2.75e9,
        info:
            "A bionic jaw that contains advanced hardware and software " +
            "capable of psychoanalyzing and profiling the personality of " +
            "others using optical imaging software.",
        charisma_mult: 1.5,
        charisma_exp_mult: 1.5,
        company_rep_mult: 1.25,
        faction_rep_mult: 1.25
    })
    SmartJaw.addToFactions(["Bachman & Associates"])
    if (augmentationExists(AugmentationNames.SmartJaw)) {
        delete Augmentations[AugmentationNames.SmartJaw]
    }
    AddToAugmentations(SmartJaw)

    // BladeIndustries
    const Neotra = new Augmentation({
        name: AugmentationNames.Neotra,
        repCost: 5.625e5,
        moneyCost: 2.875e9,
        info:
            "A highly-advanced techno-organic drug that is injected into the skeletal " +
            "and integumentary system. The drug permanently modifies the DNA of the " +
            "body's skin and bone cells, granting them the ability to repair " +
            "and restructure themselves.",
        strength_mult: 1.55,
        defense_mult: 1.55
    })
    Neotra.addToFactions(["Blade Industries"])
    if (augmentationExists(AugmentationNames.Neotra)) {
        delete Augmentations[AugmentationNames.Neotra]
    }
    AddToAugmentations(Neotra)

    // NWO
    const Xanipher = new Augmentation({
        name: AugmentationNames.Xanipher,
        repCost: 8.75e5,
        moneyCost: 4.25e9,
        info:
            "A concoction of advanced nanobots that is orally ingested into the " +
            "body. These nanobots induce physiological changes and significantly " +
            "improve the body's functioning in all aspects.",
        hacking_mult: 1.2,
        strength_mult: 1.2,
        defense_mult: 1.2,
        dexterity_mult: 1.2,
        agility_mult: 1.2,
        charisma_mult: 1.2,
        hacking_exp_mult: 1.15,
        strength_exp_mult: 1.15,
        defense_exp_mult: 1.15,
        dexterity_exp_mult: 1.15,
        agility_exp_mult: 1.15,
        charisma_exp_mult: 1.15
    })
    Xanipher.addToFactions(["NWO"])
    if (augmentationExists(AugmentationNames.Xanipher)) {
        delete Augmentations[AugmentationNames.Xanipher]
    }
    AddToAugmentations(Xanipher)

    const HydroflameLeftArm = new Augmentation({
        name: AugmentationNames.HydroflameLeftArm,
        repCost: 1.25e6,
        moneyCost: 2.5e12,
        info:
            "The left arm of a legendary BitRunner who ascended beyond this world. " +
            "It projects a light blue energy shield that protects the exposed inner parts. " +
            "Even though it contains no weapons, the advanced tungsten titanium " +
            "alloy increases the users strength to unbelievable levels. The augmentation " +
            "gets more powerful over time for seemingly no reason.",
        strength_mult: 2.7
    })
    HydroflameLeftArm.addToFactions(["NWO"])
    if (augmentationExists(AugmentationNames.HydroflameLeftArm)) {
        delete Augmentations[AugmentationNames.HydroflameLeftArm]
    }
    AddToAugmentations(HydroflameLeftArm)

    // ClarkeIncorporated
    const nextSENS = new Augmentation({
        name: AugmentationNames.nextSENS,
        repCost: 4.375e5,
        moneyCost: 1.925e9,
        info:
            "The body is genetically re-engineered to maintain a state " +
            "of negligible senescence, preventing the body from " +
            "deteriorating with age.",
        hacking_mult: 1.2,
        strength_mult: 1.2,
        defense_mult: 1.2,
        dexterity_mult: 1.2,
        agility_mult: 1.2,
        charisma_mult: 1.2
    })
    nextSENS.addToFactions(["Clarke Incorporated"])
    if (augmentationExists(AugmentationNames.nextSENS)) {
        delete Augmentations[AugmentationNames.nextSENS]
    }
    AddToAugmentations(nextSENS)

    // OmniTekIncorporated
    const OmniTekInfoLoad = new Augmentation({
        name: AugmentationNames.OmniTekInfoLoad,
        repCost: 6.25e5,
        moneyCost: 2.875e9,
        info:
            "OmniTek's data and information repository is uploaded " +
            "into your brain, enhancing your programming and " +
            "hacking abilities.",
        hacking_mult: 1.2,
        hacking_exp_mult: 1.25
    })
    OmniTekInfoLoad.addToFactions(["OmniTek Incorporated"])
    if (augmentationExists(AugmentationNames.OmniTekInfoLoad)) {
        delete Augmentations[AugmentationNames.OmniTekInfoLoad]
    }
    AddToAugmentations(OmniTekInfoLoad)

    // FourSigma
    // TODO Later when Intelligence is added in . Some aug that greatly increases int

    // KuaiGongInternational
    const PhotosyntheticCells = new Augmentation({
        name: AugmentationNames.PhotosyntheticCells,
        repCost: 5.625e5,
        moneyCost: 2.75e9,
        info:
            "Chloroplasts are added to epidermal stem cells and are applied " +
            "to the body using a skin graft. The result is photosynthetic " +
            "skin cells, allowing users to generate their own energy " +
            "and nutrition using solar power.",
        strength_mult: 1.4,
        defense_mult: 1.4,
        agility_mult: 1.4
    })
    PhotosyntheticCells.addToFactions(["KuaiGong International"])
    if (augmentationExists(AugmentationNames.PhotosyntheticCells)) {
        delete Augmentations[AugmentationNames.PhotosyntheticCells]
    }
    AddToAugmentations(PhotosyntheticCells)

    // BitRunners
    const Neurolink = new Augmentation({
        name: AugmentationNames.Neurolink,
        repCost: 8.75e5,
        moneyCost: 4.375e9,
        info:
            "A brain implant that provides a high-bandwidth, direct neural link between your " +
            "mind and the BitRunners' data servers, which reportedly contain " +
            "the largest database of hacking tools and information in the world.",
        hacking_mult: 1.15,
        hacking_exp_mult: 1.2,
        hacking_chance_mult: 1.1,
        hacking_speed_mult: 1.05
        // programs: [Programs.FTPCrackProgram.name, Programs.RelaySMTPProgram.name]
    })
    Neurolink.addToFactions(["BitRunners"])
    if (augmentationExists(AugmentationNames.Neurolink)) {
        delete Augmentations[AugmentationNames.Neurolink]
    }
    AddToAugmentations(Neurolink)

    // BlackHand
    const TheBlackHand = new Augmentation({
        name: AugmentationNames.TheBlackHand,
        repCost: 1e5,
        moneyCost: 5.5e8,
        info:
            "A highly advanced bionic hand. This prosthetic not only " +
            "enhances strength and dexterity but it is also embedded " +
            "with hardware and firmware that lets the user connect to, access, and hack " +
            "devices and machines by just touching them.",
        strength_mult: 1.15,
        dexterity_mult: 1.15,
        hacking_mult: 1.1,
        hacking_speed_mult: 1.02,
        hacking_money_mult: 1.1
    })
    TheBlackHand.addToFactions(["The Black Hand"])
    if (augmentationExists(AugmentationNames.TheBlackHand)) {
        delete Augmentations[AugmentationNames.TheBlackHand]
    }
    AddToAugmentations(TheBlackHand)

    // NiteSec
    const CRTX42AA = new Augmentation({
        name: AugmentationNames.CRTX42AA,
        repCost: 4.5e4,
        moneyCost: 2.25e8,
        info:
            "The CRTX42-AA gene is injected into the genome. " +
            "The CRTX42-AA is an artificially-synthesized gene that targets the visual and prefrontal " +
            "cortex and improves cognitive abilities.",
        hacking_mult: 1.08,
        hacking_exp_mult: 1.15
    })
    CRTX42AA.addToFactions(["NiteSec"])
    if (augmentationExists(AugmentationNames.CRTX42AA)) {
        delete Augmentations[AugmentationNames.CRTX42AA]
    }
    AddToAugmentations(CRTX42AA)

    // Chongqing
    const Neuregen = new Augmentation({
        name: AugmentationNames.Neuregen,
        repCost: 3.75e4,
        moneyCost: 3.75e8,
        info:
            "A drug that genetically modifies the neurons in the brain " +
            "resulting in neurons that never die, continuously " +
            "regenerate, and strengthen themselves.",
        hacking_exp_mult: 1.4
    })
    Neuregen.addToFactions(["Chongqing"])
    if (augmentationExists(AugmentationNames.Neuregen)) {
        delete Augmentations[AugmentationNames.Neuregen]
    }
    AddToAugmentations(Neuregen)

    // Sector12
    const CashRoot = new Augmentation({
        name: AugmentationNames.CashRoot,
        repCost: 1.25e4,
        moneyCost: 1.25e8,
        info: "A collection of digital assets saved on a small chip. The chip is implanted into your wrist. A small jack in the chip allows you to connect it to a computer and upload the assets.",
        startingMoney: 1e6
        // programs: [Programs.BruteSSHProgram.name]
    })
    CashRoot.addToFactions(["Sector-12"])
    if (augmentationExists(AugmentationNames.CashRoot)) {
        delete Augmentations[AugmentationNames.CashRoot]
    }
    AddToAugmentations(CashRoot)

    // NewTokyo
    const NutriGen = new Augmentation({
        name: AugmentationNames.NutriGen,
        repCost: 6.25e3,
        moneyCost: 2.5e6,
        info:
            "A thermo-powered artificial nutrition generator. Endogenously " +
            "synthesizes glucose, amino acids, and vitamins and redistributes them " +
            "across the body. The device is powered by the body's naturally wasted " +
            "energy in the form of heat.",
        strength_exp_mult: 1.2,
        defense_exp_mult: 1.2,
        dexterity_exp_mult: 1.2,
        agility_exp_mult: 1.2
    })
    NutriGen.addToFactions(["New Tokyo"])
    if (augmentationExists(AugmentationNames.NutriGen)) {
        delete Augmentations[AugmentationNames.NutriGen]
    }
    AddToAugmentations(NutriGen)

    // Aevum
    const PCMatrix = new Augmentation({
        name: AugmentationNames.PCMatrix,
        repCost: 100e3,
        moneyCost: 2e9,
        info:
            "A 'Probability Computation Matrix' is installed in the frontal cortex. This implant " +
            "uses advanced mathematical algorithims to rapidly identify and compute statistical " +
            "outcomes of nearly every situation.",
        charisma_mult: 1.0777,
        charisma_exp_mult: 1.0777,
        work_money_mult: 1.777,
        faction_rep_mult: 1.0777,
        company_rep_mult: 1.0777,
        crime_success_mult: 1.0777,
        crime_money_mult: 1.0777
        // programs: [Programs.DeepscanV1.name, Programs.AutoLink.name]
    })
    PCMatrix.addToFactions(["Aevum"])
    if (augmentationExists(AugmentationNames.PCMatrix)) {
        delete Augmentations[AugmentationNames.PCMatrix]
    }
    AddToAugmentations(PCMatrix)

    // Ishima
    const INFRARet = new Augmentation({
        name: AugmentationNames.INFRARet,
        repCost: 7.5e3,
        moneyCost: 3e7,
        info: "A tiny chip that sits behind the retinae. This implant lets the user visually detect infrared radiation.",
        crime_success_mult: 1.25,
        crime_money_mult: 1.1,
        dexterity_mult: 1.1
    })
    INFRARet.addToFactions(["Ishima"])
    if (augmentationExists(AugmentationNames.INFRARet)) {
        delete Augmentations[AugmentationNames.INFRARet]
    }
    AddToAugmentations(INFRARet)

    // Volhaven
    const DermaForce = new Augmentation({
        name: AugmentationNames.DermaForce,
        repCost: 1.5e4,
        moneyCost: 5e7,
        info:
            "Synthetic skin that is grafted onto the body. This skin consists of " +
            "millions of nanobots capable of projecting high-density muon beams, " +
            "creating an energy barrier around the user.",
        defense_mult: 1.4
    })
    DermaForce.addToFactions(["Volhaven"])
    if (augmentationExists(AugmentationNames.DermaForce)) {
        delete Augmentations[AugmentationNames.DermaForce]
    }
    AddToAugmentations(DermaForce)

    // SpeakersForTheDead
    const GrapheneBrachiBlades = new Augmentation({
        name: AugmentationNames.GrapheneBrachiBlades,
        repCost: 2.25e5,
        moneyCost: 2.5e9,
        info:
            "An upgrade to the BrachiBlades augmentation. It infuses " +
            "the retractable blades with an advanced graphene material " +
            "making them stronger and lighter.",
        prereqs: [AugmentationNames.BrachiBlades],
        strength_mult: 1.4,
        defense_mult: 1.4,
        crime_success_mult: 1.1,
        crime_money_mult: 1.3
    })
    GrapheneBrachiBlades.addToFactions(["Speakers for the Dead"])
    if (augmentationExists(AugmentationNames.GrapheneBrachiBlades)) {
        delete Augmentations[AugmentationNames.GrapheneBrachiBlades]
    }
    AddToAugmentations(GrapheneBrachiBlades)

    // DarkArmy
    const GrapheneBionicArms = new Augmentation({
        name: AugmentationNames.GrapheneBionicArms,
        repCost: 5e5,
        moneyCost: 3.75e9,
        info:
            "An upgrade to the Bionic Arms augmentation. It infuses the " +
            "prosthetic arms with an advanced graphene material " +
            "to make them stronger and lighter.",
        prereqs: [AugmentationNames.BionicArms],
        strength_mult: 1.85,
        dexterity_mult: 1.85
    })
    GrapheneBionicArms.addToFactions(["The Dark Army"])
    if (augmentationExists(AugmentationNames.GrapheneBionicArms)) {
        delete Augmentations[AugmentationNames.GrapheneBionicArms]
    }
    AddToAugmentations(GrapheneBionicArms)

    // TheSyndicate
    const BrachiBlades = new Augmentation({
        name: AugmentationNames.BrachiBlades,
        repCost: 1.25e4,
        moneyCost: 9e7,
        info: "A set of retractable plasteel blades that are implanted in the arm, underneath the skin.",
        strength_mult: 1.15,
        defense_mult: 1.15,
        crime_success_mult: 1.1,
        crime_money_mult: 1.15
    })
    BrachiBlades.addToFactions(["The Syndicate"])
    if (augmentationExists(AugmentationNames.BrachiBlades)) {
        delete Augmentations[AugmentationNames.BrachiBlades]
    }
    AddToAugmentations(BrachiBlades)

    // Tetrads
    const BionicArms = new Augmentation({
        name: AugmentationNames.BionicArms,
        repCost: 6.25e4,
        moneyCost: 2.75e8,
        info:
            "Cybernetic arms created from plasteel and carbon fibers that completely replace " +
            "the user's organic arms.",
        strength_mult: 1.3,
        dexterity_mult: 1.3
    })
    BionicArms.addToFactions(["Tetrads"])
    if (augmentationExists(AugmentationNames.BionicArms)) {
        delete Augmentations[AugmentationNames.BionicArms]
    }
    AddToAugmentations(BionicArms)

    // TianDiHui
    const SNA = new Augmentation({
        name: AugmentationNames.SNA,
        repCost: 6.25e3,
        moneyCost: 3e7,
        info:
            "A cranial implant that affects the user's personality, making them better " +
            "at negotiation in social situations.",
        work_money_mult: 1.1,
        company_rep_mult: 1.15,
        faction_rep_mult: 1.15
    })
    SNA.addToFactions(["Tian Di Hui"])
    if (augmentationExists(AugmentationNames.SNA)) {
        delete Augmentations[AugmentationNames.SNA]
    }
    AddToAugmentations(SNA)

    const NeuroreceptorManager = new Augmentation({
        name: AugmentationNames.NeuroreceptorManager,
        repCost: 0.75e5,
        moneyCost: 5.5e8,
        info:
            "A brain implant carefully assembled around the synapses, which " +
            "micromanages the activity and levels of various neuroreceptor " +
            "chemicals and modulates electrical activity to optimize concentration, " +
            "allowing the user to multitask much more effectively."
    })
    NeuroreceptorManager.addToFactions(["Tian Di Hui"])
    if (augmentationExists(AugmentationNames.NeuroreceptorManager)) {
        delete Augmentations[AugmentationNames.NeuroreceptorManager]
    }
    AddToAugmentations(NeuroreceptorManager)

    // Special Bladeburner Augmentations
    const BladeburnersFactionName = "Bladeburners"
    if (factionExists(BladeburnersFactionName)) {
        const EsperEyewear = new Augmentation({
            name: AugmentationNames.EsperEyewear,
            repCost: 1.25e3,
            moneyCost: 1.65e8,
            info:
                "Ballistic-grade protective and retractable eyewear that was designed specifically " +
                "for Bladeburner units. This " +
                "is implanted by installing a mechanical frame in the skull's orbit. " +
                "This frame interfaces with the brain and allows the user to " +
                "automatically extrude and extract the eyewear. The eyewear protects " +
                "against debris, shrapnel, lasers, blinding flashes, and gas. It is also " +
                "embedded with a data processing chip that can be programmed to display an " +
                "AR HUD to assist the user in field missions.",
            bladeburner_success_chance_mult: 1.03,
            dexterity_mult: 1.05,
            isSpecial: true
        })
        EsperEyewear.addToFactions([BladeburnersFactionName])
        resetAugmentation(EsperEyewear)

        const EMS4Recombination = new Augmentation({
            name: AugmentationNames.EMS4Recombination,
            repCost: 2.5e3,
            moneyCost: 2.75e8,
            info:
                "A DNA recombination of the EMS-4 Gene. This genetic engineering " +
                "technique was originally used on Bladeburners during the Synthoid uprising " +
                "to induce wakefulness and concentration, suppress fear, reduce empathy, " +
                "improve reflexes, and improve memory among other things.",
            bladeburner_success_chance_mult: 1.03,
            bladeburner_analysis_mult: 1.05,
            bladeburner_stamina_gain_mult: 1.02,
            isSpecial: true
        })
        EMS4Recombination.addToFactions([BladeburnersFactionName])
        resetAugmentation(EMS4Recombination)

        const OrionShoulder = new Augmentation({
            name: AugmentationNames.OrionShoulder,
            repCost: 6.25e3,
            moneyCost: 5.5e8,
            info:
                "A bionic shoulder augmentation for the right shoulder. Using cybernetics, " +
                "the ORION-MKIV shoulder enhances the strength and dexterity " +
                "of the user's right arm. It also provides protection due to its " +
                "crystallized graphene plating.",
            defense_mult: 1.05,
            strength_mult: 1.05,
            dexterity_mult: 1.05,
            bladeburner_success_chance_mult: 1.04,
            isSpecial: true
        })
        OrionShoulder.addToFactions([BladeburnersFactionName])
        resetAugmentation(OrionShoulder)

        const HyperionV1 = new Augmentation({
            name: AugmentationNames.HyperionV1,
            repCost: 1.25e4,
            moneyCost: 2.75e9,
            info:
                "A pair of mini plasma cannons embedded into the hands. The Hyperion is capable " +
                "of rapidly firing bolts of high-density plasma. The weapon is meant to " +
                "be used against augmented enemies as the ionized " +
                "nature of the plasma disrupts the electrical systems of Augmentations. However, " +
                "it can also be effective against non-augmented enemies due to its high temperature " +
                "and concussive force.",
            bladeburner_success_chance_mult: 1.06,
            isSpecial: true
        })
        HyperionV1.addToFactions([BladeburnersFactionName])
        resetAugmentation(HyperionV1)

        const HyperionV2 = new Augmentation({
            name: AugmentationNames.HyperionV2,
            repCost: 2.5e4,
            moneyCost: 5.5e9,
            info:
                "A pair of mini plasma cannons embedded into the hands. This augmentation " +
                "is more advanced and powerful than the original V1 model. This V2 model is " +
                "more power-efficient, more accurate, and can fire plasma bolts at a much " +
                "higher velocity than the V1 model.",
            prereqs: [AugmentationNames.HyperionV1],
            bladeburner_success_chance_mult: 1.08,
            isSpecial: true
        })
        HyperionV2.addToFactions([BladeburnersFactionName])
        resetAugmentation(HyperionV2)

        const GolemSerum = new Augmentation({
            name: AugmentationNames.GolemSerum,
            repCost: 3.125e4,
            moneyCost: 1.1e10,
            info:
                "A serum that permanently enhances many aspects of human capabilities, " +
                "including strength, speed, immune system enhancements, and mitochondrial efficiency. The " +
                "serum was originally developed by the Chinese military in an attempt to " +
                "create super soldiers.",
            strength_mult: 1.07,
            defense_mult: 1.07,
            dexterity_mult: 1.07,
            agility_mult: 1.07,
            bladeburner_stamina_gain_mult: 1.05,
            isSpecial: true
        })
        GolemSerum.addToFactions([BladeburnersFactionName])
        resetAugmentation(GolemSerum)

        const VangelisVirus = new Augmentation({
            name: AugmentationNames.VangelisVirus,
            repCost: 1.875e4,
            moneyCost: 2.75e9,
            info:
                "A synthetic symbiotic virus that is injected into human brain tissue. The Vangelis virus " +
                "heightens the senses and focus of its host, and also enhances its intuition.",
            dexterity_exp_mult: 1.1,
            bladeburner_analysis_mult: 1.1,
            bladeburner_success_chance_mult: 1.04,
            isSpecial: true
        })
        VangelisVirus.addToFactions([BladeburnersFactionName])
        resetAugmentation(VangelisVirus)

        const VangelisVirus3 = new Augmentation({
            name: AugmentationNames.VangelisVirus3,
            repCost: 3.75e4,
            moneyCost: 1.1e10,
            info:
                "An improved version of Vangelis, a synthetic symbiotic virus that is " +
                "injected into human brain tissue. On top of the benefits of the original " +
                "virus, this also grants an accelerated healing factor and enhanced " +
                "reflexes.",
            prereqs: [AugmentationNames.VangelisVirus],
            defense_exp_mult: 1.1,
            dexterity_exp_mult: 1.1,
            bladeburner_analysis_mult: 1.15,
            bladeburner_success_chance_mult: 1.05,
            isSpecial: true
        })
        VangelisVirus3.addToFactions([BladeburnersFactionName])
        resetAugmentation(VangelisVirus3)

        const INTERLINKED = new Augmentation({
            name: AugmentationNames.INTERLINKED,
            repCost: 2.5e4,
            moneyCost: 5.5e9,
            info:
                "The DNA is genetically modified to enhance the human's body " +
                "extracellular matrix (ECM). This improves the ECM's ability to " +
                "structurally support the body and grants heightened strength and " +
                "durability.",
            strength_exp_mult: 1.05,
            defense_exp_mult: 1.05,
            dexterity_exp_mult: 1.05,
            agility_exp_mult: 1.05,
            bladeburner_max_stamina_mult: 1.1,
            isSpecial: true
        })
        INTERLINKED.addToFactions([BladeburnersFactionName])
        resetAugmentation(INTERLINKED)

        const BladeRunner = new Augmentation({
            name: AugmentationNames.BladeRunner,
            repCost: 2e4,
            moneyCost: 8.25e9,
            info:
                "A cybernetic foot augmentation that was specifically created for Bladeburners " +
                "during the Synthoid Uprising. The organic musculature of the human foot " +
                "is enhanced with flexible carbon nanotube matrices that are controlled by " +
                "intelligent servo-motors.",
            agility_mult: 1.05,
            bladeburner_max_stamina_mult: 1.05,
            bladeburner_stamina_gain_mult: 1.05,
            isSpecial: true
        })
        BladeRunner.addToFactions([BladeburnersFactionName])
        resetAugmentation(BladeRunner)

        const BladeArmor = new Augmentation({
            name: AugmentationNames.BladeArmor,
            repCost: 1.25e4,
            moneyCost: 1.375e9,
            info:
                "A powered exoskeleton suit designed as armor for Bladeburner units. This " +
                "exoskeleton is incredibly adaptable and can protect the wearer from blunt, piercing, " +
                "concussive, thermal, chemical, and electric trauma. It also enhances the user's " +
                "physical abilities.",
            strength_mult: 1.04,
            defense_mult: 1.04,
            dexterity_mult: 1.04,
            agility_mult: 1.04,
            bladeburner_stamina_gain_mult: 1.02,
            bladeburner_success_chance_mult: 1.03,
            isSpecial: true
        })
        BladeArmor.addToFactions([BladeburnersFactionName])
        resetAugmentation(BladeArmor)

        const BladeArmorPowerCells = new Augmentation({
            name: AugmentationNames.BladeArmorPowerCells,
            repCost: 1.875e4,
            moneyCost: 2.75e9,
            info:
                "Upgrades the BLADE-51b Tesla Armor with Ion Power Cells, which are capable of " +
                "more efficiently storing and using power.",
            prereqs: [AugmentationNames.BladeArmor],
            bladeburner_success_chance_mult: 1.05,
            bladeburner_stamina_gain_mult: 1.02,
            bladeburner_max_stamina_mult: 1.05,
            isSpecial: true
        })
        BladeArmorPowerCells.addToFactions([BladeburnersFactionName])
        resetAugmentation(BladeArmorPowerCells)

        const BladeArmorEnergyShielding = new Augmentation({
            name: AugmentationNames.BladeArmorEnergyShielding,
            repCost: 2.125e4,
            moneyCost: 5.5e9,
            info:
                "Upgrades the BLADE-51b Tesla Armor with a plasma energy propulsion system " +
                "that is capable of projecting an energy shielding force field.",
            prereqs: [AugmentationNames.BladeArmor],
            defense_mult: 1.05,
            bladeburner_success_chance_mult: 1.06,
            isSpecial: true
        })
        BladeArmorEnergyShielding.addToFactions([BladeburnersFactionName])
        resetAugmentation(BladeArmorEnergyShielding)

        const BladeArmorUnibeam = new Augmentation({
            name: AugmentationNames.BladeArmorUnibeam,
            repCost: 3.125e4,
            moneyCost: 1.65e10,
            info:
                "Upgrades the BLADE-51b Tesla Armor with a concentrated deuterium-fluoride laser " +
                "weapon. It's precision and accuracy makes it useful for quickly neutralizing " +
                "threats while keeping casualties to a minimum.",
            prereqs: [AugmentationNames.BladeArmor],
            bladeburner_success_chance_mult: 1.08,
            isSpecial: true
        })
        BladeArmorUnibeam.addToFactions([BladeburnersFactionName])
        resetAugmentation(BladeArmorUnibeam)

        const BladeArmorOmnibeam = new Augmentation({
            name: AugmentationNames.BladeArmorOmnibeam,
            repCost: 6.25e4,
            moneyCost: 2.75e10,
            info:
                "Upgrades the BLADE-51b Tesla Armor Unibeam augmentation to use a " +
                "multiple-fiber system. This upgraded weapon uses multiple fiber laser " +
                "modules that combine together to form a single, more powerful beam of up to " +
                "2000MW.",
            prereqs: [AugmentationNames.BladeArmorUnibeam],
            bladeburner_success_chance_mult: 1.1,
            isSpecial: true
        })
        BladeArmorOmnibeam.addToFactions([BladeburnersFactionName])
        resetAugmentation(BladeArmorOmnibeam)

        const BladeArmorIPU = new Augmentation({
            name: AugmentationNames.BladeArmorIPU,
            repCost: 1.5e4,
            moneyCost: 1.1e9,
            info:
                "Upgrades the BLADE-51b Tesla Armor with an AI Information Processing " +
                "Unit that was specially designed to analyze Synthoid related data and " +
                "information.",
            prereqs: [AugmentationNames.BladeArmor],
            bladeburner_analysis_mult: 1.15,
            bladeburner_success_chance_mult: 1.02,
            isSpecial: true
        })
        BladeArmorIPU.addToFactions([BladeburnersFactionName])
        resetAugmentation(BladeArmorIPU)

        const BladesSimulacrum = new Augmentation({
            name: AugmentationNames.BladesSimulacrum,
            repCost: 1.25e3,
            moneyCost: 1.5e11,
            info:
                "A highly-advanced matter phase-shifter module that is embedded " +
                "in the brainstem and cerebellum. This augmentation allows " +
                "the user to project and control a holographic simulacrum within an " +
                "extremely large radius. These specially-modified holograms were specifically " +
                "weaponized by Bladeburner units to be used against Synthoids.",
            isSpecial: true
        })
        BladesSimulacrum.addToFactions([BladeburnersFactionName])
        resetAugmentation(BladesSimulacrum)
    }

    // Special CotMG Augmentations
    const ChurchOfTheMachineGodFactionName = "Church of the Machine God"
    if (factionExists(ChurchOfTheMachineGodFactionName)) {
        const StaneksGift1 = new Augmentation({
            name: AugmentationNames.StaneksGift1,
            repCost: 0,
            moneyCost: 0,
            info:
                'Allison "Mother" Stanek imparts you with her gift. An ' +
                "experimental Augmentation implanted at the base of the neck. " +
                "It allows you to overclock your entire system by carefully " +
                "changing the configuration.",
            isSpecial: true,
            hacking_chance_mult: 0.9,
            hacking_speed_mult: 0.9,
            hacking_money_mult: 0.9,
            hacking_grow_mult: 0.9,
            hacking_mult: 0.9,
            strength_mult: 0.9,
            defense_mult: 0.9,
            dexterity_mult: 0.9,
            agility_mult: 0.9,
            charisma_mult: 0.9,
            hacking_exp_mult: 0.9,
            strength_exp_mult: 0.9,
            defense_exp_mult: 0.9,
            dexterity_exp_mult: 0.9,
            agility_exp_mult: 0.9,
            charisma_exp_mult: 0.9,
            company_rep_mult: 0.9,
            faction_rep_mult: 0.9,
            crime_money_mult: 0.9,
            crime_success_mult: 0.9,
            hacknet_node_money_mult: 0.9,
            hacknet_node_purchase_cost_mult: 1.1,
            hacknet_node_ram_cost_mult: 1.1,
            hacknet_node_core_cost_mult: 1.1,
            hacknet_node_level_cost_mult: 1.1,
            work_money_mult: 0.9
        })
        StaneksGift1.addToFactions([ChurchOfTheMachineGodFactionName])
        resetAugmentation(StaneksGift1)

        const StaneksGift2 = new Augmentation({
            name: AugmentationNames.StaneksGift2,
            repCost: 1e6,
            moneyCost: 0,
            info:
                "The next evolution is near, a coming together of man and machine. A synthesis greater than the birth of the human " +
                "organism. Time spent with the gift has allowed for acclimatization of the invasive augment and the toll it takes upon " +
                "your frame granting lesser penalty of 5% to all stats.",
            prereqs: [AugmentationNames.StaneksGift1],
            isSpecial: true,
            hacking_chance_mult: 0.95 / 0.9,
            hacking_speed_mult: 0.95 / 0.9,
            hacking_money_mult: 0.95 / 0.9,
            hacking_grow_mult: 0.95 / 0.9,
            hacking_mult: 0.95 / 0.9,
            strength_mult: 0.95 / 0.9,
            defense_mult: 0.95 / 0.9,
            dexterity_mult: 0.95 / 0.9,
            agility_mult: 0.95 / 0.9,
            charisma_mult: 0.95 / 0.9,
            hacking_exp_mult: 0.95 / 0.9,
            strength_exp_mult: 0.95 / 0.9,
            defense_exp_mult: 0.95 / 0.9,
            dexterity_exp_mult: 0.95 / 0.9,
            agility_exp_mult: 0.95 / 0.9,
            charisma_exp_mult: 0.95 / 0.9,
            company_rep_mult: 0.95 / 0.9,
            faction_rep_mult: 0.95 / 0.9,
            crime_money_mult: 0.95 / 0.9,
            crime_success_mult: 0.95 / 0.9,
            hacknet_node_money_mult: 0.95 / 0.9,
            hacknet_node_purchase_cost_mult: 1.05 / 1.1,
            hacknet_node_ram_cost_mult: 1.05 / 1.1,
            hacknet_node_core_cost_mult: 1.05 / 1.1,
            hacknet_node_level_cost_mult: 1.05 / 1.1,
            work_money_mult: 0.95 / 0.9
        })
        StaneksGift2.addToFactions([ChurchOfTheMachineGodFactionName])
        resetAugmentation(StaneksGift2)

        const StaneksGift3 = new Augmentation({
            name: AugmentationNames.StaneksGift3,
            repCost: 1e8,
            moneyCost: 0,
            info:
                "The synthesis of human and machine is nothing to fear. It is our destiny. " +
                "You will become greater than the sum of our parts. As One. Embrace your gift " +
                "fully and wholly free of it's accursed toll. Serenity brings tranquility the form " +
                "of no longer suffering a stat penalty. ",
            prereqs: [AugmentationNames.StaneksGift2],
            isSpecial: true,
            hacking_chance_mult: 1 / 0.95,
            hacking_speed_mult: 1 / 0.95,
            hacking_money_mult: 1 / 0.95,
            hacking_grow_mult: 1 / 0.95,
            hacking_mult: 1 / 0.95,
            strength_mult: 1 / 0.95,
            defense_mult: 1 / 0.95,
            dexterity_mult: 1 / 0.95,
            agility_mult: 1 / 0.95,
            charisma_mult: 1 / 0.95,
            hacking_exp_mult: 1 / 0.95,
            strength_exp_mult: 1 / 0.95,
            defense_exp_mult: 1 / 0.95,
            dexterity_exp_mult: 1 / 0.95,
            agility_exp_mult: 1 / 0.95,
            charisma_exp_mult: 1 / 0.95,
            company_rep_mult: 1 / 0.95,
            faction_rep_mult: 1 / 0.95,
            crime_money_mult: 1 / 0.95,
            crime_success_mult: 1 / 0.95,
            hacknet_node_money_mult: 1 / 0.95,
            hacknet_node_purchase_cost_mult: 1 / 1.05,
            hacknet_node_ram_cost_mult: 1 / 1.05,
            hacknet_node_core_cost_mult: 1 / 1.05,
            hacknet_node_level_cost_mult: 1 / 1.05,
            work_money_mult: 1 / 0.95
        })
        StaneksGift3.addToFactions([ChurchOfTheMachineGodFactionName])
        resetAugmentation(StaneksGift3)
    }
}

//Resets an Augmentation during (re-initizliation)
function resetAugmentation(newAugObject: Augmentation): void {
    if (!(newAugObject instanceof Augmentation)) {
        throw new Error("Invalid argument 'newAugObject' passed into resetAugmentation")
    }
    const name = newAugObject.name
    if (augmentationExists(name)) {
        delete Augmentations[name]
    }
    AddToAugmentations(newAugObject)
}

function augmentationExists(name: string): boolean {
    return Augmentations.hasOwnProperty(name)
}

export function isRepeatableAug(aug: Augmentation): boolean {
    const augName = aug instanceof Augmentation ? aug.name : aug

    if (augName === AugmentationNames.NeuroFluxGovernor) {
        return true
    }

    return false
}

export { initAugmentations, augmentationExists }
