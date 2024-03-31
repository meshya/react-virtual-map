import './App.css';
import { MapObj, OhMyMap } from './react-virtual-map';

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
            width={500}
            height={500}
            coordinateCenter='br'
        >
            <MapObj
                x={0}
                y={100}
            >
                Bye
            </MapObj>
            <MapObj
                x={300}
                y={20}
            >
                Bye .
            </MapObj>
        </OhMyMap>
    </div>
    );
}

export default App;
