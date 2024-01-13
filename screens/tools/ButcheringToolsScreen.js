{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function ButcheringToolsScreen({ navigation }) {
    return (
      <View>
        <Text>Butchering Tools</Text>

        <Text>Description:</Text>
        <Text>Butchering Tools are a subset of all the tools used for obtaining additional resources from animal and human remains through butchering.</Text>
        
        <Button title="Bone Knife" onPress={() => navigation.navigate('BoneKnifeItem')} />
        <Button title="Candy Cane Knife" onPress={() => navigation.navigate('CandyCaneKnifeItem')} />
        <Button title="Hunting Knife" onPress={() => navigation.navigate('HuntingKnifeItem')} />
        <Button title="Machete" onPress={() => navigation.navigate('MacheteItem')} />
      </View>
    );
  }

export default ButcheringToolsScreen;