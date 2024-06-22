const { IS_CREATOR_ACCEPT_STATUS } = require("../constants");
const prisma = require("../models/prisma");

const creatorService = {};

creatorService.findUserByEmail = (email) =>
  prisma.creator.findFirst({ where: { email } });
creatorService.findUserByPhone = (phone) =>
  prisma.creator.findFirst({ where: { phone } });
creatorService.findUserById = (id) => prisma.creator.findUnique({ where: { id } });

creatorService.createUser = (data) => prisma.creator.create({ data });
creatorService.approveCreatorById = (id) =>
  prisma.creator.update({
    data: { isCreatorAcceptId: IS_CREATOR_ACCEPT_STATUS.ACCEPTED },
    where: { id },
  });

creatorService.updateInfo = (id, data) => prisma.creator.update({ data, where: { id } });

module.exports = creatorService;
