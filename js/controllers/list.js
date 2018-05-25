(function(){

    angular.module("turtleFacts").controller("listCtrl", ListController);

    function ListController(){
        var vm=this;
        vm.data=turtlesData;
        vm.activeTurtle={};
        vm.changeActiveTurtle=changeActiveTurtle;
        vm.search="";
        function changeActiveTurtle(index){
            vm.activeTurtle=index;
        }
    }
    
    var turtlesData = [
        {
            type:"Green Turtle",
            image_url:"https://cdn.pixabay.com/photo/2016/11/18/16/19/sea-1835620__340.jpg",
            locations:"Tropical and subtropical oceans worlwide",
            size:"Up to 1.5m and up to 300kg",
            lifespan:"over 80 years",
            diet:"Herrbivore",
            description:"The Green Turtle is a large, wieghty sea Turtle with a wide, smooth carapace, or shell."
        },
        {
            type:"Red Turtle",
            image_url:"https://cdn.pixabay.com/photo/2018/03/08/10/46/turtle-3208324__340.jpg",
            locations:"Tropical and subtropical oceans worlwide",
            size:"Up to 1.5m and up to 300kg",
            lifespan:"over 80 years",
            diet:"Herrbivore",
            description:"The Green Turtle is a large, wieghty sea Turtle with a wide, smooth carapace, or shell."
        },
        {
            type:"Small Turtle",
            image_url:"http://www.reptilegardens.com/assets/images/gallery/images/turtle-copy-c7bba1f234f8.jpg",
            locations:"Tropical and subtropical oceans worlwide",
            size:"Up to 1.5m and up to 300kg",
            lifespan:"over 80 years",
            diet:"Herrbivore",
            description:"The Green Turtle is a large, wieghty sea Turtle with a wide, smooth carapace, or shell."
        },
        {
            type:"Fat Turtle",
            image_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Florida_Box_Turtle_Digon3_re-edited.jpg/1200px-Florida_Box_Turtle_Digon3_re-edited.jpg",
            locations:"Tropical and subtropical oceans worlwide",
            size:"Up to 1.5m and up to 300kg",
            lifespan:"over 80 years",
            diet:"Herrbivore",
            description:"The Green Turtle is a large, wieghty sea Turtle with a wide, smooth carapace, or shell."
        },
        {
            type:"Engry Turtle",
            image_url:"https://hunterdonlandtrust.org//wp-content/uploads/2017/03/EasternBoxTurtle_HighRes-new-direction-1024x559.jpg",
            locations:"Tropical and subtropical oceans worlwide",
            size:"Up to 1.5m and up to 300kg",
            lifespan:"over 80 years",
            diet:"Herrbivore",
            description:"The Green Turtle is a large, wieghty sea Turtle with a wide, smooth carapace, or shell."
        }
    ];
})();