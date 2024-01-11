import styled from "styled-components";

export const Headercontainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;

  img {
    cursor: pointer;
  }

  nav {
    display: flex;
    gap: 12px;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 6px;
      gap: 4px;
      padding: 8px;
      background-color: ${(props) => props.theme["purple-light"]};
      color: ${(props) => props.theme["purple-dark"]};

      svg {
        color: ${(props) => props.theme["purple"]};
      }
    }

    a {
      position: relative;
      display: felx;
      align-items: center;
      padding: 8px;
      border: none;
      border-radius: 6px;
      outline: none;
      background-color: ${(props) => props.theme["yellow-light"]};

      cursor: pointer;

      span {
        position: absolute;
        top: -8px;
        right: -8px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        font-weight: bold;
        font-size: 0.75rem;
        color: white;
        background-color: ${(props) => props.theme["yellow-dark"]};
      }

      svg {
        color: ${(props) => props.theme["yellow-dark"]};
      }
    }
  }
`;
