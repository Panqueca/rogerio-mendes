import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Experiences from './components/Experiences'
import { useXPState } from './store/experience'
import { useSkillsState } from './store/skills'
import { useThemeState } from './store/theme'
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
const Sub = styled.div``

const Flex = styled.div`
  display: flex;
`

const List = styled.div`
  width: 75%;
`

const Sidebar = styled.div`
  width: 25%;
`

function App() {
  const { isDarkMode } = useThemeState()
  const { experiences } = useXPState()
  const { skills } = useSkillsState()
  const theme = getTheme(isDarkMode)

  return (
    <ThemeProvider theme={theme}>
      <Body>
        <Container>
          <Header>ROGERIO MENDES</Header>
          <Sub>Senior Full Stack Dev || Blockchain dev || Content Creator</Sub>
          <Flex>
            <List>
              <Experiences experiences={experiences} />
            </List>
            <Sidebar>
              <Contact
                email="contact@mendesrogerio.com"
                phone="+55 41 99630-5030"
                country="Brazil"
              />
              <Skills skills={skills} />
            </Sidebar>
          </Flex>
        </Container>
      </Body>
    </ThemeProvider>
  )
}

export default App
