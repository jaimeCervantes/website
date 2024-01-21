import { json } from "@remix-run/node";
import { useActionData, useNavigation } from "@remix-run/react";
import { validateFields } from "~/functions/validatedFields";
import { createMessage } from "~/firebase/models/contactMessages.server";
import { useState } from "react";
import ContactForm from "./components/ContactForm";
import { metaFn } from "~/functions/shared/meta";
import { loaderSeoFn } from "~/functions/shared/loaderSeo";

import equipo from "~/assets/imgs/contacto/img-formulario.webp";
import HeaderContact from "./components/HeaderContact";
import ContactModals from "./components/ContactModals";

export const meta = metaFn;
export const loader = loaderSeoFn("contacto");

// Función para validar el nombre completo en tres partes
function validateFullName(name) {
  const nameRegex = /^\s*\S+(\s+\S+){1,}\s*$/;
  return nameRegex.test(name);
}

export async function action({ request }) {
  const form = await request.formData();
  const data = Object.fromEntries(form);
  const errorDescriptions = validateFields(data);

  if (errorDescriptions.length === 0) {
    const messageId = await createMessage(data);
    if (messageId) {
      return json({
        errorDescriptions: [],
        status: "success",
        message: "Mensaje enviado correctamente",
      });
    }
  }

  return json({
    errorDescriptions,
    status: errorDescriptions.length === 0 ? "success" : "error",
    message: "Error al enviar el mensaje",
  });
}

export default function Contacto() {
  const response = useActionData() || {};
  const { status, message } = response;
  const navigation = useNavigation();
  const isSubmitting = navigation.formAction === "/contacto";

  // Estado para manejar la advertencia del nombre
  const [nameWarning, setNameWarning] = useState("");

  // Función para manejar el cambio en el campo de nombre
  const handleNameChange = (e) => {
    const newName = e.target.value;

    if (!validateFullName(newName)) {
      setNameWarning("Ingrese nombre, apellido paterno, materno");
    } else {
      setNameWarning("");
    }
  };

  return (
    <section className="relative pb-20 overflow-hidden pt-30 max-w-7xl mx-auto">
      <HeaderContact />

      <div className="gap-4 flex flex-col md:flex-row w-full px-4">
        {/* Sección de formulario */}
        <div
          id="formulario"
          className="flex items-center justify-center max-md:w-full"
          style={{ width: "100%" }}
        >
          <div className="w-full ">
            <div className="mt-6 overflow-hidden border border-pink-500  rounded-xl ">
              <div className="px-6 py-12 sm:p-6">
                {status === "success" && <p>{message}</p>}

                <ContactForm
                  isSubmitting={isSubmitting}
                  status={status}
                  handleNameChange={handleNameChange}
                  nameWarning={nameWarning}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sección de imagen */}
        <div className="mt-6 overflow-hidden border border-pink-500  rounded-xl pt-6">
          <div
            className="flex items-center justify-center "
            style={{ width: "100%" }}
          >
            <div>
              <h3 className="text-3xl font-semibold text-center text-black-900 pt-6 p-6">
                Con dedicación y creatividad, damos vida a cada proyecto
              </h3>

              <img
                decoding="async"
                loading="lazy"
                src={equipo}
                className="w-50 h-auto"
                alt="Imagen"
              />
            </div>
          </div>
        </div>
      </div>
      <ContactModals status={status} />
    </section>
  );
}
