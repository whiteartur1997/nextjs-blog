import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import styled from 'styled-components'

type StyledLinkType = {
  children?: ReactNode
  as?: any
  className?: string
  href: string
  page?: string
}

const StyledLink: React.FC<StyledLinkType> = ({
  as,
  children,
  className,
  href,
  page,
}) => {
  const router = useRouter()
  return (
    <Link href={href} as={as} passHref>
      <a className={`${className} ${page === router.asPath && 'active'}`}>
        {children}
      </a>
    </Link>
  )
}

export default styled(StyledLink)`
  text-decoration: none;
  color: grey;
  transition: all 0.2s ease-in-out;

  &.active {
    font-weight: bold;
    color: black;
  }

  &:hover {
    cursor: pointer;
    color: black;
  }
`
