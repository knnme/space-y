import styled from 'styled-components';
import { MenuProps } from '.';
import { pixelToRem } from '../utils/pixelToRem';

export const MenuComponents = styled.p<MenuProps>`
font-weight: 500;
font-size: ${pixelToRem(16)};
line-height: ${pixelToRem(20)};
color: var(--text);
margin: ${({margin}) => (margin ? pixelToRem(0) : pixelToRem(0, 5))};
@media screen and (max-width: 1023px) {
    display: none;
}
`;