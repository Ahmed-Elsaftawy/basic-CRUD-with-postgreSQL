import Joi from "joi";


const userShcema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required()
})


const validateUser = (req, res, next) => {
    const { error } = userShcema.validate(req.body);
    if (error) {
        next(error);
    }
    next()
}

export default validateUser