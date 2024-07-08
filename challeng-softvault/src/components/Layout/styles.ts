import styled from 'styled-components'

export const Container = styled('div')({
  width: '100%',
})

export const Main = styled.main(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  width: '100%',
  height: '100vh',
}))
