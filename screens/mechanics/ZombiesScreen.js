{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";



function ZombiesScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Zombies Info</Text>

        <Text style={[styles.textHeader]}>Normal Zombies:</Text>
        <Text style={[styles.text]}>Normal zombies are the ones a player usually faces when exploring the world. They can be rather easily defeated with basic weapons, but can pose a challenge to new players especially in packs or in close quarters inside buildings.</Text>

        <Text style={[styles.list]}>Departed Woman</Text>
        <Text style={[styles.list]}>Festering Corpse</Text>
        <Text style={[styles.list]}>Infected Mother</Text>
        <Text style={[styles.list]}>Infected Survivor</Text>
        <Text style={[styles.list]}>Plagued Nurse</Text>
        <Text style={[styles.list]}>Putrid Girl</Text>
        <Text style={[styles.list]}>Rotting Carcass</Text>
        <Text style={[styles.list]}>Reanimated Corpse</Text>
        <Text style={[styles.list]}>Skater Punk Zombie</Text>
        <Text style={[styles.list]}>Zombie Janitor</Text>
        <Text style={[styles.list]}>Party Girl</Text>


        <Text style={[styles.textHeader]}>Tough Zombies:</Text>
        <Text style={[styles.text]}>Tough Zombies have more health, resistance and damage, making them harder to be dealt with.</Text>

        <Text style={[styles.list]}>Bloated Walker</Text>
        <Text style={[styles.list]}>Fat Hawaiian</Text>
        <Text style={[styles.list]}>Fallen Soldier Zombie</Text>
        <Text style={[styles.list]}>Frozen Lumberjack</Text>
        <Text style={[styles.list]}>Hazmat Male Zombie</Text>
        <Text style={[styles.list]}>Hungry Female Zombie</Text>
        <Text style={[styles.list]}>Utility Worker Zombie</Text>
        <Text style={[styles.list]}>Zombie Biker</Text>


        <Text style={[styles.textHeader]}>Special Infected:</Text>
        <Text style={[styles.text]}>Most zombies differ only in appearance, however some zombies have special features and abilities:</Text>

        <Text style={[styles.text]}>Burn Victim can set the player on fire if contact is made or if it attacks the player. This zombie spawns commonly around the burnt forest biome and can also be spawned in for 'Clear the Area' tasks from the Trader.</Text>

        <Text style={[styles.text]}>Crawler Zombie is one of the earliest special infected encountered within the game, and unlike most zombies, it will always crawl along the ground and may use this to its advantage to ambush unsuspecting players or reach low gaps. It is also immune to being stunned.</Text>

        <Text style={[styles.text]}>Demolisher is a physically resistant zombie that can easily break spikes and hit hard. It spawns in the later Blood Moon hordes and can be blown up by shooting the C4, which is strapped onto his torso. It also has a small chance of spawning in the downtown area of cities, with a slightly higher chance to spawn in cities in the Wasteland compared to the other biomes.</Text>

        <Text style={[styles.text]}>Feral Wight is a very tough zombie. It requires lots of strength to kill and is not affected by sunlight due to only spawning as a feral, regardless of the world's settings. This type of zombie will only spawn in cities, Blood Moon hordes, caves, or via screamers during later days. When killed they give the highest amount of experience points and carry the best loot of all zombies.</Text>

        <Text style={[styles.text]}>Mutated Zombie is a zombie with a ranged spitting attack somewhat similar to the Infected Police Officer. However the Mutated Zombie's ranged attack does significantly less damage to blocks. This zombie has a chance to spawn anywhere in the Wasteland. If stepped on or being hit directly, the acid produced by his spitting attack will give the deadly radiation status effect.</Text>
        
        <Text style={[styles.text]}>Infected Police Officer has a high amount of HP similar to the Bloated Walker, but also possesses a deadly ranged attack. Once it spots a player from a decent range, it will release a stream of acidic vomit towards them, which can destroy blocks and instantly kill unarmored players. When at low health, it will attempt to sprint towards the player and will explode once close enough, usually killing the player instantly unless it's killed before it reaches them. An Infected Police Officer tends to drop good loot, but if it has killed itself by exploding, no loot bag will spawn.</Text>

        <Text style={[styles.text]}>Screamer Zombies are the advanced scouts of the undead. When you produce a certain amount of "heat", a Screamer or two will spawn to investigate. If they detect you, they will scream and a horde will spawn. Kill them quickly to avoid the hordes. Your heat map rises when you perform various activities, campfires and forges may raise it, as can cutting trees, mining, using certain weapons, explosives, the Augur or even crafting. The heat level drops if activity in the area ceases.</Text>

        <Text style={[styles.text]}>Spider Zombies, as their name implies, are able to climb and scale walls. They can scale vertical walls, but not a horizontal ceiling. Spider Zombies are also capable of spitting "webs" at the player, dealing low damage if hit. They can also stun the player.</Text>


        <Text style={[styles.textHeader]}>Animal Zombies:</Text>
        <Text style={[styles.text]}>Zombie animals exist in the world along with the traditional human zombies. Killing and harvesting them is one of the ways to get rotting flesh which is important for farming.</Text>

        <Text style={[styles.text]}>Zombie Bears have more HP and are stronger than regular Bears. They are covered in blood and will attack anything on sight. In later days, Screamers can call them.</Text>

        <Text style={[styles.text]}>Zombie Dogs are faster than other zombies and are not affected by sunlight, making them a dangerous predator at all times. They typically spawn in packs, and can thus maul a survivor into shreds. Sometimes they may spawn as wolves.</Text>

        <Text style={[styles.text]}>Zombie Vultures fly around and attack the player from above, and will attempt to make range after it successfully attacked the player to avoid retaliation. They spawn in every biome and can be avoided by hiding in a shelter, though their ability to break blocks might leave you a limited amount of time until they break a hole in your roof.</Text>


        <Text style={[styles.textHeader]}>Behavior:</Text>
        <Text style={[styles.textHeader]}>Day:</Text>
        <Text style={[styles.text]}>Zombies move slowly during the day and will not chase after the player if they stay far enough away. Zombies will mostly stay idle around their position but when they spot a player they will move in a straight line towards them, destroying any blocks in their way. This behavior can be changed while creating and entering a world with the setting "Zombie Day Speed".</Text>

        <Text style={[styles.textHeader]}>Night:</Text>
        <Text style={[styles.text]}>At night, zombies start running and begin to wander around. They will attempt to detect survivors at night, using proximity, sight and light. Zombies will try to occupy the space directly above or below the players' location. During the night, zombies appear to be more active the closer a player is to them, for example if a player stands directly on top of a wall, no matter the material, the zombies will destroy the blocks in the wall very rapidly. However by contrast, if the player is standing in the middle of a room, and is 15 or more spaces from all the walls, zombies will not congregate in one spot to destroy the wall and it will take them much longer. This being considered, larger bases are usually more effective than smaller ones.</Text>

        <Text style={[styles.text]}>Zombies react to pain in certain areas. For example, if hit in the leg, they will hold their leg and be stunned for a couple of seconds. If hit in the torso, the zombie may be stunned, causing them to fall to the ground. Note that this does not kill them, and they will get up a few seconds later and resume their assault. A player should never assume the zombie is dead simply because it is on the ground, instead keep in mind that an EXP gain will be shown in the lower right corner of the screen when a zombie is killed, which is essentially a notification system that tells you if a zombie is down or will get back up.</Text>

        <Text style={[styles.text]}>Zombies can and will climb ladders. If a player and a zombie are on a ladder and a player is below the zombie, with the zombie having no movement options besides going up and down the ladder, the zombie will be unable to attack the player. It is unknown if this is intentional or not.</Text>


        <Text style={[styles.textHeader]}>Combat:</Text>
        <Text style={[styles.text]}>With the exception of the Mutated Zombie and Infected Police Officer, all zombies have a single style of attack, which is a melee swipe, slash or punch (However, if both of a zombie's arms are taken off, they seem to bite the player instead). All attacks have a chance of causing an Infection, Stunned, Fatigue, Sprained Legs and Arms, Lacerations, and/or the Bleeding debuff, the latter being more prevalent when fighting against Zombie Dogs. Melee combat against zombies is relatively simple - aim for the head and walk in and out between strikes. Every hit has also a chance to dismember a limb from zombie. Dismembering the head will kill any zombie instantly, so using a weapon under the attribute the player focuses on is advisable. However, against a horde, melee combat can lead the player to be surrounded by zombies which is extremely dangerous, especially at night. This should be avoided at all costs as a single stun, bleed, or infection will most likely be fatal. Against hordes or when safety is of the ultimate priority, guns are the safest in this regard, but they heavily rely on ammunition. The Primitive Bow is an excellent choice for fighting zombies as both it and Stone Arrows are easy and inexpensive to craft, and using the bow makes little to no noise, thus attracting less attention from nearby zombies.</Text>

        <Text style={[styles.text]}>The Stealth System can be used to avoid zombies. Stealth mode is activated when crouching (default 'C' key, or toggled on/off by 'left-Ctrl' key). You will make less noise while moving and searching in stealth mode, but movement while crouched is slower than while walking. Crossbows and Bows can be used for stealth kills without drawing much attention from other zombies, and both get double damage from stealth shooting. Attacking stunned zombies will give a stun bonus of 3 times the normal damage, making it easy to finish them off. Some objects, such as Small Stones and Snowballs can be thrown to create a distraction or to lure zombies to other areas.</Text>


        <Text style={[styles.textHeader]}>Defenses:</Text>
        <Text style={[styles.text]}>Generally, a base is never perfectly safe from zombies. Repairs are a normal duty; fixing blocks, replacing traps, etc. Even the most fortified bases can fail when under siege by wave after wave of zombies, particularly during the Blood Moon Hordes. The following tips can help extend the longevity of a base:</Text>

        <Text style={[styles.text]}>Use traps, like Wood Spikes. Other forms of traps include land mines or pitfalls, but require extensive pre-building or restocking.</Text>

        <Text style={[styles.text]}>Zombies won't notice hatches or wooden poles, this is very useful for long pits to harm zombies with a clever death trap.</Text>

        <Text style={[styles.text]}>Build walls at least two blocks higher than the zombies can jump (usually three blocks high) to prevent them from breaking an upper block on a two-high wall and jumping over it. Keep in mind, however, that zombies can jump on top of each other like blocks to climb slightly higher than they can jump.</Text>

        <Text style={[styles.text]}>Build double layer walls to rely on more than one layer of defenses should a zombie siege occur. This is especially true if the player wishes to fortify their base, but does not want to break down their original layer of walls.</Text>

        <Text style={[styles.text]}>Make frequent repairs. It is wise for a player to always check for damages whenever possible, especially after a siege. The Claw Hammer, Nailgun and Stone Axe can all repair broken or damaged blocks. Most blocks can be upgraded to be more durable.</Text>

        <Text style={[styles.text]}>Allow visual sight of your entrance from inside your base. This is most commonly achieved by having a balcony or roof access, so as to make it possible for a player to shoot at zombies while remaining more or less safe.</Text>

        <Text style={[styles.text]}>Have a way to attack the zombies through your defenses where they can't attack you. Whether by Wood Spikes, a high wall with a direct line of sight or Iron Bars inset into the walls, you need a way to clear out large numbers of zombies safely.</Text>

        <Text style={[styles.text]}>Moats and ditches. These take time and planning to build and as such should only be attempted once a base has other defenses. Combined with spike traps, these are very effective defenses, though hinder attempts to farm food or any escape routes. If building near water, the banks of the water body will cause problems for the ditch. Having a moat or ditch requires strong defenses at the bridge of your moat since this is the easiest access point.</Text>

        <Text style={[styles.text]}>Escape routes. A base should have an easy access escape route that zombies or other players cannot enter. One suggestion would be to build a tunnel out of the base and then block up the entrance with one layer of Dirt , thus making it inaccessible to zombies or enemy players whilst allowing for easy escape should your defense become overrun. An escape kit can be maintained near the exit to the passage so that it is possible to survive until your base can be reoccupied Food, Bottled Water, medicines, and weapons are recommended. Park a vehicle, such as a Bicycle, Minibike, Motorcycle, or 4x4 Truck a short distance away from your base for a quick escape.</Text>

        <Text style={[styles.text]}>Another much more effective Escape Route is the Tower Escape. If you have a high building or tower, and you are able to jump over your tower's outer walls, you can make an elevated building just outside your wall line with Hay Bales on top. Hay Bales reduce fall damage, so if Zombies breach your defenses and climb up your tower to attack, you can escape by getting onto the top floor and jumping onto your hay bale escape route just outside of the wall, running, recouping, and making a counterattack to take back your base.</Text>

        <Text style={[styles.text]}>Underground bases can take quite a long time to make and require the player to have pre-existing resources but are extremely easy to fortify and defend in both PvP and PvE, though keep in mind that Zombies can dig down.</Text>

        <Text style={[styles.text]}>Zombies have no regard for their own safety and will attempt to charge even through Wood Spikes or other traps, even if it means certain death. However, as swarms of zombies die and defenses slowly degrade, it will be easier for them to clear a path to the player.</Text>

        <Text style={[styles.text]}>Fall damage for any zombie at any height will only reduce its health by half and will stun the zombie, making it vulnerable to triple-damage while stunned.</Text>
      </ScrollView>
    );
  }

export default ZombiesScreen;