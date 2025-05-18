import style from './Form.module.css';

const Form = ({ onSubmit }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const searchValue = form.elements.search.value.trim();
    if (!searchValue) return;

    onSubmit(searchValue);

    form.reset();
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input className={style.input} name="search" required autoFocus />
      <button className={style.button} type="submit">
        Search
      </button>
    </form>
  );
};

export default Form;
