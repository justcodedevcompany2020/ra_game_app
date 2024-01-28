import { Image, ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native"
// Level11_5
export const Selection11 = ({ navigation }) => {
    return <View >
        <ImageBackground source={require('../../assets/img/2.png')} resizeMode="cover" style={styles.image}>
            <View style={{ transform: [{ rotate: '90deg' }], marginTop: -100, }}>
                <TouchableOpacity onPress={() => navigation.navigate('Level11_4')}>
                    <Image style={styles.img} source={require('../../assets/img/4_1.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Level11_3')}>
                    <Image style={styles.img} source={require('../../assets/img/3_1.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Level11_2')}>
                    <Image style={styles.img} source={require('../../assets/img/2_1.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Level11_1')}>
                    <Image style={styles.img} source={require('../../assets/img/1_1.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ transform: [{ rotate: '90deg' }], marginTop: 100, marginLeft: -102 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Level11_8')}>
                    <Image style={styles.img} source={require('../../assets/img/8_1.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Level11_7')}>
                    <Image style={styles.img} source={require('../../assets/img/7_1.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Level11_6')}>
                    <Image style={styles.img} source={require('../../assets/img/6_1.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Level11_5')}>
                    <Image style={styles.img} source={require('../../assets/img/5_1.png')} />
                </TouchableOpacity>
            </View>

        </ImageBackground>
    </View>
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },
    image: {
        width: "100%",
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
    img: {
        width: 100,
        height: 60,
        marginVertical: 40,
        transform: [{ rotate: '-90deg' }]
    }
});