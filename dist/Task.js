"use strict";
class Employee {
    constructor(id, name) {
        this._id = id;
        this._name = name;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    set id(id) {
        this._id = id;
    }
}
class Task {
    constructor(id, title, deadline, isCompleted = false) {
        this._id = id;
        this._title = title;
        this._deadline = deadline;
        this._isCompleted = isCompleted;
    }
    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    get deadline() {
        return this._deadline;
    }
    get isCompleted() {
        return this._isCompleted;
    }
    set isCompleted(isComplete) {
        this._isCompleted = isComplete;
    }
}
class Assignment {
    constructor(employee, task) {
        this._employee = employee;
        this._task = task;
    }
}
let idE = 0;
let idTa = 0;
class TaskManager {
    constructor() {
        this._employees = [];
        this._tasks = [];
        this._assignments = [];
    }
    get employees() {
        return this._employees;
    }
    get tasks() {
        return this._tasks;
    }
    addEmployee(name) {
        idE++;
        let newEmployee = new Employee(idE, name);
        this._employees.push(newEmployee);
        this._employees.forEach(function (element, index = 1) {
            console.log(`ID: ${index + 1} Name: ${element.name}`);
        });
    }
    addTask(title, deadline) {
        idTa++;
        let date = new Date(deadline);
        if (isNaN(date.getTime())) {
            console.log("Ngày không hợp lệ. Vui lòng nhập ngày đúng định dạng.");
            return;
        }
        let newTask = new Task(idTa, title, date);
        this._tasks.push(newTask);
        this._tasks.forEach(function (element, index) {
            console.log(`ID: ${index + 1}`);
            console.log(`TITLE: ${element.title}`);
            console.log(`DEADLINE: ${element.deadline.toLocaleDateString('vi-VN')}`);
            console.log(`STATUS: ${element.isCompleted}`);
        });
    }
    assignTask(employeeId, taskId) {
        const employee = this._employees.find(emp => emp.id === employeeId);
        if (!employee) {
            console.log("Không có ID này trong danh sách nhân viên!");
            return;
        }
        const task = this._tasks.find(ta => ta.id === taskId);
        if (!task) {
            console.log("Không có ID này trong danh sách công việc!");
            return;
        }
        let newAssignment = new Assignment(employee, task);
        this._assignments.push(newAssignment);
        console.log(`Đã gán công việc ${task.title} cho nhân viên ${employee.name}`);
    }
    completeTask(taskId) {
        let task = this._tasks.find(ta => ta.id === taskId);
        if (!task) {
            console.log("Không có ID này trong danh sách công việc!");
            return;
        }
        else {
            task.isCompleted = true;
        }
        task.isCompleted = true;
        console.log(`Đánh dấu hoàn thành cho công việc:`);
        console.log(`Title: ${task.title}`);
        console.log(`Hạn hoàn thành: ${task.deadline.toLocaleDateString('vi-VN')}`);
        console.log(`Trạng thái: ${task.isCompleted}`);
    }
    listTasks() {
        let now = new Date();
        let dateNow = now.toLocaleDateString('vi-VN');
        console.log(dateNow);
        this._tasks.forEach(function (element, index) {
            if (element.isCompleted === true) {
                console.log("=========Danh sách công việc đã hoàn thành=========");
                console.log(`Title: ${element.title}`);
                console.log(`Hạn hoàn thành: ${element.deadline.toLocaleDateString('vi-VN')}`);
                console.log(`Trạng thái: ${element.isCompleted}`);
            }
            else if (element.isCompleted === false && element.deadline.getTime() < now.getTime()) {
                console.log("=========Danh sách công việc quá hạn=========");
                console.log(`Title: ${element.title}`);
                console.log(`Hạn hoàn thành: ${element.deadline.toLocaleDateString('vi-VN')}`);
                console.log(`Trạng thái: ${element.isCompleted}`);
            }
            else if (element.isCompleted === false && element.deadline.getTime() >= now.getTime()) {
                console.log("=========Danh sách công việc chưa hoàn thành=========");
                console.log(`Title: ${element.title}`);
                console.log(`Hạn hoàn thành: ${element.deadline.toLocaleDateString('vi-VN')}`);
                console.log(`Trạng thái: ${element.isCompleted}`);
            }
        });
    }
}
class Main {
    constructor() {
        this.taskManager = new TaskManager();
    }
    boostrap() {
        console.log("=========MENU========");
        console.log("1.Thêm nhân viên mới");
        console.log("2.Thêm task mới");
        console.log("3.Gán task cho nhân viên");
        console.log("4.Đánh dấu task hoàn thành");
        console.log("5.Hiển thị danh sách task (bao gồm thông tin nhân viên, task, hạn hoàn thành, trạng thái và quá hạn nếu có)");
        console.log("6.Dừng chương trình");
        let check = true;
        while (check) {
            let input = String(prompt("Hãy nhập vào 1-6 đề điều khiển chương trình"));
            switch (input) {
                case "1":
                    //Thêm nhân viên mới
                    let name = String(prompt("Hãy nhập vào tên nhân viên"));
                    this.taskManager.addEmployee(name);
                    break;
                case "2":
                    //Thêm task mới.
                    let title = String(prompt("Hãy nhập vào title của công việc:"));
                    let deadline = String(prompt("Hãy nhập vào deadline của công việc (Nhập với định dạng YY-MM-DD)"));
                    this.taskManager.addTask(title, deadline);
                    break;
                case "3":
                    //Gán task cho nhân viên.
                    let employeeId = Number(prompt("Hãy nhập vào id của nhân viên"));
                    let taskId = Number(prompt("Hãy nhập vào id của công việc"));
                    this.taskManager.assignTask(employeeId, taskId);
                    break;
                case "4":
                    let taskIdd = Number(prompt("Hãy nhập vào ID của công việc:"));
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
let app1 = new Main();
app1.boostrap();
