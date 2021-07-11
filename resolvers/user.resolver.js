const db = require("../models")

module.exports ={
    Query:{

        async allUsers(){
            
            const userData = await db.Users.findAll({});
            console.log(userData);
            return userData;
        },
        async fetchUser(_,{id}){
            return await db.Users.findByPk(id);
        },

    },
    Mutation:{
        // async login({username,password}){
        //     const user = await db.Users.findOne({where: {email}});
        //     if(!user){
        //         throw new Error('No user Found with this email');
        //     }
        //     const valid await bcrypt.compare(pass)
        // }
        async createUser(_,{firstName, lastName, email, password}){
            console.log(arguments.length);
            return await db.Users.create({
                    firstName,
                    lastName,
                    email,
                    password
            })
        },
        async updateUser(_,{id,firstName,lastName,email,password}){
                const user = await db.Users.findByPk(id);
                if(!user){
                    throw new Error('No user found for update, please check userid');
                }
                await user.update({
                    firstName,lastName
                });
                return user;
        },
        async deleteuser(_,{id}){

            const user = await db.Users.findByPk(id);
            if(!user){
                throw new Error('No user found for delete, please check userId');
            }
            return await user.destroy();
        }

    }
} 