"use strict";
class CD {
    constructor(id, title, artist, year) {
        this._id = id;
        this._title = title;
        this._artist = artist;
        this._year = year;
    }
    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    get artist() {
        return this._artist;
    }
    get year() {
        return this._year;
    }
}
class CDStoreManager {
    constructor() {
        this._cds = [];
    }
    addCD(title, artist, year) {
        let id = Math.random();
        let cd = new CD(id, title, artist, year);
        this._cds.push(cd);
    }
    listCDs() {
        this._cds.forEach(function (element, index) {
            console.log(`ID: ${element.id}`);
            console.log(`Title: ${element.title}`);
            console.log(`Artist: ${element.artist}`);
            console.log(`Year: ${element.year}`);
        });
    }
    removeCD(id) {
        let check = false;
        for (let i = 0; i < this._cds.length; i++) {
            if (this._cds[i].id === id) {
                console.log(`Đã xóa ${this._cds[i].title} ra khỏi cửa hàng`);
                this._cds.splice(i, 1);
                check = true;
                break;
            }
            else {
                check = false;
            }
        }
        if (check === false) {
            console.log(`Không có Id nào là ${id} trong danh sách`);
        }
    }
    searchCD(title) {
        let check = false;
        for (let i = 0; i < this._cds.length; i++) {
            if (this._cds[i].title === title) {
                console.log(`Id: ${this._cds[i].id}`);
                console.log(`Title: ${this._cds[i].title}`);
                console.log(`Artist: ${this._cds[i].artist}`);
                console.log(`Year: ${this._cds[i].year}`);
                check = true;
                break;
            }
            else {
                check = false;
            }
        }
        if (check === false) {
            console.log(`Không có Cd ${title} trong danh sách`);
        }
    }
}
class Main {
    constructor() {
        this.cdStoreManager = new CDStoreManager;
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
                    //Thêm CD vào cửa hàng.
                    let title = String(prompt("Hãy nhập vào tên CD"));
                    let artist = String(prompt("Hãy nhập vào tên nghệ sĩ"));
                    let year = Number(prompt("Hãy nhập vào năm phát hành"));
                    this.cdStoreManager.addCD(title, artist, year);
                    break;
                case "2":
                    //Hiển thị danh sách CD.
                    this.cdStoreManager.listCDs();
                    break;
                case "3":
                    //Xóa CD theo mã CD.
                    let id = Number(prompt("Hãy nhập vào id CD bạn muốn xóa"));
                    this.cdStoreManager.removeCD(id);
                    break;
                case "4":
                    //Tìm kiếm CD theo tên.
                    let titleCD = String(prompt("Hãy nhập vào tên CD bạn muốn tìm kiếm"));
                    this.cdStoreManager.searchCD(titleCD);
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
