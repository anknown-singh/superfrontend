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
} from "./../../../components";
import { setupPage } from "./../../../components/Layout/setupPage";

import { TrTableHoverable } from "../../Tables/Tables/components/TrTableHoverable";

import { PieChartWithPaddingAngle } from "../../Graphs/ReCharts/components/PieChartWithPaddingAngle";
import { SimpleLineChart } from "../../Graphs/ReCharts/components/SimpleLineChart";
import { CustomizedLabelLineChart } from "../../Graphs/ReCharts/components/CustomizedLabelLineChart";

/*eslint-disable */
const progressCompletion = ["25", "50", "75", "97"];
/*eslint-enable */

const PurchaseDashboard = () => {
  return (
    <Container>
      <Row>
        <Col lg={12}>
          <Card className="mb-3">
            <CardBody></CardBody>

            <CardFooter className="small">
              <i className="fa fa-fw fa-info-circle mr-2"></i>
              <span className="large text-primary">View All</span>
              {/* How do your users (visitors), sessions (visits) and pageviews
                        metrics for <abbr title="attribute">www.webkom.com</abbr> compare to your targets over the last 30 days? */}
            </CardFooter>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <Card className="mb-3">
            <CardBody>
              <div className="d-flex align-items-center mb-3">
                <h6 className="card-title mb-1">
                  Avaiable PO
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

        <Col lg={6}>
          <Card className="mb-3">
            <CardBody>
              <div className="d-flex align-items-center mb-3">
                <h6 className="card-title mb-1">
                  Pending PO
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
              <div className="d-flex align-items-center mb-3">
                <h6 className="card-title mb-1">
                  Vendor Log
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

        <Col lg={6}>
          <Card className="mb-3">
            <CardBody>
              <CardTitle tag="h6">
                Required Stock
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
})(PurchaseDashboard);
