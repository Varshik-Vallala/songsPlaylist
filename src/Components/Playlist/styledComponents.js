import styled from 'styled-components'

export const PlaylistContainer = styled.div`
  //   width: 80%;
  font-family: 'Roboto';
  width: 80%;
  margin: auto;
`

export const PlaylistBackground = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  height: 50vh;
  padding: 1px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const Heading = styled.h1`
  margin: 0px 80px 25px;
  color: #fff;
  font-weight: ${props => (props.singer ? '400' : '')};
`
export const SongsListContainer = styled.div`
  background-color: #152850;
  min-height: 50vh;
  padding: 0px 20px;
`
export const SongsList = styled.ul`
  overflow-y: scroll;
  height: 40vh;
  margin: 0px;
  padding: 0px;
`

export const SearchContainer = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  border: 1px solid #fff;
  width: 200px;
  border-radius: 2px;
`

export const SearchElement = styled.input`
  background-color: transparent;
  border: none;
  color: #fff;
  padding: 6px;
  outline: none;
`

export const EmptyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
`
