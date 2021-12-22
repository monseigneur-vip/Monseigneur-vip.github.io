document.onkeydown=function(){
    var e = window.event||arguments[0];
    if(e.keyCode==123){
    	alert('');
            return false;
    }else if((e.ctrlKey)&&(e.shiftKey)&&(e.keyCode==73)){
    	alert('');
            return false;
    }else if((e.ctrlKey)&&(e.keyCode==85)){
            alert('');
            return false;
    }else if((e.ctrlKey)&&(e.keyCode==83)){
           alert('');
           return false;
    }
}
document.oncontextmenu=function(){
	alert('');
    return false;
}
