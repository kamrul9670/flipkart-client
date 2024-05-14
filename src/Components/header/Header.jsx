import { Toolbar ,AppBar ,Box , Typography, IconButton,List ,Drawer , styled, ListItemButton } from "@mui/material";


    import {Menu} from '@mui/icons-material';
import Search from "./Search";

 import CustomButtons from "./CustomButtons";

    import { Link } from "react-router-dom";

      import { useState } from "react";
   
     

     


      
          const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
 const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';


const StyledHeader = styled(AppBar)`
background: #2974f0;
height : 55px;

`
const Component = styled(Link)`
margin-left : 13%;
line-height : 0;
text-decoration : none ;
color : inherit;
`
const SubHeading = styled(Typography)`
font-size : 10px;
font-style : italic ;
`
const PlusImage = styled('img')({
    width : 10 ,
    height : 10 ,
    marginLeft : 4 ,
});


  const CustomButtonWrapper = styled(Box)(({theme}) =>  ({

    margin : '0 5% 0 auto',


    [theme.breakpoints.down('md')] : {
  
     display : 'none'
   },
  
  



  }));
 

  
  

     const MenuButton = styled(IconButton)(({theme}) => ({
      
       display : 'none',

       [theme.breakpoints.down('md')] :   {

         display : 'block'
       }


     }))

     const Header = () => {


       

  //  const logoUrl = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';


  //  const subUrl = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';


       const [open, setOpen] = useState(false);

       const handleOpen = () => {
      
          setOpen(true);

       }
       const handleClose = () => {
       
    }
    const handleC = () => {
        setOpen(false);
    }

     const list = () => (
      <Box style={{ width: 250 }} onClick={handleClose}>
          <List>
              <ListItemButton>
                  <CustomButtons />
                  
              </ListItemButton>
          </List>
      </Box>
  );



  return (
   
    <StyledHeader position="fixed">
            <Toolbar style={{ minHeight: 55 }}>
                <MenuButton
                    color="inherit"
                    onClick={handleOpen}
                >
                 
                    <Menu />
                </MenuButton>

                <Drawer open={open} onClose={handleClose}>
                
                
             
                    {list()} 
                    <button style={{marginTop : 10, marginLeft : '100px' , alignItems : 'center', width:'30px' }} onClick={handleC}>X</button>
                
                   
                </Drawer>
                
                <Component to='/'>
                    <img src={logoURL} alt="logo" style={{ width: 75 }} />
                    <Box component="span" style={{ display: 'flex' }}>
                        <SubHeading>Explore&nbsp;
                            <Box component="span" style={{color:'#FFE500'}}>
                                Plus
                            </Box>
                        </SubHeading>
                        <PlusImage src={subURL} />
                    </Box>
                </Component>
                <Search />
                <CustomButtonWrapper>
                    <CustomButtons />
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
  )

     }


     export default Header;