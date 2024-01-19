import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, error, errorInfo });
    console.error(error, errorInfo);
  }

  render() {
    const { errorMessage } = this.props;
    if (this.state.hasError) {
      return (
        <div>
          <h1>{errorMessage}</h1>
          <p>{this.state.error.toString()}</p>
          <p>{this.state.errorInfo.componentStack}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
