import { StatusCodes } from "http-status-codes";
import CustomAPIError from './custom-api.js'
class UnAutheticatedError extends CustomAPIError{
    constructor(message){
        super(message)
        this.StatusCodes= StatusCodes.UNAUTHORIZED
    }
}
export default UnAutheticatedError