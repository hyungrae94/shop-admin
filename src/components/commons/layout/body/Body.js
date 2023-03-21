import styled from '@emotion/styled'

const Body = ({ childeren }) => {
  return <BodyContainer>{childeren}</BodyContainer>
}

export default Body

const BodyContainer = styled.main`
  width: 100%;
  min-height: calc(100vh - 90px);
  height: 1000px;

  background-color: #e4e6e7;
`
