let main_search_input = document.getElementById('main-search-input');
let main_search_submit = document.getElementById('main-search-submit');


main_search_submit.addEventListener('click', function() {
	let search = main_search_input.value;
	let url = 'https://jobs.search.gov/jobs/search.json?size=100&query=';

	axios.get(`${url}${search}`).then(function(response) {
		let data = response.data;
		console.log(data);
	}).catch(function(error) {
		console.log(error);
	});
});