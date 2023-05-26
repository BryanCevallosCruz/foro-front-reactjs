import { useState } from "react";
import { useNavigate } from "react-router-dom";
import htttpClient from "../../services/httpClient";

function CreateComment() {
    const [comment, setComment] = useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.id;
        setComment((nameCurrent) => ({ ...nameCurrent, [name]: value }));
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

    return <><div>Foro</div>
        <form className="row" onSubmit={(e) => handleSubmit(e)}>
            <div className="col col-md-auto">
                <label htmlFor="commentario" className="form-label">Comentario:</label>
            </div>
            <div className="col-6">
                <div className="input-group has-validation">
                    <input type="text" className="form-control" id="id"
                        onChange={e => handleChange(e)} required maxLength="200" />
                </div>
            </div>
            <div className="col-3">
            <button className="btn btn-primary ms-3" type="submit">Enviar</button>
            </div>
            <div className="col-12 mt-3">
                <button className="btn btn-secondary" type="button"
                    onClick={(e) => navigate(`/`)}>Cancelar</button>
                <button className="btn btn-primary ms-3" type="submit">Guardar</button>
            </div>
        </form>
    
    </>

}

export default CreateComment;