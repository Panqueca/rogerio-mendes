import React from 'react'
import styled from 'styled-components'

const Box = styled.div``
const Email = styled.div``
const Phone = styled.div``
const Country = styled.div``

const Contact = ({ email, phone, country }) => {
  return (
    <Box>
      <Email>{email}</Email>
      <Phone>{phone}</Phone>
      <Country>{country}</Country>
    </Box>
  )
}

export default Contact
