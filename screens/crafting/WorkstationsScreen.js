{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function WorkstationsScreen({ navigation }) {
    return (
      <View>
        <Button title="Campfire" onPress={() => navigation.navigate('CampfireItem')} />
        <Button title="Forge" onPress={() => navigation.navigate('ForgeItem')} />
        <Button title="Workbench" onPress={() => navigation.navigate('WorkbenchItem')} />
        <Button title="Cement Mixer" onPress={() => navigation.navigate('CementMixerItem')} />
        <Button title="Chemistry Station" onPress={() => navigation.navigate('ChemistryStationItem')} />
      </View>
    );
  }

export default WorkstationsScreen;