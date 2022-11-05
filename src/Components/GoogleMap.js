import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

/*global google*/
export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // for google map places autocomplete
      address: '',

      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
  
      mapCenter: {
        lat: this.props.lat,
        lng: this.props.lng
      }
    };
  
    geocodeByAddress(this.props.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log('Success', latLng);

        // update center state
        this.setState({ mapCenter: latLng });
      })
      .catch(error => console.error('Error', error));
  }

 
  render() {
    return (
      <div id='googleMaps' style={{width:"40%", height:"80%"}}>
        
        <div id='map_render' style={{width:"30%", height:"40%"}}>
         {this.props.loc===true?<Map 
          google={this.props.google}
          initialCenter={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng
          }}
          style={{width:"50%", height:"50%", marginTop:"70px"}}
          center={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng
          }}
          >
          <Marker 
           icon={{
            path: google.maps.SymbolPath.CIRCLE,
            fillColor: 'red',
            fillOpacity: .2,
            scale: 40,
            strokeColor: 'white',
            strokeWeight: .5}
        }
            position={{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng
            }} />
        </Map>:<Map 
          google={this.props.google}
          initialCenter={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng
          }}
          style={{width:"50%", height:"50%"}}
          center={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng
          }}
          >
          <Marker 
            position={{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng
            }} />
        </Map>}
       
        </div>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAEh9eMLYsV66D6yRHTowuZ7Rgh6aQ9Alo')
})(MapContainer)