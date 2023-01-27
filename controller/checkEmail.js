import emailChecker from "../emailChecker.js";
const checkEmail = async(req,res)=>{
    try {
        const {email} = req.params;
        const data = await emailChecker(email);
        res.status(200).json({data});

    } catch (error) {
        res.status(500).json({msg:"error"});
    }
}
export default checkEmail;