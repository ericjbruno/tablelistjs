// 
// This code turns an HTML table into scrollable list with multiple columns
//

var selected = null;

//
// This function highlights a table row as the mouse hovers
// over it. It also adds code to mark a row as selected when 
// clicked on and toggle it when selected again
//
function tableHighlightRow() {
  if (document.getElementById && document.createTextNode) {
    var tables=document.getElementsByTagName('table');
    for ( var i=0; i<tables.length; i++ ) {
      if ( tables[i].className==='TableListJS' ) {
        var trs=tables[i].getElementsByTagName('tr');
        for ( var j=0; j<trs.length; j++) {
          if (trs[j].parentNode.nodeName==='TBODY') {
            trs[j].onmouseover=function(){
                // 'highlight' color is set in tablelist.css
                if ( this.className === '') {
                    this.className='highlight';
                }
                return false
            }
            trs[j].onmouseout=function(){
                if ( this.className === 'highlight') {
                    this.className='';
                }
                return false
            }
            trs[j].onmousedown=function(){
                //
                // Toggle the selected state of this row
                // 

                // 'clicked' color is set in tablelist.css.
                if ( this.className !== 'clicked' ) {
                    // Clear previous selection
                    if ( selected !== null ) {
                        selected.className='';
                    }

                    // Mark this row as selected
                    this.className='clicked';
                    selected = this;
                }
                else {
                    this.className='';
                    selected = null;
                }

                return true
            }
          }
        }
      }
    }
  }
}


