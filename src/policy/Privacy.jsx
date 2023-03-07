import React from "react";
import logo from "../components/images/Group 23.png"


function backToHome(event) {
    event.preventDefault();
    window.location.href = "/";
  }
export default function Privacy(){
    return(
        <div className="policy-cont">
            <div className="logo1"><img onClick={backToHome} src={logo} alt="logo" width='100%' /></div>
             <h1>Privacy Policy</h1>
            <div className="policy-text-cont">
               
                <ol>
                    <li>
                        <h3>Information</h3>
                        <p>InsureHealth  priortises your privacy. To protect your privacy we provide this notice explaning our online information practices and the choices you can make with regard to the way your information is collected and used.</p> <br />
                        <p>The terms InsureHealth, the website, us and we refer to the owner of the website whose registration office is InsureHealthNet SRL. The term “you” refers to the viewer of our site.</p> <br />
                        <p>By  accessing the website InsureHealth, you accept and agree to be bound by the Privacy Policy. If you do not accept the terms contained in this Privacy Policy statement, you must immediately cease using the website and/or services.</p> <br />
                        <p>InsureHealth may change this policy from time to time by updating this page. You should check this page periodically to ensure you are aware of all the changes.</p> <br />
                        <p>InsureHealth Net SRL nad InsureHealth are committed to ensuring that your privacy is protected. If we ask you to provide certain information by which you can be identified when using this website, we guarantee that it will be used in accordance to this Privacy statement.</p> <br />
                        <p>Our site is not targeted for use by anyone under the age of 18. By using this website, you warrant that you are at least 18 years old. We reserve the right to terminate your membership if any information may lead us to discover the fact that you are less that 18.Persons under 18 may not submit any personally identifiable information on the Website and if it is discoverd that such information has been inadvertently gathered, we reserve the right to delete it.</p> <br />
                        <p>InsureHealth uses the information voluntarily submitted by users in order to enhance their experience on its network of sites, to provide interactice or personalised elements or to deliver preference-based content to the users.</p> <br />
                    </li>

                    <li>
                        <h3>Cookies and Gathering User Technical Data</h3>
                        <p>This information is required in order for us to understand your needs, to provide you with better service and also for the following reasons.</p>
                        <ol className="policy-list">
                            <li>Improved customer service</li>
                            <li>Improved website features</li>
                            <li>Personalise user experience</li>
                            <li>Internal record keeping</li>
                            <li>Improve our product and services</li>
                        </ol>
                        <p>The ways in which information may be gathered include the following:</p>
                        <ol className="policy-list">
                            <li>When you visit InsureHealth, we collect your IP address, such as your browser type and the pages you have accessed on our website. This information will be collected and saved our Net SRL.</li>
                            <li>To personalise and enhance your browsing and shopping experience, we may place in a text file called a “cookie” in the browser files of your computer. Although the cookie itself does not contain Personal Information, it will allow us to relate your use of this site to the information you have specifically and knowingly provided.</li>
                        </ol>
                        <p>The only personal information a cookie can contain is the information that you provide yourself. A cookie cannot read data from your hard disk, cannot read cookie files created by other sites and only the web site that transferred a particular cookie to you can read, modify or delete such cookie. InsureHealth uses cookies to track user traffic patterns (as described above). Our advertising system delivers a one-time cookie to better track ad impressions and click rates. You can refuse cookies by turning them off in your browser.</p> <br />

                        <p>By disabling the cookies in your browser, please be aware that you may not be able to use the Website properly and that you may not be able to access some important sections and pages of the Website, such as product pages, searches, comparison pages. If you have set your browser to warn you before accepting cookies, you will receive a warning message with each cookie.</p> <br />
                        <p>At the present time it is not technically possible for us to allow you to carry your cookie settings with you between your browsers and devices so you will need to change these settings from each browser you use.</p> <br />
                        <p>Please also be aware that we make every effort to respect your choices, however, there is the possibility that not all cookies will be captured. If this is a concern then we would recommend that you change your cookie settings via your browser; your browser help function will tell you how.</p> <br />
                    </li>

                    <li>
                        <h3>Personal Data Access</h3>
                        <p>We do not sell, trade, or otherwise transfer your personally identifiable information to third parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or providing you with services, as long as those parties are committed to keeping this information confidential by all means. We may also release your information when such a release is necessary in order to comply with the law, enforce our site policies or protect the rights, property or safety of InsureHealth Net SRL or of other parties. However, non-personally identifiable visitor information may be provided to other parties for marketing and advertising purposes or for other uses.</p> <br />
                    </li>

                    <li>
                        <h3>Data Security</h3>
                        <p>We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we use advanced physical, electronic and managerial procedures to safeguard and secure the information that we collect online.</p> <br />
                    </li>

                    <li>
                        <h3>External Links</h3>
                        <p>The site may contain links, ads or advertising banners that will lead you to other sites, belonging to third parties. Any kind of information, including personal information, given to such pages is not under InsureHealth Net SRL’s jurisdiction or authority, and this company cannot be held responsible for any usage of these sites. If you have concerns about how other web sites collect and use your personal information, make sure to read that site's own privacy policy. InsureHealth is not responsible for the privacy practices or for the content of these sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites</p> <br />
                    </li>
                </ol>
            </div>
        </div>
    )
}