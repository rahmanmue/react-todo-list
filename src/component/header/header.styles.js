import {css} from "@emotion/react";

export const header = () =>

    css` 
    display: flex;
    align-items: flex-start;
    `;

   

export const headerTitle = (theme) =>
// width: 52%;
css`
    text-align: center;
    font-family: "Homemade Apple", sans-serif;
    font-size: 3.2rem;
    text-transform: lowercase;
    color: ${theme.color.primary.hitam}
    `;

  
   