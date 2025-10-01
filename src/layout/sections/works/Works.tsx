import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle.tsx'
import { Menu } from '../../../components/menu/Menu.tsx'
import { FlexWrapper } from '../../../components/FlexWrapper.tsx'
import { Work } from './work/Work.tsx'
import socialImg from './../../../assets/images/Rectangle 14.png'
import timerImg from './../../../assets/images/Rectangle 16.png'

const worksItems = ["All", "Landing Pace", "React", "Spa"]

export const Works = () => {
  return (
    <StyledWorks>
       <SectionTitle>My Works</SectionTitle>

      <Menu menuItems={worksItems}/>
      <FlexWrapper justifyContent={"space-around"}>
        <Work
          title={"Social Network"}
          src={socialImg}
          text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, dignissimos ducimus earum eius enim eumexcepturi expedita fuga incidunt libero modi obcaecati omnis perferendis possimus, quibusdam quis quod sedvelit?"}

        />


        <Work title={"Timer"}
              src={timerImg}
              text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, dignissimos ducimus earum eius enim eumexcepturi expedita fuga incidunt libero modi obcaecati omnis perferendis possimus, quibusdam quis quod sedvelit?"}
        />
      </FlexWrapper>
    </StyledWorks>
  )
}

const StyledWorks = styled.section`
min-height: 100vh;
  background-color: #deefff;
`

