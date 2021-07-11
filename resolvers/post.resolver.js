const db = require("../models");

module.exports = {
    Query: {

        async allPost(){
            return await db.Post.findAll({})
        },
        async fetchPost({id}){
            return await db.Post.findById(id)
        }

    },
    Mutation:{

        async addPost(_,{title,content,status, tags}){
                const post = await db.Post.create({
                    title,
                    content,
                    status
                });
                await post.setTags(tags);
                return post;
        },
        async updatePost(_,{id,title, content,status,tags}){
            const post = await db.Post.findById(id);
            await post.update({
                title,
                content,
                status
            });
            await post.setTags(tags);
            return post;

        },
        async deletePost(_,{id}){
            const post = await db.Post.findById(id);
            return await post.destroy();
        }

    }
}