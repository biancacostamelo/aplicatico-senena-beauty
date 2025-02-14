import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
 
export default function Home(props) {
  return (
    <SafeAreaView style={estilo.cor}>
   
        <View style={estilo.cor2}>
          <Text style={estilo.texto}>SereneBeauty</Text>
        </View>
  <ScrollView>
        <ScrollView horizontal>
       
          <Image style={estilo.corte2} source={require('../assets/imagensHome/make.jpg')} />
          <Image style={estilo.corte2} source={require('../assets/imagensHome/face.jpg')} />
          <Image style={estilo.corte2} source={require('../assets/imagensHome/rose.jpg')} />
         
        </ScrollView>
 
        <ScrollView style={estilo.alinhar}>
          <View>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Perfumes');
              }}>
              <Image
                style={estilo.corte}
                source={require('../assets/imagensHome/perfume.jpg')}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={estilo.texto2}>Perfumes</Text>
          </View>
 
          <View>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Maquiagem');
              }}>
              <Image
                style={estilo.corte}
                source={require('../assets/imagensHome/maquiagem.jpg')}
              />
              <View>
                <Text style={estilo.texto2}>Maquiagem</Text>
              </View>
            </TouchableOpacity>
          </View>
 
          <View>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Skincare');
              }}>
              <Image
                style={estilo.corte}
                source={require('../assets/imagensHome/skin.jpg')}
              />
              <View><Text style={estilo.texto2}>Skin Care</Text></View>
              <Text style= {estilo.size}>b</Text>
            </TouchableOpacity>
 
             
          </View>
         
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}
const estilo = StyleSheet.create({
  size:{
    fontSize:100,
    color:'white'
  },
  cor: {
    backgroundColor: '#FDF4F5',
  },
 
  cor2: {
    backgroundColor: '#E8A0BF',
   
 
  },
  texto: {
    fontSize: 30,
    textAlign: 'center',
    padding: 30,
    color:'black',
 
  },
  corte: {
    height: 300,
    width: 300,
    borderRadius: 10,
    marginTop: 50,
  },
  alinhar: {
    alignItems: 'center',
  },
  texto2: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 25,
    backgroundColor: '#BA90C6',
    borderRadius: 5,
    color: 'black',
  },
  corte2: {
    height: 250,
    width: 100,
    borderRadius: 10,
    marginTop: 50,
    padding: 15,
    alignItems:'center',
    marginLeft:30,
 
  },
 
});