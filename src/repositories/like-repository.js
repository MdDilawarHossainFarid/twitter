const Like = require("../models")
const CrudRepository = require("../repositories")

class LikeRepository extends CrudRepository {
    constructor() {
        super(Like)
    }

    async findByUserAndLikeable(data){
        try {
            const like = await Like.findOne(data);
            return like;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = {LikeRepository}