let main_search_input = document.getElementById('main-search-input');
let main_search_submit = document.getElementById('main-search-submit');

var data = [];

main_search_submit.addEventListener('click', function() {
	let search = main_search_input.value;
	let url = 'https://jobs.search.gov/jobs/search.json?size=100&query=';

	axios.get(`${url}${search}`).then(function(response) {
		let res = response.data;

		data.splice(0, data.length);
		for(let i = 0; i < res.length; i++) {
			data.push(res[i]);
		}
	}).catch(function(error) {
		console.log(error);
	});
});

let app = new Vue({
	el: '#results',
	data: function() {
		return {
			results: data
		}
	}
})