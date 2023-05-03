import React, { useState } from "react";

const AddEditEntryPage = ({ entry, isEdit, onSubmit }) => {
  const [formData, setFormData] = useState(entry || { date: "", amount: 0, category_id: "", description: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Дата:
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      </label>
      <label>
        Сумма:
        <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />
      </label>
      <label>
        Категория:
        <select name="category_id" value={formData.category_id} onChange={handleChange} required>
          {/* Здесь добавьте список категорий */}
        </select>
      </label>
      <label>
        Описание:
        <input type="text" name="description" value={formData.description} onChange={handleChange} />
      </label>
      <button type="submit">{isEdit ? "Сохранить" : "Добавить"}</button>
    </form>
  );
};

export default AddEditEntryPage;