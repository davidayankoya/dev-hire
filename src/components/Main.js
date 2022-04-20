import styled from 'styled-components'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCurrencies, initFetchFreelancers } from '../redux/actions'
import CustomSelect from './CustomSelect'

const Wrapper = styled.main`
	flex-grow: 9;
	max-width: 73%;
	display: flex;
	flex-basis: 12em;
	flex-direction: column;
	padding: 0 0 0 0;
	overflow: auto;
	background-color: ${props => props.theme.bgColorLightGrey};
	@media screen and (max-width: 666px) {
		flex-basis: 0;
        flex-grow: none;
		max-width: 100%;
	}
`
const Footer = styled.footer `
	display: flex;
    align-items: center;
	justify-content: space-between;
	padding: 1.5em 1.5em;
	margin: auto 0 0 2em;
	color: ${props => props.theme.colorDarkGrey};
	font-size: small;
`

function Main({ children }) {
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initFetchFreelancers())
        dispatch(fetchCurrencies())
    }, [dispatch])

    const currenciesLoading = useSelector(state => state.freelancers.currenciesLoading)
    const currencies = useSelector(state => state.freelancers.currencies)

    return (
		<Wrapper>
			{children}
			<Footer>
				<span>&copy; 2022 DevHire</span>
				{ currenciesLoading ? null : (
					<CustomSelect
						options={currencies}
					/>
                )}
			</Footer>
		</Wrapper>
	)
}

export default Main
