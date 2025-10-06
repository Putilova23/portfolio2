import styled from 'styled-components'
import photo from '../../../assets/images/Rectangle 4.png'
import { FlexWrapper } from '../../../components/FlexWrapper.tsx'
import { Container } from '../../../components/Container.ts'
import { theme } from '../../../styles/Theme.ts'
import { font } from '../../../styles/Common.tsx'

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper
          alignItems={'center'}
          justifyContent={'space-between'}
          wrap={'wrap'}
        >
          <div>
            <SmallText>Hi There</SmallText>
            <Name> I am Alena Putilova</Name>
            <MainTitle>A Web Developer.</MainTitle>
          </div>
          <PhotoWrapper>
            <Photo src={photo} alt="" />
          </PhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  )
}

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.secondaryBg};
  display: flex;
`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    content: '';
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};

    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;

    @media ${theme.media.mobile} {
      width: 314px;
      height: 414px;
    }
  }
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;

  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`
const MainTitle = styled.h1`
  font-weight: 400;
  font-size: 27px;

  ${font({
    weight: 400,
    Fmax: 27,
    Fmin: 20,
  })}
`

const Name = styled.h2`
  ${font({
    family: "'Josefin Sans', sans-serif",
    weight: 700,
    Fmax: 50,
    Fmin: 36,
  })}
  letter-spacing: 0.05em;
  margin: 10px 0;

  span {
    position: relative;

    &::before {
      content: '';
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.colors.accent};

      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }
`

const SmallText = styled.h2`
  font-weight: 400;
  font-size: 14px;
`
