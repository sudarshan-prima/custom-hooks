import React, { useCallback, useState } from 'react'

import { Input } from '../Input'

export const TodoList = () =>{
  const [todos, setTodos] = useState<{id: number, text: string}[]>([])

  let nextId = 0
 
  const handleAddTodos = useCallback((text: string) => {
    const newTodo = { id: nextId++, text }
    setTodos( todos => [...todos, newTodo]);
  }, [todos])


  return (
    <div>
        <Input type='text' placeholder='Write todo' />
    </div>
  )
}
