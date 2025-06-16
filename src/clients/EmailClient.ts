import emailjs from "@emailjs/browser";
import { ContactForm } from "../domain/ContactForm";

const clientCode = "user_3IabaTk3eBEeonKL6yOxh";
const serviceId = "personalgmail";

export const sendContactUsEmail = (contactForm: ContactForm) => {
  emailjs.send(serviceId, "template_cddp7uj", JSON.parse(JSON.stringify(contactForm)), clientCode).catch((error: any) => {
    console.log(error.text);
  });
}