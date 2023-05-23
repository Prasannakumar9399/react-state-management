import './ChildC.css';
import { data, data1 } from "../App";
import { useContext } from 'react';

const ChildC = () => {

    const name = useContext(data);
    const gender = useContext(data1);

    return (<div>
        <h3>Child C Component</h3>
        <h1>By useContext :- {name} and sex is {gender}</h1>
        <data.Consumer>
            {
                (name) => {
                    return (<data1.Consumer>
                        {
                            (gender) => {
                                return (
                                    <h1>My name is {name} and gender is {gender}.</h1>
                                )
                            }
                            }
                    </data1.Consumer>)
                }}
        </data.Consumer>
    </div>)
}

export default ChildC;