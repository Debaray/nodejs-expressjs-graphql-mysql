const { Error } = require("sequelize/types");
const db = require("../models")

const resolver ={
    Query:{

        async allUsers(){
            return await db.User.findAll({});
        },
        async fetchUser({id}){
            return await db.User.findById(id);
        },

    },
    Mutation:{
        // async login({username,password}){
        //     const user = await db.User.findOne({where: {email}});
        //     if(!user){
        //         throw new Error('No user Found with this email');
        //     }
        //     const valid await bcrypt.compare(pass)
        // }
        async createUser(_,{firstName, lastName, email, password}){
            return await db.User.create({
                    firstName,
                    lastName,
                    email,
                    password
            })
        },
        async updateUser(_,{id,firstName,lastName,email,password}){
                const user = await db.User.findById(id);
                await user.update({
                    firstName,lastName
                });
        }

    }
}