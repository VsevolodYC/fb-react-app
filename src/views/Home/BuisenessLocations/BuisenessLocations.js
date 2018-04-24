import React, {Component} from 'react';
import {
    // Badge,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Table,
    // Pagination,
    // PaginationItem,
    // PaginationLink
} from 'reactstrap';

export default class BuisenessLocations extends Component {
    render() {
        const {data, paging} = this.props.business_locations;
        return (
            <div className="animated fadeIn">
                <Row>
                  <Col xs="12" lg="12">
                    <Card>
                      <CardHeader>
                        <i className="fa fa-align-justify"></i> Simple Table
                      </CardHeader>
                      <CardBody>
                        <Table responsive>
                          <thead>
                          <tr>
                           <th scope="col">#</th>
                            <th scope="col" colSpan="3">Location</th>
                            <th scope="col">Hours</th>
                            <th scope="col">Hint</th>
                            <th scope="col">Phone</th>
                          </tr>
                          <tr>
                            <th scope="col"></th>
                            <th scope="col" colSpan="1">Country</th>
                            <th scope="col" colSpan="1">City</th>
                            <th scope="col" colSpan="1">Street</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                          </thead>
                          <tbody>
                          {
                              data.map((shop, number) => {
                                  return (
                                      <tr key={'shop_card_' + number}>
                                        <th scope="row">
                                            {shop.id}
                                        </th>
                                        <td>{shop.location.country}</td>
                                        <td>{shop.location.city}</td>
                                        <td>{shop.location.street}</td>
                                        <td>
                                            <div className={'row'}>
                                                <div className={'col'}>
                                                    {['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'].filter(day => !!(shop.hours[day + '_1_' + 'open'])).map(day => {
                                                        return (
                                                            <div className={'row'} key={'open_shop_in_' + day}>
                                                                {day} : {shop.hours[day + '_1_' + 'open']} - {shop.hours[day + '_1_' + 'close']}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </td>
                                        <td>{shop.store_location_descriptor}</td>
                                        <td>{shop.phone}</td>
                                    </tr>
                                  )
                              })
                          }
                          </tbody>
                        </Table>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
            </div>
        )
    }
}