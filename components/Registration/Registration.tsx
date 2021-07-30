import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

export interface FormData {
  fname: string;
  lname: string;
  email: string;
  password: string;
  cpassword: string;
}

export default function Registration() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<FormData>({
    defaultValues: {
      fname: "Demo",
      lname: "Demo",
      email: "demo@strathmore.edu",
      password: "Pa55word!",
      cpassword: "Pa55word!",
    },
  });

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [serverErrors, setServerErrors] = useState<Array<string>>([]);

  const password = useRef({});
  password.current = watch("password", "");

  return (
    <form
      onSubmit={handleSubmit(async (formData: FormData) => {
        setSubmitting(true);
        setServerErrors([]);

        const response = await fetch("/api/auth", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.fname + formData.lname,
            email: formData.email,
            password: formData.password,
          }),
        });
        const data = await response.json();

        if (data.errors) {
          setServerErrors(data.errors);
        } else {
          console.log("success, redirect to home page");
        }

        setSubmitting(false);
      })}
    >
      {serverErrors && (
        <ul>
          {serverErrors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}

      <div>
        <label htmlFor="fname"> First Name</label>
        <input
          {...register("fname", { required: true })}
          type="text"
          id="fname"
          name="fname"
        />
        {errors.email ? <div>{errors.email.message}</div> : null}
      </div>

      <div>
        <label htmlFor="lname"> Last Name</label>
        <input
          {...register("lname", { required: true })}
          type="text"
          id="lname"
          name="lname"
        />
        {errors.email ? <div>{errors.email.message}</div> : null}
      </div>

      <div>
        <label htmlFor="email"> Email Address</label>
        <input
          {...register("email", { required: true })}
          type="text"
          id="email"
          name="email"
        />
        {errors.email ? <div>{errors.email.message}</div> : null}
      </div>

      <div>
        <label htmlFor="password"> Password</label>
        <input
          {...register("password", {
            required: true,
            minLength: { value: 8, message: "must be 8 char" },
            validate: (value: string) => {
              return (
                [/[A-Z]/, /[a-z]/, /[0-9]/, /[^a-zA-z0-9]/].every((pattern) =>
                  pattern.test(value)
                ) || "must include lower, upper, number and special characters"
              );
            },
          })}
          type="password"
          id="password"
          name="password"
        />
        {errors.password ? <div>{errors.password.message}</div> : null}
      </div>

      <div>
        <label htmlFor="cpassword"> Confirm Password</label>
        <input
          {...register("cpassword", {
            required: true,
            validate: (value: {}) =>
              value === password.current || "The passwords do not match",
          })}
          type="password"
          id="cpassword"
          name="cpassword"
        />
        {errors.cpassword ? <div>{errors.cpassword.message}</div> : null}
      </div>
      <div>
        <button type="submit" disabled={submitting}>
          Register
        </button>
      </div>
    </form>
  );
}
