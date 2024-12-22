"use strict";
class Calculator {
    constructor() { }
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        if (b === 0) {
            console.log("Không thể thực hiện phép chia cho 0. Mời bạn nhập lại");
            return 0;
        }
        else {
            return a / b;
        }
    }
}
class Main {
    constructor() {
        this.calculator = new Calculator;
    }
    boostrap() {
        let check = true;
        console.log("======= Menu chức năng =======");
        console.log("1.Cộng hai số");
        console.log("2.Trừ hai số");
        console.log("3.Nhân hai số");
        console.log("4.Chia hai số");
        console.log("5.Dừng chương trình");
        while (check) {
            let input = String(prompt("Hãy nhập vào từ 1-5 để điều khiển chương trình"));
            switch (input) {
                case "1":
                    //
                    let a = Number(prompt("Hãy nhập vào số a:"));
                    let b = Number(prompt("Hãy nhập vào số b:"));
                    console.log(`Kết quả phép cộng: ${this.calculator.add(a, b)}`);
                    break;
                case "2":
                    //
                    let aa = Number(prompt("Hãy nhập vào số a:"));
                    let bb = Number(prompt("Hãy nhập vào số b:"));
                    this.calculator.subtract(aa, bb);
                    console.log(`Kết quả phép trừ: ${this.calculator.subtract(aa, bb)}`);
                    break;
                case "3":
                    //
                    let aaa = Number(prompt("Hãy nhập vào số a:"));
                    let bbb = Number(prompt("Hãy nhập vào số b:"));
                    console.log(`Kết quả phép nhân: ${this.calculator.multiply(aaa, bbb)}`);
                    break;
                case "4":
                    //
                    let aaaa = Number(prompt("Hãy nhập vào số a:"));
                    let bbbb = Number(prompt("Hãy nhập vào số b:"));
                    console.log(`Kết quả phép chia: ${this.calculator.divide(aaaa, bbbb)}`);
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
let main = new Main;
main.boostrap();
