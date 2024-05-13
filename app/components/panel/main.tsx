"use client"
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { PanelContext } from "@/app/contexts/panelContexts";
import Image from "next/image";

const PanelStyles = styled.header<{ theme: string }>`
    background-color: ${({ theme }) => theme.backgroundColor || 'black'};
    position: ${({ theme }) => theme.position || 'absolute'}; 
    color: ${({ theme }) => theme.color || 'white'};
    flex-shrink: ${({ theme }) => theme.flexShrink || 0};
    width: ${({ theme }) => theme.width || '100%'};
    padding-bottom: ${({ theme }) => theme.paddingBottom || '2px'};
`


const Panel = () => {
    const [date, setDate] = useState<Date>(new Date());
    const { theme } = useContext(PanelContext);

    useEffect(() => {
        const interval = setInterval(() => {
            const thisDate = new Date();
            setDate(thisDate);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <PanelStyles theme={theme} >
            <header className="bg-black text-white w-full flex justify-between p-2">
                <span className="left">
                    Activities
                </span>
                <span className="center text-small">
                    {`${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}  ${date.getHours()}:${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`}
                </span>
                <span className="right flex items-center justify-between w-auto text-white ">
                    <Image
                        src="/icons/network-wireless-symbolic.svg"
                        alt="wifi"
                        width={16}
                        height={16}
                        className="text-white mr-3"
                    />
                    <Image
                        src="/icons/bluetooth-active-symbolic.svg"
                        alt="wifi"
                        width={16}
                        height={16}
                        className="mr-3 fill-white"
                    />
                    <Image
                        src="/icons/audio-volume-medium-symbolic.svg"
                        alt="wifi"
                        width={16}
                        height={16}
                        className="mr-3 fill-white"
                    />
                    <Image
                        src="/icons/battery-level-70-charging-symbolic.svg"
                        alt="wifi"
                        width={16}
                        height={16}
                        className="mr-2 fill-white"
                    />

                </span>
            </header>
        </PanelStyles>
    )
};

export default Panel;