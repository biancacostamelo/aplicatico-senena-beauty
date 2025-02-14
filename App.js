import { SafeAreaView, StyleSheet } from 'react-native';
import {StatusBar} from 'react-native'
import Rotas from './rotas'

export default function App() {
  return (
    <SafeAreaView style= {styles.container}>
      <StatusBar/>
      <Rotas/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF4F5',
  },
});