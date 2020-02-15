	function toggleDarkLight() {

                // singlepage

  		var body = document.getElementById("body");
  		var currentClass = body.className;
                  if (localStorage.getItem('mode') == currentClass) {
                          body.className = "dark-mode"; 
                          localStorage.setItem('mode', 'dark-mode');
                  } else if (localStorage.getItem('mode') != currentClass) {
                         body.className = "light-mode"; 
                         localStorage.setItem('mode', 'light-mode');
                  }

                // body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";  
        
                

                // localStorage.setItem('mode', 'dark-mode');

        // localStorage.setItem('mode', (localStorage.getItem('mode') || 'dark-mode') === 'dark-mode' ? 'light-mode' : 'dark-mode'); 
        // localStorage.getItem('mode') === 'dark-mode' ? document.querySelector('body').classList.add('dark-mode') : document.querySelector('body').classList.remove('dark-mode');

        // document.getElementsByClassName("float").addEventListener('DOMContentLoaded', (event) => {
        //     ((localStorage.getItem('mode') || 'dark-mode') === 'dark-mode') ? document.querySelector('body').classList.add('dark-mode') : document.querySelector('body').classList.remove('dark-mode')
        //   })


          	// var body = document.getElementById("body");
  		// var currentClass = body.className;
                // body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";

	}
