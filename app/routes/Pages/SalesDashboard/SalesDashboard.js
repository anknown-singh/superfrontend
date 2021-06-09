import React from "react";

import {
  Container,
  Row,
  Card,
  CardBody,
  Table,
  CardTitle,
  Col,
  Button,
  CardFooter,
  UncontrolledTabs,
} from "../../../components";

import { HeaderMain } from "../../components/HeaderMain";

import { TrTableHoverable } from "../../Tables/Tables/components/TrTableHoverable";
import { SimpleBarChart } from "../../Graphs/ReCharts/components/SimpleBarChart";

import {
  ButtonGroup,
  ButtonToolbar,
  Media,
  Nav,
  NavItem,
  Pagination,
  PaginationItem,
  PaginationLink,
  TabPane,
  UncontrolledTooltip,
} from "reactstrap";

import { TrTableClients } from "../../Apps/Clients/components/TrTableClients";
import { TrTableCompanies } from "../../Apps/Clients/components/TrTableCompanies";
// import { PieChartWithPaddingAngle } from "../../Graphs/ReCharts/components/PieChartWithPaddingAngle";
import { TinyDonutChartBig } from "../../components/Monitor/TinyDonutChartBig";
import { StraightAnglePieChart } from "../../Graphs/ReCharts/components/StraightAnglePieChart";
import { Comment } from "../../components/Comment";
import { TinyDonutChartAllProjects } from "../../components/ProjectsDashboards/TinyDonutChartAllProjects";

/*eslint-disable */
const progressCompletion = ["25", "50", "75", "97"];
/*eslint-enable */

// const LAYOUT = {
//   "metric-v-target-users": { h: 6, md: 4 },
//   "metric-v-target-sessions": { h: 6, md: 4 },
//   "metric-v-target-pageviews": { h: 6, md: 4 },
//   "analytics-audience-metrics": { h: 9, minH: 7 },
//   "traffic-channels": { md: 6, h: 6 },
//   sessions: { md: 6, h: 6, maxH: 9, minW: 3 },
//   spend: { md: 6, h: 7 },
//   "website-performance": { md: 6, h: 11 },
//   "organic-traffic": { md: 6, h: 10 },
// };

export class SalesDashboard extends React.Component {
  // state = {
  //   layouts: _.clone(LAYOUT),
  // };

  // _resetLayout = () => {
  //   this.setState({
  //     layouts: _.clone(LAYOUT),
  //   });
  // };

