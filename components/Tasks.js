import React from "react";
import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native'
const Task = (props) => {
return(
    <View style={styles.item}>
        <View style ={styles.itemleft} ></View>
            <TouchableOpacity style={styles.cir}></TouchableOpacity>
            <Text style ={styles.itemtext}>{props.text}</Text>

    </View>
)
}
const styles = StyleSheet.create({
    item:{
        backgroundColor: '#D8BFD8',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,

    },
    itemleft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexwrap: 'wrap'

    },
    cir:{
        width: 24,
        height: 24,
        backgroundColor: '#FFF',
        borderColor: '#FFE4E1',
        borderWidth:4,
        borderRadius: 12,
        apacity: 0.4,
        marginRight: 15,

    },
    itemtext:{
        maxWidth: '80%',
    },

})

export default Task;

