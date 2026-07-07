"use client"
import React from "react";
import MarkBlack from "../../../public/miusMarkBlack.svg"
import Image from "next/image";
import { useStaticEffects } from "../contexts/static-effects-context";
import { useMobile } from "../contexts/mobile-context";

const Mark = React.forwardRef((props, ref) => {
    const { isStaticEnabled } = useStaticEffects();
    const { isMobile } = useMobile();
    return (
        <Image 
        className={"mark " + (isMobile ? "mark-mobile " : "") 
          +  "mark-" + props.page + (props.focus > -1 ? " mark-focus" : "") 
          + (!isStaticEnabled ? " static-off" : "")} 
        src={MarkBlack} ref={ref} alt={"Mius Thomas Logo"} width={props.size}/>
    )
});
Mark.displayName = "Mark";
export default Mark;