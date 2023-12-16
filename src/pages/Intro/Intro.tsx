import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const Intro: FC = () => {
    const navigate = useNavigate();

    return (
        <div className="text-center max-w-md m-auto">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary" onClick={() => navigate('practice')}>Start</button>
        </div>
    )
}

export default Intro;
