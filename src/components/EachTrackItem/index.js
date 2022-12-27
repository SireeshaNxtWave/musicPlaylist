import {AiOutlineDelete} from 'react-icons/ai'

import {
  EachTrack,
  EachListContainer,
  TrackDetailsContainer,
  TrackName,
  TrackGenre,
  DurationContainer,
  Duration,
  DeleteButton,
} from './styledComponents'

const EachTrackItem = props => {
  const {trackDetails, OnDeleteTrackItem} = props
  const {id, imageUrl, name, genre, duration} = trackDetails

  const deleteTrack = () => {
    OnDeleteTrackItem(id)
  }

  return (
    <EachTrack>
      <EachListContainer>
        <img alt="track" src={imageUrl} />

        <TrackDetailsContainer>
          <TrackName>{name}</TrackName>
          <TrackGenre>{genre}</TrackGenre>
        </TrackDetailsContainer>
        <DurationContainer>
          <Duration>{duration}</Duration>
          <DeleteButton type="button" onClick={deleteTrack} testid="delete">
            <AiOutlineDelete />
          </DeleteButton>
        </DurationContainer>
      </EachListContainer>
    </EachTrack>
  )
}

export default EachTrackItem
