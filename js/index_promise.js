import {doSomething} from '../js/functionpromise.js'


function onFullfileld(doSomethingData){
     console.log(doSomethingData);
}

function onRejected(doSomethingError){
     console.log(doSomethingError);
}


doSomething(). then(onFullfileld, onRejected);