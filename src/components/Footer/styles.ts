import styled from "styled-components";

export const Container = styled.footer`
  background-color: #2b2b2b;
  padding: 1rem 15rem;
  margin-top: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border:1px solid gray;
//   background: gray;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  img {
    width: 60px;
    height: auto;
  }

  p {
    color: #ffffff;
    margin: 0.5rem 0;
  }

  strong {
    font-weight: bold;
    color: #ffffff;
  }

  @media (max-width: 800px) {
    padding: 4rem 10rem;
    flex-direction: column;
    gap: 2rem;
    text-align: center;

    .container {
      flex-direction: column;
    }
  }

  @media (max-width: 600px) {
    padding: 4rem 1rem;

    p {
      font-size: 1.2rem;
    }
  }
`;
