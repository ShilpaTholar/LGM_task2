import {useEffect,useState} from 'react';
const Users = () => {

    const[users,setUsers]=useState(null)
    const[isPending,setisPending]=useState(true);
    const[error,setError]=useState(null);

    const handleclick=(e)=>{
        fetch("https://reqres.in/api/users?page=1")
    .then(res=>{
        if(!res.ok){
            throw Error('could not fetch the data for that resource');
        }
        return res.json();
    })
    .then(data=>{
        console.log(data);
        setUsers(data.data)
        setisPending(false);
        setError(null);
        
    })
    .catch(err=>{
        console.log(err.message);
        setError(err.message);
        setisPending(false);
        
    })
    }
    return ( 
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-info" >
            <div className="container-fluid">
                <a className="navbar-brand text-danger fw-bold" href="#" style={{fontSize:"x-large"}}>WeShare</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse nav justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                   
                    </li>
                    <li className="nav-item">
                    <button className="nav-link" onClick={(e)=>handleclick(e)} style={{
                        color:"white",
                        backgroundColor:'#f1356d',
                        borderRadius:"8px"
                    }}>Get Users</button>
                    </li>
                </ul>
                </div>
            </div>
        </nav>

                  
                <div className="d-flex align-items-center justify-content-center">
                <div className="row row-cols-1 row-cols-md-3 g-4 p-3" style={{width:"70rem",}} >
                {!users && <div>Loading...</div> }  
             {
                 
             users && users.map((user)=>
            
             <div key={user.id}>
                
                {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>} 
                <div className="col">
                    <div className="card text-dark bg-info">
                    <img src={user.avatar} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{user.first_name+" "+user.last_name}</h5>
                        <p className="card-text">{user.email}</p>
                    </div>
                    </div>
                </div>
               
                </div>
                
             )
         }
         </div>
        
        </div>
        
        
        </div>
    )
    
}
 
export default Users;