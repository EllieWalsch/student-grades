import Student from "./Student.js";

const controller = {
  index() {
    return Student.find();
  },
  findOne(id) {
    return Student.findById(id);
  },
  createStudent(newStudent) {
    return Student.create(newStudent);
  },
};

export default controller;
