import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    bookContainer: {
        paddingTop:15,
        paddingBottom:15,
        paddingLeft:40,
        flexDirection:'row',
    },
    bookImage:{
        marginRight:18
    },
    titleAndAuthor:{
        flexDirection:'column'
    },
    title:{
        fontWeight:'bold',
        fontStyle:'normal',
        color:'#a9a9a9',
        fontSize:17,
    },
    authorContainer:{
        marginTop:5
    },
    author:{
        fontSize:15
    }
})

export default styles;