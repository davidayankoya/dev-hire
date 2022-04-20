import styled from 'styled-components'
import NavLink from './NavLink'
import routes from '../routes/routes'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import { useEffect, useState } from 'react'


const Wrapper = styled.nav`
	flex-grow: 1.2;
	max-width: 27%;
	display: flex;
	flex-direction: column;
	flex-basis: 12em;
	border-right: 1px solid #d2d2d2;
	padding-top: 5%;
	font-weight: bold;
	background-color: ${props => props.theme.bgColorLightGrey};
    @media screen and (max-width: 666px) {
		flex-basis: 0;
        flex-grow: none;
        border-right: none;
		border-bottom: 1px solid ${props => props.theme.colorLightGrey};
		min-width: 100%;
		z-index: 5;
	}
`

const Logo = styled.h1`
	padding: 0 5% 5% 15%;
    margin: 0;
	font-size: ${props => props.theme.headerFontSize};
	font-weight: bold;
	color: ${props => props.theme.colorBlue};
	span {
		color: ${props => props.theme.colorBlack};
	}
    @media screen and (max-width: 666px) {
        display: flex;
        align-items: center;
    }
`
const Ul = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	@media screen and (max-width: 666px) {
        overflow: hidden;
        max-height: 0;
        transition: max-height .5s;
        margin-bottom: .5em;
        &.dropdown {
            max-height: 10em;
        }
	}
`


const getWidth = () => window.screen.width

function SideBar() {

    const [dropdown, setDropDown] = useState(false)
    const [width, setWidth] = useState(getWidth())
	const updateWidth = event => {
		setWidth(getWidth())
	}
	useEffect(() => {
        window.addEventListener('resize', updateWidth)
		return () => {
			window.removeEventListener('resize', updateWidth)
		}
    }, [])


    return (
		<Wrapper>
			<Logo>
				<span>Dev</span>Hire
				{width < 667 ? (
					dropdown ? (
						<AiFillCaretUp
							style={{
								marginLeft: 'auto',
								fontSize: '.8em',
								padding: '.5em',
							}}
							onClick={() => setDropDown(false)}
						/>
					) : (
						<AiFillCaretDown
							style={{
								marginLeft: 'auto',
								fontSize: '.8em',
								padding: '.5em',
							}}
							onClick={() => setDropDown(true)}
						/>
					)
				) : null}
			</Logo>
			<Ul className={dropdown ? 'dropdown' : ''}>
				{routes.map(e => (
					<NavLink
						to={e.path}
						name={e.name}
						Icon={e.Icon}
						key={e.name}
                        setDropDown={setDropDown}
					></NavLink>
				))}
			</Ul>
		</Wrapper>
	)
}

export default SideBar