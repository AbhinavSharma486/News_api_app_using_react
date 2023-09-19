import loading from './loading65px.gif'

const Spinner = () => {
    return (
        <div className='d-flex justify-content-center'>
            <img className='my-3' src={loading} alt="loading" />
        </div>
    )
}
export default Spinner
