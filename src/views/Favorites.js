import { useSelector } from 'react-redux'
import styled from 'styled-components'
import ProfileModal from '../components/ProfileModal'
import LoadingGif from '../assets/rhombus.gif'

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	padding: 2em 3em;
	overflow-x: hidden;
	overflow-y: auto;
`
const Header = styled.div`
	width: 100%;
	max-height: max-content;
	justify-self: flex-start;
	margin-top: 2.5%;
	padding-bottom: 1em;
	box-shadow: 0em 2em 3em ${props => props.theme.bgColorLightGrey};
`
const ProfilesWrapper = styled.div`
	width: 100%;
	min-height: 80%;
	display: flex;
	flex-wrap: wrap;
`
const DefaultText = styled.div`
	width: 100%;
	height: 100%;
	text-align: center;
	span {
		color: red;
	}
`

function Favorites() {
	const freelancersLoading = useSelector(
		state => state.freelancers.freelancersLoading
	)
	const freelancers = useSelector(state => state.freelancers.freelancers)
	const favoriteFreelancers = freelancers.filter((e, i) => e.favorite)

	return (
		<Wrapper>
			<Header>
				<h2>Favorites</h2>
			</Header>
			{freelancersLoading ? (
				<img
					src={LoadingGif}
					alt="loading gif"
					width={100}
					height={100}
				></img>
			) : (
				<ProfilesWrapper>
					{favoriteFreelancers.length < 1 ? (
						<DefaultText>
							<p>
								Like a freelancer? <span>Add </span>them to your
								favorites!
							</p>
						</DefaultText>
					) : (
						favoriteFreelancers.map((e, i) => (
							<ProfileModal
								avatar={e._source['avatar']}
								currency={e['currency']}
								header={e._source['service_photo']}
								favorite={e.favorite}
								key={i}
								altKey={i}
								id={e._source['cust_id']}
								name={e._source['display_name']}
								price={e['price']}
							/>
						))
					)}
				</ProfilesWrapper>
			)}
		</Wrapper>
	)
}

export default Favorites
