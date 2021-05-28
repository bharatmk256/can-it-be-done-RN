import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Constants from "expo-constants";
import { FontAwesome } from "@expo/vector-icons";


function SubscriptionScreen() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.title}>
        <Text style={styles.subscriptionText}>Subscription</Text>
        <View style={styles.titleEnd}>
          <Text>Weekly</Text>
          <Text style={styles.price}>RS: 450.00</Text>
        </View>
      </View>
      <View style={styles.listCard1}>
        <Text style={{ fontSize: 20, color: 'white' }} >Netflix</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>RS: 200.00</Text>
      </View>
      <View style={styles.listCard2}>
        <Text style={{ fontSize: 20, color: 'white' }} >Hungama</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>RS: 150.00</Text>
      </View>
      <View style={styles.listCard3}>
        <Text style={{ fontSize: 20, color: 'white' }} >Hotstar</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>RS: 100.00</Text>
      </View>
      <View style={styles.bottomBar}>
        <FontAwesome name='plus' color='white' size={20} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1 },
  title: {
    paddingTop: Constants.statusBarHeight + 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  subscriptionText: {
    fontSize: 20,
  },
  titleEnd: {
    alignItems: 'flex-end'
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  listCard1: {
    borderRadius: 10,
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
    padding: 15,
  },
  listCard2: {
    borderRadius: 10,
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
    padding: 15,
  },
  listCard3: {
    borderRadius: 10,
    backgroundColor: 'purple',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
    padding: 15,
  },
  bottomBar: {
    backgroundColor: 'red',
    position: 'absolute',
    padding: 15,
    bottom: 0,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 30,
    borderRadius: 50,
  }
})

export default SubscriptionScreen
