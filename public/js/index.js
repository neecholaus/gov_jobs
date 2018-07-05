let main_search_input = document.getElementById('main-search-input');
let main_search_submit = document.getElementById('main-search-submit');

var data = [];
var errors = [];

main_search_submit.addEventListener('click', function() {
	let search = main_search_input.value;
	let url = 'https://jobs.search.gov/jobs/search.json?size=100&query=';

	// Clear results and errors while keeping them bound to Vue instance
	data.splice(0, data.length);
	errors.splice(0, errors.length);

	// Handle empty search
	if(search.replace(/\s/g, '') == '') {
		errors.push('Your search was empty...');
		return;
	}

	// Send request to endpoint
	axios.get(`${url}${search}`).then(function(response) {
		let res = response.data;

		for(let i = 0; i < res.length; i++) {
			data.push(res[i]);
		}
	}).catch(function(error) {
		errors.push(error);
	});
});

// Initialize Vue component
let app = new Vue({
	el: '#results',
	data: function() {
		return {
			results: data,
			errors: errors
		}
	}
})
