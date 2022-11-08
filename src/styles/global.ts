import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;

    }
    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme["green-500"]};
    }
    body {
        background: ${(props) => props.theme["gray-800"]}; 
        color: ${(props) => props.theme["gray-100"]};
    }
    body, input, textarea, button {
        font: 400 1rem Roboto, sans-serif;
    }
`;

export const alignContentDefault = css`
  max-width: ${transformPxInRem(1200)};
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export function transformPxInRem(px: number): string {
  return `${px / 16}rem`;
}
