import './ChildA.css';
import ChildB from './ChildB';

const ChildA = () => { 

    return (<div>
        <h3>Child A Component</h3>
         <ChildB></ChildB>
    </div>)
}

export default ChildA;