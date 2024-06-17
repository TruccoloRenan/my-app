
import { revalidatePath } from "next/cache"
import api from '../services/api';
import { format, parseISO } from 'date-fns';

export async function createNewBoard(formData: FormData) {
  const name = formData.get("boardname") as string
  let userId: any;

  try{
    userId = localStorage.getItem("UserId")
  }catch (error){
    console.log(error)
  }

const existingBoard = await api.get(`/kanban-board/${userId}`)

  if (existingBoard.data !== "" ) {
    console.log("entrou")
    await api.put(`/kanban-board/${existingBoard.data.id}`, {name})

  } else {

    userId = parseInt(userId)
    await api.post("/kanban-board", { name, userId})
  }

  revalidatePath("/");
}

export async function createTask(formData: FormData) {
  const name = formData.get("task") as string
  const boardId = formData.get("boardId") as string

  console.log(boardId)
  if (!name.trim()) {
    return
  }
  const title = name;
  const content = "teste"
  const created_by = "renan";
  const atribuited_to = "renan"
  var board = {connect: {id: 1} }

  await api.post("/tasks", {title, content, created_by, atribuited_to, board})

  revalidatePath("/");
}

export async function editTask(formData: FormData) {
  const newTask = formData.get("newTask") as string;
  const taskId = formData.get("taskId") as string;

  if (!newTask.trim()) {
    return;
  }

  const title = newTask;
  const content = "teste"
  const created_by = "renan";
  const atribuited_to = "renan"
  const status = "DOING";
  const now: Date = new Date();
  var updatedAt = parseISO(format(now, 'yyyy-MM-dd HH:mm:ss'));

  await api.put(`/tasks/${taskId}`, {title, content, created_by, atribuited_to, status, updatedAt})
 

  revalidatePath("/")
}

export async function deleteTask(formData: FormData) {
  const taskId = formData.get("taskId") as string;


await api.delete(`/tasks/${parseInt(taskId)}`)

  revalidatePath("/");
}

