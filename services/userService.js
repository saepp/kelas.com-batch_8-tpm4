import { successResponse, errorResponse } from "../utils/response.js";
import { nanoid } from "nanoid";
import {
  createData,
  deleteData,
  detailData,
  getData,
  updateData,
} from "../repository/user.js";

// const users = [];

export const addUser = async (req, res, next) => {
  let id = nanoid(6);
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;

  const [result] = await createData(id, name, email, password);
  console.log(result);

  if (result.affectedRows) {
    successResponse(res, "berhasil menambahkan user", req.body);
  } else {
    errorResponse(res, "gagal menambahkan user", 500);
  }
};

export const getUser = async (req, res, next) => {
  const [result] = await getData();
  successResponse(res, "success", result);
};

export const updateUser = async (req, res, next) => {
  let id = req.params.id;
  let updatedAt = new Date();
  let name = req.body.name;
  let email = req.body.email;
  const [result] = await updateData(name, email, updatedAt, id);
  const [data] = await detailData(id);

  if (result.affectedRows) {
    successResponse(res, "berhasil update user", data);
  } else {
    errorResponse(res, "user tidak ditemukan");
  }
};

export const deleteUser = async (req, res, next) => {
  let id = req.params.id;
  const [result] = await deleteData(id);

  if (result.affectedRows) {
    successResponse(res, "berhasil hapus user", result);
  } else {
    errorResponse(res, "user tidak ditemukan");
  }
};

export const detailUser = async (req, res, next) => {
  let id = req.params.id;
  const [result] = await detailData(id);

  if (result.length) {
    successResponse(res, "success", result);
  } else {
    errorResponse(res, "Belum ada user");
  }
};
