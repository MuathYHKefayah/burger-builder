import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Auxiliary/Auxiliary";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };
    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use((req) => {
        // Do something with request error
        this.setState({ error: null });
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          // Do something with response error
          this.setState({ error: error });
        }
      );
    }
    //* this to resolve memory leak because each time Wrapper component
    //* render then will creat new axios interceptors and that cause memory leak
    //* so we will remove axios instance when component unmounted
    //* If functional component we can set inner code in return of useEffect hook
    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Aux>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
