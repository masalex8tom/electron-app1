window.addEventListener('DOMContentLoaded', ()=>{
    const replaceContent = (selector, text) => {
        const el = document.querySelector(selector)
        if (el) el.innerHTML = text
    }

    for (const dependency of ['chrome', 'node', 'electron']){
        replaceContent(`${dependency}-version`, proscess.version[dependency])
    }

})