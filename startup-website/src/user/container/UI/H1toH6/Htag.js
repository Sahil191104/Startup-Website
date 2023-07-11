import React from 'react';
import { H1tag, H2tag, H3tag, H4tag, H5tag, H6tag } from './htag.style';

function Htag({ children, name }) {

    const HeadTag = () => {
        switch (name) {
            case 'h1tag':
                return H1tag;
            case 'h2tag':
                return H2tag;
            case 'h3tag':
                return H3tag;
            case 'h4tag':
                return H4tag;
            case 'h5tag':
                return H5tag;
            case 'h6tag':
                return H6tag;
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