const loadlogin = function(){
    const btnLogin = document.querySelector('.btn')
    btnLogin.addEventListener('click', function(){
    User.save(document.querySelector('.name').value)
        window.location.href = 'index.html'
    })
}

const logOut = function(){
    User.remove()
    window.location.href = 'login.html'
}

const showUSername = function(){
    const username =document.querySelector('.username')
    const usernameText = document.createTextNode(User.get() || 'Anonimo')
    username.appendChild(usernameText)
}

const init = function(){
    document.querySelector('.logout').addEventListener('click',logOut)
    showUSername()
}

class User {
    constructor (){
    }
    
    static getKey(){
        const KEY = 'username'
        return KEY
    }

    static save(user){
        localStorage.setItem(User.getKey(), user)
    }
    
     static get(){
        return localStorage.getItem(User.getKey())
    }
    
    static remove(){
        localStorage.removeItem(User.getKey())
    }
}