//1
var sc=document.getElementsByClassName("sample_class");

function getTagsOfElements(elements){
    var array = [];

    for(let i=0; i < elements.length; i++){
        array.push(elements[i].tagName);
    }
    return array;

}
console.log (getTagsOfElements(sc));

//2
var sid = getElementsById("sample_id");

console.log(sid.classList);

function getClassesOfElements(element){
    var array = [];

    for(let i = 0; i < element.length; i++){
        array.push(element[i]);
    }
    return array;
}
console.log(getClassesOfElements(sid.className));
//3
const liElements = document.querySelectorAll("sample_class_2 li");

function getInnerTextsOfElements(elements){
    const _elements = Array.from(elements);
    const array = [];
    console.log(_elements);

    _elements forEach(val =>{
        array.push(val.textContent);
    })
    return array;

    
}
console.log(getInnerTextsOfElements(liElements));
//4

const links = document.querySelectorAll("a");

function getAddressesOfElements(elements){
    return Array.from(elements.map(el => al.array))
}
//5
