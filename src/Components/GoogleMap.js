// import React from 'react'
// import GoogleMapReact from 'google-map-react';
// const AnyReactComponent = () => <div style={{width : "50px", height : "50px", backgroundColor : "rgb(255, 77, 77)", borderRadius : "200%", opacity : "0.7"}}></div>;
// export default function GoogleMap({lat, lng, zoom}){
//     console.log(lat, lng)
//     const defaultProps = {
//       center: {
//         lat,
//         lng
//       },
//       zoom
//     };
  
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: '100%', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: "" }}
//           defaultCenter={defaultProps.center}
//           defaultZoom={defaultProps.zoom}
//         >
//           <AnyReactComponent
//           lat = {lat}
//           lng = {lng}
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }

import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
// import PlacesAutocomplete, {
//   geocodeByAddress,
//   getLatLng,
// } from 'react-places-autocomplete';

export class MapContainer extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
   
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
   
    render() {
      return (
        <Map google={this.props.google}
            onClick={this.onMapClicked}>
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
        </Map>
        
      )
    }
  }

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAEh9eMLYsV66D6yRHTowuZ7Rgh6aQ9Alo')
})(MapContainer)

// import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';

// const handleAddress = (e)=>{
//     setSelectedAddress(e);
//     geocodeByAddress('Montevideo, Uruguay')
//    .then(results => getLatLng(results[0]))
//   .then(({ lat, lng }) =>
//     console.log('Successfully got latitude and longitude', { lat, lng })
//   );

// <GooglePlacesAutocomplete
//    apiKey={config.url.Google_key}
//    selectProps={{
//    placeholder: 'Address *',
//    name:"address",
//    inputValue:inputField['address'],
//    onInputChange : (e)=>{setInputField({...inputField, ['address']: e})},
//    onChange:(place) => {handleAddress(place.label); setErrorAddress(false);console.log(place)}
//    }}
// />