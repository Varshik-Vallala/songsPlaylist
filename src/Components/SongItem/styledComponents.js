import styled from 'styled-components'

export const Image = styled.img`
  height: 120px;
  width: 180px;
  margin-right: 18px;
`
export const SongItemElement = styled.li`
  display: flex;
  align-items: center;
  margin: 18px 0;
  color: #fff;
`

export const SongDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
export const SongDetails = styled.div`
  display: ${props => (props.flex ? 'flex' : '')};
  align-items: center;
  margin-right: 35px;
`
export const SongName = styled.p`
  color: ${props => (props.blue ? '#3b82f6' : '#fff')};
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
`

export const Duration = styled.p`
  font-size: 18px;
  margin-right: 30px;
`
