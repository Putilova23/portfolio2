import styled from 'styled-components'
import { FlexWrapper } from '../FlexWrapper.tsx'
import { theme } from '../../styles/Theme.ts'

export const Slider = () => {
  return (
    <StyledSlider>
      <FlexWrapper>
        <Slide>
          <Text>Loremmmmmmmmmmmmmmmmmmmm</Text>
          <Name>@Ivan Ivanov</Name>
        </Slide>
      </FlexWrapper>
      <Pagiation>
        <span></span>
        <span className={'active'}></span>
        <span></span>
      </Pagiation>
    </StyledSlider>
  )
}

const StyledSlider = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Slide = styled.div`
  text-align: center;
`

const Text = styled.p``

const Name = styled.span`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 22px 0 42px;
  display: inline-block;
`
const Pagiation = styled.span`
  span {
    display: inline-block;
    width: 7px;
    height: 7px;
    margin: 5px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 20px;

    & + span {
      margin-left: 5px;
    }

    &.active {
      background-color: ${theme.colors.accent};
      width: 20px;
    }
  }
`
