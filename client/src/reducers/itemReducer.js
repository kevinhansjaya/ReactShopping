import {GET_ITEMS,ADD_ITEM,DELETE_ITEM,ITEMS_LOADING} from '../actions/types';
// import  uuid from 'uuid';
const initialState ={
    // test data
    // items:[
    //     { id: uuid(),name:"steak"},
    //     { id: uuid(),name:"bread"},
    //     { id: uuid(),name:"crackers"},
    //     { id: uuid(),name:"water"}
    // ]
    items:[],
    loading: false
}

export default function(state = initialState,action){
    switch (action.type){
        case GET_ITEMS:
            console.log('return GET_ITEMS in itemReducer');
            return{
                // ...state
                ...state,
                items: action.payload,
                loading:false
            };
        case DELETE_ITEM:
        console.log('reducer delete');
        return{
            ...state,
            // items: state.items.filter(item => item.id !== action.payload)
            items: state.items.filter(item => item._id !== action.payload)
        };
        case ADD_ITEM:
        console.log('reducer add');
        return{
            ...state,
            items:[action.payload,...state.items]
        };
        case ITEMS_LOADING:
        console.log( '3. set loading to true in itemReducer');
        return{
            ...state,
            loading:true
        }
        default:
        return state;
    }
}