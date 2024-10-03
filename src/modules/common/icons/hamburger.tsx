import React from "react"

import { IconProps } from "../../../types/icon"

const Hamburger = ({ size = "16", color = "currentColor", ...attributes }) => {
    return (
        <svg width={size} height={size} viewBox="0 0 25 21" {...attributes}>
            <path d="M0 1.5H25" stroke={color} strokeWidth="1.25" />
            <path d="M0 19H21" stroke={color} strokeWidth="1.25" />
            <path d="M0 10H16" stroke={color} strokeWidth="1.25" />
        </svg>
    );
};

export default Hamburger;


