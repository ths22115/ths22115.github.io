"use client"
import React from "react";
import MarkBlack from "../../../public/miusMarkBlack.svg"
import Image from "next/image";

const Mark = React.forwardRef((props, ref) => {
    var width = props.isMobile ? 800 : 1000
    if (props.isMobile) {
        // alert("rly mobile!!!!")
    }
    return (
        <Image className={"mark " + (props.isMobile ? "mark-mobile " : "") +  "mark-" + props.page + (props.focus > -1 ? " mark-focus" : "")} src={MarkBlack} ref={ref} alt={"Mius Thomas Logo"} width={props.size}/>
    )
});
Mark.displayName = "Mark";
export default Mark;