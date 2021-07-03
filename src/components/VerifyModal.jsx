import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";

class VerifyModal extends Component {
  state = { file: [], imgSrc: [], errorMsg: "" };
  onChange = () => {
    // Assuming only image

    var file = this.refs.file.files[0];
    if (file.type === "image/png" || file.type === "image/jpeg") {
      if (file.size <= 5242880) {
        console.log(file);
        var reader = new FileReader();
        var url = reader.readAsDataURL(file);

        reader.onloadend = function (e) {
          this.setState({
            imgSrc: [reader.result],
            errorMsg: "",
          });
        }.bind(this);
      } else {
        this.setState({ errorMsg: "Max file size is 5mb", imgSrc: [] });
      }
    } else {
      this.setState({ errorMsg: "Invalid File type", imgSrc: [] });
    }
  };
  render() {
    const { imgSrc, errorMsg } = this.state;
    const { verifyModalState, onClose } = this.props;
    return (
      <Modal
        show={verifyModalState}
        onHide={onClose}
        backdrop="static"
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload your Documents</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <form>
              <label className="mb-0">
                Please upload or drag your document here
              </label>
              <div className="d-flex justify-content-center align-items-center custom-border">
                <div className="cursorPointer py-4 w-100 d-block mx-auto text-center mb-0">
                  <input
                    ref="file"
                    type="file"
                    name="user[image]"
                    multiple="true"
                    onChange={this.onChange}
                  />
                </div>
              </div>
              <p className="mt-0">Max. file size 5 MB File format jpeg, png.</p>
            </form>
            <p className="text-danger">{errorMsg !== null ? errorMsg : ""}</p>
            {imgSrc && imgSrc.length > 0 && (
              <div className="text-center">
                <p className="mb-0 text-muted mt-2">Your Document Preview</p>
                <img src={imgSrc} className="image-preview" alt="..." />
              </div>
            )}
          </div>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn btn-outline-dark btn-sm" onClick={onClose}>
            Close
          </button>
          {imgSrc && imgSrc.length > 0 && (
            <>
              <button
                type="submit"
                className="btn btn-success btn-sm"
                onClick={() => this.props.confirmDetails()}
              >
                Submit Document
              </button>
            </>
          )}
        </Modal.Footer>
      </Modal>
    );
  }
}

export default VerifyModal;
