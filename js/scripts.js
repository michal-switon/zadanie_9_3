var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";

var dinosaur = "triceratops";

var dinosaurUpperCase = dinosaur.toUpperCase(dinosaur);

var replaceDinosaur = text.replace("Velociraptor", dinosaurUpperCase);

var middle = Math.ceil(text.length / 2);
var firstHalf = text.slice(0, middle);

console.log(firstHalf);

