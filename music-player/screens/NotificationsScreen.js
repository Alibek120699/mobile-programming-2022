import React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { connect } from "react-redux";
import { 
  readNotification, 
  loadNotifications 
} from "../actions/ActionCreators";
import { ScrollView } from "react-native-gesture-handler";

const mapStateToProps = (state) => {
  const {notifications} = state;
  return {notifications};
}

const mapDispatchToProps = {
  loadNotifications,
  readNotification,
}

class NotificationsScreen extends React.Component {

  render(){
    console.log(this.props.notifications);
    return (

    <ScrollView style={styles.container}>

        <View style={styles.breakLine}>
          <Text style={{fontSize: 25}}>---------Notifications---------</Text>
        </View>
        
        {
          this.props.notifications.length>0 && this.props.notifications.map(n => 
            <View style={{display: 'flex', alignItems: 'center'}} key={n.id}>
              <View style={styles.messageStyle}>
                <Text style={styles.textStyle}>{n.message}</Text>
              </View>
              <Text style={{fontSize: 20}}>{n.isRead}</Text>
              <View style={styles.buttonStyle}>
                <Button style="steelblue"
                //onPress={() => alert(this.props.notifications[n.id-1].message)}
                onPress={() => this.props.readNotification(n)}
                title="Read" />
              </View>
            </View>
          )
        }   
    </ScrollView>
    );
  }

  componentDidMount(){
    this.props.loadNotifications();
  }
}

const styles = StyleSheet.create({
  textStyle: {
    marginLeft: 26,
    marginTop: 10,
    fontSize: 18,
    marginRight: 26
  },
  breakLine: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25
  },
  messageStyle: {
    backgroundColor: "#f7f7b0",
    marginLeft: 26,
    marginRight: 26,
    height: 60,
    marginTop: -15

  },
  container: {
    flex: 1,
    backgroundColor: '#cafaee',
    height: 'auto'
  },
  buttonStyle: {
    width: 80,
    height: 80,
    
  
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsScreen);
