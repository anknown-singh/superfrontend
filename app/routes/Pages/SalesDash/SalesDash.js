import React from "react";
import _ from "lodash";
import { Col, Container, Row, UncontrolledTabs } from "./../../../components";
import Grid, { applyColumn } from "../../../components/FloatGrid";
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Media,
  Nav,
  NavItem,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  TabPane,
  UncontrolledTooltip,
} from "reactstrap";
import { AudienceMetricsChart } from "../../Dashboards/Analytics/components/AudienceMetricsChart";
import { TrTableHoverable } from "../../Tables/Tables/components/TrTableHoverable";
import { TwoLevelPieChart } from "../../Graphs/ReCharts/components/TwoLevelPieChart";
import { SimpleLineChart } from "../../Graphs/ReCharts/components/SimpleLineChart";
import { StackedBarChart } from "../../Graphs/ReCharts/components/StackedBarChart";
import { Comment } from "../../components/Comment";
import { TinyDonutChartBig } from "../../components/Monitor/TinyDonutChartBig";
import { HeaderMain } from "../../components/HeaderMain";
import { TinyDonutChartAllProjects } from "../../components/ProjectsDashboards/TinyDonutChartAllProjects";
import { TrTableClients } from "../../Apps/Clients/components/TrTableClients";
import { TrTableCompanies } from "../../Apps/Clients/components/TrTableCompanies";

const LAYOUT = {
  "metric-v-target-users": { h: 6, md: 4 },
  "metric-v-target-sessions": { h: 6, md: 4 },
  "metric-v-target-pageviews": { h: 6, md: 4 },
  "analytics-audience-metrics": { h: 9, minH: 7 },
  "traffic-channels": { md: 6, h: 6 },
  sessions: { md: 6, h: 6, maxH: 9, minW: 3 },
  spend: { md: 6, h: 7 },
  "website-performance": { md: 6, h: 11 },
  "organic-traffic": { md: 6, h: 10 },
};

export class SalesDash extends React.Component {
  state = {
    layouts: _.clone(LAYOUT),
  };

  _resetLayout = () => {
    this.setState({
      layouts: _.clone(LAYOUT),
    });
  };

  render() {
    const { layouts } = this.state;

    return (
      <Container>
        <Row className="mb-2">
          <Col lg={12}>
            <HeaderMain title="Sales Dashboard" className="mb-4 mb-lg-5" />
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Grid>
              <Grid.Row
                onLayoutChange={(layouts) => this.setState({ layouts })}
                columnSizes={this.state.layouts}
                rowHeight={55}
              >
                <Grid.Col
                  {...applyColumn("analytics-audience-metrics", layouts)}
                >
                  <Card>
                    <CardHeader className="bb-0 pt-3 pb-4 bg-none" tag="h6">
                      <i className="fa fa-ellipsis-v mr-2 text-body"></i> Sales
                      Trend
                    </CardHeader>
                    <CardBody className="d-flex flex-column">
                      <Grid.Ready>
                        <AudienceMetricsChart
                          height="100%"
                          className="flex-fill"
                        />
                      </Grid.Ready>
                    </CardBody>
                    <CardFooter>
                      <Media className="small">
                        <Media left>
                          <i className="fa fa-fw fa-info-circle mr-2"></i>
                        </Media>
                        <Media body>
                          How do your users (visitors), sessions (visits) and
                          pageviews metrics for
                          <abbr title="attribute" className="text-dark">
                            www.webkom.com
                          </abbr>
                          compare to your targets over the last 30 days?
                        </Media>
                      </Media>
                    </CardFooter>
                  </Card>
                </Grid.Col>
              </Grid.Row>
            </Grid>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col lg={7}>
            <Card className="mb-3 h-100">
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
            <Card className="mb-3 h-100">
              <CardBody>
                <div className="d-flex">
                  <div>
                    <h6 className="card-title mb-1">
                      Sales Trend
                      <span className="small ml-1 text-muted">#4.01</span>
                    </h6>
                    <p>Pie Charts</p>
                  </div>
                  <span className="ml-auto">
                    <Button
                      color="link"
                      href="https://jsfiddle.net/alidingling/w6wsrc52/"
                      target="_blank"
                    >
                      <i className="fa fa-external-link"></i>
                    </Button>
                  </span>
                </div>
                <TwoLevelPieChart />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col lg={7}>
            <Card className="mb-3">
              <CardBody>
                <div className="d-flex">
                  <div>
                    <h6 className="card-title mb-1">
                      Item Trends
                      <span className="small ml-1 text-muted">#2.01</span>
                    </h6>
                    <p>Line Charts</p>
                  </div>
                  <span className="ml-auto">
                    <Button
                      color="link"
                      href="https://jsfiddle.net/alidingling/xqjtetw0/"
                      target="_blank"
                    >
                      <i className="fa fa-external-link"></i>
                    </Button>
                  </span>
                </div>
                <SimpleLineChart />
              </CardBody>
            </Card>
          </Col>

          <Col lg={5}>
            <Card className="mb-3">
              <CardBody className="mb-3">
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
        </Row>

        <Row className="mb-3">
          <Col lg={7}>
            <Card className="mb-3">
              <CardBody>
                <div className="d-flex">
                  <div>
                    <h6 className="card-title mb-1">
                      Sales Quantity
                      <span className="small ml-1 text-muted">#1.02</span>
                    </h6>
                    <p>Bar Charts</p>
                  </div>
                  <span className="ml-auto">
                    <Button
                      color="link"
                      href="https://jsfiddle.net/alidingling/90v76x08/"
                      target="_blank"
                    >
                      <i className="fa fa-external-link"></i>
                    </Button>
                  </span>
                </div>
                <StackedBarChart />
              </CardBody>
            </Card>
          </Col>

          <Col lg={5}>
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
