import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image} from 'react-native';

const Image1 = require('./assets/imagens/background-image.png');

export default function App() {
  return (
    <View style={styles.container}>
      <View style ={styles.imageContainer}>
          <Image source ={Image1} style={styles.image}/>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  imageContainer:{
    flex: 1,
    paddingTop: 58,
  },
  image:{
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
