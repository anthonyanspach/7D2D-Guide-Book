{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function PouredReinforcedConcreteBlocksItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Poured Reinforced Concrete Block Info</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>Poured Reinforced Concrete Blocks is a unique block type that can be obtained by upgrading Concrete Blocks. After being upgraded to they will automatically upgrade to Reinforced Concrete Blocks after approximately 20 minutes of real time. These blocks look exactly the same a Wet Concrete Blocks but take longer to pass through their wet phase and become Reinforced Concrete Blocks on average.</Text>

        <Text style={[styles.list]}>Crafting:</Text>
        <Text style={[styles.list]}>1 Concrete Block</Text>
        <Text style={[styles.list]}>10 Concrete Mix</Text>
      </ScrollView>
    );
  }

export default PouredReinforcedConcreteBlocksItem;


const styles = StyleSheet.create({
  contentContainerStyle: {
    alignItems: 'center',
    paddingBottom: 200,
  },
  container: {
    backgroundColor: 'rgb(20, 20, 20)',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scrollContainer: {
    flex: 1,
    paddingVertical: 10,
    
  },
  text: {
    color: 'red',
    marginBottom: 5,
    marginHorizontal: 5,
  },
  list: {
    color: 'green',
    fontSize: 16,
    fontWeight: 'bold',
  },
  screenHeader: {
    color: 'red',
    fontSize: 35,
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionHeader: {
    color: 'red',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'black',
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 5,
    marginHorizontal: 5,
    marginTop: 5,
    alignItems: 'center',
    height: '7%',
    width: '80%',
  },
  buttonText: {
    color: 'red',
    fontSize: 25,
  },
});