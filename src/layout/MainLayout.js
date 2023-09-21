import React from 'react'
import styled from 'styled-components'



const MainLayoutContainer = styled.main`
  padding-block: 16px;
  min-height: 100vh;
  margin-bottom: 16px;
`;



const MainLayout = (props) => {
  return (
      <MainLayoutContainer>{props.children}</MainLayoutContainer>
  )
}

export default MainLayout