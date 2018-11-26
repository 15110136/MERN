import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: '',
      provider:''
    };
  }

  responseFacebook = response => {
    console.log(response);
    this.setState({ email: response.email,provider:'facebook' });
    var { email,provider } = this.state;
    axios
      .post('api/auth/login', { email,provider })
      .then(result => {
        localStorage.setItem('jwtToken', result.data.token);
        this.setState({ message: '' });
        this.props.history.push('/');
      })
      .catch(error => {
        if (error.response.status === 401) {
          this.setState({
            message: 'Login failed. Username or password not match',
          });
        }
      });
  };

  responseGoogle = response => {
    console.log(response);
  };

  render() {
    return (
      <section className="login">
        <div className="login__headline" />
        <Breadcrumb className="login__breadcrumb">
          <BreadcrumbItem>
            <Link to="/">Trang chủ</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Đăng nhập</BreadcrumbItem>
        </Breadcrumb>
        <h2>ĐĂNG NHẬP</h2>
        <div className="login--center">
          <FacebookLogin
            appId="251985892155679"
            fields="name,email,picture"
            callback={this.responseFacebook}
            onFailure={this.responseFacebook}
            icon="fa-facebook"
            textButton="ĐĂNG NHẬP VỚI FACEBOOK"
          />
        </div>
        <div className="login--center">
          <span>OR</span>
        </div>
        <div className="login--center">
          <GoogleLogin clientId="501198612878-kmciu842mlhn6jf31c77pu9fnkar3di5.apps.googleusercontent.com" onSuccess={this.responseGoogle} onFailure={this.responseGoogle} className="login__btnGG">
            <FontAwesomeIcon icon={faGoogle} size="1x" />
            <span>ĐĂNG NHẬP VỚI GOOGLE</span>
          </GoogleLogin>
        </div>
      </section>
    );
  }
}

export default Login;
