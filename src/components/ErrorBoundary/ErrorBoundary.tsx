import React, { Component, ErrorInfo, ReactNode } from "react";
// import s from "./ErrorBoundary.module.scss";

interface Props {
  children: undefined | ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <h1>Sorry.. there was an error</h1>;
    }

    return children;
  }
}

export default ErrorBoundary;
