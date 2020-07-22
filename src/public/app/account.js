function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile()
    console.log(" user is " + JSON.stringify(profile))
    var userinfo = document.querySelector('#userinfo')
    userinfo.innerText = profile.getGivenName()
    var image = document.createElement('img')
    image.setAttribute('src', profile.getImageUrl())
    userinfo.append(image)


    // this part changes Acoount to username
    const account_name = document.querySelector('#account')
    console.log(account_name.innerText)
    account_name.innerText = profile.getGivenName()
}


function signout() {
    gapi.auth2.getAuthInstance().signOut().then(() => {
        console.log("user signed out")
        userinfo.innerText = ""
    })
}
