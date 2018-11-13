import React, {Component} from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { dishes } from '../shared/dishes';
import { comments } from '../shared/comments';

function RenderDish(props){
  const dish = props.dish;

  if(dish){
    return (
      <Card
        featuredTitle={dish.name}
        image={require('./images/uthappizza.png')}
      >
        <Text style={{margin: 10}}>{dish.description}</Text>
        <Icon
          raised
          reverse
          name={props.favorite ? 'heart' : 'heart-o'}
          size={12}
          color='#f50'
          type='font-awesome'
          onPress={props.favorite ? console.log('Already a favorite') : () => props.onPress(dish.id)}
        />
      </Card>
    );
  } else {
    return (
      <View></View>
    );
  }
};

function RenderComments(props){
  const comments = props.comments;

  const renderCommentItem = ({ item, index }) => {
    return (
      <View key={index} style={{margin: 10}}>
        <Text style={{fontSize: 14}}>{item.comment}</Text>
        <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
        <Text style={{fontSize: 12}}>{'--' + item.author + ', ' + item.date}</Text>
      </View>
    );
  }

  return (
    <Card title='Comments'>
        <FlatList
          data={comments}
          renderItem={renderCommentItem}
          keyExtractor={item => item.id.toString()}
        />
    </Card>
  );
};

class DishDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes,
      comments,
      favorites: []
    };
  }

  static navigationOptions = {
    title: 'Meal Details'
  }

  markFavorite = (dishId) => {
    this.setState({favorites: this.state.favorites.concat(dishId)});
  }

  render(){
    const dishId = this.props.navigation.getParam('dishId')
    return (
      <ScrollView>
        <RenderDish
          favorite={this.state.favorites.some(itemId => itemId === dishId)}
          onPress={this.markFavorite}
          dish={this.state.dishes[+dishId]}
        />
        <RenderComments comments={comments.filter(comment => comment.dishId === dishId)} />
      </ScrollView>
    );
  }
};

export default DishDetail;
