document.addEventListener('DOMContentLoaded', function () {
    loadContentFromFile('header.txt', 'headerContent');
    loadContentFromFile('footer.txt', 'footerContent');
});

function loadContentFromFile(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.log('Error loading file:', error));
}

function loadContent(file) {
    document.getElementById('contentFrame').src = file;
}
