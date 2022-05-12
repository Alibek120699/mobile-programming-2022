import React from "react";
import { Button, View, Text, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";
import { Searchbar } from "react-native-paper";

import { users } from "../storage/users";
import { tracks } from "../storage/tracks";
import { addFriend, addTrack } from "../actions/ActionCreators";

const mapDispatchToProps = {
  addFriend,
  addTrack,
};

class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchItem: "",
    };
    this.handleText = this.handleText.bind(this);
  }

  handleText = (text) => {
    this.setState({ searchItem: text });
  };

  filterTracks = (tr) => {
    return (
      tr.title.toLowerCase().startsWith(this.state.searchItem.toLowerCase()) ||
      tr.artist.toLowerCase().startsWith(this.state.searchItem.toLowerCase())
    );
  };

  filterUsers = (u) =>
    u.username.toLowerCase().startsWith(this.state.searchItem.toLowerCase());

  render() {
    return (
      <ScrollView style={styles.container}>
        <Searchbar
          style={styles.searchbar}
          placeholder="Search"
          onChangeText={(text) => this.handleText(text)}
          value={this.state.searchItem}
        />
        {tracks.filter(this.filterTracks).length > 0 && (
          <View style={styles.breakLine}>
            <Text style={{ fontSize: 25 }}>----------Tracks----------</Text>
          </View>
        )}
        {tracks.filter(this.filterTracks).map((t) => (
          <View key={t.id} style={styles.trackstyle}>
            <View style={styles.textview}>
              <Text style={styles.text}>{t.title}</Text>
              <Text style={styles.artistStyle}>{t.artist}</Text>
            </View>
            <View style={styles.buttonStyle}>
              <Button
                color="steelblue"
                title="+"
                onPress={() => this.props.addTrack(t)}
              />
            </View>
          </View>
        ))}

        {users.filter(this.filterUsers).length > 0 && (
          <View style={styles.breakLine}>
            <Text style={{ fontSize: 25 }}>----------Friends----------</Text>
          </View>
        )}

        {users.filter(this.filterUsers).map((u) => (
          <View key={u.id} style={styles.friendstyle}>
            <View style={styles.friendview}>
              <Text style={styles.friend}>{u.username}</Text>
            </View>
            <View style={styles.buttonStyle}>
              <Button
                color="steelblue"
                title="+"
                onPress={() => this.props.addFriend(u)}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  breakLine: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  textview: {
    display: "flex",
    flex: 2,
    marginTop: 0,
    marginLeft: 15,
    padding: 3,
  },
  container: {
    flex: 1,
    backgroundColor: "#cafaee",
  },
  searchbar: {
    backgroundColor: "#f7f8f8",
  },
  artistStyle: {
    fontSize: 16,
    marginBottom: 0,
    padding: 0,
    height: 20,
  },
  text: {
    height: 50,
    fontSize: 20,
    marginTop: 0,
    height: 26,
  },
  trackstyle: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#f7f7b0",
    margin: 15,
    marginBottom: 5,
    alignItems: "center",
  },
  friendstyle: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#40e0d0",
    margin: 15,
    marginBottom: 5,
    alignItems: "center",
  },
  friend: {
    fontSize: 20,
    marginLeft: 15,
  },
  friendview: {
    marginEnd: "auto",
  },
  buttonStyle: {
    width: 40,
    height: 40,
    marginRight: 15,
    marginTop: 7,
  },
});
export default connect(null, mapDispatchToProps)(SearchScreen);
