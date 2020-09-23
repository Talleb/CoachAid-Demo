import React from 'react';
import DashTestComponents from '../components/pricing/DashTestComponents.jsx'
import EventSlider from 'components/testimonials/EventSlider.jsx';
import DashboardHeader from 'components/headers/DashboardHeader.js';

const DashTest = () => {

    return(
        <div>
        <DashboardHeader/>
            <content>
            <EventSlider/>
<DashTestComponents/>
</content>
</div>
    )
};

export default DashTest;