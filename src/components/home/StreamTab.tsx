import { useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

export default function StreamTab() {
  const [value, setValue] = useState('one')

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  return (
    <Tabs
      className='hidden xl:flex fixed bottom-[25rem]'
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
