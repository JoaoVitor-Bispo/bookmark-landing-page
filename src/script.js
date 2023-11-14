const features = [...document.querySelector('.js-features').children]
const featuresTitle = document.querySelector('.js-featuresTitle')
const featuresContent = document.querySelector('.js-featuresContent')
const featuresImage = document.querySelector('.js-featuresImage')
const questions = [...document.querySelectorAll('.js-questions')]
const menu = document.querySelector('.js-menu')
const mobileNav = document.querySelector('.js-mobileNav')

let menuImage = false

menu.addEventListener('click', e => {
    menuImage === false ? menuImage = true : menuImage = false
    mobileNav.classList.toggle('hidden')

    if(menuImage == true) {
        menu.children[0].src = `../images/icon-close.svg`
        document.querySelector('.js-firstSection').style.opacity = '0.6'
        return false
    }

    menu.children[0].src = `../images/icon-hamburger.svg`
    document.querySelector('.js-firstSection').style.opacity = '1'
})

features.map((feature, index) => {
    feature.addEventListener('click', e => {
        [...e.target.parentNode.children].forEach(children => children == e.target ? children.classList.add('selected') : children.classList.remove('selected'))

        if(index == 0) {
            featuresTitle.innerHTML = `BookMark in one click`

            featuresContent.innerHTML = `Bookmark in one click Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.`

            featuresImage.src = `../images/illustration-features-tab-${index}.svg`
            
            return false
        }
        else if(index == 1) {
            featuresTitle.innerHTML = `Intelligent search`

            featuresContent.innerHTML = `Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.`

            featuresImage.src = `../images/illustration-features-tab-${index}.svg`

            return false
        }

        featuresTitle.innerHTML = `Share your bookmarks`

        featuresContent.innerHTML = `Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.`

        featuresImage.src = `../images/illustration-features-tab-${index}.svg`

    })
})

questions.forEach(questions => questions.addEventListener('click', e => e.target.parentNode.children[e.target.parentNode.children.length - 1].classList.toggle('hidden')))
