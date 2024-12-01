"use client"
// import { useLocation } from 'react-router-dom';
import MarkBlack from "../../../public/miusMarkBlack.svg"
import MarkWhite from "../../../public/miusMarkWhite.svg"
import Image from "next/image";

export default function Mark() {
    var currentRoute = location.pathname;
    if (currentRoute === "/") {

    }
    // console.log();
    return (
        <Image className="mark" src={MarkBlack} alt={"Mius Thomas Logo"} width={1000}/>
    )

}