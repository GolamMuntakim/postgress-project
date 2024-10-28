import { imageValidator } from "../utils/checker.js"

class ProfileController{
    static async index(req,res){
       try {
        const user = req.user
        return res.json({status: 200, user})
       } catch (error) {
        return res.status(500).json({message:"something went wrong"})
       }
    }
    static async store(){}
    static async show(){}
    static async update(req, res){
        const {id} = req.params
        const authUser = req.user
        if(!req.files || objectEnumNames.keys(req.files).length === 0){
            return res.status(400).json({status:400, message:"profile is required"})
        }
        const profile = req.file.profile
        const message = imageValidator(profile?.size, profile.mimetype)
        if(message !== null){
            return res.status(400).json({
                errors:{
                    profile:message,
                },
            })
        }
        return res.json({
            name : profile.name,
            size : profile?.size,
            mime : profile?.mimetype
        })
    }
    static async destroy(){}
}
export default ProfileController;