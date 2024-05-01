import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Employee } from "../models/employee.model.js";
const createEmployee = asyncHandler(async (req, res) => {
  const { name, email, phoneNo, designation, gender, course } = req.body;
  if (
    [name, email, phoneNo, designation, gender, course].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }
  const existEmployee = await Employee.findOne({ email });
  if (existEmployee) {
    throw new ApiError(409, "email already exist");
  }
  const photo = req.file?.path;
  const user = await Employee.create({
    name,
    email,
    phoneNo,
    designation,
    gender,
    course,
    image: photo,
  });
  return res
    .status(201)
    .json(new ApiResponse(200, user, "User registered successfully"));
});

const getEmployee = asyncHandler(async (req, res) => {
  const employees = await Employee.find();
  return res
    .status(200)
    .json(new ApiResponse(200, employees, "employees fetch successfully"));
});
const deleteEmployee = asyncHandler(async (req, res) => {
  const result = await Employee.deleteOne({ _id: req.params.id });
  return res
    .status(200)
    .json(new ApiResponse(200, result, "deleted successful"));
});
const getById = asyncHandler(async (req, res) => {
  const result = await Employee.findOne({ _id: req.params.id });
  return res
    .status(200)
    .json(new ApiResponse(200, result, "data fetch successfully by Id"));
});

const updateEmployee = asyncHandler(async (req, res) => {});
export { createEmployee, getEmployee, deleteEmployee, updateEmployee, getById };
