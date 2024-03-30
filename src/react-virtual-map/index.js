"use client";
import React, {createContext, useContext, useRef} from "react"
const mapPropsContext = createContext(null)

/**@type {import("react").FC<{coordinateCenter?:"tl"|"tr"|"bl"|"br",width:number,height:number,scrolX?:boolean,scrolY?:boolean,children:import("react").ReactNode,className?:string,style?:import("react").CSSProperties}>} */
const OhMyMap = ({coordinateCenter="tl" ,width, height, AllowScrolX, AllowScrolY, children,className="",style={}})=>{
    const mover = useRef(null)
    var moving = false
    var lastPos = [0,0]
    var pos = [0,0]
    function renewPos(newPos){
        if (!moving){
            return
        }

        let newEPos = [
            pos[0]+(newPos[0]-lastPos[0]),
            pos[1]+(newPos[1]-lastPos[1])
        ]

        lastPos = newPos
        pos = newEPos
        mover.current.style.transform = `translateX(${pos[0]}px) translateY(${pos[1]}px)`
    }

    return (
        <div style={{
            width:"100%",
            height:"100%",
            overflow:'hidden',
            ...style
        }}
        onMouseLeave={()=>{moving=false}}
        onMouseEnter={()=>{moving=false}}
        onMouseMove={(e)=>{renewPos([e.clientX, e.clientY])}}
        >

            <div 
            style={{
                width:`${width}px`,
                overflow:'hidden',
                height:`${height}px`
            }}
            className={className}
            ref={mover}
            onMouseDown={(e)=>{moving=true;lastPos=[e.clientX,e.clientY]}}
            onMouseUp={()=>{moving=false}}
            >
            <mapPropsContext.Provider value={{
                coordinateCenter,
                width,
                height
            }}>
                {children}
            </mapPropsContext.Provider>
            </div>
        </div>
    )
}

/**@type {import("react").FC<{x:number,y:number,className?:string}>} */
const MapObj = ({x,y, children, className=""})=>{
    const mapProps = useContext(mapPropsContext)
    const xf = mapProps.coordinateCenter[1] === "l"
    const yf = mapProps.coordinateCenter[0] === "t"
    let xi=x, yi=y
    if (!xf){xi = mapProps.width - x}
    if(!yf){yi = mapProps.height - y}
    return (
        <div
        style={{
            width:"0px",
            height:"0px",
            transform:`translateX(${xi}px) translateY(${yi}px)`
        }}
        >
            <div 
            style={{
                width:"0px",
                height:"0px",
                overflow:"visible",
                display:"flex",
                justifyContent:xf?"start":"end",
                alignItems:yf?"start":"end"
            }}
            className={className}>
                <div
                    style={{flexShrink:"0"}}
                >
                {children}
                </div>
            </div>
        </div>
    )
}
export {OhMyMap,MapObj}



//X mehsya 