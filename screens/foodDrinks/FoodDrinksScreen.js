{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function FoodDrinksScreen({ navigation }) {
    return (
      <View>
        <Text>Food Screen</Text>
        <Button title="Ingredients" onPress={() => navigation.navigate('IngredientsScreen')} />
        <Button title="Canned Foods" onPress={() => navigation.navigate('CannedFoodsScreen')} />
        <Button title="Cooked Foods" onPress={() => navigation.navigate('CookedFoodsScreen')} />
        <Button title="Drinks" onPress={() => navigation.navigate('DrinksScreen')} />
      </View>
    );
  }

export default FoodDrinksScreen;