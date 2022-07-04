import React, { useState } from 'react'
import { useQuery } from 'react-apollo'
import QUERY_VALUE from '../graphql/getDepartmentGroup.graphql'
import DepartmentGroup from './DepartmentGroup'
import {SearchBar} from 'vtex.store-components'


const DepartmentSearch = () => {
  const {data,loading} = useQuery(QUERY_VALUE)
  const [slug, setSlug] = useState("")
  console.log("===>",slug);


  return (
    loading ?
    <div>Loading...</div>
    :
    <div className='ml10 dt dt--fixed w-100' >
    <DepartmentGroup
    departments={data?.categories[0].children}
    setSlug={setSlug}
    />
    <SearchBar
    customSearchPageUrl={slug}
    placeholder='Qué deseas buscar?'
    displayMode='serach-and-clear-buttons'
    />
    </div>
  )
}

export default DepartmentSearch
