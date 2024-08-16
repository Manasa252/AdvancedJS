const url=`https://jsonplaceholder.typicode.com/todos/`;

export const getTodo=async()=>{
    const response=await fetch(url);
    const data =await response.json();
    return data;
};

export const createTodo=async(todo)=>{
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
          'Content-type': 'application/json',
        },
      });
      const data=await response.json();
      console.log(data.length);
      return data;
    };

export const deleteTodo=async id=>{
  const response=await fetch(`${url}${id}`,{
    method:'DELETE',
  });
  return getTodo();
}

export const updateTodo=async (id, todo)=>{
  const response=await fetch(`${url}${id}`,{
    method:'PUT',
    body: JSON.stringify(todo),
    headers: {
      'Content-type': 'application/json',
    },
  });
  console.log(response.ok);
}