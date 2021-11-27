
import './App.css';
import { Link} from "react-router-dom";

function App4() {
  return (
      
    <div id="wrapper">
        {/* <!-- Page Wrapper--> */}

        {/* <!-- Sidebar--> */}
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand--> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
                <i class="fa fa-cogs" aria-hidden="true"></i>
            </div>
            
            <div className="sidebar-brand-text mx-3">Gestion de Producción </div>
        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider"/>

        {/* <!-- Heading --> */}
        {/* <li class="nav-item">
                <a class="nav-link" href="charts.html">
                <i class="fa fa-home" aria-hidden="true"></i>
                    <span>Home</span></a>
            </li>  */}
        {/* <!-- Nav Item - Charts --> */}
        <li className="nav-item">
            <Link to="/char" className="nav-link"> <i className="fas fa-fw fa-table"></i>
                <span>Gestion de Materias</span>
                </Link> 
        </li>

        {/* <!-- Nav Item - Tables --> */}
        <li className="nav-item">
            <Link to="/" className="nav-link"> <i className="fas fa-fw fa-chart-area"></i>
                <span>Reportes</span>
                </Link> 
            
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider d-none d-md-block"/>

        {/* <!-- Sidebar Toggler (Sidebar) --> */}
        <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle"></button>
        </div>

        {/* <!-- Sidebar Message --> */}
        <div className="sidebar-card d-none d-lg-flex">
            <img className="sidebar-card-illustration mb-2" src="img/logo-mision.png" alt="..."/>
            <p className="text-center mb-2"><strong>Proyecto ciclo4</strong> Equipo 4!</p>
            
        </div>

        </ul>
        {/* <!-- End of Sidebar --> */}

        {/* <!-- End of Sidebar--> */}

        {/* <!-- Content Wrapper--> */}
        <div id="content-wrapper" class="d-flex flex-column">

            {/* <!-- Main Content--> */}
            <div id="content">

                {/* <!-- Topbar--> */}
                <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                    {/* <!-- Sidebar Toggle (Topbar)--> */}
                    <form class="form-inline">
                        <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                            <i class="fa fa-bars"></i>
                        </button>
                    </form>

                    {/* <!-- Topbar Search--> */}
                    <form
                        class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div class="input-group">
                            <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..."
                                aria-label="Search" aria-describedby="basic-addon2"/>
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button">
                                    <i class="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </form>

                    {/* <!-- Topbar Navbar--> */}
                    <ul class="navbar-nav ml-auto">

                        {/* <!-- Nav Item - Search Dropdown (Visible Only XS)--> */}
                        <li class="nav-item dropdown no-arrow d-sm-none">
                            <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-search fa-fw"></i>
                            </a>
                            {/* <!-- Dropdown - Messages--> */}
                            <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                aria-labelledby="searchDropdown">
                                <form class="form-inline mr-auto w-100 navbar-search">
                                    <div class="input-group">
                                        <input type="text" class="form-control bg-light border-0 small"
                                            placeholder="Search for..." aria-label="Search"
                                            aria-describedby="basic-addon2"/>
                                        <div class="input-group-append">
                                            <button class="btn btn-primary" type="button">
                                                <i class="fas fa-search fa-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>

                        

                        <div class="topbar-divider d-none d-sm-block"></div>

                        {/* <!-- Nav Item - User Information--> */}
                        <li class="nav-item dropdown no-arrow">
                            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="mr-2 d-none d-lg-inline text-gray-600 small">Usuario</span>
                                <img class="img-profile rounded-circle"
                                    src="img/undraw_profile.svg"/>
                            </a>
                            {/* <!-- Dropdown - User Information--> */}
                            <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="userDropdown">
                                <a class="dropdown-item" href="#">
                                    <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Profile
                                </a>
                                
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Logout
                                </a>
                            </div>
                        </li>

                    </ul>

                </nav>
                {/* <!-- End of Topbar--> */}

                {/* <!-- Begin Page Content--> */}
                <div class="container-fluid">

                    {/* <!-- Page Heading--> */}
                    <h1 class="h3 mb-2 text-gray-800">Gestion de Materias</h1>
                

                    {/* <!-- DataTales Example--> */}
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary"></h6>
                        </div>
                        <div className="card-body">
                        <form className="materia">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Descripcion</th>
                                        <th>Unidad de medida</th>
                                        <th>Cantidad</th>
                                            
                                    </tr>
                                </thead>
                                    
                                <tbody>
                                    <tr>
                                        <td><input type="text" className="form-control form-control-materia" id="exampleName"
                                        placeholder="Nombre"/>
                                    </td>
                                            <td><input type="text" className="form-control form-control-materia" id="exampledescripcion"
                                            placeholder="Descripción"/>
                                    </td>
                                            <td><input type="text" className="form-control form-control-materia" id="exampleUMedida"
                                            placeholder="Unidad de medida"/>
                                    </td>
                                            <td><input type="text" className="form-control form-control-materia" id="exampleCantidad"
                                            placeholder="Cantidad"/>
                                    </td>
                                            
                                    </tr>
                                        
                                            
                                </tbody>
                                            
                            </table>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                                <a href="login.html" className="btn btn-primary btn-user btn-block">
                                        Crear</a>
                            </div>
                            <div className="col-sm-6">
                                <a href="#" className="btn btn-secondary btn-user btn-block">
                                            Borrar</a>
                            </div>
                        </div>
                
                        </form> 
                        </div>
                    </div>

                </div>
                {/* <!-- /.container-fluid--> */}
                {/* <!-- Begin Page Content--> */}
                <div className="container-fluid">

                    {/* <!-- DataTales Example--> */}
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Materia prima disponible</h6>
                        </div>
                        <div className="card-body">
                        <form className="materia1">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable1" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Descripcion</th>
                                        <th>Unidad de medida</th>
                                        <th>Cantidad</th>
                                        <th></th>
                                            
                                    </tr>
                                </thead>
                            
                                <tbody>
                                    <tr>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                        <td><a href="#" className="btn btn-warning btn-circle">
                                        <i className="fa fa-trash" ></i>
                                    </a></td>
                                    {/* <td>
                                    <a href="#" className="btn btn-danger btn-icon-split">
                                        <span className="icon text-white-50">
                                            <i className="fas fa-trash"></i>
                                        </span>
                                        <span className="text">Eliminar</span>
                                    </a></td> */}
                                            
                                    </tr>
                                        
                                            
                                </tbody>
                                            
                            </table>
                        </div>
                            
                        </form> 
                        </div>
                    </div>

                </div>
                {/* <!-- /.container-fluid--> */}

            </div>
            {/* <!-- End of Main Content--> */}

            {/* <!-- Footer--> */}
            <footer class="sticky-footer bg-white">
                <div class="container my-auto">
                    <div class="copyright text-center my-auto">
                        <span>Copyright &copy; Equipo 4 - 2021</span>
                    </div>
                </div>
            </footer>
            {/* <!-- End of Footer--> */}

        </div>
        
    </div>
    

    
  );
}

export default App4;
