import React, {Component} from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { dishes } from '../shared/dishes';
import { comments } from '../shared/comments';
import { addFavorites } from '../redux/ActionCreators';

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
    };
  }

  static navigationOptions = {
    title: 'Meal Details'
  }

  markFavorite = (dishId) => {
    props.addFavorites(dishId);
  }

  render(){
    const dishId = this.props.navigation.getParam('dishId')
    return (
      <ScrollView>
        <RenderDish
          favorite={props.favorites.some(itemId => itemId === dishId)}
          onPress={this.markFavorite}
          dish={this.state.dishes[+dishId]}
        />
        <RenderComments comments={comments.filter(comment => comment.dishId === dishId)} />
      </ScrollView>
    );
  }
};

const mapStateToProps = state => ({
  favorites: state.favorites.favorites,
});

export default connect(mapStateToProps, { addFavorites })(DishDetail);
