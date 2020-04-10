// import React, { Component } from "react"
// import { Map, GoogleMap, Marker, GoogleApiWrapper } from "google-maps-react"

// const mapStyles = [
//   {
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#212121",
//       },
//     ],
//   },
//   {
//     elementType: "labels.icon",
//     stylers: [
//       {
//         visibility: "off",
//       },
//     ],
//   },
//   {
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#757575",
//       },
//     ],
//   },
//   {
//     elementType: "labels.text.stroke",
//     stylers: [
//       {
//         color: "#212121",
//       },
//     ],
//   },
//   {
//     featureType: "administrative",
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#757575",
//       },
//     ],
//   },
//   {
//     featureType: "administrative.country",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#9e9e9e",
//       },
//     ],
//   },
//   {
//     featureType: "administrative.land_parcel",
//     stylers: [
//       {
//         visibility: "off",
//       },
//     ],
//   },
//   {
//     featureType: "administrative.locality",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#bdbdbd",
//       },
//     ],
//   },
//   {
//     featureType: "poi",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#757575",
//       },
//     ],
//   },
//   {
//     featureType: "poi.park",
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#181818",
//       },
//     ],
//   },
//   {
//     featureType: "poi.park",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#616161",
//       },
//     ],
//   },
//   {
//     featureType: "poi.park",
//     elementType: "labels.text.stroke",
//     stylers: [
//       {
//         color: "#1b1b1b",
//       },
//     ],
//   },
//   {
//     featureType: "road",
//     elementType: "geometry.fill",
//     stylers: [
//       {
//         color: "#2c2c2c",
//       },
//     ],
//   },
//   {
//     featureType: "road",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#8a8a8a",
//       },
//     ],
//   },
//   {
//     featureType: "road.arterial",
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#373737",
//       },
//     ],
//   },
//   {
//     featureType: "road.highway",
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#3c3c3c",
//       },
//     ],
//   },
//   {
//     featureType: "road.highway.controlled_access",
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#4e4e4e",
//       },
//     ],
//   },
//   {
//     featureType: "road.local",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#616161",
//       },
//     ],
//   },
//   {
//     featureType: "transit",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#757575",
//       },
//     ],
//   },
//   {
//     featureType: "water",
//     elementType: "geometry",
//     stylers: [
//       {
//         color: "#000000",
//       },
//     ],
//   },
//   {
//     featureType: "water",
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#3d3d3d",
//       },
//     ],
//   },
// ]

// export class MapContainer extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       stores: [
//         { lat: 48.7452526, lng: -0.0216038 },
//         // { latitude: 47.359423, longitude: -122.021071 },
//         // { latitude: 47.2052192687988, longitude: -121.988426208496 },
//         // { latitude: 47.6307081, longitude: -122.1434325 },
//         // { latitude: 47.3084488, longitude: -122.2140121 },
//         // { latitude: 47.5524695, longitude: -122.0425407 },
//       ],
//     }
//   }

//   displayMarkers = () => {
//     return this.state.stores.map((store, index) => {
//       return (
//         <Marker
//           key={index}
//           id={index}
//           // position={{
//           //   lat: store.latitude,
//           //   lng: store.longitude,
//           // }}
//           onClick={() => console.log("You clicked me!")}
//         />
//       )
//     })
//   }

//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         zoom={14}
//         style={mapStyles}
//         initialCenter={{ lat: 48.7452526, lng: -0.0216038 }}
//       >
//         {this.displayMarkers()}
//       </Map>
//     )
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyBbhZRkdV-u3ZI-Aqt9vzV-ocMaqmkYXwo",
// })(MapContainer)
