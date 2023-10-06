import {Global, css} from "@emotion/react"
const GlobalStyles = () => {
    return(
        <Global
        styles = {css`
           @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;0,900;1,900&family=Raleway:wght@300;500;600;700;800&family=Roboto:ital,wght@1,300&display=swap');
        
        body{
            font-family: 'Montserrat', sans-serif;
            background-color: #1f1f1f;
            min-height: 100vh;
            margin: 0;
            padding: 0;
            color: #fff;

        }
        `}
        />
    )
}
export default GlobalStyles