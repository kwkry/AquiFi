import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import userImage from '../assets/user2.png';
import turbidity from '../assets/turbidity.png';
import rc from '../assets/rc.png';
import ph from '../assets/ph.png';


const HomeScreen = () => {

  // Get the current time
  const currentTime = new Date();
  const hour = currentTime.getHours();
  let greeting;
  // Determine the greeting based on the time
  if (hour < 12) {
    greeting = 'Good Morning';
  } else if (hour < 18) {
    greeting = 'Good Afternoon';
  } else {
    greeting = 'Good Evening';
  }

  const userName = 'User !';

  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentTime.toLocaleDateString(undefined, dateOptions);

  return (
    <View style={styles.container}>
      <View style={styles.frame}>
        <View style={styles.accent}>
          {/* Icon */}
          <View style={styles.menuIconContainer}>
            
          </View>
          {/* Date and Greetings */}
          <View style={styles.dateGreetingsContainer}>
            <Text style={styles.date}>{formattedDate}</Text>
            <Text style={styles.greetings}>{greeting}, {userName}</Text>
          </View>
          {/* User Image */}
          <View style={styles.userImageContainer}>
            <Image source={userImage} style={styles.userImage} />
          </View>
        </View>
      </View>

      <View style={styles.fillOut}>

        <View style={styles.topContainers}>
          {/* Container 1 */}
          <Pressable style={styles.containerBox1}>
            <View style={styles.innerContainer}/>
            <Image source={turbidity} style={styles.icon} />
            <Text style={styles.bottomText}>Turbidity</Text>
          </Pressable>
          {/* Container 2 */}
          <Pressable style={styles.containerBox2} >
            <View style={styles.innerContainer}/>
            <Image source={rc} style={styles.icon} />
            <Text style={styles.bottomText}>Residual Chlorine</Text>
          </Pressable>
        </View>

        <View style={styles.bottomContainers}>
          {/* Container 3 */}
          <Pressable style={styles.containerBox3} >
            <View style={styles.innerContainer}/>
            <Image source={ph} style={styles.icon} />
            <Text style={styles.bottomText}>pH</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom: '0%'
  },
  frame: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white', 
    paddingHorizontal: 10,
  },
  accent: {
    flex: 1,
    position: 'absolute', 
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#0B3954', 
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  menuIconContainer: {
    marginTop: 20,
    marginLeft: 10,
  },
  menuIcon: {
    width: 25,
    height: 25,
  },
  dateGreetingsContainer: {
    alignItems: 'flex-start',
    flex: 1,
    marginHorizontal: 10,
    marginTop: 40,
  },
  date: {
    color: 'white',
    fontSize: 12,
  },
  greetings: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  userImageContainer: {
    alignItems: 'flex-end',
    bottom: '85%',
  },
  userImage: {
    width: 70,
    height: 70,
  },
  fillOut: {
    flex: 1,
    position: 'absolute', 
    top: '20%', 
    bottom: '10%',
    left: '7%',
    right: '7%',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  containerBox1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#85A0AF',
    borderRadius: 20,
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 10,
    elevation: 5,
  },
  containerBox2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#85A0AF',
    borderRadius: 20,
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    elevation: 5,
  },
  containerBox3: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#85A0AF',
    borderRadius: 20,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    elevation: 5,
  },
  topContainers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomContainers: {
    alignItems: "center",
    justifyContent: 'space-between',
    flex: 1,
  },
  innerContainer: {
    justifyContent: 'flex-end',
    backgroundColor: '#FAFAFA',
    borderRadius: 20,
    paddingHorizontal: 60,
    paddingVertical: 90,
    position: 'relative', 
  },
  icon: {
    position: 'absolute',
    top: 15, 
    right: 15, 
    width: 30, 
    height: 30, 
  },
  bottomText: {
    color: 'white',
    paddingTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },


});

export default HomeScreen;
