import {Dimensions, ImageBackground, StyleSheet, View} from 'react-native';
import Carousel from '../../../components/sliderFirst';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const LevelScreenFirst = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/img/1.png')}
        resizeMode="cover"
        style={styles.image}>
        <Carousel navigation={navigation} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: windowWidth,
    height: windowHeight,
    justifyContent: 'center',
  },
});
