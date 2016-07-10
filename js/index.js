function show_hidden(id){
        var oFeaGrid = document.getElementById(id);

        var aH = oFeaGrid.getElementsByTagName('h3');
        var aA = oFeaGrid.getElementsByTagName('a');
        var aP = oFeaGrid.getElementsByTagName('p');

        oFeaGrid.onmouseover = function() {
                				
                aH[0].style.display = 'none';
                aP[0].style.display = 'inline-block';
                aA[0].style.display = 'inline-block';
                		
        };
        oFeaGrid.onmouseout = function() {
                	
                aH[0].style.display = 'block';
                aP[0].style.display = 'none';
                aA[0].style.display = 'none';
                			 };
};