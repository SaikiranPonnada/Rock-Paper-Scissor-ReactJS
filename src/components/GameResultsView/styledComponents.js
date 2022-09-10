import styled from 'styled-components'

export const GameViewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 400px;
  flex-wrap: wrap;
  @media screen and (max-width: 576px) {
    width: 300px;
    height: 250px;
  }
`
export const GameButton = styled.button`
  width: 150px;
  height: 150px;
  margin-right: 20px;
  background-color: transparent;
  border-style: none;
  outline: none;
  @media screen and (max-width: 576px) {
    width: 130px;
    height: 130px;
    margin-right: 20px;
  }
`
export const GameImage = styled.img`
  width: 150px;
  height: 150px;
  @media screen and (max-width: 576px) {
    width: 130px;
    height: 130px;
  }
`

export const ResultImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ResultName = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 700;
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`
export const ResultText = styled.p`
  color: white;
  font-size: 25px;
  font-weight: 700;
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`
export const ResultButton = styled.button`
  padding: 10px;
  color: #223a5f;
  font-size: 14px;
  font-weight: 700;
  font-family: 'Roboto';
  border-radius: 6px;
  border-style: none;
  outline: none;
`
