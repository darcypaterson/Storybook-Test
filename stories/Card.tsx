import React from 'react';
import './card.css';
import './css/global.css';

interface CardProps {
    /**
     * Is this the principal call to action on the page?
     */
    // primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    // size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    label?: string;
    cardCategory?: string;
    cardHeading?: string;
    cardLink?: string;
    display?: 'block' | 'none';
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Card = ({
    backgroundColor,
    display,
    cardCategory,
    cardHeading,
    cardLink,
    ...props
}: CardProps) => {

    return (
        <div
            className={['card'].join(' ')}
            style={{ backgroundColor }}
            {...props}
        >

            <div className={['card-ellipse', `d-${display}`].join(' ')}></div>
            <h3 className={['card-category'].join(' ')}>{cardCategory}</h3>
            <h2 className={['card-heading'].join(' ')}>{cardHeading}</h2>
            <a className={['card-link'].join(' ')} href="#">{cardLink}</a>
        </div>
    );
};
