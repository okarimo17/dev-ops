const { PrismaClient } = require('@prisma/client');

const prismaDB = new PrismaClient();

module.exports = {
    prismaDB
}
