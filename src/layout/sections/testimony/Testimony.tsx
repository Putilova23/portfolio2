import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle.tsx'
import { Icon } from '../../../components/icon/Icon.tsx'
import { Slider } from '../../../components/slider/Slider.tsx'
import { FlexWrapper } from '../../../components/FlexWrapper.tsx'


export const Testimony = () => {
  return (
    <StyledTestimony>
     <SectionTitle>Testimony</SectionTitle>
      <FlexWrapper direction={"column"} alignItems={"centre"} >
        <Icon iconId={"typescript"}/>
        <Slider/>
      </FlexWrapper>

    </StyledTestimony>
  )
}

const StyledTestimony = styled.section`
  background-color: #aeb9ff;
  min-height: 50vh;
`