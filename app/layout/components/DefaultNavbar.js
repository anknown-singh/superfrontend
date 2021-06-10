import React from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

import classNames from "classnames";
import FileDrop from "react-dropzone";
import Dropzone from "react-dropzone-uploader";

import {
  Navbar,
  Nav,
  NavItem,
  SidebarTrigger,
  UncontrolledModal,
  ModalBody,
  Divider,
  Badge,
  ButtonGroup,
  Button,
} from "./../../components";

import { NavbarActivityFeed } from "./NavbarActivityFeed";
import { NavbarMessages } from "./NavbarMessages";
import { NavbarUser } from "./NavbarUser";
import { LogoThemed } from "./../../routes/components/LogoThemed/LogoThemed";
import { FilesGrid, FilesList } from "../../routes/Forms/Dropzone/components";
import axios from "axios";

export class DefaultNavbar extends React.Component {
  state = {
    isOver: false,
    files: [],
    listStyle: "list",
  };
  upload() {
    const file = this.state.files;
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    var formData = new FormData();
    console.log(file, "file");
    formData.append("File", file.file);
    console.log(formData, "formData");
    axios
      .post("/", {
        body: file,
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => console.log(response));
  }

  render() {
    const { isOver, files, listStyle } = this.state;
    const dropzoneClass = classNames(
      {
        "dropzone--active": isOver,
      },
      "dropzone"
    );
    const getUploadParams = ({ meta }) => {
      return { url: "http://localhost:8000" };
    };

    const Layout = ({
      input,
      previews,
      submitButton,
      dropzoneProps,
      files,
      extra: { maxFiles },
    }) => {
      return (
        <div {...dropzoneProps}>
          <i className="fa fa-cloud-upload fa-fw fa-3x mb-3"></i>
          <h5 className="mt-0">Upload Your files</h5>
          <p>
            Drag a file here or <span className="text-primary">browse</span> for
            a file to upload.
          </p>
          <p className="small">
            JPG, GIF, PNG, MOV, and AVI. Please choose files under 2GB for
            upload. File sizes are 400x300px.
          </p>
          {files.length < maxFiles && input}
        </div>
      );
    };

    return (
      <Navbar light expand="xs" fluid>
        <Nav navbar>
          <NavItem className="mr-3">
            <SidebarTrigger />
          </NavItem>
          <NavItem className="navbar-brand d-lg-none">
            <Link to="/">
              <LogoThemed />
            </Link>
          </NavItem>
          <NavItem className="d-none d-md-block">
            <span className="navbar-text">
              <Link to="/">
                <i className="fa fa-home"></i>
              </Link>
            </span>
            <span className="navbar-text px-2">
              <i className="fa fa-angle-right"></i>
            </span>
            <span className="navbar-text">
              <Link to="/">Start</Link>
            </span>
            <span className="navbar-text px-2">
              <i className="fa fa-angle-right"></i>
            </span>
            <span className="navbar-text">Page Link</span>
          </NavItem>
        </Nav>
        <Nav navbar className="ml-auto">
          <Button
            color="transparent"
            id="modalDefault101"
            className="mb-2 outline-primary border-primary"
          >
            <i className="fa fa-file-excel-o fa-fw fa-lg text-primary"></i>
            Load Excel
          </Button>

          <NavbarActivityFeed />
          <NavbarMessages className="ml-2" />
          <NavbarUser className="ml-2" />
        </Nav>

        <div>
          <UncontrolledModal target="modalDefault101">
            <ModalBody>
              <Dropzone
                getUploadParams={getUploadParams}
                classNames={{
                  dropzone: "dropzone",
                }}
                LayoutComponent={Layout}
                accept="application/vnd.ms-excel, text/csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/xml, text/xml"
              ></Dropzone>

              {files.length > 0 && (
                <div className="mt-2">
                  <div className="d-flex">
                    <Divider
                      position="left"
                      className="flex-shrink-1 flex-grow-1"
                    >
                      <div className="px-2">
                        Attachments
                        <Badge
                          className="ml-1 text-white"
                          pill
                          color="secondary"
                        >
                          {files.length}
                        </Badge>
                      </div>
                    </Divider>
                    <ButtonGroup className="flex-grow-0 flex-shrink-0 pl-2">
                      <Button
                        active={listStyle === "list"}
                        onClick={() => {
                          this.setState({ listStyle: "list" });
                        }}
                        size="sm"
                        outline
                      >
                        <i className="fa fa-bars fa-fw"></i>
                      </Button>
                      {/* <Button
                        active={listStyle === "grid"}
                        onClick={() => {
                          this.setState({ listStyle: "grid" });
                        }}
                        size="sm"
                        outline
                      >
                        <i className="fa fa-th-large fa-fw"></i>
                      </Button> */}
                    </ButtonGroup>
                  </div>
                  {listStyle === "grid" ? (
                    <FilesGrid files={files} onFileRemove={this._removeFile} />
                  ) : (
                    <FilesList files={files} onFileRemove={this._removeFile} />
                  )}
                </div>
              )}
            </ModalBody>
          </UncontrolledModal>
        </div>
      </Navbar>
    );
  }

  _filesDropped = (files) => {
    this.setState({
      files: [...this.state.files, ...files],
      isOver: false,
    });
  };

  _removeFile = (file) => {
    this.setState({
      files: _.reject(this.state.files, file),
    });
  };
}
