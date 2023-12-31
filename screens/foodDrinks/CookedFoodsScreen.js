{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function CookedFoodScreen({ navigation }) {
    return (
      <ScrollView>
        <Text>Cooked Food Screen</Text>
        <Text>Early Game</Text>
        <Button title="Boiled Egg" onPress={() => navigation.navigate('BoiledEggItem')} />
        <Button title="Boiled Meat" onPress={() => navigation.navigate('BoiledMeatItem')} />
        <Button title="Charred Meat" onPress={() => navigation.navigate('CharredMeatItem')} />
        <Button title="Corn Bread" onPress={() => navigation.navigate('CornBreadItem')} />
        <Button title="Grilled Corn" onPress={() => navigation.navigate('GrilledCornItem')} />
        <Button title="Grilled Meat" onPress={() => navigation.navigate('GrilledMeatItem')} />
        <Text>Mid Game</Text>
        <Button title="Blueberry Pie" onPress={() => navigation.navigate('BlueberryPieItem')} />
        <Button title="Meat Stew" onPress={() => navigation.navigate('MeatStewItem')} />
        <Button title="Pumpkin Bread" onPress={() => navigation.navigate('PumpkinBreadItem')} />
        <Button title="Pumpkin Cheesecake" onPress={() => navigation.navigate('PumpkinCheeseCakeItem')} />
        <Button title="Pumpkin Pie" onPress={() => navigation.navigate('PumpkinPieItem')} />
        <Button title="Steak and Potato Meal" onPress={() => navigation.navigate('SteakPotatoMealItem')} />
        <Button title="Vegetable Stew" onPress={() => navigation.navigate('VegetableStewItem')} />
        <Text>Late Game</Text>
        <Button title="Chili Dog" onPress={() => navigation.navigate('ChiliDogItem')} />
        <Button title="Fish Tacos" onPress={() => navigation.navigate('FishTacosItem')} />
        <Button title="Gumbo Stew" onPress={() => navigation.navigate('GumboStewItem')} />
        <Button title="Hobo Stew" onPress={() => navigation.navigate('HoboStewItem')} />
        <Button title="Sham Chowder" onPress={() => navigation.navigate('ShamChowderItem')} />
        <Button title="Shepards Pie" onPress={() => navigation.navigate('ShepardsPieItem')} />
        <Button title="Spaghetti" onPress={() => navigation.navigate('SpaghettiItem')} />
        <Button title="Tuna Fish Gravy Toast" onPress={() => navigation.navigate('TunaFishGravyToastItem')} />
      </ScrollView>
    );
  }

export default CookedFoodScreen;