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

    return <>
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-8">
                    <div className="input-group has-validation">
                        <input type="text" className="form-control" id="id" placeholder="Ingrese su comentario"
                            onChange={e => handleChange(e)} required maxLength="200" />
                    </div>
                </div>
                <div className="col-auto mb-3">
                    <button className="btn btn-success" type="submit">Enviar</button>
                </div>
            </div>
            </div>
        </form>

    </>

}

export default CreateComment;