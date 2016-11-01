import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        backgroundColor: 'azure'
    },
    input: {
        width: 250,
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
        textAlign: 'center',
        alignSelf: 'center'
    },
    buttonContainer: {
        justifyContent: 'center',
        height: 50,
        width: 250,
        marginTop: 10,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5
    },
    button: {
        textAlign: 'center'
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
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        margin: 4,
        borderRadius: 5
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
