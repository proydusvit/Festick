import { ThemeProvider } from "styled-components";
import {defaultTheme} from "./defaultThema";



export const Theme =  ({children}) => {
   
    const thema = defaultTheme
    

    return <ThemeProvider theme={thema}>
        {children}
    </ThemeProvider>
}