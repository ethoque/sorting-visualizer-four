//Portions of SortingVisualizer code, mergeSort and project idea from Clement Mihailescu (https://www.youtube.com/watch?v=pFXYym4Wbkc)

import React from 'react';
import './SortingVisualizer.css';
import {getMergeSortAnimations} from './SortingAlgorithms/mergeSort.js';
import {getQuickSortAnimations} from './SortingAlgorithms/QuickSort.js';
import {getHeapSortAnimations} from './SortingAlgorithms/heapSort.js';
import {getBubbleSortAnimations} from './SortingAlgorithms/bubbleSort.js';



export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);

       this.state = {
           array: []
       };
    };

    componentDidMount() {
        this.resetArray(true)
    }

    resetArray(firstTime){
        //Populate array with numbers between 3-93
        const array = [];
        let barsToCreate = window.innerWidth/4.2;
        if(barsToCreate < 300){
            barsToCreate = 300;
        }
        this.minimumWidth = barsToCreate*4+20
        for (let i = 0; i< barsToCreate; i++){
            array[i] = 3 + Math.random() * 90
        }
        this.setState({array});
        if(!firstTime){
          const color = "rgb(196, 145, 145)"
          const arrayBars = document.getElementsByClassName('bar');
          for(let i = 0; i < arrayBars.length;i++){
            try{
              arrayBars[i].style.backgroundColor = color;
           }
           catch (error){
           }
          }
        }
    }

    

    mergeSort(){
      return new Promise((resolve) =>{
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('bar');
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? 'blue' : 'red';
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * 1);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}%`;
            }, i * 1);
          }
        }
        setTimeout(resolve, animations.length+2)
      })
      }

    quickSort(){
      return new Promise((resolve) =>{
        var animations = getQuickSortAnimations(this.state.array);
        if(animations.length>20000){
          animations = animations.splice(0,1000)
        }
        console.log(animations)
        const arrayBars = document.getElementsByClassName('bar');
        for (let i = 0; i < animations.length; i++) {
          const isColorChange = (animations[i].length === 2);
          if (isColorChange) {
            const barOneIdx = animations[i][0];
            const barOneStyle = arrayBars[barOneIdx].style;
            const color = animations[i][1]
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
            }, i * 1);
          } else {
            setTimeout(() => {
              const barOneIdx = animations[i][0];
              const barTwoIdx = animations[i][2];
              const newHeight1 = animations[i][1]
              const newHeight2 = animations[i][3]
              const barOneStyle = arrayBars[barOneIdx].style;
              const barTwoStyle = arrayBars[barTwoIdx].style;
              barOneStyle.height = `${newHeight1}%`;
              barTwoStyle.height = `${newHeight2}%`;
            }, i * 1);
          }
        }
        setTimeout(resolve, animations.length+2)
      })
    }

    heapSort(){
      return new Promise((resolve) =>{
      var animations = getHeapSortAnimations(this.state.array);
      if(animations.length>20000){
        animations = animations.splice(0,1000)
      }
      console.log(animations)
      const arrayBars = document.getElementsByClassName('bar');
      for (let i = 0; i < animations.length; i++) {
        const isColorChange = (animations[i].length === 2);
        if (isColorChange) {
          const barOneIdx = animations[i][0];
          const barOneStyle = arrayBars[barOneIdx].style;
          const color = animations[i][1]
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
          }, i * 1);
        } else {
          setTimeout(() => {
            const barOneIdx = animations[i][0];
            const barTwoIdx = animations[i][2];
            const newHeight1 = animations[i][1]
            const newHeight2 = animations[i][3]
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            barOneStyle.height = `${newHeight1}%`;
            barTwoStyle.height = `${newHeight2}%`;
          }, i * 1);
        }
      }
      setTimeout(resolve, animations.length+2)
    })
    }

    bubbleSort(){
      return new Promise((resolve) =>{
      var animations = getBubbleSortAnimations(this.state.array);
      console.log(animations)
      const arrayBars = document.getElementsByClassName('bar');
      for (let i = 0; i < animations.length; i++) {
        const isColorChange = (animations[i].length === 2);
        if (isColorChange) {
          const barOneIdx = animations[i][0];
          const barOneStyle = arrayBars[barOneIdx].style;
          const color = animations[i][1]
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
          }, i * 1);
        } else {
          setTimeout(() => {
            const barOneIdx = animations[i][0];
            const barTwoIdx = animations[i][2];
            const newHeight1 = animations[i][1]
            const newHeight2 = animations[i][3]
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            barOneStyle.height = `${newHeight1}%`;
            barTwoStyle.height = `${newHeight2}%`;
          }, i * 1);
        }
      }
      setTimeout(resolve, animations.length+2)
    })
    }

    blockButtons(document){
      const buttons = document.getElementsByClassName('buttons')
      const wrapper = document.getElementById('wrapper');
      console.log(buttons);
      console.log(wrapper);
      if(buttons[0].classList.contains('noClick')){
        for(let i = 0; i<buttons.length; i++){
          buttons[i].classList.remove('noClick');
        }
        wrapper.classList.remove('noClick');
      }
      else{
        for(let i = 0; i<buttons.length;i++){
          buttons[i].classList.add('noClick');
        }
        wrapper.classList.add('noClick');
      }
    }

    async waitFunc(functionToWaitFor,document){
      this.blockButtons(document)
      await functionToWaitFor();
      this.blockButtons(document)
    }
    
    render(){
        const {array} = this.state;

        return (
            <div 
            className="container"
            style={{minWidth: `${this.minimumWidth}px`}}>
                {array.map((value,key) => (
                    <div 
                    className="bar" 
                    key={key}
                    style={{height: `${value}%`}}>
                    </div>
                ))}
                <span id="wrapper">
                  <button className="buttons" onClick={() => this.resetArray(false)}>Reset Array</button>
                  <button className="buttons" onClick={() => this.waitFunc(() => this.mergeSort(),document)}>Merge Sort Array</button>
                  <button className="buttons" onClick={() => this.waitFunc(() => this.quickSort(),document)}>Quick Sort Array</button>
                  <button className="buttons" onClick={() => this.waitFunc(() => this.heapSort(),document)}>Heap Sort Array</button>
                  <button className="buttons" onClick={() => this.waitFunc(() => this.bubbleSort(),document)}>Bubble Sort Array</button>
                </span>
            </div>
            
        )

    }


}