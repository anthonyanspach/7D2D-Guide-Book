{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function ElectricityScreen({ navigation }) {
    return (
      <ScrollView>
        <Text>Electricy Info</Text>

        <Text>Description:</Text>
        <Text>Electricity allows one to use several new, powered items such as lights, sensors, electric doors and various traps.</Text>

        <Text>Basics:</Text>
        <Text>As a general rule, all connectable electrical items follow a single-in, multi-out rule when connecting engines, banks, traps, lights, switches, and relays together. Only one electrical item can provide power at a time, but all electrical items can transfer power to multiple - but not infinite - items at a time.</Text>

        <Text>Any 2 electrical devices can have at most 10 blocks between the 2 devices in order for them to be connectable using the Wire Tool.</Text>


        <Text>Circuits:</Text>
        <Text>To use powered items you will need a power source and the item. Power sources include battery banks, generator banks, and solar banks. To complete a basic circuit, using the Wire Tool you Right-click the power source to start a wired connection, then you Right-click the powered device (such as a light) to end the connection.</Text>

        
        <Text>Wattage:</Text>
        <Text>Power sources have an amount of wattage they can provide and every electrical item has an amount of wattage it consumes. When calculating the amount of power needed, add up the wattage of all items to be powered (including relays and switches) and make sure your power source provides at least the sum of all items.</Text>


        <Text>Relays:</Text>
        <Text>Circuits can include relays. Relays can extend the range of a wire between devices and they can also be used to organise wiring. There are two types of relays; regular and timer relays. Timer relays activate during specific times of the day, allowing, for example, one to turn the lights on at night.</Text>

        <Text>Each relay consumes wattage from the circuit and must be considered when calculating the amount of wattage needed for the circuit.</Text>

        <Text>Important to know: Relays do not extend signals between motion sensors and other sensor devices, if you chain group of motion sensors to power specific mechanism, any of the sensors will trigger it, and unless you put relay or a switch, it will block out the signal. Placing relays in between sensors to ensure the signal goes through for capturing the target with sensory surfaces (motion sensor must spot target to allow signal to pass through). Relays, any amount (if wattage allows it), can be used in a chain of sensors.</Text>


        <Text>Switches:</Text>
        <Text>Switches include manual switches that players must activate and automated switches, such as the motion sensor, which trigger on events. Switches are used to control when power flows beyond the switch, for example, to manually turn on lights or to turn them on when motion is detected.</Text>

        <Text>Switches can be used to control how much wattage is used by a "resting" circuit. For example; a motion sensor, which uses only 5W, can be used to briefly turn on an auto turret, which uses 15W. This way, when the turret isn't needed, it isn't consuming wattage (a concern when using a Battery Bank). When something triggers the motion sensor, it can turn on the turret.</Text>

        <Text>Each switch has a wattage rating and, like relays must be included in calculating the wattage needed by the circuit.</Text>
      </ScrollView>
    );
  }

export default ElectricityScreen;