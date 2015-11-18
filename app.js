var app = angular.module('styleguideApp', ['ngMaterial', 'ui.tree', 'ui.grid', 'ui.grid.autoResize', 'ui.grid.exporter', 'ui.grid.selection', 'ui.bootstrap', 'angularMoment',  'wfm.cardList', 'wfm.timerangepicker', 'wfm.daterangepicker'])
.controller('mainCtrl', function ($scope) {
  /* Dummy data*/
    $scope.demos = [ {"id": "50d5ad" } , {"id": "678ffr" },{"id": "515ad" } , {"id": "673ffr" } ];
    $scope.treeDemos =   [
      {"categories": [{"name": "item 1"},{"name": "item 2"},{"name": "item 3"},{"name": "item 2"}],
        "name": "First Group"},
      {"categories": [{"name": "item 1"},{"name": "item 3"}],"name": "Second Group"},{"categories": [],"name":'Third Group'}];
      console.log('un bel arbre', $scope.treeDemos);

  /* Code for Grid */
  var data = [];
  for(var i=0; i<100;i++){
    data[i]={}
    for(var j=0;j<10;j++){
	    data[i]["j"+j]=j;
    }
  }
  $scope.gridOptions = {
    exporterCsvFilename: 'myFile.csv',
    exporterMenuPdf: false,
    enableSelectAll: true,
    enableRowSelection: true,
    selectionRowHeaderWidth: 35,
    data:data
  };
  $scope.gridOptions.enableGridMenu = true;

  /*code for select*/
  $scope.sizes = [
    "small (12-inch)",
    "medium (14-inch)",
    "large (16-inch)",
    "insane (42-inch)"
  ];


  /*Code for the chart*/
var chart = c3.generate({
    bindto: '#myChart',
    data: {
        columns: [
			['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 20, 180, 240, 100, 190,0]
        ],
        selection: {
    enabled: true
  }
    },
    subchart: {
        show: true
    },
	zoom: {
        enabled: true
    }
});

/*Code for tabs*/
$scope.selectedIndex = 0;
$scope.nextTab = function() {
   var index = ($scope.selectedIndex == 50) ? 0 : $scope.selectedIndex + 1;
   $scope.selectedIndex = index;

 };

/*Code for forms*/
 $scope.reset = function(form) {
   if (form) {
     form.$setPristine();
     form.$setUntouched();
   }
 };

/*code for card list*/
	$scope.items = [{ title: 'mdi-chart-bar' }, { title: 'mdi-chart-bar' }];

});
