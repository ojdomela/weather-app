import styled from 'styled-components';
import { globals } from '../../styles';

export const CardWrapper = styled.div`
    margin: 1.5rem;
    padding: 1.5rem;
    border-radius: 0.5rem;
    min-width: 30rem;
    border: 2px solid ${globals.primaryColor};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const Button = styled.button`
    align-self: flex-start;
    border: none;
    height: 2.5rem;
    width: 2.5rem;
    padding: 0;
    margin: .5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${globals.tertiaryColor};
`

export const Title = styled.h2`

`

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`