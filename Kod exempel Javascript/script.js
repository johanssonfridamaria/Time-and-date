const header = document.getElementById('idnamn');

header.style.fontWeight='100';

// ---------------------

const button = document.getElementById('see-review');

button.addEventListener('click', function(){
console.log('click');
});



// -------------------------------------

const button = document.getElementById('see-review');

button.addEventListener('click', function(){

const review = document.getElementById('review');

if(review.classList.contains('d-none')){
    review.classList.remove('d-none');
    button.textContent = 'close review';
}

else{
    review.classList.add('d-none');
    button.textContent = 'see review';

}
});

// ----------------

slice()
splice()


const values = ['a', 'b', 'c'];

// console.log(values.indexOf('a'));

const set = values.filter(function (item) {
    // console.log('item: ', item );
    return item > 'b';
});

// console.log(set);

const numbers = ['a', 'bbb', 'c'];


const found = numbers.find(function (item) {
    return item.length > 1;
});

console.log(found);

numbers.forEach(function (item) {
    console.log(item);
});


const containers = document.getElementsByClassName('container');

containers[2].classList.add('d-none');
console.log(containers);