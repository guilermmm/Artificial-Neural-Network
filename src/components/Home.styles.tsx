import styled from '@emotion/styled'

export const Container = styled.div``

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;

  button {
    margin: 0.5rem;

    padding: 0.5rem;
    border-radius: 0.5rem;
    border: none;
    background-color: #465f81;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;

    transition: 0.2s;

    &:hover {
      opacity: 0.8;

      transition: 0.2s;

      transform: scale(1.1);
    }
  }

  label {
    font-size: 1rem;
    font-weight: bold;

    display: flex;
  }
  input {
    margin-top: 0.5rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: none;
    background-color: #465f81;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    width: 100%;
    text-align: center;

    transition: 0.2s;
  }

  select {
    margin-top: 0.5rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: none;
    background-color: #465f81;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #0c142b;
  border-bottom: 1px solid #e0e0e0;

  h1 {
    font-size: 1.5rem;
  }

  button {
    border: 1px solid black;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;
    padding: 1rem;
  }
`

export const Selects = styled.div``

export const CanvasContainer = styled.div`
  width: 35%;
  display: flex;
  justify-content: end;
`

export const OptionsContainer = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`

export const DefaultHeadButton = styled.button`
  background-color: white;
  color: black;
`

export const AltHeadButton = styled.button`
  background-color: black;
  color: white;
`
