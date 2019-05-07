  


/** Init dropdown buttons. */
let dropdown_options = {
	alignment: 'center',
	coverTrigger: false,
	constrainWidth: false,
};
document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.dropdown-trigger');
	var instances = M.Dropdown.init(elems, dropdown_options);
});