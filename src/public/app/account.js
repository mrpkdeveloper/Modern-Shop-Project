const account_name = document.querySelector('#account')

function onSignIn(googleUser) {
    profile = googleUser.getBasicProfile()
    console.log(" user is " + JSON.stringify(profile))
    var userinfo = document.querySelector('#userinfo')
    userinfo.innerText = "Welcome To Our site, " + profile.getGivenName()
    var image = document.createElement('img')
    image.setAttribute('src', profile.getImageUrl())
    userinfo.append(image)

    // this part changes Acoount to username
    console.log(account_name.innerText)
    account_name.innerText = profile.getGivenName()

    //add info about user in cart
    adduser(profile.getGivenName(), profile.getEmail(), function (p) {
        // console.log(p)
        if (p.name == 'SequelizeUniqueConstraintError') {
            window.alert("user already exit")
        } else {
            window.alert(p.name + " new user created")
        }
    })
}


function signout() {
    gapi.auth2.getAuthInstance().signOut().then(() => {
        console.log("user signed out")
        userinfo.innerText = ""
        account_name.innerText = "Account"
    })
}

