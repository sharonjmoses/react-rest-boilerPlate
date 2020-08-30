import React from 'react';

const PhotoContainer = (props) => {
    return ( 
        <>
        <section>
            <img src={props.url.small} alt="Loading...." />
        </section>
        </>
     );
}
 
export default PhotoContainer;