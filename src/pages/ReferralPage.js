import React from 'react';
import ReferralProgram from 'layouts/MentorNigeriaSections/ReferralProgram';
import FooterSection from '../layouts/MentorNigeriaSections/footerSection';

const ReferralPage = () => {
  return (
    <div className='main-container'>
        <ReferralProgram />
        <FooterSection firstText={'LearnNova Learning Support System'} account={false} link={'https://www.learnnova.ng/'} />
    </div>
  )
}

export default ReferralPage