import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: ${props => props.jc};
    align-items: ${props => props.ai};
    width: ${props => props.width};
    margin: 0 auto;
    min-height: ${props => props.mh};
`