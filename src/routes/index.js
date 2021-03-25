import { Router } from "express";
import asyncHandler from "../middlewares/asyncHandler";
import TodoController from "../controller";

const router = new Router();

router
  .get("/", asyncHandler(TodoController.getAllTodo))
  .get("/:_id", asyncHandler(TodoController.getOneTodo))
  .post("/", asyncHandler(TodoController.addTodo))
  .put("/:_id", asyncHandler(TodoController.updateTodo))
  .delete("/:_id", asyncHandler(TodoController.deleteTodo));

export default router;
