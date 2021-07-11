const db = require('../models');

module.exports = {
    Query: {
        async allTag(){
            return await db.Tag.findAll({});
        },
        async fetchTag({id}){
            return await db.Tag.findById(id);
        }
    },
    Mutation: {
        async addTag(_,{name, description}){
            return await db.Tag.create({
                name,
                description
            })

        },
        async updateTag(_,{id,name,description}){
            const tag = await db.Tag.findById(id);
            await tag.update({
                name,
                description
            });
            return tag;

        },
        async deleteTag(_,{id}){
            const tag = await db.Tag.findById(id);
            await tag.destroy();

        }
    }

}