// Initialize Firebase
var config = {
	// API KEY
};
firebase.initializeApp(config);

var uploader = document.getElementById('uploader');
var fileButton = document.getElementById('downloadButton');

// Ha rákattintunk a 'Download' gombra elkezdi a letöltést.
fileButton.addEventListener('click', function(e) {
	// A Storage referenciája.
	var storageRef = firebase.storage().ref();

	// Végigmegyünk az adatbázisban lévő fájlneveken.
	firebase.database().ref('files').orderByValue().on('value', function(snapshot) {
		// A 'files' object gyerekein végigmegyünk.
		snapshot.forEach(function(child) {
			// Kinyerjük a gyerek nevét.
			var filename = child.val();
			// A Storage 'files' mappájában lévő 'filename' nevű fájlra való hivatkozás.
			var filesRef = storageRef.child('files/' + filename);

			// Letöltjük az adott fájlra hivatkozó url-ről a fájlt.
			filesRef.getDownloadURL().then(function(url) {
				var link = document.createElement('a');
				link.download = filename;
				link.href = url;
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
				delete link;
			});
		});
	});
});