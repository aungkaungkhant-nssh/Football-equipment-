import { createTheme } from "react-data-table-component";

export default function tableTheme (theme:string){

  if(theme==="dark"){
    return createTheme('solarized', {
  
      background: {
        default: 'transparent',
      },
      divider:{
          default:"#6b7280"
      },
      highlightOnHover: {
          default: '#f3f4f6',
          text: '#FFFFFF',
      },
      text: {
         prinmary:"red"
      },
    }, 'dark');;
  }else{
    return createTheme('solarized', {
  
      background: {
        default: 'transparent',
      },
      divider:{
          default:"#d1d5db"
      },
      highlightOnHover: {
          default: '#f3f4f6',
          text: '#FFFFFF',
      },
      text: {
         prinmary:"red"
      },
    }, 'dark');;
  }
  
}