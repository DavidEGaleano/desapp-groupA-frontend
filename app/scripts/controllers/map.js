'use strict';

var mapcontroller = angular.module('salidasApp');
mapcontroller.controller('MapController', ['$scope', '$q','$rootScope','leafletData',
    function($scope,$rootScope, $q, leafletData) {
		var vm = this;
		var vmap;
		var lat = $scope.event.lat;
		var lng = $scope.event.lng;
    	var greenIcon = L.icon({
    	    iconUrl: 'images/map-marker-40-g.png',

    	    iconSize:     [51, 51], 
    	    iconAnchor:   [0, 40],
    	    popupAnchor:  [-21, -40]
    	});
    	

		var HttpClient = function() {
			this.get = function(aUrl, aCallback) {
				var anHttpRequest = new XMLHttpRequest();
				anHttpRequest.onreadystatechange = function() { 
					if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
						aCallback(anHttpRequest.responseText);
	            	}

				anHttpRequest.open( "GET", aUrl, true );            
				anHttpRequest.send( null );
			}
		}

		function mostrar(){
			return false;
		}
	
        leafletData.getMap().then(function(map) {
        	
        	vmap=map;
        	var marker = null;
        	vmap.setView([-34.7739,-58.5520]);
        	vmap.setZoom(9);
    		var agregarMarker = function() {
    			this.setMarker = function(lat,lng){
    				if(marker == null){
    					 marker = L.marker([lat,lng]).setIcon(greenIcon);
    					 this.markerPopUp(marker,lat,lng);
    					 return marker;
    				}else{
    					marker.setLatLng([lat,lng]).setIcon(greenIcon);
    					this.markerPopUp(marker,lat,lng)
    					return marker
    				}
    			}
    			this.markerPopUp = function(marker, lat,lng){
    				marker.bindPopup('<div width="100%" align="center">'+$scope.event.name+'<div>');
    			}
    		}
    		
    		function marcar (){
    			console.log(lat);
    			console.log(lng);
	            var pos = {
	      	              lat: lat,
	      	              lng: lng
	      	            };
        		new agregarMarker().setMarker(lng,lat)
        		.addTo(vmap.setView(pos, 15))
        		.openPopup();
    		}     	
    		
    		marcar(); 
    		
    		
        
        
      });
    }
]);

