import { Schema, model } from "mongoose";
import gradeSchema from "./grade-schema.js";

const studentSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    // array of subdocuments
    grades: [gradeSchema],
  },
  {
    // throws the custom validation errors
    strict: "throw",
    // hides version field
    versionKey: false,
  }
);

// TODO: prevent duplicate grade names

// name of model, schema it's based on
export default model("Student", studentSchema);
