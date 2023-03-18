import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker
} from "react-simple-maps";
import styled from "styled-components";

const MapStyle = styled.div`
  animation: animate 3s infinite ease alternate;

  @keyframes animate {
    to{
      transform: translateY(10px) translateX(10px);
    }
  }
`;


const Map = () => {

    return (
        <MapStyle>
        <ComposableMap
            projection="geoOrthographic"
            projectionConfig={{
                rotate: [-85.0,-10, 0],
                center: [-5, -3],
                scale: 300
            }}
            style={{width:"100%",height:"100%", animation:''}}
        >
            <Geographies
                geography="../src/components/static/features.json"
                fill="rgb(8, 209, 152, 0.8)"
                stroke="white"
                strokeWidth={0.5}
            >
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo} />
                    ))
                }
            </Geographies>
            <Marker coordinates={[80.7612, 6.7971]}>
                    <g
                        fill="none"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        transform="translate(-12, -24)"
                    >
                        <circle cx="12" cy="10" r="3" />
                        <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                    </g>
                <text
                    textAnchor="middle"
                    y={25}
                    style={{ fontFamily: "cursive", fill: "white", fontWeight:"400", fontSize:"0.7rem",fontStyle:"italic"}}
                >
                    Sri lanka
                </text>
            </Marker>
        </ComposableMap>
        </MapStyle>
    );
};

export default Map;
