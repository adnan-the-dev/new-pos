import { Container, ContainerSucces } from "./styles";
import { useForm, ValidationError } from "@formspree/react";
import ReCAPTCHA from "react-google-recaptcha";
import { useEffect, useState } from "react";
import validator from "validator";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

export function Form() {
  // const [state, handleSubmit] = useForm('xknkpqry')
  // const [validEmail, setValidEmail] = useState(false)
  // const [isHuman, setIsHuman] = useState(false)
  // const [message, setMessage] = useState('')
  // function verifyEmail(email: string) {
  //   if (validator.isEmail(email)) {
  //     setValidEmail(true)
  //   } else {
  //     setValidEmail(false)
  //   }
  // }
  // useEffect(() => {
  //   if (state.succeeded) {
  //     toast.success('Email successfully sent!', {
  //       position: toast.POSITION.BOTTOM_LEFT,
  //       pauseOnFocusLoss: false,
  //       closeOnClick: true,
  //       hideProgressBar: false,
  //       toastId: 'succeeded',
  //     })
  //   }
  // })


  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    // Create a temporary form element for emailjs
    const tempForm = document.createElement("form");
    Object.entries(formData).forEach(([key, value]) => {
      const input = document.createElement(
        key === "message" ? "textarea" : "input"
      );
      input.name = key;
      input.value = value;
      tempForm.appendChild(input);
    });

    try {
      await emailjs.sendForm("service_qevqx4p", "template_s4r3ayr", tempForm, {
        publicKey: "NEsZrN42ZsANldoBo",
      });

      toast.success("Email sent successfully!");
      setFormData({ from_name: "", from_email: "", message: "" });
    } catch (error: any) {
      console.error("FAILED...", error);
      toast.error("Failed to send email. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };
  //   if (isSending) {
  //   return (
  //     <ContainerSucces>
  //       <h3>Thanks for getting in touch!</h3>
  //       <button
  //         onClick={() => {
  //           window.scrollTo({ top: 0, behavior: 'smooth' })
  //         }}
  //       >
  //         Back to the top
  //       </button>
  //       <ToastContainer />
  //     </ContainerSucces>
  //   )
  // }
  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <form onSubmit={sendEmail}>
        <input
          placeholder="Name"
          id="name"
          type="text"
          name="from_name"
          onChange={handleChange}
          value={formData.from_name}
          required
        />
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="from_email"
          value={formData.from_email}
          onChange={handleChange}
          required
        />
        <textarea
          placeholder="Send a message to get started."
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          value={isSending ? "Sending..." : "Send"}
          disabled={isSending}
        >
          Request A Demo
        </button>
      </form>
      {/* <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
      />

      <ToastContainer /> */}
    </Container>
  );
}
