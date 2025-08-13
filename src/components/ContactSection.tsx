import {
  Instagram,
  Link,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";
import { cn, navData } from "@/utils/utils";
import { toast } from "react-toastify";
export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    if (!name || !email || !message) return;
    setIsSubmitting(true);
    toast.loading("Sending your message", {
      hideProgressBar: true,
      theme: "light",
      autoClose: false,
      toastId: "sending progress toast",
      closeOnClick: true,
    });

    emailjs
      .sendForm(
        "service_4yi0ofe",
        "template_uffx8bl",
        e.currentTarget,
        "225YLIw5-Tp99FBX5"
      )
      .then(
        () => {
          toast.dismiss();
          toast.success(
            "Message sent successfully, Will get back to you soon :)",
            {
              draggable: true,
              draggableDirection: "x",
              pauseOnFocusLoss: false,
            }
          );
          (e.target as HTMLFormElement).reset();
        },
        (error: unknown) => {
          console.error("Email send error:", error);
          toast.dismiss();
          toast.error(
            "There seems to be some problem. Kindly check your internet connection or try again",
            {
              draggable: true,
              draggableDirection: "x",
              pauseOnFocusLoss: false,
            }
          );
        }
      )
      .finally(() => setIsSubmitting(false));
  };
  return (
    <section id={navData.Contact} className="py-24 px-4 relative ">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Feel Free to reach out. I am always open to discussing new
          opportunities
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 backdrop-blur-md rounded-2xl">
          <div className="space-y-8 p-8 ">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-left">Email</h4>
                  <a
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex gap-2 items-center"
                    href="mailto:nikhillalpawa@gmail.com"
                    target="_blank"
                  >
                    nikhillalpawa@gmail.com <Link size={15} />
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-left">Phone</h4>
                  <a
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex gap-2 items-center"
                    href="tel:+918107696299"
                    target="_blank"
                  >
                    +91 8107696299 <Link size={15} />
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-left">Location</h4>
                  <a
                    className="text-muted-foreground flex gap-2 items-center"
                    target="_blank"
                  >
                    Bangalore, Karnataka (560103)
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8 ">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/nikhil-lal-pawa-628262134/"
                  target="_blank"
                  className="hover:text-primary transition-colors duration-300"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://www.instagram.com/kurama_nlp?igsh=MWt6dndrOHBvbzR6NA%3D%3D&utm_source=qr"
                  target="_blank"
                  className="hover:text-primary transition-colors duration-300"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounder-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-border focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Nikhil Lal Pawa..."
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-border focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="nikhillalpawa@gmail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-border focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-1.5",
                  isSubmitting ? "opacity-50" : ""
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
