//LAB 1-1: SIMPLE ROUTING WITH THE LOCATION OBJECT

//#### CONTENT FOR HOME PAGE ==== - BACKGROUND IS white
var contentHome = "<h3>Welcome to our website!</h3>";
contentHome += "<p>We have many wonderful products that you might be interested in for 2024.</p>";
//==== END OF CONTENT FOR HOME PAGE ####

//#### CONTENT FOR PRODUCTS PAGE ====  - BACKGROUND IS red
var contentProducts = "<h3>Our Top 5 Products</h3>";
contentProducts += "<ol><li>Computers</li><li>Hard Drives</li><li>USB Drives</li><li>Backup Drives</li><li>Printers</li></ol>";
//==== END OF CONTENT FOR PRODUCTS PAGE #### 

//#### CONTENT FOR ABOUT US PAGE ==== - BACKGROUND IS green
var contentAbout = "<h3>About Computer Corp</h3>";
contentAbout += "<p>We have been around a long time, so we know what we're doing.</p>";
contentAbout += "<p><h4>Customer Feedback</h4><q>You're the only computer company I trust</q>&mdash;Ernst Blofeld</p>";
//==== END OF CONTENT FOR ABOUT US PAGE ####

const pageTitle = document.getElementById("pageTitle");
const output = document.getElementById('output');
const mainContent = document.getElementById('mainContent');

window.onload = function() {
    let location = window.location;
    

    if(location.search === '?home'){
        console.log(location.search);
        pageTitle.innerHTML = 'Home Page';
        output.innerHTML = contentHome;
        mainContent.style.background = 'white';
    } else if(location.search === '?products'){
        pageTitle.innerHTML = 'Products';
        output.innerHTML = contentProducts;
        mainContent.style.background = 'red';
    } else if(location.search === '?about'){
        pageTitle.innerHTML = 'About';
        output.innerHTML = contentAbout;
        mainContent.style.background = 'green';
    }
}

