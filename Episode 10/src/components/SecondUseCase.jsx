import React from 'react'
import useGetCat from '../hooks/useGetCat'


function SecondUseCase() {

  const {data, CatLoading, refetchData} = useGetCat()

  if(CatLoading) return <h1>Loading....</h1>

  return (
    <>
      <button onClick={refetchData}>Refetch Data</button>
      <h2>{data?.fact}</h2>
    </>
  )
}

export default SecondUseCase