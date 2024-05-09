import { useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

export default function FeedsTab() {
  const [value, setValue] = useState('one')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  return (
    <Tabs
      className='fixed bottom-1/2'
      value={value}
      onChange={handleChange}
      textColor="secondary"
      indicatorColor="secondary"
      aria-label="secondary tabs example"
    >
      <Tab value="one" label="Relevant" />
      <Tab value="two" label="Latest" />
      <Tab value="three" label="Top" />
    </Tabs>
  )
}
