import { useState } from "react";
import validation from "./validations";

import styles from "./form.module.css";

const Form = ({login}) => {
  const [userData, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handlerFormsChange = (event) => {
    setErrors(validation({...userData,[event.target.name]: event.target.value }));
    setUser({...userData,[event.target.name]: event.target.value,});
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    login(userData)
  }



  return (
    <div className={styles.contenedor}>
      <form>
        <label htmlFor="email">Email</label>
        <br />
        <input
          key="email"
          onChange={handlerFormsChange}
          value={userData.email}
          type="text"
          name="email"
          placeholder="email@email.com"
        />
        {errors.e1 ? (<p>{errors.e1}</p>)
        : errors.e2 ? (<p>{errors.e2}</p>) 
        : (<p>{errors.e3}</p>)}
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          key="password"
          value={userData.password}
          type="password"
          name="password"
          onChange={handlerFormsChange}
          placeholder="password"
        />
        {errors.p1 ? <p>{errors.p1}</p> : (<p>{errors.p2}</p>)}
        <br />

          <button onClick={handleSubmit} type="submit">LogIn</button>

      </form>
    </div>
  );
};

export default Form;
