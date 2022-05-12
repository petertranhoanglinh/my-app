function Profile(){
    return (

        <div className="container">
          {/* Account page navigation*/}
          <hr className="mt-0 mb-4" />
          <div className="row">
            <div className="col-xl-4">
              {/* Profile picture card*/}
              <div className="card mb-4 mb-xl-0">
                <div className="card-header">Profile Picture</div>
                <div className="card-body text-center">
                  {/* Profile picture image*/}
                  <img className="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                  {/* Profile picture help block*/}
                  <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                  {/* Profile picture upload button*/}
                  <button className="btn btn-primary" type="button">Upload new image</button>
                </div>
              </div>
            </div>
            <div className="col-xl-8">
              {/* Account details card*/}
              <div className="card mb-4">
                <div className="card-header">Users Details</div>
                <div className="card-body">
                  <form>
                    {/* Form Group (username)*/}
                    <div className="mb-3">
                      <label className="small mb-1" htmlFor="inputUsername">Username</label>
                      <input className="form-control" id="inputUsername" type="text" placeholder="Enter your username" defaultValue="username" />
                    </div>
                    {/* Form Row*/}
                    <div className="row gx-3 mb-3">
                      {/* Form Group (first name)*/}
                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="inputFirstName">UserId</label>
                        <input className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" defaultValue="Valerie" />
                      </div>
                      {/* Form Group (last name)*/}
                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="inputLastName">Country</label>
                        <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" defaultValue="Luna" />
                      </div>
                    </div>
                    {/* Form Row        */}
                    <div className="row gx-3 mb-3">
                      {/* Form Group (organization name)*/}
                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="inputOrgName">Rank</label>
                        <select name="" id="input" class="form-control" required="required">
                             <option value="DIAMOND">Diamond (400$/year)</option>
                             <option value="GOLD">Gold (300$/year)</option>
                             <option value="SIVEL">Sivel (100$/year)</option>
                             <option value="STANDARD">Standard (free)</option>
                         </select>
                      </div>
                      {/* Form Group (location)*/}
                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="inputLocation">Role</label>
                         <select name="" id="input" class="form-control" required="required">
                             <option value="ADMIN">ADMIN</option>
                             <option value="USER">USER</option>
                         </select>
                         
                      </div>
                    </div>
                    <div className="row gx-3 mb-3">
                      {/* Form Group (phone number)*/}
                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="inputPhone">Referral code</label>
                        <input className="form-control" id="inputPhone" type="text"/>
                      </div>
                      {/* Form Group (birthday)*/}
                      <div className="col-md-6">
                        <label className="small mb-1" htmlFor="inputBirthday">Time Update</label>
                        <input className="form-control" id="inputBirthday" type="text" name="birthday" placeholder="Enter your birthday" defaultValue="06/10/1988" />
                      </div>
                    </div>
                    {/* Save changes button*/}
                    <button className="btn btn-primary btnSaveProfile"  type="button">Save changes</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Profile;