import styled from 'styled-components'
import { Icon } from '../../components/icon/Icon.tsx'
import { FlexWrapper } from '../../components/FlexWrapper.tsx'


export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction={"column"} alignItems={"center"}>
        <Name>Alena</Name>
        <SocialList>
          <SocialItem>
            <SocialLink>
              <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px"} iconId={"inst"}></Icon>
            </SocialLink>
          </SocialItem>

          <SocialItem>
            <SocialLink>
              <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px"} iconId={"vk"}></Icon>
            </SocialLink>
          </SocialItem>

          <SocialItem>
            <SocialLink>
              <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px"} iconId={"tg"}></Icon>
            </SocialLink>
          </SocialItem>

          <SocialItem>
            <SocialLink>
              <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px"} iconId={"link"}></Icon>
            </SocialLink>
          </SocialItem>

        </SocialList>
        <Copyright>® 2023 Svetlana Dyablo, All Rights</Copyright>
      </FlexWrapper>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  
`

const Name = styled.span`
  
`
const SocialList = styled.ul`
  display: flex;
  gap: 30px;
`

const SocialItem = styled.span`
  
`

const SocialLink = styled.a`
  
`

const Copyright = styled.small`
  
`