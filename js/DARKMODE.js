	// function toggleDarkLight() {

        //         singlepage

  	// 	var body = document.getElementById("body");
  	// 	var currentClass = body.className;
        //           if (localStorage.getItem('mode') == currentClass) {
        //                   body.className = "dark-mode"; 
        //                   localStorage.setItem('mode', 'dark-mode');
        //           } else if (localStorage.getItem('mode') != currentClass) {
        //                  body.className = "light-mode"; 
        //                  localStorage.setItem('mode', 'light-mode');
        //           }

        //         body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";  
        
                

        //         localStorage.setItem('mode', 'dark-mode');

        // localStorage.setItem('mode', (localStorage.getItem('mode') || 'dark-mode') === 'dark-mode' ? 'light-mode' : 'dark-mode'); 
        // localStorage.getItem('mode') === 'dark-mode' ? document.querySelector('body').classList.add('dark-mode') : document.querySelector('body').classList.remove('dark-mode');

        // document.getElementsByClassName("float").addEventListener('DOMContentLoaded', (event) => {
        //     ((localStorage.getItem('mode') || 'dark-mode') === 'dark-mode') ? document.querySelector('body').classList.add('dark-mode') : document.querySelector('body').classList.remove('dark-mode')
        //   })


        //   	var body = document.getElementById("body");
  	// 	var currentClass = body.className;
        //         body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";

	// }
        var options = {
                bottom: '32px', // default: '32px'
                right: 'unset', // default: '32px'
                left: '32px', // default: 'unset'
                time: '0.3s', // default: '0.3s'
            //     mixColor: '#fff', // default: '#fff'
            //      backgroundColor: '#4D4D4D',  // default: '#fff'
                buttonColorDark: '#100f2c',  // default: '#100f2c'
                buttonColorLight: '#fff', // default: '#fff'
                saveInCookies: true, // default: true,
                label: '', // default: ''
            //     autoMatchOsTheme: true // default: true
              }
              
              var darkmode = new Darkmode(options);
              darkmode.showWidget();
            //   darkmode.toggle();  
            //   console.log(darkmode.isActivated());
              
            //   if(darkmode.isActivated() === false){
            //     document.getElementById("light-mode").style.display="none";
            //     document.getElementById("dark-mode").style.display="block";
            //   }
            //   if(darkmode1.isActivated() === true){
            //     document.getElementById("light-mode").style.display="block";
            //     document.getElementById("dark-mode").style.display="none";
            //   }
            