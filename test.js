var array = ["H", "I", "!", "!", "!", "!"]; // Test
var search_term = "!";

for (var i = array.length - 1; i >= 0; i--) {
  if (array[i] === search_term) {
    array.splice(i + 1, 1);
    console.log(array);
    //break; //<-- Uncomment  if only the first term has to be removed
  }
}
