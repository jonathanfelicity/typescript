class Queue<T>{
    private data: T[] = [];

    add(item: T): void{
        this.data.push(item);
    }

    remove():void{
        this.data.shift()
    }
}

let people = new Queue<string>()
let num = new Queue<number>()