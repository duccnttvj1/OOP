class Student{
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
}

class Course{
    private _id: number;
    private _title: string;

    constructor(id: number, title: string){
        this._id = id;
        this._title = title;
    }

    get id(){
        return this._id;
    }

    get title(){
        return this._title;
    }
}

class Enrollment{ // thời khóa biểu
    private _student: Student;
    private _course: Course;
    private _scheduleTime: string;

    constructor(student: Student, course: Course, scheduleTime: string){
        this._course = course;
        this._student = student;
        this._scheduleTime = scheduleTime;
    }

    get student(){
        return this._student;
    }

    get course(){
        return this._course;
    }

    get scheduleTime(){
        return this._scheduleTime;
    }
}

class StudyManager{
    private _students: Student[];
    private _courses: Course[];
    private _enrollments: Enrollment[];

    constructor(){
        this._courses = [];
        this._students = [];
        this._enrollments = []
    }

    addStudent(name: string): void{
        let id = Math.random();
        let student: Student = new Student(id,name);
        this._students.push(student);
        for(let i: number =0 ;i<this._students.length; i++){
            console.log(`Sinh viên thứ ${i+1}`);
            console.log(`ID: ${this._students[i].id}`);
            console.log(`Tên: ${this._students[i].name}`);
        }
    }

    addCourse(title: string): void {
        let id = Math.random();
        let course: Course = new Course(id,title);
        this._courses.push(course);
        for(let i: number =0 ;i<this._courses.length; i++){
            console.log(`Khóa học thứ ${i+1}`);
            console.log(`ID: ${this._courses[i].id}`);
            console.log(`Tên khóa học: ${this._courses[i].title}`);
        }
    }
    enrollStudent(studentId: number, courseId: number, scheduleTime: string): void {
        let student = this._students.find(stu=>stu.id === studentId);
        if(!student){
            console.log("Không có Id này trong danh sách students");
            return;
        }
        let course = this._courses.find(cou=>cou.id === courseId);
        if(!course){
            console.log("Không có Id này trong danh sách courses");
            return;
        }
        let enrollMennt: Enrollment = new Enrollment(student,course,scheduleTime);
        this._enrollments.push(enrollMennt);
    }
    listEnrollments(): void {
        for(let i: number = 0; i< this._enrollments.length; i++){
            console.log(`Sinh viên: ${this._enrollments[i].student.name}`);
            console.log(`Khóa học: ${this._enrollments[i].course.title}`);
            console.log(`Thời gian học: ${this._enrollments[i].scheduleTime}`);
            console.log("---------------------------------------");
        }
    }
}

class Main{
    public studyManager: StudyManager;

    constructor(){
        this.studyManager = new StudyManager;
    }

    boostrap(): void{
        console.log("=========== Menu chức năng =========== ");
        console.log("1.Thêm sinh viên mới.");
        console.log("2.Thêm khóa học mới.");
        console.log("3.Đăng ký khóa học cho sinh viên.");
        console.log("4.Hiển thị thời khóa biểu học tập.");
        console.log("5.Dừng chương trình.");

        let check: boolean = true;
        while(check){
            let input: string = String(prompt("Hãy nhập vào từ 1-5 để điều khiển chương trình"));

            switch (input){
                case "1":
                    //Thêm sinh viên mới.
                    let name: string = String(prompt("Hãy nhập vào tên của sinh viên"));
                    this.studyManager.addStudent(name);
                    break;
                case "2":
                    //Thêm khóa học mới.
                    let title: string = String(prompt("Hãy nhập vào tên của khóa học"));
                    this.studyManager.addCourse(title);
                    break;
                case "3":
                    //Đăng ký khóa học cho sinh viên.
                    let studentId: number = Number(prompt("Hãy nhập vào id của sinh viên:"));
                    let courseId: number = Number(prompt("Hãy nhập vào id của khóa học:"));
                    let scheduleTime: string = String(prompt("Hãy nhập vào thời gian học"));
                    this.studyManager.enrollStudent(studentId,courseId,scheduleTime);
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

let main: Main = new Main();
main.boostrap();