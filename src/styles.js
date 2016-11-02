import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build();

export default EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        backgroundColor: 'azure'
    },
    input: {
        '@media ios': {
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 5
        },
        width: 250,
        height: 50,
        marginTop: 10,
        textAlign: 'center',
        alignSelf: 'center'
    },
    buttonContainer: {
        '@media ios': {
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 5
        },
        '@media android': {
            backgroundColor: 'black'
        },
        justifyContent: 'center',
        height: 50,
        width: 250,
        marginTop: 10
    },
    button: {
        textAlign: 'center',
        '@media android': {
            color: 'white'
        }
    },
    link: {
        marginTop: 10,
        color: 'blue'
    },
    links: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    feedback: {
        textAlign: 'center',
        color: 'red'
    },
    flexContainer: {
        flex: 1,
        backgroundColor: 'azure'
    },
    header: {
        padding: 10,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    body: {
        alignSelf: 'center'
    },
    title: {
        textAlign: 'center'
    },
    mainTitle: {
        fontFamily: 'Elegante-Regular' ,
        fontSize: 50
    },
    row: {
        '@media ios': {
            borderRadius: 5
        },
        borderColor: 'black',
        borderWidth: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        margin: 4
    },
    rowTitle: {
        fontWeight: 'bold'
    },
    list: {
        margin: 20,
        flex: 1,
    },
    detailTitle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    detailSubtitle: {
        textAlign: 'center',
        fontSize: 14
    }
});
