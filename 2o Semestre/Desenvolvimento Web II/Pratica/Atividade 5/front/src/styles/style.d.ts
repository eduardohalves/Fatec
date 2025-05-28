import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    text: string;
    borderColor: string;
    color: string; 
  }
}

