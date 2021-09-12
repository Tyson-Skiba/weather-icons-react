import * as React from "react"
import { SvgProps } from "./props";

export const Loader: React.FC<SvgProps> = ({
    size,
    colour,
    onClick,
}) => (
    <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width={`calc(0.8 * ${size})`}
        height={size}
        viewBox="0 0 24 30"
        xmlSpace="preserve"
        onClick={onClick}
    >
        <rect x="0" y="13" width="4" height="5" fill={colour ?? 'currentColor'}>
        <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
        <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
        </rect>
        <rect x="10" y="13" width="4" height="5" fill={colour ?? 'currentColor'}>
        <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
        <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
        </rect>
        <rect x="20" y="13" width="4" height="5" fill={colour ?? 'currentColor'}>
        <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
        <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
        </rect>
    </svg>
)
