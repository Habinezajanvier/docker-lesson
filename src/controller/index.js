import db from "../models";

const { Todo } = db;

export default {
  /**
   * Getting all todo in the database
   *
   * @getAllTodo
   *
   */
  getAllTodo: async (req, res) => {
    const todos = await Todo.find();
    if (!todos || todos.length === 0)
      return res.status(404).json({ message: "No todo found" });
    return res.status(200).json(todos);
  },

  /**
   * Getting one todo with id
   *
   */
  getOneTodo: async (req, res) => {
    const { _id } = req.params;
    const todo = await Todo.findOne({ _id });
    if (!todo) return res.status(404).json({ message: "No todo found" });
    return res.status(200).json(todo);
  },

  /**
   * Creating a todo
   *
   * @addTodo
   *
   */
  addTodo: async (req, res) => {
    const todo = new Todo({ ...req.body });
    const savedTodo = await todo.save();
    return res
      .status(201)
      .json({ message: "Todo created successfully", data: savedTodo });
  },

  /**
   * Editing a todo
   *
   * @updateTodo
   *
   */
  updateTodo: async (req, res) => {
    const { _id } = req.params;
    const todo = await Todo.findById({ _id });
    todo.set({ ...req.body, modifiedAt: new Date() });
    const result = await todo.save();
    return res
      .status(200)
      .json({ message: "Todo uppdated successfuly", data: result });
  },

  /**
   * Deleting a todo
   *
   * @deleteTodo
   *
   */
  deleteTodo: async (req, res) => {
    const { _id } = req.params;
    const deleteTodo = await Todo.findByIdAndDelete({ _id });
    if (!deleteTodo)
      return res.status(404).json({ message: "No todo found with that id" });
    return res
      .status(200)
      .json({ message: "Todo deleted successfully", data: deleteTodo });
  },
};
