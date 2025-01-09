"use client"
import React from "react";
import MarkBlack from "../../../public/miusMarkBlack.svg"
import MarkWhite from "../../../public/miusMarkWhite.svg"
import Image from "next/image";

const Mark = React.forwardRef((props, ref) => {
    return (
        <Image className={"mark  mark-" + props.page + (props.focus > -1 ? " mark-focus" : "")} src={MarkBlack} ref={ref} alt={"Mius Thomas Logo"} width={1000}/>
    )
});
export default Mark;