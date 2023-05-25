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

    return <><div>Crear Usuario Para Ingresar al Foro</div>
        <form className="row" onSubmit={(e) => handleSubmit(e)}>
            <div className="col col-md-auto">
                <label htmlFor="nombre" className="form-label">Nombre de Usuario:</label>
                <div className="input-group has-validation">
                    <input type="text" className="form-control" id="id"
                        onChange={e => handleChange(e)} required maxLength="30" />
                </div>
            </div>

            <div className="col-12 mt-3">
                <button className="btn btn-secondary" type="button"
                    onClick={(e) => navigate(`/`)}>Cancelar</button>
                <button className="btn btn-primary ms-3" type="submit">Guardar</button>
            </div>
        </form>
    
    </>

}

export default CreateUser;