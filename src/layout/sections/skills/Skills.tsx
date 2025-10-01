import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper.tsx'
import { SectionTitle } from '../../../components/SectionTitle.tsx'
import { Skill } from './skill/Skill.tsx'
import { Container } from '../../../components/Container.ts'



export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
      <SectionTitle>My Skills</SectionTitle>
      <FlexWrapper wrap={"wrap"} justifyContent={"space-between"}>
        <Skill
          iconId={"codeSvg"}
          title={"html5"}
          description={"consectetyp adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut"}/>
        <Skill
          iconId={"css"}
          title={"css3"}
          description={"consectetyp adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut"}/>
        <Skill
          iconId={"figma"}
          title={"Figma"}
          description={"consectetyp adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut"}/>
        <Skill
          iconId={"figma"}
          title={"Figma"}
          description={"consectetyp adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut"}/>
        <Skill
          iconId={"figma"}
          title={"Figma"}
          description={"consectetyp adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut"}/>
        <Skill
          iconId={"figma"}
          title={"Figma"}
          description={"consectetyp adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut"}/>
        <Skill
          iconId={"figma"}
          title={"Figma"}
          description={"consectetyp adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut"}/>
      </FlexWrapper>
      </Container>
    </StyledSkills>
  )
}

const StyledSkills = styled.section`
  background-color: #ffe5e4;
`