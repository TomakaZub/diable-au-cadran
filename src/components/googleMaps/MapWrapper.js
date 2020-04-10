// Import React and React DOM
import * as React from "react"
import { render } from "react-dom"

// Import Google Map component
import GoogleMapComponentWithMarker from "./GoogleMapWithMarker"

// Some default styles
const styles = {
  width: "100%",
  height: "100%",
}

const MapWrapper = () => {
  return (
    <div style={styles}>
      <GoogleMapComponentWithMarker
        googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBbhZRkdV-u3ZI-Aqt9vzV-ocMaqmkYXwo'
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  )
}

export default MapWrapper
