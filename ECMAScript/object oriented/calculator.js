var calculator ={
    sum:0,
    add:function(value){
        this.sum += value;
    },
    equals:function(){
        return this.sum;
    },
    clear:function(){
        this.sum ==0;
    }
}