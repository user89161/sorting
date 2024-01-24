import React from 'react';
import './Sorting.css';
import { getMergeSortAnimations, getQuickSortAnimations, getBubbleSortAnimations, getHeapSortAnimations } from '../Algos/Algos';

const TIME = 10;

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        const selectedAlgorithm = localStorage.getItem('selectedAlgorithm');
        if (selectedAlgorithm && selectedAlgorithm !== 'resetArray') {
            this.resetArray(() => this[selectedAlgorithm]());
        } else {
            this.resetArray();
        }
    }

    resetArray(callback) {
        const array = [];
        for (let i = 0; i < 100; i++) {
            array.push(randomIntFromInterval(5, 1000));
        }
        this.setState({ array }, callback);
    }

    startSortAndReload(algorithmName) {
        localStorage.setItem('selectedAlgorithm', algorithmName);
        window.location.reload();
    }

    MergeSort() {
        //this.reloadPage();
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? 'red' : 'blue';
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * TIME);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight*.7}px`;
            }, i * TIME);
          }
        }
      }

    QuickSort(){
       // this.reloadPage();
        const animations = getQuickSortAnimations(this.state.array);
       
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [index, value] = animations[i];

            if(value==='c1'){
            setTimeout(()=>{
                const indexstyle = arrayBars[index].style;
                indexstyle.backgroundColor = 'red';
            },TIME*i);
            }

            else if(value==='c2'){
                setTimeout(()=>{
                    const indexstyle = arrayBars[index].style;
                    indexstyle.backgroundColor = 'blue';

                
                }, TIME*i);
            }
            else {
                setTimeout(() => {
                
                    const index1style = arrayBars[index].style;
                
                    index1style.height = `${value*.7}px`;
                    index1style.color = 'blue';
                }, TIME*i );
            }

        }              

    }
    BubbleSort(){
       // this.reloadPage();
        const animations = getBubbleSortAnimations(this.state.array);
       
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [index, value] = animations[i];

            if(value==='c1'){
            setTimeout(()=>{
                const indexstyle = arrayBars[index].style;
                indexstyle.backgroundColor = 'red';
            },TIME*i);
            }

            else if(value==='c2'){
                setTimeout(()=>{
                    const indexstyle = arrayBars[index].style;
                    indexstyle.backgroundColor = 'blue';

                
                }, TIME*i);
            }
            else {
                setTimeout(() => {
                
                    const index1style = arrayBars[index].style;
                
                    index1style.height = `${value*.7}px`;
                    index1style.color = 'blue';
                }, TIME*i );
            }

        }              

    }
    HeapSort(){
       // this.reloadPage();
        const animations = getHeapSortAnimations(this.state.array);
       
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [index, value] = animations[i];

            if(value==='c1'){
            setTimeout(()=>{
                const indexstyle = arrayBars[index].style;
                indexstyle.backgroundColor = 'red';
            },TIME*i);
            }

            else if(value==='c2'){
                setTimeout(()=>{
                    const indexstyle = arrayBars[index].style;
                    indexstyle.backgroundColor = 'blue';

                
                }, TIME*i);
            }
            else {
                setTimeout(() => {
                
                    const index1style = arrayBars[index].style;
                
                    index1style.height = `${value*.7}px`;
                    index1style.color = 'blue';
                }, TIME*i );
            }

        }              

    }


    /*
    testSortingAlgos(){
        for (let i =0;i<1;i++){
            const array = []
            const length = randomIntFromInterval(1,100);
            for (let i = 0;i<length;i++){
                array.push(randomIntFromInterval(-1000,1000));
            }
            const javaScriptSortedArray = array.slice().sort((a,b)=>a-b)
            const sortedArray = getHeapSortAnimations(array);
            console.log(arraysAreEqual(javaScriptSortedArray, sortedArray));

        }
    }
    */
    

    render() {
        const { array } = this.state;

        return (
            <>
                <div id="buttons">
                    <button onClick={() => this.startSortAndReload('resetArray')}>New Array</button>
                    <button onClick={() => this.startSortAndReload('MergeSort')}>Merge Sort</button>
                    <button onClick={() => this.startSortAndReload('QuickSort')}>QuickSort</button>
                    <button onClick={() => this.startSortAndReload('BubbleSort')}>BubbleSort</button>
                    <button onClick={() => this.startSortAndReload('HeapSort')}>HeapSort</button>
                </div>
                <div className="array-container">
                    {array.map((value, idx) => (
                        <div className="array-bar" key={idx} style={{ height: `${value * .7}px` }}></div>
                    ))}
                </div>
            </>
        );
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function arraysAreEqual(array1, array2) {
    if (array1.length !== array2.length) return false;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) return false;
    }
    return true;
}