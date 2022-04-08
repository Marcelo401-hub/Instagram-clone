import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    container:{
       height: '100%',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'space-between',
        
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    userName: {
        color: 'white',
        fontWeight: '600',
        fontSize: 18

    },
    bottomContainer: {
    flexDirection: 'row',
    marginBottom: 12
    },
    textInputContainer: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'white',
        height: 40,
        borderRadius: 20,
        marginHorizontal: 10
    },
    cameraButton: {
        width: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    messageContainer: {
        width: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }

})

export default styles;