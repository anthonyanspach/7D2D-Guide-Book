{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function DrinksScreen({ navigation }) {
    return (
      <ScrollView>
        <Text>Drinks Screen</Text>
        <Text>Early Game</Text>
        <Button title="Coffee" onPress={() => navigation.navigate('CoffeeItem')} />
        <Button title="Goldenrod Tea" onPress={() => navigation.navigate('GoldenrodTeaItem')} />
        <Button title="Murky Water" onPress={() => navigation.navigate('MurkyWaterItem')} />
        <Button title="Red Tea" onPress={() => navigation.navigate('RedTeaItem')} />
        <Button title="Water" onPress={() => navigation.navigate('WaterItem')} />
        <Button title="Yucca Juice" onPress={() => navigation.navigate('YuccaJuice')} />
        <Text>Mid Game</Text>
        <Button title="Beer" onPress={() => navigation.navigate('BeerItem')} />
        <Button title="Blackstrap Coffee" onPress={() => navigation.navigate('BlackstrapCoffeeItem')} />
        <Button title="Mega Crush" onPress={() => navigation.navigate('MegaCrushItem')} />
        <Button title="Pure Mineral Water" onPress={() => navigation.navigate('PureMineralWaterItem')} />
        <Button title="Yucca Juice Smoothie" onPress={() => navigation.navigate('YuccaJuiceSmoothieItem')} />
        <Text>Late Game</Text>
        <Button title="Grandpa's Awesome Sauce" onPress={() => navigation.navigate('GrandpaAwesomeSauceItem')} />
        <Button title="Grandpa's Fergit'n Elixir" onPress={() => navigation.navigate('GrandpaFergitElixirItem')} />
        <Button title="Grandpa's Learn'n Elixir" onPress={() => navigation.navigate('GrandpaLearnElixirItem')} />
        <Button title="Grandpa's Moonshine" onPress={() => navigation.navigate('GrandpaMoonshineItem')} />
      </ScrollView>
    );
  }

export default DrinksScreen;