import './styles.css'
import Img from './rule2.jpeg'
export const App = () => {
    return (
        <>
            <h1>
                Hello react template {process.env.NODE_ENV} : {process.env.name}
            </h1>
            <img src={Img} alt="my rule" width="300" height="300" />
        </>
    )
}
