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
