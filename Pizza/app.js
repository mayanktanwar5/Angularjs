/**
 * Created by Mak on 4/30/17.
 */
var pizza = angular.module('pizza', []);

pizza.controller('pizzaController',function($scope,$window){
    $scope.first=true;
$scope.submit = function(user){

    console.log(user);
    console.log($window.localStorage.setItem("userDetails",JSON.stringify(user)));
    console.log(JSON.parse($window.localStorage.getItem("userDetails")));
    $scope.first=false;
    $scope.second=true;

}

$scope.cancel= function(){

    $scope.first=true;
    $scope.second=false;
    $scope.third=false;
    $scope.last= false;
}

$scope.size = function(crust)
{
    if(crust==undefined)
        alert("Select Some toppings");
    else
    {

        console.log($window.localStorage.setItem("crustSize",JSON.stringify(crust.tossed)));
        console.log(JSON.parse($window.localStorage.getItem("crustSize")));
        $scope.first=false;
        $scope.second=false;
        $scope.third=true;
    }
}


// $scope.meats={ "Pepperoni":false,"Sliced Italian Sausage":false ,"Philly Steak":false,
// "Bacon":false,"Premium Chicken":false,"Beef":false,"Ham":false,"Salami":false}
    $scope.meats=[{"name":"Pepperoni","selected":false,"quantity":0 },
                  {"name":"Beef","selected":false,"quantity":0 },
                {"name":"Sliced Italian Sausage","selected":false,"quantity":0 },
                {"name":"Philly Steak","selected":false,"quantity":0 },
                {"name":"Bacon","selected":false,"quantity":0 },
                {"name":"Premium Chicken","selected":false,"quantity":0 },
                {"name":"Ham","selected":false,"quantity":0 },
                {"name":"Salami","selected":false,"quantity":0 },

    ]
$scope.noMeats={ "Cheddar Cheese":false,"Shredded Parmesan Asiago":false ,"Banana Peppers":false,
    "Garlic":false,"Jalapeno Peppers":false,"Pineapple":false,"Roasted Red Peppers":false,
        "Diced Tomatoes":false,"Black Olives":false," Green Peppers":false,
     "Mushrooms":false,"Onions":false,"Spinach":false   };

    $scope.noMeats=[
        {"name":"Garlic","selected":false,"quantity":0 },
        {"name":"Cheddar Cheese","selected":false,"quantity":0 },
        // {"name":"Shredded Parmesan Asiago","selected":false,"quantity":0 },
        {"name":"Banana Peppers","selected":false,"quantity":0 },
        {"name":"Jalapeno Peppers","selected":false,"quantity":0 },
        {"name":"Pineapple","selected":false,"quantity":0 },
        {"name":"Roasted Red Peppers","selected":false,"quantity":0 },
        {"name":"Diced Tomatoes","selected":false,"quantity":0 },
        {"name":"Black Olives","selected":false,"quantity":0 },
        {"name":"Green Peppers","selected":false,"quantity":0 },
        {"name":"Mushrooms","selected":false,"quantity":0 },
        {"name":"Onions","selected":false,"quantity":0 },
        {"name":"Spinach","selected":false,"quantity":0 }
    ]
$scope.submitTopp = function(){


    // console.log(JSON.parse($window.localStorage.getItem("crustSize")));
    var rows =[];
    for(m in $scope.meats)
    {
        if($scope.meats[m].selected){
            rows.push([$scope.meats[m].name,$scope.meats[m].quantity]);
        }

    }

    for(m in $scope.noMeats)
    {
        if($scope.noMeats[m].selected){
            rows.push([$scope.noMeats[m].name,$scope.noMeats[m].quantity]);
        }

    }

    console.log($window.localStorage.setItem("toppings",JSON.stringify(rows)));

    console.log($scope.topping);

    $scope.first=false;
    $scope.second=false;
    $scope.third=false;
    $scope.last= true;



    google.charts.load('current', {'packages':['corechart','sankey']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

        var data = new google.visualization.DataTable();
        data.addColumn('string','Topping');
        data.addColumn('number','Slices');
        data.addRows(rows);

        var data1 = new google.visualization.DataTable();
        data1.addColumn('string', 'From');
        data1.addColumn('string', 'To');
        data1.addColumn('number', 'Weight');
        data1.addRows([
            [ 'A', 'X', 5 ],
            [ 'A', 'Y', 7 ],
            [ 'A', 'Z', 6 ],
            [ 'B', 'X', 2 ],
            [ 'B', 'Y', 9 ],
            [ 'B', 'Z', 4 ]
        ]);
        //Set chart options
        var optionsForPie =  {
                'title':'BuildYourOwnPizza Pie View',
                'width':500,
                'height':300,
                'is3D': true,
                'pieStartAngle': 0,
                'pieSliceText': 'label'
            };
        var optionsForSankey =  {
            'title':'BuildYourOwnPizza Sankey View',
            'width':500,
            'height':300

        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        var chart1 = new google.visualization.Sankey(document.getElementById('sankey'));

        chart.draw(data, optionsForPie);
        chart1.draw(data1, optionsForSankey);
    }

}


});