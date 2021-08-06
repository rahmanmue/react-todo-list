import {css} from "@emotion/react";

export const container = (theme) =>

css`
    margin-top: 150px;
    width: 600px;
    height: 800px;
    background-color: ${theme.background.color.primary};
    border-radius: 4px;
    padding: 32px;
  `;
  
export const frame = (theme)=>
css`
    border: 1px solid ${theme.color.primary.hitam};
    height: 100%; 
    display: flex;
    flex-direction: column;
  `;
  