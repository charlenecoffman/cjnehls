import emailjs from "@emailjs/browser";
import { ContactForm } from "../domain/ContactForm";

const clientCode = "user_3IabaTk3eBEeonKL6yOxh";
const serviceId = "service_9e28r1j";

export const sendContactUsEmail = (contactForm: ContactForm) => {
  emailjs.send(serviceId, "template_cddp7uj", JSON.parse(JSON.stringify(contactForm)), clientCode).catch((error: any) => {
    console.log(error.text);
  });
}

export const sendSneakPeekEmail = (toEmail: string) => {
  var params = {
    to_email: toEmail
  };

  emailjs.send(serviceId, "template_p00cu98", params, clientCode).catch((error: any) => {
    console.log(error.text);
  });
}