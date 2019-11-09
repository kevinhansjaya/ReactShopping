import React,{Component} from 'react';
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
    }
     toggle =() => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return(
            <div>
                <Navbar color="dark" dark expand="md" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">ShoppingList</NavbarBrand>
                        <NavbarToggler aria-label={"Aplikasi Google"} onClick={this.toggle}></NavbarToggler>
                        <Collapse isOpen={this.state.isOpen}navbar>
                            <Nav className="ml-auto" navbar>
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
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );

    }
}




export default  AppNavbar;