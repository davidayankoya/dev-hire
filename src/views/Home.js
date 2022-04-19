import {useSelector} from 'react-redux'
import styled from 'styled-components'
import ProfileModal from '../components/ProfileModal'
import LoadingGif from '../assets/rhombus.gif'


const Wrapper = styled.div `
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2em 3em;
  overflow-x: hidden;
  overflow-y: auto;
`
const Header = styled.div `
	width: 100%;
	max-height: max-content;
	justify-self: flex-start;
	margin-top: 2.5%;
	padding-bottom: 1em;
	box-shadow: 0em 2em 3em ${props => props.theme.bgColorLightGrey};
`
const ProfilesWrapper = styled.div `
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-wrap: wrap;
`
const LoaderWrapper = styled.div `
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`

function Home() {

    const freelancersLoading = useSelector(state => state.freelancers.freelancersLoading)
    const freelancers = useSelector(state => state.freelancers.freelancers)

    return (
        <Wrapper>
            <Header>
                <h2>Hire Top Developers</h2>
            </Header>
            {freelancersLoading
                ? (
                    <LoaderWrapper>
                        <img
                            src={LoadingGif}
                            alt="loading gif"
                            width={100}
                            height={100}
                            style={{transform: 'translateY(-50%)'}}></img>
                    </LoaderWrapper>
                ) : (
                    <ProfilesWrapper>
                        {freelancers.map((e, i) => (
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
                        ))}
                    </ProfilesWrapper>
                )}
        </Wrapper>
    )
}

export default Home
