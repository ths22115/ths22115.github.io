'use client'
import React, { useRef, useEffect, useState } from "react";

export default function Piece(props) {
    /* 
        .img == path to piece or img of project
       .title == enity + site type (web app, portfolio site, etc)
       .desc == job description
       .date == finish date
       .cat == job category (project, piece)
    */
    // const [preview, setPreview] = useState(false);

    // function isFocused() {
    //     // console.log(props.id + ", " + props.focus === props.id)
    //     if (props.focus == props.id) {
    //         return true
    //     }
    //     return false
    // }
    console.log(props.focus)
    if (props.isMobile) {
        return (
            <div>
                <img id={props.id} className={"piece-img"} src={props.src} alt={"project img"} />
                <div className={"details details-active piece-details mobile"}>
                    <div className="piece-title">{props.title}</div>
                    <div className={"expanded piece-expanded"}>
                        <div className="piece-subtitle">
                            <div className="piece-type">{props.type}</div>
                            <div className="piece-date">{props.date}</div>
                        </div>
                        <div className="piece-desc">{props.desc}</div>
                    </div>
                 </div>
                </div>
        )
    }
    return (
        <img id={props.id} className={"piece-img " + (props.focus == props.id ? "piece-focus" : "") 
            + (props.focus != props.id && props.focus != -1 ? "piece-fade" : "")} src={props.src} alt={"project img"} 
        onClick={() => props.onClick(
            {
                id: props.id, 
                title: props.title, 
                desc: props.desc, 
                date: props.date, 
                type: props.type
            })}/>
    )
}