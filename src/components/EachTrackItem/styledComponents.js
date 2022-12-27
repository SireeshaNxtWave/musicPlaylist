import styled from 'styled-components'

export const EachTrack = styled.li`
  list-style: none;
`
export const EachListContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 150px;
  width: 100%;
  margin-bottom: 20px;
`
export const TrackDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`
export const TrackName = styled.p`
  color: #cbd5e1;
  font-size: 20px;
`
export const TrackGenre = styled.p`
  color: #3b82f6;
  font-size: 20px;
`
export const DurationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 450px;
`
export const Duration = styled.p`
  color: #cbd5e1;
  font-size: 20px;
  margin-right: 50px;
`
export const DeleteButton = styled.button`
  background-color: transparent;
  border: 0px;
  color: #cbd5e1;
  height: 80px;
`
