'use strict';
var todos = angular.module('salidasApp');

todos.controller('TodoController', function($scope,$http,$modal) {
	  $scope.data = [];
	  $scope.selected = null;
	  $scope.showTable=true;
	  $scope.viewby = 3;
	  $scope.totalItems = $scope.data.length;
	  $scope.currentPage = 4;
	  $scope.itemsPerPage = $scope.viewby;
	  $scope.maxSize = 5; //Number of pager buttons to show
	  var limit = "300";
	  var id = "1";
	  var local = 'http://localhost:8080/desapp-groupA-backend/rest';
	  var heroku = 'https://salidasbackend.herokuapp.com/rest';
	  
	  $scope.getEvent = function(id){
		  $http.get(local + '/event/getEvent/'+id)
		  .success(function(dat){
			 $scope.selected = dat;
		  }).error(function(err){
			 console.log(err);
		  });
	  }
	  
	  $scope.getEvents = function(){
		  $http.get(local + '/event/events')
		  .success(function(dat){
			 show();
			 $scope.data = dat;
			 $scope.totalItems = $scope.data.length;
		  }).error(function(err){
			 console.log(err);
		  });
	  };
	  
	  $scope.getEconomic = function(){
		  $http.get(local + '/search/economic/' + id)
		  .success(function(dat){
			  show();
			 $scope.data = dat;
			 $scope.totalItems = $scope.data.length;
		  }).error(function(err){
			 console.log(err);
		  });
	  };
	  
	  $scope.getWithLimitOfPersons = function(){
		  $http.get(local + '/search/withLimitOfPersons/'+id+'/'+limit)
		  .success(function(dat){
			  show();
			 $scope.data = dat;
			 $scope.totalItems = $scope.data.length;
		  }).error(function(err){
			 console.log(err);
		  });
	  };
	  
	  $scope.setPage = function (pageNo) {
	    $scope.currentPage = pageNo;
	  };

	  $scope.pageChanged = function() {
	    console.log('Page changed to: ' + $scope.currentPage);
	  };

	$scope.setItemsPerPage = function(num) {
	  $scope.itemsPerPage = num;
	  $scope.currentPage = 1; //reset to first paghe
	};
	
	function show(){
		if ($scope.showTable){
			$scope.showTable=false;
			
		}
	}
	
	/*--------------------------------------------------------------------
	 * ----------------------- Modal controls ---------------------------- 
	 * ------------------------------------------------------------------- 
	 */
	 $scope.name = 'theNameHasBeenPassed';
	 
 	 $scope.getEventForModal = function getevent (htmlname,id){
 		  $http.get(local + '/event/getEvent/'+id)
 		  .success(function(dat){
 			 $scope.selected = dat;
 			 console.log( $scope.selected);
 			 showModal(htmlname)
 		  }).error(function(err){
 			 console.log(err);
 		  });
  	}
	 
	 
   function showModal(htmlname) {
   		
       $scope.opts = {
       backdrop: true,
       backdropClick: true,
       dialogFade: true,
       keyboard: true,
       templateUrl : 'views/'+htmlname,
       controller : ModalInstanceCtrl,
       resolve: {} // empty storage
         };


       $scope.opts.resolve.event = function() {
           return angular.copy(
                               {event: $scope.selected}
                         ); // pass name to resolve storage
       }

         var modalInstance = $modal.open($scope.opts);

         modalInstance.result.then(function(){
           //on ok button press 
         },function(){
           //on cancel button press
           console.log("Modal Closed");
         });
     }; 
     
     var ModalInstanceCtrl = function($scope, $modalInstance, $modal, event) {

         $scope.event = event.event;
          $scope.ok = function () {
            $modalInstance.close();
          };
          
          $scope.illgo = function () {
              $modalInstance.close();
            };

          $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
          };
    }
	
});
