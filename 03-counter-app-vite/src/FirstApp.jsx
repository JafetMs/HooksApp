import PropTypes from 'prop-types'

const getResult = () => {
    return 4+4;
}
const newMessage = {
    mesagee: 'Hello World',
    title: 'Jafet'
}


export const FirstApp = ({ title,subTittle = "La tierra explota"} ) => {


  return (
    <>
        <h1>{title}</h1>
        <h2>{ subTittle }</h2>
        <h2>{getResult()}</h2>
        {/* <code>{ JSON.stringify( newMessage ) }</code> */}
        <p>Soy un Subtitulo</p>
    </>
  )
}


FirstApp.propTypes = {
    title: PropTypes.string.isRequired
}   


FirstApp.defaultProps = {
    title: 'PropDefault',
    
}