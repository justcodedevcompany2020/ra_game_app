import {Image, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {LevelWrapper} from '../../../components/LevelWrapper';

import {useState, useEffect} from 'react';
import {NumberButton} from '../../../components/NumberBuuton';

export const LevelFirst1_1 = ({navigation}) => {
  const [disable, setDisable] = useState(false);
  const [number, setNumber] = useState('');
  const button = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  const [count, setCount] = useState(0);
  const [el, setEl] = useState([
    {
      img: require('../../../assets/img/_LEVEL1/level1First/game1/ketchup.png'),
      width: 58,
      height: 82,
      bottom: -170,
      left: 0,
      isFood: true,
    },
    {
      img: require('../../../assets/img/_LEVEL1/level1First/game1/automobile.png'),
      width: 90,
      height: 63,
      bottom: -50,
      left: 30,
      transform: true,
      isFood: false,
    },
    {
      img: require('../../../assets/img/_LEVEL1/level1First/game1/milk.png'),
      width: 85,
      height: 121,
      bottom: -180,
      left: 70,
      isFood: true,
    },
    {
      img: require('../../../assets/img/_LEVEL1/level1First/game1/drosh.png'),
      width: 97,
      height: 120,
      bottom: -90,
      left: 130,
      isFood: false,
    },
    {
      img: require('../../../assets/img/_LEVEL1/level1First/game1/leave.png'),
      width: 90,
      height: 126,
      bottom: -200,
      left: 170,
      isFood: false,
    },
    {
      img: require('../../../assets/img/_LEVEL1/level1First/game1/klubok.png'),
      width: 135,
      height: 96,
      bottom: -70,
      left: 260,
      isFood: false,
    },
    {
      img: require('../../../assets/img/_LEVEL1/level1First/game1/potato.png'),
      width: 111,
      height: 130,
      bottom: -200,
      left: 280,
      isFood: true,
    },
    {
      img: require('../../../assets/img/_LEVEL1/level1First/game1/cheese.png'),
      width: 114,
      height: 80,
      bottom: -70,
      left: 390,
      isFood: true,
    },
    {
      img: require('../../../assets/img/_LEVEL1/level1First/game1/icecream.png'),
      width: 100,
      height: 142,
      bottom: -200,
      left: 400,
      transform: true,
      isFood: true,
    },
    {
      img: require('../../../assets/img/_LEVEL1/level1First/game1/taxtak.png'),
      width: 110,
      height: 78,
      bottom: -70,
      left: 510,
      isFood: false,
    },
  ]);

  const hideElement = index => {
    console.log('Index to hide:', index);
    if (count != number) {
      setEl(prevEl => {
        const updatedEl = prevEl.filter((_, i) => i !== index);
        console.log('Updated elements:', updatedEl);
        setCount(count + 1);
        return updatedEl;
      });
    } else {
      return false;
    }
  };

  useEffect(() => {
    if (count == number) {
      navigation.navigate('LevelFirst1_2');
    }
  }, [count, number]);

  return (
    <LevelWrapper
      paddingTop={20}
      img={require('../../../assets/img/_LEVEL1/level1First/game1/bglv1.png')}
      img2={require('../../../assets/img/_LEVEL1/level1First/game1/33.png')}>
      <View
        style={{
          position: 'relative',
        }}>
        {el.map((value, index) => {
          return (
            <TouchableOpacity
              style={{
                position: 'absolute',
                bottom: value.bottom,
                left: value.left,
                transform: value.transform ? [{rotate: '-45deg'}] : '',
              }}
              onPress={() => {
                if (value.isFood) {
                  hideElement(index);
                }
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
        <View style={styles.blueTrash}>
          <Text style={styles.numberOne}>{number}</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        {button.map((elm, i) => {
          return (
            <NumberButton
              disabled={disable}
              key={i}
              onPress={() => {
                if (elm == '3' || elm == '4' || elm == '5') {
                  setNumber(elm);
                } else {
                  setNumber('');
                }
              }}
              number={elm}
              bc={'#A0CDD466'}
              bg={'#FFFFFF'}
              txtcolor={'#A0CDD4'}
            />
          );
        })}
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberOne: {
    color: '#fff',
    fontFamily: 'Pacifico-Regular',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -18,
    fontSize: 40,
    color: '#AADEE5',
  },
});
