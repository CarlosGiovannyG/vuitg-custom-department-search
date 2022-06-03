import React from 'react'

type Category = {
  id: number,
  name: string,
  slug: string,
}

type PropsDepartmentGroup = {
  departments: [Category],
  setSlug:any
}

const DepartmentGroup = ({ departments,setSlug }: PropsDepartmentGroup) => {

  const onHandleSetSlug=(event:any)=>{
    setSlug(`${event.target.value}/$\{term\}&mapp=ft`)
  }


  return (
   <>
   <h1>DepartmentGroup</h1>
    <select
    onChange={onHandleSetSlug}
    defaultValue="value0"
    >
      <option disabled value="value0">Seleccione una opción</option>
      {
        departments.map((department:Category) =>(
          <option key={department.id} value={department.slug}>{department.name}</option>
        ))
      }
    </select>
   </>
  )
}

export default DepartmentGroup
