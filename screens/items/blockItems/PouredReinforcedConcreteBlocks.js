{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function PouredReinforcedConcreteBlocksItem({ navigation }) {
    return (
      <View>
        <Text>Poured Reinforced Concrete Block Info</Text>

        <Text>Description:</Text>
        <Text>Poured Reinforced Concrete Blocks is a unique block type that can be obtained by upgrading Concrete Blocks. After being upgraded to they will automatically upgrade to Reinforced Concrete Blocks after approximately 20 minutes of real time. These blocks look exactly the same a Wet Concrete Blocks but take longer to pass through their wet phase and become Reinforced Concrete Blocks on average.</Text>

        <Text>Crafting:</Text>
        <Text>1 Concrete Block</Text>
        <Text>10 Concrete Mix</Text>
      </View>
    );
  }

export default PouredReinforcedConcreteBlocksItem;