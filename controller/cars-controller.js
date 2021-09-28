const sequelize = require("sequelize");
const {Op} = sequelize;
const cars = require("../models").cars;

exports.create = async(req, res) => {
        const temp = await cars.findOne({
            where: {
                vehicleNumber: {
                    [Op.eq]:req.body.vehicleNumber
                }
            }
        });
        const result = temp ? "Duplicate value" : await cars.create({
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
            vehicleNumber: {
                [Op.eq]:req.params.vehicleNumber
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
            vehicleNumber: {
                [Op.eq]:req.params.vehicleNumber
            }
        }
    });
    res.json(result);
}