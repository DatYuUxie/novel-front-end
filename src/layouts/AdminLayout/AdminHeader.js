import './AdminLayout.scss';

function AdminHeader() {
    return (
        <div className="admin-header__navbar">
            <div className="admin-header__navbar1">
                <span id="navbar1_1">Payments</span>
                
            </div>
            <div className="admin-header__navbar2">
                <svg width="17px" height="17px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                            stroke="#848484"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </g>
                </svg>
                <input type="text" placeholder="Search features, tutorials, etc." name="" id="navbar2_1" />
            </div>
            <div className="admin-header__navbar3">
                <span className="admin-header__material-symbols-outlined">comment</span>&nbsp;&nbsp;&nbsp;
                <span className="admin-header__material-symbols-outlined">expand_more</span>
            </div>
        </div>
    );
}

export default AdminHeader;
