
import './App.css';
import { Link} from "react-router-dom";

function App2() {
  return (
      
    <div className="container">
        
        {/* <!-- Outer Row --> */}
        <div className="row justify-content-center">

            <div className="col-xl-10 col-lg-12 col-md-9">

                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        {/* <!-- Nested Row within Card Body --> */}
                        <div className="row">
                            <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Login</h1>
                                    </div>
                                    <form className="user">
                                        <div className="form-group">
                                            <input type="email" className="form-control form-control-user"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Usuario"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control form-control-user"
                                                id="exampleInputPassword" placeholder="Contraseña"/>
                                        </div>
                                        
                                        <a href="index.html" className="btn btn-primary btn-user btn-block">
                                            Login
                                        </a>
                                        <a href="index.html" className="btn btn-primary btn-user btn-block"><i class="fa fa-home" aria-hidden="true"></i>
                                            Home
                                        </a>
                                    
                                    </form>
                                    <hr/>
                                       
                                    <div className="text-center">
                                        <Link to="/register" className="sidebar" className="small"> Crear una Cuenta!
                                        </Link>  
                                        {/* <a className="small" href="register.html">Create an Account!</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>

    
  );
}

export default App2;
