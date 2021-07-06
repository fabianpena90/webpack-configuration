import '../css/componentes.css'
// import webpackLogo from '../assets/img/webpack-logo.png'


export const saludar = (nombre = 'Sin Nombre') => {
    console.log('creandp h1')

    const h1 = document.createElement('h1')
    h1.innerText = `Hola ${nombre} Peña Torrado`
    document.body.append(h1)

    // const img = document.createElement('img')
    // img.src = webpackLogo
    // document.body.append(img)
}