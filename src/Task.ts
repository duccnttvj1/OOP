class Employee{
    private _id: number;
    private _name: string;

    constructor(id: number, name: string){
        this._id = id;
        this._name = name;
    }

    get id(){
        return this._id;
    }

    get name(){
        return this._name;
    }

    set id(id: number){
        this._id = id;
    }
}

class Task {
    private _id: number;
    private _title: string;
    private _deadline: Date;
    private _isCompleted: boolean;

    constructor(id: number, title: string, deadline: Date, isCompleted: boolean = false){
        this._id = id;
        this._title = title;
        this._deadline = deadline;
        this._isCompleted = isCompleted;
    }

    get id(){
        return this._id;
    }

    get title(){
        return this._title;
    }

    get deadline(){
        return this._deadline;
    }

    get isCompleted(){
        return this._isCompleted;
    }

    set isCompleted(isComplete: boolean){
        this._isCompleted = isComplete;
    }
}

class Assignment{
    private _employee: Employee;
    private _task: Task;

    constructor(employee: Employee, task: Task){
        this._employee = employee;
        this._task = task;
    }
}

let idE: number = 0;
let idTa: number = 0;

class TaskManager{
    private _employees: Employee[];
    private _tasks: Task[];
    private _assignments: Assignment[];


    constructor(){
        this._employees = [];
        this._tasks = [];
        this._assignments = [];
    }

    get employees(){
        return this._employees;
    }

    get tasks(){
        return this._tasks;
    }

    addEmployee(name: string): void{
        idE++;
        let newEmployee: Employee = new Employee(idE,name);
        this._employees.push(newEmployee);
        this._employees.forEach(function(element: Employee, index: number = 1){
            console.log(`ID: ${index+1} Name: ${element.name}`);
        });
    }

    addTask(title: string, deadline: string): void {
        idTa++;
        let date: Date = new Date(deadline);
    
        if (isNaN(date.getTime())) {
            console.log("Ngày không hợp lệ. Vui lòng nhập ngày đúng định dạng.");
            return;
        }
    
        let newTask: Task = new Task(idTa, title, date); 
        this._tasks.push(newTask);
        this._tasks.forEach(function(element: Task, index: number){
            console.log(`ID: ${index+1}`);
            console.log(`TITLE: ${element.title}`);
            console.log(`DEADLINE: ${element.deadline.toLocaleDateString('vi-VN')}`);
            console.log(`STATUS: ${element.isCompleted}`);
        });
    }
    

    assignTask(employeeId: number, taskId: number): void{
        const employee = this._employees.find(emp => emp.id === employeeId);
        if(!employee){
            console.log("Không có ID này trong danh sách nhân viên!");
            return;
        }
        const task = this._tasks.find(ta => ta.id === taskId);
        if(!task){
            console.log("Không có ID này trong danh sách công việc!");
            return;
        }

        let newAssignment: Assignment = new Assignment(employee,task);
        this._assignments.push(newAssignment);
        console.log(`Đã gán công việc ${task.title} cho nhân viên ${employee.name}`);
    }

    completeTask(taskId: number): void{
        let task = this._tasks.find(ta => ta.id === taskId);
        if(!task){
            console.log("Không có ID này trong danh sách công việc!");
            return;
        }else{
            task.isCompleted = true;
        }
        task.isCompleted = true;
        console.log(`Đánh dấu hoàn thành cho công việc:`);
        console.log(`Title: ${task.title}`);
        console.log(`Hạn hoàn thành: ${task.deadline.toLocaleDateString('vi-VN')}`);
        console.log(`Trạng thái: ${task.isCompleted}`);
    }

    listTasks(): void{
        let now: Date =  new Date();
        let dateNow = now.toLocaleDateString('vi-VN');
        console.log(dateNow);
        this._tasks.forEach(function(element: Task, index: number){
            if(element.isCompleted === true){
                console.log("=========Danh sách công việc đã hoàn thành=========");
                console.log(`Title: ${element.title}`);
                console.log(`Hạn hoàn thành: ${element.deadline.toLocaleDateString('vi-VN')}`);
                console.log(`Trạng thái: ${element.isCompleted}`);
            }else if(element.isCompleted === false && element.deadline.getTime() < now.getTime()){
                console.log("=========Danh sách công việc quá hạn=========");
                console.log(`Title: ${element.title}`);
                console.log(`Hạn hoàn thành: ${element.deadline.toLocaleDateString('vi-VN')}`);
                console.log(`Trạng thái: ${element.isCompleted}`);
            }else if(element.isCompleted === false && element.deadline.getTime() >= now.getTime()){
                console.log("=========Danh sách công việc chưa hoàn thành=========");
                console.log(`Title: ${element.title}`);
                console.log(`Hạn hoàn thành: ${element.deadline.toLocaleDateString('vi-VN')}`);
                console.log(`Trạng thái: ${element.isCompleted}`);
            }
        });
    }
}



class Main{
    taskManager: TaskManager;

    constructor(){
        this.taskManager = new TaskManager();
    }

    boostrap(){
        console.log("=========MENU========");
        console.log("1.Thêm nhân viên mới");
        console.log("2.Thêm task mới");
        console.log("3.Gán task cho nhân viên");
        console.log("4.Đánh dấu task hoàn thành");
        console.log("5.Hiển thị danh sách task (bao gồm thông tin nhân viên, task, hạn hoàn thành, trạng thái và quá hạn nếu có)");
        console.log("6.Dừng chương trình");

        let check: boolean = true;
        while(check){
            let input: string = String(prompt("Hãy nhập vào 1-6 đề điều khiển chương trình"));
            switch (input) {
                case "1":
                    //Thêm nhân viên mới
                    let name: string = String(prompt("Hãy nhập vào tên nhân viên"));
                    this.taskManager.addEmployee(name);
                    break;
                case "2":
                    //Thêm task mới.
                    let title: string = String(prompt("Hãy nhập vào title của công việc:"));
                    let deadline: string = String(prompt("Hãy nhập vào deadline của công việc (Nhập với định dạng YY-MM-DD)"));
                    this.taskManager.addTask(title,deadline);
                    break;
                case "3":
                    //Gán task cho nhân viên.
                    let employeeId: number = Number(prompt("Hãy nhập vào id của nhân viên"));
                    let taskId: number = Number(prompt("Hãy nhập vào id của công việc"));
                    this.taskManager.assignTask(employeeId,taskId);
                    break;
                case "4":
                    let taskIdd: number = Number(prompt("Hãy nhập vào ID của công việc:"));
                    this.taskManager.completeTask(taskIdd);
                    break;
                case "5":
                    //Hiển thị danh sách task (bao gồm thông tin nhân viên, task, hạn hoàn thành, trạng thái và quá hạn nếu có).
                    this.taskManager.listTasks();
                    break;
                case "6":
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