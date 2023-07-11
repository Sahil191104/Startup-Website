import React from 'react';
import { H1tag, H5tag } from './htag.style';

function Htag({children, name}) {

    const HeadTag = () => {
        switch (name) {
            case 'h1tag':
                return H1tag;
            case 'h5tag':
                return H5tag;
            default:
                return H1tag;
        }
    }

    const CustomsHeader = HeadTag();

    return (
        <CustomsHeader>
            {children}
        </CustomsHeader>
    );
}

export default Htag;