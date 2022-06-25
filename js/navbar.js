var div=document.createElement('div')
div.classList.add('navbar')
div.innerHTML="<a href='index.html'>Home</a><a href='accordionPanel.html'>Accordion Panel</a><a href='ajaxGet.html'>AJAX 1</a><a href='ajaxGet2.html'>AJAX 2</a><a href='ajaxPost.html'>AJAX 3</a><a href='grid.html'>Custom Grid</a><a href='validation.html'>Form Validator</a><a href='modal.html'>Custom Modal</a>"
var body=document.getElementsByTagName('body')[0]
body.appendChild(div)
