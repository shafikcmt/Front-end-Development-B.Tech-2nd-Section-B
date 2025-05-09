const Student = (props)=>{
    return(
       <div className="container">
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">This is Title</h3>
                    </div>
                    <div className="card-body">
                        <h3>{props.name}</h3>
                        <h3>{props.roll}</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam odit officiis temporibus ut tenetur sint tempora, veniam at accusamus possimus?</p>
                        <button className="btn btn-primary">Profile</button>
                    </div>
                </div>
            </div>
        </div>
       </div>
    )
}

export default Student