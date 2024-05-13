"use client"
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { DockContext } from "@/app/contexts/dockContext";

const PanelStyles = styled.footer<{ theme: any }>`
    position: absolute;
    bottom: ${({ theme }) => theme.bottom || '20px'}; // Elevated from the bottom
    left: 50%; // Centered horizontally
    transform: translateX(-50%); // Centered horizontally
    background-color: ${({ theme }) => theme.backgroundColor || 'rgba(0, 0, 0, 0.7)'}; // Semi-transparent black
    box-shadow: ${({ theme }) => theme.boxShadow || '0 -2px 5px rgba(0,0,0,0.2)'};
    display: flex;
    justify-content: ${({ theme }) => theme.justifyContent || 'space-around'};
    padding: ${({ theme }) => theme.padding || '10px 20px'}; // Padding adjusted to content
    z-index: ${({ theme }) => theme.zIndex || '1'};
    border-radius: ${({ theme }) => theme.borderRadius || '15px'}; // Rounded corners like macOS dock
`


const Dock = () => {
    const { theme } = useContext(DockContext);

    return (
        <PanelStyles theme={theme}>
            <span className="text-white">
                This is footer Bitch
            </span>
        </PanelStyles>
    )
}
export default Dock;