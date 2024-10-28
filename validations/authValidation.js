import vine from "@vinejs/vine";
import { CustomErrorReporter } from "./CustomErrorReporter.js";
// custom error reporter
vine.errorReporter = () => new CustomErrorReporter();
// for register
export const registerSchema = vine.object({
    name : vine.string().minLength(2).maxLength(150),
    email : vine.string().email(),
    password : vine.string().minLength(6).maxLength(100).confirmed()
})

// for login
export const loginSchema = vine.object({
    email : vine.string().email(),
    password : vine.string()
})