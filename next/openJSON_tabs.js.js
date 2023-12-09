/*
sample links for example (88)

- category file: https://api.mondly.com/v1/categories/88
- first lesson of a category: https://api.mondly.com/v2/categories/88/lessons/8801
- vocabularies : https://api.mondly.com/v2/categories/88/vocabularies/8801

*/
var lessons_nos = [1, 10, 11, 12, 13, 14, 15, 16, 17, 2, 22, 23, 24, 25, 26, 27, 28, 29, 3, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 4, 40, 5, 6, 7, 8, 88, 89, 9, 90, 91];
lessons_nos.sort(function(a, b) {
    return a - b;
});
console.log('start mondly_related.js ....');

function openJSON_tabs(cat_no) {
    var cat_file = `https://api.mondly.com/v1/categories/${cat_no}`;
    window.open(cat_file, '_blank');

    var vocabularies_url = `https://api.mondly.com/v2/categories/${cat_no}/vocabularies/${cat_no}01`;
    window.open(vocabularies_url, '_blank');

    // var dialogues = "h0ttps://api.mondly.com/v2/categories/3/dialogues/301";
    tabUrl = `https://api.mondly.com/v2/categories/${cat_no}/dialogues/${cat_no}01`;
    window.open(tabUrl, '_blank');
    var lessons = [];
    for (var i = 1; i < 7; i++) {
        lessons[i] = `https://api.mondly.com/v2/categories/${cat_no}/lessons/${cat_no}0${i}`;
        window.open(lessons[i], '_blank');
    }
    console.log('cat_file', cat_file);
    console.log('vocabularies', vocabularies_url);
    console.log('lesson-3', lessons[3]);

}