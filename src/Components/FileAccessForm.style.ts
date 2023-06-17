import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   body { 
    font-family: "Montserrat";
    font-style: normal;
    color: #0c485b;
    margin: 0px;
    position: relative;
    width: 100vw;
    height: 100vh;
    background-image: url('/background_blue.png')
  }
    
`;

export const ColumnWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const Logo = styled.img`
  position: absolute;
  top: 50px;
`;

export const ButtonImage = styled.img`
  width: 28.05px;
  height: 34.67px;
`;

export const Button = styled.button`
  box-sizing: border-box;
  width: 264px;
  height: 62px;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 50px;
  &:hover {
    cursor: pointer;
  }
  img,
  span {
    vertical-align: middle;
    padding: 10px;
  }
`;

export const InputNumber = styled.input`
  width: 262px;
  height: 62px;

  background: #ffffff;
  border-radius: 10px;
  text-align: center;
  border: 1px solid #000000;
`;

export const StyledText = styled.span`
  width: 118px;
  height: 24px;

  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;
