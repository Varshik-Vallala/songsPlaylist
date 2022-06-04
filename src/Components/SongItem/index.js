import {AiOutlineDelete} from 'react-icons/ai'

import {
  Image,
  SongDetailsContainer,
  SongDetails,
  SongName,
  Duration,
  SongItemElement,
} from './styledComponents'

const SongItem = props => {
  const {eachSong, onClickDelete} = props

  const {id, name, genre, duration, imageUrl} = eachSong

  const onDeleteSong = () => {
    onClickDelete(id)
  }

  return (
    <SongItemElement>
      <Image src={imageUrl} alt="track" />
      <SongDetailsContainer>
        <SongDetails>
          <SongName>{name}</SongName>
          <SongName blue>{genre}</SongName>
        </SongDetails>
        <SongDetails flex>
          <Duration>{duration}</Duration>
          <AiOutlineDelete onClick={onDeleteSong} testid="delete" />
        </SongDetails>
      </SongDetailsContainer>
    </SongItemElement>
  )
}

export default SongItem
