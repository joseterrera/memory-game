import {shuffle} from "./shuffle"
import './styles.css'
const section = document.querySelector('section');
const arrNumbers = [1,1,2,2,3,3,4,4,5,5,6,6];
let shuffled = shuffle(arrNumbers);
console.log(shuffled);