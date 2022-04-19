import styled, { keyframes } from 'styled-components'
import AvatarPng from '../assets/icons8-person-50.png'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { addFavorite } from '../redux/actions'
import { useState } from 'react'

const shake = keyframes`
    from {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(-5deg);
    }
    50% {
        transform: rotate(2.5deg);
    }
    to {
        transform: rotate(0deg);
    }
`
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 11.5em;
	max-height: 14em;
	margin: 0 2em 2em 0;
	position: relative;
	border-radius: 8px;
	box-shadow: 0em 0em 1em ${props => props.theme.colorLightGrey};
	background-color: white;
	transition: box-shadow 0.2s;
	&:hover {
		box-shadow: 0em 0em 2em ${props => props.theme.colorDarkGrey};
	}
	&.active {
		animation: 0.5s ${shake} ease-in;
	}
`
const Header = styled.div`
	height: 60%;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	background-image: url(${props => props.header});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	border-radius: 8px;
	z-index: 1;
`
const NoLikeIcon = styled(AiOutlineHeart)`
	background-color: white;
	color: ${props => props.theme.colorDarkGrey};
	padding: 0.3em;
	border-radius: 5px;
	margin: 5% 5% 0 0;
	font-size: 1.5em;
	cursor: pointer;
	box-shadow: 0em 0em 1em ${props => props.theme.colorLightGrey};
`
const LikeIcon = styled(AiFillHeart)`
	background-color: white;
	color: red;
	padding: 0.3em;
	border-radius: 5px;
	margin: 5% 5% 0 0;
	font-size: 1.5em;
	cursor: pointer;
	box-shadow: 0em 0em 1em ${props => props.theme.colorLightGrey};
`
const Profile = styled.div`
	height: 40%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding: 0 1em 0.8em 1em;
`
const AvatarSec = styled.div`
	width: 3.2em;
	min-height: 3.2em;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	transform: translateY(-1.6em);
	border: 1px solid ${props => props.theme.colorLightGrey};
	border-radius: 50%;
	z-index: 3;
	overflow: hidden;
`
const AvatarImg = styled.img`
	height: 5em;
	background-color: white;
`
const DetailSec = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 8em;
`
const Name = styled.p`
	height: max-content;
	margin: 0;
	background: transparent;
	font-size: smaller;
	font-weight: bold;
`
const Price = styled.p`
	display: flex;
	width: 100%;
	margin: 0;
	font-size: x-small;
`
const Hire = styled.div`
	color: ${props => props.theme.colorBlue};
	cursor: pointer;
`

function ProfileModal({ id, header, avatar, name, currency, price, favorite }) {
	const dispatch = useDispatch()
	const defaultAvatar = () => {
		if (avatar === 'https://d17meyd56oy0jr.cloudfront.net/default.png') {
			return true
		}
		return false
	}
	const [active, setActive] = useState(false)
	const activeDeactive = () => {
		setActive(true)
		setTimeout(() => setActive(false), 600)
	}

	return (
		<Wrapper
			onClick={() => activeDeactive()}
			className={active ? 'active' : ''}
		>
			<Header header={header}>
				{favorite ? (
					<LikeIcon onClick={() => dispatch(addFavorite(id))} />
				) : (
					<NoLikeIcon onClick={() => dispatch(addFavorite(id))} />
				)}
			</Header>
			<Profile>
				<AvatarSec>
					<AvatarImg src={defaultAvatar() ? AvatarPng : avatar} />
				</AvatarSec>
				<DetailSec>
					<div>
						<Name>{name}</Name>
						<Price>
							{currency} {price}
						</Price>
					</div>
					<Hire>Hire</Hire>
				</DetailSec>
			</Profile>
		</Wrapper>
	)
}

export default ProfileModal
