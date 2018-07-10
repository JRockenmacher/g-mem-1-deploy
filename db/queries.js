const database = require("./knex-config")

module.exports = {
    list(){
        return database('resolutions')
    },
    create(resolution){
        return database('resolutions')
        .insert('resolution')
        .returning('*')
        .then(record => record[0])
    },
    read(id){
        return database('resolutions')
        .select()
        .where('id', id)
        .first()
    },
    update(id, resolution){
        return database('resolutions')
        .update(resolution)
        .where('id', id)
        .returning('*')
        .then(record => record[0])

    },
    delete(id){
        return database('resolutions')
        .delete()
        .where('id', id)
    }
}
