
const MyTitle = 'My Blog';
const MyIcon = 'sIcon.ico';
const MyPath = 'none';

function common() {
	setIcon(MyIcon);
	setCharset();
	setTitle(MyTitle);
}

function setCharset() {
	var meta = document.createElement('meta');
	meta.setAttribute('charset','utf-8');
	document.getElementsByTagName('head')[0].appendChild(meta);
}

function setTitle(name) {
	document.title = name;
}

function setIcon(iconName) {
	var link = document.querySelector("link[rel*='icon']")
			   || document.createElement('link');
	link.type = 'image/x-icon';
	link.rel = 'shortcut icon';
	link.href = './images/icon/'+iconName;
	document.getElementsByTagName('head')[0].appendChild(link);
}

function getMyTitle() {
	return MyTitle;
}

function getMyIcon() {
	return MyIcon;
}

function getMyPath() {
	return MyPath;
}

function jumpTo(url) {
	location.href = url;
}