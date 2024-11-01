import { sendError } from "h3";
import { createUser } from "../../db/users.js";
import { userTransformer } from "~/server/transformers/user.js";
export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    
    const {username, password, email, repeatPassword, name } = body

    if ( !username || !password || !email || !repeatPassword || !name ) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'invalid Params'
        }));
    }

    if (password !== repeatPassword) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'password does not match'
        }));
    }

    const userData = {
        username,
        email,
        password,
        name,
        profileImage: 'https://picsum.photos/200/200'
    }

    const user = await createUser(userData)

    return {
        body: userTransformer(user)
    }
})