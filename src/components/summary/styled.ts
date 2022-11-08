import styled from "styled-components";
import { alignContentDefault, transformPxInRem } from "../../styles/global";

export const SummaryContainer = styled.section`
  ${alignContentDefault}
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -5rem;
`;

export const SummaryCardHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${transformPxInRem(12)};
`;

export const SummaryCardStrong = styled.strong`
  font-weight: 700;
  font-size: ${transformPxInRem(32)};
  line-height: 1.4;
  color: ${(props) => props.theme["gray-100"]};
`;
