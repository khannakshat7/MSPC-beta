var firebaseConfig = {
	apiKey: 'AIzaSyDSMQzs-H_0S8KVJ_4Lafb4OK4oN_41nGc',
	authDomain: 'mstc-certificates-4d37e.firebaseapp.com',
	databaseURL: 'https://mstc-certificates-4d37e.firebaseio.com',
	projectId: 'mstc-certificates-4d37e',
	storageBucket: 'mstc-certificates-4d37e.appspot.com',
	messagingSenderId: '809628938657',
	appId: '1:809628938657:web:0462df4448b01842cb9be0',
	measurementId: 'G-ERM4DF0K0C'
};
var storage;

$(document).ready(function() {
	firebase.initializeApp(firebaseConfig);
	storage = firebase.storage();
	console.log('Firebase Initialised.');
});

// EHcerts
function dod() {
	document.getElementById('progress').style.visibility = 'visible';
	var storageRef = storage.ref();
	var regno = document.getElementById('regid').value;
	if (regno.length < 5) {
		console.log(regno.length);
		document.getElementById('datalink').innerHTML = '';
		document.getElementById('datalink').style.visibility = 'hidden';
		document.getElementById('errorlink').innerHTML = 'Please enter your email correctly';
		document.getElementById('errorlink').style.visibility = 'visible';
		document.getElementById('progress').style.visibility = 'hidden';
		return;
	}
	var filepath = 'Ethical//' + regno + '.pdf';
	var pathReference = storage.ref(filepath);

	storageRef
		.child(filepath)
		.getDownloadURL()
		.then(function(url) {
			document.getElementById('datalink').innerHTML = 'Download Certificate';
			document.getElementById('datalink').href = url;
			document.getElementById('datalink').style.visibility = 'visible';
			document.getElementById('errorlink').style.visibility = 'hidden';
			document.getElementById('progress').style.visibility = 'hidden';
			console.log('FOUND IT BABY!');
		})
		.catch(function(error) {
			document.getElementById('datalink').innerHTML = '';
			document.getElementById('datalink').style.visibility = 'hidden';
			document.getElementById('errorlink').innerHTML =
				"Hey! We couldn't find any certificate with this email. Make sure you have entered it correctly. Contact us if you think it's our fault.";
			document.getElementById('errorlink').style.visibility = 'visible';
			document.getElementById('progress').style.visibility = 'hidden';
			console.log('OOPS!');
		});
}

//BCAICerts
function dod1() {
	document.getElementById('progress').style.visibility = 'visible';
	var storageRef = storage.ref();
	var regno = document.getElementById('regid').value;
	if (regno.length < 5) {
		console.log(regno.length);
		document.getElementById('datalink').innerHTML = '';
		document.getElementById('datalink').style.visibility = 'hidden';
		document.getElementById('errorlink').innerHTML = 'Please enter your email correctly';
		document.getElementById('errorlink').style.visibility = 'visible';
		document.getElementById('progress').style.visibility = 'hidden';
		return;
	}
	var filepath = 'BC-AI//' + regno + '.pdf';
	var pathReference = storage.ref(filepath);

	storageRef
		.child(filepath)
		.getDownloadURL()
		.then(function(url) {
			document.getElementById('datalink').innerHTML = 'Download Certificate';
			document.getElementById('datalink').href = url;
			document.getElementById('datalink').style.visibility = 'visible';
			document.getElementById('errorlink').style.visibility = 'hidden';
			document.getElementById('progress').style.visibility = 'hidden';
			console.log('FOUND IT BABY!');
		})
		.catch(function(error) {
			document.getElementById('datalink').innerHTML = '';
			document.getElementById('datalink').style.visibility = 'hidden';
			document.getElementById('errorlink').innerHTML =
				"Hey! We couldn't find any certificate with this email. Make sure you have entered it correctly. Contact us if you think it's our fault.";
			document.getElementById('errorlink').style.visibility = 'visible';
			document.getElementById('progress').style.visibility = 'hidden';
			console.log('OOPS!');
		});
}

//ADCerts
function dod2() {
	document.getElementById('progress').style.visibility = 'visible';
	var storageRef = storage.ref();
	var regno = document.getElementById('regid').value;
	if (regno.length < 5) {
		console.log(regno.length);
		document.getElementById('datalink').innerHTML = '';
		document.getElementById('datalink').style.visibility = 'hidden';
		document.getElementById('errorlink').innerHTML = 'Please enter your email correctly';
		document.getElementById('errorlink').style.visibility = 'visible';
		document.getElementById('progress').style.visibility = 'hidden';
		return;
	}
	var filepath = 'DevOps//' + regno + '.pdf';
	var pathReference = storage.ref(filepath);

	storageRef
		.child(filepath)
		.getDownloadURL()
		.then(function(url) {
			document.getElementById('datalink').innerHTML = 'Download Certificate';
			document.getElementById('datalink').href = url;
			document.getElementById('datalink').style.visibility = 'visible';
			document.getElementById('errorlink').style.visibility = 'hidden';
			document.getElementById('progress').style.visibility = 'hidden';
			console.log('FOUND IT BABY!');
		})
		.catch(function(error) {
			document.getElementById('datalink').innerHTML = '';
			document.getElementById('datalink').style.visibility = 'hidden';
			document.getElementById('errorlink').innerHTML =
				"Hey! We couldn't find any certificate with this email. Make sure you have entered it correctly. Contact us if you think it's our fault.";
			document.getElementById('errorlink').style.visibility = 'visible';
			document.getElementById('progress').style.visibility = 'hidden';
			console.log('OOPS!');
		});
}
