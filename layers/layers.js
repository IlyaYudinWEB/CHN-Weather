var wms_layers = [];

var lyr_LandSurfaceReflectanceTrueColorMODISTerra_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://gibs.earthdata.nasa.gov/wms/epsg4326/best/wms.cgi",
    attributions: ' ',
                              params: {
                                "LAYERS": "MODIS_Terra_SurfaceReflectance_Bands143",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Land Surface Reflectance (True Color, MODIS, Terra)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LandSurfaceReflectanceTrueColorMODISTerra_0, 0]);
var lyr_LandSurfaceReflectanceTrueColorMODISAqua_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://gibs.earthdata.nasa.gov/wms/epsg4326/best/wms.cgi",
    attributions: ' ',
                              params: {
                                "LAYERS": "MODIS_Aqua_SurfaceReflectance_Bands143",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Land Surface Reflectance (True Color, MODIS, Aqua)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LandSurfaceReflectanceTrueColorMODISAqua_1, 0]);
var format_AOINEW_TASK1_region_2 = new ol.format.GeoJSON();
var features_AOINEW_TASK1_region_2 = format_AOINEW_TASK1_region_2.readFeatures(json_AOINEW_TASK1_region_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AOINEW_TASK1_region_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AOINEW_TASK1_region_2.addFeatures(features_AOINEW_TASK1_region_2);
var lyr_AOINEW_TASK1_region_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AOINEW_TASK1_region_2, 
                style: style_AOINEW_TASK1_region_2,
                interactive: true,
                title: '<img src="styles/legend/AOINEW_TASK1_region_2.png" /> AOI-NEW_TASK1_region'
            });

lyr_LandSurfaceReflectanceTrueColorMODISTerra_0.setVisible(true);lyr_LandSurfaceReflectanceTrueColorMODISAqua_1.setVisible(true);lyr_AOINEW_TASK1_region_2.setVisible(true);
var layersList = [lyr_LandSurfaceReflectanceTrueColorMODISTerra_0,lyr_LandSurfaceReflectanceTrueColorMODISAqua_1,lyr_AOINEW_TASK1_region_2];
lyr_AOINEW_TASK1_region_2.set('fieldAliases', {'ID': 'ID', 'AREA': 'AREA', });
lyr_AOINEW_TASK1_region_2.set('fieldImages', {'ID': 'TextEdit', 'AREA': 'TextEdit', });
lyr_AOINEW_TASK1_region_2.set('fieldLabels', {'ID': 'no label', 'AREA': 'inline label', });
lyr_AOINEW_TASK1_region_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});