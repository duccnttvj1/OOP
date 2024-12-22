class CD{
    private _id: number;
    private _title: string;
    private _artist: string;
    private _year: number;

    constructor(id: number, title: string, artist: string, year: number){
        this._id = id;
        this._title = title;
        this._artist = artist;
        this._year = year;
    }

    get id(){
        return this._id;
    }

    get title(){
        return this._title;
    }

    get artist(){
        return this._artist;
    }

    get year(){
        return this._year;
    }
}

class CDStoreManager{
    private _cds: CD[]

    constructor(){
        this._cds = [];
    }

    addCD(title: string, artist: string, year: number): void{
        let id: number = Math.random()
        let cd: CD = new CD(id,title,artist,year);
        this._cds.push(cd);
    }
    listCDs(): void {
        this._cds.forEach(function(element: CD, index: number){
            console.log(`ID: ${element.id}`);
            console.log(`Title: ${element.title}`);
            console.log(`Artist: ${element.artist}`);
            console.log(`Year: ${element.year}`);
        })
    }
    removeCD(id: number): void {
        let check: boolean = false;
        for(let i:number =0; i<this._cds.length; i++){
            if(this._cds[i].id === id){
                console.log(`Đã xóa ${this._cds[i].title} ra khỏi cửa hàng`);
                this._cds.splice(i,1);
                check = true;
                break;
            }else{
                check = false;
            }
        }
        if(check === false){
            console.log(`Không có Id nào là ${id} trong danh sách`);
        }
    }
    searchCD(title: string): void {
        let check: boolean = false;
        for(let i:number =0; i<this._cds.length; i++){
            if(this._cds[i].title === title){
                console.log(`Id: ${this._cds[i].id}`);
                console.log(`Title: ${this._cds[i].title}`);
                console.log(`Artist: ${this._cds[i].artist}`);
                console.log(`Year: ${this._cds[i].year}`);
                check = true;
                break;
            }else{
                check = false;
            }
        }
        if(check === false){
            console.log(`Không có Cd ${title} trong danh sách`);
        }
    }
}

class Main{

    public cdStoreManager: CDStoreManager;

    constructor(){
        this.cdStoreManager = new CDStoreManager;
    }

    boostrap(){
        console.log("=========MENU========");
        console.log("1.Thêm sách vào thư viện.");
        console.log("2.Hiển thị danh sách sách.");
        console.log("3.Xóa sách theo mã sách.");
        console.log("4.Tìm kiếm sách theo tên.");
        console.log("5.Dừng chương trình.");

        let check: boolean = true;
        while(check){
            let input: string = String(prompt("Hãy nhập vào 1-5 đề điều khiển chương trình"));
            switch (input) {
                case "1":
                    //Thêm CD vào cửa hàng.
                    let title: string = String(prompt("Hãy nhập vào tên CD"));
                    let artist: string = String(prompt("Hãy nhập vào tên nghệ sĩ"));
                    let year: number = Number(prompt("Hãy nhập vào năm phát hành"));
                    this.cdStoreManager.addCD(title,artist,year);
                    break;
                case "2":
                    //Hiển thị danh sách CD.
                    this.cdStoreManager.listCDs();
                    break;
                case "3":
                    //Xóa CD theo mã CD.
                    let id: number = Number(prompt("Hãy nhập vào id CD bạn muốn xóa"));
                    this.cdStoreManager.removeCD(id);
                    break;
                case "4":
                    //Tìm kiếm CD theo tên.
                    let titleCD: string = String(prompt("Hãy nhập vào tên CD bạn muốn tìm kiếm"));
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

let app1: Main = new Main();
app1.boostrap();