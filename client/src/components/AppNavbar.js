import React,{Component,Fragment} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
}  from 'reactstrap';
import { connect } from "react-redux";
import PropTypes, { object } from "prop-types";
import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
import Logout from './auth/Logout';

class AppNavbar extends Component {
    // constructor(props){
    //     super(props);
    //
    //     // this.toggle = this.toggle.bind(this);
    //     this.state={
    //        isOpen: false
    //     }
    // }
    state= {
        isOpen: false
    };
    
    static propTypes = {
        auth: PropTypes.object.isRequired
    }
     toggle =() => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        const{isAuthenticated,user}= this.props.auth;
        const authLinks =(
            <Fragment>
                <NavItem>
                   <span className="navbar-text mr-10">
                       <strong>{user? `Welcome ${user.name}`:''}</strong>
                   </span>
                </NavItem>
                <NavItem>
                    <Logout/>
                </NavItem>
            </Fragment>
        );
        const guestLinks =(
            <Fragment>
                 <NavItem>
                    <NavLink href ="http://google.com">
                        Google
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href ="http://youtube.com">
                        Youtube
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href ="http://gmail.com">
                        Gmail
                    </NavLink>
                </NavItem>   
               <NavItem>
                    <RegisterModal/>
                </NavItem>
                <NavItem>
                    <LoginModal/>
                </NavItem>
            </Fragment>
        );
        return(
            <div>
                <Navbar color="dark" dark expand="md" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">ShoppingList</NavbarBrand>
                        <NavbarToggler aria-label={"Aplikasi Google"} onClick={this.toggle}></NavbarToggler>
                        <Collapse isOpen={this.state.isOpen}navbar>
                            <Nav className="ml-auto" navbar>
                                { isAuthenticated ? authLinks : guestLinks}                               
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );

    };
};

const mapStateToProps = state =>({
    auth: state.auth
});


export default connect(mapStateToProps, null) (AppNavbar);