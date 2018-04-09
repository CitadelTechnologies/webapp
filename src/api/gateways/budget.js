const axios = require('axios');
const apiUrl = 'http://citadel_budget_manager';

exports.createBudget = (name, description) => axios.post(`${apiUrl}/budgets`, {
    name: name,
    description: description
}).then(response => response.data)
.catch(error => console.log(error));

exports.deleteBudget = slug => axios.delete(`${apiUrl}/budgets/${slug}`)
.catch(error => console.log(error));

exports.createSector = (budgetSlug, name) => axios.post(`${apiUrl}/budgets/${budgetSlug}/sectors`, {
    name: name
}).then(response => response.data)
.catch(error => console.log(error));
