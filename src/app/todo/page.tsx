"use client"

import axios from "axios"
import { useRouter } from "next/navigation"
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Todo = {
  id: string;
  title: string; 
  content?: string;  
  createdAt: string;
  userId: string; 
}

export default function todo() {
    const router = useRouter();
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");  
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState(true);


    const addTitle = (e: { target: { value: SetStateAction<string>; }; }) => setTitle(e.target.value);
    const addDescription = (e: { target: { value: SetStateAction<string>; }; }) => setDescription(e.target.value);

    const addTodo = async () => {
      try {
        const { data } = await axios.post("/api/users/todos", {
          title,
          content: description,
        });
        data.title = title;
        data.content = description;
        setTodos(Array.isArray(todos) ? [...todos, data] : [data]);        
        setTitle("");  
        setDescription("");   
      } catch (error: any) {
        console.log(error.message);    
      } 
    };


    useEffect(() => {  
      const fetchInitialTodos = async () => {
        try {
          const response = await axios.get("/api/users/todos");
          const { data } = response.data; // Assuming the todos are nested in the 'data' field
  
          console.log("Fetched initial todos:", data);
  
          setTodos(data);
          setLoading(false);
        } catch (error) {
          console.log("Error fetching todos:", error);
        }
      };
  
      fetchInitialTodos();
    }, []);

    if (loading) return <p>Loading...</p>;


    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            router.push('/login')
        } catch (error:any) {
            console.log(error.message);
        }
    }
    
    const handleUpdateTodo = async (id: string, title: string, content: string) => {
      // Get the todo that needs to be updated
      const todoToUpdate = todos.find((todo) => todo.id === id);
  
      if (!todoToUpdate) {
        console.error("Todo not found for update");
        return;
      }
  
      try {
        // Send a PUT request to update the todo
        const response = await axios.put('/api/users/todos', {
          newTitle: title,
          newContent: content,
          todoId: id,
        });

        // Update the local todos state
        const updatedTodos = todos.map(todo => {
          if(todo.id === id) {
            return {
              ...todo, 
              title,
              content
            }  
          }
          return todo; 
        });
  
        setTodos(updatedTodos);
        
        // Handle the response as needed
        console.log('Todo updated successfully:', response.data);
      } catch (error) {
        console.error('Error updating todo:', error);
      }
    };
  
    const handleDeleteTodo = async (todoId: string) => {
      // Get the todo that needs to be updated
      const todoToDelete = todos.find((todo) => todo.id === todoId);
    
      if (!todoToDelete) {
        console.error('Todo not found for update');
        return;
      }
    
      try {
        // Send a PUT request to update the todo
        const response = await axios.delete('/api/users/todos', {
          data: {
            todoId
          } 
        });
  
        console.log('Todo deleted successfully:', response.data);
    
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));

      } catch (error) {
        console.error('Error updating todo:', error);
      }
    };

    return (
        <div className="flex flex-col items-center justify-center my-10">
            <h1 className="mb-5 text-3xl">Todo App</h1>
            <button 
            className="absolute top-2 right-2 px-4 py-2 text-sm font-bold text-white bg-purple-500 rounded"
            onClick={logout}
            >
            Logout
            </button>
            <div className="w-72 flex flex-col items-center justify-center">
                <div className="relative h-11 w-full min-w-[200px] mb-5">
                    <input
                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    name="title"
                    value={title}
                    onChange={addTitle}
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Title
                    </label>
                </div>
                <div className="relative h-11 w-full min-w-[200px] mb-5">
                    <input
                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    name="description"
                    value={description}
                    onChange={addDescription}
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Description
                    </label>
                </div>
                <button
                className="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-light="true"
                onClick={addTodo}
                >
                Add Todo
                </button>

                {Array.isArray(todos) &&
                todos.map((todo) => (
                  <TodoItem
                    todos={todos}
                    setTodos={setTodos}
                    key={todo.id}
                    todo={todo}
                    onUpdate={(updatedTitle, updatedContent) => handleUpdateTodo(todo.id, updatedTitle, updatedContent)}
                    onDelete={() => handleDeleteTodo(todo.id)}
                  />
                ))}
            </div>
        </div>
    )
}

interface TodoItemProps {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>
  todo: Todo; 
  onDelete: () => void;
  onUpdate: (id: string, title: string, content: string) => void;
}

const TodoItem = ({
  todos, 
  setTodos,  
  todo,
  onDelete,
  onUpdate 
}: TodoItemProps ) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [content, setContent] = useState(todo.content);

  const onEdit = async () => {
    if (isEditing) {
      setIsEditing(false);  
    } else {
       setIsEditing(true);
    }  
  }

  const onTitleChange = (e: { target: { value: any } }) => {
    setTitle(e.target.value)
  };
  

  const onDescriptionChange = (e: { target: { value: any } }) => {
    setContent(e.target.value) 
  }

  const handleUpdate = () => {
    onUpdate(title, content ?? '', todo.id)
    setIsEditing(false);
  }

  return (
    <div className="border p-4 mb-4 rounded-lg shadow-lg mt-5 flex flex-col items-center">
      {isEditing ? (
        <>
          <input 
            type="text"
            className="text-black"
            value={title}
            onChange={onTitleChange}
          />
          <input 
            type="text"
            className="mt-2 text-black"
            value={content}
            onChange={onDescriptionChange} 
          />
          <button
          className="px-4 py-2 bg-blue-500 text-white rounded mt-2" 
          onClick={handleUpdate}>Update</button>    
        </>
      ) : (
        <>  
           {/* Todo display */}
          <p className="text-xl font-bold mb-2 mt-5 text-center">{todo.title}</p>  
          {todo.content ? (
            <p>{todo.content}</p>
          ) : (
            <p className="italic text-gray-500">No description provided.</p>
          )}
            </>
          )}
      <div className="mt-4 flex justify-center">
        <button className="px-4 py-2 bg-blue-500 text-white rounded mr-2" onClick={onEdit}>
          {isEditing ? 'Cancel' : 'Edit'}
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>  
    </div>
  );
};
