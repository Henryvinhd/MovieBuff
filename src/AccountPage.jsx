import React, { Component } from 'react';
import CloudProfile from './Images/Cloud Profile.png'
import { Card, Icon, Image, Header, Table, Rating, Button, Form, Message, Segment, Menu, Input, GridColumn, GridRow, Grid } from 'semantic-ui-react'

class AccountPage extends Component {
    render() {
        return (
            <Grid>
                <GridRow>
                    <GridColumn>
                        <Image src={CloudProfile} size='medium' bordered />
                    </GridColumn>
                </GridRow>
            </Grid>

        )
    }
}
export default AccountPage;