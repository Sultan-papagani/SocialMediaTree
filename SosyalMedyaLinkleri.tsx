import style from "../../styles/odevler/SosyalMedyaLinkleri.module.css"
import profilFoto from "../../../public/avatar-jessica.jpeg"
import { useNavigate } from 'react-router-dom' 

function SosyalMedyaLinkleri(){

    const navigate = useNavigate();

    const handleGoBack = () => {
        if (window.history.length > 1 && document.referrer) {
          navigate(-1);
        } else {
          navigate('/Odevler'); // Navigate to the home page
        }
    };

    return (
        <div className={style.root}>
            <div className={style.rootContainer}>
                <div className={style.card}>
                    <img src={profilFoto} className={style.profilFoto} />
                    <h1>Jessica Randal</h1>
                    <p className={style.location}>London, United Kingdom</p>
                    <p className={style.m1}>"Front-end developer and avif reader."</p>
                    <button className={style.shareButton}>GitHub</button>
                    <button className={style.shareButton}>Frontend Mentor</button>
                    <button className={style.shareButton}>LinkedIn</button>
                    <button className={style.shareButton}>Twitter</button>
                    <button className={style.shareButton}>Instagram</button>
                </div>
                <br />
                <p>react+vite templatesi font kısmında baya batırmış bence, bende font ayarlaması ile uğraşmadım bütün site artık 'Inter' oldu</p>
                <a onClick={handleGoBack}>Geri Git</a>
            </div>
        </div>
    );
}

export default SosyalMedyaLinkleri;