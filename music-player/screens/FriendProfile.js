import React from "react";
import {
    ScrollView,
    View,
    Text,
    Image,
    Button,
    StyleSheet,
} from "react-native";
import {
    addTrack
} from "../actions/ActionCreators";
import { connect } from "react-redux";

const mapDispatchToProps = {
    addTrack
}

class FriendProfile extends React.Component {
    render(){
        const {navigation} = this.props;
        const userName = navigation.getParam('userName', 'No Name');
        const ava = navigation.getParam('ava', 'No Ava');
        const tracks = navigation.getParam('tracks', []);

        return (
            <ScrollView style={styles.container}>
                <View style={styles.profileStyle}>
                    <Image source={{uri: ava}} style={styles.ava} />
                    <Text style={{fontSize: 25}}>{userName}</Text>
                </View>
                <View style={styles.breakLine}>
                    <Text style={{fontSize: 25}}>----------Tracks----------</Text>
                </View>
                {
                    tracks.map(t => 
                        <View key={t.id} style={styles.trackstyle}>
                            <View style={styles.textview}>
                                <Text style={styles.text}>{t.title}</Text>
                                <Text style={styles.artistStyle}>{t.artist}</Text>
                            </View>
                            <View style={styles.buttonStyle}>
                            <Button color="steelblue" title="+"
                                onPress={() => this.props.addTrack(t)} />
                            </View>
                        </View>
                    )
                }
                <Button 
                    title="Back"
                    onPress={() => this.props.navigation.goBack()} />
            </ScrollView>
        )
    }   
}

export default connect(null, mapDispatchToProps)(FriendProfile);

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#cafaee",
        flex: 1
    },
    ava: {
        width: 200,
        height: 200,
        borderRadius: 100,
        margin: "auto"
    },
    trackstyle: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#f7f7b0',
        margin: 15,
        marginBottom: 5,
        alignItems: 'center'
    },
    textview: {
        display: 'flex',
        flex: 2,
        marginTop: 0,
        marginLeft: 15,
        padding: 3
    },
    breakLine: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    artistStyle: {
        fontSize: 16,
        marginBottom: 0,
        padding: 0,
        height: 20
    },
    text: {
        height: 50,
        fontSize: 20,
        marginTop: 0,
        height: 26
    },
    buttonStyle: {
        width: 40,
        height: 40,
        marginRight: 15,
        marginTop: 7
    },
    profileStyle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginBottom: 20,
    }
})