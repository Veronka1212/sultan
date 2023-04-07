import style from '../sass/helppages.module.scss';
import error from '../assets/img/404_error.png';

const NotFound = () => {
    return (
        <div className="wrapper" data-testid="not-found">
            <div className="_container">
                <div className={style.main}>
                    <div className={style.block}>
                        <h1 className={style.block_text}>Такой страницы не существует!</h1>
                        <img className={style.image} src={error} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound;