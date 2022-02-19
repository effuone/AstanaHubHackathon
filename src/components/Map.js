import React, { useEffect } from 'react';
import DeckGL from '@deck.gl/react';
import { IconLayer } from 'deck.gl';
import { StaticMap } from 'react-map-gl';
import { GeoJsonLayer } from '@deck.gl/layers';
import { CartoLayer, setDefaultCredentials, MAP_TYPES, API_VERSIONS } from '@deck.gl/carto';
import locations from '../data/locations.json';

const TOKEN = "pk.eyJ1IjoiaGFja2kiLCJhIjoiY2t6czR3azVwMDN1dDJycWI2OTNjODFscSJ9.1gJHBkD0wMZSFWCysacMdg";

const DATA_URL = {
    BUILDINGS:
        'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/trips/buildings.json', // eslint-disable-line
    TRIPS: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/trips/trips-v7.json' // eslint-disable-line
}

setDefaultCredentials({
    apiVersion: API_VERSIONS.V3,
    apiBaseUrl: 'https://gcp-us-east1.api.carto.com',
    accessToken: 'XXX',
});

// Viewport settings
const INITIAL_VIEW_STATE = {
    longitude: 70.41669,
    latitude: 52.7853,
    zoom: 6,
    pitch: 0,
    bearing: 0
};

const ICON_MAPPING = {
    marker: { x: 0, y: 0, width: 128, height: 128, mask: true }
};

// Data to be used by the LineLayer
const data = [];

const routes = [
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [[125.6, 10.1], [100.5, 9.3]]
        },
        "properties": {
            "name": "Dinagat Islands"
        }
    }
];

locations.map((locale) => (
    data.push({ name: locale.Name, address: locale.Name, exits: 0, coordinates: locale.Coordinates })
))

// DeckGL react component
function Map() {
    const layers = [
        new CartoLayer({
            type: MAP_TYPES.QUERY,
            connection: 'bigquery',
            data: 'SELECT * FROM cartobq.testtables.points_10k',
            pointRadiusMinPixels: 2,
            getLineColor: [0, 0, 0, 200],
            getFillColor: [238, 77, 90],
            lineWidthMinPixels: 1
        }),
        new IconLayer({
            id: 'icon-layer',
            data,
            pickable: true,
            // iconAtlas and iconMapping are required
            // getIcon: return a string
            iconAtlas: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png',
            iconMapping: ICON_MAPPING,
            getIcon: d => 'marker',
            sizeScale: 4,
            getPosition: d => d.coordinates,
            getSize: d => 5,
            getColor: d => [Math.sqrt(d.exits), 140, 0]
        }),
    ]

    return (
        <DeckGL
            // style={{height: '60%', width: '70%', marginTop: '10rem'}}
            initialViewState={INITIAL_VIEW_STATE}
            controller={true}
            getTooltip={({ object }) => object && `${object.name}\n${object.address}`}
            layers={layers}>
            <StaticMap mapboxApiAccessToken={TOKEN} />
        </DeckGL>
    )
}

export default Map;
