// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
{
    const top = window.scrollY;
    if(top >=-0) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}


function scrollDown() {
    var target = document.querySelector("#news");
    target.scrollIntoView({ behavior: "smooth", block: "start" });
}

document.querySelector('.intro-scrolldown').addEventListener('click', function(event) {
    event.preventDefault();
    scrollDown();
});


const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        // Close the modal
        // resumeModal.style.display = 'none';
        modal.style.display = "none";
        // Toggle the collapse menu
        new bootstrap.Collapse(menuToggle).toggle();
    });
});




// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Function to open modal with project details and GIF
function openModal(title, descriptionId, gifSrc) {
    var descriptionElement = document.getElementById(descriptionId);
    document.getElementById("modal-description").innerHTML = '<img src="' + gifSrc + '" alt="Project GIF">' +
                                                             '<h2>' + title + '</h2>' +
                                                             descriptionElement.innerHTML;
    modal.style.display = "block";
}

// Close modal when clicking on the close button
span.onclick = function() {
    modal.style.display = "none";
}

document.getElementById("project1").addEventListener("click", function() {
    openModal("State Crime Analysis and Safety Prediction", "description1", "img/crimerate.gif");
});
document.getElementById("project2").addEventListener("click", function() {
    openModal("Wikipedia API Scraping", "description2", "img/wiki-scrapping.gif");
});

document.getElementById("project3").addEventListener("click", function() {
    openModal("Boolean Query and Inverted Index", "description3", "img/boolean.gif");
});
document.getElementById("project4").addEventListener("click", function() {
    openModal("Global Super Store - CRUD APP", "description4", "img/virtual-supermarket.gif");
});
document.getElementById("project5").addEventListener("click", function() {
    openModal("Computer Architecture 8-bit Processor", "description5", "img/8bit.gif");
});
document.getElementById("project6").addEventListener("click", function() {
    openModal("Health Care Application", "description6", "img/healthcare.gif");
});




var resumeModal = document.getElementById('resumeModal');


var resumeLink = document.getElementById('resumeLink');

// Get the <span> element that closes the modal
var closeBtn = document.querySelector("#resumeModal .close1");



// When the user clicks on the resume link, open the modal
resumeLink.onclick = function() {
    resumeModal.style.display = 'block';
}

// When the user clicks on the close button, close the modal
closeBtn.onclick = function() {
    resumeModal.style.display = 'none';
}

window.onclick = function(event) {
    // Check if the click target is the resumeModal
    if (event.target == resumeModal) {
        resumeModal.style.display = 'none';
    }
    // Check if the click target is the modal
    else if (event.target == modal) {
        modal.style.display = "none";
    }
}
