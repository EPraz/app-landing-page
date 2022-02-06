import React from 'react';

function About(props) {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={props.image} alt="" />
            </div>
            <div className="about-text">
                <h2>{props.title}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, dolorum? Optio dignissimos architecto illum distinctio error, dolor molestiae accusamus animi quas rerum delectus, quia beatae. Soluta nesciunt iste, iure modi debitis beatae ex doloribus cumque.</p>
                <button>{props.button}</button>
            </div>
        </div>
    );
}

export default About;
