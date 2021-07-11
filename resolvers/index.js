
const userResolver = require('./user.resolver');
const postResolver = require('./post.resolver');
const tagResolver = require('./tag.resolver');
// const customScalarResolver ={
//     Date: GraphQLDateTime,
// };

module.exports = [userResolver,postResolver,tagResolver];