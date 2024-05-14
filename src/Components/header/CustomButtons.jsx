


import { useState ,useContext } from 'react';

import React from 'react'
        import { Box, Button, Typography , styled } from '@mui/material';

        import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
 
          import { DataContext } from '../../context/DataProvider';

          import { Link, useNavigate } from 'react-router-dom';

    // component
    

  import LoginDialog from '../login/LoginDialog';

  import Profile from './Profile';


  const Wrapper = styled(Box)(({theme}) => ({

   
  display : 'flex' ,
  alignItems : 'center',
  margin :  '0 3% 0 auto',
   
  '& > * ' : {
    marginRight :  '40px !important',
    fontSize : 16 ,
    alignItems : 'center'
  },

  [theme.breakpoints.down('md')] : {

    display : 'block'
}


  }));

 



     const Container = styled(Box)(({theme}) => ({
        display : 'flex' ,


        [theme.breakpoints.down('md')] : {

            display : 'block'
        }

     }))
     
     


   const LoginButton = styled(Button)`
  
      margin-left: 20px;
      color :#2874f0 ;
      background-color: #fff;
      text-transform: none;
      padding: 5px 40px;
      border-radius: 2px;
      box-shadow: none;
       font-weight: 600;
       height : 32px;
  
  
  `;





  const CustomButton = () => {

    const navigate = useNavigate();

     const [open , setOpen] = useState(false);
   const {account , setAccount} = useContext(DataContext);
       const openDialog = () => {
        setOpen(true);
       }


       const cartAc  =  () => {
   
        navigate('/cart');
        
       }


  return (

    <Wrapper>
  {
    account ? <Profile account={account} setAccount={setAccount} /> : 
    <LoginButton variant="contained" onClick={()=> openDialog()} > Login </LoginButton>
    
  }


     {/* <LoginButton variant="contained" onClick={()=> openDialog()} > Login </LoginButton> */}

  
     <Typography style={{marginTop: 3 , width : 140 }}>Become a seller</Typography>
     <Typography style={{marginTop : 3 , }}>  More </Typography>


     <Container>
     
     <Typography><Link to="/cart"><ShoppingCartIcon/></Link></Typography>
         

     </Container>
        <LoginDialog open={open} setOpen={setOpen} />

    </Wrapper>
  
  )
}

export default CustomButton;
