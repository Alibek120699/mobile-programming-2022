import React from "react";
import {
  ScrollView,
  Button,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { connect } from "react-redux";
import Friend from "../components/Friend";
import { removeFriend } from "../actions/ActionCreators";
 
const mapStateToProps = (state) => {
  const { friends } = state;
  return { friends };
}

const mapDispatchToProps = {
  removeFriend
}

class FriendsScreen extends React.Component {
  render(){
    return (
      <ScrollView style={styles.container}>
        <View style={styles.breakLine}>
          <Text style={{fontSize: 25}}>----------Tracks----------</Text>
        </View>
        {
          this.props.friends.length>0 && this.props.friends.map(f => 
            <View key={f.id}>
              <Friend
                username={f.username}
                remove={() => this.props.removeFriend(f)} />
              <View style={styles.btnStyle}>
                <Button
                  title="Go to Profile"
                  onPress={ 
                    () => {
                      this.props.navigation.navigate('Profile', {
                        userName: f.username,
                        ava: f.ava,
                        tracks: f.tracks
                      });
                    } 
                  }
                />
              </View>
            </View>
          )
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cafaee'
  },
  friendsStyle: {
    flex: 2,
    backgroundColor: '#ffffff'
  },
  breakLine: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  btnStyle: {
    marginBottom: 20,
    marginRight: 60,
    marginLeft: 60,
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendsScreen);