import { useRef, useState } from "react";

interface FormData {
   firstName: string;
   lastName: string;
   email: string;
   mobile: string;
   title: string;
   isTrue: boolean;
   accepted: boolean;
   date: string;
   area: string;
}

type FormErrors = Record<keyof FormData, string>;

const initialForm: FormData = {
   firstName: "",
   lastName: "",
   email: "",
   mobile: "",
   title: "",
   isTrue: false,
   accepted: false,
   date: "",
   area: "",
};

const initialErrors: FormErrors = {
   firstName: "",
   lastName: "",
   email: "",
   mobile: "",
   title: "",
   isTrue: "",
   accepted: "",
   date: "",
   area: "",
};

export default function Demo() {
   const formRef = useRef<HTMLFormElement>(null);
   const [form, setForm] = useState(initialForm);
   const [errors, setErrors] = useState(initialErrors);

   const validateInput = (
      element: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
      successClass: string,
      errorClass: string,
   ) => {
      element.classList.remove(successClass, errorClass);

      if (element.checkValidity()) {
         element.classList.add(successClass);
      } else {
         element.classList.add(errorClass);
      }
   };

   const handleInputChange = (
      e: React.ChangeEvent<
         HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
   ) => {
      const target = e.target;

      validateInput(target, "correct", "error");

      let value: string | boolean;

      if (target.type === "checkbox") {
         value = (target as HTMLInputElement).checked;
      } else if (target.type === "radio") {
         value = target.value === "true";
      } else {
         value = target.value;
      }

      setForm((prev) => ({
         ...prev,
         [target.name]: value,
      }));
   };

   const validateForm = () => {
      const formElement = formRef.current;

      if (!formElement) return false;

      const newErrors = { ...initialErrors };

      Array.from(formElement.elements).forEach((element) => {
         if (
            element instanceof HTMLInputElement ||
            element instanceof HTMLTextAreaElement ||
            element instanceof HTMLSelectElement
         ) {
            validateInput(element, "correctFinal", "errorFinal");

            const name = element.name as keyof FormData;

            if (name) {
               newErrors[name] = element.validationMessage;
            }
         }
      });

      setErrors(newErrors);

      return formElement.checkValidity();
   };

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!validateForm()) return;

      alert(JSON.stringify(form, null, 2));
   };

   return (
      <div className="form">
         <h1>React Form</h1>

         <form ref={formRef} onSubmit={handleSubmit} noValidate>
            <input
               type="text"
               placeholder="First name"
               name="firstName"
               value={form.firstName}
               onChange={handleInputChange}
               minLength={3}
               maxLength={10}
               required
            />
            <p>{errors.firstName}</p>

            <input
               type="text"
               placeholder="Last name"
               name="lastName"
               value={form.lastName}
               onChange={handleInputChange}
               maxLength={10}
               required
            />
            <p>{errors.lastName}</p>

            <input
               type="email"
               placeholder="Email"
               name="email"
               value={form.email}
               onChange={handleInputChange}
               required
            />
            <p>{errors.email}</p>

            <input
               type="tel"
               placeholder="Mobile"
               name="mobile"
               value={form.mobile}
               onChange={handleInputChange}
               pattern="[0-9]{9}"
               required
            />
            <p>{errors.mobile}</p>

            <input
               type="date"
               name="date"
               value={form.date}
               onChange={handleInputChange}
               required
            />
            <p>{errors.date}</p>

            <textarea
               name="area"
               placeholder="Description..."
               value={form.area}
               onChange={handleInputChange}
               rows={4}
               required
            />
            <p>{errors.area}</p>

            <select
               name="title"
               value={form.title}
               onChange={handleInputChange}
               required
            >
               <option value="">Select...</option>
               <option value="Mr">Mr</option>
               <option value="Mrs">Mrs</option>
               <option value="Miss">Miss</option>
               <option value="Dr">Dr</option>
            </select>
            <p>{errors.title}</p>

            <fieldset>
               <legend>Radio</legend>

               <label>
                  <input
                     type="radio"
                     name="isTrue"
                     value="true"
                     checked={form.isTrue === true}
                     onChange={handleInputChange}
                  />
                  True
               </label>

               <label>
                  <input
                     type="radio"
                     name="isTrue"
                     value="false"
                     checked={form.isTrue === false}
                     onChange={handleInputChange}
                  />
                  False
               </label>
            </fieldset>

            <fieldset>
               <legend>Checkbox</legend>

               <label>
                  <input
                     type="checkbox"
                     name="accepted"
                     checked={form.accepted}
                     onChange={handleInputChange}
                     required
                  />
                  I accept the terms
               </label>

               <p>{errors.accepted}</p>
            </fieldset>

            <button
               type="submit"
               className="btn btn-sm btn-secondary self-center"
            >
               Submit
            </button>
         </form>
      </div>
   );
}
