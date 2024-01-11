import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Introducement = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2.5rem 0;

  h1 {
    line-height: 1.2;
    max-width: 800px;
    margin-bottom: 1rem;
  }
  h2 {
    font-weight: normal;
    font-size: 1.25rem;
    color: ${(props) => props.theme["gray-800"]};
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    flex-direction: column-reverse;
    align-items: center;
    gap: 2rem;
    text-align: center;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 66px;
  gap: 20px;

  div {
    display: flex;
    align-items: center;
    gap: 12px;

    p {
      font-size: 1rem;
      color: ${(props) => props.theme["gray-700"]};
    }
  }
`;

export const CoffeesSection = styled.div`
  padding: 2.5rem 0;

  h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
    font-weight: 800;
  }
`;

export const CoffeesShowcase = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;

  @media (max-width: 1600px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1250px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
