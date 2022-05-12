import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
} from "react-native";

export default function Friend(props){
    const {
        username,
    } = props;
    console.log(props.remove);
    return (
        <View style={styles.friendStyle}>
            <Text style={styles.userStyle}>{username}</Text>
            <View style={styles.btnStyle}>
                <Button
                    color='steelblue' 
                    title="X"
                    onPress={() => props.remove()} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    friendStyle: {
        backgroundColor: "#fffcbb",
        display: 'flex',
        flexDirection: 'row',
        marginRight: 26,
        marginLeft: 26,
    },
    btnStyle: {
        marginStart: 'auto',
        marginRight: 15,
    },
    userStyle: {
        fontSize: 25,
        marginLeft: 15,
    }
})
