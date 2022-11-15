import styled from "styled-components";
import { alignContentDefault } from "../../styles/global";

export const TransactionsContainer = styled.section`
  ${alignContentDefault};
  margin: 4rem auto 0;
`;

export const TransactionsTable = styled.table`
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  width: 100%;
  /* margin-top: 1.5rem; */
  td {
    padding: 1.25rem;
    background: ${(props) => props.theme["gray-700"]};
    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

interface PriceHighlightProps {
  variant: "in" | "out";
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === "in" ? props.theme["green-300"] : props.theme["red-300"]};
`;
