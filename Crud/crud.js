import { getTodo, createTodo, deleteTodo, updateTodo } from "./services.js";

(async()=>{
    try{
        let data=await getTodo();
        console.log('READ ALL', data.length);

        const newTodo = {
            userId: 1,
            title: 'New Todo',
            completed: false,
          };
        
          data=await createTodo(newTodo);
          console.log('CREATE', data.length);

          data= await deleteTodo(1);
          console.log('DELETE',data.length)
          const upTodo = {
            userId: 1,
            title: 'up Todo',
            completed: true,
          };

          data=await updateTodo(9, upTodo);
          console.log('PUT', data);

    }
    catch(error){
        console.log('error',error);
    }
})();

