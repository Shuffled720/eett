import { Schema, model, models } from 'mongoose';

const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Todo = models.Todo || model('Todo', todoSchema);

export default Todo;
