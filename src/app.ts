class GeometryCalculator{
    constructor(){}

    circleArea(radius: number): number {
        return (radius**2)*3.14;
    }
    circlePerimeter(radius: number): number{
        return radius*2*3.14;
    }
    triangleArea(base: number, height: number): number {

        return (base*height)/2;
    }
    trianglePerimeter(a: number, b: number, c: number): number {

        return a+b+c;

    }
    rectangleArea(width: number, height: number): number {

        return width*height;

    }
    rectanglePerimeter(width: number, height: number): number {

        return 2*(width+height);

    }
    parallelogramArea(base: number, height: number): number {

        return base*height;

    }
    parallelogramPerimeter(a: number, b: number): number{

        return (a+b)*2;

    }
    rhombusArea(d1: number, d2: number): number{

        return (d1*d2)/2;

    }
    rhombusPerimeter(side: number): number{
        return side*4;
        
    }

}

class Main{
    geometryCalculator: GeometryCalculator;

    constructor(){
        this.geometryCalculator = new GeometryCalculator;
    }

    bootstrap(){
        console.log("========== Menu chức năng ==========");
        console.log("1.Tính diện tích và chu vi hình tròn");
        console.log("2.Tính diện tích và chu vi hình tam giác");
        console.log("3.Tính diện tích và chu vi hình chữ nhật");
        console.log("4.Tính diện tích và chu vi hình bình hành");
        console.log("5.Tính diện tích và chu vi hình thoi");
        console.log("6.Dừng chương trình");
        let check: boolean = true;
        while(check){
            let input: string = String(prompt("Hãy nhập vào 1-6 để điều khiển chương trình"));
            switch (input){
                case "1":
                    //
                    let radius: number = Number(prompt("Hãy nhập vào bán kính hình tròn"));
                    console.log(`Diện tích hình tròn: ${this.geometryCalculator.circleArea(radius)}`);
                    console.log(`Chu vi hình tròn: ${this.geometryCalculator.circlePerimeter(radius)}`)
                    break;
                case "2":
                    //
                    let base: number = Number(prompt("Hãy nhập vào chiều dài cạnh đáy hình tam giác"));
                    let height: number = Number(prompt("Hãy nhập vào chiều cào hình tam giác"));
                    console.log(`Diện tích hình tam giác: ${this.geometryCalculator.triangleArea(base,height)}`);
                    let a: number = Number(prompt("Hãy nhập vào chiều dài cạnh 1 hình tam giác"));
                    let b: number = Number(prompt("Hãy nhập vào chiều dài cạnh 2 hình tam giác"));
                    let c: number = Number(prompt("Hãy nhập vào chiều dài cạnh 3 hình tam giác"));
                    console.log(`Diện tích hình tam giác: ${this.geometryCalculator.trianglePerimeter(a,b,c)}`);
                    break;
                case "3":
                    //
                    let width: number = Number(prompt("Hãy nhập vào chiều rộng hình chữ nhật"));
                    let heightRectang: number = Number(prompt("Hãy nhập vào chiều dài hình chữ nhật"));
                    console.log(`Diện tích hình chữ nhật: ${this.geometryCalculator.rectangleArea(width,heightRectang)}`);
                    console.log(`Diện tích hình chữ nhật: ${this.geometryCalculator.rectanglePerimeter(width,heightRectang)}`);
                    break;
                case "4":
                    //
                    let baseParallelogram: number = Number(prompt("Hãy nhập vào cạnh đáy hình bình hành"));
                    let heightParallelogram: number = Number(prompt("Hãy nhập vào chiều cao hình bình hành"));
                    console.log(`Diện tích hình bình hành: ${this.geometryCalculator.parallelogramArea(baseParallelogram,heightParallelogram)}`);
                    let aP: number = Number(prompt("Hãy nhập vào chiều dài cạnh 1 hình bình hành"));
                    let bP: number = Number(prompt("Hãy nhập vào chiều dài cạnh 2 hình bình hành"));
                    console.log(`Chu vi hình bình hành: ${this.geometryCalculator.parallelogramPerimeter(aP,bP)}`);
                    break;
                case "5":
                    //
                    let d1: number = Number(prompt("Hãy nhập vào đường chéo 1 của hình thoi"));
                    let d2: number = Number(prompt("Hãy nhập vào đường chéo 2 của hình thoi"));
                    console.log(`Diện tích hình thoi: ${this.geometryCalculator.rhombusArea(d1,d2)}`);
                    let side: number = Number(prompt("Hãy nhập vào cạnh của hình thoi"));
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

let main: Main = new Main;
main.bootstrap();