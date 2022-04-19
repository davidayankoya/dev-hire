import styled from 'styled-components'
import { Link, useResolvedPath, useMatch } from 'react-router-dom'
import { IconContext } from 'react-icons'

const Li = styled.li`
  a {
    display: flex;
    align-items: center;
    color: ${props => props.theme.colorDarkGrey};
    text-decoration: none;
    padding: 0;
  }
`
const Span = styled.span`
  padding: 0.1em;
  color: transparent;
  margin-right: 13%;
  border-radius: 3px;
  &.active {
    background-color: ${props => props.theme.colorBlue};
  }
`
const P = styled.p`
  color: ${props => props.theme.colorDarkGrey};
  &.active {
    color: #000;
  }
`


function NavLink({ name, Icon, to}) {
  let resolved = useResolvedPath(to)
  let match = useMatch({ path: resolved.pathname, end: true })
  const iconStyle = {
    color: 'rgba(0, 0, 0, 0.431)',
    style: {
      padding: '0.5em',
      borderRadius: '5px',
      marginRight: '1em',
    },
  }

  return (
    <Li className={match ? 'active' : ''}>
      <Link to={to}>
        <Span className={match ? 'active' : ''}>.</Span>
		<IconContext.Provider value={iconStyle}>
            <Icon style={{ color: match ? 'white' : '', backgroundColor: match ? '#1D9BF0' : '', transition: 'background-color .3s'}} />
		</IconContext.Provider>
        <P className={match ? 'active' : '' }>{name}</P>
      </Link>
    </Li>
  )
}

export default NavLink