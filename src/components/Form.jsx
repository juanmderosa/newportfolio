import { Button } from "../components/Button";
import styles from "../styles/form.module.scss";
import check from "../assets/icons/verificado.png";
import { useSendForm } from "../hooks/useSendForm";
import { Loading } from "./loader";

export const Form = () => {
  const {
    isSended,
    isLoading,
    register,
    handleOnSubmit,
    handleSubmit,
    formState: { errors },
  } = useSendForm();

  return (
    <form
      onSubmit={handleSubmit(handleOnSubmit)}
      className={styles.formContainer}>
      <h3 className={styles.formTitle}>Envíame un mensaje</h3>
      <div className={styles.inputContainer}>
        <input
          placeholder="Nombre"
          name="nombre"
          type="text"
          {...register("nombre", {
            required: {
              value: true,
              message: "Tu nombre es requerido",
            },
          })}
        />
        {errors.nombre && (
          <p className={styles.error}>{errors.nombre.message}</p>
        )}
      </div>
      <div className={styles.inputContainer}>
        <input
          placeholder="E-mail"
          name="correo"
          type="text"
          {...register("correo", {
            required: {
              value: true,
              message: "El e-mail es requerido",
            },
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Tu e-mail cuenta con un formato incorreto",
            },
          })}
        />
        {errors.correo && (
          <p className={styles.error}>{errors.correo.message}</p>
        )}
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Teléfono"
          name="telefono"
          {...register("telefono")}
        />
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Empresa"
          name="empresa"
          {...register("empresa")}
        />
      </div>
      <div className={styles.inputContainer}>
        <textarea
          placeholder="Dejanos tu mensaje"
          name="mensaje"
          {...register("mensaje", {
            required: {
              value: true,
              message: "Debes dejar un mensaje",
            },
            minLength: {
              value: 2,
              message: "Debes dejar un mensaje",
            },
          })}></textarea>
        {errors.mensaje && (
          <p className={styles.error}>{errors.mensaje.message}</p>
        )}
      </div>
      <div className={styles.buttonContainer}>
        {isLoading && !isSended && <Loading />}
        {!isLoading && !isSended && <Button text="Enviar" />}
        {!isLoading && isSended && (
          <div className={styles.isSendedContainer}>
            <img
              src={check}
              alt="check icon"
              className={styles.isSendedIcon}
            />
            <h3 className={styles.isSended}>¡Tu mensaje ha sido enviado!</h3>
          </div>
        )}
      </div>
    </form>
  );
};
