var ver = '1.2';
if(localStorage.version !== ver) {
	localStorage.removeItem('content');
	localStorage.version = ver;
}
