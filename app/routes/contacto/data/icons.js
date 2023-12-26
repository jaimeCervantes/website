import phone from "~/assets/imgs/contacto/icons8-phone.webp";
import email from "~/assets/imgs/contacto/icon-orange-email.svg";
import iconWhatsapp from "~/assets/imgs/contacto/whatsapp.svg";
import hour from "~/assets/imgs/contacto/icons8-hour.webp";

export const iconsContact = [
  {
    icon: phone,
    text: "278-688-3881",
    altImage: "phone",
    href: "tel:2786883881",
  },
  {
    icon: email,
    text: "contacto@pensemosweb.com",
    altImage: "email",
    href: "mailto:contacto@pensemosweb.com",
  },
  {
    icon: iconWhatsapp,
    text: "278-109-2116",
    altImage: "whtsapp",
    href: "https://api.whatsapp.com/send?phone=+522781092116&text=Hola,%20estoy%20interesad@%20en%20adquirir",
  },
  {
    icon: hour,
    text: "Lunes a Viernes de 9:00 AM a 5:00 PM",
    altImage: "hour",
  },
];
