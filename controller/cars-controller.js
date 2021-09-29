const sequelize = require("sequelize");
const {Op} = sequelize;
const cars = require("../models").cars;

exports.create = async(req, res) => {
        const result = await cars.create({
            ...req.body,
        });
        res.json(result);
}

exports.list = async(req, res) => {
    const result = await cars.findAll({});
    res.json(result);
}

exports.delete = async(req, res) => {
    const result = await cars.destroy({
        where: {
            id: {
                [Op.eq]:req.params.id
            }
        }
    });
    res.json(result);
}

exports.update = async(req, res) => {
    const result = await cars.update({
        ...req.body,
    },
    {
        where: {
            id: {
                [Op.eq]:req.params.id
            }
        }
    });
    res.json(result);
}