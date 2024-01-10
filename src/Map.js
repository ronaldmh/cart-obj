import React, { useEffect } from 'react';
import { loadModules } from 'esri-loader';

const Map = () => {
    useEffect(() => {
        loadModules(['esri/Map', 'esri/views/MapView', 'esri/layers/GraphicsLayer', 'esri/Graphic', 'esri/layers/FeatureLayer'], { css: true })
            .then(([Map, MapView, GraphicsLayer, Graphic, FeatureLayer]) => {
                const map = new Map({
                    basemap: 'streets'
                });

                const view = new MapView({
                    container: 'mapContainer',
                    map: map,
                    center: [-73.5674, 45.5019],
                    zoom: 11
                });

                const layer = new FeatureLayer({
                    portalItem: {
                        id: "7367a012263e4ba7a93d6ed551847ad4"
                    }
                });

                map.add(layer);

                

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
