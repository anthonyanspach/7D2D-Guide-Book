{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function CannedFoodsScreen({ navigation }) {
    return (
      <ScrollView>
        <Text>Canned Foods</Text>

        <Text>Description:</Text>
        <Text>Even though most types of canned food can be used in a recipe later on, consuming them is a rather essential part of early game. Some canned food isn't used in recipes: these include Can of Cat Food, Can of Miso, Can of Pears, Chicken Soup and Chicken Ration.</Text>

        <Button title="Can of Cat Food" onPress={() => navigation.navigate('CanCatFoodItem')} />
        <Button title="Can of Chili" onPress={() => navigation.navigate('CanChiliItem')} />
        <Button title="Can of Dog Food" onPress={() => navigation.navigate('CanDogFoodItem')} />
        <Button title="Can of Miso" onPress={() => navigation.navigate('CanMisoItem')} />
        <Button title="Can of Pasta" onPress={() => navigation.navigate('CanPastaItem')} />
        <Button title="Can of Pears" onPress={() => navigation.navigate('CanPearsItem')} />
        <Button title="Can of Peas" onPress={() => navigation.navigate('CanPeasItem')} />
        <Button title="Can of Salmon" onPress={() => navigation.navigate('CanSalmonItem')} />
        <Button title="Can of Sham" onPress={() => navigation.navigate('CanShamItem')} />
        <Button title="Can of Stock" onPress={() => navigation.navigate('CanStockItem')} />
        <Button title="Can of Tuna" onPress={() => navigation.navigate('CanTunaItem')} />
        <Button title="Chicken Ration" onPress={() => navigation.navigate('ChickenRationItem')} />
        <Button title="Chicken Soup" onPress={() => navigation.navigate('ChickenSoupItem')} />
        <Button title="Lamb Ration" onPress={() => navigation.navigate('LambRationItem')} />
        <Button title="Large Beef Ration" onPress={() => navigation.navigate('LargeBeefRationItem')} />
      </ScrollView>
    );
  }

export default CannedFoodsScreen;