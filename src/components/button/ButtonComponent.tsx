import { FC, ReactNode } from 'react';
import css from './buttonComponent.module.css';

interface IconButtonProps {
    onClick: () => void;
    className?: string;
    children: ReactNode;
    backgroundColor?: 'greenBackground' | 'redBackground';
    textSize?: 'smallText' | 'largeText';
}

export const ButtonComponent: FC<IconButtonProps> = ({
    onClick,
    className,
    backgroundColor,
    textSize,
    children,
}) => {
    const buttonClasses = `${css.button_addMovie}
     ${backgroundColor ? css[backgroundColor] : ''}
     ${textSize ? css[textSize] : ''} ${className || ''}`;

    return (
        <button type="button" className={buttonClasses} onClick={onClick}>
            <span className={css.button_span_addMovie}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                        fill="currentColor"
                        d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
                    ></path>
                </svg>
                {children}
            </span>
        </button>
    );
};

export default ButtonComponent;
