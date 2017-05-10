$(document).ready(function (){
	
	// Add item to the to-do list when you click the Add button
	function add() {
		var user_input = document.getElementById('item-to-do-input').value;

		if (user_input != null) {
			var textNode = document.createTextNode(user_input);

			var li = document.createElement('li');
			li.appendChild(textNode);
			li.setAttribute("class", "list-group-item");
			// console.log(li.innerHTML);
			document.getElementById('to-do-list').appendChild(li);
		}
	}

	$('#add-button').click(function () {
		add();
	})

});