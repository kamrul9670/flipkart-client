import { useState } from 'react';

import { Button, Box, styled } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { addToCart } from '../../redux/actions/cartActions';








const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('lg')]: {
        padding: '20px 40px'
    }
}))

const Image = styled('img')({
    padding: '15px 20px',
    border: '1px solid #f0f0f0',
    width: '90%'
});

const StyledButton = styled(Button)(({ theme }) => ({
    width: '48%' ,
    borderRadius : '2',
    height : '50',
    color: '#FFFF',
    [theme.breakpoints.down('lg')] : {

       width : '46%'
    },
    [theme.breakpoints.down('sm')] : {

        width : '48%'
     },



}));

const ActionItem = ({product}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
   
        
    const [quantity, setQuantity] = useState(1);
       
  
    const { id } = product;

    // const buyNow = async () => {
    //     let response = await payUsingPaytm({ amount: 500, email: 'codeforinterview01@gmail.com'});
    //     var information = {
    //         action: 'https://securegw-stage.paytm.in/order/process',
    //         params: response    
    //     }
    //     post(information);
    // }

    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate('/cart');
    }

    return (
        <LeftContainer>
            <Image src={product.detailUrl} /><br />
            <StyledButton style={{marginRight: 10, background: '#ff9f00'}} variant="contained"
               onClick={ () => addItemToCart()}
             >
                <Cart />
                Add to Cart</StyledButton>
            <StyledButton style={{background: '#fb641b'}} variant="contained"><Flash /> Buy Now</StyledButton>
        </LeftContainer>
    )
}

export default ActionItem;