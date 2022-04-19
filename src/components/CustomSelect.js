import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import {AiFillCaretDown} from 'react-icons/ai'
import { changeCurrency } from '../redux/actions'


const Wrapper = styled.div`
	width: 13em;
	height: 1.3em;
	display: flex;
	align-items: center;
	cursor: pointer;
	border: 1px solid ${props => props.theme.colorLightGrey};
	border-radius: 8px;
	padding: 0.5em 1em;
	position: relative;
	background-color: white;
    &:hover {
        ul {
            display: inline;
        }
    }
`
const Span = styled.span`
    font-size: .9em;
`
const OptionsList = styled.ul`
	width: 100%;
    background-color: white;
	border: 1px solid ${props => props.theme.colorLightGrey};
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
	list-style: none;
	padding: 0;
	margin: 0;
	display: none;
	position: absolute;
	bottom: 2.2em;
	left: 0;
	z-index: 4;
    overflow-y: auto;
`
const Option = styled.li`
    display: flex;
    align-items: center;
	border-bottom: 1px solid ${props => props.theme.colorLightGrey};
	padding: .5em 1em;
	background-color: white;
    &:hover {
        background-color: ${props => props.theme.colorLightGrey}
    }
    &:first-child {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
`
const Flag = styled.img`
    width: 1.5em;
    border: 1px solid green;
    margin-right: .5em;
`

function CustomSelect({ options}) {
    const dispatch = useDispatch()
    const [id, setId] = useState(1)
    const [name, setName] = useState('')
    const [flag, setFlag] = useState('')

    return (
		<Wrapper>
            <Flag src={flag}/>
            <Span>{name}</Span>
			<AiFillCaretDown style={{marginLeft: 'auto'}}/>
			<OptionsList>
				{options.map((e, i) => (
					<Option
						onClick={() => {
							dispatch(changeCurrency(id, e['id']))
                            setId(e['id'])
                            setName(e['name'])
                            setFlag(e['flag_url'])
						}}
						value={e.name}
						key={i}
					>
                        <Flag src={e['flag_url']} />
                        <Span>{e.name}</Span>
					</Option>
				))}
			</OptionsList>
		</Wrapper>
	)
}

export default CustomSelect