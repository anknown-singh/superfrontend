import React from "react";
import {
  Container,
  Row,
  Card,
  CardBody,
  CardTitle,
  Col,
  Button,
  Badge,
  CardDeck,
} from "./../../../components";

import { setupPage } from "./../../../components/Layout/setupPage";

import { PieChartWithPaddingAngle } from "../../Graphs/ReCharts/components/PieChartWithPaddingAngle";
import { SimpleLineChart } from "../../Graphs/ReCharts/components/SimpleLineChart";

import { SimpleBarChart } from "../../Graphs/ReCharts/components/SimpleBarChart";

import { ProfileOverviewCard } from "../../components/Profile/ProfileOverviewCard";

/*eslint-disable */
const progressCompletion = ["25", "50", "75", "97"];
/*eslint-enable */

const PurchaseDashboard = () => {
  return (
    <Container>
      <Row>
        <Col lg={12}>
          <Card className="mb-3">
            <CardBody>
              <span className="d-flex mb-3">
                <CardTitle>
                  <h6>
                    Stocks
                    <small>
                      <span className="text-success ml-2">
                        <i className="fa fa-caret-up mr-1"></i> 22.38
                      </span>{" "}
                      / 5.9%
                    </small>
                  </h6>
                </CardTitle>
                <Badge pill className="ml-auto align-self-start">
                  Score: 7.24{" "}
                </Badge>
              </span>
              <div className="text-center">
                <SimpleLineChart />
                <div className="d-flex mt-4">
                  <dl className="row">
                    <dt className="col-sm-4 text-left text-sm-right">Open</dt>
                    <dd className="col-sm-8 text-left text-inverse">$834.00</dd>
                    <dt className="col-sm-4 text-left text-sm-right">High</dt>
                    <dd className="col-sm-8 text-left text-inverse">$198.00</dd>
                    <dt className="col-sm-4 text-left text-sm-right">Low</dt>
                    <dd className="col-sm-8 text-left text-inverse">$575.00</dd>
                  </dl>
                  <dl className="row">
                    <dt className="col-sm-4 text-left text-sm-right">
                      Market Cap
                    </dt>
                    <dd className="col-sm-8 text-left text-inverse">876.00B</dd>
                    <dt className="col-sm-4 text-left text-sm-right">
                      P/E ratio (ttm)
                    </dt>
                    <dd className="col-sm-8 text-left text-inverse">62.00</dd>
                    <dt className="col-sm-4 text-left text-sm-right">
                      Divided Yield
                    </dt>
                    <dd className="col-sm-8 text-left text-inverse">94.7%</dd>
                  </dl>
                </div>
              </div>
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
              <SimpleBarChart />
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
            </CardBody>
            <SimpleLineChart />
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <h2> Delivered Stock</h2>
        </Col>
      </Row>
      {/* END Header 1 */}
      {/* START Section 1 */}
      <CardDeck>
        {/* START Card Widget */}
        <Card className="mb-3">
          <CardBody>
            <ProfileOverviewCard
              title="Total Views"
              badgeTitle="Monthly"
              badgeColor="primary"
              value="6.200"
              valueTitle="vs 4.891 prev."
              footerTitle="Prev"
              footerTitleClassName="text-success"
              footerValue="23%"
              footerIcon="caret-up"
            />
          </CardBody>
        </Card>
        {/* START Card Widget */}
        {/* START Card Widget */}
        <Card className="mb-3">
          <CardBody>
            <ProfileOverviewCard
              title="Total Orders"
              badgeTitle="Annual"
              badgeColor="info"
              value="75.938"
              valueTitle="vs 55.002 prev."
              footerTitle="Prev"
              footerTitleClassName="text-danger"
              footerValue="12%"
              footerIcon="caret-down"
            />
          </CardBody>
        </Card>
        {/* START Card Widget */}
        {/* START Card Widget */}
        <Card className="mb-3">
          <CardBody>
            <ProfileOverviewCard
              title="Total Visits"
              badgeTitle="Daily"
              badgeColor="secondary"
              value="456"
              valueTitle="vs 231 prev."
              footerTitle="Prev"
              footerTitleClassName="text-success"
              footerValue="67%"
              footerIcon="caret-up"
            />
          </CardBody>
        </Card>
        {/* START Card Widget */}
        {/* START Card Widget */}
        <Card className="mb-3">
          <CardBody>
            <ProfileOverviewCard
              title="Total Bounces"
              badgeTitle="Reatime"
              badgeColor="warning"
              value="91"
              valueTitle="vs 87 prev."
              footerTitle="Prev"
              footerTitleClassName="text-success"
              footerValue="8%"
              footerIcon="caret-up"
            />
          </CardBody>
        </Card>
        {/* START Card Widget */}
      </CardDeck>
      {/* START Section 1 */}

      <Row>
        <Col lg={12}>
          <h2>Pending Delivery</h2>
        </Col>
      </Row>
      {/* END Header 1 */}
      {/* START Section 1 */}
      <CardDeck>
        {/* START Card Widget */}
        <Card className="mb-3">
          <CardBody>
            <ProfileOverviewCard
              title="Total Views"
              badgeTitle="Monthly"
              badgeColor="primary"
              value="6.200"
              valueTitle="vs 4.891 prev."
              footerTitle="Prev"
              footerTitleClassName="text-success"
              footerValue="23%"
              footerIcon="caret-up"
            />
          </CardBody>
        </Card>
        {/* START Card Widget */}
        {/* START Card Widget */}
        <Card className="mb-3">
          <CardBody>
            <ProfileOverviewCard
              title="Total Orders"
              badgeTitle="Annual"
              badgeColor="info"
              value="75.938"
              valueTitle="vs 55.002 prev."
              footerTitle="Prev"
              footerTitleClassName="text-danger"
              footerValue="12%"
              footerIcon="caret-down"
            />
          </CardBody>
        </Card>
        {/* START Card Widget */}
        {/* START Card Widget */}
        <Card className="mb-3">
          <CardBody>
            <ProfileOverviewCard
              title="Total Visits"
              badgeTitle="Daily"
              badgeColor="secondary"
              value="456"
              valueTitle="vs 231 prev."
              footerTitle="Prev"
              footerTitleClassName="text-success"
              footerValue="67%"
              footerIcon="caret-up"
            />
          </CardBody>
        </Card>
        {/* START Card Widget */}
        {/* START Card Widget */}
        <Card className="mb-3">
          <CardBody>
            <ProfileOverviewCard
              title="Total Bounces"
              badgeTitle="Reatime"
              badgeColor="warning"
              value="91"
              valueTitle="vs 87 prev."
              footerTitle="Prev"
              footerTitleClassName="text-success"
              footerValue="8%"
              footerIcon="caret-up"
            />
          </CardBody>
        </Card>
        {/* START Card Widget */}
      </CardDeck>
      {/* START Section 1 */}
    </Container>
  );
};
export default setupPage({
  pageTitle: "Monitor",
})(PurchaseDashboard);
