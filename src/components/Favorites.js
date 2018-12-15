import React, { Component } from 'react';
import { FlatList, View, Text, Alert } from 'react-native';
import { ListItem } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';
import Swipeout from 'react-native-swipeout';
import { dishes } from '../shared/dishes';
import { removeFavorite } from '../redux/ActionCreators';

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes,
    };
  }

  static navigationOptions = {
    title: 'My Favorites'
  };

  render() {
    const { navigate } = this.props.navigation;

    const renderMenuItem = ({ item, index }) => {
      const rightButton = [
        {
          text: 'Delete',
          type: 'delete',
          onPress: () => {
            Alert.alert(
              'Delete Favorite?',
              'Are you sure you wish to delete the favorite dish ' + item.name + '?',
              [
                {
                  text: 'Cancel',
                  onPress: () => console.log(item.name + ' was not Deleted'),
                  style: ' cancel'
                },
                {
                  text: 'OK',
                  onPress: () => this.props.removeFavorite(item.id)
                }
              ],
              { cancelable: true }
            );

          }
        }
      ];

      return (
        <Swipeout right={rightButton} autoClose={true}>
          <Animatable.View animation="fadeInRightBig" duration={2000}>
            <ListItem
              key={index}
              title={item.name}
              subtitle={item.description}
              hideChevron={true}
              onPress={() => navigate('DishDetail', { dishId: item.id })}
              leftAvatar={require('./images/uthappizza.png')}
            />
          </Animatable.View>
        </Swipeout>
      );
    };

    // if (this.props.dishes.isLoading) {
    //   return (
    //     <Loading />
    //   );
    // }

    if (this.props.dishes.error) {
      return (
        <View>
          <Text>{this.props.dishes.error}</Text>
        </View>
      );
    }
    else {
      return (
        <FlatList
          data={this.state.dishes.filter(dish => this.props.favorites.favorites.some(el => el === dish.id))}
          renderItem={renderMenuItem}
          keyExtractor={item => item.id.toString()}
        />
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    favorites: state.favorites
  }
};

export default connect(mapStateToProps, { removeFavorite })(Favorites);