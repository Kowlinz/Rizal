const modalOne = document.querySelector('.modal-one');
const modalTwo = document.querySelector('.modal-two');
const modalThree = document.querySelector('.modal-three');
const modalFour = document.querySelector('.modal-four');
const modalFive = document.querySelector('.modal-five');

const openModalOne= document.querySelector('.modal-one-open');
const openModalTwo = document.querySelector('.modal-two-open');
const openModalThree = document.querySelector('.modal-three-open');
const openModalFour = document.querySelector('.modal-four-open');
const openModalFive = document.querySelector('.modal-five-open');

const closeIconModalOne= document.querySelector('.modal-one-close');
const closeIconModalTwo= document.querySelector('.modal-two-close');
const closeIconModalThree= document.querySelector('.modal-three-close');
const closeIconModalFour= document.querySelector('.modal-four-close');
const closeIconModalFive= document.querySelector('.modal-five-close');

const closeModalOne= document.querySelector('.close-button-one');
const closeModalTwo= document.querySelector('.close-button-two');
const closeModalThree= document.querySelector('.close-button-three');
const closeModalFour= document.querySelector('.close-button-four');
const closeModalFive= document.querySelector('.close-button-five');

// Modal one
openModalOne.addEventListener('click',()=>{
    modalOne.showModal();
})
closeModalOne.addEventListener('click',()=>{
    modalOne.close();
})

closeIconModalOne.addEventListener('click',()=>{
    modalOne.close();
})

// Modal two
openModalTwo.addEventListener('click',()=>{
    modalTwo.showModal();
})

closeModalTwo.addEventListener('click',()=>{
    modalTwo.close();
})

closeIconModalTwo.addEventListener('click',()=>{
    modalTwo.close();
})

// modal three

openModalThree.addEventListener('click',()=>{
    modalThree.showModal();
})

closeModalThree.addEventListener('click',()=>{
    modalThree.close();
})

closeIconModalThree.addEventListener('click',()=>{
    modalThree.close();
})

// modal four

openModalFour.addEventListener('click',()=>{
    modalFour.showModal();
})

closeModalFour.addEventListener('click',()=>{
    modalFour.close();
})

closeIconModalFour.addEventListener('click',()=>{
    modalFour.close();
})

// modal five

openModalFive.addEventListener('click',()=>{
    modalFive.showModal();
})

closeModalFive.addEventListener('click',()=>{
    modalFive.close();
})

closeIconModalFive.addEventListener('click',()=>{
    modalFive.close();
})
