"use strict";
class Todo {
    constructor(id, content, status = false) {
        this._id = id;
        this._content = content;
        this._status = status;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get content() {
        return this._content;
    }
    set content(content) {
        this._content = content;
    }
    get status() {
        return this._status;
    }
    set status(status) {
        this._status = status;
    }
}
class TodoListManager {
    constructor() {
        this._todos = [];
    }
    addTodo(content) {
        // Thêm công việc vào cuối danh sách
    }
    removeTodo(index) {
        // Xóa công việc tại 1 vị trí bất kỳ
    }
    updateTodo(index, content) {
        //Cập nhật nội dung công việc tại 1 vị trí bất kỳ
    }
    sortTodo() {
        // Hiển thị ra danh sách việc đã được sắp xếp
    }
    findTodo(content) {
        //Tìm kiếm todo
        return 0;
    }
    listTodo() {
        //Hiển thị ra danh sách todo
        if (this._todos.length === 0) {
            console.log("Chưa có bất kỳ công việc nào cả");
        }
        else {
            this._todos.forEach(function (element, index) {
                console.log(``);
            });
        }
    }
}
class main {
    constructor() {
        this._todoManager = new TodoListManager();
    }
    boostrap() {
        console.log("Chương trình bắt đầu..... !!!!");
        let loop = true;
        console.log("1.In ra danh sách công việc");
        console.log("2.Thêm công việc vào cuối danh sách");
        console.log("3.Xóa công việc tại vị trí bất kỳ");
        console.log("4.Sửa nội dung công việc tại vị trí bất kỳ");
        console.log("5.Sắp xếp và in ra nội dung công việc");
        console.log("6.Tìm kiếm todo");
        console.log("7.Dừng chương trình");
        let choice = String(prompt("Mời bạn nhập vào lựa chọn từ 1-7 để điều khiển chương trình"));
        while (loop) {
            switch (choice) {
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
