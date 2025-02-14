import {
  Image,
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function Perfumes() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.areaTitulo}>
        <Text style={styles.titulo}>SERENA BEAUTY</Text>
      </View>
      <ScrollView>
        <Text style={styles.titulo2}>Perfumes</Text>
        <View style={styles.areaVendas}>
          <FlatList
            data={perfumes}
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

const perfumes = [
  {
    id: 1,
    titulo: 'perfume glow',
    imagem: require('../assets/imagensPerfume/perfume6.jpg'),
    preco: 500,
  },
  {
    id: 2,
    titulo: 'Étoile de Minuit',
    imagem: require('../assets/imagensPerfume/perfume2.jpg'),
    preco: 60,
  },
  {
    id: 3,
    titulo: 'Fleur de Ciel',
    imagem: require('../assets/imagensPerfume/perfume3.jpg'),
    preco: 210,
  },
  {
    id: 4,
    titulo: 'Parfum de Luxe',
    imagem: require('../assets/imagensPerfume/perfume4.jpg'),
    preco: 90,
  },
  {
    id: 5,
    titulo: 'Soleil Enchanté',
    imagem: require('../assets/imagensPerfume/perfume5.jpg'),
    preco: 300,
  },
  {
    id: 6,
    titulo: 'Voile d Amour',
    imagem: require('../assets/imagensPerfume/perfume6.jpg'),
    preco: 150,
  },
  {
    id: 7,
    titulo: 'Nuit Mystique',
    imagem: require('../assets/imagensPerfume/perfume7.jpg'),
    preco: 100,
  },
  {
    id: 8,
    titulo: 'Château de Roses',
    imagem: require('../assets/imagensPerfume/perfume8.jpg'),
    preco: 50,
  },
];
