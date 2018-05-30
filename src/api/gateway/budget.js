const axios = require('axios');
const apiUrl = 'http://citadel_budget_manager';

exports.getBudget = slug => axios.get(`${apiUrl}/budgets/${slug}`)
    .then(response => response.data)
    .catch(error => {return null});

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

exports.addTransaction = data => axios.post(`${apiUrl}/budgets/${data.budget}/sectors/${data.sector}/transactions`, {
    wording: data.wording,
    description: data.description,
    type: data.type,
    amount: data.amount,
    processed_at: (new Date(data.processed_at)).toISOString(),
}).then(response => response.data)
.catch(error => console.log(error));
