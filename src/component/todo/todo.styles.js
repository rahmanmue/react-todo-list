import {css} from "@emotion/react";

export const todo =(theme) => 
css`
    position: relative;
    max-height: 34px;
    margin: 16px 0 0;
    min-height: 34px;
    font-family: "Homemade Apple", sans-serif;
    font-size: 24px;
    text-align: center;
    border-bottom: 1px solid ${theme.color.primary.merah};
    flex: 1 0 auto;
`;
  
export const todoText = (theme, isCompleted) => 
css`
    width: 100%;
    height: 50px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    color: ${theme.color.primary.hitam};
    text-decoration: ${isCompleted ? "line-through" : "initial"}
`;
  