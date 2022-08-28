import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import { ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,
} from './ServicesElements'

const Services = () => {
  return (
    <>
        <ServicesContainer id="services">
            <ServicesH1>Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Simple Design and Development</ServicesH2>
                    <ServicesP><strong>Starting at $1000</strong><br/><strong>Delivery Time: 1-Week</strong><br/><br/>Work with our team to curate a website based on your wants and needs</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Custom Design and Development</ServicesH2>
                    <ServicesP><strong>Starting at $2000</strong><br/><strong>Delivery Time: 2-Weeks</strong><br/><br/>Work with our team extensively to build your website and brand exactly how you would like</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Network, Hosting, and SEO Services</ServicesH2>
                    <ServicesP><strong>Starting at $20/mo.</strong><br/><strong>Ongoing Servicing</strong><br/><br/>TSDD will optimize and manage SEO, hosting services, and networking services for the duration of your subscription</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    </>
  )
}

export default Services