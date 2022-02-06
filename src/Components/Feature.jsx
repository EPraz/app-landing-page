import React from 'react';
import FeatureBox from './FeatureBox';
import featureImage from '../images/feature_1.png';
import featureImage1 from '../images/feature_2.png';
import featureImage2 from '../images/feature_3.png';

function Feature() {
    return (<div id='features'>
        <div className='a-container'>
            <FeatureBox image={featureImage} title='Development Course' />
            <FeatureBox image={featureImage1} title='Money Saving Services' />
            <FeatureBox image={featureImage2} title='Usability Interface Course' />
        </div>
    </div>);
}

export default Feature;
