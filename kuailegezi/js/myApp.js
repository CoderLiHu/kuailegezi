angular.module("myApp",[])
	.controller("MyController",function($scope){
		$scope.employees = [
			{number:4,name:"张三",score:70},
			{number:3,name:"李四",score:80},
			{number:2,name:"王五",score:90},
			{number:1,name:"赵六",score:60}
		];
		$scope.addTr = function(){
			var copyEmployee ={};
			angular.copy($scope.employee,copyEmployee);
			$scope.employees.push(copyEmployee);
			$scope.employee.number = "";
			$scope.employee.name = "";
			$scope.employee.score = "";
		};
		$scope.deleteTr = function (index) {
			var name = $scope.employees[index].name;
			if(window.confirm('你确定删除'+name+'吗?')) {
				$scope.employees.splice(index, 1);
			}
		}
		$scope.averageCount =function(){
			var average = 0;
				total =0;
		    	length = $scope.employees.length;
			$scope.employees.forEach(function(item){
				total += item.score;
			});
			average = total/length;
			return average;
		};
	})
	.filter('reverse',function(){
		return function(arr){
			return arr.sort(function(a,b){
				return b.number - a.number;
			})
		};
	})