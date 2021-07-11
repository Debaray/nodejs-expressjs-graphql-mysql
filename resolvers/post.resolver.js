const db = require("../models");

module.exports = {
    Query: {

        async allPosts(){
            return await db.Posts.findAll({})
        },
        async fetchPost(_, {id}){
            // console.log(_, props);
            return await db.Posts.findByPk(id)
        }

    },
    Mutation:{

        async addPost(_,{title,content,status, tags}){
                const post = await db.Posts.create({
                    title,
                    content,
                    status,tags
                });
                return post;
        },
        async updatePost(_,{id,title, content,status,tags}){
            const post = await db.Posts.findByPk(id);
            await post.update({
                title,
                content,
                status
            });
            
            return post;

        },
        async deletePost(_,{id}){
            const post = await db.Posts.findByPk(id);
            return await post.destroy();
        }

    }
}