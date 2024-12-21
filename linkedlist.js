class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
    }

    // Add the data of the node
    add(data){
        const node = new Node(data);
        if(!this.head){
            this.head = node;
            return;
        }
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = node;
        //console.log(current);
    }


    print() {
        let current = this.head;
        const result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(" -> "));
    }
    

    delete(data){
        if(!this.head){
            return;
        }
        if(this.head.data == data){
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while(current.next && current.next.data!=data){
            current = current.next;
        }
        if(current.next){
            current.next = current.next.next;
        }
    }
    reverse(){
        let prev = null;
        let curr = this.head;
        let nextp ;
        while(curr!=null){
            nextp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextp;
        }
        this.head  = prev;
        this.print();
    }
    sort(){
        let arr = [];
        let temp = this.head;
        while(temp!=null){
            arr.push(temp.data);
            temp = temp.next;
        }
        arr.sort();
        temp = this.head;
        let i = 0;
        while(temp!=null){
            temp.data = arr[i];
            i++;
            temp = temp.next;
        }
        this.print();
    }
}
const link = new LinkedList();
link.add(5);
link.add(6);
link.add(7);
link.add(8);
link.add(9);
link.add(1);
link.add(7);
//link.print();
//link.delete(7);
link.print();
link.sort();
link.reverse();
function middle(link){
    if (!link.head || !link.head.next) {
        return null;
    }
    let slow = link.head;
    let fast = link.head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow.data;
}
//console.log(middle(link));