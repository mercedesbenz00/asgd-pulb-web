import PropTypes from "prop-types";
import GoogleMapReact from 'google-map-react';

const GoogleMap = ({
    lat,
    lng,
    zoom,
    options,
}) => {
    return (
        <div style={{ height: '100%', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyB2D8wrWMY3XZnuHO6C31uq90JiuaFzGws" }}
                defaultCenter={{lat, lng}}
                defaultZoom={zoom}
            >
                <Marker
                    lat={lat}
                    lng={lng}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
};

GoogleMap.propTypes = {
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    zoom: PropTypes.number,
    options: PropTypes.shape({}) 
}

GoogleMap.defaultProps = {
    lat: -3.745,
    lng: -38.523,
    zoom: 12,
};

export default GoogleMap;

const Marker = ({ text }) => <div className="map-marker"><img src={`${process.env.PUBLIC_URL + "/assets/img/icon-img/2.png"}`} alt={text}/></div>;