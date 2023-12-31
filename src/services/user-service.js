const { UserRepository}  = require("../repositories")

class UserService {
    constructor() {
        this.userRepository = new UserRepository();        

    }
    async signUp(data){
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            throw error;
        }

    }

        async signIn(data){
        try {
            const email = data.email;
            const currentPassword = data.password;
            const user = await this.userRepository.findBy({email:email});
 
            if(!user){
                throw{
                    message: 'No user found'
                }
            }
            if(!user.comparePassword(currentPassword)){
                throw{
                    message: 'Incorrect password'
                }
            }
            console.log("User succefully signed in")
            const token = user.genJWT();
            return token;    
        } catch (error) {
            throw error;
        }

    }

}

module.exports= {UserService}