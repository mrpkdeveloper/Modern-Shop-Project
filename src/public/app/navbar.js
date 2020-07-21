let navlinks = $('.navbar a')

navlinks.click((ev) => {
    console.log($(ev.target).attr('data-component'))

    let componenturl = `/components/${$(ev.target).attr('data-component')}.html`
    $('#content').load(componenturl)
})

