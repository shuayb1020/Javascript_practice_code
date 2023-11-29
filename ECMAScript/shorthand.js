'use strict';

function submit (name,comment,rating=5){
    let data ={name,comment,rating};

    for (let key in data){
        console.log(key + ':', data[key]);
    }
}

submit('Mathematics', 'Good Course',20)