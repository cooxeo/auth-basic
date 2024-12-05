import { NextResponse } from "next/server";
import { User } from "@/models/users.models";
import { dbConnect } from "@/lib/conntectDb";
import bcrypt from "bcryptjs";
import { signupSchema } from "@/utils/formValidations";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate incoming request body using zod schema
    const validatedData = signupSchema.parse(body);

    // Connect to the database
    await dbConnect();

    // Hash the password
    const hashedPassword = await bcrypt.hash(validatedData.password, 10);

    // Create the new user with hashed password
    const newUser = new User({
      ...validatedData,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    // Return a success response
    return NextResponse.json(
      { message: "User saved successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message:
          error instanceof Error ? error.message : "An unknown error occurred",
      },
      { status: 500 }
    );
  }
}
