import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Maquiagem from './components/maquiagem'
import Perfumes from './components/perfume'
import Skincare from './components/skincare'
import Home from './components/home'

const Stack = createStackNavigator()

export default function Rota(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name= 'Home' component= {Home}/>
        <Stack.Screen name= 'Skincare' component= {Skincare}/>
        <Stack.Screen name= 'Perfumes' component= {Perfumes}/>
        <Stack.Screen name= 'Maquiagem' component= {Maquiagem}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}