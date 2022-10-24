const Apply = require("../models/Apply");

exports.postApplyService = async (data) => {
    const result = await Apply.create(data);
    return result;
};