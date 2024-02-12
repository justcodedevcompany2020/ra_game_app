import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {LevelWrapper} from '../../../components/LevelWrapper';

import {useState} from 'react';
import {NumberButton} from '../../../components/NumberBuuton';

export const LevelFirst1_2 = ({navigation}) => {
  const [disable, setDisable] = useState(false);
  const [isOvalPic, setIsOvalPic] = useState(false);
  const [isAnother, setIsAnother] = useState(false);

  const button = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  const [el, setEl] = useState([
    {
      img: require('../../../assets/img/_LEVEL1/level1First/game2/3.png'),
      width: 50,
      height: 50,
      bottom: -100,
      left: 0,
      isOval: false,
    },
    {
      img: require('../../../assets/img/_LEVEL1/level1First/game2/4.png'),
      width: 70,
      height: 73,
      bottom: -50,
      left: 120,
      transform: true,
      isOval: false,
    },
    {
      img: require('../../../assets/img/_LEVEL1/level1First/game2/5.png'),
      width: 70,
      height: 70,
      bottom: -250,
      left: 170,
      isOval: false,
    },
    {
      img: require('../../../assets/img/_LEVEL1/level1First/game2/6.png'),
      width: 90,
      height: 60,
      bottom: -30,
      left: 20,
      isOval: true,
    },
    {
      img: require('../../../assets/img/_LEVEL1/level1First/game2/7.png'),
      width: 100,
      height: 60,
      bottom: -120,
      left: 170,
      isOval: true,
    },
    {
      img: require('../../../assets/img/_LEVEL1/level1First/game2/8.png'),
      width: 120,
      height: 80,
      bottom: -270,
      left: 260,
      isOval: true,
    },
    {
      img: require('../../../assets/img/_LEVEL1/level1First/game2/9.png'),
      width: 70,
      height: 30,
      bottom: -20,
      left: 280,
      isOval: true,
    },
    {
      img: require('../../../assets/img/_LEVEL1/level1First/game2/10.png'),
      width: 114,
      height: 80,
      bottom: -70,
      left: 390,
      isOval: true,
    },
    {
      img: require('../../../assets/img/_LEVEL1/level1First/game2/11.png'),
      width: 110,
      height: 86,
      bottom: -150,
      left: 500,
      transform: true,
      isOval: true,
    },
    {
      img: require('../../../assets/img/_LEVEL1/level1First/game2/12.png'),
      width: 90,
      height: 70,
      bottom: -150,
      left: 370,
      isOval: false,
    },
    {
      img: require('../../../assets/img/_LEVEL1/level1First/game2/14.png'),
      width: 110,
      height: 78,
      bottom: -70,
      left: 510,
      isOval: false,
    },
    {
      img: require('../../../assets/img/_LEVEL1/level1First/game2/15.png'),
      width: 50,
      height: 50,
      bottom: -90,
      left: 310,
      isOval: false,
    },
    {
      img: require('../../../assets/img/_LEVEL1/level1First/game2/16.png'),
      width: 70,
      height: 78,
      bottom: -270,
      left: 390,
      isOval: false,
    },
    {
      img: require('../../../assets/img/_LEVEL1/level1First/game2/17.png'),
      width: 100,
      height: 90,
      bottom: -180,
      left: 260,
      isOval: false,
    },
    {
      img: require('../../../assets/img/_LEVEL1/level1First/game2/18.png'),
      width: 100,
      height: 90,
      bottom: -130,
      left: 70,
      isOval: false,
    },
  ]);

  const hideElement = index => {
    console.log('Index to hide:', index);
    setEl(prevEl => {
      const updatedEl = prevEl.filter((_, i) => i !== index);
      console.log('Updated elements:', updatedEl);
      return updatedEl;
    });
  };

  return (
    <LevelWrapper
      paddingTop={20}
      img={require('../../../assets/img/_LEVEL1/level1First/game2/2.png')}
      img2={require('../../../assets/img/_LEVEL1/level1First/game2/1.png')}>
      <View>
        {el.map((value, index) => {
          return (
            <TouchableOpacity
              style={{
                position: 'absolute',
                bottom: value.bottom,
                left: value.left,
                // transform: value.transform ? [{rotate: '-45deg'}] : '',
              }}
              onPress={() => {
                // if (value.isOval && isOvalPic) {
                //   hideElementPurple(index);
                // }
                // if(!value.isOval && isAnother){
                //     hideElementPink(index)
                // }
              }}
              key={index}>
              <Image
                style={{
                  width: value.width,
                  height: value.height,
                }}
                source={value.img}
              />
            </TouchableOpacity>
          );
        })}
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => {
            setIsOvalPic(true);
          }}
          style={styles.purple}></TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setIsAnother(true);
          }}
          style={styles.pink}></TouchableOpacity>
      </View>
    </LevelWrapper>
  );
};

const styles = StyleSheet.create({
  blueTrash: {
    width: 70,
    height: 70,
    borderWidth: 4,
    backgroundColor: '#AADEE533',
    borderRadius: 15,
    position: 'absolute',
    bottom: -180,
    right: 0,
    borderColor: '#AADEE5',
  },
  purple: {
    width: 120,
    height: 120,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#CC66CC80',
  },
  pink: {
    width: 120,
    height: 120,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#FFC0CB',
  },
});
