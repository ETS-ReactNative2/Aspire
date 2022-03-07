import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  Switch,
  TouchableOpacity,
} from 'react-native';
import {
  ProgressView
} from "@react-native-community/progress-view";

import WeeklyLimitScreen from '../screens/WeeklyLimitScreen';
import DebitCardScreenNavigator from '../navigation/DebitCardScreenNavigator';
import { Navigator } from '@react-navigation/native';
import { globalStyles } from '../styles/global'

import { useSelector, useDispatch } from 'react-redux';
import { setCardWeeklyLimitEnabled } from '../redux/actions';

const DebitCardScreen = ({navigation}) => {
  const { limit, weeklyLimitEnabled } = useSelector(state => state.cardReducer);
  const dispatch = useDispatch();

  function toggleSwitch() {
    console.log("switch" + !weeklyLimitEnabled);
      dispatch.setCardWeeklyLimitEnabled(!weeklyLimitEnabled);
  }

  return (
    <View style={globalStyles.container}>
        <Text style={styles.header}>
            Debit Card
        </Text>
        <Image
          style={globalStyles.logo}
          source={require('../assets/icons/ic_logo.png')}
        />
        <Text style={styles.balanceTitle}>
          Available Balance
        </Text>
        <View style={styles.acBalanceView}>
          <View style={styles.currencyView}>
            <Text style={styles.currencyText}> S$ </Text>
          </View>
          <Text style={styles.balanceText}> 3,000 </Text>
        </View>

        <View style={styles.featuresView}>
          <View style={styles.spendingLimitView}>
              <View style={styles.spendingLimitProgressView}>
                <Text style={styles.spendingLimitProgressText}>
                  Debit card spending limit
                </Text>
                <Text style={styles.spendingLimitCurrentText}>
                  $345
                </Text>
                <Text style={styles.spendingLimitTotalText}>
                   | {limit}
                </Text>
              </View>
              <ProgressView style={styles.spendingProgressView}
                progressTintColor="#01D167"
                trackTintColor="#01D16715"
                progress={0.3}>
              </ProgressView>
          </View>
          <View style={styles.listView}>
            <FlatList
              data={[
                {
                  type: 'topup',
                  title: 'Top-up account',
                  subtitle: 'Deposit money to your account to use with card',
                  icon: require('../assets/icons/ic_top-up.png'),
                  showToggle: 0,
                },
                {
                  type: 'weeklylimit',
                  title: 'Weekly spending limit',
                  subtitle: 'Your weekly spending limit is S$ ' + limit,
                  icon: require('../assets/icons/ic_weekly-limit.png'),
                  showToggle: 1,
                },
                {
                  type: 'freezecard',
                  title: 'Freeze card',
                  subtitle: 'Your debit card is currently active',
                  icon: require('../assets/icons/ic_freeze-card.png'),
                  showToggle: 1,
                },
                {
                  type: 'getnewcard',
                  title: 'Get a new card',
                  subtitle: 'This deactivates your current debit card',
                  icon: require('../assets/icons/ic_get-new-card.png'),
                  showToggle: 0,
                },
                {
                  type: 'deactivated',
                  title: 'Deactivated cards',
                  subtitle: 'Your previously deactivated cards',
                  icon: require('../assets/icons/ic_deactivated-cards.png'),
                  showToggle: 0,
                },
              ]}
              renderItem={({item}) =>
                <View style={styles.listItemView}>
                  <Image
                    style={styles.listImage}
                    source={item.icon}
                  >
                  </Image>
                  <View style={styles.listItemTitlesView}>
                    <TouchableOpacity
                      onPress={()=> {
                        if(weeklyLimitEnabled && item.type == 'weeklylimit')
                          navigation.navigate("WeeklyLimitScreen")
                      }
                    }>
                      <Text style={styles.listItemTitle}>
                        {item.title}
                      </Text>
                      <Text style={styles.listItemSubtitle}>
                        {item.subtitle}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  {item.type == "weeklylimit" ? (
                    <Switch
                      style={styles.listItemSwitch}
                      trackColor={{ false: "#EEEEEE", true: "#01D167" }}
                      thumbColor={'white'}
                      onValueChange={
                        (value) => dispatch(setCardWeeklyLimitEnabled(value))
                      }
                      value={
                        weeklyLimitEnabled
                      }
                    />
                  ) : null }
                </View>}
            />
          </View>
        </View>
        <View style={styles.hideCardView}>
          <Image
            style={styles.maskImage}
            source={require('../assets/icons/ic_hide-card-number.png')}/>
          <Text style={styles.maskCardText}>
            Hide card number </Text>
        </View>
        <View style={styles.cardView}>
          <Image
            style={styles.aspireLogoImage}
            source={require('../assets/icons/ic_aspire-logo.png')}/>
          <Text style={styles.cardHolderNameText}>
            Mark Henry
          </Text>
          <Text style={styles.cardNumberText}>
            5 6 4 7     3 4 1 1     2 4 1 3     2 0 2 0
          </Text>
          <Text style={styles.validityCvvText}>
            Thru: 1 2 / 2 0        CVV: 4 5 6
          </Text>
          <Image
            style={styles.visaLogoImage}
            source={require('../assets/icons/ic_visa-logo.png')}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    marginTop: 52,
    marginLeft: 24,
    color: 'white',
    fontSize: 24,
    fontFamily: 'Metropolis-Bold',
  },

  balanceTitle: {
    marginTop: 24,
    marginLeft: 24,
    color: 'white',
    fontSize: 14,
    fontFamily: 'Metropolis-Medium',
  },

  acBalanceView: {
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
    color: 'white',
    fontSize: 12,
    fontFamily: 'Metropolis-Bold',
    textAlign: 'center',
  },

  balanceText: {
    marginLeft: 4,
    color: 'white',
    fontSize: 24,
    fontFamily: 'Metropolis-Bold',
    textAlign: 'left',
  },

  hideCardView: {
    backgroundColor: 'white',
    marginTop: 153,
    position: 'absolute',
    right: 0,
    marginRight: 24,
    width: 151,
    height: 44,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    flexDirection: 'row',
  },

  cardView: {
    marginTop: 32,
    marginLeft: 24,
    marginRight: 24,
    height: 220,
    backgroundColor: '#01D167',
    borderRadius: 6,
  },

  maskImage: {
    marginTop: 8,
    marginLeft: 15,
    width: 16,
    height: 16,
  },

  maskCardText: {
    marginTop: 10,
    marginLeft: 6,
    fontSize: 12,
    fontFamily: 'Metropolis-SemiBold',
    color: '#01D167',
    textAlign: 'left',
  },

  aspireLogoImage: {
    marginTop: 24,
    position: 'absolute',
    right: 0,
    marginRight: 21,
    width: 74,
    height: 21,
  },

  cardHolderNameText: {
    marginTop: 69,
    marginLeft: 24,
    color: 'white',
    fontSize: 22,
    fontFamily: 'Metropolis-Bold',
    textAlign: 'left',
  },

  cardNumberText: {
    marginTop: 26,
    marginLeft: 24,
    color: 'white',
    fontSize: 14,
    fontFamily: 'Metropolis-Medium',
    textAlign: 'left',
  },

  validityCvvText: {
    marginTop: 17,
    marginLeft: 24,
    color: 'white',
    fontSize: 13,
    fontFamily: 'Metropolis-Medium',
    textAlign: 'left',
  },

  visaLogoImage: {
    marginTop: 176,
    position: 'absolute',
    right: 0,
    marginRight: 24,
    width: 59,
    height: 20,
  },

  featuresView: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    width: '100%',
    height: '68%',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },

  spendingLimitView: {
    marginTop: 180,
    marginLeft: 24,
    marginRight: 24,
  },

  spendingLimitProgressView: {
    marginTop: 0,
    flexDirection: 'row',
  },

  spendingLimitProgressText: {
    marginTop: 0,
    fontSize: 13,
    fontFamily: 'Metropolis-Medium',
    color: '#222222'
  },

  spendingLimitCurrentText: {
    fontSize: 13,
    fontFamily: 'Metropolis-SemiBold',
    color: '#01D167',
    textAlign: 'right',
    flex: 1,
    marginLeft: 60,
  },

  spendingLimitTotalText: {
    fontSize: 13,
    textAlign: 'left',
    flex: 1,
    fontFamily: 'Metropolis-SemiBold',
    color: '#22222233',
    marginLeft: 5,
  },

  spendingProgressView: {
    marginTop: 8,
    transform: [{ scaleX: 1.0 }, { scaleY: 2.5 }],
    borderRadius: 30,
    height: 15,
  },

  listView: {
    marginLeft: 24,
    marginRight: 24,
    flex: 1,
    paddingTop: 22,
  },

  listItemView: {
    flexDirection: 'row',
  },

  listItemTitlesView: {
    marginLeft: 10,
    flex: 1,
  },

  listImage: {
    width: 32,
    height: 32,
  },

  listItemTitle: {
    color: '#25345F',
    fontSize: 14,
    fontFamily: 'Metropolis-Medium',
    textAlign: 'left',
    marginLeft: 12,
    marginTop: 2,
  },

  listItemSubtitle: {
    margin: 12,
    textAlign: 'left',
    color: '#22222240',
    fontSize: 13,
    fontFamily: 'Metropolis-Regular',
  },

  listItemSwitch: {
    transform: [{ scaleX: 0.75 }, { scaleY: 0.5 }],
    position: 'absolute',
    right: 0,
  },
});

export default DebitCardScreen;
