import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: var(--red);
  padding: 1rem 3rem;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0 3rem;
  }
`;

export const LogoImg = styled.img`
  width: 200px;
  width: 200px;
  margin: 2rem 0;
  margin-top: 0.5rem;

  @media (min-width: 768px) {
    margin-top: 2rem;
    margin-right: 5rem;
  }
`;
