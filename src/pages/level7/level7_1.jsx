import { Image, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton'
import { useEffect, useState } from 'react'
import Sound from 'react-native-sound'

export const Level7_1 = ({ navigation }) => {
    const music = new Sound('ding.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });
    const musicSuccess = new Sound('success.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });
    const [game1, setGame1] = useState(0)
    const lollipop = [
        { icone: <Image style={{ width: 30, height: 70 }} source={require('../../assets/img/level7/candy4.png')} />, id: 5, active: false },
        { icone: <Image style={{ width: 30, height: 70 }} source={require('../../assets/img/level7/candy3.png')} />, id: 4, active: false },
        { icone: <Image style={{ width: 30, height: 70 }} source={require('../../assets/img/level7/candy1.png')} />, id: 2, active: false },
        { icone: <Image style={{ width: 30, height: 70 }} source={require('../../assets/img/level7/candy5.png')} />, id: 6, active: false },
        { icone: <Image style={{ width: 30, height: 70 }} source={require('../../assets/img/level7/candy2.png')} />, id: 3, active: false },
        { icone: <Image style={{ width: 30, height: 70 }} source={require('../../assets/img/level7/candy0.png')} />, id: 1, active: false },
    ]
    const [arr, setArr] = useState([
        { icone: <Image style={{ width: 50, height: 65 }} source={require('../../assets/img/level7/cup4.png')} />, id: 5, active: false },
        { icone: <Image style={{ width: 50, height: 65 }} source={require('../../assets/img/level7/cup3.png')} />, id: 4, active: false },
        { icone: <Image style={{ width: 50, height: 65 }} source={require('../../assets/img/level7/cup1.png')} />, id: 2, active: false },
        { icone: <Image style={{ width: 50, height: 65 }} source={require('../../assets/img/level7/cup5.png')} />, id: 6, active: false },
        { icone: <Image style={{ width: 50, height: 65 }} source={require('../../assets/img/level7/cup2.png')} />, id: 3, active: false },
        { icone: <Image style={{ width: 50, height: 65 }} source={require('../../assets/img/level7/cup0.png')} />, id: 1, active: false },
    ])
    const [answer, setAnswer] = useState([
        { icone: '', id: '' },
        { icone: '', id: '' },
        { icone: '', id: '' },
        { icone: '', id: '' },
        { icone: '', id: '' },
        { icone: '', id: '' },
    ])
    const Game = (id, icone, i) => {
        let item = [...arr]
        let temp = [...answer]
        for (let i = 0; i < temp.length; i++) {
            if (temp[i].id == '') {
                temp[i].id = id
                temp[i].icone = icone
                break
            }
        }
        item[i].active = true

        temp.map((elm, i) => {
            if (temp[i].id != '' && temp[i].id != i + 1) {
                temp.map((elm, i) => {
                    elm.id = ''
                    elm.icone = ''
                })
                item.map((elm, i) => {
                    elm.active = false
                })
                setTimeout(() => {
                    music.play();
                }, 100);
                setTimeout(() => {
                    music.stop()
                }, 2000);
            }
        })
        setAnswer(temp)
        setArr(item)
    }

    useEffect(() => {
        let win = true
        arr.map((elm, i) => {
            if (!elm.active) {
                win = false
            }
        })
        if (win) {
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                setGame1(game1 + 1)
                if (game1 === 1) {
                    // navigation.navigate('Level3_6')
                }
                musicSuccess.stop()
            }, 2000);
        }
    }, [arr])

    useEffect(() => {
        if (game1 == 1) {
            setArr(lollipop)
            setAnswer([
                { icone: '', id: '' },
                { icone: '', id: '' },
                { icone: '', id: '' },
                { icone: '', id: '' },
                { icone: '', id: '' },
                { icone: '', id: '' },
                { icone: '', id: '' },
            ])
        }


    }, [game1])

    return <LevelWrapper img2={require('../../assets/img/1.2bg.png')} img={require('../../assets/img/1.2bgo.png')} >
        <View style={{ justifyContent: 'space-around', height: '100%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 50 }}>
                {answer.map((elm, i) => {
                    return <ImgButton disable={true} key={i} svg={elm.icone} />
                })}
            </View>
            <View style={{ width: '100%', borderWidth: 2, borderColor: '#9C3', borderRadius: 10 }}></View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 50 }}>
                {arr.map((elm, i) => {
                    if (elm.active) {
                        return <View key={i} style={{ width: 90, height: 90 }}></View>
                    }
                    return <ImgButton onPress={() => Game(elm.id, elm.icone, i,)} key={i} svg={elm.icone} />
                })}
            </View>
        </View>
    </LevelWrapper>
}