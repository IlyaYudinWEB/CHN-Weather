var wms_layers = [];

var lyr_MODISTerra_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://gibs.earthdata.nasa.gov/wms/epsg4326/best/wms.cgi",
    attributions: ' ',
                              params: {
                                "LAYERS": "MODIS_Terra_SurfaceReflectance_Bands143",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "MODIS, Terra",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MODISTerra_0, 0]);
var format_AOITasking_1 = new ol.format.GeoJSON();
var features_AOITasking_1 = format_AOITasking_1.readFeatures(json_AOITasking_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AOITasking_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AOITasking_1.addFeatures(features_AOITasking_1);
var lyr_AOITasking_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AOITasking_1, 
                style: style_AOITasking_1,
                interactive: true,
                title: '<img src="styles/legend/AOITasking_1.png" /> AOI-Tasking'
            });

lyr_MODISTerra_0.setVisible(true);lyr_AOITasking_1.setVisible(true);
var layersList = [lyr_MODISTerra_0,lyr_AOITasking_1];
lyr_AOITasking_1.set('fieldAliases', {'ID': 'ID', 'AREA': 'AREA', });
lyr_AOITasking_1.set('fieldImages', {'ID': 'TextEdit', 'AREA': 'TextEdit', });
lyr_AOITasking_1.set('fieldLabels', {'ID': 'no label', 'AREA': 'inline label', });
lyr_AOITasking_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});