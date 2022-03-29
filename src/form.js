import React from "react";

export default function Form(props) {
    const { values, update, submit } = props

    const onChange = evt =>{
        const name = evt.target.name;
        const { value } = evt.target;
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit()
    }

    return (
        <form className="form container" onSubmit={onSubmit}>
            <div className="form-group inputs">
                {/* ////////// TEXT INPUTS ////////// */}
                {/* ////////// TEXT INPUTS ////////// */}
                {/* ////////// TEXT INPUTS ////////// */}
                <label>Username
                    <input
                        type='text'
                        name='username'
                        value={values.username}
                        placeholder='type a username...'
                        maxLength='30'
                        onChange={onChange}
                    />
                </label>
                <label>Email
                    <input
                        type="email"
                        name="email"
                        value={values.email}
                        placeholder="Type an email..."
                        onChange={onChange}
                    />
                </label>
                <label>Role
                    <select value={values.role} name='role' onChange={onChange}>
                        <option value=''>--Select a role--</option>
                        <option value='backend'>Backend</option>
                        <option value='frontend'>Frontend</option>
                    </select>
                </label>
                <div className="submit">
                    <button>submit</button>
                </div>
            </div>
        </form>
    )
}