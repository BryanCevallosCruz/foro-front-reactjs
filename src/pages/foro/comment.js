function Comment() {
    return<>
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-1">
                    Foto
                </div>
                <div className="col-5">
                    Nombre de Usuario
                </div>
                <div className="col-1">
                    <button className="btn btn-light btn-sm">
                        Editar
                    </button>
                </div>
                <div className="col-1">
                    <button className="btn btn-light btn-sm">
                        Eliminar
                    </button>
                </div>
                <div className="col-2">
                    Fecha
                </div>
            </div>

            <div className="row justify-content-md-center">
                <div className="col-9 offset-1">
                    Comentario del usuario
                </div>
            </div>
            <div className="row justify-content-md-center">
                <div className="col-9 offset-1">
                    <button className="btn btn-link btn-sm">
                        Editar
                    </button>
                </div>
            </div>




        </div>
    </>
}

export default Comment;