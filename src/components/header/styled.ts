import styled from "styled-components";
import { alignContentDefault, transformPxInRem } from "../../styles/global";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme["gray-900"]};
  padding: 2.5rem 0 7.625rem;
`;
export const HeaderContent = styled.div`
  ${alignContentDefault}
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NewTransactionButton = styled.button`
  padding: ${transformPxInRem(12)} ${transformPxInRem(20)};
  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme["green-300"]};
  color: ${(props) => props.theme["white"]};
  font-weight: bold;
  transition: background-color 0.5s;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme["green-700"]};
  }
`;
