import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';

import Button from './components/Button';
import ImageViewer from './components/ImageViewer';

const Image1 = require('./assets/imagens/background-image.png');

export default function App() {
  return (
    <View style={styles.container}>
      <View style ={styles.imageContainer}>
         < ImageViewer placeholderImageSource={Image1}/>
        </View>
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Escolha uma foto"/>
          <Button label="Use essa foto"/>
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
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
 /* image:{
    width: 320,
    height: 440,
    borderRadius: 18,
  },*/
});
