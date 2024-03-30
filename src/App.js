import './App.css';
import { OhMyMap, MapObj } from './react-virtual-map';

function Circle(){
    return (
        <div
            style={{
                width:"20px",
                height:"20px",
                borderRadius:"20px",
                background:"rgb( 255 0 0 )"
            }}
        >
        </div>
    )
}

function App() {
  return (
    <div
        style={{
            width:"100vw",
            height:"100vh",
        }}
    >
        <OhMyMap 
        height={1000}
        width={1000}
        coordinateCenter="bl"
        >
            <MapObj
                x={10}
                y={10}
            >
                <Circle />
            </MapObj>
            <MapObj
                x={100}
                y={10}
            >
                <Circle/>
            </MapObj>
        </OhMyMap>
    </div>
    );
}

export default App;
