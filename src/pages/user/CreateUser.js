import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../../context/mycontext";

function CreateUser() {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.id;
        setUser((userCurrent) => ({ ...userCurrent, [name]: value }));
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        if (event.target.checkValidity() === true) {
            navigate(`/foro`)
            const nombre = user.name;
            MyContext.userName = nombre;
            MyContext.profilePhoto = user.profilePhoto;
        }
    }

    return <><div className="card" style={{ backgroundColor: "#F3BD7C" }}>
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="row justify-content-md-center">
                <div className="col-md-8 mt-3">
                    <label htmlFor="name" className="form-label">Escribe tu nombre de usuario para ingresar al foro:</label>
                    <div className="input-group has-validation">
                        <input type="text" className="form-control" id="name" placeholder="Nombre de usuario" required maxLength="30"
                            onChange={e => handleChange(e)} />
                    </div>
                </div>   
            </div>
            <div className="row justify-content-md-center">
                <div className="col-md-8 mt-3">
                    <label htmlFor="name" className="form-label">Ingresa el URL de tu foto de perfil:</label>
                    <div className="input-group has-validation">
                        <input type="text" className="form-control" id="profilePhoto" placeholder="URL de imagen" required maxLength="400"
                            onChange={e => handleChange(e)} />
                    </div>
                </div>   
            </div>

            <div className="row justify-content-md-center text-center">
                <div className="col-md-auto mt-3 mb-3">
                    <button className="btn btn-primary" type="submit">Ingresar</button>
                </div>
            </div>
        </form>
    </div>
    </>

}

export default CreateUser;