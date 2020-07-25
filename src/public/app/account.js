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
}


function signout() {
    gapi.auth2.getAuthInstance().signOut().then(() => {
        console.log("user signed out")
        userinfo.innerText = ""
        account_name.innerText = "Account"
    })
}
