// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";

// // Define schema and types outside the component to improve readability and reusability
// const userFormSchema = z
//   .object({
//     firstName: z
//       .string()
//       .min(2, "First name must be at least 2 characters")
//       .max(20, "First name must not exceed 20 characters"),
//     lastName: z
//       .string()
//       .min(2, "Last name must be at least 2 characters")
//       .max(20, "Last name must not exceed 20 characters"),
//     email: z.string().email("Please enter a valid email address"),
//     age: z
//       .number()
//       .min(18, "You must be at least 18 years old")
//       .max(80, "Age must not exceed 80 years"),
//     password: z
//       .string()
//       .min(5, "Password must be at least 5 characters")
//       .max(30, "Password must not exceed 30 characters"),
//     confirmPassword: z
//       .string()
//       .min(5, "Password must be at least 5 characters")
//       .max(30, "Password must not exceed 30 characters"),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     message: "Passwords do not match",
//     path: ["confirmPassword"],
//   });

// type FormData = z.infer<typeof userFormSchema>;

// const ReactForm = () => {
// const {
//   register,
//   handleSubmit,
//   formState: { errors },
// } = useForm<FormData>({
//   resolver: zodResolver(userFormSchema),
// });

//   const submitUserData = (data: FormData) => {
//     console.log(data);
//   };

//   return (
//     <div className="mt-24 flex justify-center">
//       <form
//         onSubmit={handleSubmit(submitUserData)}
//         className="flex flex-col bg-white text-black p-6 rounded-md max-w-md w-full font-medium shadow-md"
//       >
//         {/** First Name */}
//         <label htmlFor="firstName" className="mb-1 font-semibold">
//           First Name:
//         </label>
//         <input
//           id="firstName"
//           className="bg-gray-200 text-black p-2 rounded-md mb-2"
//           type="text"
//           {...register("firstName")}
//           placeholder="Enter your firstname"
//         />
//         {errors.firstName && (
//           <p className="text-red-500 text-sm">{errors.firstName.message}</p>
//         )}

//         {/** Last Name */}
//         <label htmlFor="lastName" className="mb-1 font-semibold">
//           Last Name:
//         </label>
//         <input
//           id="lastName"
//           className="bg-gray-200 text-black p-2 rounded-md mb-2"
//           type="text"
//           {...register("lastName")}
//           placeholder="Enter your lastname"
//         />
//         {errors.lastName && (
//           <p className="text-red-500 text-sm">{errors.lastName.message}</p>
//         )}

//         {/** Email */}
//         <label htmlFor="email" className="mb-1 font-semibold">
//           Email:
//         </label>
//         <input
//           id="email"
//           className="bg-gray-200 text-black p-2 rounded-md mb-2"
//           type="email"
//           {...register("email")}
//           placeholder="Enter your email"
//         />
//         {errors.email && (
//           <p className="text-red-500 text-sm">{errors.email.message}</p>
//         )}

//         {/** Age */}
//         <label htmlFor="age" className="mb-1 font-semibold">
//           Age:
//         </label>
//         <input
//           id="age"
//           className="bg-gray-200 text-black p-2 rounded-md mb-2"
//           type="number"
//           {...register("age", { valueAsNumber: true })}
//           placeholder="Enter your age"
//         />
//         {errors.age && (
//           <p className="text-red-500 text-sm">{errors.age.message}</p>
//         )}

//         {/** Password */}
//         <label htmlFor="password" className="mb-1 font-semibold">
//           Password:
//         </label>
//         <input
//           id="password"
//           className="bg-gray-200 text-black p-2 rounded-md mb-2"
//           type="password"
//           {...register("password")}
//           placeholder="Enter password"
//         />
//         {errors.password && (
//           <p className="text-red-500 text-sm">{errors.password.message}</p>
//         )}

//         {/** Confirm Password */}
//         <label htmlFor="confirmPassword" className="mb-1 font-semibold">
//           Confirm Password:
//         </label>
//         <input
//           id="confirmPassword"
//           className="bg-gray-200 text-black p-2 rounded-md mb-4"
//           type="password"
//           {...register("confirmPassword")}
//           placeholder="Enter password"
//         />
//         {errors.confirmPassword && (
//           <p className="text-red-500 text-sm">
//             {errors.confirmPassword.message}
//           </p>
//         )}

//         {/** Submit Button */}
//         <button
//           type="submit"
//           className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-all"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ReactForm;

// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";

