
const PropertyPage = ({params, searchParams}) => {
  
    return (<div>
        <p>Property page: {params.id}</p>
        <small>Search query: {searchParams.name}</small>

    </div>);
}
 
export default PropertyPage;