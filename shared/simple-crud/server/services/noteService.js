const { prismaDB } = require('../config/database');

async function getAll(){
    const notes = prismaDB.note.findMany({orderBy : {
        createdAt :"desc"
    }})
    return notes
}

async function create (data) {
    const note = await prismaDB.note.create({
        data : data
    });
    return note;
};

async function remove (id){
    const exist = await prismaDB.note.findFirst({where:{id: parseInt(id) }});
    if (!exist) throw Error(`No note with id=${id} exist.`)
    return prismaDB.note.delete({ where: { id: parseInt(id) } });
};


module.exports = {
    getAll, 
    create, 
    remove,
}