{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";



function PouredReinforcedConcreteBlocksItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Poured Reinforced Concrete Block Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Poured Reinforced Concrete Blocks is a unique block type that can be obtained by upgrading Concrete Blocks. After being upgraded to they will automatically upgrade to Reinforced Concrete Blocks after approximately 20 minutes of real time. These blocks look exactly the same a Wet Concrete Blocks but take longer to pass through their wet phase and become Reinforced Concrete Blocks on average.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>1 Concrete Block</Text>
        <Text style={[styles.list]}>10 Concrete Mix</Text>
      </ScrollView>
    );
  }

export default PouredReinforcedConcreteBlocksItem;