  render() {
    return (
      <Container>
        <Row className="mb-2">
          <Col lg={12}>
            <HeaderMain title="Sales Dashboard" className="mb-4 mb-lg-5" />
          </Col>
        </Row>

        <Row>
          <Col lg={12}></Col>
        </Row>

        <Row>
          <Col lg={7}>
            <Card className="mb-3">
              <CardBody>
                <CardTitle tag="h6">
                  Sales Table
                  <span className="small ml-1 text-muted">#4.01</span>
                </CardTitle>
                <p className="mb-0">
                  Use <code>hover</code> to add zebra-striping to any table row
                  within the <code>&lt;tbody&gt;</code>.
                </p>
              </CardBody>
              {/* START Table */}
              <Table className="mb-0" hover responsive>
                <thead>
                  <tr>
                    <th className="bt-0">#</th>
                    <th className="bt-0">Name</th>
                    <th className="bt-0">Price</th>
                    <th className="text-right bt-0">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <TrTableHoverable />
                  <TrTableHoverable />
                  <TrTableHoverable />
                  <TrTableHoverable />
                </tbody>
              </Table>
              {/* END Table */}
            </Card>
          </Col>
          <Col lg={5}>
            <Card className="mb-1">
              <CardBody>
                <div className="d-flex">
                  <div>
                    <h6 className="card-title mb-1">
                      Item Trend
                      {/* <span className="small ml-1 text-muted">#2.01</span> */}
                    </h6>
                    {/* <p>Line Charts</p> */}
                  </div>
                  <span className="ml-auto">
                    <Button
                      color="link"
                      href="https://jsfiddle.net/alidingling/pb1jwdt1/"
                      target="_blank"
                    >
                      <i className="fa fa-external-link"></i>
                    </Button>
                  </span>
                </div>
                <StraightAnglePieChart />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={6}>
            <Card className="mb-3">
              <CardBody>
                <div className="d-flex">
                  <div>
                    <h6 className="card-title mb-1">
                      Sales Quantity
                      {/* <span className="small ml-1 text-muted">#1.01</span> */}
                    </h6>
                    {/* <p>Bar Charts</p> */}
                  </div>
                  <span className="ml-auto">
                    <Button
                      color="link"
                      href="https://jsfiddle.net/alidingling/30763kr7/"
                      target="_blank"
                    >
                      <i className="fa fa-external-link"></i>
                    </Button>
                  </span>
                </div>
                <SimpleBarChart />
              </CardBody>
            </Card>
          </Col>

          <Col lg={6}>
            <Card>
              <CardBody>
                <div>
                  <h6 className="card-title mb-3">
                    Sales Remarks
                    {/* <span className="small ml-1 text-muted">#1.01</span> */}
                  </h6>
                  {/* <p>Bar Charts</p> */}
                </div>

                <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <Comment />
                    </div>
                    <div className="carousel-item">
                      <Comment />
                    </div>
                    <div className="carousel-item">
                      <Comment />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon "
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only text-primary">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon "
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only  text-primary">Next</span>
                  </a>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={6}>
            <Card className="mb-3">
              <CardBody>
                <Table size="sm">
                  <thead>
                    <h6 className="pt-0">Pending Sales</h6>

                    <tr>
                      <th scope="col" className="bt-0 bb-0 align-top text-left">
                        <h1 className="pt-0">85%</h1>
                      </th>
                      <th
                        scope="col"
                        className="text-right bt-0 bb-0 align-middle"
                      >
                        <TinyDonutChartBig pieColor="yellow" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="bt-0">Current Core Clock</td>
                      <td className="bt-0 text-right text-inverse">390Mhz</td>
                    </tr>
                    <tr>
                      <td>Current Memory Clock</td>
                      <td className="text-right text-inverse">160MHz</td>
                    </tr>
                    <tr>
                      <td>Memory Usage (%)</td>
                      <td className="text-right text-inverse">306MB (7%)</td>
                    </tr>
                    <tr>
                      <td>Tendency</td>
                      <td className="text-right">
                        <i className="fa fa-arrow-down fa-fw text-danger"></i>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>

          <Col lg={6}>
            <Card className="m-3">
              <CardBody>
                <div className="d-flex align-items-center mb-3">
                  <h6 className="card-title mb-1">
                    Sales Demand
                    <span className="small ml-1 text-muted">#4.03</span>
                  </h6>
                </div>
                <Media>
                  <Media left className="mr-3">
                    <TinyDonutChartAllProjects />
                  </Media>
                  <Media body>
                    <div>
                      <i className="fa fa-circle mr-1 text-info"></i>
                      <span className="text-inverse">14</span> Pending
                    </div>
                    <div>
                      <i className="fa fa-circle mr-1 text-primary"></i>
                      <span className="text-inverse">24</span> Behind
                    </div>
                    <div>
                      <i className="fa fa-circle mr-1 text-purple"></i>
                      <span className="text-inverse">2</span> Completed
                    </div>
                  </Media>
                </Media>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <Card className="mb-3">
              <UncontrolledTabs initialActiveTabId="clients">
                <CardBody>
                  <div className="d-flex">
                    <Nav pills>
                      <NavItem>
                        <UncontrolledTabs.NavLink tabId="clients">
                          Happy Clients
                        </UncontrolledTabs.NavLink>
                      </NavItem>
                      <NavItem>
                        <UncontrolledTabs.NavLink tabId="companies">
                          Sad Clients
                        </UncontrolledTabs.NavLink>
                      </NavItem>
                    </Nav>
                    <ButtonToolbar className="ml-auto">
                      <ButtonGroup>
                        <Button
                          color="link"
                          className="align-self-center mr-2 text-decoration-none"
                          id="tooltipSettings"
                        >
                          <i className="fa fa-fw fa-gear"></i>
                        </Button>
                      </ButtonGroup>
                      <ButtonGroup>
                        <Button
                          color="primary"
                          className="align-self-center"
                          id="tooltipAddNew"
                        >
                          <i className="fa fa-fw fa-plus"></i>
                        </Button>
                      </ButtonGroup>
                    </ButtonToolbar>
                    <UncontrolledTooltip
                      placement="right"
                      target="tooltipAddNew"
                    >
                      Add New
                    </UncontrolledTooltip>
                    <UncontrolledTooltip
                      placement="right"
                      target="tooltipSettings"
                    >
                      Settings
                    </UncontrolledTooltip>
                  </div>
                </CardBody>

                <UncontrolledTabs.TabContent>
                  <TabPane tabId="clients">
                    {/* START Table */}
                    <Table className="mb-0" hover responsive>
                      <thead>
                        <tr>
                          <th className="bt-0"></th>
                          <th className="bt-0"></th>
                          <th className="bt-0">Name</th>
                          <th className="bt-0">Email</th>
                          <th className="text-right bt-0">Phone</th>
                          <th className="text-right bt-0">Label</th>
                        </tr>
                      </thead>
                      <tbody>
                        <TrTableClients />
                        <TrTableClients id="2" />
                        <TrTableClients id="3" />
                        <TrTableClients id="4" />
                        <TrTableClients id="5" />
                        <TrTableClients id="6" />
                        <TrTableClients id="7" />
                        <TrTableClients id="8" />
                        <TrTableClients id="9" />
                      </tbody>
                    </Table>
                    {/* END Table */}
                  </TabPane>
                  <TabPane tabId="companies">
                    {/* START Table */}
                    <Table className="mb-0" hover responsive>
                      <thead>
                        <tr>
                          <th className="bt-0"></th>
                          <th className="bt-0"></th>
                          <th className="bt-0">Name</th>
                          <th className="bt-0">PM</th>
                          <th className="text-right bt-0">Phone</th>
                          <th className="text-right bt-0">Label</th>
                        </tr>
                      </thead>
                      <tbody>
                        <TrTableCompanies />
                        <TrTableCompanies id="2" />
                        <TrTableCompanies id="3" />
                        <TrTableCompanies id="4" />
                        <TrTableCompanies id="5" />
                        <TrTableCompanies id="6" />
                        <TrTableCompanies id="7" />
                        <TrTableCompanies id="8" />
                        <TrTableCompanies id="9" />
                        <TrTableCompanies id="10" />
                        <TrTableCompanies id="11" />
                        <TrTableCompanies id="12" />
                      </tbody>
                    </Table>
                    {/* END Table */}
                  </TabPane>
                </UncontrolledTabs.TabContent>
              </UncontrolledTabs>

              <CardFooter className="d-flex">
                <span className="align-self-center">
                  Showing 1 to 10 of 57 entries
                </span>
                <Pagination
                  aria-label="Page navigation example"
                  className="ml-auto"
                >
                  <PaginationItem>
                    <PaginationLink previous href="#">
                      <i className="fa fa-fw fa-angle-left"></i>
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink next href="#">
                      <i className="fa fa-fw fa-angle-right"></i>
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
