import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { getTheme } from './theme'

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;
  background-color: ${({ theme }) => theme.bg1};
  color: ${({ theme }) => theme.text1};
`

const Container = styled.div`
  width: 700px;
  margin: 0 auto;
`
const Header = styled.div``

function App() {
  const theme = getTheme(true)

  return (
    <ThemeProvider theme={theme}>
      <Body>
        <Container>
          <Header>ROGERIO MENDES</Header>
        </Container>
      </Body>
    </ThemeProvider>
  )
}

export default App
