import React from 'react';
import HoverTestComp from '../components/blogs/HoverTestComp.jsx'
import EventSlider from 'components/testimonials/EventSlider.jsx';
import DashboardHeader from 'components/headers/DashboardHeader.js';

const HoverTest = () => {
    return(
        <div>
        <DashboardHeader/>
            <content>
            <EventSlider/>
<HoverTestComp/>
</content>
</div>
    )
};

export default HoverTest;