import React,{Component} from 'react';
import {Container,ListGroup,ListGroupItem,Button} from 'reactstrap';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import {connect} from 'react-redux';
import {getItems,deleteItem} from '../actions/itemActions';
import PropTypes from 'prop-types';


class ShoppingList extends Component{
    componentWillMount(){
        this.props.getItems();
        console.log('???. Item data loaded from shoppinglist.js');
    }
    onDeleteClick= id =>{
        this.props.deleteItem(id);
    }
    // componentWillReceiveProps(nextProps){
    //     if(nextProps.newPost){
    //         this.props.posts.unshift(nextProps.newPost);
    //     }
    // }
    // state={
    //     items:[
    //         { id: uuid(),name:"steak"},
    //         { id: uuid(),name:"bread"},
    //         { id: uuid(),name:"crackers"},
    //         { id: uuid(),name:"gum"}
    //     ]
    // }
    render() {

        const {items} =  this.props.item;
        return(
          <Container>
              {/* <Button
                color="dark"
                style={{marginBottom:'2rem'}}
                onClick={()=>{
                    const name = prompt('Enter Item');
                    if(name){
                        this.setState(state =>({
                            items:[...state.items,{id:uuid(),name}]
                        }));
                    }
                }}
              >Add Item
              </Button> */}

              <ListGroup  color="dark">
                  <TransitionGroup classname ="shopping-list">
                      {items.map(({_id,name})=>(
                          <CSSTransition key={_id} timeout={500} classNames="fade">
                              <ListGroupItem>
                                  <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={this.onDeleteClick.bind(this,_id)}
                                  >&times;</Button>
                                  {name}
                              </ListGroupItem>
                          </CSSTransition>
                      ))}

                  </TransitionGroup>
              </ListGroup>
          </Container>
        );
    }
}


ShoppingList.propTypes={
    getItems: PropTypes.func.isRequired,
    item : PropTypes.object.isRequired
}

const mapStatetoProps = state => ({
    item: state.item
})
export default connect(
    mapStatetoProps,
    {getItems,deleteItem}
    )(ShoppingList);