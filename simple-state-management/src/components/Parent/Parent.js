import './Parent.css';
import Child from '../Child/Child'

const Parent = () => {

    const name = "Prasannakumar Jha";

    const printAge = (age) =>{
        console.log(age);
    }

    return (<div>
        <h3>Parent Component</h3>
        <Child childName={name} handlePrintAge={printAge}></Child>
    </div>)
}

export default Parent;