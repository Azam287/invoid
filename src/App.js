import React, { Component } from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import VerifyModal from "./components/VerifyModal.jsx";

class App extends Component {
  state = {
    verifyModalState: false,
    verified: false,
  };

  openVerificationModal = () => {
    this.setState({ verifyModalState: true });
  };

  closeVerificationModal = () => {
    this.setState({ verifyModalState: false });
  };
  confirmDetails = () => {
    this.setState({ verified: true, verifyModalState: false });
    setInterval(() => {
      window.location.reload(true);
    }, 3000);
  };
  render() {
    const { verifyModalState, verified } = this.state;
    console.log(this.state);
    return (
      <>
        <VerifyModal
          verifyModalState={verifyModalState}
          onClose={this.closeVerificationModal}
          confirmDetails={this.confirmDetails}
        />
        <div className="App">
          <header className="App-header">
            {verified ? (
              <div className="text-center">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="check-circle"
                  class="svg-inline--fa fa-check-circle fa-w-16 w-25"
                  role="img"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#15AABF"
                    d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"
                  ></path>
                </svg>
                <h3 className="text-dark mt-2">Documents Uploaded</h3>
                <p className="text-muted">
                  We will approve your documents shortly.
                </p>
              </div>
            ) : (
              <div className="text-center">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="file-search"
                  class="svg-inline--fa fa-file-search fa-w-20 w-25"
                  role="img"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="#15AABF"
                    d="M603.32 473.39l-81.48-81.46a128 128 0 1 0-33.93 33.93l81.48 81.46a16 16 0 0 0 22.62 0L603.32 496a16 16 0 0 0 0-22.61zM416 400a80 80 0 1 1 80-80 80.09 80.09 0 0 1-80 80zM80 464V48.09h160v104a23.93 23.93 0 0 0 24 24h83.29c20.89-10 44-16.06 68.71-16.06V132a48.23 48.23 0 0 0-14.1-34L318 14.1A48 48 0 0 0 284.1 0H80a48.16 48.16 0 0 0-48 48.09V464a48 48 0 0 0 48 48h288a47.86 47.86 0 0 0 45.15-32.29A158.48 158.48 0 0 1 347.43 464zM288 52l76.1 76.08H288z"
                  ></path>
                </svg>
                <h3 className="text-dark mt-2">Document Verification</h3>
                <p className="text-muted">Please upload your documents</p>
                <Button onClick={this.openVerificationModal}>
                  Upload Documents
                </Button>
              </div>
            )}
          </header>
        </div>
      </>
    );
  }
}

export default App;
