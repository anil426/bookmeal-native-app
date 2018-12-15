import React, { Component } from "react";
import { View, Platform, Image, StyleSheet, ScrollView, Text } from "react-native";
import { Icon } from 'react-native-elements';
import { createStackNavigator, createDrawerNavigator, DrawerItems, SafeAreaView } from "react-navigation";
import Menu from './Menu';
import Home from './Home';
import Login from './Login';
import About from './About';
import Contact from './Contact';
import Favorites from './Favorites';
import DishDetail from "./DishDetail";
import Reservation from './Reservation';

const MenuNavigator = createStackNavigator({
  Menu: {
    screen: Menu,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <Icon
        name='menu'
        size={24}
        color='white'
        onPress={() => navigation.toggleDrawer()}
      />
    })
  },
  DishDetail: { screen: DishDetail }
}, {
    initialRouteName: 'Menu',
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#512DA8'
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        color: '#ffffff',
      },
      headerLeft: <Icon
        name='menu'
        size={24}
        color='white'
        onPress={() => navigation.toggleDrawer()}
      />
    })
  });

const HomeNavigator = createStackNavigator({
  Home: { screen: Home },
}, {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#512DA8'
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        color: '#ffffff'
      },
      headerLeft: <Icon
        name='menu'
        size={24}
        color='white'
        onPress={() => navigation.toggleDrawer()}
      />
    })
  });

const ContactNavigator = createStackNavigator({
  Contact: { screen: Contact },
}, {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#512DA8',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        color: '#ffffff'
      },
      headerLeft: <Icon
        name='menu'
        size={24}
        color='white'
        onPress={() => navigation.toggleDrawer()}
      />
    })
  });

const LoginNavigator = createStackNavigator({
  Login: { screen: Login }
}, {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
        color: "#fff"
      },
      headerTintColor: "#fff",
      headerLeft: <Icon name="menu" size={24}
        iconStyle={{ color: 'white' }}
        onPress={() => navigation.toggleDrawer()} />
    })
  });

const AboutNavigator = createStackNavigator({
  About: { screen: About },
}, {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#512DA8',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        color: '#ffffff'
      },
      headerLeft: <Icon
        name='menu'
        size={24}
        color='white'
        onPress={() => navigation.toggleDrawer()}
      />
    })
  });

const ReservationNavigator = createStackNavigator({
  Reservation: { screen: Reservation }
}, {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
        color: "#fff"
      },
      headerTintColor: "#fff",
      headerLeft: <Icon name="menu" size={24}
        iconStyle={{ color: 'white' }}
        onPress={() => navigation.navigate('DrawerToggle')} />
    })
  });

const FavoritesNavigator = createStackNavigator({
  Favorites: { screen: Favorites }
}, {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
        color: "#fff"
      },
      headerTintColor: "#fff",
      headerLeft: <Icon name="menu" size={24}
        iconStyle={{ color: 'white' }}
        onPress={() => navigation.navigate('DrawerToggle')} />
    })
  });

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <View style={styles.drawerHeader}>
        <View style={{ flex: 1 }}>
          <Image
            source={require('./images/logo.png')}
            style={styles.drawerImage}
          />
        </View>
        <View style={{ flex: 2 }}>
          <Text style={styles.drawerHeaderText}>Triple 7</Text>
        </View>
      </View>
    </SafeAreaView>
    <DrawerItems {...props} />
  </ScrollView>
);

const MainNavigator = createDrawerNavigator({
  Login: {
    screen: LoginNavigator,
    navigationOptions: {
      title: 'Login',
      drawerLabel: 'Login',
      drawerIcon: ({ tintColor, focused }) => (
        <Icon
          name='sign-in'
          type='font-awesome'
          size={24}
          iconStyle={{ color: tintColor }}
        />
      ),
    }
  },
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      title: 'Home',
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Icon
          name='home'
          type='font-awesome'
          size={24}
          color={tintColor}
        />
      )
    }
  },
  Menu: {
    screen: MenuNavigator,
    navigationOptions: {
      title: 'Menu',
      drawerLabel: 'Menu',
      drawerIcon: ({ tintColor }) => (
        <Icon
          name='list'
          type='font-awesome'
          size={24}
          color={tintColor}
        />
      )
    }
  },
  Reservation:
  {
    screen: ReservationNavigator,
    navigationOptions: {
      title: 'Reserve Table',
      drawerLabel: 'Reserve Table',
      drawerIcon: ({ tintColor, focused }) => (
        <Icon
          name='cutlery'
          type='font-awesome'
          size={24}
          iconStyle={{ color: tintColor }}
        />
      ),
    }
  },
  Favorites:
  {
    screen: FavoritesNavigator,
    navigationOptions: {
      title: 'My Favorites',
      drawerLabel: 'My Favorites',
      drawerIcon: ({ tintColor, focused }) => (
        <Icon
          name='heart'
          type='font-awesome'
          size={24}
          iconStyle={{ color: tintColor }}
        />
      ),
    }
  },
  Contact: {
    screen: ContactNavigator,
    navigationOptions: {
      title: 'Contact Us',
      drawerLabel: 'Contact',
      drawerIcon: ({ tintColor }) => (
        <Icon
          name='address-card'
          type='font-awesome'
          size={22}
          color={tintColor}
        />
      )
    }
  },
  About: {
    screen: AboutNavigator,
    navigationOptions: {
      title: 'About',
      drawerLabel: 'About Us',
      drawerIcon: ({ tintColor }) => (
        <Icon
          name='info-circle'
          type='font-awesome'
          size={24}
          color={tintColor}
        />
      )
    }
  },
}, {
    initialRouteName: 'Home',
    drawerBackgroundColor: '#D1C4E9',
    contentComponent: CustomDrawerContentComponent
  });

class Main extends Component {
  render() {
    return (
      <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
        <MainNavigator />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  drawerHeader: {
    backgroundColor: '#512DA8',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  }
});

export default Main