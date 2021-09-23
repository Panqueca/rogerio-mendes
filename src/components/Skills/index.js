import React from 'react'
import styled from 'styled-components'

const Box = styled.div``
const Category = styled.div``
const List = styled.div``

const Skills = ({ skills }) => {
  return (
    <Box>
      {skills?.map(({ category, items = [] }) => {
        return (
          <Category key={category}>
            <h3>{category}</h3>
            <List>
              {items.map(title => {
                return title
              })}
            </List>
          </Category>
        )
      })}
    </Box>
  )
}

export default Skills
