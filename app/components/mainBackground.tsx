"use client"
import { ReactNode, useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "@/app/contexts/themeContexts";
import BackgroundImage from '@/public/TheLake/TheLake-0.jpg'
import BackgroundImage2 from '@/public/TheLake/TheLake-1.jpg'
const date = new Date();
const RealBackground = (date.getHours() >= 20 || date.getHours() < 6) ? BackgroundImage2 : BackgroundImage;console.log(date.getHours());
const DesktopStyle = styled.div<{ theme: any }>`
    background-color: ${({ theme }) => theme.backgroundColor || 'red'};
    background-image: url(${({ theme }) => theme.backgroundImage?.src || RealBackground.src});
    background-size: ${({ theme }) => theme.backgroundSize || 'cover'};
    background-repeat: ${({ theme }) => theme.backgroundRepeat || 'no-repeat'};
    height: 100vh;
    display: flex;
    flex-direction: column;
`

interface DesktopComponentProps {
    children: ReactNode;
}

const DesktopWrapper: React.FC<DesktopComponentProps> = ({ children }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <DesktopStyle theme={theme}>
            {children}
        </DesktopStyle>
    );
}

export default DesktopWrapper;