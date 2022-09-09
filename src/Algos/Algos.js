
export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx +1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
   
      animations.push([i, j]);

      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
    
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
     
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      
      animations.push([i, i]);
  
      animations.push([i, i]);
     
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
    
      animations.push([j, j]);
      
      animations.push([j, j]);

      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }








  export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
   
    return QuickSortHelper(array, 0, array.length-1, animations);
  
  }

  function partition(start, end, array, animations){
    let pivot = array[end];
    let ptr = start;
    for (let i = start;i<end;i++){
       
        if (array[i]<=pivot){

            animations.push([i,'c1' ]);
            animations.push([ptr,'c1']);
            animations.push([i,'c2' ]);
            animations.push([ptr,'c2']);



            animations.push([i, array[ptr]]);
            animations.push([ptr, array[i]]);
            


            [array[i], array[ptr]]=[array[ptr], array[i]];
            ptr=ptr+1;
        }

        

    }
    //animations.push([ptr, end, array[ptr], array[end]]);


    animations.push([ptr,'c1']);
    animations.push([end,'c1']);
    animations.push([ptr,'c2']);
    animations.push([end,'c2']);
    animations.push([ptr, array[end]]);
    animations.push([end,array[ptr]]);
    



    [array[ptr], array[end]]=[array[end], array[ptr]];
    return ptr;



  }

  function QuickSortHelper(array, start, end, animations){

    if (array.length===1){
        return array;
    }
    if (start<end){
        let pi = partition(start,end,array, animations);
        QuickSortHelper(array,start, pi-1, animations);
        QuickSortHelper(array,pi+1, end, animations);

    }
 
  return animations;

  }



export function getBubbleSortAnimations(array){
    const animations = [];
    for (let i = 0;i<array.length;i++){
        for(let j = 0;j<array.length-1;j++){
            if (array[j]>array[j+1]){


                animations.push([j,'c1']);
                animations.push([j+1,'c1']);
                animations.push([j,'c2']);
                animations.push([j+1,'c2']);
                animations.push([j, array[j+1]]);
                animations.push([j+1,array[j]]);


                [array[j], array[j+1]]=[array[j+1], array[j]];
            }

        }
    }
    return animations
}



export function getHeapSortAnimations(array1){
    const animations = [];


    function heapify(array, N, i,animations){
        let max = i;
        let l = 2*i+1;
        let r = 2*i+2;

        if(l<N && array[max]<array[l]){
            max = l;
        }
        if(r<N && array[max]<array[r]){
            max = r;
        }

        if (max!==i){

            animations.push([i,'c1']);
            animations.push([max,'c1']);
            animations.push([i,'c2']);
            animations.push([max,'c2']);
            animations.push([i, array[max]]);
            animations.push([max,array[i]]);

            [array[i], array[max]]=[array[max], array[i]];
            heapify(array, N, max, animations);

        }
        return array;

    }

    let array = array1.slice();


    let N = array.length;

    for (var i = Math.floor(N/2)-1;i>=0;i--){
        heapify(array,N,i, animations);
    }

    for (i =N-1;i>0;i--){

        animations.push([i,'c1']);
        animations.push([0,'c1']);
        animations.push([i,'c2']);
        animations.push([0,'c2']);
        animations.push([i, array[0]]);
        animations.push([0, array[i]]);


        [array[i], array[0]]=[array[0], array[i]];
        heapify(array,i,0, animations);
    }


    return animations;
}
  
  