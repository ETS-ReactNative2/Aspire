import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  Switch,
  TouchableOpacity,
  Button,
} from 'react-native';

import { globalStyles } from '../styles/global'

class WeeklyLimitScreen extends Component {

  constructor() {
    super();
    this.state = {
      amount: "5,000",
    }
    this.refreshAmount= this.refreshAmount.bind(this);
}
    refreshAmount(value) {
        this.setState({ amount: value })
    }

    render() {
      return (
        <View style={globalStyles.container}>
            <TouchableOpacity onPress={()=>{
              this.props.navigation.goBack()
            }}>

                 <Image style={styles.backImage}
                 source={require('../assets/icons/ic_back.png')}>
                 </Image>
            </TouchableOpacity>
            <Text style={styles.header}>
                Spending limit
            </Text>
            <Image
              style={globalStyles.logo}
              source={require('../assets/icons/ic_logo.png')}
            />

            <View style={styles.featuresView}>

              <View style={styles.descriptionView}>
                  <Image style={styles.decriptionImage}
                  source={require('../assets/icons/ic_analyser.png')}>
                  </Image>
                  <Text style={styles.descriptionText}>Set a weekly debit card spending limit</Text>
              </View>

              <View style={styles.currentLimitView}>
                <View style={styles.currencyView}>
                  <Text style={styles.currencyText}> S$ </Text>
                </View>
                <Text style={styles.limitText}> {this.state.amount} </Text>
              </View>

              <Text style={styles.noteText}>
                Here weekly means the last 7 days - not the calendar week
              </Text>

              <View style={styles.optionsView}>

                <TouchableOpacity style={styles.optionButton}
                onPress={() => this.refreshAmount('5,000')}
                >
                  <Text style={styles.buttonText}>S$ 5,000</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}
                onPress={() => this.refreshAmount('10,000')}
                >
                  <Text style={styles.buttonText}>S$ 10,000</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}
                  onPress={() => this.refreshAmount('20,000')}
                >
                  <Text style={styles.buttonText}>S$ 20,000</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.footerView}>
                <TouchableOpacity style={styles.footerButton}
                  onPress={this.onPress}
                >
                  <Text style={styles.footerButtonText}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
        </View>
      )
    }
}

export default WeeklyLimitScreen;

const styles = StyleSheet.create({
  header: {
    marginTop: 40,
    marginLeft: 24,
    color: 'white',
    fontSize: 24,
    fontFamily: 'Metropolis-Bold',
  },

  backImage: {
    marginTop: 36,
    marginLeft: 24,
    width: 30,
    height: 30,
  },

  featuresView: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    width: '100%',
    height: '77%',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },

  descriptionView: {
    marginTop: 32,
    marginLeft: 24,
    flexDirection: 'row',
  },

  decriptionImage: {
    width: 16,
    height: 16,
  },

  descriptionText: {
    marginLeft: 12,
    textAlign: 'left',
    fontSize: 14,
    color: '#222222',
    fontFamily: 'Metropolis-Medium',
  },

  currentLimitView: {
    marginTop: 15,
    marginLeft: 24,
    flexDirection: 'row',
  },

  currencyView: {
    backgroundColor: '#01D167',
    width: 40,
    height: 22,
    justifyContent: 'center',
    borderRadius: 4,
    alignItems: 'center',
  },

  currencyText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: 'Metropolis-Bold',
    textAlign: 'center',
  },

  limitText: {
    color: '#222222',
    fontSize: 24,
    fontFamily: 'Metropolis-Bold',
    textAlign: 'center',
  },

  noteText: {
    marginLeft: 24,
    marginTop: 25,
    color: '#22222266',
    fontSize: 13,
    fontFamily: 'Metropolis-Regular',
    textAlign: 'left',
  },

  optionsView: {
    marginTop: 32,
    marginLeft: 24,
    marginRight: 24,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  optionButton: {
    backgroundColor: '#01D16710',
    borderRadius: 4,
    padding: 20,
  },

  buttonText: {
    fontSize: 12,
    color: "#01D167",
    fontFamily: 'Metropolis-SemiBold',
  },

  footerView: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 24,
    // marginLeft: 24,
    // marginRight: 24,
    width: '70%',
    alignSelf: 'center',
  },

  footerButton: {
    backgroundColor: '#01D167',
    borderRadius: 34,
    padding: 20,
  },

  footerButtonText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: 'Metropolis-SemiBold',
    textAlign: 'center',
  },
});
