import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
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
          onPress: () => this.props.removeFavorite(item.id)
        }
      ];

      return (
        <Swipeout right={rightButton} autoClose={true}>
          <ListItem
            key={index}
            title={item.name}
            subtitle={item.description}
            hideChevron={true}
            onPress={() => navigate('DishDetail', { dishId: item.id })}
            leftAvatar={require('./images/uthappizza.png')}
          />
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