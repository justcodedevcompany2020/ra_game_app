import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {LevelWrapper} from '../../../components/LevelWrapper';

import {useState} from 'react';
import {NumberButton} from '../../../components/NumberBuuton';

export const LevelFirst1_3 = ({navigation}) => {
  const [disable, setDisable] = useState(false);
  const [isSecondGame, setIsSecondGame] = useState(false);
  const [name, setName] = useState(null);
  const [selectedElement, setSelectedElement] = useState(null);
  const [clickedElements, setClickedElements] = useState([]);
  const [el, setEl] = useState([
    {
      img: require('../../../assets/img/_LEVEL1/level1First/game3/liqy.png'),
      width: 50,
      height: 110,
      bottom: -270,
      left: 20,
      isOval: 'liqy',
      transform: '-45deg',
    },
    {
      img: require('../../../assets/img/_LEVEL1/level1First/game3/vochliqy.png'),
      width: 50,
      height: 90,
      bottom: -50,
      left: 120,
      transform: true,
      isOval: 'vochliqy',
      transform: '90deg',
    },
    {
      img: require('../../../assets/img/_LEVEL1/level1First/game3/datark.png'),
      width: 50,
      height: 100,
      bottom: -250,
      left: 420,
      isOval: 'datark',
      transform: '-25deg',
    },
    {
      img: require('../../../assets/img/_LEVEL1/level1First/game3/kes.png'),
      width: 50,
      height: 90,
      bottom: -70,
      left: 400,
      isOval: 'kes',
      transform: '45deg',
    },
    {
      img: require('../../../assets/img/_LEVEL1/level1First/game3/liqy1.png'),
      width: 80,
      height: 80,
      bottom: -140,
      left: 50,
      isOval: 'liqy',
      transform: '-45deg',
    },
    {
      img: require('../../../assets/img/_LEVEL1/level1First/game3/qich.png'),
      width: 70,
      height: 90,
      bottom: -200,
      left: 320,
      isOval: 'qich',
      transform: '45deg',
    },
    {
      img: require('../../../assets/img/_LEVEL1/level1First/game3/datark1.png'),
      width: 70,
      height: 70,
      bottom: -110,
      left: 180,
      isOval: 'datark',
      transform: '75deg',
    },
    {
      img: require('../../../assets/img/_LEVEL1/level1First/game3/qich1.png'),
      width: 114,
      height: 80,
      bottom: -140,
      left: 420,
      isOval: 'qich',
      transform: '-25deg',
    },
    {
      img: require('../../../assets/img/_LEVEL1/level1First/game3/vochliqy1.png'),
      width: 110,
      height: 86,
      bottom: -250,
      left: 500,
      isOval: 'vochliqy',
      transform: '45deg',
    },

    {
      img: require('../../../assets/img/_LEVEL1/level1First/game3/kes1.png'),
      width: 110,
      height: 78,
      bottom: -270,
      left: 230,
      transform: true,
      isOval: 'kes',
      transform: '90deg',
    },
    {
      img: require('../../../assets/img/_LEVEL1/level1First/game3/liqy2.png'),
      width: 50,
      height: 90,
      bottom: -90,
      left: 290,
      isOval: 'liqy',
      transform: '-45deg',
    },
    {
      img: require('../../../assets/img/_LEVEL1/level1First/game3/qich2.png'),
      width: 70,
      height: 98,
      bottom: -70,
      left: 500,
      isOval: 'qich',
      transform: '-105deg',
    },
    {
      img: require('../../../assets/img/_LEVEL1/level1First/game3/vochliqy2.png'),
      width: 70,
      height: 100,
      bottom: -220,
      left: 160,
      isOval: 'vochliqy',
      transform: '35deg',
    },
  ]);

  const handleElementClick = (element, index) => {
    setClickedElements((prevClickedElements) => {
      const isElementAlreadyClicked = prevClickedElements.some(
        (clickedElement) => clickedElement.isOval === element.isOval && clickedElement.index === index
      );

      // If element with the same isOval value and the same index already exists, do not add it to the array
      if (isElementAlreadyClicked) {
        return prevClickedElements;
      }

      // Otherwise, add it to the array
      console.log(prevClickedElements)
      return [...prevClickedElements, { ...element, index }];
    });
  };

console.log(clickedElements, 'elements')

  return (
    <LevelWrapper
      paddingTop={20}
      img={require('../../../assets/img/_LEVEL1/level1First/game3/1.png')}
      img2={require('../../../assets/img/_LEVEL1/level1First/game3/2.png')}>
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
                transform: value.transform
                  ? [{rotate: `${value.transform}`}]
                  : '',
              }}
              onPress={() => {
                handleElementClick(value, index);
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
});
