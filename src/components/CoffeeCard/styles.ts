import styled from "styled-components";

export const CoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  border-radius: 6px 36px;
  width: 256px;
  height: 310px;
  padding: 20px;
  background-color: ${(props) => props.theme["gray-200"]};
  text-align: center;

  img {
    margin-top: -40px;
  }

  .tags {
    display: flex;
    margin: 12px;
    gap: 4px;
  }

  .tags > span {
    padding: 4px 8px;
    border-radius: 100px;
    font-size: 0.625rem;
    color: ${(props) => props.theme["yellow-dark"]};
    background-color: ${(props) => props.theme["yellow-light"]};
    font-family: Roboto;
    font-weight: 700;
    text-transform: uppercase;
  }

  h1 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0;
  }

  .description {
    color: ${(props) => props.theme["gray-600"]};
    font-family: Roboto;
    font-size: 0.875rem;
    font-weight: 400;
  }

  .shopActions {
    display: flex;
    margin-top: 2rem;
    width: 100%;
    justify-content: space-between;

    .priceAndCurrency {
      display: flex;
      align-items: baseline;
      gap: 0.3rem;

      .currency {
        color: ${(props) => props.theme["gray-700"]};
        font-size: 0.875rem;
      }
      .price {
        color: ${(props) => props.theme["gray-700"]};
        font-size: 1.5rem;
        font-weight: 800;
      }
    }

    .actions {
      display: flex;
      align-items: center;

      .minusOrMore {
        display: flex;
        align-items: center;
        gap: 4px;
        border-radius: 6px;
        background-color: ${(props) => props.theme["gray-400"]};
        color: ${(props) => props.theme["gray-900"]};

        button {
          border: none;
          outline: none;
          background: none;
          box-shadow: none;
          padding: 8px;
          border-radius: 6px;
          color: ${(props) => props.theme["purple"]};
          cursor: pointer;

          &:hover {
            background-color: ${(props) => props.theme["gray-500"]};
          }
        }
      }

      svg {
        padding: 8px;
        border-radius: 6px;
        margin-left: 8px;
        background-color: ${(props) => props.theme["purple-dark"]};
        color: white;
        cursor: pointer;
      }
    }
  }
`;
