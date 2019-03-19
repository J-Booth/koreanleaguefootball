$(document).ready(function() {
    // add new widget called indexFirstColumn
    $.tablesorter.addWidget({
    	// give the widget a id
    	id: "indexFirstColumn",
    	// format is called when the on init and when a sorting has finished
    	format: function(table) {				
    		// loop all tr elements and set the value for the first column	
    		for(var i=1; i < table.tBodies[0].rows.length; i++) {
    			$("tbody tr:eq(" + (i - 1) + ") td:first",table).html(i);
    		}    								
    	}
    });

    $("#classic-standings,#classic-standings-championship,#classic-standings-relegation,#challenge-standings").tablesorter({
    	widgets: ['zebra', 'indexFirstColumn'],
		sortList: [[9,1],[8,1],[6,1],[7,1],[3,1],[4,1],[5,1],[2,1],[1,0]],
    headers : {
      0 : { sorter:false },
      1 : { sorter:false },
      2 : { sorter:false },
	  3 : { sorter:false },
      4 : { sorter:false },
	  5 : { sorter:false },
      6 : { sorter:false },
	  7 : { sorter:false },
	  8 : { sorter:false },
	  9 : { sorter:false },	  
    }

  });
});

$(document).ready(function() {
    // add new widget called indexSecondColumn
    $.tablesorter.addWidget({
    	// give the widget a id
    	id: "indexSecondColumn",
    	// format is called when the on init and when a sorting has finished
    	format: function(table) {				
    		// loop all tr elements and set the value for the first column	
    		for(var i=1; i < table.tBodies[0].rows.length; i++) {
    			$("tbody tr:eq(" + (i - 1) + ") td:first",table).html(i);
    		}    								
    	}
    });

    $("#classic-standings-mobile,#classic-standings-championship-mobile,#classic-standings-relegation-mobile,#challenge-standings-mobile").tablesorter({
    	widgets: ['zebra', 'indexSecondColumn'],
		sortList: [[4,1],[3,1],[2,1],[1,0]],
    headers : {
      0 : { sorter:false },
      1 : { sorter:false },
      2 : { sorter:false },
	  3 : { sorter:false },
	  4 : { sorter:false },	  
    }

  });
});

$(document).ready(function() {
    // add new widget called indexThirdColumn
    $.tablesorter.addWidget({
    	// give the widget a id
    	id: "indexThirdColumn",
    	// format is called when the on init and when a sorting has finished
    	format: function(table) {				
    		// loop all tr elements and set the value for the first column	
    		for(var i=1; i < table.tBodies[0].rows.length; i++) {
    			$("tbody tr:eq(" + (i - 1) + ") td:first",table).html(i);
    		}    								
    	}
    });

    $("#classic-scorers,#challenge-scorers,#classic-assists,#challenge-assists").tablesorter({
    	widgets: ['zebra', 'indexThirdColumn'],
		sortList: [[3,1]],
        headers: {  
          0: {sorter: false}, 
          1: {sorter:false},
		  2: {sorter:false},
		  3: {sorter:false},   
        } 
    });
});	
 
$(document).ready(function() {
    // add new widget called indexFourthColumn
    $.tablesorter.addWidget({
    	// give the widget a id
    	id: "indexFourthColumn",
    	// format is called when the on init and when a sorting has finished
    	format: function(table) {				
    		// loop all tr elements and set the value for the first column	
    		for(var i=1; i < table.tBodies[0].rows.length; i++) {
    			$("tbody tr:eq(" + (i - 1) + ") td:first",table).html(i);
    		}    								
    	}
    });

    $("#classic-scorers-mobile,#challenge-scorers-mobile,#classic-assists-mobile,#challenge-assists-mobile").tablesorter({
    	widgets: ['zebra', 'indexFourthColumn'],
		sortList: [[3,1]],
        headers: {    
            0: {sorter: false}, 
            1: {sorter:false},
			2: {sorter:false},
			3: {sorter:false},  
        } 
    });
});	 