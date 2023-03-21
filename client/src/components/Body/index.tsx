// Globals
import React from 'react'

// Styles
import { StyledBody } from './styles.d'

const Body = ({children}: JSX.ElementChildrenAttribute) => {
    return <StyledBody>{children}</StyledBody>
}

export { Body }