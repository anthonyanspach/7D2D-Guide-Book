{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function FoodDrinksScreen({ navigation }) {
    return (
      <View>
        <Text>Food Categories</Text>

        <Text>Description:</Text>
        <Text>Food/Cooking is a major survival mechanic in 7 Days to Die. Consuming food/drink grants Fullness, which restores Max Stamina. Without periodic consumption of food/drink, hunger and thirst debilitate the player, slowing movement/action speed and eventually causing death. The player can consume both food and drinks over their respective bars but they are drained fast. The amount representing 20% of both bars are depleted at a slower pace, making the player able to utilize 120% of both food and hydration bar with good efficiency.</Text>
        
        <Button title="Ingredients" onPress={() => navigation.navigate('IngredientsScreen')} />
        <Button title="Canned Foods" onPress={() => navigation.navigate('CannedFoodsScreen')} />
        <Button title="Cooked Foods" onPress={() => navigation.navigate('CookedFoodsScreen')} />
        <Button title="Drinks" onPress={() => navigation.navigate('DrinksScreen')} />
      </View>
    );
  }

export default FoodDrinksScreen;