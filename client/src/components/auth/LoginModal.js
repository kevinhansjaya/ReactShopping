import React, { Component } from 'react';
import { Alert, Button, Modal, ModalHeader,NavLink, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
// import { addItem } from '../actions/itemActions';
// import uuid from 'uuid';
import PropTypes from 'prop-types';
import { login } from '../../actions/authAction';
import { clearErrors } from '../../actions/errorAction';

class LoginModal extends Component {
    state = {
        modal: false,
        email:'',
        password:'',
        msg: null
    };
    static propTypes={
        isAuthenticated:PropTypes.bool,
        error:PropTypes.object.isRequired,
        regiloginster:PropTypes.func.isRequired,
        clearErrors:PropTypes.func.isRequired
    }; 
    componentDidUpdate(prevProps){
        const {error,isAuthenticated} = this.props;
        if(error !== prevProps.error){         
            //check for register error
            if(error.id ==='LOGIN_FAIL'){
                this.setState({msg : error.msg.msg});               
            }else {
                this.setState({msg: null});
            }
        }
        //if authenticated , closed model
        if(this.state.modal){
            if(isAuthenticated){
                this.toggle();
            }
        }
    }
    toggle = () => {
        // clear errors
        this.props.clearErrors();
        this.setState({
            modal: !this.state.modal
        });
    };
    onChange = e => {
        console.log({ [e.target.name]: e.target.value });
        this.setState({ [e.target.name]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        
        const {email, password} = this.state;

        const user = {
            email,
            password
        }
        //atempt to login
        this.props.login(user);
    }

    render() {
        return (
            <div>
              <NavLink  onClick={this.toggle} href="#"
                >Sign In
              </NavLink>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Sign In</ModalHeader>
                    <ModalBody>
                         {this.state.msg ? <Alert color="danger">{this.state.msg}</Alert>  : null}
                      
                        <Form onSubmit={this.onSubmit}>
                            
                            <FormGroup>
                                <Label for="email">Email</Label><br />
                                <Input type="text" name="email"
                                    id="email"
                                    placeholder="email"
                                    className='mb-3'
                                    onChange={this.onChange}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="password">Password</Label><br />
                                <Input type="password" name="password"
                                    id="password"
                                    placeholder="password"
                                    className='mb-3'
                                    onChange={this.onChange}
                                />
                            </FormGroup>

                            <Button
                                color="dark"
                                style={{ marginTop: '2rem' }}
                                block
                            >Sign In</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}


//auth and error is we get from index.js reducer
const mapStatetoProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error    
});

export default connect(mapStatetoProps, { login,clearErrors })(LoginModal);