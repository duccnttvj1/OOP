
class Todo{
    private _id: string;
    private _content: string;
    private _status: boolean;

    constructor(id: string, content: string, status = false) {
        this._id = id;
        this._content = content;
        this._status = status;
    }

    get id(){
        return this._id;
    }
    set id(id: string){
        this._id = id;
    }
    get content(){
        return this._content;
    }
    set content(content: string){
        this._content = content;
    }
    get status(){
        return this._status;
    }
    set status(status: boolean){
        this._status = status;
    }
}

class TodoListManager{
    private _todos: Todo[];

    constructor(){
        this._todos = [];
    }

    addTodo(content: string): void{
        // Thêm công việc vào cuối danh sách
        
    }

    removeTodo(index: number): void{
        // Xóa công việc tại 1 vị trí bất kỳ
    }

    updateTodo(index: number, content: string): void{
        //Cập nhật nội dung công việc tại 1 vị trí bất kỳ
    }

    sortTodo(): void{
        // Hiển thị ra danh sách việc đã được sắp xếp
    }

    findTodo(content: string): number{
        //Tìm kiếm todo
        return 0;
    }

    listTodo():void {
        //Hiển thị ra danh sách todo
        if(this._todos.length === 0){
            console.log("Chưa có bất kỳ công việc nào cả");
        }
        else{
            this._todos.forEach(function(element: Todo, index: number){
                console.log(``);
            });
        } 
    }
}


class main{
    // Thuộc tính và phương thức dùng để vận hành chương trình
    private _todoManager: TodoListManager;

    constructor(){
        this._todoManager = new TodoListManager();
    }

    boostrap(): void{
        console.log("Chương trình bắt đầu..... !!!!");
        let loop: boolean = true;

        console.log("1.In ra danh sách công việc");
        console.log("2.Thêm công việc vào cuối danh sách");
        console.log("3.Xóa công việc tại vị trí bất kỳ");
        console.log("4.Sửa nội dung công việc tại vị trí bất kỳ");
        console.log("5.Sắp xếp và in ra nội dung công việc");
        console.log("6.Tìm kiếm todo");
        console.log("7.Dừng chương trình");

        let choice: string = String(prompt("Mời bạn nhập vào lựa chọn từ 1-7 để điều khiển chương trình"));

        while(loop){
            switch (choice){
                case "1":
                    this._todoManager.listTodo();
                    break;
                case "2":

                    break;
                case "3":
                    break;
                case "4":
                    break;
                case "5":
                    break;
                case "6":
                    break;
                case "7":
                    console.log("Cảm ơn bạn đã dùng chương trình!");
                    break;
                default: 
                    console.log("Lựa chọn không hợp lệ!!!");
                    break;
            }
        }

    }
}

const app = new main();
app.boostrap();