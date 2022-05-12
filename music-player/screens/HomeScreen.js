import React from "react";
import {
  ScrollView,
  Button,
  View,
  Text,
  StyleSheet,
  Image
} from "react-native";

import { connect } from "react-redux";
import { removeTrack } from "../actions/ActionCreators";

const mapStateToProps = (state) => {
  const { tracks } = state;
  return { tracks };
}

const mapDispatchToProps = { 
  removeTrack
}

class HomeScreen extends React.Component {
  render(){
    return (
      <ScrollView style={styles.container}>
        <View style={styles.breakLine}>
          <Text style={{fontSize: 25}}>----------Home Page----------</Text>
        </View>
        
        {
          this.props.tracks.map((t) => 
            <View key={t.id} style={styles.trackstyle}>
              <Image source={{uri: t.imageSource}} style={styles.imageStyle} />
              <Text style={styles.text}>{t.title}</Text>
              <View style={styles.buttonStyle}>
                <Button title="-"
                  onPress={() => this.props.removeTrack(t)} />
              </View>
            </View>)
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  breakLine: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#cafaee' 
  },
  trackstyle: {
    backgroundColor: '#fffcbb',
    marginTop: 7,
    marginLeft: 26,
    marginRight: 26,
    height: 60,
    justifyContent: 'center',
    display: 'flex', 
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonStyle: {
    width: 40,
    height: 40,
    marginStart: 'auto',
    marginRight: 15
    
  },
  text: {
      fontSize: 20,
      marginTop: 0,
      height: 26,
      marginLeft: 26,
      marginRight: 26,
      alignItems: 'center',
      justifyContent: 'center',
  },
  imageStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 15,
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
