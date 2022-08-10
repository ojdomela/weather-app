import styled from 'styled-components';
import { globals } from '../../styles';

export const Container = styled.div`
    padding: 1.5rem;
    background-color: ${globals.primaryColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const Form = styled.form`
    margin: 1.5rem;
`