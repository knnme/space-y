import styled from "styled-components";

function pixelToRem(...values:number[]): string {
    return values
    .reduce((acc, current) => (acc += current / 16 + `rem `), "")
    .trim();
}

export const ButtonComponent = styled.button`
    background-color: var(--mars);
    width: ${pixelToRem(264)};
    height: ${pixelToRem(62)};
    border-radius: ${pixelToRem(6)};
    border: none;
    color: var(--text);
    font-size: ${pixelToRem(18)};
`;