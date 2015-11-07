(function() {

	
	var cell = {
		width: 20,
		height: 20,
		rows: 9,
		columns: 9
	};
	var grid = [""];
	var mines = "";

	var indexWithin = function(index) {

		if (index < 0  || index > cell.columns)
			return -1;
		else
			return index - cell.columns;

	};

	var createGrid = function() {

		var board = $('<div>');

	//loop to create grid

		$('.container').width(cell.columns * cell.width);

		for (var i = 0; i < cell.rows; i++) {
			
			for (var j = 0; j < cell.columns; j++) {
				
				$('<div class="cr-'+i+'-'+j+' " style="width: ' + cell.width + 'px; height:' + cell.height + 'px;">').appendTo(board);

			}

		}

		$('.container').append(board.html());
	}

	var clickCell = function() {
		$('.container').on("click", "div", function(event) {
			console.log($(this));
		});

	}

	createGrid();
	clickCell();
})();