"use strict";
class Student {
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
}
class Course {
    constructor(id, title) {
        this._id = id;
        this._title = title;
    }
    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
}
class Enrollment {
    constructor(student, course, scheduleTime) {
        this._course = course;
        this._student = student;
        this._scheduleTime = scheduleTime;
    }
    get student() {
        return this._student;
    }
    get course() {
        return this._course;
    }
    get scheduleTime() {
        return this._scheduleTime;
    }
}
class StudyManager {
    constructor() {
        this._courses = [];
        this._students = [];
        this._enrollments = [];
    }
    addStudent(name) {
        let id = Math.random();
        let student = new Student(id, name);
        this._students.push(student);
        for (let i = 0; i < this._students.length; i++) {
            console.log(`Sinh viên thứ ${i + 1}`);
            console.log(`ID: ${this._students[i].id}`);
            console.log(`Tên: ${this._students[i].name}`);
        }
    }
    addCourse(title) {
        let id = Math.random();
        let course = new Course(id, title);
        this._courses.push(course);
        for (let i = 0; i < this._courses.length; i++) {
            console.log(`Khóa học thứ ${i + 1}`);
            console.log(`ID: ${this._courses[i].id}`);
            console.log(`Tên khóa học: ${this._courses[i].title}`);
        }
    }
    enrollStudent(studentId, courseId, scheduleTime) {
        let student = this._students.find(stu => stu.id === studentId);
        if (!student) {
            console.log("Không có Id này trong danh sách students");
            return;
        }
        let course = this._courses.find(cou => cou.id === courseId);
        if (!course) {
            console.log("Không có Id này trong danh sách courses");
            return;
        }
        let enrollMennt = new Enrollment(student, course, scheduleTime);
        this._enrollments.push(enrollMennt);
    }
    listEnrollments() {
        for (let i = 0; i < this._enrollments.length; i++) {
            console.log(`Sinh viên: ${this._enrollments[i].student.name}`);
            console.log(`Khóa học: ${this._enrollments[i].course.title}`);
            console.log(`Thời gian học: ${this._enrollments[i].scheduleTime}`);
            console.log("---------------------------------------");
        }
    }
}
class Main {
    constructor() {
        this.studyManager = new StudyManager;
    }
    boostrap() {
        console.log("=========== Menu chức năng =========== ");
        console.log("1.Thêm sinh viên mới.");
        console.log("2.Thêm khóa học mới.");
        console.log("3.Đăng ký khóa học cho sinh viên.");
        console.log("4.Hiển thị thời khóa biểu học tập.");
        console.log("5.Dừng chương trình.");
        let check = true;
        while (check) {
            let input = String(prompt("Hãy nhập vào từ 1-5 để điều khiển chương trình"));
            switch (input) {
                case "1":
                    //Thêm sinh viên mới.
                    let name = String(prompt("Hãy nhập vào tên của sinh viên"));
                    this.studyManager.addStudent(name);
                    break;
                case "2":
                    //Thêm khóa học mới.
                    let title = String(prompt("Hãy nhập vào tên của khóa học"));
                    this.studyManager.addCourse(title);
                    break;
                case "3":
                    //Đăng ký khóa học cho sinh viên.
                    let studentId = Number(prompt("Hãy nhập vào id của sinh viên:"));
                    let courseId = Number(prompt("Hãy nhập vào id của khóa học:"));
                    let scheduleTime = String(prompt("Hãy nhập vào thời gian học"));
                    this.studyManager.enrollStudent(studentId, courseId, scheduleTime);
                    break;
                case "4":
                    //Hiển thị thời khóa biểu học tập.
                    this.studyManager.listEnrollments();
                    break;
                case "5":
                    //Dừng chương trình.
                    check = false;
                    console.log("Cảm ơn bạn đã sử dụng chương trình!");
                    break;
            }
        }
    }
}
let main = new Main();
main.boostrap();
