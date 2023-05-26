import { useState } from "react";
import { useNavigate } from "react-router-dom";
import htttpClient from "../../services/httpClient";

function CreateUser() {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.id;
        setUser((nameCurrent) => ({ ...nameCurrent, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (event.target.checkValidity() == true) {
            navigate(`/foro`)
            // htttpClient.post(`/usuario`, user)
            //     .then(() => {
            //         navigate(`/foro`)
            //     })
        }
    }

    return <><div className="card" style={{ backgroundColor: "#F3BD7C" }}>
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="row justify-content-md-center">
            <div className="col-md-6 mt-3">
                <label htmlFor="nombre" className="form-label">Escribe tu nombre de usuario para ingresar al foro:</label>
                <div className="input-group has-validation">
                    <input type="text" className="form-control" id="id" placeholder="Nombre"
                        onChange={e => handleChange(e)} required maxLength="30" />
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