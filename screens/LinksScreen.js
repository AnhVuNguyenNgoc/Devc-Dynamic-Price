import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, Left, TabHeading, Body, Title, Subtitle, Right, Icon, Text } from 'native-base';

//icon is ionicons https://ionicons.com/

export default function LinksScreen() {
  return (
    <Container>
      <Tabs>
        <Tab heading={<TabHeading><Text>Today</Text></TabHeading>}>
        </Tab>
        <Tab heading={<TabHeading><Text>Weekly</Text></TabHeading>}>
        </Tab>
        <Tab heading={<TabHeading><Text>Monthly</Text></TabHeading>}>
        </Tab>
      </Tabs>
    </Container>
  );
}


LinksScreen.navigationOptions = {
  title: 'Links'
};
