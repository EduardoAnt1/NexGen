function loginForm()
{
    let login = document.getElementById("login_form")   
    login.style.pointerEvents = 'all'
    login.style.opacity = '1'    
    
    setTimeout(() => {
        document.body.onclick = (e) =>
        {
            if(e.target != login && !login.contains(e.target) && e.target != document.getElementById("sign_in") && e.target != document.getElementById("sign_up"))
            {
                login.style.opacity = '0'        
                login.style.pointerEvents = 'none'
                document.body.onclick = null
            }
        }    
    }, 10)    
}

function switchForm(code)
{
    let log = document.querySelector('#form_log')
    let cad = document.querySelector('#form_cad')

    log.style.display = code ? '' : 'none'
    cad.style.display = code ? 'none' : ''
}

function changeIndexUlHighlight(code)
{
    let ul = document.getElementById('index-ul') 
    let home = ul.children[0];
    let sobre = ul.children[1];    
    if (code)
    {
        home.children[0].classList.remove('active')
        sobre.children[0].classList.add('active')
    }
    else
    {
        sobre.children[0].classList.remove('active')
        home.children[0].classList.add('active')
    }
}

if (location.hash != '')
{    
    changeIndexUlHighlight(1)
}