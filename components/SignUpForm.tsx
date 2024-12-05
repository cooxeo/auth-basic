"use client";

import { useRouter } from "next/navigation";
import { signupSchema } from "@/utils/formValidations";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type formData = z.infer<typeof signupSchema>;

const submitUserSignupData = async (
  data: formData,
  router: ReturnType<typeof useRouter>
) => {
  try {
    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Success:", result);
      alert("User successfully registered!");

      // Redirect to the login page after successful signup
      router.push("/login"); // Use the router to redirect to login page
    } else {
      const error = await response.json();
      console.error("Error:", error.message);
      alert(`Error: ${error.message}`);
    }
  } catch (error) {
    console.error("Network error:", error);
    alert("Network error. Please try again later.");
  }
};

const SignUpForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(signupSchema),
  });

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => submitUserSignupData(data, router))}
        className="bg-white rounded-md w-[24rem] overflow-x-clip mx-auto text-black p-4 mt-16"
      >
        <h1 className="text-center font-bold text-xl my-4 uppercase">
          Sign Up
        </h1>

        {/* Full Name Input */}
        <div className="flex flex-col">
          <label htmlFor="fullName">Full Name: </label>
          <input
            className="border-2 my-2 focus:outline-none p-1 rounded-md w-full border-black"
            type="text"
            placeholder="Enter your name"
            {...register("fullName")}
          />
          <p className="text-sm font-medium text-red-600">
            {errors.fullName?.message}
          </p>
        </div>

        {/* Email Input */}
        <div className="flex flex-col">
          <label htmlFor="email">Email: </label>
          <input
            className="border-2 my-2 focus:outline-none p-1 rounded-md w-full border-black"
            type="text"
            placeholder="Enter email"
            {...register("email")}
          />
          <p className="text-sm font-medium text-red-600">
            {errors.email?.message}
          </p>
        </div>

        {/* Age Input */}
        <div className="flex flex-col">
          <label htmlFor="age">Age: </label>
          <input
            className="border-2 my-2 focus:outline-none p-1 rounded-md w-full border-black"
            type="text"
            placeholder="Enter your age"
            {...register("age", { valueAsNumber: true })}
          />
          <p className="text-sm font-medium text-red-600">
            {errors.age?.message}
          </p>
        </div>

        {/* Password Input */}
        <div className="flex flex-col">
          <label htmlFor="password">Password: </label>
          <input
            className="border-2 my-2 focus:outline-none p-1 rounded-md w-full border-black"
            type="password"
            placeholder="Enter password"
            {...register("password")}
          />
          <p className="text-sm font-medium text-red-600">
            {errors.password?.message}
          </p>
        </div>

        {/* Confirm Password Input */}
        <div className="flex flex-col">
          <label htmlFor="conformPassword">Confirm Password: </label>
          <input
            className="border-2 my-2 focus:outline-none p-1 rounded-md w-full border-black"
            type="password"
            placeholder="Confirm password"
            {...register("conformPassword")}
          />
          <p className="text-sm font-medium text-red-600">
            {errors.conformPassword?.message}
          </p>
        </div>

        {/* Submit Button */}
        <button className="p-2 bg-blue-500 hover:bg-blue-600 w-full text-white rounded-md mt-2">
          Sign Up
        </button>

        {/* Login Link */}
        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <span
            className="cursor-pointer text-blue-700"
            onClick={() => router.push("/login")}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
