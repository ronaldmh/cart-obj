import React, { useEffect } from 'react';
import { loadModules } from 'esri-loader';

const Map = () => {
    useEffect(() => {
        loadModules(['esri/Map', 'esri/views/MapView', 'esri/layers/GraphicsLayer', 'esri/Graphic'], { css: true })
            .then(([Map, MapView, GraphicsLayer, Graphic]) => {
                const map = new Map({
                    basemap: 'streets'
                });

                const view = new MapView({
                    container: 'mapContainer',
                    map: map,
                    center: [-73.5674, 45.5019],
                    zoom: 11
                });

                // Layer
                const layerShape = new GraphicsLayer();
                map.add(layerShape);

                const point = {
                    type: 'point',
                    longitude: -73.5674,
                    latitude: 45.5019
                };

                const mark = new Graphic({
                    geometry: point,
                    symbol: {
                        type: 'simple-marker',
                        color: [226, 119, 50],
                        outline: {
                            color: [255, 255, 255],
                            width: 1
                        }
                    },
                    attributes: {
                        pointName: 'point number 1',
                        description: 'Testing marks'
                    }
                });

                layerShape.add(mark);

                view.on('click', (event) => {
                    view.hitTest(event).then((response) => {
                        if (response.results.length) {
                            const graphic = response.results[0].graphic;
                            const attributes = graphic.attributes;
                            console.log(`Nombre: ${attributes.pointName}\nDescripción: ${attributes.description}`);
                        }
                    });
                });
            })
            .catch(error => {
                console.error('error loading modules', error);
            });
    }, []);

    return <div id='mapContainer' style={{ height: '500px' }}></div>;
};

export default Map;
