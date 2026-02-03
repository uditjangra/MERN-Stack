const obj = {
    name : "Alex",
    show(){
        console.log(this.name);
        function inner(){
            console.log(this)
        }
        inner();
    }
};
obj.show();
