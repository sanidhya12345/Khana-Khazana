import ErrorHandler from "../error/error.js"
import reservation from "../models/reservationSchema.js"

export const sendReservation= async (req,res,next)=>{
    const {firstName,lastName,email,phone,date,time} =req.body;
    if(!firstName || !lastName || !email || !phone || !date || !time){
        return next(new ErrorHandler("Please fill full form",400));
    }

    try {
        await reservation.create(firstName,lastName,email,phone,date,time);
        res.status(200).json({
            success:true,
            message:"reservation sent successfully"
        })
    } catch (error) {
        if(error.name==="ValidationError"){
            const validationErrors=Object.values(error.errors).map((err)=>{
                err.message
            });
        }
        return next(new ErrorHandler(validationErrors.join(' , '),400))
    }
}