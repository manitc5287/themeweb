import React from 'react'
import Fullpage , { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage'
const FullPage1 = () => {

    const SectionStyle = {
        height:'60vh',
        width:'100vw',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
  return (
<Fullpage>
    <FullPageSections>
        <FullpageSection style={SectionStyle}>
            <h1>Screen 1</h1>
        </FullpageSection>

        <FullpageSection style={SectionStyle}>
            <h1>Screen 2</h1>
        </FullpageSection>

        <FullpageSection style={SectionStyle}>
            <h1>Screen 1</h1>
        </FullpageSection>
    </FullPageSections>
</Fullpage>
  )
}

export default FullPage1
