"use strict";
class Book {
    constructor(id, title, author, year) {
        this._id = id;
        this._title = title;
        this._author = author;
        this._year = year;
    }
    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    get author() {
        return this._author;
    }
    get year() {
        return this._year;
    }
}
class LibraryManager {
    constructor() {
        this._books = [];
    }
    addBook(title, author, year) {
        let id = Math.random();
        let book = new Book(id, title, author, year);
        this._books.push(book);
    }
    listBooks() {
        if (this._books !== null) {
            this._books.forEach(function (element, index) {
                console.log(`Id: ${element.id}`);
                console.log(`Title: ${element.title}`);
                console.log(`Author: ${element.author}`);
                console.log(`Year: ${element.year}`);
            });
        }
        else {
            console.log("Danh sách này rỗng");
        }
    }
    removeBook(id) {
        let check = false;
        for (let i = 0; i < this._books.length; i++) {
            if (this._books[i].id === id) {
                console.log(`Đã xóa sách ${this._books[i].title} khỏi danh sách`);
                this._books.splice(i, 1);
                check = true;
                break;
            }
            else {
                check = false;
            }
        }
        if (check === false) {
            console.log("Không có ID sách này trong danh sách");
        }
    }
    searchBook(title) {
        let check = false;
        for (let i = 0; i < this._books.length; i++) {
            if (this._books[i].title === title) {
                console.log(`Title: ${this._books[i].title}`);
                console.log(`Author: ${this._books[i].author}`);
                console.log(`Year: ${this._books[i].year}`);
                check = true;
                break;
            }
            else {
                check = false;
            }
        }
        if (check === false) {
            console.log(`Không có sách ${title} trong danh sách`);
        }
    }
}
class Main {
    constructor() {
        this.libraryManager = new LibraryManager();
    }
    boostrap() {
        console.log("=========MENU========");
        console.log("1.Thêm sách vào thư viện.");
        console.log("2.Hiển thị danh sách sách.");
        console.log("3.Xóa sách theo mã sách.");
        console.log("4.Tìm kiếm sách theo tên.");
        console.log("5.Dừng chương trình.");
        let check = true;
        while (check) {
            let input = String(prompt("Hãy nhập vào 1-5 đề điều khiển chương trình"));
            switch (input) {
                case "1":
                    //Thêm sách vào thư viện.
                    let title = String(prompt("Hãy nhập vào tên sách"));
                    let author = String(prompt("Hãy nhập vào tên tác giả"));
                    let year = Number(prompt("Hãy nhập vào năm xuất bản"));
                    this.libraryManager.addBook(title, author, year);
                    break;
                case "2":
                    //Hiển thị danh sách sách.
                    this.libraryManager.listBooks();
                    break;
                case "3":
                    //Xóa sách theo mã sách.
                    let id = Number(prompt("Hãy nhập vào id book bạn muốn xóa"));
                    this.libraryManager.removeBook(id);
                    break;
                case "4":
                    //Tìm kiếm sách theo tên.
                    let titleB = String(prompt("Hãy nhập vào tên sách bạn muốn tìm kiếm"));
                    this.libraryManager.searchBook(titleB);
                    break;
                case "5":
                    //Dừng chương trình.
                    check = false;
                    console.log("Cảm ơn bạn đã sử dụng chương trình");
                    break;
                default:
                    break;
            }
        }
    }
}
let app1 = new Main();
app1.boostrap();
