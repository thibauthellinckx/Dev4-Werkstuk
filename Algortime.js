const games = [{
    name: "Donkey Kong",
    rating: 4,
    genre: "adventure"
}, {
    name: "Tetris",
    rating: 5,
    genre: "arcade/puzzel"
}, {
    name: "Pac man",
    rating: 1,
    genre: "adventure"
}, {
    name: "Space Invaders",
    rating: 3,
    genre: "adventure"
}, {
    name: "Street Fighter",
    rating: 2,
    genre: "fighting"
}, {
    name: "After Burner",
    rating: 1,
    genre: "action"
},{
    name: "Lover",
    rating: 5,
    genre: "love"
}, {
    name: "Xevious",
    rating: 3,
    genre: "action"

}, {
    name: "Robotron 2084",
    rating: 5,
    genre: "adventure"

}];


function quickSortNames(array) {
    // console.log(array);
    if(array.length < 1){
        return array;
    }

    let pivot = array[0];
    let namepivot = pivot.name;
    let Lowest = [];
    let Highest = [];

    for (i = 1; i < array.length; i++) {
        const value = array[i];
        if (value.name > namepivot) {
            Highest.push(array[i]);
        } else {
            Lowest.push(array[i]);
        }
    }
    
    return quickSortNames(Lowest).concat(pivot, quickSortNames(Highest));
}
