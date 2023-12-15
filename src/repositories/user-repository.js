const{ User} = require("../models")
const { CrudRepository} = require ("../repositories")

class UserRepository extends CrudRepository {
    constructor() {
        super(User)
    }

    
}

module.exports= {UserRepository};