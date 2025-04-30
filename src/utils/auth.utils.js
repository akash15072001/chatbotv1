// Moved from root to src/utils
// Utility functions for authentication
module.exports = function CheckEmailDomainIsPersonalOrNotUtil(emailDomain) {
    const personalDomains = ['gmail.com', 'yahoo.com', 'outlook.com'];
    return { success: personalDomains.includes(emailDomain) };
};