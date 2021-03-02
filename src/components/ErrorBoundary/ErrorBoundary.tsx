/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/state-in-constructor */
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log('Uncaught error:', error, errorInfo);
  }

  public render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <h1 style={{ padding: '0 5rem' }}>Sorry.. there was an error</h1>;
    }

    return children;
  }
}

export default ErrorBoundary;
