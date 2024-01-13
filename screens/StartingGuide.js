
import { Button, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function StartingGuide({ navigation }) {
    return (
      <ScrollView>
        <Text>Starting Guide</Text>

        <Text>Description:</Text>
        <Text>7 Days to Die is an open-world horde survival/crafting game with many ways to play it. Below you can find useful advice that an inexperienced player could follow. Depending on how you are with survival games this may or may not help you it is up to you!</Text>


        <Text>Terminology:</Text>
        <Text>Zombies refers to all humanoid NPC enemies.</Text>

        <Text>Specials can refer to all special enemies and hostile animals. These include the Spider Zombie, Bear, Zombie Bear, Zombie Dog, Feral Zombie, Screamer, Infected Police Officer, and Burn Victim.</Text>

        <Text>Early Game is a loose term often used to refer to the time around when a player has just started in a world, it is also referred to as the 'Primitive Stage'.</Text>

        <Text>Mid Game is a loose term to refer to the time around when a player has established a safe place to stay overnight, in addition to a good supply of resources and sufficient weaponry.</Text>

        <Text>Late Game is a loose term to refer to the time around when a player is nearly fully self-sustained and can pretty much deal with any threat without much trouble.</Text>

        <Text>End Game refers to when a player has a well-defended fortress and is completely self-sustained.</Text>


        <Text>First Steps:</Text>
        <Text>It is recommended to play the prefab map Navezgane for beginners. For beginners, anything higher than "Low" spawn settings is likely to be too overwhelming as large groups of zombies may spawn around a player in the open, causing the player to become trapped as the zombies tighten their circle.</Text>


        <Text>The First Day:</Text>
        <Text>Immediately begin to pick up Small Stones, punch trees and bushes for Wood, and grass for Plant Fibers. Once you have at least five small stones, and a small amount of wood, and plant fibers. You can press the Tab key to open the game inventory and crafting menu. Either under the tools section or the basics section, select Stone Axe then above the inventory grid, click the white Craft text under the Stone Axe icon to craft this tool. With your new Stone Axe, you can begin harvesting Wood and Small Stones much more efficiently. Cutting down trees and hitting rocks/boulders will yield these resources while degrading the durability of the axe. The Stone Axe that you craft will always be quality 1 until you put skill points into the skill Miner 69er.</Text>

        <Text>For a limited time after you spawn for the first time in your game, or on a server, no zombies will spawn around you. Use this time wisely to recon your area and gather as many starting resources and loot as possible. If you are caught off guard, your Stone Axe can be used in a pinch as a cutting weapon. Its strikes can sometimes dismember zombies. However, a better-starting weapon - and an item that you should make as soon as possible - is the Primitive Bow, which you will need Wood and Plant Fibers to craft. A single Stone Arrow will cost 1 Small Stone, 1 Wood and 1 Feather. Make sure to craft plenty of Stone Arrows, 30 or more, to defend yourself. If you prefer melee combat, you can craft a Wooden Club, but ranged combat is preferable unless feathers are scarce. Arrows can usually be recollected from fallen zombies or in the environment as you miss your shots.</Text>

        <Text>Sometimes you don't even need to finish off a zombie; stunning a zombie and sprinting away is also a viable strategy. As they say, discretion is the better part of valour.</Text>

        <Text>Cloth Fragments can be crafted from Cotton Plants, which you can use to make cloth armour and clothing.</Text>

        <Text>Plant Fibers (10x) are used to craft a Bedroll which will act as your respawn point if you die.</Text>

        <Text>If you end up being hot or cold, it is a good idea to use the Plant Fibers you are collecting to craft basic plant fiber clothing. A full set includes Plant Fiber Pants, Plant Fiber Boots, a Plant Fiber Shirt, Plant Fiber Gloves, and a Plant Fiber Hood or Plant Fiber Hat. These offer some heat/cold resistance. Armour can be crafted from various resources such as Cloth Fragments, Leather, Sewing, Forged Iron, Military Armor Parts, and Steel Armor Parts, the latter two likely only being available until much later. Until you reach level 6, you will be immune to adverse effects from the biome you're in, be it extreme heat or unbearable cold.</Text>

        <Text>Using a Primitive Bow you should practice shooting Stone Arrow at animals like the Chicken, Rabbit, Doe and Stag as these are non-hostile and will flee. If you manage to kill one, try Butchering it with your Stone Axe to get Raw Meat, Bones, and Leather. (The last one is very important to progress in the game! Don't use it for anything yet.) These bones can be crafted into a Bone Knife, which is a primitive knife that gives a more plentiful harvest than your axe. The Bone Knife is also a useful stabbing/cutting weapon if you find yourself in close quarters with zombies, though it has very little to no stun value.</Text>

        <Text>As you move around and gather basic supplies, do not forget to check rubbish and trash piles, abandoned cars, and backpacks that may be scattered around the area, these provide ample amounts of loot and supplies.</Text>

        <Text>Rely on what nature provides When you have sufficient amounts of wood, you can begin to craft Wood Frames. Try to make your first shelter as small as possible so that you can still place a Secure Storage Chest and Campfire inside while you shelter from the night or weather. While playing in Servers be sure to not forget to craft a Secure Wood Door, these can be locked to help prevent players from just walking into your shelter and stealing your supplies. Although it is tempting to save your cooking and crafting for the night, be sure to conserve activity and light to avoid curious guests.</Text>

        <Text>Find an existing building As you move about, instead of building your shelter, try and locate an existing building such as a burnt cabin or a metal shed. These structures save you considerable amounts of time and resources if you can find one, and tend to offer more overall protection on your first night. If you locate one such place of interest, make sure to use your Stone Axe to fortify any windows, doors and walls that look weak. Zombies will happily jump onto a window sill and smash inside as these are the weakest points. With any extra Wood you may have, craft some Wood Spikes and place them around the exterior of your new shelter. This will weaken and slow down zombies, maybe even crippling them into a crawl! Much easier to deal with that way.</Text>

        <Text>Keep in mind, however, that over the long term, prefabricated buildings offer much less protection than a player-built base. After the first couple of nights, you should begin building a base nearby to move into once complete.</Text>

        <Text>Try to avoid bunkering down in a town. Zombies will spawn more spread out here, but they are much more plentiful, and make trips outside the player's base hazardous. Zombies may be waiting to ambush you around every corner if you have not cleared the town out, and often the harder Specials spawn in these locales.</Text>

        <Text>If you are desperate, Pass n' Gas, double-story stores and anything with a rooftop area accessible via a ladder can be a godsend. Just remain crouched for the entirety of the night to avoid detection.</Text>

        <Text>Clear out any Zombies in your Point of Interest while there is daylight because depending on the game settings Zombies will sprint at night time.</Text>


        <Text>The First Night:</Text>
        <Text>22:00 is when dusk ends and night begins. It may be too late to leave a town or city if you are in one when this time hits. If so, simply try and find a nice hole to hide in and use chairs or Wood Frames to block entrances.</Text>

        <Text>Do not risk running outside at night time unless you have to. Zombies may not run faster than you, but they do not get tired like you do and will quickly outnumber and outlast your limited Stamina. Stay inside your shelter and remain crouched to avoid detection as much as possible. The night can be the best time to begin mass crafting various supplies, such as ammunition like Stone Arrows, medical supplies like Simple Bandages and anything else you may need to survive the next day. However, the more you craft, cook, smelt and make noise (moving around while not crouched, building, repairing and fighting) the more your particular area will attract zombies and the more likely they are to spawn around you.</Text>

        <Text>Even if a zombie begins to hunt you, do not panic and flee; simply fight it off using arrows or melee while crouched. Often if you can kill it quickly, you may not get detected by other zombies and can resume safely hiding until dawn.</Text>

        <Text>Usually, the first night isn't very dangerous, most veteran players can run around at night time with little trouble, it is a good idea to utilize the time wisely as it allows you to get a lot of stuff done that you may not otherwise be able to multitask very well when scavenging or gathering. As the days go on, however, nighttime becomes progressively more deadly.</Text>

        <Text>Dawn is at 04:00. Usually, music plays to signify the rising of the sun, when zombies slow back down to a walk from their manic sprinting. It is safer to exit at this time and begin gathering more resources or scavenging for supplies elsewhere. Try to leave the immediate area of your shelter if you want to do a lot of crafting or other activities so that your base will not generate attention on the zombie AI's heat map. A few zombies in the open during the day can be easily avoided or picked off, whereas zombies at your shelter may damage your defences before you deal with them.</Text>


        <Text>Next Steps:</Text>
        <Text>It is a good idea to spend the entirety of the second day gathering food supplies, preferably canned goods or fresh berries, Corn and Potatoes. Blueberries spawn prominently in the snow biomes and corn in crop fields, while potatoes can be found in kitchen cupboards or fridges. Murky Water can be found in a mass amount of places early game, you will need to take bottles of Murky Water to a Campfire that has a Cooking Pot installed to turn the Murky Water into Water. This process takes 10 seconds and is one of the best early-game methods of obtaining Water.</Text>

        <Text>Now you can either choose a place to settle and start building a base, or you can become nomadic, roaming around scavenging and looting. Both options are fine. For more detailed information about both play styles check the following guides:</Text>

        <Text>When scavenging, your character will eventually run into zombies. The amount will depend on the spawn rate setting. Look for areas marked with buildings on the map areas like Diersville, Gravestown, and Perishton as these are chock full of loot, but they are also hot spots for zombies. Using the stealth option should keep your character safe enough while you are scavenging. Food and water tend to be found in Cupboards and in the kitchen area. Certain weapons can be found in Munitions Boxes, and others inside Gun Safes, Desk Safes and Wall Safes. Other miscellaneous loot is usually found in other containers.</Text>


        <Text>Combat Tips:</Text>
        <Text>Try not to engage zombies in combat unless you are sure you will not be surrounded and beaten down. Observe zombies from a safe distance. If you notice any zombies with glowing orange eyes or glowing green features, those are stronger variants that can run even during the day and should be avoided at all costs early on.</Text>

        <Text>Even a small group of zombies can kill an unwary player. Zombies' attacks can stun the player, and multiple zombies attacking at once can effectively "stun-lock" a survivor, making it very hard to fight back or escape.</Text>

        <Text>Zombies that are running tend to move in a zigzag manner in addition to circling you, making them more difficult to hit. Each weapon has different properties, and reading the article for any particular weapon will explain how to best use it for combat. For a current list browse the article Weapons.</Text>

        <Text>When you know you cannot avoid a confrontation with a zombie and the Zombie is unaware of your presence</Text>

        <Text>Your stone axe is not a weapon. Craft a Wooden Club, Stone Spear and/or a Primitive Bow A.S.A.P.</Text>

        <Text>To maximize damage output on players or Zombies, make sure to land any melee or ranged attacks on the target's head. Even if it does not outright kill a zombie, it will deal much more damage than if you hit their torso or arms. Ranged weapons are best used to quickly and safely dispatch threats at medium range, while melee weapons such as the Baseball Bat are better used in disabling or stunning zombies so you can safely escape or put some distance between yourself and your target.</Text>

        <Text>When a zombie is knocked down and Stunned, do not waste ammunition on it. Simply melee its head. Cutting tools work best but a blunt tool will also suffice. You do three times as much damage to a Stunned target so make sure to use this time appropriately to finish off any threats if you can't simply escape.</Text>

        <Text>When engaging a zombie or player in melee combat, make sure to dodge toward and back from a zombie. Try to time your strikes as you are approaching the zombie, and quickly back away (holding the sprint key, default is Shift) to minimize the risk of being hit yourself. Sidestepping can also work but is much more risky, and unadvised. When engaged with a zombie, you can use melee to break the zombie's legs and turn them into a slow-moving crawler so you can easily finish them off or escape.</Text>


        <Text>Firearms:</Text>
        <Text>As you explore further you will discover firearms and ammunition along the way. These weapons are very effective at killing zombies - far better than the bow, or any melee weapons - but their noise can and will attract Zombies to your location. Each type of firearm requires a specific type of Ammunition and will only accept the correct type. Always aim for the head; you will quickly take down any zombie with minimal damage to their head.</Text>

        <Text>Shotguns are powerful short-range Weapon, however, they will not do as much damage should any of their Buckshot fail to hit the target. When using one, you will need to be sure of your headshot accuracy.</Text>

        <Text>Sniper Rifles and Hunting Rifles are much more capable of effective long-range fire, delivering enough damage to even destroy blocks from a distance with only a few hits - and most zombies with a single well-placed bullet.</Text>

        <Text>Pistols are the weakest firearms, and can even be weaker than some melee weapons. It will take several body shots or a couple head shots to take down an average zombie. However, their value should not be underestimated, especially as their ammunition is plentiful, and distancing yourself from the Zombies, makes it a fair choice for a skirmishing weapon during looting trips, or when in a tight spot.</Text>

        <Text>Although they are not firearms, Crossbow and Wooden Bow have been included in the following table, as they are ranged weapons. They can be used as effectively as other firearms and draw a comparison with the need for Ammunition. It is wise to craft a Primitive Bow as early as possible. Not only are they silent when fired, but they use a Stone Arrow as ammunition with the items required to craft them both plentiful and easy to obtain.</Text>

        <Text>The table below shows the compatible ammunition for each weapon. The table below doesn't include the alternative ammunition for the primitive bow, crossbow, or shotgun. These ammunition types are later-game weapons but are powerful alternatives to rarer weapons and ammo.</Text>


        <Text>Melee Weapons:</Text>
        <Text>A melee weapon is used at short range for close-quarter combat. There is a selection of weapons and tools that can used in this manner. However, the individual effectiveness of a given tool or melee can vary greatly. For this guide, the effectiveness relates to how quickly the weapon or tool will kill an average Zombie.</Text>

        <Text>An Auger and Chainsaw are amongst the most effective, provided you have the required Gas to operate one.</Text>

        <Text>Many tools can also be used as melee weapons but they deal damage less effectively than purpose-built weapons.</Text>

        <Text>Having a high entity damage value a Iron Sledgehammer is one of the most effective melee weapons available. Furthermore, it can deliver enough damage in one headshot to kill the majority of Zombies.</Text>

        <Text>Combined with the use of the stealth system a Hunting Knife can be used extremely effectively when use to launch a sneak attack.</Text>


        <Text>Basic Building:</Text>
        <Text>Nighttime is a nightmare. If you notice the clock coming up to 22:00 hours, it's time to find or build a safe place/shelter. Night time will last until anywhere from 4:00-10:00 hours, depending on how long a standard day/night cycle is set to.</Text>

        <Text>Gather wood! The more the better. If you don't scavenge a Fireaxe early in the game, craft a Stone Axe. Its components are very easy to acquire from pretty much anywhere in Navezgane.</Text>

        <Text>Make Wood Frames and upgrade them using the Stone Axe into their stronger variants. This gives you a decent fortification. Upgrade them with Wood, followed by Cobblestone Rocks, followed by Concrete Mix, and finally Forged Steel to make them tougher (Note that after upgrading frames into their stronger variants, you will be unable to pick them back up).</Text>

        <Text>Gather rocks! These are collected as Small Stones or by mining large boulders. As soon as you have a small number, craft a Campfire. Keep a few small stones handy as they can be used to repair a Stone Axe.</Text>

        <Text>If you find yourself close to a city or other buildings, search for one that is made of brick. Brick buildings are stronger and buy you more time.</Text>

        <Text>Windows may look good, but they can be broken easily. Zombies can also see through a window to find a Survivor.</Text>

        <Text>For a base, you'd want a place that is easy to build on. Flat areas are best, Spillway Lake and the Desert have lots of good flat areas for building. Another good option is to start with a pre-existing building. Common factors for choosing a location for a base are their proximity to water, loot-able towns, and/or wild game.</Text>

        <Text>Try to start with a smaller base, larger bases require a staggering amount of time and resources to build. It is better to start small and then expand when needed. This will also give multiple layers of defence to fall back on when the hordes start knocking.</Text>

        <Text>Leave some openings in your walls so that you can attack zombies. You can also build access to the rooftop to shoot zombies from above.</Text>

        <Text>Blocks won't stack on fresh air, you need solid ground or surface to build on. If your buildings aren't well supported, they will most likely fall during a siege.</Text>

        <Text>A way to keep zombies from reaching your shelter is to dig a moat or trench at least 3 blocks deep. This causes them to fall in, making them easy targets for a headshot. Traps can also be placed inside the trenches.</Text>

        <Text>Surface bases are vulnerable to most attacks and require extensive defences. However, it is relatively easy to expand outwards and allows players to have a good sight radius.</Text>

        <Text>Underground bases are extremely easy to defend but take a long time to build. They also require much more time when expanding. However, they are worth the effort, as players can remain virtually undetected inside underground bases.</Text>

        <Text>In one of the lakes (surrounded by the fishery, brewery, and docked gas station), there is a small boat dock resting on the lake. Generally, the boat dock is easily fortified and the player is typically left alone during the night. A couple of things need to be kept in mind, however. The first is that this takes away the challenge of the game. The second is that if zombies are chasing you as you travel to the boat dock, they will follow from the bottom of the lake. Once they get to the dock, they will relentlessly attack the pillars keeping the dock supported above water. The fact that they are so far above water makes it very difficult to dispatch them.</Text>

        <Text>It's a good idea to create a tunnel into your base from 10+ blocks outside of it. Provides a great way to run from hordes when you're surrounded. Most zombies will not try to enter via this if doors are used. A single block layer of earth will work well too.</Text>

        <Text>Nighttime is a great time to sort your inventory and craft if there is no immediate danger.</Text>


        <Text>Surviving:</Text>
        <Text>If any blocks in your shelter become damaged, repair them using a Stone Axe, Claw Hammer or Nailgun by holding the right mouse button (by default). This will consume relevant resources such as Wood for wood blocks, Cobblestone Rocks for cobble blocks, or reinforcing doors with Iron or Forged Iron.</Text>

        <Text>Reinforce your walls with an appropriate repair tool. Starting from Frame blocks, the upgrade path is Wood → Cobblestone Rocks → Concrete Mix → Forged Steel</Text>

        <Text>Try and keep at least one axe tool, pickaxe tool and knife as these come in handy all the time while scavenging during the day and can be useful last resort weapons.</Text>

        <Text>Use your time wisely. Daytime is best spent travelling and scavenging supplies or foraging/gathering. Nighttime is best used for crafting and building/fortifying. Mining can be done at day or night, it is just as dangerous at either time of the day, but doing it at night if you do not need to craft or lack the resources is also a good use of time, it also helps to do it at night as other players are less likely to be moving around to hear your mining.</Text>

        <Text>When leaving your shelter, only take what you need, a single firearm, a bow, some tools, medical supplies and a single ration of food and water are all you need. This way if you do die, you won't lose a great deal, it also means you have a lot more room to store supplies as you find them or gather them.</Text>

        <Text>Try to start a farm, it can be done indoors during the night if you build a greenhouse.</Text>

        <Text>During the night is when you should be the most productive. Tasks like sorting, interior designing and smelting are all good night tasks. Remember though, zombies are more aggressive during the night so do zombie hunting during the day and sorting etc. during the night or on blood moons. Don't go outside unless you have a sniper etc. Pray your defenses hold or the blood moon will destroy your base.</Text>

        <Text>Listing some useful items you should keep on you; flashlight, night vision goggles, at least 1 stack of water, some clothes for each biome and a backup gun or knife etc. something you can use if you're out of ammo; bladed weapons do more damage but blunt weapons stun which is much better.</Text>

        <Text>Put last resorts on your builds etc if you have a bridge and your wall falls have Remote bombs on your bridge to blow it up in case of a horde getting on it with the zombies path-finding they will reach your base so a last-ditch effort is suggested to avoid there path-finding make parkour only a player can do (note the parkour might kill you from time to time) but for the bomb, area put wooden blocks not steel due to having to blow steel would cost too many resources the TNT will make them fall into your trap or whatever because their path-finding root shouldn't change randomly.</Text>


        <Text>Water:</Text>
        <Text>Hydration depletes as you move around, sprinting also decreases it quickly. Under the temperature survival system, the climate temperature will also affect how fast your hydration decreases. Staying in cooler areas or shade will help minimize any loss of hydration while moving around the desert is a quick way to become dehydrated.</Text>

        <Text>Only drink water straight from the source if you are dying of dehydration and do not have an empty jar to collect murky water to boil into safe water, as you are more than likely to get Dysentery, which can only be cured by Pure Mineral Water and Golden Rod Tea.</Text>

        <Text>Bottled Murky Water can only be boiled on a Campfire, and no longer requires a Cooking Pot.</Text>

        <Text>Some canned foods will also hydrate you, such as Chicken Soup.</Text>


        <Text>Food:</Text>
        <Text>Fullness decreases gradually as you perform actions just like hydration, and being cold will decrease fullness faster. Eating any food will increase your fullness, but be aware that foods like Rotting Flesh and Old Sham Sandwich has a chance to give you Dysentery and often harms your health. Some foods can also hydrate or dehydrate you, so make sure to check the information in your inventory before consuming it.</Text>

        <Text>Canned food such as Can of Chili are the easiest way to sate your hunger and can improve health a little. Some even hydrates you slightly, such as Chicken Soup. If investing in the Master Chef perk, it's best to prioritize eating canned foods that are not part of a recipe first and saving the rest later to make more filling meals if possible.</Text>

        <Text>Fresh food such as Blueberries and Corn grow in the wild and can be eaten for a very small boost in hunger. You can also cook these into other, more useful food items such as Corn Bread and Blueberry Pie which are healthy.</Text>

        <Text>Raw Meat can be obtained from any wild animal when you gut them with a knife such as the Bone Knife, however, animal zombies such as Zombie Bears, Zombie Dogs and Zombie Vultures will give Rotting Flesh instead. Raw Meat needs to be cooked at a Campfire before consumption. You can cook Charred Meat, Boiled Meat and Grilled Meat, where boiled meat requires a Cooking Pot as well as a bottle of water for each piece of meat and grilled meat requires a Cooking Grill but does not dehydrate you compared to Charred Meat.</Text>

        <Text>Food is essential. Keep an eye out for Stags, Does, Chickens, and Rabbits. Boars also but they will fight back. Then all you need to cook the meat is a Campfire and Combustible fuel to burn.</Text>

        <Text>It is easiest to kill game early on with the easily crafted Primitive Bow. If you attack while undetected, you will gain a damage multiplier (just like with zombies) that should help take down animals faster.</Text>

        <Text>It is possible to outrun chickens if not wearing any armour that decreases mobility. You can save on arrows by sprinting after them and hitting them with a club if you time it correctly and manage your stamina well. The same goes for rabbits, although they are more difficult.</Text>

        <Text>The charred meat will deplete your Hydration level, so try have some Bottled Water handy.</Text>

        <Text>Wild animals also suffer from the bleeding debuff like players do, you may only need to hit a deer with two arrows and just follow it until it dies of blood loss!</Text>

        <Text>You will need a Cooking Pot to make the most advanced recipes, such as Goldenrod Tea and Meat Stew. You will likely find a Cooking Pot as loot before you gain the ability to craft one.</Text>

        <Text>You will likely find a number of Eggs. If you are not starving, you should save these to make the highly nutritious Bacon and Eggs with a Cooking Grill.</Text>

        <Text>It is not recommended to eat them raw, as they give little increase to fullness.</Text>

        <Text>You can cook raw Eggs with Bottled Water at a Campfire that has a Cooking Pot to create a Boiled Egg.</Text>

        <Text>You can save Old Sham Sandwiches to make into Antibiotics later on.</Text>

        <Text>Try not eat any food that causes dysentery, including Raw Meat, Old Sham Sandwich, and Rotting Flesh. Try to find a better food source before fullness becomes a problem.</Text>

        <Text>If you have something that heals dysentery, such as Golden Rod Tea, it is safe to eat Old Sham Sandwiches if you're in a pinch. Just be mindful of your health meter.</Text>

        <Text>Be sure to check the kitchen area in houses as they often contain some food. Note that getting to them early on might be risky.</Text>

        <Text>Refrigerators could contain Bottled Water and Meat Stew.</Text>

        <Text>Canned food and Coffee is commonly found in cupboards.</Text>

        <Text>Sinks often hold useful items such as Short Iron Pipes and Glass Jars, sometimes even a Wrench.</Text>

        <Text>The Oven is known to be a good place to find a Cooking Pot, essential in the cooking of boiled food.</Text>

        <Text>Growing crops is a multi-day plan (see Farming). If you intend to stay around in a specific area it might be a good plan to create a vegetable farm for crops such as corn, potatoes, coffee, etc.</Text>


        <Text>Other Helpful Tips:</Text>
        <Text>Don't waste your gun ammo too soon, there are other ways of killing zombies.</Text>

        <Text>Always aim for a headshot with the pistol, but if you have a Shotgun, torso shots are just as effective and are easier to land while being further away than if you aimed at the head.</Text>

        <Text>You can lure a group of Zombies to a car or Oil Barrel and shoot it, causing it to explode. This will kill any Zombies standing close by. However, in some cases, the ammo used to explode a car may be more than the ammo used to kill the Zombies.</Text>

        <Text>Buildings tend to have Zombies inside; others can be found in the vicinity. The more urban the area, such as cities, the more Zombies. Use sneak to bypass them.</Text>

        <Text>Don't enter a building if you spot several Zombies about outside!</Text>

        <Text>If you can't lure zombies out easily, don't waste time trying. Search the surrounding area instead.</Text>

        <Text>Take all you can find then run away as fast as you possibly can.</Text>

        <Text>Prioritize certain resources over others that are already common to save inventory space.</Text>

        <Text>Gun Safes, Desk Safes and Munitions Boxs are prized containers. Furthermore, they tend to contain the best loot in the game - Weapons.</Text>

        <Text>Note that it is not important to have a large amount of the same weapon, what is important is the Ammunition it requires and Repair Kits to keep it in first-rate condition.</Text>

        <Text>If you enter a light green area, it means you are exiting the Navezgane map and you will take damage if you continue in that direction; this is the Nuclear Fallout Zone. (Does not apply to Random World Generation.)</Text>

        <Text>Don't waste too much space storing water, a stack of ten Bottled Water is more than enough for any outing.</Text>

        <Text>Should you fail to find a gun, craft a Primitive Bow.</Text>


        <Text>Game Stages:</Text>
        <Text>Early Game:</Text>
        <Text>Early game is when the player's Character has just spawned for the first time with simple starting items on their Toolbelt: Bottled Water, First Aid Bandage, Can of Chili and Land Claim Block (Multi-player) are provided. Players are typically found scavenging at this point, looking for any useful resources and weapons. At this level of gameplay, death is common and contact with Zombies is kept to a minimum.</Text>

        <Text>Players in the early game are recommended to minimize contact with Zombies and to start hoarding resources for base construction. Some players can opt to go for the nomadic approach, getting just enough resources to build small outposts and keeping the rest of the slots for valuable loot, all the while moving across the map.</Text>

        <Text>The Stone Axe is an all-purpose tool that can do practically everything: dig (dirt, sand and snow), mine (stone), chop (wood) or kill (enemies). Be sure to build this as soon as possible.</Text>

        <Text>Spawning in a snow biome when it's raining however is extremely hazardous and will drain a survivors core temperature at an alarming rate, and extended periods in such environments can heavily debilitate or even KILL eager starters if they don't get out of there quick. Depending on where a survivor spawns, it may just be wise to get out of the current Biome/area they are in. Desert or Plains Biomes aren't as bad, but the former can overheat a survivor if left unchecked so if you're having trouble in the desert try crafting a hat and a bandana as soon as possible.</Text>

        <Text>The Primitive Bow is a cheap but deadly Weapon. One shot to the head usually kills most Zombies. The bow is also a silent weapon and attracts less attention than firearms. Try to kill single zombies in melee combat before you fire to conserve ammo. In larger groups a strategy is to take out the most dangerous ones like the Bloated Walker from the distance.</Text>

        <Text>If need be, use Stone to seal off the entrance to a building (furniture can also be used in this aspect as well as frames, cobble blocks, etc.) to delay Zombies. They do not last long but they can hold Zombies off for long enough for you to run or do some scavenging.</Text>

        <Text>Stamina is an important feature. Always try to keep it up. Stamina can be replenished quickly by drinking. Stamina is limited by your Fullness and Hydration meter.</Text>

        <Text>Players should not look to build big bases immediately - start small and then go big (a good early game base is a 5x5 hut with a 3-block wide trench with spikes at the bottom it will last quite a bit, you can also build an under the ground base which is also effective early game don't Depend on resources you don't have however such as steel, cement, etc).</Text>

        <Text>If you have some spare time, gather more wood and use it to make lots of clubs, or use small stones and feathers to make more arrows. Not only will this give survivors more ammunition early game, but it will also act to increase the level and quality of your weapons! Be sure to have a chest nearby for swiftly emptying your inventory of clubs. Even at lower quality levels, you'll be able to kill zombies more effectively, and with less ammunition.</Text>

        <Text>There are a few factories and a hospital on the standard map. Don't try and raid these high-value locations during the Early Game or the loot available will not be as high quality. It is important to invest experience in looting before attempting to loot locations such as the gun factory, food factory, school, skyscraper etc.(note that in these areas all zombies can spawn including the ones that come later in game such as ferals and radiated). If you do decide to risk an outing, bring friends or powerful gear - you will need it!</Text>

        <Text>Another way to get a house in the Early Game is to take over the house you spawn by repairing it up and you get a decent shelter it is quite useful for blood moons (if you don't wanna risk your base)</Text>

        <Text>Keep an eye out for pallets covered in blue tarp or pallets with cement bags on them. In houses they are commonly found in basements and attics. Destroying them with a shovel gives you cobblestone rocks and cement respectively, which will be needed later on to upgrade blocks.</Text>


        <Text>Mid Game:</Text>
        <Text>Mid game is when players have a decent base set up with an adequate stockpile of food and water, along with Weapons (but not necessarily the ammo). Players should be able to fend off some attacking hordes, though they are still a big problem. Mining and Farming becomes more common, but so is hunting for resources and animals (or players in Survival MP).</Text>

        <Text>Players in the mid-game stage are typically not constrained by anything and are free to either explore or to stay at their base. They can choose to farm resources to fortify their base, shift their base to another location, or to stake out popular scavenging areas like Gravestown, Diersville or Ghost Town.</Text>

        <Text>Keep a stack of Repair Kits handy, they are useful for repairing your tools when needed. Repairing a tool is much more cost-efficient than making a new one.</Text>

        <Text>Once you get a Workbench, you can start crafting Ammunition. A Forge is required, as well as some amount of brass, lead, and gunpowder. Items that can be scrapped into brass and lead are fairly common loot. Shotgun Shells don't require brass, and are thus easier to craft.</Text>

        <Text>If you find yourself running out of stamina very quickly, try brewing some Coffee. It gives a periodic energy boost which helps keep your Stamina full.</Text>

        <Text>Consider making Corn and Potato farms so as to kick-start your Stew making.</Text>

        <Text>If your mine entrance can be accessed directly from your base, be sure to place a secure Door to act as a checkpoint, so that others cannot enter your dwelling without permission should they dig into your mine.</Text>

        <Text>Store shelves are a great way to get quick Iron. Each shelf is worth 4x Iron and breaks quickly depending on your Pickaxe level.</Text>

        <Text>At this point in game, it is recommended to start going into factories. The gun factory for example easily contains over 1000 concrete mix/cobblestone. However, don't go to the roof as that's more of a late game area. It is recommended to have full steel armor before trying to raid these buildings, which are already problematic as most of these buildings are in the middle of a city, meaning more/stronger zombies will be wandering outside.</Text>


        <Text>Late Game:</Text>
        <Text>Late game is when players have a fort-like base set up which is difficult to break into, and becomes nearly completely independent for resources. Food, water, medicine, ammo and building supplies will be stocked to the brim, with top quality tools like the Auger and the Chainsaw in the player's hands. Sniper Rifles and SMGs will most likely be the player's most common Weapon. At this point Zombies will no longer be a problem, neither will resources. This is the stage of the game when the player has the most control of his surroundings on the Map Menu.</Text>

        <Text>Players at the later game stage have much more freedom in the game. Resources should be available.</Text>
      </ScrollView>
    );
  }

export default StartingGuide;