import { useForm } from "../hook";

export const TodoAdd = ({ onNewTodo}) => {

    const { description, OnInputChange, onResetForm } = useForm({
        description: "",
      });


  const onSubmitForm = (e) => {
    e.preventDefault();
    if(description.length <=1 ) return

    const newTodo ={
        id: new Date().getTime(),
        done: false,
        description: description
    }

    onNewTodo(newTodo);
    onResetForm()
  };

 

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="Que hay que hacer?"
          className="form-control"
          name="description"
          value={description}
          onChange={OnInputChange}
        />

        <button
          type="submit"
          className="btn btn-outline-primary mt-1"
        >
          Agregar
        </button>
      </form>
    </>
  );
};
