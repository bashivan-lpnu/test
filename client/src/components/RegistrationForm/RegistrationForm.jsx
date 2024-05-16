import MyInput from "../UI/input/MyInput";
import classes from './RegistrationForm.module.css';
import MyButton from "../UI/button/MyButton";
import {useInput} from "../../hooks/useInput";

const RegistrationForm = (proms) => {

    const name = useInput('', {isEmpty: true, minLength: 3});
    const email = useInput('', {isEmpty: true, isEmail: true});
    const date = useInput('', {isEmpty: true, isCorrectBirthdate: true});
    const where_hear = useInput('', {isEmpty: true});

    const submitHandler = async (e) => {
        e.preventDefault();
        if(!name.isEmpty && !email.isEmpty && !date.isEmpty && !where_hear.isEmpty) {
            proms.onSubmit({name: name.value, email: email.value, birthdate: date.value, where_hear: where_hear.value});
        }
    }

    return (
        <form className={classes.form}>
            <label htmlFor="name">Name:</label>
            {(name.isDirty && name.isEmpty) && <div style={{color: 'red'}}>This field is required</div>}
            {(name.isDirty && !name.minLength) && <div style={{color: 'red'}}>Name must be at least 4 characters</div>}
            <MyInput id="name" value={name.value}
                     onChange={e => name.onChange(e.target.value)}
                     onBlur={e => name.onBlur(e)}
            />

            <label htmlFor="email">Email:</label>
            {(email.isDirty && email.isEmpty) && <div style={{color: 'red'}}>This field is required</div>}
            {(email.isDirty && !email.isEmail) && <div style={{color: 'red'}}>Email is not valid</div>}
            <MyInput id="email" value={email.value}
                     onChange={e => email.onChange(e.target.value)}
                     onBlur={e => email.onBlur(e)}
            />

            {(date.isDirty && date.isEmpty) && <div style={{color: 'red'}}>This field is required</div>}
            {(date.isDirty && !date.isCorrectBirthdate) && <div style={{color: 'red'}}>Date is not valid</div>}
            <label htmlFor="date">Date of birth:</label>
            <MyInput id="date" type="date" value={date.value}
                     onChange={e => date.onChange(e.target.value)}
                     onBlur={e => date.onBlur(e)}
            />

            <label>Where did you here about this event?</label>
            <div style={{display: "flex", gap: "5px"}}>
                <MyInput type={"radio"} name={"source"} onChange={e => where_hear.onChange('Social media')}/>
                <label>Social media</label>
                <MyInput type={"radio"} name={"source"} onChange={e => where_hear.onChange('Friend')}/>
                <label>Friend</label>
                <MyInput checked type={"radio"} name={"source"} onChange={e => where_hear.onChange('Found myself')}/>
                <label>Found myself</label>
            </div>

            <MyButton type="submit" onClick={submitHandler}>Submit</MyButton>
        </form>
    );
};

export default RegistrationForm;