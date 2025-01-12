const Form = () => {
  return (
    <form className="contact_form">
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">First Name*</label>
            <input
              className="form-control"
              type="text"
              placeholder="TUF"
              required
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Last Name*</label>
            <input
              className="form-control"
              type="text"
              placeholder="creativelayers088@gmail.com"
              required
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Email*</label>
            <input
              className="form-control email"
              type="email"
              placeholder="+59 9495 393 939 3"
              required
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Phone</label>
            <input
              className="form-control"
              type="text"
              placeholder="Message"
              required
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-sm-12">
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              name="form_message"
              className="form-control"
              rows={6}
              placeholder="Message"
              required
            />
          </div>
          {/* End form-group */}
          <div className="form-group mb0">
            <button type="submit" className="btn btn-thm">
              Get In Touch
            </button>
          </div>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </form>
  );
};

export default Form;
