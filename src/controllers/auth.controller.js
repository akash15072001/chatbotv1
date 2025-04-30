const { IsUserPresentUsingEmailService, CreateNewUserService } = require('../../services/user.service');
const CheckEmailDomainIsPersonalOrNotUtil = require('../../utils/auth.utils');
const { IsOrganizationPresentUsingOrgDomainService, CreateNewOrganizationService } = require('../../services/organization.service');
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const NODE_ENV = process.env.NODE_ENV;
const JWT_SECRET_KEY = process.env[`${NODE_ENV}_JWT_SECRET_KEY`];

// ...existing code...
module.exports = {
    SignupController,
    SigninController
};