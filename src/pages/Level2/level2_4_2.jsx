import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton'
import { useEffect, useState } from 'react'
import Sound from 'react-native-sound'
export const Level2_4_2 = ({ navigation }) => {
    const item = [
        { icon: <Image style={{ width: 55, height: 40 }} source={require('../../assets/img/butterfly.png')} />, id: 1 },
        { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/kite.png')} />, id: 2 },
        { icon: <Image style={{ width: 120, height: 70 }} source={require('../../assets/img/nest.png')} />, id: 3 },
        { icon: <Image style={{ width: 50, height: 50 }} source={require('../../assets/img/Sun.png')} />, id: 4 },
        { icon: <Image style={{ width: 45, height: 50 }} source={require('../../assets/img/chamomile.png')} />, id: 5 },
        { icon: <Image style={{ width: 100, height: 50 }} source={require('../../assets/img/fox.png')} />, id: 6 },
        { icon: <Image style={{ width: 50, height: 65 }} source={require('../../assets/img/mushroom.png')} />, id: 7 },
        { icon: <Image style={{ width: 90, height: 50 }} source={require('../../assets/img/snail.png')} />, id: 8 },
    ]
    const [selected, setSeletded] = useState([])
    const [selected1, setSeletded1] = useState([])

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


    const Play = (e) => {
        let item = [...selected]
        let item2 = [...selected1]
        if (item.length < 4) {
            if (e.id <= 4) {
                item.push(e)
            }
            else {
                setTimeout(() => {
                    music.play();
                }, 100);
                setTimeout(() => {
                    music.stop()
                }, 2000);
            }
        }
        if (item.length >= 4) {
            if (e.id > 4) {
                item2.push(e)
            }
        }
        setSeletded(item)
        setSeletded1(item2)
    }

    useEffect(() => {
        if (selected.length == 4 && selected1.length == 4) {
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                navigation.navigate('Level2_5')
                musicSuccess.stop()
            }, 2000);
        }
    }, [selected, selected1])
    return <LevelWrapper img2={require('../../assets/img/bg4.png')} img={require('../../assets/img/4bg.png')} jC='center'>
        <View style={styles.wrapper}>
            <View style={styles.blockWrapper1}>
                <View style={styles.block1}>
                    {selected.length >= 1 ?
                        < ImgButton svg={selected[0].icon} border='rgba(240, 129, 67, 0.4)' /> :
                        < ImgButton border='rgba(240, 129, 67, 0.4)' />
                    }
                    {selected.length >= 2 ?
                        < ImgButton svg={selected[1].icon} border='rgba(240, 129, 67, 0.4)' /> :
                        < ImgButton border='rgba(240, 129, 67, 0.4)' />
                    }
                    {selected.length >= 3 ?
                        < ImgButton svg={selected[2].icon} border='rgba(240, 129, 67, 0.4)' /> :
                        < ImgButton border='rgba(240, 129, 67, 0.4)' />
                    }
                    {selected.length >= 4 ?
                        < ImgButton svg={selected[3].icon} border='rgba(240, 129, 67, 0.4)' /> :
                        < ImgButton border='rgba(240, 129, 67, 0.4)' />
                    }
                </View>
                <View style={styles.line}></View>
                <View style={styles.block1}>
                    {console.log(selected1.length)}
                    {selected1.length >= 1 ?
                        < ImgButton svg={selected1[0].icon} border='rgba(240, 129, 67, 0.4)' /> :
                        < ImgButton border='rgba(240, 129, 67, 0.4)' />
                    }
                    {selected1.length >= 2 ?
                        < ImgButton svg={selected1[1].icon} border='rgba(240, 129, 67, 0.4)' /> :
                        < ImgButton border='rgba(240, 129, 67, 0.4)' />
                    }
                    {selected1.length >= 3 ?
                        < ImgButton svg={selected1[2].icon} border='rgba(240, 129, 67, 0.4)' /> :
                        < ImgButton border='rgba(240, 129, 67, 0.4)' />
                    }
                    {selected1.length >= 4 ?
                        < ImgButton svg={selected1[3].icon} border='rgba(240, 129, 67, 0.4)' /> :
                        < ImgButton border='rgba(240, 129, 67, 0.4)' />
                    }
                </View>
            </View>
            <View style={styles.block2}>
                {!selected.some((elm) => elm.id === item[0].id) && <TouchableOpacity style={{ position: 'absolute', left: 250, top: 0 }} onPress={() => Play(item[0])} >
                    {item[0].icon}
                </TouchableOpacity>}
                {!selected.some((elm) => elm.id === item[1].id) && <TouchableOpacity style={{ position: 'absolute', left: 13, top: 53 }} onPress={() => Play(item[1])} >
                    {item[1].icon}
                </TouchableOpacity>}
                {!selected.some((elm) => elm.id === item[2].id) && <TouchableOpacity style={{ position: 'absolute', left: 30, top: 200 }} onPress={() => Play(item[2])} >
                    {item[2].icon}
                </TouchableOpacity>}
                {!selected.some((elm) => elm.id === item[3].id) && <TouchableOpacity style={{ position: 'absolute', left: 200, top: 80 }} onPress={() => Play(item[3])} >
                    {item[3].icon}
                </TouchableOpacity>}
                {!selected1.some((elm) => elm.id === item[4].id) && <TouchableOpacity style={{ position: 'absolute', left: 100, top: 30 }} onPress={() => Play(item[4])} >
                    {item[4].icon}
                </TouchableOpacity>}
                {!selected1.some((elm) => elm.id === item[5].id) && <TouchableOpacity style={{ position: 'absolute', left: 40, top: 130 }} onPress={() => Play(item[5])} >
                    {item[5].icon}
                </TouchableOpacity>}
                {!selected1.some((elm) => elm.id === item[6].id) && <TouchableOpacity style={{ position: 'absolute', left: 150, top: 150 }} onPress={() => Play(item[6])} >
                    {item[6].icon}
                </TouchableOpacity>}
                {!selected1.some((elm) => elm.id === item[7].id) && <TouchableOpacity style={{ position: 'absolute', left: 220, top: 200 }} onPress={() => Play(item[7])} >
                    {item[7].icon}
                </TouchableOpacity>}

            </View>
        </View>
    </LevelWrapper>
}
const styles = StyleSheet.create({
    block1: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    blockWrapper1: {
        width: '60%',
    },
    line: {
        borderWidth: 2,
        borderColor: '#F08143',
        marginVertical: 20,
        borderRadius: 5,
    },
    block2: {
        width: '40%',
        position: 'relative'
    },
    wrapper: {
        flexDirection: 'row'
    }
})