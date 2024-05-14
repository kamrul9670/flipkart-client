import React from 'react'
   
   import {Dialog, TextField , Box , Typography ,Button ,styled } from '@mui/material'
  
    import { useState , useContext } from 'react';

      import { authenticateSignup } from '../../service/api';
      import { authenticateLogin } from '../../service/api';

   import { DataContext } from '../../context/DataProvider';

   const Component = styled(Box)`
     height : 85vh;
     width : 95vh;
     padding: 0;
     padding-top: 0;

   `

   const Image = styled(Box)`
   background : #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png
 ) center 80% no-repeat;

   height : 80.8%;
   width: 28%;
   padding : 45px 35px;
  &> p , &> h5 {

    color : #FFFFFF;
    font-weight : 600;
  
  }

   `
const Wrapper = styled(Box)`

     display : flex;
     flex-direction : column;
     flex: 1;
     padding : 25px 35px;
    & > div , & >button {
    margin-top : 10px;

}

`

const LoginButton = styled(Button)`
 
   text-transform : none;
    background : #fb641b;
     color : #FFF;
     height : 48px;
      border-radius : 2px;
`;

const RequestOTP = styled(Button)`
 
    text-transform : none;
     background : #fff;
     color : #2874f0;
     height : 48px;
     border-radius : 2px;
    box-shadow : 0 2px 4px 0 rgb(0 0 0 / 20%)

`;

const Text = styled(Typography)`
     font-size : 12px;
     color : #878787;
     margin-top: 8px;

`

 const CreateAccount = styled(Typography)`
 
      font-size : 14px;
      text-align : center ;
      color : #2874f0;
      margin-top : 8px;
      font-weight : 600 ;
      cursor : pointer ;
 
 `

   const Error = styled(Typography)`
   
     font-size : 10px;
     color : red;
     line-height : 0;
     margin-top: 10px ;
     font-weight : 600;
   
   
   `

   const accountIntitialValues = {
    login : {
        view : 'login' ,

        heading : 'Login ' ,
        subHeading : "Get acess to your Orders, Wishlist  and Recommendations"
    },

    signup : {
        view : 'signup' ,
        heading : "Looks like you are now here !  " ,
        subHeading : 'Sign up with your mobile number to get started'
      
      }

   }


const LoginDialog = ({open, setOpen}) => {

   const signupIntitialValues = {

         firstname :    ''  ,
         lastname :   '' ,
         
         username:    ''  ,
           email:   '' ,
         
         password :    ''  ,
         phone :   '' ,


   }

   const loginInitialValues = {
     
     username: '',
     password : ''

   }


    const [account , toggleAccount] = useState(accountIntitialValues.login);

    const [signup , setSignup]  = useState(signupIntitialValues);
    const [login , setLogin] = useState(loginInitialValues);
   const [error , setError] = useState(false);
    const { setAccount} = useContext(DataContext);

   const handleClose = () => {
    setOpen(false);
    toggleAccount(accountIntitialValues.login)
    setError(false)
   }
   
   const toggleSignup = ()  =>  {
  
       toggleAccount(accountIntitialValues.signup);

   }

   const onInputChange = (e)  =>  {

    setSignup({ ...signup , [e.target.name] : e.target.value })
   

   }


   const signupUser = async () => {

    let response = await authenticateSignup(signup);

      if(response) return;
      handleClose();
      // setAccount(signup.firstname);
      alert("Now you Can Click Login Button");

   }

         const onValueChange = (e) => {

          setLogin({ ...login , [e.target.name]: e.target.value});
         }


         const loginUser = async() => {

          let response = await authenticateLogin(login);

          console.log(response);

          if(response.status === 200){
             
            
             setAccount(response.data.data.firstname);
             handleClose();

          }
          else{
            setError(true);
          }

         }


        // const loginUser = async () => {
        //   let response = await authenticateLogin(login);
        //   console.log(response);
        //   if (response.status === 200) {
        //     setAccount(response.data.data.firstname);
        //     handleClose(); // Close the dialog only when login is successful
        //   } else {
        //     setError(true);
        //   }
        // };
        




  return (
    <>
    <Dialog open={open} onClose={handleClose}  PaperProps={{sx : {maxWidth : 'unset'} }}>
         <Component>
        <Box style={{display: 'flex', height : '100%' }}>  
                <Image>
                    <Typography variant='h5'> {account.heading} </Typography>
                    <Typography style={{marginTop: 20 }}> {account.subHeading} </Typography>
                </Image>
                     {  account.view === 'login' ?
                  <Wrapper> 



                    <TextField variant="standard"  onChange={(e)=>  onValueChange(e)} name='username' label="Enter Username"  />

                   {error && <Error> Please Enter valid username or password </Error>  }


                    <TextField variant="standard"  onChange={(e)=>  onValueChange(e)} name='password' label="Enter Password"  />




                    <Text> By continuing , you agree to Flipkarts Terms of Use and Privacy
                        policy
                    </Text>
                    <LoginButton onClick={ () => loginUser() }>Login</LoginButton>
                    <Typography style={{textAlign: 'center', marginTop : 8}}>   OR</Typography>
                    <RequestOTP>Request OTP</RequestOTP>
                    <CreateAccount onClick={() => toggleSignup()}>New to Flipkart?Create an account</CreateAccount>
                  </Wrapper>
                     :
                     <Wrapper> 
                     <TextField variant="standard" onChange={(e)=>  onInputChange(e)} name='firstname' label="Enter First Name"  />
                     <TextField variant="standard" onChange={(e)=> onInputChange(e)} name='lastname' label="Enter Last Name"  />
                     <TextField variant="standard" onChange={(e)=> onInputChange(e)} name='username' label="UserName"  />
                     <TextField variant="standard" onChange={(e)=> onInputChange(e)} name='email' label="Email"  />
                     <TextField variant="standard" onChange={(e)=> onInputChange(e)} name='password' label="Password"  />
                     <TextField variant="standard" onChange={(e)=> onInputChange(e)} name='phone' label="Enter Phone No"  />
                     
                    
                     <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
                     <CreateAccount >New to Flipkart?Create an account</CreateAccount>
                   </Wrapper>

                     }
        </Box>

        </Component>
           
    </Dialog>
    </>
  )
}

export default LoginDialog;