import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle.tsx'
import { TabMenu } from './tabmenu/TabMenu.tsx'
import { FlexWrapper } from '../../../components/FlexWrapper.tsx'
import { Work } from './work/Work.tsx'
import socialImg from './../../../assets/images/Rectangle 14.png'
import timerImg from './../../../assets/images/Rectangle 16.png'
import { Container } from '../../../components/Container.ts'

const worksItems = ['All', 'Landing Pace', 'React', 'Spa']

export const Works = () => {
  return (
    <StyledWorks>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu menuItems={worksItems} />
        <FlexWrapper justifyContent={'space-between'}>
          <Work
            title={'Social Network'}
            src={socialImg}
            text={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, dignissimos ducimus earum eius enim eumexcepturi expedita fuga incidunt libero modi obcaecati omnis perferendis possimus, quibusdam quis quod sedvelit?'
            }
          />
          <Work
            title={'Timer'}
            src={timerImg}
            text={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, dignissimos ducimus earum eius enim eumexcepturi expedita fuga incidunt libero modi obcaecati omnis perferendis possimus, quibusdam quis quod sedvelit?'
            }
          />
        </FlexWrapper>
      </Container>
    </StyledWorks>
  )
}

const StyledWorks = styled.section``
