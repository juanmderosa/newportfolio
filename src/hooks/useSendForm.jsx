import { useState } from "react";
import { useForm } from "react-hook-form";

export const useSendForm = () => {
  const [isSended, setIsSended] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleOnSubmit = (data) => {
    fetch("https://formsubmit.co/ajax/e74f4160446c423aa38adcd68d983969", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        nombre: data.nombre,
        email: data.correo,
        telefono: data.telefono,
        empresa: data.empresa,
        mensaje: data.mensaje,
      }),
    })
      .then((response) => {
        if (response.ok) {
          setIsSended(true);
          reset();
          setTimeout(() => {
            setIsSended(false);
          }, 3000);
        }
      })
      .catch((error) => console.log(error));
  };

  return {
    isSended,
    register,
    handleOnSubmit,
    handleSubmit,
    formState: { errors },
  };
};
