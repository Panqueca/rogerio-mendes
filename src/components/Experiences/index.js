import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
  width: 100%;
`

const Experiences = ({ experiences }) => {
  return (
    <Box>
      {experiences.map(({ title }) => {
        return title
      })}
    </Box>
  )
}

export default Experiences
