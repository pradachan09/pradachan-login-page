import React from "react"

export default function App() {
    
    
    const [formData,setFormData] = React.useState({
        email : "",
        password : "",
        confirmation : "",
        newsletter : "",
        
    })
    
    function handleChange(){
        const {name, checked, value, type} = event.target
        setFormData( data => {
            return {
                ...data,
                [name] : type === "checkbox" ? checked : value
            }
            
        })
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        formData.password === formData.confirmation ? console.log(formData) : 
        alert("Password Incorrect. Please try again.")
        
        formData.password === formData.confirmation && 
        alert(formData.newsletter ? 'Authorization complete. Thanks for joining up the newsletter.' : "Authorization complete.")
        
        
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit} >
                <input 
                    className="form--input"
                    type="email" 
                    placeholder="Email address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input 
                    className="form--input"
                    type="password" 
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <input 
                    className="form--input"
                    type="password" 
                    placeholder="Confirm password"
                    name="confirmation"
                    value={formData.confirmation}
                    onChange={handleChange}
                />
                <br/>
                
                <div className="form--marketing" >
                    
                    <input
                        type="checkbox"
                        id="okayToEmail"
                        name="newsletter"
                        checked = {formData.newsletter}
                        onChange={handleChange}
                        
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <br/>
                <button className="form--submit">
                    Sign up
                </button>
            </form>
        </div>
    )
}
