import react from "react";


interface OhMyMapProps {
    coordinateCenter?:"tl"|"tr"|"bl"|"br",
    width:number,
    height:number,
    scrolX?:boolean,
    scrolY?:boolean,
    children:react.ReactNode,
    className?:string,
    style?:react.CSSProperties
}
interface MapObjProps{
    x:number,
    y:number,
    children:react.ReactNode,
    className?:string
}

declare const OhMyMap:react.FC<OhMyMapProps>;
declare const MapObj:react.FC<MapObjProps>;

export {
    OhMyMap,
    MapObj
}