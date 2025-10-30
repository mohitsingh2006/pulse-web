
const EmptyState = ({message = "No Data"}) => {
  return (
    <div className='text-center text-danger fs-5'>
        {message}
    </div>
  )
}

export default EmptyState
