
import './App.css';
import { Link} from "react-router-dom";

function App3() {
  return (
      
    <div className="container">

        <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
                {/* <!-- Nested Row within Card Body--> */} 
                <div className="row">
                    <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                    <div className="col-lg-7">
                        <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Crear una Cuenta!</h1>
                            </div>
                            <form className="user">
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-user" id="exampleUser"
                                        placeholder="Usuario"/>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <input type="password" className="form-control form-control-user"
                                            id="exampleInputPassword" placeholder="Contraseña"/>
                                    </div>
                                    <div className="col-sm-6">
                                        <input type="password" className="form-control form-control-user"
                                            id="exampleRepeatPassword" placeholder="Repetir Contraseña"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                                        placeholder="Correo Electronico"/>
                                </div>
                                
                                <a href="login.html" className="btn btn-primary btn-user btn-block">
                                    Registrar cuenta
                                </a>
                                <a href="index.html" className="btn btn-primary btn-user btn-block"><i class="fa fa-home" aria-hidden="true"></i>
                                            Home
                                        </a>
                                
                            </form>
                            <hr/>
                            
                            <div className="text-center">
                                <Link to="/login" className="sidebar" className="small"> Ya tiene una cuenta? Login!
                                </Link>
                                {/* <a className="small" href="login.html">Already have an account? Login!</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    
  );
}

export default App3;
