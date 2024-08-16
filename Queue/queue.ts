class Queue<T>{
     queue: T[]=[];
    
    enqueue(item:T): void{
        this.queue.push(item);
    }
    dequeue():T | undefined{
        return this.queue.shift();
    }
    peek():T| undefined{
        return this.queue[0];
    }
}
const numqueue=new Queue<Number>();
numqueue.enqueue(100);
numqueue.enqueue(200);
numqueue.enqueue(100);
numqueue.enqueue(200);
console.log(numqueue.queue);
numqueue.dequeue();
console.log(numqueue.queue);
console.log(numqueue.peek());
