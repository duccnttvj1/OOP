"use strict";
class GeometryCalculator {
    constructor() { }
    circleArea(radius) {
        return (Math.pow(radius, 2)) * 3.14;
    }
    circlePerimeter(radius) {
        return radius * 2 * 3.14;
    }
    triangleArea(base, height) {
        return (base * height) / 2;
    }
    trianglePerimeter(a, b, c) {
        return a + b + c;
    }
    rectangleArea(width, height) {
        return width * height;
    }
    rectanglePerimeter(width, height) {
        return 2 * (width + height);
    }
    parallelogramArea(base, height) {
        return base * height;
    }
    parallelogramPerimeter(a, b) {
        return (a + b) * 2;
    }
    rhombusArea(d1, d2) {
        return (d1 * d2) / 2;
    }
    rhombusPerimeter(side) {
        return side * 4;
    }
}
class Main {
    constructor() {
        this.geometryCalculator = new GeometryCalculator;
    }
    bootstrap() {
        console.log("========== Menu chức năng ==========");
        console.log("1.Tính diện tích và chu vi hình tròn");
        console.log("2.Tính diện tích và chu vi hình tam giác");
        console.log("3.Tính diện tích và chu vi hình chữ nhật");
        console.log("4.Tính diện tích và chu vi hình bình hành");
        console.log("5.Tính diện tích và chu vi hình thoi");
        console.log("6.Dừng chương trình");
        let check = true;
        while (check) {
            let input = String(prompt("Hãy nhập vào 1-6 để điều khiển chương trình"));
            switch (input) {
                case "1":
                    //
                    let radius = Number(prompt("Hãy nhập vào bán kính hình tròn"));
                    console.log(`Diện tích hình tròn: ${this.geometryCalculator.circleArea(radius)}`);
                    console.log(`Chu vi hình tròn: ${this.geometryCalculator.circlePerimeter(radius)}`);
                    break;
                case "2":
                    //
                    let base = Number(prompt("Hãy nhập vào chiều dài cạnh đáy hình tam giác"));
                    let height = Number(prompt("Hãy nhập vào chiều cào hình tam giác"));
                    console.log(`Diện tích hình tam giác: ${this.geometryCalculator.triangleArea(base, height)}`);
                    let a = Number(prompt("Hãy nhập vào chiều dài cạnh 1 hình tam giác"));
                    let b = Number(prompt("Hãy nhập vào chiều dài cạnh 2 hình tam giác"));
                    let c = Number(prompt("Hãy nhập vào chiều dài cạnh 3 hình tam giác"));
                    console.log(`Diện tích hình tam giác: ${this.geometryCalculator.trianglePerimeter(a, b, c)}`);
                    break;
                case "3":
                    //
                    let width = Number(prompt("Hãy nhập vào chiều rộng hình chữ nhật"));
                    let heightRectang = Number(prompt("Hãy nhập vào chiều dài hình chữ nhật"));
                    console.log(`Diện tích hình chữ nhật: ${this.geometryCalculator.rectangleArea(width, heightRectang)}`);
                    console.log(`Diện tích hình chữ nhật: ${this.geometryCalculator.rectanglePerimeter(width, heightRectang)}`);
                    break;
                case "4":
                    //
                    let baseParallelogram = Number(prompt("Hãy nhập vào cạnh đáy hình bình hành"));
                    let heightParallelogram = Number(prompt("Hãy nhập vào chiều cao hình bình hành"));
                    console.log(`Diện tích hình bình hành: ${this.geometryCalculator.parallelogramArea(baseParallelogram, heightParallelogram)}`);
                    let aP = Number(prompt("Hãy nhập vào chiều dài cạnh 1 hình bình hành"));
                    let bP = Number(prompt("Hãy nhập vào chiều dài cạnh 2 hình bình hành"));
                    console.log(`Chu vi hình bình hành: ${this.geometryCalculator.parallelogramPerimeter(aP, bP)}`);
                    break;
                case "5":
                    //
                    let d1 = Number(prompt("Hãy nhập vào đường chéo 1 của hình thoi"));
                    let d2 = Number(prompt("Hãy nhập vào đường chéo 2 của hình thoi"));
                    console.log(`Diện tích hình thoi: ${this.geometryCalculator.rhombusArea(d1, d2)}`);
                    let side = Number(prompt("Hãy nhập vào cạnh của hình thoi"));
                    console.log(`Chu vi hình thoi: ${this.geometryCalculator.rhombusPerimeter(side)}`);
                    break;
                case "6":
                    //
                    check = false;
                    console.log("Cảm ơn bạn đã sử dụng chương trình!");
                    break;
            }
        }
    }
}
let main = new Main;
main.bootstrap();
