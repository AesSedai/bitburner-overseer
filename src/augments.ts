import { NS } from "../types/bitburner"
import { initAugmentations, initFactions, Augmentations, Factions } from "./augments_src"
import { shutup } from "./shutup"

const augMults = [
    "hacking_mult",
    "strength_mult",
    "defense_mult",
    "dexterity_mult",
    "agility_mult",
    "charisma_mult",
    "hacking_exp_mult",
    "strength_exp_mult",
    "defense_exp_mult",
    "dexterity_exp_mult",
    "agility_exp_mult",
    "charisma_exp_mult",
    "hacking_chance_mult",
    "hacking_speed_mult",
    "hacking_money_mult",
    "hacking_grow_mult",
    "company_rep_mult",
    "faction_rep_mult",
    "crime_money_mult",
    "crime_success_mult",
    "work_money_mult",
    "hacknet_node_money_mult",
    "hacknet_node_purchase_cost_mult",
    "hacknet_node_ram_cost_mult",
    "hacknet_node_core_cost_mult",
    "hacknet_node_level_cost_mult",
    "bladeburner_max_stamina_mult",
    "bladeburner_stamina_gain_mult",
    "bladeburner_analysis_mult",
    "bladeburner_success_chance_mult"
]

export function autocomplete(data: any, args: any) {
    return [...augMults]
}

export async function main(ns: NS) {
    shutup(ns)
    initFactions()
    initAugmentations()
    const mult = ns.args[0]

    if (typeof mult !== "string" || !augMults.includes(mult)) {
        ns.tprint("Argument must be a multiplier name. Check autocomplete.")
        return
    }

    // requires singularity API
    const owned = ns.getOwnedAugmentations(true)

    const f = Object.values(Factions)

    const augsWithMult = Object.values(Augmentations)
        .filter((aug) => aug.mults[mult] != null)
        .filter((aug) => !owned.includes(aug.name))
        .map((aug) => {
            const owners = f
                .filter((faction) => faction.augmentations.includes(aug.name))
                .map((faction) => faction.name)
            return { name: aug.name, mult: aug.mults[mult], owners: owners.join(", ") }
        })
        .sort((a, b) => (a.mult > b.mult ? -1 : 1))
        .map((aug) => {
            return `${aug.mult}\t${aug.name}\t${aug.owners}`
        })

    ns.tprint(`\n${augsWithMult.join("\n")}`)
}
