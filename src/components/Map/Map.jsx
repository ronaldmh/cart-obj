import React, { useEffect } from 'react';
import { loadModules } from 'esri-loader';

const Map = () => {
    useEffect(() => {
        loadModules(['esri/Map', 'esri/views/MapView', 'esri/layers/GraphicsLayer', 'esri/Graphic', 'esri/layers/FeatureLayer', "esri/config"], { css: true })
            .then(([Map, MapView, GraphicsLayer, Graphic, FeatureLayer, esriConfig]) => {
                const map = new Map({
                    basemap: 'arcgis-topographic'
                });

                esriConfig.apiKey = 'AAPKff5200b312dd4d16ad1a90bcdd29a844ZkRNGDzDbAb4P3TbRd4LHlTBJ2P0iAGnXyOVHa2GxLKIOjmQJ7MUKlGlgX-iTtbD'; 

                const view = new MapView({
                    container: 'mapContainer',
                    map: map,
                    center: [-73.5674, 45.5019],
                    zoom: 11
                });

                const layer = new FeatureLayer({
                    portalItem: {
                        id: "b8cc4278e0cf44acbc8a4dc7e5f59977" 
                    }
                });

                // Verificar carga de la capa de entidades
                map.add(layer);
                console.log('Capa de entidades agregada al mapa:', layer);

                // Verificar eventos de la capa de entidades
                layer.on('click', (event) => {
                    console.log('Entidad clickeada:', event);
                });

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
