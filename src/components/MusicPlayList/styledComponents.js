import styled from 'styled-components'

export const MusicPlayerListBgContainer = styled.div`
  font-family: 'roboto';
  display: flex;
  flex-direction: column;
`
export const ImageContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 300px;
  background-size: cover;
  padding: 20px;
`
export const ResponsiveContainer = styled.div`
  background-color: #152850;
  height: 60%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
export const MainHeading = styled.h1`
  font-size: 30px;
  color: #ffffff;
`
export const Description = styled.p`
  font-size: 20px;
  color: #ffffff;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const Heading = styled.h1`
  font-size: 25px;
  color: #cbd5e1;
`
export const SearchInputContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const SearchElement = styled.input`
  background-color: transparent;
  width: 150px;
  height: 20px;
  border: 1px solid #cbd5e1;
  color: #cbd5e1;
`
export const TrackItemsList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;
  overflow: auto;
`
export const FailureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const NoSongsPara = styled.p`
  color: #cbd5e1;
  font-size: 30px;
`
