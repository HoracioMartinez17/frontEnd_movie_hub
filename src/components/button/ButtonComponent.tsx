import { FC, ReactNode } from 'react';
import css from './buttonComponent.module.css';

interface IconButtonProps {
    onClick: () => void;
    className?: string;
    children: ReactNode;
    backgroundColor?: 'greenBackground' | 'redBackground' |'blackBackground';
    button_hover?: 'button_hover_red' | 'button_hover_green' | 'button_hover_black';
    textSize?: 'smallText' | 'largeText';
}

export const ButtonComponent: FC<IconButtonProps> = ({
    onClick,
    className,
    backgroundColor,
    button_hover,
    textSize,
    children,
}) => {
    const buttonClasses = `${css.button_addMovie}
     ${backgroundColor ? css[backgroundColor] : ''}
     ${button_hover ? css[button_hover] : ''}
     ${textSize ? css[textSize] : ''} ${className || ''}`;

    return (
        <button type="button" className={buttonClasses} onClick={onClick}>
                {children}
        </button>
    );
};

export default ButtonComponent;
