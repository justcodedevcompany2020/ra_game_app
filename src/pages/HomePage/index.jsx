import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import VerticalCarousel from '../../components/slider';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const HomePageScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/img/homepage/3533.png')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.main}>
          <View style={styles.imgs_div}>
            <Image
              style={{width: 250, height: 310}}
              source={require('../../assets/img/homepage/Frame17.png')}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('LevelScreenFirst')}>
              <Image
                style={{width: 150, height: 150}}
                source={require('../../assets/img/homepage/Frame18.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('LevelScreen');
              }}>
              <Image
                style={{width: 150, height: 150, marginLeft: 20}}
                source={require('../../assets/img/homepage/Frame19.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgs_div: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
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
