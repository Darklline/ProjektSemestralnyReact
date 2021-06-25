import { FC } from 'react';
import styled from 'styled-components';
import MockPage from '../../components/Emptypage/EmptyPage';

const Wrapper = styled.footer`
    background-color: #404040;
    width: 100vw;
    display: flex;
    justify-content: space-around;
`;

const Footer: FC = () => {
    return (
        <Wrapper>
            <MockPage />
        </Wrapper>
    );
} 

export default Footer;