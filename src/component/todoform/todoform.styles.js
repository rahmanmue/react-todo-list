import {css} from "@emotion/react";

export const add = () =>
css`
    padding: 16px;
  `;
  
export const addForm=()=> 
css`
    display: flex;
    align-items: flex-start;
`;
  
export const addInput = (theme) =>
// flex: 1;
css`
    background: unset;
    width:100%;
    border: unset;
    padding: 0 64px;
    border-bottom: 1px solid ${theme.color.primary.merah};
    outline: unset;
    font-family: "Homemade Apple", sans-serif;
    font-size: 16px;
    text-transform: lowercase;
  `;
  
export const addButton = (theme) => 
css`
    font-size: 1.8rem;
    font-family: "Bungee", sans-serif;
    background: unset;
    outline: unset;
    border: unset;
    cursor: pointer;
    padding: 16px;
    padding-right: unset;
    &:active {
        text-shadow: 1px 1px 2px ${theme.color.primary.hitam};
      }
`;
  

  