import Darkmode from 'darkmode-js';
var options = {
	bottom: '32px', // default: '32px'
	right: 'unset', // default: '32px'
	left: '32px', // default: 'unset'
	time: '0.9s', // default: '0.3s'
	//     mixColor: '#fff', // default: '#fff'
	//      backgroundColor: '#4D4D4D',  // default: '#fff'
	buttonColorDark: '#100f2c', // default: '#100f2c'
	buttonColorLight: '#fff', // default: '#fff'
	saveInCookies: true, // default: true,
	label: '' // default: ''
	//     autoMatchOsTheme: true // default: true
};

var darkmode = new Darkmode(options);
darkmode.showWidget();
