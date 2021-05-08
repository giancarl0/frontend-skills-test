import React from 'react'

import { Card, CardContent, Tabs, Tab } from '@material-ui/core'

function TabbedPanel( props ) {
  const {
    variant,
    tabData,
    fullWidth,
    ...otherProps } = props

  const [currentTabIndex, setTabIndex] = React.useState( tabData.length > 0 ? 0 : null )
  const handleTabChange = ( event, newValue ) => {
    setTabIndex( newValue )
  }

  return (
      <Card variant = {variant ?? 'outlined'} {...otherProps}  style = {{height: '100%'}} >
        <Tabs value = {currentTabIndex} onChange = {handleTabChange} variant = 'fullWidth' style = {{borderBottom: 'solid 1px rgba(0, 0, 0, 0.12)'}}>
          {tabData.map( currentTabData => {
            return <Tab label = {currentTabData.label} key = {currentTabData.tabId} />
          } )}
        </Tabs>
        <CardContent >
            {currentTabIndex !== null && tabData[currentTabIndex].component}
        </CardContent>
      </Card>
  )
} export default TabbedPanel