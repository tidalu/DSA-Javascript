var sortPeople = function(names, heights) {
    var object = [];
    for (let i = 0; i < names.length; i++) {
        object.push([names[i], heights[i]]);
    }
    object.sort((a, b) => b[1] -a[1])
     return object.map(x => x[0])
};



console.log(sortPeople(["Mary","John","Emma"], [180,165,170]))