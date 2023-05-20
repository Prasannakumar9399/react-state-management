import './Child.css';

const Child = (props) => {

    let age = 27;

    const handleClick = () => {
        props.handlePrintAge(age);
    }

    return (<div>
        <h3>Child Component :- {props.childName} age is {age}</h3>
        <button onClick={handleClick}>Set Age</button>
    </div>)
}

export default Child;