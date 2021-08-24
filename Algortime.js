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
}// pure function

function quickSortRating(array) {
    if (array.length < 1) {
        return array;
    }
    let pivot = array[0];
    let pivotrating = pivot.rating;
    let Lowest = [];
    let Highest = [];

    for (i = 1; i < array.length; i++) {
        const value = array[i];
        if (value.rating < pivotrating) {
            Highest.push(array[i]);
        } else {
            Lowest.push(array[i]);
        }
    }
    return quickSortRating(Lowest).concat(pivot, quickSortRating(Highest));
}// pure function

function quickSortGenres(array) {
    if (array.length < 1) {
        return array;
    }
    let pivot = array[0];
    let genrepivot = pivot.genre;
    let Lowest = [];
    let Highest = [];

    for (i = 1; i < array.length; i++) {
        const value = array[i];
        if (value.genre > genrepivot) {
            Highest.push(array[i]);
        } else {
            Lowest.push(array[i]);
        }
    }
    return quickSortGenres(Lowest).concat(pivot, quickSortGenres(Highest));
} // pure function

function CallFunctions() {
    console.log("Sort via Rating Highest to lowest: ", quickSortRating(games));
    console.log("Sort via Names Alphabetically: ", quickSortNames(games));
    console.log("Sort via Genres: ", quickSortGenres(games));
} // impure function

CallFunctions();