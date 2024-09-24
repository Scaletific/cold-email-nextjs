import { z } from "zod";

const loginForm = z.object({
    email: z.string().min(1, {
        message: "Email",
    }),
    password: z.string().min(1, {
        message: "Password",
    }),
});

export const LoginFormSchema = loginForm;
