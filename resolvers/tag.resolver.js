const db = require('../models');

module.exports = {
    Query: {
        async allTags(){
            return await db.Tags.findAll({});
        },
        async fetchTag(_,{id}){
            return await db.Tags.findByPk(id);
        }
    },
    Mutation: {
        async addTag(_,{name, description}){
            return await db.Tags.create({
                name,
                description
            })

        },
        async updateTag(_,{id,name,description}){
            const tag = await db.Tags.findByPk(id);
            await tag.update({
                name,
                description
            });
            return tag;

        },
        async deleteTag(_,{id}){
            const tag = await db.Tags.findByPk(id);
            return await tag.destroy();

        }
    }

}