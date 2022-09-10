import styled from 'styled-components'

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 80vw;
  height: 150px;
  border: 2px solid #ffffff;
  border-radius: 10px;
  background-color: transparent;
  margin-top: 20px;
  @media screen and (max-width: 576px) {
    height: 120px;
  }
`
export const ScoreNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ScoreName = styled.h1`
  color: white;
  font-size: 26px;
  font-family: 'Bree Serif';
  @media screen and (max-width: 576px) {
    font-size: 20px;
  }
`
export const ScoreBoard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 150px;
  height: 120px;
  border-radius: 10px;
  @media screen and (max-width: 576px) {
    height: 100px;
  }
`
export const ScoreHeading = styled.p`
  color: #223a5f;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 0px;
`
export const ScoreResult = styled.p`
  color: #223a5f;
  font-size: 30px;
  font-family: 'Roboto';
  margin-top: 5px;
`
