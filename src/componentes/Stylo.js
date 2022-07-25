import {styled } from '@mui/system';
import {Container,Input,Box, Button, Typography, Select} from '@mui/material';


export const MyContainer = styled(Container)({
    marginTop:'9rem', 
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    maxWidth:"xg",
    align:'center',
    backgroundColor:'#ffffcc',
    borderRadius:'8px',
    height: '100%',
    width:'70%',
    boxShadow:'6px 12px 12px black'
  });
  
  export const MyInput = styled(Input)({
    backgroundColor:'#ffd480',
     borderRadius:'0.5rem',
     height:'2rem',
     width:'70%'
  })
  
  export const MyContainerLista = styled(Container)({
            display:'flex', 
            flexDirection:'row',
            alignItems:'center'
  });
  export const BoxListado= styled(Box)({
            backgroundColor:'#ffd480',
            height:'2rem',
            borderRadius:'7px',
            textAlign:'center',
            fontFamily: 'Special Elite',
            width:'80%'
  })

  export const  ButtonAgregar = styled(Button)({
      marginBottom:'5px',
      marginLeft:'3px',
      padding:'14px',
      color:'#ffd480',
      backgroundColor:'#454140',
      fontFamily: 'Special Elite',
      height:'2rem',
  })

  export const MyTypography = styled(Typography)({
        fontFamily: 'Special Elite'
  })
  export const MySelector = styled(Select)({
          marginLeft:'10px',
          width:'3rem',
          height:'2rem',
          fontSize:'0.8rem',
          color:'#ffd480',
          backgroundColor:'#454140',
          fontFamily: 'Special Elite',
        
  })