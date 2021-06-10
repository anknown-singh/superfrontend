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
  Media,
} from "./../../../components";
import { setupPage } from "./../../../components/Layout/setupPage";

import { HeaderMain } from "../../components/HeaderMain";

import { TrTableHoverable } from "../../Tables/Tables/components/TrTableHoverable";
import { SimpleBarChart } from "../../Graphs/ReCharts/components/SimpleBarChart";
import { SessionsByDevice } from "../../components/Analytics/SessionsByDevice";
import { TinyDonutChartAllProjects } from "../../components/ProjectsDashboards/TinyDonutChartAllProjects";
import { PieChartWithPaddingAngle } from "../../Graphs/ReCharts/components/PieChartWithPaddingAngle";
import { SimpleLineChart } from "../../Graphs/ReCharts/components/SimpleLineChart";
import { CustomizedLabelLineChart } from "../../Graphs/ReCharts/components/CustomizedLabelLineChart";
import Test from "./Test";
import { Progress } from "reactstrap";

/*eslint-disable */
const progressCompletion = ["25", "50", "75", "97"];
/*eslint-enable */

const TestComponent = () => {
  return (
    <Container>
      <Row className="mb-2">
        <Col lg={12}>
          <HeaderMain title="Dashboard" className="mb-4 mb-lg-5" />
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <Card className="mb-3">
            <CardBody>
              <CardTitle tag="h6" className="mb-4">
                Sales Orders
                <span className="large ml-4 text-secondary">23.1.2021</span>
              </CardTitle>

              <Row>
                <Col sm={12}>
                  <Media>
                    <Media body>
                      <div>
                        <i className="fa fa-circle mr-1 text-info"></i>
                        <span className="text-inverse">14</span> Allocated
                      </div>
                      <div>
                        <i className="fa fa-circle mr-1 text-primary"></i>
                        <span className="text-inverse">24</span> Fullfilled
                      </div>
                      <div>
                        <i className="fa fa-circle mr-1 text-purple"></i>
                        <span className="text-inverse">2</span> Shipped
                      </div>
                    </Media>
                    <Media left className="mr-3">
                      <TinyDonutChartAllProjects />
                    </Media>
                    <Media body>
                      <h5 className="mb-0 text-right">
                        <i className="fa fa-circle text-primary mr-2"></i>Total
                        Revenue
                      </h5>
                      <h3 className="mt-2 mb-0 text-right">$3,267</h3>
                    </Media>
                  </Media>
                </Col>
              </Row>

              <Row className="py-2 d-flex justify-content-between">
                <Col>
                  <SessionsByDevice
                    title="Processing"
                    valuePercent="4"
                    valuePercentColor="text-primary"
                  />
                </Col>
                <Col>
                  <SessionsByDevice
                    title="Invoiced"
                    valuePercent="15"
                    valuePercentColor="text-info"
                  />
                </Col>
                <Col>
                  <SessionsByDevice
                    title="New Order"
                    valuePercent="56"
                    valuePercentColor="text-success"
                  />
                </Col>
                <Col>
                  <SessionsByDevice
                    title="Unlinked"
                    valuePercent="78"
                    valuePercentColor="text-danger"
                  />
                </Col>
              </Row>
            </CardBody>

            <CardFooter className="small">
              <i className="fa fa-fw fa-info-circle mr-2"></i>
              <span className="large text-primary">View All</span>
            </CardFooter>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="mb-3">
            <CardBody>
              <CardTitle tag="h4" className="mb-5">
                Sessions by Device Type
              </CardTitle>
              <Row className=" py-4 d-flex justify-content-between">
                <Col>
                  <SessionsByDevice
                    title="Desktop"
                    valuePercent="51,5"
                    valuePercentColor="text-primary"
                    value="201,335"
                    valueColor="text-primary"
                  />
                </Col>
                <Col>
                  <SessionsByDevice
                    title="Mobile"
                    valuePercent="33,3"
                    valuePercentColor="text-info"
                    value="133,201"
                    valueColor="text-info"
                  />
                </Col>
                <Col>
                  <SessionsByDevice
                    title="Tablet"
                    valuePercent="20,8"
                    value="81,525"
                  />
                </Col>
                <Col>
                  <SessionsByDevice
                    title="Tablet"
                    valuePercent="20,8"
                    value="81,525"
                  />
                </Col>
              </Row>
              {/* <Progress multi className="mb-2" style={{ height: "5px" }}>
                <Progress bar value="25" />
                <Progress bar color="info" value="30" />
                <Progress bar color="secondary" value="45" />
              </Progress> */}
            </CardBody>
            <CardFooter className="small">
              <i className="fa fa-fw fa-info-circle mr-2"></i>
              How do your users (visitors), sessions (visits) and pageviews
              metrics for <abbr title="attribute">www.webkom.com</abbr> compare
              to your targets over the last 30 days?
            </CardFooter>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={8}>
          <Card className="mb-3">
            <CardBody>
              <CardTitle tag="h6">
                Table Hoverable
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
        <Col lg={4}>
          <Card className="mb-3">
            <CardBody>
              <div className="d-flex align-items-center mb-3">
                <h6 className="card-title mb-1">
                  PieChartWithPaddingAngle
                  <span className="small ml-1 text-muted">#4.03</span>
                </h6>
                <span className="ml-auto">
                  <Button
                    color="link"
                    href="https://jsfiddle.net/alidingling/3Leoa7f4/"
                    target="_blank"
                  >
                    <i className="fa fa-external-link"></i>
                  </Button>
                </span>
              </div>
              <PieChartWithPaddingAngle className="p-5" />
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
                    SimpleLineChart
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

        <Col lg={6}>
          <Card className="mb-3">
            <CardBody>
              <div className="d-flex">
                <div>
                  <h6 className="card-title mb-1">
                    CustomizedLabelLineChart
                    <span className="small ml-1 text-muted">#2.04</span>
                  </h6>
                  <p>Line Charts</p>
                </div>
                <span className="ml-auto">
                  <Button
                    color="link"
                    href="https://jsfiddle.net/alidingling/9y9zrpjp/"
                    target="_blank"
                  >
                    <i className="fa fa-external-link"></i>
                  </Button>
                </span>
              </div>
              <CustomizedLabelLineChart />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default setupPage({
  pageTitle: "Monitor",
})(TestComponent);
