import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  border-radius: 10px;
  padding: 2rem 2rem;

  font-size: 1.5rem;
  font-weight: normal;
  line-height: 2rem;
  color: var(--text-title);

  &::placeholder {
    color: var(--text-body);
  }
`;
