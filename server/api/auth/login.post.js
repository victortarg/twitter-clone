import { getUserByUsername } from "~/server/db/users";
import bcrypt from 'bcrypt';
import { generateTokens, sendRefreshToken} from "../../util/jwt.js";
import { createRefreshToken } from "../../db/refreshTokens.js";
import { userTransformer } from "~/server/transformers/user.js";

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const {username, password} = body

    if ( !username || !password ) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'invalid Params'
        }));
    }

    //saber se o user ta registrado
    const user = await getUserByUsername(username)

    if (!user) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'username or password not valid'
        }));
    }

    //comparar as senhas
    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'username or password not valid'
        }));
    }

    //gerar os tokens
    //acessar o token
    //refresh token
    const {accessToken, refreshToken} = generateTokens(user)

    //salvar o refresh token no banco de dados
    await createRefreshToken({
        token: refreshToken,
        userId: user.id
    })

    //adicionar o refresh token no cookie
    sendRefreshToken(event, refreshToken)

    return {
        access_Token: accessToken,
        user: userTransformer(user)
    }

})