function component() {
    const element = document.createElement('div')
    const array = ['hello', 'world']
    element.innerHTML = _.join(array, ' ')
    return element;
}

document.body.appendChild(component())
