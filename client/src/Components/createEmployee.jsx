import React, { useState } from 'react';
import axios from 'axios';

const CreateEmployee = () => {

  const [fullName, setFullName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [primaryName, setPrimaryName] = useState('');
  const [primaryPhoneNumber, setPrimaryPhoneNumber] = useState('');
  const [primaryRelationship, setPrimaryRelationship] = useState('');
  const [secondaryName, setSecondaryName] = useState('');
  const [secondaryPhoneNumber, setSecondaryPhoneNumber] = useState('');
  const [secondaryRelationship, setSecondaryRelationship] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const employeeData = {
      fullName,
      jobTitle,
      phoneNumber,
      email,
      address,
      city,
      state,
      contacts:[
         {
          name: primaryName,
          phoneNumber: primaryPhoneNumber,
          relationship: primaryRelationship,
        },
        {
          name: secondaryName,
        phoneNumber: secondaryPhoneNumber,
        relationship: secondaryRelationship,
        }
      ]
    };

    const res = await axios({
      method: 'POST',
      url:'http://localhost:3000/emp/create',
      data: employeeData,
      withCredentials: true,
    });

    if (res.status === 201) {
      alert('Successfully signed up!'); 
      window.location.href = '/';
     
    }
  else{
    alert('Please try again !!');

  }
  
  }

return(
  <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Employee SignUp!</h1>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleSubmit} >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Title</span>
            </label>
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone no</span>
            </label>
            <input
              type="number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">City</span>
            </label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">State</span>
            </label>
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="input input-bordered"
              required
            />
          </div>
          <span className="label-text">Primary Emergency Contact</span>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              value={primaryName}
              onChange={(e) => setPrimaryName(e.target.value)}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="number"
              value={primaryPhoneNumber}
              onChange={(e) => setPrimaryPhoneNumber(e.target.value)}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Relationship</span>
            </label>
            <input
              type="text"
              value={primaryRelationship}
              onChange={(e) => setPrimaryRelationship(e.target.value)}
              className="input input-bordered"
              required
            />
          </div>
          <span className="label-text">Secondary Emergency Contact</span>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              value={secondaryName}
              onChange={(e) => setSecondaryName(e.target.value)}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="number"
              value={secondaryPhoneNumber}
              onChange={(e) => setSecondaryPhoneNumber(e.target.value)}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Relationship</span>
            </label>
            <input
              type="text"
              value={secondaryRelationship}
              onChange={(e) => setSecondaryRelationship(e.target.value)}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary" >
              Create Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);
 };

export default CreateEmployee;