// const userFormSchema = z
//   .object({
    // firstName: z
    //   .string()
    //   .min(2, "Atleast 2 char must be entered")
    //   .max(30, "char shd be no more than 30"),
    // lastName: z
    //   .string()
    //   .min(2, "Atleast 2 char must be entered")
    //   .max(30, "char shd be no more than 30"),
    // email: z.string().email("Please enter a valid email"),
    // age: z
    //   .number()
    //   .min(18, "Age should be atleast 18 yrs")
    //   .max(80, "Age should be no more than 80 yrs"),
    // password: z
    //   .string()
    //   .min(4, "Password shuold be at least 4 char")
    //   .max(20, "Password shuold be no more than 20 char"),
    // conformPassword: z
    //   .string()
    //   .min(4, "Password shuold be at least 4 char")
    //   .max(20, "Password shuold be no more than 20 char"),
//   })
//   .refine((data) => data.password === data.conformPassword, {
//     message: "Password do not match",
//     path: ["conformPassword"],
//   });  

// type formData = z.infer<typeof userFormSchema>;

// const submitUserData = async (data: formData) => {
//   try {
//     const response = await fetch("/api/users", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });

//     if (response.ok) {
//       const result = await response.json();
//       console.log("Success:", result);
//       alert("User successfully registered!");
//     } else {
//       const error = await response.json();
//       console.error("Error:", error.message);
//       alert(`Error: ${error.message}`);
//     }
//   } catch (error) {
//     console.error("Network error:", error);
//     alert("Network error. Please try again later.");
//   }
// };

// const ReactForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<formData>({
//     resolver: zodResolver(userFormSchema),
//   });

//   return (
//     <div className="bg-white text-black mx-auto max-w-md mt-24 p-6 rounded-md">
//       <form onSubmit={handleSubmit(submitUserData)}>
//         <div className="flex flex-col py-1">
//           <label htmlFor="firstName">First name:</label>
//           <input
//             className="border-black border-2 rounded-md focus:outline-none p-1"
//             type="text"
//             placeholder="First name"
//             {...register("firstName")}
//           />
//           <p className="text-red-500 text-sm font-medium">
//             {errors.firstName?.message}
//           </p>
//         </div>
//         <div className="flex flex-col py-1">
//           <label htmlFor="lastName">Last name:</label>
//           <input
//             className="border-black border-2 rounded-md focus:outline-none p-1"
//             type="text"
//             placeholder="Last name"
//             {...register("lastName")}
//           />
//           <p className="text-red-500 text-sm font-medium">
//             {errors.lastName?.message}
//           </p>
//         </div>
//         <div className="flex flex-col py-1">
//           <label htmlFor="email">Email:</label>
//           <input
//             className="border-black border-2 rounded-md focus:outline-none p-1"
//             type="text"
//             placeholder="Enter email"
//             {...register("email")}
//           />
//           <p className="text-red-500 text-sm font-medium">
//             {errors.email?.message}
//           </p>
//         </div>
//         <div className="flex flex-col py-1">
//           <label htmlFor="age">Age:</label>
//           <input
//             className="border-black border-2 rounded-md focus:outline-none p-1"
//             type="number"
//             placeholder="Entyer your age"
//             {...register("age", { valueAsNumber: true })}
//           />
//           <p className="text-red-500 text-sm font-medium">
//             {errors.age?.message}
//           </p>
//         </div>
//         <div className="flex flex-col py-1">
//           <label htmlFor="password">Password:</label>
//           <input
//             className="border-black border-2 rounded-md focus:outline-none p-1"
//             type="password"
//             placeholder="Enter password"
//             {...register("password")}
//           />
//           <p className="text-red-500 text-sm font-medium">
//             {errors.password?.message}
//           </p>
//         </div>
//         <div className="flex flex-col py-1">
//           <label htmlFor="conformPassword">Conform Password:</label>
//           <input
//             className="border-black border-2 rounded-md focus:outline-none p-1"
//             type="password"
//             placeholder="Conform password"
//             {...register("conformPassword")}
//           />
//           <p className="text-red-500 text-sm font-medium">
//             {errors.conformPassword?.message}
//           </p>
//         </div>
//         <button
//           className="text-white rounded-md w-full my-2 hover:bg-blue-600 text-center p-2 bg-blue-500"
//           type="submit"
//         >
//           submit
//         </button>
//       </form>
//     </div>
//   );
// };
// export default ReactForm;
