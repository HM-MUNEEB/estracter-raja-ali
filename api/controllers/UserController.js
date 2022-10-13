const jwt = require("jsonwebtoken");
const { sequelize } = require("./../middlewares/connection");
const { QueryTypes } = require("sequelize");
const initModels = require("./../models/init-models");
const models = initModels(sequelize);
const bcrypt = require("bcrypt");
const saltRounds = 10;
const {
  loginUser,
  registerUser,
  addUserValidator,
} = require("./../validation/useSchemaValidation");

const login = async function (req, res) {
  try {
    await loginUser.validateAsync(req.body);
  } catch (err) {
    console.log(err);
    return res.status(412).json({
      error: "Data is incorrect",
    });
  }

  try {
    const user = await models.users.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (user == null)
      return res
        .json({
          error: "Account with email not found",
          status: 412,
        })
        .status(412);
    const { name, email, password, role, id } = user.dataValues;

    bcrypt.compare(
      req.body.password,
      password,
      async function (err, compareResult) {
        console.log(compareResult);
        if (!compareResult) {
          return res
            .json({
              error: "Login failed, check email and password and try again",
              status: 412,
            })
            .status(412);
        } else {
          const token = await jwt.sign(
            { email, name, role },
            process.env.PRIVATE_KEY
          );
          return res.status(200).json({
            token,
            email,
            name,
            role,
            id,
            status: 200,
          });
        }
      }
    );
  } catch (err) {
    console.log(err.message);
  }
};
const register = async function (req, res) {
  try {
    await registerUser.validateAsync(req.body);
  } catch (err) {
    return res
      .json({
        error: "Data is incorrect",
        status: 412,
      })
      .status(412);
  }
  try {
    const hash = await bcrypt.hash(req.body.password, saltRounds);
    await models.users.create({
      name: req.body.name,
      email: req.body.email,
      password: hash,
    });
    return res
      .json({
        message: "User created successfully",
        status: 201,
      })
      .status(201);
  } catch (err) {
    console.log(err);
    return res
      .json({
        error: "Email is already in use",
        status: 412,
      })
      .status(412);
  }
};
const addUser = async (req, res) => {
  const {
    eircode,
    sales_HeatPump_Enquiry,
    sales_HeatPump_PhoneCall,
    sales_HeatPump_Survey,
    sales_HeatPump_DepositPaid,
    sales_HeatPump_Sold,
    sales_HeatPump_Delivery,
    sales_HeatPump_Commission,
    sales_Stoves_Enquiry,
    sales_Stoves_PhoneCall,
    sales_Stoves_Survey,
    sales_Stoves_DepositPaid,
    sales_Stoves_Sold,
    sales_Stoves_Delivery,
    sales_Stoves_Commission,
    sales_Ventilation_Enquiry,
    sales_Ventilation_PhoneCall,
    sales_Ventilation_Survey,
    sales_Ventilation_DepositPaid,
    sales_Ventilation_Sold,
    sales_Ventilation_Delivery,
    sales_Ventilation_Commission,
    sales_Underfloor_Enquiry,
    sales_Underfloor_PhoneCall,
    sales_Underfloor_Survey,
    sales_Underfloor_DepositPaid,
    sales_Underfloor_Sold,
    sales_Underfloor_Delivery,
    sales_Underfloor_Commission,
    sales_OilandUF_Enquiry,
    sales_OilandUF_PhoneCall,
    sales_OilandUF_Survey,
    sales_OilandUF_DepositPaid,
    sales_OilandUF_Sold,
    sales_OilandUF_Delivery,
    sales_OilandUF_Commission,
    servicing_HeatPump_Issue,
    servicing_HeatPump_PhoneCall,
    servicing_HeatPump_Cosmetic,
    servicing_HeatPump_Resolved,
    servicing_HeatPump_PlumberCallout,
    servicing_HeatPump_Service,
    servicing_HeatPump_Commission,
    servicing_Stoves_Issue,
    servicing_Stoves_PhoneCall,
    servicing_Stoves_Cosmetic,
    servicing_Stoves_Resolved,
    servicing_Stoves_PlumberCallout,
    servicing_Stoves_Service,
    servicing_Stoves_Commission,
    servicing_Ventilation_Issue,
    servicing_Ventilation_PhoneCall,
    servicing_Ventilation_Cosmetic,
    servicing_Ventilation_Resolved,
    servicing_Ventilation_PlumberCallout,
    servicing_Ventilation_Service,
    servicing_Ventilation_Commission,
    servicing_Underfloor_Issue,
    servicing_Underfloor_PhoneCall,
    servicing_Underfloor_Cosmetic,
    servicing_Underfloor_Resolved,
    servicing_Underfloor_PlumberCallout,
    servicing_Underfloor_Service,
    servicing_Underfloor_Commission,
    servicing_OilandUF_Issue,
    servicing_OilandUF_PhoneCall,
    servicing_OilandUF_Cosmetic,
    servicing_OilandUF_Resolved,
    servicing_OilandUF_PlumberCallout,
    servicing_OilandUF_Service,
    servicing_OilandUF_Commission,
    items,
  } = req.body;
  const { name, phone, address, account_number, email, county, password } =
    req.body;
  let result;
  // const { account_number, address, county, eircode, email, name, phone } =
  //   req.body;
  try {
    await addUserValidator.validateAsync({
      name,
      phone,
      address,
      account_number,
      email,
      county,
      password,
    });
  } catch (err) {
    return res.status(412).json({
      error: err.message,
      status: 412,
    });
  }
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    result = await models.users.create({
      name,
      phone,
      address,
      account_number,
      email,
      county,
      password: hash,
    });
    console.log(result.id);
  } catch (err) {
    return res.status(500).json({
      error: err?.errors[0]?.message,
    });
  }
  try {
    const resultSecondQuery = await models.customer.create({
      user_id: result.id,
      eircode,
      sales_HeatPump_Enquiry,
      sales_HeatPump_PhoneCall,
      sales_HeatPump_Survey,
      sales_HeatPump_DepositPaid,
      sales_HeatPump_Sold,
      sales_HeatPump_Delivery,
      sales_HeatPump_Commission,
      sales_Stoves_Enquiry,
      sales_Stoves_PhoneCall,
      sales_Stoves_Survey,
      sales_Stoves_DepositPaid,
      sales_Stoves_Sold,
      sales_Stoves_Delivery,
      sales_Stoves_Commission,
      sales_Ventilation_Enquiry,
      sales_Ventilation_PhoneCall,
      sales_Ventilation_Survey,
      sales_Ventilation_DepositPaid,
      sales_Ventilation_Sold,
      sales_Ventilation_Delivery,
      sales_Ventilation_Commission,
      sales_Underfloor_Enquiry,
      sales_Underfloor_PhoneCall,
      sales_Underfloor_Survey,
      sales_Underfloor_DepositPaid,
      sales_Underfloor_Sold,
      sales_Underfloor_Delivery,
      sales_Underfloor_Commission,
      sales_OilandUF_Enquiry,
      sales_OilandUF_PhoneCall,
      sales_OilandUF_Survey,
      sales_OilandUF_DepositPaid,
      sales_OilandUF_Sold,
      sales_OilandUF_Delivery,
      sales_OilandUF_Commission,
      servicing_HeatPump_Issue,
      servicing_HeatPump_PhoneCall,
      servicing_HeatPump_Cosmetic,
      servicing_HeatPump_Resolved,
      servicing_HeatPump_PlumberCallout,
      servicing_HeatPump_Service,
      servicing_HeatPump_Commission,
      servicing_Stoves_Issue,
      servicing_Stoves_PhoneCall,
      servicing_Stoves_Cosmetic,
      servicing_Stoves_Resolved,
      servicing_Stoves_PlumberCallout,
      servicing_Stoves_Service,
      servicing_Stoves_Commission,
      servicing_Ventilation_Issue,
      servicing_Ventilation_PhoneCall,
      servicing_Ventilation_Cosmetic,
      servicing_Ventilation_Resolved,
      servicing_Ventilation_PlumberCallout,
      servicing_Ventilation_Service,
      servicing_Ventilation_Commission,
      servicing_Underfloor_Issue,
      servicing_Underfloor_PhoneCall,
      servicing_Underfloor_Cosmetic,
      servicing_Underfloor_Resolved,
      servicing_Underfloor_PlumberCallout,
      servicing_Underfloor_Service,
      servicing_Underfloor_Commission,
      servicing_OilandUF_Issue,
      servicing_OilandUF_PhoneCall,
      servicing_OilandUF_Cosmetic,
      servicing_OilandUF_Resolved,
      servicing_OilandUF_PlumberCallout,
      servicing_OilandUF_Service,
      servicing_OilandUF_Commission,
      installers: JSON.stringify([...items]),
    });
    console.log({ ...items });
    return res.sendStatus(201);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: err.message,
    });
  }
};
const searchUser = async (req, res) => {
  try {
    const users = await models.users.findOne({ where: { ...req.body } });
    if (users != null) return res.status(200).send(users);
    else return res.sendStatus(500);
  } catch (err) {
    console.log(err.message);
  }
};
const allUsers = async (req, res) => {
  const users = await sequelize.query("SELECT name, email from users", {
    type: QueryTypes.SELECT,
  });
  return res.status(200).send(users);
};
const updateUser = async (req, res) => {
  try {
    const users = await models.users.update(
      {
        name: req.body?.name,
        role: req.body?.privilages,
      },
      {
        where: { email: req.body.email },
      }
    );
    return res.sendStatus(201);
  } catch (err) {
    console.log(err.message);
  }
};

