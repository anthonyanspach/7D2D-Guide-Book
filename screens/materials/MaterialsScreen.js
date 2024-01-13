{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function MaterialsScreen({ navigation }) {
    return (
      <View>
        <Text>Materials Categories</Text>

        <Text>Decription:</Text>
        <Text>Building Materials includes all of the various materials used in player-constructed structures.</Text>
        
        <Button title="Workstations" onPress={() => navigation.navigate('WorkstationsScreen')} />
        <Button title="Windows" onPress={() => navigation.navigate('WindowsScreen')} />
        <Button title="Terrain" onPress={() => navigation.navigate('TerrainScreen')} />
        <Button title="Stairs" onPress={() => navigation.navigate('StairsScreen')} />
        <Button title="Siding" onPress={() => navigation.navigate('SidingScreen')} />
        <Button title="Lighting" onPress={() => navigation.navigate('LightingScreen')} />
        <Button title="Hatch" onPress={() => navigation.navigate('HatchScreen')} />
        <Button title="Furniture" onPress={() => navigation.navigate('FurnitureScreen')} />
        <Button title="Frames" onPress={() => navigation.navigate('FramesScreen')} />
        <Button title="Fencing" onPress={() => navigation.navigate('FencingScreen')} />
        <Button title="Doors" onPress={() => navigation.navigate('DoorsScreen')} />
        <Button title="Containers" onPress={() => navigation.navigate('ContainersScreen')} />
        <Button title="Blocks" onPress={() => navigation.navigate('BlockItemsScreen')} />
        <Button title="Other" onPress={() => navigation.navigate('OtherScreen')} />
      </View>
    );
  }

export default MaterialsScreen;