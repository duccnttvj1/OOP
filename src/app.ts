class Calculator {
    constructor(){}

    add(a: number, b: number): number{
        return a+b;
    }

    subtract(a: number, b: number): number{
        return a-b;
    }

    multiply(a: number, b: number): number{
        return a*b;
    }

    divide(a: number, b: number): number{
        if(b === 0){
            console.log("Không thể thực hiện phép chia cho 0. Mời bạn nhập lại")
            return 0;
        }else{
            return a/b;
        }
    }
}

class Main{
    public calculator: Calculator
    constructor(){
        this.calculator = new Calculator;
    }

    boostrap(): void{
        let check: boolean = true;
        console.log("======= Menu chức năng =======");
        console.log("1.Cộng hai số");
        console.log("2.Trừ hai số");
        console.log("3.Nhân hai số");
        console.log("4.Chia hai số");
        console.log("5.Dừng chương trình");

        while (check){
            let input: string = String(prompt("Hãy nhập vào từ 1-5 để điều khiển chương trình"));
            switch (input){
                case "1":
                    //
                    let a: number = Number(prompt("Hãy nhập vào số a:"));
                    let b: number = Number(prompt("Hãy nhập vào số b:"));
                    console.log(`Kết quả phép cộng: ${ this.calculator.add(a,b)}`);
                    break;
                case "2":
                    //
                    let aa: number = Number(prompt("Hãy nhập vào số a:"));
                    let bb: number = Number(prompt("Hãy nhập vào số b:"));
                    this.calculator.subtract(aa,bb);
                    console.log(`Kết quả phép trừ: ${this.calculator.subtract(aa,bb)}`);
                    break;
                case "3":
                    //
                    let aaa: number = Number(prompt("Hãy nhập vào số a:"));
                    let bbb: number = Number(prompt("Hãy nhập vào số b:"));
                    console.log(`Kết quả phép nhân: ${this.calculator.multiply(aaa,bbb)}`);
                    break;
                case "4":
                    //
                    let aaaa: number = Number(prompt("Hãy nhập vào số a:"));
                    let bbbb: number = Number(prompt("Hãy nhập vào số b:"));
                    console.log(`Kết quả phép chia: ${this.calculator.divide(aaaa,bbbb)}`);
                    break;
                case "5":
                    //
                    check = false;
                    console.log("Cảm ơn bạn đã sử dụng máy tính cầm tay!");
                    break;
            }
        }
    }
}

let main: Main = new Main;
main.boostrap();