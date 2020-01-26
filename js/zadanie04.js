//1
var Names = document.getElementsByClassName("sample_class");
console.log(Names);

function getTagsOfElements(elements) {
    var arr = [];
    for (let i = 0; i < elements.length; i++) {
        arr.push(elements[i].tagName);
    }
    return arr;
}

console.log(getTagsOfElements(Names));

//2
var Names = document.getElementById("sample_id");
console.log(Names.classList);

function getClassesOfElement(elements) {
    var arr = [];
    for (let i = 0; i < elements.length; i++) {
        arr.push(elements[i]);
    }
    return arr;
}

console.log(getClassesOfElement(Names.classList));

//3
var Names = document.querySelectorAll(".sample_class_2 li");

console.log(Names);

function getInnerTextsOfElements(elements) {
    var arr = [];
    for (let i = 0; i < elements.length; i++) {
        arr.push(elements[i].textContent);
    }
    return arr;
}

console.log(getInnerTextsOfElements(Names));

//4 
var Names = document.querySelectorAll("a");

console.log(Names);

function getAddressesOfElements(elements) {
    var arr = [];
    for (let i = 0; i < elements.length; i++) {
        arr.push(elements[i].outerHTML);
    }
    return arr;
}

console.log(getAddressesOfElements(Names));

//5
var Names = document.querySelectorAll(".sample_class_3");

//console.log(Names);
//console.log(Names[0].children);

function getTagsOfElements(elements) {
    var arr = [];
    for (let i = 0; i < elements.length; i++) {
        arr.push(elements[i].tagName);
    }
    return arr;
}

console.log(getTagsOfElements(Names[0].children));
