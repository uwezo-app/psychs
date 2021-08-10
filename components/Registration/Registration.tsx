import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import "./Registration.css";

/*
---------------------
CHANGE
--------------------
*/
interface FormData {
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
  Cpassword: string;
}

export default function Registration() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<FormData>({
    defaultValues: {
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
      Cpassword: "",
    },
  });

  const [submitting, setSubmitting] = useState(false);
  const [serverErrors, setServerErrors] = useState<Array<string>>([]);

  const password = useRef({});
  password.current = watch("Password", "");

  /*
  ------------------------------
  CHANGE
  ------------------------------
  */
  const onSubmit = async ({ Cpassword, ...rest }: FormData) => {
    if (!submitting) {
      setSubmitting(true);
      setServerErrors([]);
      // uwezoapp-321219.el.r.appspot.com
      const response = await fetch(
        `https://uwezoapp-321219.el.r.appspot.com/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...rest }),
        }
      );
      const data = await response.json();

      if (data.errors) {
        setServerErrors(data.errors);
      } else {
        console.log(data);
      }
    }

    setSubmitting(false);
  };

  return (
    /*
    ------------------------------
    CHANGE
    ------------------------------
    */
    <form onSubmit={handleSubmit(onSubmit)}>
      {serverErrors && (
        <ul>
          {serverErrors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
      )}

      <div>
        <h1>Sign Up</h1>

        <div>
          <label htmlFor="FirstName"> First Name</label>
          <input {...register("FirstName", { required: true })} type="text" />
          {errors.FirstName ? <div>{errors.FirstName.message}</div> : null}
        </div>

        <div>
          <label htmlFor="LastName"> Last Name</label>
          <input {...register("LastName", { required: true })} type="text" />
          {errors.LastName ? <div>{errors.LastName.message}</div> : null}
        </div>

        <div>
          <label htmlFor="Email">Email Address</label>
          <input
            {...register("Email", { required: true })}
            type="email"
            id="Email"
          />
          {errors.Email ? <div>{errors.Email.message}</div> : null}
        </div>

        <div>
          <label htmlFor="Password">Password</label>
          <input
            {...register("Password", {
              required: true,
              minLength: { value: 8, message: "must be 8 char" },
              validate: (value: string) => {
                return (
                  [/[A-Z]/, /[a-z]/, /[0-9]/, /[^a-zA-z0-9]/].every((pattern) =>
                    pattern.test(value)
                  ) ||
                  "must include lower, upper, number and special characters"
                );
              },
            })}
            type="password"
            id="Password"
            name="Password"
          />
          {errors.Password ? <div>{errors.Password.message}</div> : null}
        </div>

        <div>
          <label htmlFor="Cpassword"> Confirm Password</label>
          <input
            {...register("Cpassword", {
              required: true,
              validate: (value: {}) =>
                value === password.current || "The passwords do not match",
            })}
            type="password"
            id="Cpassword"
            name="Cpassword"
          />
          {errors.Cpassword ? <div>{errors.Cpassword.message}</div> : null}
        </div>

        <button type="submit" disabled={submitting}>
          Register
        </button>
      </div>
    </form>
  );
}
