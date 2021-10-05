const sequelize = require("sequelize");
const {Op} = sequelize;
const brands = require("../models").brand;

exports.create = async(req, res) => {
        const result = await brands.create({
            ...req.body,
        });
        res.json(result);
}

exports.list = async(req, res) => {
    const result = await brands.findAll({});
    const table = result.map(({make, model}) => ({make, model}));
    res.json(table);
}

exports.get = async(req, res) => {
    const result = await brands.findAll({
        where: {
            make: {
                [Op.eq]:req.params.make
            }
        }
    });
    res.json(result);
}

exports.delete = async(req, res) => {
    const result = await brands.destroy({
        where: {
            model: {
                [Op.eq]:req.params.model
            }
        }
    });
    res.json(result);
}

exports.update = async(req, res) => {
    const result = await brands.update({
        ...req.body,
    },
    {
        where: {
            model: {
                [Op.eq]:req.params.model
            }
        }
    });
    res.json(result);
}