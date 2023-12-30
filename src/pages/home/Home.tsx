import { FC } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import useStore from '../../hooks/useStore';

const Home: FC = () => {
    const navigate = useNavigate();
    const [state] = useStore();

    return (
        <div className="flex flex-col gap-6 text-center">
            <h1 className="text-5xl font-bold">Let's Practice!</h1>

            {
                state.operators.length === 0 && (
                    <div role="alert" className="alert shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                        <div>
                            You must choose at least one operator in the <Link to="/settings" className="link link-info">settings page</Link>.
                        </div>
                    </div>
                )
            }

            <div>
                <button disabled={state.operators.length === 0} className="btn btn-primary" onClick={() => navigate('practice')}>Start</button>
            </div>
        </div>
    )
}

export default Home;
