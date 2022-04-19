import React from 'react'
import styled, {ThemeProvider} from 'styled-components'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import Main from './Main'


const Wrapper = styled.div `
  height: 100%;
  display: flex;
  background-color: #f9f9f9;
  margin: 0;
  padding: 0;
  @media screen and (max-width: 666px) {
    flex-direction: column;
    width: 100%;
  }
`

function Layout() {

    const theme = {
      colorBlue: '#1D9BF0',
      colorBlack: '#000',
      colorWhite: '#fff',
      colorDarkGrey: 'rgba(0, 0, 0, 0.431)',
      colorLightGrey: '#d2d2d2',
      bgColorLightGrey: '#f5f5f5',
      headerFontSize: '2em',
      baseFontSize: '1em',
    }

    return (
        <Wrapper>
            <ThemeProvider theme={theme}>
                    <SideBar/>
                    <Main>
                        <Outlet />
                    </Main>
            </ThemeProvider>
        </Wrapper>
    )
}

export default Layout