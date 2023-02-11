/* Button Prop Types */

import React from "react"

type TButtonSize = "small" | "medium" | "large"

type TButtonType = "primary" | "secondary" | "tertiary"

export interface IButtonProps {
    size: TButtonSize,
    iconStart?: any;
    iconEnd?: any;
    type: TButtonType;
    children?: string;
}

