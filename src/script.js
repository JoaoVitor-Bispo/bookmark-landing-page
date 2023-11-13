const features = [...document.querySelector('.js-features').children]
const featuresTitle = document.querySelector('.js-featuresTitle')
const featuresContent = document.querySelector('.js-featuresContent')
const featuresImage = document.querySelector('.js-featuresImage')
const questions = [...document.querySelectorAll('.js-questions')]

features.map((feature, index) => {
    feature.addEventListener('click', e => {
        feature == e.target ? feature.classList.add('selected') : feature.classList.remove('selected')

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
