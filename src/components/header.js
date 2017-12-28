import React,{Component} from 'react';
import HLogo from '../assets/img/home_logo.png';
import WNLogo from '../assets/img/wn_logo.jpg';

class Header extends Component{
 constructor(props) {
     super(props);

     this.state = {
         term:''
     };
 }

 render () {
     return(
       <div>
           <nav className="navbar navbar-default">
               <div className="container-fluid">
                   <div className="navbar-header">
                       <a className="navbar-brand" href="#">WhereNow</a>
                   </div>
                   <ul className="nav navbar-nav">
                       <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Actividades<span className="caret"></span></a>
                           <ul className="dropdown-menu activities-menu">
                               <div className="col-md-6">
                                   <li><a href="#">Page 1-1</a></li>
                                   <li><a href="#">Page 1-2</a></li>
                                   <li><a href="#">Page 1-3</a></li>
                               </div>
                               <div className="col-md-6">
                                   <li><a href="#">Page 1-1</a></li>
                                   <li><a href="#">Page 1-2</a></li>
                                   <li><a href="#">Page 1-3</a></li>
                               </div>
                           </ul>
                       </li>
                   </ul>
               </div>
           </nav>
       </div>
     );
 }
}

export default Header;