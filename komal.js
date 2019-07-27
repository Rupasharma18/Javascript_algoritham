// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  if(prop == "tracks" && value !== " "){
    var a = Object.keys(collection[id]);
    console.log(a);
    console.log( prop in a);
    if(a.includes("tracks")){
        collection[id][prop].push(value);
    }
    else{
      collection[id][prop] = [];
      collection[id][prop].push(value)}
  }
  else if(prop === "tracks"){
    console.log("asdfgh");
    collection[id][prop].push(value);
  }
  else{
    delete collection[id][prop];
  }
  
  return collection;
}

// Alter values below to test your code
console.log(updateRecords(2468, "tracks", "Free"));