import Image from 'next/image'
import styled from 'styled-components'

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`

export const Loader = () => {
  return (
    <LoaderWrapper>
      <Image width="200" height="200" src="/Spinner.svg" alt="loader" />
    </LoaderWrapper>
  )
}
