import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
 
export default function Skincare() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={estilo.cor2}>
          <Text style={estilo.texto}>SereneBeauty</Text>
        </View>
        <Text style={estilo.cor}>SKIN CARE</Text>
        <View style={estilo.fundo}>
          <Image
            style={estilo.tamanho}
            source={require('../assets/imagensSkinCare/skincare01.jpg')}
          />
          <Text style={estilo.texto2}>Esfoliante flocos              R$60</Text>
          <View style={estilo.fundo03}>
            <Text style={estilo.botao}>Confirmar</Text>
          </View>
        </View>
 
 
 
 
        <View style={estilo.fundo}>
          <Image
            style={estilo.tamanho}
            source={require('../assets/imagensSkinCare/skincare02.jpg')}
          />
          <Text style={estilo.texto2}>Serum                           R$20</Text>
          <View style={estilo.fundo03}>
            <Text style={estilo.botao}>Confirmar</Text>
          </View>
        </View>
 
        <View style={estilo.fundo}>
          <Image
            style={estilo.tamanho}
            source={require('../assets/imagensSkinCare/skincare03.jpg')}
          />
          <Text style={estilo.texto2}>Esfoliante melancia            R$60</Text>
          <View style={estilo.fundo03}>
            <Text style={estilo.botao}>Confirmar</Text>
          </View>
        </View>
 
        <View style={estilo.fundo}>
          <Image
            style={estilo.tamanho}
            source={require('../assets/imagensSkinCare/skincare04.jpg')}
          />
          <Text style={estilo.texto2}>Mascara facial                      R$100</Text>
          <View style={estilo.fundo03}>
            <Text style={estilo.botao}>Confirmar</Text>
          </View>
        </View>
 
<View style={estilo.fundo}>
          <Image
            style={estilo.tamanho}
            source={require('../assets/imagensSkinCare/skincare05.jpg')}
          />
          <Text style={estilo.texto2}> Face roller                      R$20</Text>
          <View style={estilo.fundo03}>
            <Text style={estilo.botao}>Confirmar</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
 
const estilo = StyleSheet.create({
  cor2: {
    backgroundColor: '#E8A0BF',
  },
  texto: {
    fontSize: 30,
    textAlign: 'center',
    padding: 30,
    color: 'black',
  },
  fundo: {
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 40,
    padding: 20,
    borderRadius: 40,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 15,
    borderWidth: 5,
    borderColor: '#0000',
  },
  tamanho: {
    height: 300,
    width: '100%',
    borderRadius: 10,
  },
  cor: {
    fontSize: 30,
    marginTop: 20,
    color: '#BA90C6',
    textAlign: 'center',
    marginBottom: -20,
  },
  texto2: {
    fontSize: 24,
    marginTop: 10,
  },
  botao: {
    fontSize: 25,
    color: 'white',
    padding: 10,
    textAlign: 'center',
  },
  fundo03: {
    backgroundColor: '#BA90C6',
    width: '100%',
    marginTop: 20,
    borderRadius: 15,
  },
});