const searchUserById = async (req, res) => {
  const { id } = req.params;

  const user = await sequelize.query(
    `SELECT *, customer.id AS customerId FROM users JOIN customer on users.id = customer.user_id WHERE users.id = ${id}`,
    {
      type: QueryTypes.SELECT,
    }
  );
  if (user[0].installers == "") return res.status(200).send(user);
  const installers = JSON.parse(user[0].installers) || null;
  if (installers == null) return res.status(200).send(user);
  else {
    let installerData = [];
    for (let i = 0; i < installers.length; i++) {
      const data = await sequelize.query(
        `SELECT * from installers WHERE id = ${installers[i].installer}`,
        {
          type: QueryTypes.SELECT,
        }
      );
      installerData.push(data[0]);
    }

    return res.status(200).send({
      installer: installerData,
      ...user,
    });
  }
};

const addTicket = async (req, res) => {
  const { id } = req.params;
  try {
    await models.ticket.create({
      ...req.body,
      user_id: id,
    });
    return res.sendStatus(201);
  } catch (err) {
    console.log(err.message);
  }
};
const getAllTicketDetails = async (req, res) => {
  try {
    const tickets = await models.ticket.findAll({
      where: {
        user_id: req.params.id,
      },
    });
    return res.status(200).send(tickets);
  } catch (err) {
    console.log(err.message);
  }
};
const getStats = async (req, res) => {
  const s = {
    admin: "",
    user: "",
  };
  const stats = await sequelize.query(`SELECT role  FROM users`, {
    type: QueryTypes.SELECT,
  });
  const tickets = await sequelize.query(
    `SELECT COUNT(*) AS ticket from ticket`,
    {
      type: QueryTypes.SELECT,
    }
  );
  console.log(tickets);
  const admin = stats.filter((role) => role.role.toLowerCase() === "admin");
  const user = stats.filter((role) => role.role.toLowerCase() !== "admin");
  return res.status(200).json({
    admin: admin.length,
    user: user.length,
    tickets: tickets[0].ticket,
  });
};
const addInstaller = async (req, res) => {
  try {
    await models.installers.create(req.body);
    return res.sendStatus(201);
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};
const getAllInstallers = async (req, res) => {
  try {
    const installers = await models.installers.findAll();
    return res.status(200).send(installers);
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};
module.exports = {
  login,
  register,
  addUser,
  searchUser,
  allUsers,
  updateUser,
  searchUserById,
  addTicket,
  getAllTicketDetails,
  getStats,
  addInstaller,
  getAllInstallers,
};
