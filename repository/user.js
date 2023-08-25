import dbPool from "../utils/db.js";

export const getData = () => {
  const sql = "SELECT * FROM users";

  return dbPool.query(sql);
};

export const createData = (id, name, email, password) => {
  let createdAt = new Date();
  const sql =
    "INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)";
  const value = [id, name, email, password];
  const result = dbPool.query(sql, value);

  return result;
};

export const updateData = (name, email, updatedAt, id) => {
  const sql =
    "UPDATE users SET name = ?, email = ?, updated_at = ? WHERE id = ?";
  const value = [name, email, updatedAt, id];
  const result = dbPool.query(sql, value);

  return result;
};

export const deleteData = (id) => {
  const sql = "DELETE FROM users WHERE id = ?";
  const value = [id];
  const result = dbPool.query(sql, value);

  return result;
};

export const detailData = (id) => {
  const sql =
    "SELECT id, name, email, password, created_at, updated_at FROM users WHERE id = ?";
  const value = [id];
  const result = dbPool.query(sql, value);

  return result;
};
