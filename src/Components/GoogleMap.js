import React from 'react'
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = () => <div style={{width : "50px", height : "50px", backgroundColor : "rgb(255, 77, 77)", borderRadius : "200%", opacity : "0.7"}}></div>;
export default function GoogleMap({lat, lng, zoom}){
    console.log(lat, lng)
    const defaultProps = {
      center: {
        lat,
        lng
      },
      zoom
    };
  
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
          lat = {lat}
          lng = {lng}
          />
        </GoogleMapReact>
      </div>
    );
  }

// import {Map, GoogleApiWrapper} from 'google-maps-react'
// export function GoogleMap({ google }) {
//     return (
//         <Map
//             google={google}
           
//             style={{
//                 width: "80%",
//                 height: "80%"
//             }}
//             initialCenter={
//                 {
//                     lat : 28.704060,
//                     lng : 77.10293
//                 }
//             }
//             zoom={10}
//             disableDefaultUI={true}
//         />
//     )
// };

// export default GoogleApiWrapper({
//     apiKey: "AIzaSyDc_uYSzZP64UG7UNmYeE6uwlgklyiBjFA"
// })(GoogleMap);
