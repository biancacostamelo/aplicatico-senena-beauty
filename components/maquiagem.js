import {
  Image,
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function Maquiagem() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.areaTitulo}>
        <Text style={styles.titulo}>SERENA BEAUTY</Text>
      </View>
      <ScrollView>
        <Text style={styles.titulo2}>Maquiagem</Text>
        <View style={styles.areaVendas}>
          <FlatList
            data={maquiagem}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image style={styles.imagem} source={item.imagem} />
                <View style={styles.infoProduto}>
                  <View>
                    <Text style={styles.tituloPerf}>
                      {item.titulo.toUpperCase()}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.precoperf}>R${item.preco}</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.botao}>
                  <Text style={styles.textBotao}> COMPRAR </Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titulo: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: 600,
  },
  titulo2: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
    color: '#9674a0',
    fontWeight: '500',
  },
  areaTitulo: {
    backgroundColor: '#E8A0BF',
    height: 80,
    display: 'flex',
    justifyContent: 'center',
  },
  areaVendas: {
    display: 'flex',
    backgroundColor: '#FDF4F5',
  },
  card: {
    height: 400,
    backgroundColor: 'white',
    marginBottom: 30,
    padding: 20,
    borderRadius: 30,
    gap: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  imagem: {
    width: '100%',
    height: '70%',
    resizeMode: 'cover',
    borderRadius: 30,
  },
  infoProduto: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 5,
  },
  botao: {
    backgroundColor: '#BA90C6',
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  tituloPerf: {
    fontWeight: 500,
  },
  textBotao: {
    color: 'white',
    fontWeight: 700,
  },
  precoperf: {
    fontWeight: 500,
  },
});

const maquiagem = [
  {
    id: 1,
    titulo: 'Rubro Brilhante',
    imagem: require('../assets/imagensMaquiagem/sombra4.jpg'),
    preco: 50.0,
  },
  {
    id: 2,
    titulo: 'Veludo de Paris',
    imagem: require('../assets/imagensMaquiagem/batom6.jpg'),
    preco: 60,
  },
  {
    id: 3,
    titulo: 'Pó Luz',
    imagem: require('../assets/imagensMaquiagem/iluminador.jpg'),
    preco: 40,
  },
  {
    id: 4,
    titulo: 'Névoa Lavanda',
    imagem: require('../assets/imagensMaquiagem/paleta.jpg'),
    preco: 90,
  },
  {
    id: 5,
    titulo: 'Brilho de Ouro',
    imagem: require('../assets/imagensMaquiagem/batom5.jpg'),
    preco: 100,
  },
  {
    id: 6,
    titulo: 'Sombra da Meia-Noite',
    imagem: require('../assets/imagensMaquiagem/sombra4.jpg'),
    preco: 150,
  },
];
