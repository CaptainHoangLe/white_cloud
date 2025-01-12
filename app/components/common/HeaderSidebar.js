const HeaderSidebar = () => {
    return (
        <div className="offcanvas-body">
            <div className="siderbar_left_home pt20 active">
                <button
                    className="sidebar_switch sidebar_close_btn float-end"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                >
                    X
                </button>
                {/* End .cose button */}

                <div className="footer_contact_widget mt100">
                    <h3 className="title">Quick contact info</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis Theme natoque penatibus et magnis dis
                        parturient montes, nascetur.
                    </p>
                </div>
                {/* End widget */}

                <div className="footer_contact_widget">
                    <h5 className="title">CONTACT</h5>
                    <div className="footer_phone">+1 670 936 46 70</div>
                    <p>hello@voiture.com</p>
                </div>
                {/* End widget */}

                <div className="footer_about_widget">
                    <h5 className="title">OFFICE</h5>
                    <p>
                        Germany —<br />
                        329 Queensberry Street,
                        <br />
                        North Melbourne VIC 3051
                    </p>
                </div>
                {/* End widget */}

                <div className="footer_contact_widget">
                    <h5 className="title">OPENING HOURS</h5>
                    <p>
                        Monday – Friday: 09:00AM – 09:00PM
                        <br />
                        Saturday: 09:00AM – 07:00PM
                        <br />
                        Sunday: Closed
                    </p>
                </div>
                {/* End widget */}
            </div>
        </div>
    );
};

export default HeaderSidebar;
