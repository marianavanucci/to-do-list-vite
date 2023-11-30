import { useState } from 'react'

const TodoForm = ({ addTodo }) => {

    const [ value, setValue ] = useState("");
    const [ category, setCategory ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); //Cancela o evento se for cancelável, sem parar a propagação do mesmo.
        if(!value || !category) return; //nao deixa o submit ocorrer
        console.log("Enviou!", value, category);//enviar valores mudados
        addTodo(value, category);
        setValue(""); // reseta, muda estado pra vazio
        setCategory("")
    }


  return (
    <div className='todo-form'>
        <h2>Criar Tarefa</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder='Digite aqui sua tarefa' 
            value={value}
            onChange={ (e) => setValue(e.target.value)} />
            <select value={category} onChange={ (e) => setCategory(e.target.value)} >
                <option value="">Selectione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
            <button type='submit'>Criar Tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm
