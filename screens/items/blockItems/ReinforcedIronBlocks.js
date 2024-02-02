{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function ReinforcedIronBlocksItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Reinforced Iron Block Info</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>Reinforced Iron Blocks is the upgraded version of Iron Blocks. It can not be crafted using other materials, the only ways to obtain a Reinforced Iron Blocks are through upgrading Iron Blocks or using the Creative Menu. It is not possible to dismantle, scrap or use a Reinforced Iron Blocks as fuel. You can not destroy a Reinforced Iron Blocks, as such because it will simply downgrade at what would be its point of destruction.</Text>

        <Text style={[styles.list]}>Crafting:</Text>
        <Text style={[styles.list]}>1 Iron Block</Text>
        <Text style={[styles.list]}>40 Iron</Text>
      </ScrollView>
    );
  }

export default ReinforcedIronBlocksItem;


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