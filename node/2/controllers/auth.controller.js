const { authService } = require('../services');

module.exports = {
    renderLoginPage: authService.renderLoginPage,
    login: authService.login,

    logout: authService.logout,

    renderRegistrationPage: authService.renderRegistrationPage,
    registration: authService.registration

};
