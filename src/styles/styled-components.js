import styled from 'styled-components'

export const Image = styled.div`
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-size: cover;
    position: absolute;
    background-image: ${props => `url(${props.src})`};
`;