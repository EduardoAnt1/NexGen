function includeHTML() {
    let z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}

function loginForm() {
    let login = document.getElementById("login_form")
    login.style.pointerEvents = 'all'
    login.style.opacity = '1'

    setTimeout(() => {
        document.body.onclick = (e) => {
            if (e.target != login && !login.contains(e.target) && e.target != document.getElementById("sign_in") && e.target != document.getElementById("sign_up")) {
                login.style.opacity = '0'
                login.style.pointerEvents = 'none'
                document.body.onclick = null
            }
        }
    }, 10)
}

function switchForm(code) {
    let log = document.querySelector('#form_log')
    let cad = document.querySelector('#form_cad')

    log.style.display = code ? '' : 'none'
    cad.style.display = code ? 'none' : ''
}

function updateNavAnchors()
{
    let pageName = location.pathname    
    let navAnchors = document.getElementById('nav_anchors').getElementsByTagName('a')
    
    if (pageName.includes('index.html') || !pageName.includes('produto.html'))
    {
        navAnchors[0].href = '#'
        navAnchors[1].href = '#sobre'
        navAnchors[2].href = 'produto.html'
    }
    else if (pageName.includes('produto.html'))
    {
        navAnchors[0].href = 'index.html'
        navAnchors[1].href = 'index.html#sobre'
        navAnchors[2].href = '#'
    }
}

function appearOnScroll(e)
{
    if (window.innerWidth < 960)
        return 0;

    let casaIn = document.getElementById('casa_in')
    let sobre = document.getElementById('sobre')
    let propagandaDivs = document.getElementById('propaganda').querySelectorAll('div')            

    if (window.scrollY > 100)
        casaIn.style.opacity = '1'
    else 
        casaIn.style.opacity = `0`

    if (window.scrollY > 1000)
    {           
        sobre.style.transform = ''
        sobre.style.opacity = 1
    }
    else 
    {        
        sobre.style.transform = 'translate(0px, -30px)'
        sobre.style.opacity = 0
    }

    if (window.scrollY > 1500)
    {
        for (let i = 0; i < 3; i++)            
            propagandaDivs[i].style.transform = '', propagandaDivs[i].style.opacity = 1
    }
    else 
    {
        for (let i = 0; i < 3; i++)            
            propagandaDivs[i].style.transform = 'translate(-1000px, 0px)', propagandaDivs[i].style.opacity = 0
    }

    if (window.scrollY > 1900)
    {
        for (let i = 3; i < propagandaDivs.length; i++)            
            propagandaDivs[i].style.transform = '', propagandaDivs[i].style.opacity = 1
    }
    else 
    {
        for (let i = 3; i < propagandaDivs.length; i++) 
            propagandaDivs[i].style.transform = 'translate(1000px, 0px)', propagandaDivs[i].style.opacity = 0
    }

}

includeHTML()