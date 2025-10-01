import styled from 'styled-components'
import { FlexWrapper } from '../FlexWrapper.tsx'


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
        <span></span>
        <span></span>
      </Pagiation>
    </StyledSlider>
  )
}

const StyledSlider = styled.div`
  border: 1px solid red;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Slide = styled.div`
 
  text-align: center;
`

const Text = styled.p`
  
`

const Name = styled.span`
  
`
const Pagiation = styled.span`
  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 5px;
    background-color: deeppink;
  }
`