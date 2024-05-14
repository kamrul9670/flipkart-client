

   import { Dataset } from '@mui/icons-material';
import * as actionType from '../constrants/cartConstrant';

  export const cartReducer = (state = { cartItems: [] } , action ) => {
    const getIdx=(dataSet,id)=>{
        let idx = 0
        for(let d of dataSet){
            if(d.id === id) return idx
            idx+=1
        }
        return -1
    }


       switch(action.type) {

    case  actionType.DECREMENT_CART_ITEM :
        const itemm = action.payload ;
        let idx = getIdx(state.cartItems,item.id)
        state.cartItems[idx].quantity -=1
        console.log(state.cartItems[idx].quantity,idx,"kkk2");
        return {...state,cartItems:[...state.cartItems]}

    case  actionType.ADD_TO_CART :
            const item = action.payload ;
            const exist = state.cartItems.find(product => product.id === item.id );
            
            if(exist){
                let idx = getIdx(state.cartItems,item.id)
                if(idx!==-1){
                    console.log(state.cartItems[idx].quantity,idx,"kkk");
                    state.cartItems[idx].quantity +=1
                    console.log(state.cartItems[idx].quantity,idx,"kkk2");
                    return {...state,cartItems:[...state.cartItems]}
                }
                // return { ...state , cartItems : state.cartItems.map(data => data.product === exist.product ? item : data )    }
                } 
            else {
                    
                    return {...state , cartItems : [ ...state.cartItems , item]}
                }
                // console.log("KK",state.cartItems);



          case actionType.REMOVE_FROM_CART : 
             
            return { ...state , cartItems : state.cartItems.filter(product => product.id !== action.payload )}
       
             default :
             return state;

       }



  }